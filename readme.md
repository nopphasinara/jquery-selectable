# jquery.selectable.js - Turn a collection of HTML elements into a selectable list

Developed by Cory LaViska for A Beautiful Site, LLC

Licensed under the MIT license: http://opensource.org/licenses/MIT

## Overview:

This plugin provides a minimal, lightweight solution to turn a collection of HTML elements into a selectable list.

Features:

- Turn any collection of elements into a selectable list
- Supports single and multiple selections
- Flexible markup! Molds to your HTML and CSS.
- Customizable class names
- Customizable getter
- Callbacks for click, change
- API to get, set, select all, select none, and disable selection
- Compact! (About 230 lines)

## Attaching the plugin

Minimal example that attached the plugin to a group of list items:

```html
<ul class="my-list">
    <li data-value="some-val-1">Item 1</li>
    <li data-value="some-val-2">Item 2</li>
    <li data-value="some-val-3">Item 3</li>
</ul>
```

```javascript
$('.my-list').selectable();
```

This will let you select any `<li>` inside of `.my-list` by clicking on it. When an item is selected, it will receive the `active` class by default. For flexibility, the plugin doesn't add styles to selected elements — this is left to your stylesheet.

Example with all possible options:

```javascript
$('.my-list').selectable({
    // Options (default shown)
    getValue: function() {
        return $(this).attr('data-value');
    },
    items: 'li',
    multiple: false,
    disabledClass: 'disabled',
    selectedClass: 'selected',

    // Callbacks
    click: function(value, element) { ... },
    change: function(values, elements) { ... }
});
```

### Options

- `getValue`: a getter function that returns the value of an element in your collection. By default, the plugin will use the `data-value` attribute.

- `items`: a selector used to group items into the collection. Defaults to `li`. Try `a` to make a group of links selectable or `.my-class` to make all items with a specific class selectable. (The selector will only match children of the container that you instantiated the plugin on.)

- `multiple`: whether or not multiple selections are allowed. Defaults to `false`.

- `disabledClass`: a class to apply to each item when the control is disabled. Defaults to `disabled`.

- `selectedClass`: a class to apply to each selected item. Defaults to `selected`.

### Callbacks

All callbacks are called in the context of the respective container you instantiated the plugin on.

For both callbacks, two arguments are returned. The first is an array of selected values. The second is a jQuery object of selected elements.

- `change`: runs when the selection changes, including when changes are made programmatically.
- `click`: runs when an item is clicked. Returning `false` will prevent selection.

### Methods

Methods are called using this syntax:

```javascript
$('.my-list').selectable('method', arg);
```

The following API methods are supported:

- `create` (default): initializes the plugin on the given container.

- `destroy`: returns the control to its pre-initialized state.

- `getElements`: returns a jQuery object containing all elements in the collection. Passing `true` as an argument will only return selected elements.

- `selectAll`: selects all items in the collection.

- `selectNone`: clears selection from all items in the collection.

- `value`: when no argument is passed, this method returns an array of values of the current selection. When a string or array is passed as an argument, this method will set the selection to any item matching the specified values.