# 介绍

## 简介

**Gui Admin Monorepo**  (通过 [📦 pnpm](https://pnpm.io/zh/motivation) 和 [🔺 turbo](https://turbo.build/repo)) 是一个用于 **JavaScript/TypeScript Monorepos** 的快速构建系统的产品，由单个代码库里包含了多个项目的代码。

## 文档

- 中文文档地址为[gui-docs](https://github.com/xuhongling/gui-docs)，采用 Vitepress 开发。如发现文档有误，欢迎提 pr 帮助我改进。

### 安装使用

:::danger 关于Node版本
请安装Node 16.xx以上的版本，如果你需要同时存在多个 node 版本，可以使用 `Nvm` 或者其他工具进行 Node.js 进行版本管理。
:::

- 获取项目代码

```bash
git clone https://github.com/xuhongling/gui-admin-monorepo.git
```

- pnpm 安装依赖

```bash
cd gui-admin-monorepo

pnpm install

```

- 运行

```bash
pnpm run dev
```

- 打包

```bash
pnpm build
```

- 清除 **`node_modules`**

```bash
pnpm run clean
```

## 需要掌握的基础知识

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。
建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [Vue3 文档](https://vuejs.org/)
- [Vue-RFCS](https://github.com/vuejs/rfcs)
- [Vue2 迁移到 3](https://v3-migration.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-router](https://router.vuejs.org/)
- [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Es6](https://es6.ruanyifeng.com/)
- [Vitejs](https://vitejs.dev/)
- [Tailwindcss](https://www.tailwindcss.cn/docs)

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 60`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 如何加入我们

- [gui-admin-monorepo](https://github.com/xuhongling/gui-admin-monorepo) 还在持续更新中，本项目欢迎您的参与，共同维护，逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。
- 如果你想加入我们，可以多提供一些好的建议或者提交 pr，我们会根据你的活跃度邀请你加入。
