import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: 'https://qfcvacdkrjwdixdiqkwz.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTk4NDUzLCJleHAiOjE5NTg1NzQ0NTN9.kkzU3cZZckntPZDzPy6oo8hKkXys5qqcaNDywQMUUjk',
  supabaseOptions: {},
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
