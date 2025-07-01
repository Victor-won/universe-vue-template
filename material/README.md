# 物料平台/低代码平台对接说明

本组件库已支持主流物料平台、低代码平台自动注册。

## 物料描述文件
- `material/material.json`：包含所有组件元信息、API、文档、预览、主题、WebComponent 入口等。

## 注册方式
1. 通过平台 CLI 工具（如 Fusion、E-Dev、TDesign 等）导入 `material.json`。
2. 或在平台物料市场后台上传 `material.json` 并填写 npm 包名、文档、预览等信息。
3. 支持 WebComponent 方式注册，直接用 `<uvt-button></uvt-button>`。

## 物料描述字段说明
- `name`：物料包名
- `components`：组件列表（含文档、API、预览）
- `theme`：主题变量入口
- `webComponent`：WebComponent 入口

## 扩展
如需对接自定义平台、批量生成 meta.json、支持多语言/多主题等，可在 material 目录扩展脚本。
