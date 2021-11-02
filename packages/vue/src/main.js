import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

let instance;

function render() {
  instance = new Vue({
    render: (h) => h(App),
  });
  instance.$mount("#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount() {
  render();
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
