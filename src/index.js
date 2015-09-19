/**
 * Imports
 */

import h from 'virtual-dom/h'
import component from 'virtual-component'
import flatten from 'flatten-array'

/**
 * Element
 */

function element (tag, attrs, ...children) {
  // Flatten children and strip falsy elements
  children = flatten(children).filter(Boolean)

  if (typeof tag !== 'string') {
    attrs.children = children
    return component(tag, attrs)
  }

  return h(tag, attrs, children)
}

/**
 * Exports
 */

export default element
