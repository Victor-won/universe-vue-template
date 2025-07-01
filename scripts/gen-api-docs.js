const { parse } = require('vue-docgen-api');
const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../components');
const outputDir = path.resolve(__dirname, '../docs/api');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function zh2en(str) {
  // 简单字段翻译，可接入翻译 API
  return str
    .replace(/属性/g, 'Props')
    .replace(/插槽/g, 'Slot')
    .replace(/事件/g, 'Events')
    .replace(/类型/g, 'Type')
    .replace(/说明/g, 'Description')
    .replace(/默认值/g, 'Default')
    .replace(/示例/g, 'Example')
    .replace(/按钮/g, 'Button')
    .replace(/禁用/g, 'Disabled')
    .replace(/点击/g, 'Click')
    .replace(/按钮组件/g, 'Button Component');
}

fs.readdirSync(componentsDir).forEach(async (comp) => {
  const vueFile = path.join(componentsDir, comp, `${comp}.vue`);
  if (fs.existsSync(vueFile)) {
    try {
      const doc = await parse(vueFile);
      // 中文
      const zhPath = path.join(outputDir, `${comp}.zh.json`);
      fs.writeFileSync(zhPath, JSON.stringify(doc, null, 2), 'utf-8');
      // 英文（字段简单翻译）
      const enDoc = JSON.parse(JSON.stringify(doc));
      if (enDoc.displayName) enDoc.displayName = zh2en(enDoc.displayName);
      if (enDoc.props) {
        Object.values(enDoc.props).forEach((p) => {
          if (p.description) p.description = zh2en(p.description);
        });
      }
      if (enDoc.events) {
        Object.values(enDoc.events).forEach((e) => {
          if (e.description) e.description = zh2en(e.description);
        });
      }
      const enPath = path.join(outputDir, `${comp}.en.json`);
      fs.writeFileSync(enPath, JSON.stringify(enDoc, null, 2), 'utf-8');
      console.log(`✔ 生成 API 文档: ${zhPath}, ${enPath}`);
    } catch (e) {
      console.warn(`✗ 解析失败: ${vueFile}`, e.message);
    }
  }
});
