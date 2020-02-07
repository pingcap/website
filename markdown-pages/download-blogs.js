const fs = require('fs')
const chalk = require('chalk')
const log = console.log
const http = require('./http')
const { createReplaceBlogImagePathStream } = require('./utils')

const isDev = process.env.NODE_ENV === 'development'

const blogsURL = '/repos/pingcap/blog/contents'
const blogURL = path => `/repos/pingcap/blog/contents/${path}`

async function downloadBlogs() {
  let blogs = (await http.get(blogsURL)).data
  blogs = blogs
    .map(b => ({ name: b.name }))
    .filter(b => b.name.endsWith('.md'))
    .filter(b => b.name !== 'README.md')
  if (isDev) {
    blogs = [blogs[0]]
  }

  let blogIndex = 1
  blogs.map(async blog => {
    const distPath = `${__dirname}/blogs/${blog.name}`
    const writeStream = fs.createWriteStream(distPath)
    writeStream.on('close', () => {
      log(chalk.blue(`(${blogIndex++})Downloaded: `) + blog.name)
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
