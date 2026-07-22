# Design QA — 静谧编辑时间轴方案

## 范围

- 保留 Astro / Retypeset、全部文章网址、倒计时逻辑、主题切换、RSS 与 GitHub Pages 发布方式。
- 首页采用横向站点栏、灰粉色倒计时带和时间轴文章列表；文章摘要固定为一行省略。
- 文章详情页共用同一色板、顶部导航、留白、按钮和页脚，正文维持适合长文阅读的行宽。
- 手机端倒计时按最终要求压缩为单行四组数字。

## 视觉基准与浏览器证据

- 桌面端设计基准：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/desktop-reference.png`（1487 × 1058）
- 手机端最终设计基准：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/mobile-reference-one-row.png`（853 × 1844）
- 桌面端实装：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/desktop-implementation-final.jpg`（1440 × 1024）
- 手机端实装：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/mobile-implementation-pass3.jpg`（390 × 844）
- 平板端实装：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/tablet-implementation.jpg`（768 × 1024）
- 手机文章详情页：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/mobile-post-implementation.jpg`（390 × 844）
- 桌面端同输入并排对比：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/design-comparison-final-desktop.jpg`
- 手机端同输入并排对比：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/product-design-selected-v2-build/design-comparison-final-mobile.jpg`

## 最终检查

- 桌面端 1440 × 1024：页面宽度与滚动宽度均为 1440px；横向站点栏、倒计时带、三条时间轴文章和页脚完整落在首屏，无固定侧栏残留。
- 平板端 768 × 1024：页面滚动宽度为 768px；导航右缘 656px、主题按钮左缘 685px，二者保持安全间距；倒计时四组数字仍为同一行。
- 手机端 390 × 844：页面滚动宽度为 390px；倒计时高度 76px，四个计时单元只有一个纵向坐标，即严格单行；时间轴位于 x=96px，第一篇标题高度 24px，保持单行；所有摘要均使用单行省略。
- 文章详情页：390px 下文章宽度 342px，无横向溢出；站点栏、配色、按钮、分隔线、页脚与首页一致，正文行距和段间距适合阅读。
- 字体与层级：沿用项目统一字体系统；标题采用中等字重，正文保持常规字重，日期与辅助信息使用暗梅色弱强调。
- 色彩与表面：背景为珍珠白，倒计时使用低饱和灰粉底色，强调色为灰梅色；无抢眼黄色、渐变或多余阴影。
- 图标与资产：复用 Retypeset 原有主题切换与返回 SVG，没有新增 CSS 图标、手绘 SVG 或占位资源。
- 无障碍：导航、主题按钮、文章链接和返回按钮保留语义与可访问名称；键盘焦点样式明确；减少动态效果偏好下关闭非必要过渡。

## 交互回归

- 主题切换按钮：唯一匹配，浅色与深色切换成功。
- 第一篇文章入口：从 `/` 正确进入 `/posts/show-this-to-your-boss/`。
- 文章返回按钮：从详情页正确返回 `/`。
- 倒计时：秒数持续更新，天 / 时 / 分 / 秒四组均可见。
- 浏览器控制台：0 条 error / warning。

## QA 历史

1. 初次浏览器检查发现 P1：Retypeset 的桌面定位工具类仍把页头、导航和页脚固定在旧侧栏位置。处理：对首页和文章页显式恢复静态横向站点栏，并统一桌面 / 平板 / 手机布局。
2. 第一次同输入对比发现 P2：手机时间轴位于 x=126px，内容列过窄，第一篇标题换成两行。处理：收窄日期列与间距，将时间轴左移至 x=96px，同时把手机标题调整为 16px。
3. 用户最终要求将手机倒计时四组数字放到一行。处理：将模块压缩至 76px 高，四列共享一行，并更新手机端设计基准。
4. 最终桌面和手机同输入并排复查未发现 P0 / P1 / P2 问题。

## 工程验证

- Astro 类型与内容检查：0 errors / 0 warnings / 0 hints。
- 修改文件定向 ESLint：0 errors。
- Astro 静态生产构建：8 个页面生成成功。

final result: passed
