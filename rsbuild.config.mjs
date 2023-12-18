import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
// import { webpackProvider } from "@rsbuild/webpack";

export default defineConfig({
  plugins: [pluginVue()],
  // test webpack
  // provider: webpackProvider,
});
