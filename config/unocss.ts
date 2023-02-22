// //UnoCSS 默认是按需生成方式
// //只生成代码中使用过的样式
// //如果在 class 属性中使用变量,是无法分析变量的取值的,就无法动态生成样式了。
// //UnoCSS 提供了安全列表选项，把样式定义中变量的取值添加到 Safelist 中去即可
// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
// const colors = [
//     "white",
//     "black",
//     "gray",
//     "red",
//     "yellow",
//     "green",
//     "blue",
//     "indigo",
//     "purple",
//     "pink",
// ];
// const safelist = [
//     // ...colors.map((v) => `bg-${v}-500`),
//     // ...colors.map((v) => `hover:bg-${v}-700`),
//     // ...[
//     //     "search",
//     //     "edit",
//     //     "check",
//     //     "message",
//     //     "star-off",
//     //     "delete",
//     //     "add",
//     //     "share",
//     // ].map((v) => `i-ic-baseline-${v}`),
//     // ...colors.map((v) => `border-${v}-500`),

//     ...colors.map((v) => `bg-${v}-100`),
//     ...colors.map((v) => `bg-${v}-400`),
//     ...colors.map((v) => `bg-${v}-500`),
//     ...colors.map((v) => `hover:bg-${v}-100`),
//     ...colors.map((v) => `hover:bg-${v}-300`),
//     ...colors.map((v) => `hover:bg-${v}-400`),
//     ...colors.map((v) => `hover:bg-${v}-500`),
//     ...colors.map((v) => `border-${v}-400`),
//     ...colors.map((v) => `border-${v}-500`),
//     ...colors.map((v) => `text-${v}-500`),
//     ...colors.map((v) => `hover:text-${v}-500`),

//     ...Array.from({ length: 9 }, (_, i) => `px-${i + 1}`),
//     ...Array.from({ length: 9 }, (_, i) => `py-${i + 1}`),
//     ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
//     ...["rounded-full", "rounded-lg"],
//     ...[
//         "search",
//         "edit",
//         "check",
//         "message",
//         "star-off",
//         "delete",
//         "add",
//         "share",
//         "star-rate",
//     ].map((v) => `i-ic-baseline-${v}`),
// ];
// export default () =>
//     Unocss({
//         safelist,
//         presets: [presetUno(), presetAttributify(), presetIcons()],//工具类预设 属性化模式支持 图标预设 
//     });