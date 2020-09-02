import Vue from 'vue';
import Vuex from 'vuex';
import { DEFAULT_STORE_CONFIGURE } from '../../config';
import modules from './modules';


Vue.use(Vuex);

// noinspection JSValidateTypes
const store = new Vuex.Store({
  ...DEFAULT_STORE_CONFIGURE,
  modules,
});

export default store;
