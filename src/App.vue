<template>
	<ion-app>
		<ion-router-outlet />
	</ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
export default {
	name: "App",
	components: {
		IonApp,
		IonRouterOutlet,
	},
	data() {
		return {
			isMob: true,
		};
	},
};
</script>

<style>
.p {
	cursor: pointer;
}
</style>
