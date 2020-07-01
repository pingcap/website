export default function replaceInternalHref(type) {
    const aTags = document.querySelector('.blog-content').getElementsByTagName('a')
    const re = /\/?.*\.md/
    const absPathRegx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}/
  
    Array.from(aTags).forEach((a) => {
      const hrefText = a.getAttribute('href')
  
      if (!absPathRegx.test(hrefText) && re.test(hrefText)) {
        a.href = '/blog/' + hrefText.replace('.md', '')
      }
    })
  }
  