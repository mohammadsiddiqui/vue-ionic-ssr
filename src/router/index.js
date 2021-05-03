import { createRouter, createMemoryHistory, createWebHistory } from "@ionic/vue-router";
// import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "/message/:id",
		component: () => import("../views/ViewMessage.vue"),
	},
];

const isServer = typeof window === "undefined";
const history = isServer ? createMemoryHistory() : createWebHistory(process.env.BASE_URL);

export default function () {
	return createRouter({ routes, history });
}

// const router = createRouter({
// 	history: createWebHistory(process.env.BASE_URL),
// 	routes,
// });
// export default router;
