// 引入 router
import router from '../../router'
// 引入 html 模板,将会被作为字符串引入
import template from './index.html'
// 引入 css
import './style.css'

// 导出类
export default class {
  mount(container) {
    document.title = 'bar'
    container.innerHTML = template

    container.querySelector('.bar__gofoo').addEventListener('click', () => {
      // 调用 router.go 方法跳转到 /foo 页面
      router.go('/foo')
    })
  }
}
