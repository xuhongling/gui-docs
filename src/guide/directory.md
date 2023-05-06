# 目录结构

```bash
root
  ├── configs # 项目相关的通用配置
  │   ├── css-preprocess # css配置
  │   ├── lint # eslint配置
  │   ├── tsconfig # ts配置
  │   └── vite # vite配置
  ├── packages # 本地依赖库
  │   ├── components # 组件合集
  │   │   ├── antd # Antd组件封装
  │   │   └── common # 通用组件封装
  │   ├── enums # 静态参数，枚举等
  │   ├── hooks # 通用hooks
  │   ├── request # 请求依赖，默认axios
  │   ├── styles # 通用样式
  │   ├── types # ts类型定义
  │   └── utils # 工具函数集
  ├── projects # 项目代码目录
  │   └── vue-gui-admin # 单个项目主目录
  │       ├── mock # mock相关
  │       ├── public # 公共静态资源
  │       ├── src
  │       │   ├── api # 请求api配置
  │       │   ├── assets # 资源文件
  │       │   ├── components # 项目组件，自己写
  │       │   ├── hooks # 项目框架所用的一些hooks
  │       │   ├── layouts # 项目框架布局层
  │       │   ├── router # 路由定义
  │       │   ├── store # 状态管理
  │       │   ├── views # 项目页面，自己写
  │       │   ├── App.vue # 初始页
  │       │   ├── main.ts # 入口
  │       │   └── init-application.ts # 本地依赖初始化以及注入
  │       ├── .env # 环境配置
  │       ├── .env.development # 开发环境配置
  │       └── .env.production # 生产环境配置
  ├── scripts # 项目脚本相关
  └── pnpm-workspace.yaml # 本地依赖库配置
```