import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../libs/i18n'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({

})

router.start(App,'#app')

Vue.filter('i18n',i18n)
Vue.filter('toUpperCase',str => str.toUpperCase())
Vue.filter('toLowerCase',str => str.toLowerCase())
Vue.filter('firstLetterUpperCase',str =>
  str
    .replace(/([.!?;]+)/g,'$1|-|-|')
    .split('|-|-|')
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s[0].toUpperCase() + s.slice(1))
    .reduce((a,b) => `${a} ${b}`)
)
