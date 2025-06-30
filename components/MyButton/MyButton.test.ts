import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import MyButton from './MyButton.vue';

describe('MyButton', () => {
  it('渲染插槽内容', () => {
    const wrapper = mount(MyButton, {
      slots: { default: '按钮' },
    });
    expect(wrapper.text()).toBe('按钮');
  });

  it('点击事件正常触发', async () => {
    const onClick = vi.fn();
    const wrapper = mount(MyButton, {
      slots: { default: '按钮' },
      attrs: { onClick },
    });
    await wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('禁用状态下不触发点击', async () => {
    const onClick = vi.fn();
    const wrapper = mount(MyButton, {
      props: { disabled: true },
      attrs: { onClick },
    });
    await wrapper.trigger('click');
    expect(onClick).not.toHaveBeenCalled();
  });
});
