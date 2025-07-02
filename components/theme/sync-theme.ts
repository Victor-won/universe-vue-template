// 监听主题变量变更并同步写入 material/material.json
import fs from 'fs';
import path from 'path';
import themes from './themes.json'; // 维护所有主题变量方案

const themeFile = path.resolve(__dirname, '../../material/material.json');

export function syncTheme() {
  const data = {
    themes,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(themeFile, JSON.stringify(data, null, 2), 'utf-8');
  console.log('主题变量已同步到 material/material.json');
}

// 仅当直接运行该文件时执行
if (process.argv[1] === __filename) {
  syncTheme();
}
