# vue-template
本模板基于vue-cli搭建，在此基础上加入了通用的组件、模块、工具，已封装好路由、鉴权、api等逻辑。

前端开发者可省去在搭建环境上浪费的时间，专注于开发page

项目风格和规范是基于作者公司和团队所定制的。
## 规范
### 命名规范
js变量使用驼峰法，css命名使用横线，按层级命名， 如 home-list-item
### 代码规范:

基于Airbnb风格的eslint
### 模块化规范:
 EsModule

### git规范:

 不要直接push master, 按模块拆分分支, 及时拉取、提交、合并以免不必要的冲突

 commit 遵循 Angular Git Commit Guidelines

 即 type: msg
 
部分type如下
- feat: 添加新特性 
- fix: 修复bug
- docs: 修改文档
- style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复bug
- test: 增加测试用例
- chore: 改变构建流程、或者增加依赖库、工具等

## 项目相关命令
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### api test
todo
```
npm run test
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
