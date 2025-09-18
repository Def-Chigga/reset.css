// TypeScript declarations for @defchigga/reset.css

/**
 * 现代CSS重置和规范化样式库
 * 为Web项目提供一致的样式基础
 */

declare module '@defchigga/reset.css' {
  /**
   * CSS重置样式模块
   * 导入时会自动应用全局样式重置
   */
  const resetCss: void
  export = resetCss
}

// 支持CSS modules的TypeScript声明
declare module '*.css' {
  const content: { [className: string]: string }
  export = content
}
