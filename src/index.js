import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(Toast, {});

app.mount("#root");
