# Table of Contents

- [Todo](#todo)
- [Roadmap](#roadmap)
- [Commit](#commit)

## Todo

- 目前滚动的方案是传入目标ref并调用ref.current.scrollIntoView，但是滚动到目标的时候没有办法补偿吸顶标题的高度，需要把滚动方案替换成用原生js查找id来计算距离顶部的距离，考虑吸顶标题
- 顶栏汉堡包菜单弹层，页面路由跳转
- 样式优化
- 明暗模式切换，根据系统设置
- 国际化
- 主流尺寸适配，移动优先，设置页面最大宽度
- 水印用PS合到图片上面
- 浏览器兼容(postcss-preset-env / autoprefixer)

## Roadmap

- Pages
  - [ ] Home
    - [x] About
      - [x] why I pick front-end
      - [x] recent work focus
      - [x] off-work activities
    - [x] Work
      - [x] Sacmi Nanhai
      - [x] AATS
      - [x] Stramo
    - [ ] Projects
      - [x] Sacmi Digital Printer Client - Sacmi
      - [x] COA generator - AATS
      - [x] Digifly - Stramo
      - [x] Big Data Management Platform - Stramo
      - [ ] Smartchat
      - [ ] Minesweeper AI
  - [ ] Contact
    - [x] Github
    - [x] Email
    - [ ] Wechat
  - [ ] Support
    - [ ] Buy me a coffee
    - [ ] Paypal
    - [ ] Wechat
    - [ ] AliPay
  - [ ] Blog
    - [ ] coding
  - [ ] 3d character
    - [ ] van life showcase
    - [ ] coffee machine & making

## Commit

- @commitlint/config-conventional

  - build
  - chore
  - ci
  - docs
  - feat
  - fix
  - perf
  - refactor
  - revert
  - style
  - test

**[back to top](#table-of-contents)**
