# MyButton Component

## Props
| Name     | Type                        | Default   | Description      |
|----------|-----------------------------|-----------|------------------|
| type     | 'button' | 'submit' | 'reset' | 'button'  | Button type      |
| disabled | boolean                     | false     | Disabled state   |

## Events
| Name   | Description         |
|--------|---------------------|
| click  | Triggered on click  |

## Example
```vue
<MyButton type="submit" :disabled="false" @click="onClick">Submit</MyButton>
```

## Usage
- Supports slot for custom content.
- Supports native type and disabled props.

## Notes
- Click event will not be triggered when disabled.
