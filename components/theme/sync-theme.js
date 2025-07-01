// 监听主题变量变更并同步写入 material/material.json
const fs = require('fs');
const path = require('path');

const themeFile = path.resolve(__dirname, '../../material/material.json');
const themes = require('./themes.json'); // 维护所有主题变量方案

function syncTheme() {
  const data = {
    themes,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(themeFile, JSON.stringify(data, null, 2), 'utf-8');
  console.log('主题变量已同步到 material/material.json');
}

if (require.main === module) {
  syncTheme();
}

module.exports = syncTheme;
