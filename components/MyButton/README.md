# MyButton 按钮组件

## Props
| 名称      | 类型                        | 默认值   | 说明         |
|---------|---------------------------|--------|------------|
| type    | 'button' | 'submit' | 'reset' | 'button' | 按钮类型      |
| disabled| boolean                    | false  | 是否禁用      |

## 事件
| 名称   | 说明         |
|------|------------|
| click| 点击按钮触发   |

## 示例
```vue
<MyButton type="submit" :disabled="false" @click="onClick">提交</MyButton>
```

## 使用说明
- 支持插槽自定义内容。
- 支持原生 type、disabled 属性。

## 注意事项
- 禁用状态下不会触发 click 事件。
