By default, each component is backed by a `<div>` element. If you were
to look at a rendered component in your developer tools, you would see
a DOM representation that looked something like:

```html
<div id="ember180" class="ember-view">
  <h1>My Component</h1>
</div>
```

You can customize what type of element Ember generates for your
component, including its attributes and class names, by creating a
subclass of `Ember.Component` in your JavaScript.

### Customizing the Element

To use a tag other than `div`, subclass `Ember.Component` and assign it
a `tagName` property. This property can be any valid HTML5 tag name as a
string.

```javascript {data-filename=app/components/navigation-bar.js}
export default Ember.Component.extend({
  tagName: 'nav'
});
```

```handlebars {data-filename=app/templates/components/navigation-bar.hbs}
<ul>
  <li>{{#link-to 'home'}}Home{{/link-to}}</li>
  <li>{{#link-to 'about'}}About{{/link-to}}</li>
</ul>
```

### Customizing Class Names

You can also specify which class names are applied to the component's
element by setting its `classNames` property to an array of strings:

```javascript {data-filename=app/components/navigation-bar.js}
export default Ember.Component.extend({
  classNames: ['primary']
});
```

If you want class names to be determined by properties of the component,
you can use class name bindings. If you bind to a Boolean property, the
class name will be added or removed depending on the value:

```javascript {data-filename=app/components/todo-item.js}
export default Ember.Component.extend({
  classNameBindings: ['isUrgent'],
  isUrgent: true
});
```

This component would render the following:

```html
<div class="ember-view is-urgent"></div>
```

If `isUrgent` is changed to `false`, then the `is-urgent` class name will be removed.

By default, the name of the Boolean property is dasherized. You can customize the class name
applied by delimiting it with a colon:

```javascript {data-filename=app/components/todo-item.js}
export default Ember.Component.extend({
  classNameBindings: ['isUrgent:urgent'],
  isUrgent: true
});
```

This would render this HTML:

```html
<div class="ember-view urgent">
```

Besides the custom class name for the value being `true`, you can also specify a class name which is used when the value is `false`:

```javascript {data-filename=app/components/todo-item.js}
export default Ember.Component.extend({
  classNameBindings: ['isEnabled:enabled:disabled'],
  isEnabled: false
});
```

This would render this HTML:

```html
<div class="ember-view disabled">
```

You can also specify a class which should only be added when the property is
`false` by declaring `classNameBindings` like this:

```javascript {data-filename=app/components/todo-item.js}
export default Ember.Component.extend({
  classNameBindings: ['isEnabled::disabled'],
  isEnabled: false
});
```

This would render this HTML:

```html
<div class="ember-view disabled">
```

If the `isEnabled` property is set to `true`, no class name is added:

```html
<div class="ember-view">
```

If the bound property's value is a string, that value will be added as a class name without
modification:

```javascript {data-filename=app/components/todo-item.js}
export default Ember.Component.extend({
  classNameBindings: ['priority'],
  priority: 'highestPriority'
});
```

This would render this HTML:

```html
<div class="ember-view highestPriority">
```

### Customizing Attributes

You can bind attributes to the DOM element that represents a component
by using `attributeBindings`:

```javascript {data-filename=app/components/link-item.js}
export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],
  href: "http://emberjs.com"
});
```

You can also bind these attributes to differently named properties:

```javascript {data-filename=app/components/link-item.js}
export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['customHref:href'],
  customHref: "http://emberjs.com"
});
```

<!-- ### Example

Here is an example todo application that shows completed todos with a
red background:

<a class="jsbin-embed" href="http://jsbin.com/duzala/1/embed?live">JS Bin</a><script src="https://static.jsbin.com/js/embed.js"></script>

**Note:** The binding functionality in this very simple example could also be implemented without
the use of `Ember.Component` but by simply [binding element attributes](../../templates/binding-element-attributes/) or [binding element class names](../../templates/binding-element-class-names/). -->
