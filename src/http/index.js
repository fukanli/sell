import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
  root: 'http://www.test.com',
  headers: {
    Authorization: 'Basic YXBpOnBhc3N3b3Jk'
  }
};
