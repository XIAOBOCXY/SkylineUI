// // 启动vue实例
import { createApp } from "vue";

// // 测试的
// // import SkyButton from "./button";
// // createApp(SkyButton).mount("#app");

// // import SFCButton from "./SFCButton.vue";
// // createApp(SFCButton).mount("#app");

// // import JSXButton from "./JSXButton";
// // createApp(JSXButton).mount("#app");

// // import Layout from "./layout";
// // createApp(Layout).mount("#app")

import App from './App.vue'
const app = createApp(App)
app.mount("#app");
