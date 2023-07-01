# A React component to easily render tabs dynamically

[![Latest Version on NPM](https://img.shields.io/npm/v/react-dynamic-tabs.svg?style=flat-square)](https://npmjs.com/package/react-dynamic-tabs)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/react-dynamic-tabs.svg?style=flat-square)](https://www.npmjs.com/package/react-dynamic-tabs)

The package contains a [React](https://reactjs.org/) component to easily display tabs, dynamically.

### React Dynamic Tabs allows you to:

- Set content of tabs to be whatever you want.
- Set tab buttons to be wherever you want.
- Style tabs and tab content areas to look however you want.

Its goal is to be the most open-ended, flexible tab system you can find.

It is based on its Vue 3 counterpart, [vue3-dynamic-tabs](https://www.npmjs.com/package/vue3-dynamic-tabs), which is based on the popular Vue 2 package, [vue-tabs-component](https://www.npmjs.com/package/vue-tabs-component).

# This is how it can be used:

```jsx
import React from "react";
import { DynamicTabSettings, DynamicTab, DynamicTabContent, DynamicTabProvider } from "react-dynamic-tabs";

const App: React.FC = () => {
  return (
    <DynamicTabProvider>
      <DynamicTabSettings options={{ useUrlFragment: true, defaultTabHash: "test-1" }} />
      <DynamicTab tag="a" tabName="tab 1" />
      <DynamicTab tag="a" tabName="tab 2" />
      <DynamicTabContent tabName="tab 1">This is the content of the first tab</DynamicTabContent>
      <DynamicTabContent tabName="tab 2">This is the content of the second tab</DynamicTabContent>
    </DynamicTabProvider>
  );
};

export default App;
```

Be sure to include the components in the correct order, as seen above to get the components to work as intended. These can be placed anywhere on the page, as long as they follow this order.

`<DynamicTabSettings>` is where the other components are initialized so be sure to always include that first.

Then you add the `<DynamicTab>` components, followed by the `<DynamicTabContent>` components. Both of these again, in correct order.

`<DynamicTab>` and `<DynamicTabContent>` components are linked by `'tabName'` attributes.

When reloading the page the component will automatically [display the tab that was previously opened](https://github.com/Tapha/react-dynamic-tabs#disable-modifying-the-url-fragment).

The rendered output adheres to [the ARIA specification](http://heydonworks.com/practical_aria_examples/#tab-interface).

## Installation

You can install the package via yarn:

```bash
yarn add react-dynamic-tabs
```

or npm:

```bash
npm install react-dynamic-tabs --save
```

## Usage

First, import the required components from the package:

```jsx
import { DynamicTabSettings, DynamicTab, DynamicTabContent, DynamicTabProvider } from "react-dynamic-tabs";
```

Next, use the components in your JSX:

```jsx
<DynamicTabProvider>
  <DynamicTabSettings options={{ useUrlFragment: true, defaultTabHash: "test-1" }} />
  <DynamicTab tag="a" tabName="tab 1" />
  <DynamicTab tag="a" tabName="tab 2" />
  <DynamicTabContent tabName="tab 1">This is the content of the first tab</DynamicTabContent>
  <DynamicTabContent tabName="tab 2">This is the content of the second tab</DynamicTabContent>
</DynamicTabProvider>
```

By default, it will show the first tab.

## Options

These options can be added to the `<DynamicTabSettings>` component. This is an example of how to use the options:

```jsx
<DynamicTabSettings options={{ useUrlFragment: true, defaultTabHash: "test-1" }} />
```

Available options:

| Option            | Default | Description                                                                 |
| ----------------- | ------- | --------------------------------------------------------------------------- |
| `useUrlFragment`  | `false` | If true, will synchronize the current tab with the URL fragment (hash).     |
| `defaultTabHash`  | `null`  | Specifies the default tab to be displayed, identified by its tab name.      |

## Methods

These are methods you can use on the `<DynamicTab>` component.

| Method      | Description                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| `activate()` | Activates the tab. This will show the content for that tab and hide all others. |

## Events

These events are emitted by the `<DynamicTab>` component.

| Event       | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `activated` | This event is emitted when a tab is activated.                          |

## Styles

You can style the tab links and the tab panels to suit your needs. Here are some example classes:

```jsx
<DynamicTab tag="a" tabName="tab 1" className="tab-link" />
<DynamicTabContent tabName="tab 1" className="tab-content">This is the content of the first tab</DynamicTabContent>
```

In your CSS, you could then add styles like:

```css
.tab-link {
  padding: 10px;
  background-color: lightgrey;
  color: black;
}

.tab-content {
  padding: 20px;
  border: 1px solid lightgrey;
}
```

## Testing

The package contains tests to ensure that it works as expected. You can run the tests using the following command:

```bash
yarn test
```

## Contributing

If you find an issue with this package or have suggestions for improvements, please submit an issue on the GitHub repository. Pull requests are also welcome!

## Credits

- [Spatie](https://spatie.be)
- [Freek Van der Herten](https://github.com/freekmurze)
- [Willem Van Bockstal](https://github.com/willemvb)
- [Sebastian De Deyne](https://github.com/sebastiandedeyne)
- [Jakub Potocký](https://github.com/jacobs63)
- [All Contributors](../../contributors)

**This package is a fork of a fork of the popular `spatie/vue-tabs-component` Vue 2 package, which has been discontinued by Spatie. As well as most recently, the `jacobs63/vue3-tabs-component` fork of that library, by [Jakub Potocký](https://github.com/jacobs63).**

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.