import ThemePluginVue from "./ThemePlugin.vue";

(window as any).useThemePlugin = (app: any) => {
  app.component("ThemePlugin", ThemePluginVue);
};
