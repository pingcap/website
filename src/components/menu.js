import React, { useState } from 'react'

const useMenu = (menuItems, defaultKey) => {
  const [selectedKey, setSelectedKey] = useState(defaultKey)
  const selectedMenuItem = menuItems[selectedKey]
  return [selectedKey, selectedMenuItem, setSelectedKey]
}

const Menu = ({
  children,
  selectedKey,
  setSelectedKey,
  className,
  selectedClassName,
}) => {
  return (
    <div className={className}>
      {children.map((child) => {
        const props = {
          className:
            selectedKey === child.key
              ? child.props.className + ' ' + selectedClassName
              : child.props.className,
          onSelect: setSelectedKey,
        }
        const el = React.cloneElement(child, props)
        return el
      })}
    </div>
  )
}

const MenuItem = ({ children, onSelect, menuKey, className }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      onClick={() => {
        onSelect(menuKey)
      }}
      onKeyDown={() => {
        onSelect(menuKey)
      }}
    >
      {children}
    </div>
  )
}

const MenuGenerator = ({ menuConfig }) => {
  const { className, selectedClassName, defaultKey } = menuConfig.menu
  const menuItems = menuConfig.menuItems.reduce((prev, curr) => {
    prev[curr.key] = {
      el: curr.linkedItem,
      props: curr.props,
    }
    return prev
  }, {})

  const [selectedKey, selectedMenuItem, setSelectedKey] = useMenu(
    menuItems,
    defaultKey,
    selectedKey
  )

  const allPropSymbol = Symbol.for('allProps')

  return (
    <>
      <Menu
        className={className}
        selectedClassName={selectedClassName}
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
      >
        {menuConfig.menuItems.map((item) => {
          return (
            <MenuItem
              key={item.key}
              menuKey={item.key}
              className={item.className}
            >
              {item.children}
            </MenuItem>
          )
        })}
      </Menu>
      {React.createElement(
        selectedMenuItem.el,
        selectedMenuItem.props[Symbol.for('isProxy')]
          ? selectedMenuItem.props[Symbol.for('allProps')]
          : selectedMenuItem.props
      )}
    </>
  )
}

export { useMenu, Menu, MenuItem, MenuGenerator }
