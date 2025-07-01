const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../components');

fs.readdirSync(componentsDir).forEach((comp) => {
  const compDir = path.join(componentsDir, comp);
  const readmeZh = path.join(compDir, 'README.md');
  const readmeEn = path.join(compDir, 'README.en.md');
  if (fs.existsSync(readmeZh) && !fs.existsSync(readmeEn)) {
    const zh = fs.readFileSync(readmeZh, 'utf-8');
    // 简单模板：只做标题和部分字段替换，实际可接入翻译 API
    let en = zh
      .replace(/按钮组件/g, 'Button Component')
      .replace(/属性表/g, 'Props')
      .replace(/示例代码/g, 'Example')
      .replace(/使用说明/g, 'Usage')
      .replace(/注意事项/g, 'Notes')
      .replace(/事件/g, 'Events')
      .replace(/名称/g, 'Name')
      .replace(/类型/g, 'Type')
      .replace(/默认值/g, 'Default')
      .replace(/说明/g, 'Description')
      .replace(/点击按钮触发/g, 'Triggered on click')
      .replace(/支持插槽自定义内容。/g, 'Supports slot for custom content.')
      .replace(/支持原生 type、disabled 属性。/g, 'Supports native type and disabled props.')
      .replace(/禁用状态下不会触发 click 事件。/g, 'Click event will not be triggered when disabled.');
    fs.writeFileSync(readmeEn, en, 'utf-8');
    console.log(`✔ 生成英文文档: ${readmeEn}`);
  }
});
