import BlokInk from "@storyblok/design-system";
import "@storyblok/design-system/dist/storyblok-design-system.css";

export default defineNuxtPlugin((nuxtApp) => {
  // @ts-expect-error
  nuxtApp.vueApp.use(BlokInk);
});
