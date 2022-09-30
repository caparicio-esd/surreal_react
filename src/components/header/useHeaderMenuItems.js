import { useState } from 'react'

export default (menuItems) => {
  const originalActiveIndex = menuItems.findIndex((menuItem) => menuItem.active)
  if (originalActiveIndex < 0) originalActiveIndex = 1

  const [activeIndex, setActiveIndex] = useState(originalActiveIndex)
  const updateActiveIndex = (index) => {
    setActiveIndex(index)
  }
  return [activeIndex, updateActiveIndex]
}
