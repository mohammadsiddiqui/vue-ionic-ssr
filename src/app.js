import { createSSRApp } from "vue";
import App from "./App.vue";
import createRouter from "./router";
import { IonicVue } from "@ionic/vue";

export default function () {
	const app = createSSRApp(App);
	const router = createRouter();
	app.use(router);
	app.use(IonicVue);
	return {
		app,
		router,
	};
}
