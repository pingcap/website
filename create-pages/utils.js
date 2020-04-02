exports.replaceTitle = function(title) {
  return title.replace(/[^\w-]/g, '-')
}
