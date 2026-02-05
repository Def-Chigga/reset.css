# @defchigga/reset.css

一个现代、简洁且低优先级的 CSS 重置库，为 Web 项目提供一致的样式基础。

简体中文 | [English](./README.md)

## 特性

- **现代默认值**：全局启用 `box-sizing: border-box`，使用现代系统字体栈，并为 HTML5 元素提供合理的默认样式。
- **低优先级**：完全使用 `:where()` 伪类选择器构建，优先级为 0，确保您可以轻松覆盖任何样式，无需使用 `!important`。
- **无障碍支持**：包含 `:focus-visible` 焦点样式，支持 `prefers-reduced-motion` 减弱动画，以及无障碍友好的默认设置。
- **表单规范化**：统一了表单元素的字体继承、颜色继承和跨浏览器表现。
- **移动端友好**：优化了触摸设备体验（如点击高亮、文本大小调整等）。
- **轻量级**：无任何外部依赖，体积极小。
- **打印优化**：内置打印样式，确保网页打印时的可读性。

## 安装

使用 npm、yarn 或 pnpm 安装：

```bash
npm install @defchigga/reset.css
# 或
yarn add @defchigga/reset.css
# 或
pnpm add @defchigga/reset.css
```

## 使用方法

### 1. HTML

通过 CDN 或本地 `node_modules` 引入。

**CDN (推荐):**

```html
<link rel="stylesheet" href="https://unpkg.com/@defchigga/reset.css/reset.css" />
```

**本地 node_modules:**

```html
<link rel="stylesheet" href="node_modules/@defchigga/reset.css/reset.css" />
```

### 2. CSS / SCSS

在样式表中直接导入。

```css
@import '@defchigga/reset.css';
```

### 3. JavaScript / TypeScript

在入口文件中导入（支持 Vite, Webpack, Rollup 等）。

```javascript
import '@defchigga/reset.css'
```

## 包含内容

- **盒模型**：全局 `box-sizing: border-box`。
- **排版**：使用系统字体栈，流畅的行高，以及优化的文本渲染 (`text-rendering: optimizeLegibility`)。
- **媒体**：响应式图片 (`max-width: 100%`)，且默认使用 `display: block` 消除图片底部的空白间隙。
- **表单**：表单控件继承字体和颜色，按钮和输入框样式统一。
- **无障碍**：使用 `:focus-visible` 提供清晰的焦点指示。
- **其他**：统一的 `tab-size: 4`，链接的 `text-decoration-skip-ink` 优化等。

## 自定义

由于本库使用 `:where()`，其优先级为 0。您可以非常容易地覆盖默认样式：

```css
/* 您的样式可以轻松覆盖重置样式 */
body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; /* 覆盖默认的系统字体栈 */
}
```

## 浏览器支持

支持所有支持 `:where()` 伪类的现代浏览器。

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

对于旧版浏览器，您可能需要 Polyfill 或使用传统的 Reset 库。

## 许可证

MIT © [DefChigga](https://github.com/Def-Chigga)
