export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/index.vue"),
    meta: {
      title: "EzzyTech || Making life easier with software",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
    meta: {
      title: "Page Not Found || EzzyTech - Making life easier with software",
    },
  },
];
