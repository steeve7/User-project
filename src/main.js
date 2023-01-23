import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCircleChevronDown, faFilter, faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(faSearch, faFilter, faCircleChevronDown);




createApp(App).component('font-awesome-icon',FontAwesomeIcon).use(router).mount('#app')
