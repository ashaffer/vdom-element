
# vdom-element

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A sprinkle of component and JSX sugar on top of virtual-dom's `h`.  Uses [virtual-component](https://github.com/ashaffer/virtual-component) to give your virtual-dom tree a React/deku-like component API.

## Installation

    $ npm install vdom-element

## Usage

```javascript
import element from 'vdom-element'
import Dropdown from 'components/dropdown'

function render () {
  return (
    <div>
      <Dropdown open={props.dropdownOpen} />
    </div>
  )
}
```

Write react-style jsx using components and all of the things you're used to.  vdom-element also allows you to use the native html property names for things like `class` instead of `className`.  You can still also use `className` if you want or if you want to remain compatible with older browsers, but you are also free to use the more idiomatic `class`/`for`/etc.

## Extra sugar

### Class object/array syntax

vdom-element also gives you a tiny bit of extra sugar for your class names.  You may pass an array of class names, or an object mapping class names to boolean values in either the `class` or `className` properties.  E.g.

```javascript
function render ({props}) {
  return (
    <div class={{completed: props.completed}}>
      {props.todoText}
    </div>
  )
}
```

### Focusing an element

If you want to set focus on an input or other element, you may do so easily and declaratively, used the special `focused` property.  When it is truthy, `node.focus()` will be called when the element is rendered.  When falsy, it does nothing.  Example:

```javascript
function render ({props}) {
  const {editing, text} = props

  return (
    <div>
      <div>{text}</div>
      <input type='text' focused={editing}
    </div>
  )
}
```

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
