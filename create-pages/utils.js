exports.replaceTitle = function(title) {
  if (title.endsWith('.md')) {
    return title.replace('.md', '')
  } else {
    return title.replace(/[^\w-]/g, '-')
  }
}
