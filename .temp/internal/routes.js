/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\vue\\nangupress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-988db186",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-988db186").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-9be10cce",
    path: "/UI/row.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9be10cce").then(next)
    },
  },
  {
    name: "v-43fe37be",
    path: "/api.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-43fe37be").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]