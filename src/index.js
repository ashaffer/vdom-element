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
  // Flatten children and strip most falsy elements (notably not '0', and 0)
  children = children.filter(child => ! (child === undefined || child === null || child === false || child === ''))

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
  if (!attrs) return attrs

  for (let key in attrs) {
    if (attrs.hasOwnProperty(key) && propertyMap[key]) {
      attrs[propertyMap[key]] = attrs[key]
      delete attrs[key]
    }
  }

  if (attrs.className) {
    attrs.className = classSugar(attrs.className)
  }

  return attrs
}

/**
 * Accept arrays of class names or objects mapping boolean
 * values to class names: e.g. {complete: true}
 */

function classSugar (cls) {
  if (isPlainObject(cls)) {
    cls = Object.keys(cls).filter(key => cls[key])
  }

  return Array.isArray(cls)
    ? cls.join(' ')
    : cls
}

/**
 * Check if something is a plain object
 */

function isPlainObject (o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

/**
 * Exports
 */

export default element
