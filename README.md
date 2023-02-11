# Travel

### 简介

Vue.js 移动端项目，仿去哪儿网

### 功能详情

本项目分为三个页面：首页、城市搜索页、景点详情页。

1. 首页具备的功能有：图片轮播、图标分页轮播、图文分区展示
2. 城市搜索页具备的功能有：按汉字或拼音搜索城市、右侧字母表与城市列表联动、选定城市与首页展示城市联动
3. 景点详情页具备的功能有：画廊轮播并渐隐渐显、头部组件根据移动距离渐隐渐显、递归展示二级列表

### 技术应用

- **使用 Vue 进行组件化编程，拆分页面布局、封装公用动画**
- **使用 Vue Router 的编程式导航进行页面切换**，并通过 localStorage 缓存选中的城市
- **使用 Vuex 实现多页面数据共享**，通过全局注入 store 对象，实现各级组件间通信
- **使用 axios 发送 ajax 请求**，用本地文件 mock 模拟后端接口，给组件动态传递数据
- **使用 keep-alive 优化网页性能**，将 ajax 请求返回的数据进行缓存，以免每次跳转页面时都重新执行 mounted 生命周期钩子中的 ajax 请求，而是在 activated 钩子判断 ajax 请求是否更新，如有更新，再发送新的 ajax 请求
- 使用 **vue-awesome-swiper** 实现轮播，通过 slot 元素给 swiper 组件传递数据，并利用计算属性给轮播数据进行分页

---

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
