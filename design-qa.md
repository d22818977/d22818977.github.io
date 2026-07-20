# Design QA — Retypeset 首页融合方案

## 目标与范围

- 保留 Retypeset / Astro、现有文章网址、倒计时逻辑、主题切换和 GitHub Pages 发布方式。
- 首页采用方案 3 的固定侧栏、倒计时横条和整行文章入口；文章标题、黄色细下划线、摘要、日期与分隔线采用方案 1 的阅读样式。
- 本轮仅修改首页视觉与响应式呈现，文章详情页和内容数据不变。

## 视觉来源

- 桌面端参考：`/Users/yichu/.codex/generated_images/019f56f5-3498-7841-83c3-368ba7c37346/exec-487eda72-c2c6-4b13-83a0-404bdb674404.png`（1487 × 1058）
- 手机端参考：`/Users/yichu/.codex/generated_images/019f56f5-3498-7841-83c3-368ba7c37346/exec-832fb3bf-c6e5-4787-9f02-0f3f185738c2.png`（完整页面概念图）

## 最终实现证据

- 桌面端，同参考尺寸、浅色主题、首页顶部：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-implementation-qa/implementation-desktop-reference-size-final.png`
- 手机端，390 × 844 视口、浅色主题、完整页面：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-implementation-qa/implementation-mobile-full-final.png`
- 全局并排对照（桌面全页 + 手机首屏）：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-implementation-qa/comparison-viewport-final.png`
- 手机端重点并排对照（倒计时、文章列表、页脚）：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-implementation-qa/comparison-mobile-focus-final.png`

## 对照结论

- 布局：桌面固定左栏、主内容起点、倒计时横条、三篇文章分区和页脚位置与参考图一致；手机端改为头部、横向导航、四列倒计时和纵向文章列表，无横向溢出。
- 视觉：沿用现有 Retypeset 字体和配色变量；标题粗细、黄色细下划线、浅灰发丝分隔线、摘要层级和箭头入口均与融合稿一致。
- 响应式：390px 视口下标题、数字与摘要无裁切，主题按钮为 48 × 48px，文章整行可点击。手机完整页面比概念图略长，这是为保持真实正文可读性和触控间距而保留的低优先级差异。
- 资产：主题按钮和文章箭头均复用项目现有 SVG。概念图的日/月图标与现有 Retypeset 主题图标略有差异，功能和可访问名称保持正确。

## QA 历史

1. 初版发现手机倒计时天数被裁切、首篇文章起点偏低，页脚误隐藏 RSS/GitHub 并显示了 Powered by。
2. 将手机倒计时数字与单位改为上下堆叠，收紧手机头部与导航间距，修正页脚条件类；重新捕获桌面端和手机端。
3. 最终并排检查未发现 P0 / P1 / P2 问题。主题切换已验证可进入并恢复浅色状态；首篇文章整行入口已验证跳转到 `/posts/show-this-to-your-boss/` 并可返回首页；浏览器控制台无错误。

## 工程验证

- Astro 类型与内容检查：通过（0 errors / 0 warnings / 0 hints）
- Astro 生产构建：通过
- 修改文件定向 ESLint：通过
- 已知全仓库 lint 噪声：`.github/workflows/deploy.yml` 存在本轮之前的多余空行，与首页实现无关。

## Final result

passed
