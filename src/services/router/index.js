import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../../routes';
import scrollBehavior from './behavior/scroll';
import { DEFAULT_ROUTER_CONFIGURE } from '../../config';
import { onRouterAfterEach, onRouterBeforeEach } from '../../interceptors/router';


Vue.use(VueRouter);

const router = new VueRouter({
  ...DEFAULT_ROUTER_CONFIGURE,
  scrollBehavior,
  routes,
});

router.beforeEach(onRouterBeforeEach);
router.afterEach(onRouterAfterEach);

export default router;
