# vue3.chrome-extension.template
使用vue3开发Chrome插件的模板

## 一些说明
采用多页面构建，`Options`页面和`Popup`页面都是单独的`app`实例，多页面的配置可以查看 [vite多页面配置](https://vitejs.dev/guide/build.html#multi-page-app)。

由于构建目录的问题，还有就是 Chrome 插件要求 background 脚本必须位于插件根目录，所以需要有一个`post-build.js`脚本来处理打包之后的目录布局。
