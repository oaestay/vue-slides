import Vue from 'vue';
import Eagle, { CodeBlock, Options, Presenter } from 'eagle.js';
import hljs from 'highlight.js/lib/highlight';

import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import App from './App.vue';

import 'highlight.js/styles/atom-one-dark.css';

import 'eagle.js/dist/eagle.css';

import './registerServiceWorker';

Eagle.use(CodeBlock);
Eagle.use(Presenter);

Vue.config.productionTip = false;

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
Options.hljs = hljs;

Vue.use(Eagle);

new Vue({
  render: h => h(App),
}).$mount('#app');
