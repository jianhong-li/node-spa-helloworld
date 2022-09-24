module.exports = {
  extends: 'enough',

  // es6 has been set by default
  env: {
    browser: true,
    node: true
  },

  // overrides
  rules: {
    // ...
    // 关于是否需要分号.在标准上可以覆盖原来的配置.
    // 参考: https://stackoverflow.com/questions/40453894/allow-semi-colons-in-javascript-eslint
    // 在原来的版本的config中是默认不需要分号的.(具体版本为: "eslint-config-enough": "0.3.0")
    // 但是在我使用的这个版本:(默认给我安装的是:"eslint-config-enough": "^0.7.0",), 默认又是需要分号的的了.
    // 因此在这里手工添加一个eslint配置. 这个配置其实也可以直接写到`package.json`中的 `eslintConfig`节点.
    semi: [2, 'never']
  }
}
