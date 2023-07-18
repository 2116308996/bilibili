import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import http from './http.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Col,Row,Toast,Field,Notify,Search,Icon,Uploader,Dialog,Radio,RadioGroup,CellGroup,Form,Calendar,Tab,Tabs,PullRefresh } from 'vant';
Vue.use(Search);
Vue.use(Field);
Vue.use(Notify);
Vue.use(Icon);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(CellGroup);
Vue.use(Form);
Vue.use(Calendar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);

Vue.prototype.$http=http
Vue.config.productionTip = false
Vue.use(less)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
