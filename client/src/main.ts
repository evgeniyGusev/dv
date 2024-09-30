import { createApp } from 'vue';

import naive from 'naive-ui'

import '@/assets/styles/style.scss';
import router from '@/router';
import setAxios from '@/lib/api';

import App from '@/App.vue';

const app = createApp(App);

setAxios();

app.use(router);
app.use(naive);
app.mount('body');
