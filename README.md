# node-spa-helloworld

## webpack相关安装依赖

> 由于这是一个demo. 尽量用比较新的配置. 但是呢.默认版本会存在一些冲突.因此我这里给出一个不存在冲突的安装办法:

```bash 
npm install --verbose  webpack@4.46.0  \
                       webpack-cli@4 \
                       webpack-serve@4 \
                       html-webpack-plugin@4 \
                       html-loader@1  \
                       css-loader@4 \
                       style-loader@2 \
                       file-loader \
                       url-loader  \
                       --save-dev
```

- webpack 即 webpack 核心库。它提供了很多 API, 通过 Node.js 脚本中 require('webpack') 的方式来使用 webpack。
- webpack-cli 是 webpack 的命令行工具。让我们可以不用写打包脚本，只需配置打包配置文件，然后在命令行输入 webpack-cli --config webpack.config.js 来使用 webpack, 简单很多。webpack 4 之前命令行工具是集成在 webpack 包中的，4.0 开始 webpack 包本身不再集成 cli。
- webpack-serve 是 webpack 提供的用来开发调试的服务器，让你可以用 http://127.0.0.1:8080/ 这样的 url 打开页面来调试，有了它就不用配置 nginx 了，方便很多。
- html-webpack-plugin, html-loader, css-loader, style-loader 等看名字就知道是打包 html 文件，css 文件的插件，大家在这里可能会有疑问，html-webpack-plugin 和 html-loader 有什么区别，css-loader 和 style-loader 有什么区别，我们等会看配置文件的时候再讲。
- `file-loader` 和 `url-loader` 是打包二进制文件的插件，具体也在配置文件章节讲解。


> 接下来，为了能让不支持 ES6 的浏览器 （比如 IE) 也能照常运行，我们需要安装 babel, 
> 它会把我们写的 ES6 源代码转化成 ES5，这样我们源代码写 ES6，打包时生成 ES5。

```bash 
npm install babel-core babel-preset-env babel-loader --save-dev
```

这里 babel-core 顾名思义是 babel 的核心编译器。babel-preset-env 是一个配置文件，
我们可以使用这个配置文件转换 ES2015/ES2016/ES2017 到 ES5，
是的，不只 ES6 哦。babel 还有 其他配置文件。

光安装了 babel-preset-env，在打包时是不会生效的，需要在 package.json 加入 babel 配置：


```json
{
  "babel": {
    "presets": ["env"]
  }
}
```

打包时 babel 会读取 package.json 中 babel 字段的内容，然后执行相应的转换。


babel-loader 是 webpack 的插件，我们下面章节再说。



