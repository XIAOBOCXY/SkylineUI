//入口
//1.导出全部组件
//2.实现一个vue插件，插件中编写install方法，将所有组件安装到vue实例中
import { App } from "vue";
import button from "./button";
import "./assets/fonts/iconfont.css";//图标
import SkyIcon from "./icon";//图标
import SkyButtongroup from "./buttongroup";
import breadcrumb from "./breadcrumbs/breadcrumb";
import breadcrumbItem from "./breadcrumbs/breadcrumbItem";
import affix from "./affix";
import col from "./layout/col/col.vue";
import row from "./layout/row/row.vue";
import SkyInput from './input/input.vue';
import SkyInputNumber from './inputnumber/inputnumber.vue';
import skyFeedback from "./feedback";
import layout from './layout2/layout.vue'
import SkyCol from './layout2/col.vue'
import SkyRow from './layout2/row.vue'

//编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(button.name, button);//按钮
    app.component(SkyIcon.name, SkyIcon);//按钮
    app.component(SkyButtongroup.name, SkyButtongroup);//按钮组
    app.component(SkyInput.name, SkyInput); //输入框
    app.component(SkyInputNumber.name, SkyInputNumber); //数字输入框
    app.component(breadcrumb.__name, breadcrumb);
    app.component(breadcrumbItem.__name, breadcrumbItem);
    app.component(affix.__name, affix);
    app.component(col.name, col);
    app.component(row.name, row);
    app.component(skyFeedback.name, skyFeedback);
    app.component(layout.name, layout);
    app.component(SkyCol.name, SkyCol);
    app.component(SkyRow.name, SkyRow);
  },
};
