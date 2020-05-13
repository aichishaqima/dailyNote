1、介绍
Create React App 是官方支持的创建单页应用程序的方法，可以帮助我们快速搭建一个繁杂的脚手架

我们可以直接使用命令 npm install create-react-app -g 全局安装 Create React App

然后使用命令 create-react-app <project-name> 创建一个应用程序

注意
在创建应用程序过程中，由于网络问题，我们可能会遇到下面的错误

npm ERR! code Z_BUF_ERROR
npm ERR! errno -5
npm ERR! zlib: unexpected end of file

Aborting installation.
  npm install --save --save-exact --loglevel error react react-dom react-scripts has failed.

Deleting generated file... package.json
Deleting my-propject/ from C:\Users\lenovo\Desktop
Done.
这是因为 NPM 默认使用的是一个国外的源：https://registry.npmjs.org，下载速度比较慢

使用 npm config get registry 命令可以查看使用的源

> npm config get registry
https://registry.npmjs.org
所以我们可以换成淘宝的源：https://registry.npm.taobao.org，这样可以加快下载速度

使用 npm config set registry <URL> 命令可以设置使用的源

> npm config set registry https://registry.npm.taobao.org
之后，我们重新运行 create-react-app <project-name> 命令即可

2、目录结构
成功创建应用程序之后，我们得到的目录结构如下：

+ my-project
    + node_modules（存放第三方模块）
    + public（存放静态文件）
        - favicon.ico（图标）
        - index.html（页面模板）
        - manifest.json
    + src（我们自己写的文件一般放在这个文件夹下）
        - App.css（页面入口文件的样式文件）
        - App.js（页面入口文件）
        - App.test.js（页面入口文件的测试文件）
        - index.css（程序入口文件的样式文件）
        - index.js（程序入口文件）
        - logo.svg
        - serviceWorker.js
    - .gitignore
    - package-lock.json（项目配置文件）
    - package.json（项目配置文件）
    - README.md（项目说明文档）
其中，我们重点看看项目的配置文件 package.json

{
  "name": "my-project",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
（1）dependencies

项目的依赖包含三个，分别是 react、react-dom 和 react-scripts

react 和 react-dom 不用说，它们是 React 的核心库，而 react-scripts 则管理着项目的所有依赖

有兴趣的朋友可以直接看一下 react-scripts 的源码 node_modules\react-scripts，我们这里不细说

（2）scripts

可用的命令共有四个，分别是 npm start、npm run build、npm test 和 npm run eject

npm start：在开发模式下运行应用程序
npm run build：将应用程序构建到 build 文件夹
npm test：以交互式监视模式启动测试运行器
npm run eject：将项目的配置暴露出来，注意这是一个 单向不可逆操作