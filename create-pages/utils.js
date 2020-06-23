exports.replaceTitle = function(title) {
  let _title = title
  const re = /\/?.*\.md/
  if (re.test(_title)) {
    // use relative path as pathname
    _title = _title.replace('.md', '').toLowerCase()
  } else {
    // use title of frontmatter as pathname
    _title = _title.replace(/[^\w-]/g, '-')
  }

  return _title
}
