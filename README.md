# @defchigga/reset.css

A modern, concise, and low-specificity CSS reset library that provides a consistent styling foundation for web projects.

[简体中文](./README.zh-CN.md) | English

## Features

- **Modern Defaults**: Uses `box-sizing: border-box`, modern system font stack, and sane defaults for HTML5 elements.
- **Low Specificity**: Built with `:where()` selector to ensure zero specificity issues, making it easy to override.
- **Accessibility**: Includes `:focus-visible` styles, `prefers-reduced-motion` support, and accessibility-friendly defaults.
- **Form Normalization**: Consistent styling for form elements across browsers.
- **Mobile Friendly**: optimized for touch devices and different screen sizes.
- **Lightweight**: No external dependencies.
- **Print Optimized**: Includes print styles for better printing experience.

## Installation

Install via npm, yarn, or pnpm:

```bash
npm install @defchigga/reset.css
# or
yarn add @defchigga/reset.css
# or
pnpm add @defchigga/reset.css
```

## Usage

### 1. HTML

Load directly from a CDN or local `node_modules`.

**CDN (Recommended):**

```html
<link rel="stylesheet" href="https://unpkg.com/@defchigga/reset.css/reset.css" />
```

**Local node_modules:**

```html
<link rel="stylesheet" href="node_modules/@defchigga/reset.css/reset.css" />
```

### 2. CSS / SCSS

Import directly in your stylesheets.

```css
@import '@defchigga/reset.css';
```

### 3. JavaScript / TypeScript

Import in your entry file (supported by Vite, Webpack, Rollup, etc.).

```javascript
import '@defchigga/reset.css'
```

## What's Included

- **Box Model**: Global `box-sizing: border-box`.
- **Typography**: System font stack, fluid line-height, and improved text rendering.
- **Media**: Responsive images (`max-width: 100%`) and block display to remove magic whitespace.
- **Forms**: Inherited fonts and colors, consistent buttons and inputs.
- **Accessibility**: Clear focus indicators using `:focus-visible`.
- **Tab Size**: Consistent `tab-size: 4`.

## Customization

Since this library uses `:where()`, its specificity is 0. You can easily override any style without using `!important` or complex selectors.

```css
/* Your styles will easily override the reset */
body {
  font-family: 'Inter', sans-serif; /* Overrides the default system font stack */
}
```

## Browser Support

Supports all modern browsers that support `:where()` pseudo-class.

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

For older browsers, you may need a polyfill or a different reset.

## License

MIT © [DefChigga](https://github.com/Def-Chigga)
