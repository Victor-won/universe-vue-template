import MyButton from './MyButton.vue';

export default {
  title: '通用组件/MyButton',
  component: MyButton,
  argTypes: {
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
    disabled: { control: 'boolean' },
    click: { action: 'click' },
  },
};

const Template = (args: { label: string; type: string; disabled: boolean }) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args">{{ args.label }}</MyButton>',
});

export const 默认 = Template.bind({});
默认.args = {
  label: '按钮',
  type: 'button',
  disabled: false,
};

export const 禁用 = Template.bind({});
禁用.args = {
  label: '禁用按钮',
  type: 'button',
  disabled: true,
};
