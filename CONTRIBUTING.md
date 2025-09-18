# 贡献指南

感谢您对@defchigga/reset.css项目的关注和支持！我们非常欢迎并感谢各种形式的贡献。

## 开发环境设置

1. **克隆仓库**
   您可以从GitHub或Gitee克隆仓库：

   ```bash
   # 从GitHub克隆
   git clone https://github.com/Def-Chigga/lib-reset.css.git
   cd lib-reset.css

   # 或从Gitee克隆
   git clone https://gitee.com/defchigga/lib-reset.css.git
   cd lib-reset.css
   ```

2. **安装依赖**

```bash
npm install -g pnpm  # 安装pnpm
pnpm install         # 安装项目依赖
```

3. **开发模式**

```bash
pnpm run dev
```

4. **构建项目**

```bash
pnpm run build
```

5. **格式化代码**

```bash
pnpm run format
```

## 贡献流程

1. **创建分支**
   从master分支创建一个新的功能分支：

```bash
git checkout master
git pull
git checkout -b feature/your-feature-name
```

2. **提交更改**
   提交您的更改，请使用清晰的提交信息：

```bash
git add .
git commit -m "描述您的更改"
```

3. **推送到远程**

```bash
git push origin feature/your-feature-name
```

4. **创建Pull Request**
   在GitHub上创建一个Pull Request，并描述您的更改和动机。

## 代码规范

- 遵循项目现有的代码风格
- 确保代码通过格式化检查：`pnpm run format:check`
- 确保项目能够成功构建：`pnpm run build`

## 报告问题

如果您发现问题，请在GitHub上创建一个issue，并尽可能提供详细的信息：

- 问题的描述
- 复现步骤
- 预期行为
- 实际行为
- 环境信息（浏览器、操作系统等）

## 行为准则

请尊重所有贡献者，保持友好和建设性的沟通。

## 许可证

通过贡献此项目，您同意您的贡献将在MIT许可证下发布。
