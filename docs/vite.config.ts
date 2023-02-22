//默认 Vitepress 是无需配置 vitepress.config.ts 的
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import Unocss from "../config/unocss";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // vueJsx(),
        // Unocss(),
    ],
});