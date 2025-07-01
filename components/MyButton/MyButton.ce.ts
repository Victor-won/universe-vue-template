import { defineCustomElement } from 'vue';
import MyButton from './MyButton.vue';
import '../theme/default-theme.css';

const MyButtonElement = defineCustomElement(MyButton);

// 注册为全局自定义元素
customElements.define('uvt-button', MyButtonElement);

export default MyButtonElement;
