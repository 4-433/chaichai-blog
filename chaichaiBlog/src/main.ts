/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-05-22 21:53:39
 * @FilePath: \chaichaiblog\chaichaiBlog\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import './assets/base.css'
//兼容globalthis
import 'globalthis/auto'


import { createApp } from 'vue'
// import { createStore } from './stores'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// const pinia = createStore()

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(pinia)


app.mount('#app')
