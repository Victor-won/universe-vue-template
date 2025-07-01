// 导出所有主题变量为 JSON，供官网/API/物料平台调用
const fs = require('fs');
const path = require('path');

const themes = require('../components/theme/themes.json');
const output = path.resolve(__dirname, '../material/theme-api.json');

fs.writeFileSync(output, JSON.stringify(themes, null, 2), 'utf-8');
console.log('主题变量 API 已导出到 material/theme-api.json');
