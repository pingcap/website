const fs = require('fs')
const chalk = require('chalk')
const log = console.log
const http = require('./http')
const axios = require('axios').default
const toReadableStream = require('to-readable-stream')
const {
  createReplaceBlogImagePathStream,
  createReplaceCopyableStream,
} = require('./utils')

const isDev = process.env.NODE_ENV === 'development'
const blogName = process.argv[2]

async function downloadBlogs(
  blogsURL,
  blogsPath,
  locale,
  ignores = ['README.md']
) {
  let blogs

  try {
    blogs = (await http.get(blogsURL)).data
  } catch (error) {
    log(chalk.red(error.toString()))
    log(
      chalk.red(
        'Failed to get all blog names. Please check your network or refer to the error message.'
      )
    )
    return
  }

  blogs = blogs
    .map((b) => ({ name: b.name, downloadURL: b.download_url }))
    .filter((b) => b.name.endsWith('.md'))
    .filter((b) => ignores.indexOf(b.name) === -1)
  log(chalk.blue('Start downloading...'))

  if (blogName && isDev) {
    if (blogs.map((blog) => blog.name).includes(blogName)) {
      blogs = [{ name: blogName }]
      log(chalk.blue('Downloading: ' + blogName))
    } else {
      log(chalk.red("Can't find this blog: " + blogName))
      return
    }
  }

  if (!blogName && isDev) {
    blogs = [blogs[0], blogs[1], blogs[2]]
    log(chalk.blue('No blog name specified. Use first blog for development.'))
    log(chalk.blue('Downloading: ' + blogs[0].name))
  }

  let blogIndex = 1
  blogs.forEach(async (blog) => {
    const distPath = `${__dirname}/${blogsPath}/${blog.name}`
    const writeStream = fs.createWriteStream(distPath)
    writeStream.on('close', () => {
      log(chalk.blue(`(${blogIndex++}) Downloaded: `) + blog.name)
    })

    toReadableStream((await axios.get(blog.downloadURL)).data)
      .pipe(createReplaceBlogImagePathStream(locale))
      .pipe(createReplaceCopyableStream())
      .pipe(writeStream)
  })
}

downloadBlogs('/repos/pingcap/blog/contents', 'blogs', 'en', ['README.md'])
downloadBlogs('/repos/pingcap/blog-cn/contents', 'zh/blogs', 'zh', [
  'README.md',
  'TOC-User-Case.md',
])
