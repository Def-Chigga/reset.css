# @defchigga/reset.css

一个现代、简洁的CSS重置和规范化样式库，为Web项目提供一致的样式基础。
A modern and concise CSS reset and normalization library that provides a consistent styling foundation for web projects.

## 特性 / Features

- 现代化CSS重置，适用于各种Web项目
- Modern CSS reset suitable for various web projects
- 跨浏览器兼容性优化
- Cross-browser compatibility optimization
- 简洁而全面的样式重置
- Concise and comprehensive style reset
- 响应式设计支持
- Responsive design support
- 轻量级，无额外依赖
- Lightweight with no additional dependencies
- 支持CSS变量，方便自定义
- Support for CSS variables for easy customization

## 安装 / Installation

使用npm、yarn或pnpm安装：

Install with npm, yarn or pnpm:

```bash
npm install @defchigga/reset.css
# 或 / or
yarn add @defchigga/reset.css
# 或 / or
pnpm add @defchigga/reset.css
```

## 使用方法 / Usage

### 直接在HTML中引入

Directly include in HTML:

```html
<link rel="stylesheet" href="node_modules/@defchigga/reset.css/reset.css" />
```

### 在JavaScript/TypeScript项目中导入

Import in JavaScript/TypeScript projects:

```javascript
// ES模块导入 / ES module import
import '@defchigga/reset.css'

// CommonJS导入 / CommonJS import
require('@defchigga/reset.css')
```

### 在CSS文件中引用

Reference in CSS files:

```css
/* 使用CSS的@import规则 / Use CSS @import rule */
@import '~@defchigga/reset.css';

/* 或者在SCSS中使用 / Or use in SCSS */
@import '~@defchigga/reset.css/reset.css';
```

## 主要重置内容 / Main Reset Contents

1. **核心元素重置 / Core Element Reset**
   - 重置HTML和body的默认样式
   - Reset default styles for HTML and body
   - 统一字体设置
   - Uniform font settings
   - 规范化盒模型
   - Normalize box model
   - 设置基础文本颜色和背景色
   - Set basic text color and background color

2. **排版元素重置 / Typography Element Reset**
   - 统一标题、段落、列表等元素的样式
   - Uniform styles for headings, paragraphs, lists, etc.
   - 规范文本装饰和强调样式
   - Standardize text decoration and emphasis styles
   - 重置引用、代码块等特殊文本格式
   - Reset special text formats like quotes and code blocks

3. **表单元素规范化 / Form Element Normalization**
   - 统一表单控件样式
   - Uniform form control styles
   - 优化表单交互体验
   - Optimize form interaction experience
   - 确保跨浏览器表单行为一致性
   - Ensure cross-browser form behavior consistency

4. **媒体和嵌入内容 / Media and Embedded Content**
   - 确保图片、视频等媒体元素的响应式行为
   - Ensure responsive behavior for images, videos, etc.
   - 重置iframe和canvas等嵌入内容
   - Reset embedded content like iframes and canvas

5. **交互元素优化 / Interactive Element Optimization**
   - 规范化链接样式和状态
   - Standardize link styles and states
   - 优化按钮交互
   - Optimize button interaction
   - 设置适当的焦点样式
   - Set appropriate focus styles

## 自定义样式 / Customization

您可以在导入重置样式后，添加自己的自定义样式来覆盖默认值：

You can add your own custom styles to override default values after importing the reset styles:

```css
/* 导入重置样式 / Import reset styles */
@import '~@defchigga/reset.css';

/* 添加您的自定义样式 / Add your custom styles */
body {
  font-family: 'Your Preferred Font', sans-serif;
  color: #333;
  background-color: #f5f5f5;
}
```

## 浏览器支持 / Browser Support

- Chrome (最新2个版本 / latest 2 versions)
- Firefox (最新2个版本 / latest 2 versions)
- Safari (最新2个版本 / latest 2 versions)
- Edge (最新2个版本 / latest 2 versions)
- IE 11 (基础支持 / basic support)

## 许可证 / License

本项目采用[MIT许可证](LICENSE.md)。

This project is licensed under the [MIT License](LICENSE.md).

## 贡献 / Contributing

欢迎贡献代码！请阅读[贡献指南](CONTRIBUTING.md)了解更多信息。

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) for more information.

## 仓库地址 / Repository Links

- GitHub: https://github.com/Def-Chigga/lib-reset.css
- Gitee: https://gitee.com/defchigga/lib-reset.css

## 致谢 / Acknowledgements

感谢以下项目提供的灵感和参考：

Thanks to the following projects for inspiration and reference:

- [normalize.css](https://github.com/necolas/normalize.css)
- [sanitize.css](https://github.com/csstools/sanitize.css)
- [reset.css](https://meyerweb.com/eric/tools/css/reset/)
