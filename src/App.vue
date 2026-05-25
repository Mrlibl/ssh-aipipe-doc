<template>
  <div class="api-doc">
    <!-- 移动端顶部栏 -->
    <div class="mobile-header">
      <h2>API 文档</h2>
      <button class="menu-btn" @click="showMenu = !showMenu">
        {{ showMenu ? '关闭' : '菜单' }}
      </button>
    </div>

    <!-- 侧边栏 -->
    <div class="sidebar" :class="{ mobileShow: showMenu }">
      <div class="menu-list">
        <template v-for="item in menu" :key="item.key">
          <!-- 一级菜单 -->
          <div v-if="item.children" class="menu-item l1" @click="toggle(item.key)">
            {{ item.title }}
            <span class="arrow" :class="{ open: openKeys.includes(item.key) }">▶</span>
          </div>
          <div v-else class="menu-item l1" @click="loadItem(item); closeMobileMenu()">
            {{ item.title }}
            <span v-if="item.method" class="method-tag" :class="item.method.toLowerCase()">
              {{ item.method }}
            </span>
          </div>

          <!-- 二级菜单 -->
          <div v-if="item.children" class="l2-group" v-show="openKeys.includes(item.key)">
            <template v-for="sub in item.children" :key="sub.key">
              <div v-if="sub.children" class="l2-item" @click="toggle(sub.key)">
                {{ sub.title }}
                <span class="arrow" :class="{ open: openKeys.includes(sub.key) }">▶</span>
              </div>
              <div v-else class="l2-item" :class="{ active: activeKey === sub.key }" @click="loadItem(sub); closeMobileMenu()">
                {{ sub.title }}
                <span v-if="sub.method" class="method-tag" :class="sub.method.toLowerCase()">
                  {{ sub.method }}
                </span>
              </div>

              <!-- 三级菜单 -->
              <div v-if="sub.children" class="l3-group" v-show="openKeys.includes(sub.key)">
                <template v-for="sub3 in sub.children" :key="sub3.key">
                  <div v-if="sub3.children" class="l3-item" @click="toggle(sub3.key)">
                    {{ sub3.title }}
                    <span class="arrow" :class="{ open: openKeys.includes(sub3.key) }">▶</span>
                  </div>
                  <div v-else class="l3-item" :class="{ active: activeKey === sub3.key }" @click="loadItem(sub3); closeMobileMenu()">
                    {{ sub3.title }}
                    <span v-if="sub3.method" class="method-tag" :class="sub3.method.toLowerCase()">
                      {{ sub3.method }}
                    </span>
                  </div>

                  <!-- 四级菜单 -->
                  <div v-if="sub3.children" class="l4-group" v-show="openKeys.includes(sub3.key)">
                    <div
                      v-for="sub4 in sub3.children"
                      :key="sub4.key"
                      class="l4-item"
                      :class="{ active: activeKey === sub4.key }"
                      @click="loadItem(sub4); closeMobileMenu()"
                    >
                      {{ sub4.title }}
                      <span v-if="sub4.method" class="method-tag" :class="sub4.method.toLowerCase()">
                        {{ sub4.method }}
                      </span>
                    </div>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>

    <!-- 右侧内容 -->
    <div class="main">
      <component :is="currentComponent" :title="currentTitle" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'
import menuJson from './menu.json'

const menu = ref(menuJson)
const openKeys = ref(['各种插件/软件使用教程']) // 默认展开
const activeKey = ref('')
const currentComponent = ref(null)
const currentTitle = ref('')
const showMenu = ref(false)

// ✅ 1. 批量预加载所有视图（Vite 静态分析，路径正确）
const viewModules = import.meta.glob([
  './views/**/*.vue' // 匹配 views 下所有 .vue
])

let components = {}
const autoImportComponents = (items) => {
  for (const item of items) {
    if (item.component) {
      // 构造路径（和你原来一样）
      const relPath = item.dir
        ? `./views/${item.dir}/${item.component}.vue`
        : `./views/${item.component}.vue`

      // 从 glob 清单取导入函数
      const loader = viewModules[relPath]
      if (loader) {
        components[item.component] = defineAsyncComponent(loader)
      } else {
        console.warn('组件不存在:', relPath)
      }
    }
    if (item.children) {
      autoImportComponents(item.children)
    }
  }
}

onMounted(() => {
  autoImportComponents(menuJson)
  if (menuJson.length > 0) {
    loadItem(menuJson[0])
  }
})

const toggle = (key) => {
  openKeys.value = openKeys.value.includes(key)
    ? openKeys.value.filter(k => k !== key)
    : [...openKeys.value, key]
}

const loadItem = (item) => {
  activeKey.value = item.key
  currentComponent.value = components[item.component]
  currentTitle.value = item.title
}

const closeMobileMenu = () => {
  showMenu.value = false
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.api-doc {
  display: flex;
  height: 100vh;
  position: relative;
}

.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  z-index: 900;
}
.mobile-header h2 {
  font-size: 14px;
}
.menu-btn {
  padding: 6px 10px;
  background: #aaa;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 12px;
}

.sidebar {
  width: 350px;
  background: #f9fafb;
  border-right: 1px solid #e5e7eb;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fffffa 1%, #ededed 100%);
  background-attachment: fixed;
}
.menu-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 12px;
}

.menu-item.l1 {
  padding: 5px 5px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  transition: background 0.2s ease;
}
.menu-item.l1:hover {
  background: #e5e7eb;
}

.arrow {
  font-size: 10px;
  transition: 0.2s;
}
.arrow.open {
  transform: rotate(90deg);
}

.l2-group { margin-left: 8px; }
.l2-item {
  padding: 3px 4px 3px 5px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  transition: background 0.2s ease;
}
.l2-item:hover {
  background: #e5e7eb;
}

.l3-group { margin-left: 16px; }
.l3-item {
  padding: 3px 4px 3px 5px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  transition: background 0.2s ease;
}
.l3-item:hover {
  background: #e5e7eb;
}

.l4-group { margin-left: 24px; }
.l4-item {
  padding: 3px 4px 3px 5px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  transition: background 0.2s ease;
}
.l4-item:hover {
  background: #e5e7eb;
}

.l2-item.active,
.l3-item.active,
.l4-item.active {
  background: rgba(44, 44, 44, 0.1);
  color: #333;
}

.main {
  flex: 1;
  padding: 10px 10px;
  overflow-y: auto;
}

/* 最终配色：GET绿 POST橙 */
.method-tag {
	height: 20px;
	line-height: 18px;
  font-size: 12px;
  padding: 1px 5px;
  border-radius: 3px;
  color: #fff;
  position: relative;
  font-weight: bold;
	top:5px ;
}
.method-tag.get {
  background-color: #4CAF50;
}
.method-tag.post {
  background-color: #ff6b35;
}
.method-tag.put {
  background-color: #2196F3;
}
.method-tag.delete {
  background-color: #F44336;
}

@media (max-width: 768px) {
  .api-doc {
    flex-direction: column;
    padding-top: 50px;
    height: auto;
  }
  .mobile-header {
    display: flex;
  }
  .sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 350px;
    z-index: 800;
    transform: translateX(-100%);
    transition: transform 0.25s ease;
  }
  .sidebar.mobileShow {
    transform: translateX(0);
  }
  .main {
    padding: 20px 15px;
    width: 100%;
  }
}
</style>