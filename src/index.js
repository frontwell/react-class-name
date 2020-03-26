import fromClass from '@reactory/from-class'

/**
 * A small wrapper function around `@reactory/from-class` to manage CSS classes
 * via the className attribute using spread syntax.
 *
 * @function className
 *
 * @param {string|Array|Object} [classes] - A CSS class name, or an array, or object of class names.
 *
 * @returns {{className: string|null}} - An object with the `className` key containing the processed class or classes.
 *                                       If all and every class/classes are falsy, the `className` key will be null.
 */
export default function className (...classes) {
  return {
    className: fromClass(...classes)
  }
}
