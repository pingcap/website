import React from 'react'

const TOCRenderer = ({ children: items, inner }) => (
  <ul>
    {items &&
      items.map(({ url, title, items: childItems }) => {
        const Wrapper = inner ? React.Fragment : 'p'
        return (
          <li key={url}>
            <Wrapper>
              <a href={url}>{title}</a>
            </Wrapper>
            {childItems && <TOCRenderer inner>{childItems}</TOCRenderer>}
          </li>
        )
      })}
  </ul>
)

export default TOCRenderer
