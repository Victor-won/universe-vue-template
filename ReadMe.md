下面是一个针对你需求的 Vue 通用化组件库项目 的详细产品文档，包含功能说明、技术架构、组件开发规范、本地调试、测试、文档管理等内容，适用于团队协作与后续维护。

⸻

🎯 Vue 通用化组件库产品文档（支持 Vue2 & Vue3）

一、项目目标

构建一个支持同时用于 Vue2 和 Vue3 项目的通用组件库，采用 TypeScript 编写，支持本地开发调试、组件文档展示（使用 Storybook）、并自动生成组件修改记录文档。组件库应具备良好的可维护性、可扩展性及团队协作开发能力。

⸻

二、功能模块

1. 通用组件开发支持
   • 使用 TypeScript 编写组件。
   • 使用 vue-demi 实现 Vue2 / Vue3 兼容。
   • 组件支持按需引入（Tree-shaking）。
   • 兼容多种打包方式（ESM / CJS / UMD）。

2. 本地调试与开发体验
   • 提供本地组件 playground 页面（Vite 构建）。
   • 使用 Storybook 展示每个组件使用方式、状态、交互。
   • 热更新，支持快速预览。

3. 版本兼容与构建管理
   • 使用 unbuild 实现通用构建流程，生成多种模块格式。
   • 可通过环境变量控制编译为 Vue2 或 Vue3 版本。
   • 支持同时输出完整包和按需组件包。

4. 测试系统
   • 使用 Vitest 进行单元测试。
   • 使用 @vue/test-utils 支持 Vue 组件测试。
   • 与 CI 集成，保证组件稳定性。

5. 文档系统
   • 使用 Storybook 自动生成组件文档。
   • 每个组件配有 README 或 MDX 文档，自动收录至主文档页。
   • 自动生成 CHANGELOG（使用 Conventional Commits + changelog 工具）。

⸻

三、技术架构

模块 技术栈
组件框架 Vue2 + Vue3 (vue-demi)
打包工具 unbuild
类型系统 TypeScript
文档工具 Storybook + Markdown
测试工具 Vitest + @vue/test-utils
变更记录 conventional-changelog / changelogen
调试工具 Vite
模块兼容 ESM / CJS / dts 类型文件

⸻

四、组件开发规范

1. 目录结构

components/
└─ Button/
├─ index.ts
├─ Button.vue
├─ Button.test.ts
├─ Button.stories.ts
├─ README.md

2. 命名规范
   • 组件名使用 PascalCase，如：MyButton
   • 文件名使用 kebab-case，如：my-button.vue

3. 代码风格
   • 遵循 ESLint + Prettier 规范
   • 类型声明完整，使用 defineComponent 包裹
   • props、emits 使用 withDefaults, defineProps, defineEmits 等辅助类型

⸻

五、开发与调试流程

本地开发

# 安装依赖

pnpm install

# 启动本地 Storybook 组件调试环境

pnpm storybook

# 启动本地 playground（Vite 项目）

pnpm dev

添加新组件

pnpm create-component MyComponent

通过脚本生成组件目录、模板、测试文件和文档文件。

⸻

六、构建与发布

构建组件库

# 构建为 Vue3 版本

pnpm build:vue3

# 构建为 Vue2 版本

pnpm build:vue2

发布流程（可选 CI/CD）

pnpm changelog # 自动生成 CHANGELOG.md
pnpm version patch # 使用 pnpm + Git 版本号更新
pnpm publish # 发布至 npm

⸻

七、测试与质量保障
• 所有组件应具备 Vitest 单元测试
• 测试覆盖率 > 90%
• CI 检查包括 Lint、Test、Build

⸻

八、文档管理规范

组件文档
• 每个组件需书写 README.md 或 .stories.ts 文件，包含：
• props 表
• 示例代码
• 使用说明
• 注意事项

项目总览文档
• docs/overview.md 记录组件列表
• CHANGELOG.md 自动生成，每次提交遵循 Conventional Commit 风格，如：

feat(button): 新增加载状态属性
fix(input): 修复聚焦闪烁问题

⸻

九、扩展功能

• 支持自动生成 API 文档（vue-docgen）
• 支持导出为 WebComponent
• 支持远程物料平台注册（低代码平台集成）
• 增加主题系统（可定制样式）

⸻

十、工程化

1.  🏗️ 项目脚手架初始化模板（支持 Vue2 / Vue3 切换）
2.  🧩 一个示例组件（如 MyButton）的完整开发示例
3.  🧪 单元测试样例和 CI 配置模板
4.  📘 README.md 和 CHANGELOG.md 自动生成脚本
