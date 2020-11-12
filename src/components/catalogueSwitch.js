import React from 'react'
import { Link } from 'gatsby'

import '../styles/components/catalogueSwitch.sass'

const CatalogueSwitch = React.memo(({ items }) => {
  const className = `CatalogueSwitch`
  const classNameItem = `${className}-item`
  const classNameItemLink = `${classNameItem}-link`
  const classNameItemLinkActive = `${classNameItemLink}-active`
  return (
    <ul className={className}>
      {items.map((v, k) => (
        <li className={classNameItem} key={v.url}>
          <Link
            to={v.url}
            className={classNameItemLink}
            activeClassName={classNameItemLinkActive}
          >
            {v.name}
          </Link>
        </li>
      ))}
    </ul>
  )
})

export default CatalogueSwitch
