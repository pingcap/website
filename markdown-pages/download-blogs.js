const fs = require('fs')
const chalk = require('chalk')
const log = console.log
const http = require('./http')
const { createReplaceBlogImagePathStream } = require('./utils')

const isDev = process.env.NODE_ENV === 'development'
const blogName = process.argv[2]

const blogsURL = '/repos/pingcap/blog/contents'
const blogURL = path => `/repos/pingcap/blog/contents/${path}`

async function downloadBlogs() {
  let blogs

  try {
    blogs = (await http.get(blogsURL)).data
  } catch (error) {
    log(chalk.red('Failed to get all blog names. Please check your network'))
    return
  }

  blogs = blogs
    .map(b => ({ name: b.name }))
    .filter(b => b.name.endsWith('.md'))
    .filter(b => b.name !== 'README.md')
  log(chalk.blue('Start downloading...'))

  if (blogName && isDev) {
    if (blogs.map(blog => blog.name).includes(blogName)) {
      blogs = [{ name: blogName }]
      log(chalk.blue('Downloading: ' + blogName))
    } else {
      log(chalk.red("Can't find this blog: " + blogName))
      return
    }
  }

  if (!blogName && isDev) {
    blogs = [blogs[0]]
    log(chalk.blue('No blog name specified. Use first blog for development.'))
    log(chalk.blue('Downloading: ' + blogs[0].name))
  }

  let blogIndex = 1
  blogs.forEach(async blog => {
    const distPath = `${__dirname}/blogs/${blog.name}`
    const writeStream = fs.createWriteStream(distPath)
    writeStream.on('close', () => {
      log(chalk.blue(`(${blogIndex++}) Downloaded: `) + blog.name)
    })

    const data = (
      await http({
        method: 'GET',
        url: blogURL(blog.name),
        responseType: 'stream',
      })
    ).data

    data.pipe(createReplaceBlogImagePathStream()).pipe(writeStream)
  })
}

downloadBlogs()
