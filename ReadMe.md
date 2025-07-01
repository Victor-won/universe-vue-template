# universe-vue-template 开发使用文档

## 目录

1. [项目简介](#项目简介)
2. [环境准备](#环境准备)
3. [项目结构说明](#项目结构说明)
4. [依赖安装](#依赖安装)
5. [开发流程](#开发流程)
    - [新建组件](#新建组件)
    - [组件开发规范](#组件开发规范)
    - [组件文档与国际化](#组件文档与国际化)
    - [单元测试](#单元测试)
    - [Storybook 预览与文档](#storybook-预览与文档)
6. [主题系统与主题编辑器](#主题系统与主题编辑器)
7. [打包与类型声明](#打包与类型声明)
8. [自动化与 CI/CD](#自动化与-cicd)
9. [物料平台/低代码平台对接](#物料平台低代码平台对接)
10. [官网与多语言首页](#官网与多语言首页)
11. [常见问题与扩展](#常见问题与扩展)

---

## 项目简介

universe-vue-template 是一个现代化的 Vue 通用组件库工程模板，集成了组件开发、主题系统、国际化、自动化测试、文档、官网、物料平台对接等主流能力，支持一键体验和扩展，适合企业级和个人项目快速搭建。

---

## 环境准备

- Node.js ≥ 16
- pnpm ≥ 8（推荐，支持 monorepo 和更快的依赖管理）
- Git
- 推荐编辑器：VSCode + Volar 插件

---

## 项目结构说明

```
universe-vue-template/
├── components/           # 组件源码目录
│   └── MyButton/         # 示例组件
│       ├── MyButton.vue
│       ├── index.ts
│       ├── README.md / README.en.md
│       ├── MyButton.test.ts
│       ├── MyButton.stories.ts
│       └── ...
├── docs/                 # API 文档（多语言）
├── material/             # 物料平台对接元数据
├── playground/           # 本地调试/预览项目
├── scripts/              # 自动化脚本
├── stories/              # Storybook 配置与首页
├── test/                 # 测试相关
├── dist/                 # 构建输出
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── ...
```

---

## 依赖安装

```bash
pnpm install
```

---

## 开发流程

### 新建组件

1. 在 `components/` 下新建目录，如 `MyInput/`。
2. 创建核心文件：
   - `MyInput.vue`：组件实现
   - `index.ts`：导出组件
   - `README.md` / `README.en.md`：中英文文档
   - `MyInput.test.ts`：单元测试
   - `MyInput.stories.ts`：Storybook 示例

3. 在 `components/index.ts` 注册新组件，便于统一导出。

### 组件开发规范

- 组件名统一使用大驼峰（如 `MyButton`）。
- Props、事件、插槽需有类型声明和注释。
- 样式全部使用 CSS 变量，便于主题切换。
- 支持 `type`、`disabled`、`size` 等常用属性。
- 事件需以 `emit` 方式抛出，文档需说明。

### 组件文档与国际化

- 每个组件需有 `README.md`（中文）和 `README.en.md`（英文）。
- API 文档自动生成到 `docs/api/`，支持 `.zh.json`/`.en.json`。
- Storybook 工具栏支持语言切换，文档和示例自动切换。

### 单元测试

- 使用 Vitest + @vue/test-utils。
- 每个组件需有对应的 `xxx.test.ts`，覆盖 props、事件、交互等。
- 运行测试：

  ```bash
  pnpm test
  ```

- 查看覆盖率：

  ```bash
  pnpm coverage
  ```

### Storybook 预览与文档

- 运行 Storybook 本地预览：

  ```bash
  pnpm storybook
  ```

- 新增/修改组件后，需补充/更新对应的 `.stories.ts` 文件，支持多状态、多语言、主题切换。

---

## 主题系统与主题编辑器

- 所有主题变量（如主色、圆角、字体等）均为 CSS 变量，集中管理于 `components/theme/`。
- Storybook 工具栏支持主题切换、暗黑模式。
- 首页内置主题编辑器，支持实时编辑、导入导出、localStorage 持久化。
- 主题切换、暗黑模式、语言切换三者互不影响，状态持久化。

---

## 打包与类型声明

- 使用 Vite library mode 打包，支持 ESM/CJS/UMD/types。
- 运行打包：

  ```bash
  pnpm build
  ```

- 类型声明输出到 `dist/types`，支持 TypeScript 用户。
- 支持 WebComponent 导出（如 `<uvt-button>`），可在任意前端框架/HTML 中直接使用。

---

## 自动化与 CI/CD

- 集成 Vitest 单元测试与覆盖率。
- GitHub Actions 自动化流程：
  - Lint 检查
  - 单元测试
  - 构建与类型检查
  - 覆盖率上传（Codecov）
  - 自动发布 npm（打 tag）
  - 自动生成 changelog
  - Storybook 自动部署到 GitHub Pages

---

## 物料平台/低代码平台对接

- `material/material.json` 自动收集组件元信息、API、文档、预览、主题、WebComponent 入口。
- 支持主流物料平台一键注册。
- 详见 `material/README.md`。

---

## 官网与多语言首页

- Storybook 首页美化，包含品牌 Logo、简介、快速入口、导航、特性列表。
- 首页 story 支持多语言，自动根据工具栏语言切换内容。
- 官网自动部署，访问 GitHub Pages 即可体验。

---

## 常见问题与扩展

- **如何添加新主题变量？**
  在 `components/theme/default-theme.css` 中新增变量，并在主题编辑器中注册即可。

- **如何支持更多语言？**
  在 `README.xx.md`、`docs/api/xxx.xx.json` 中补充对应语言文档，Storybook 工具栏会自动识别。

- **如何对接自定义物料平台？**
  按照 `material/material.json` 结构补充元信息，参考 `material/README.md`。

- **如何扩展自动化脚本？**
  在 `scripts/` 目录下新增脚本，并在 `package.json` 中注册命令。

---

## 结语

本项目已集成现代 Vue 组件库开发的全链路能力，适合新手和团队快速上手。建议先阅读各目录下的 README，结合 Storybook 官网体验，逐步实践组件开发、主题扩展、国际化、自动化等能力。

如有问题，欢迎提 Issue 或参与贡献！
