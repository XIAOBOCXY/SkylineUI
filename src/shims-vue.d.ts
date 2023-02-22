//通过添加一个模块的类型定义来解决Typescript 默认不支持.vue 类型的模块的问题
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
