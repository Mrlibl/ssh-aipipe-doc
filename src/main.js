import { createApp } from 'vue'
import './style.css'
import './assets/common.css'  // 引入公共样式
import App from './App.vue'
import { useImagePreview } from './utils/preview'

// 启用全局图片预览
useImagePreview()
createApp(App).mount('#app')
