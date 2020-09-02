import Vue from 'vue';
import App from './App.vue';
import directives from './directives';
import inject from './plugins/inject';
import router from './services/router';
import store from './services/store';
import { VUE_DEVTOOLS_ENABLED, VUE_PRODUCTION_TIPS } from './config';


// -- register directives
Object.keys(directives).forEach((directive) => {
  Vue.directive(directive, directives[directive]);
});

// -- vue && devtools
Vue.config.productionTip = VUE_PRODUCTION_TIPS;
Vue.config.devtools = VUE_DEVTOOLS_ENABLED;

// -- services inject
Vue.use(inject);

// -- root instance
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
