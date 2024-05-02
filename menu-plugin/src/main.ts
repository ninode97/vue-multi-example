import MenuPluginVue from "./MenuPlugin.vue";

(window as any).useMenuPlugin = (app: any) => {
  app.component("MenuPlugin", MenuPluginVue);
};
