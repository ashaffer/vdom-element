/**
 * Imports
 */

import h from 'virtual-dom/h'
import component from 'virtual-component'

/**
 * Property map
 */

const propertyMap = {
  // transformed name
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv',
  // case specificity
  'accesskey': 'accessKey',
  'autocomplete': 'autoComplete',
  'autoplay': 'autoPlay',
  'colspan': 'colSpan',
  'contenteditable': 'contentEditable',
  'contextmenu': 'contextMenu',
  'enctype': 'encType',
  'formnovalidate': 'formNoValidate',
  'hreflang': 'hrefLang',
  'novalidate': 'noValidate',
  'readonly': 'readOnly',
  'rowspan': 'rowSpan',
  'spellcheck ': 'spellCheck',
  'srcdoc': 'srcDoc',
  'srcset': 'srcSet',
  'tabindex': 'tabIndex'
}

/**
 * Element
 */

function element (tag, attrs, ...children) {
  // Flatten children and strip falsy elements
  children = children.filter(Boolean)

  if (typeof tag !== 'string') {
    return component(tag, attrs, children)
  }

  return h(tag, normalizeAttrs(attrs), children)
}

/**
 * Normalize attributes (e.g. class -> className) so that
 * we can use standard HTML names for things
 *
 * Note: This function is mutative for performance.  I think that is probably always ok because of the way attrs
 * are passed around?  But if it ever gets to be a problem it should be changed.
 */

function normalizeAttrs (attrs) {
  for (let key in attrs) {
    if (attrs.hasOwnProperty(key) && propertyMap[key]) {
      attrs[propertyMap[key]] = attrs[key]
      delete attrs[key]
    }
  }

  return attrs
}

/**
 * Exports
 */

export default element
