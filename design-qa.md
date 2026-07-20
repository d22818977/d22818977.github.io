# Design QA — 首页与文章详情页统一方案

## 目标与范围

- 保留 Retypeset / Astro、现有文章网址、倒计时逻辑、主题切换和 GitHub Pages 发布方式。
- 首页采用方案 3 的固定侧栏、倒计时横条和整行文章入口；文章标题、黄色细下划线、摘要、日期与分隔线采用方案 1 的阅读样式。
- 文章详情页以当前首页为唯一视觉基准，统一侧栏、导航、字体、灰色发丝分隔线、黄色强调、主题按钮与页脚；文章正文保留更适合长文阅读的行宽和行距。

## 文章详情页视觉来源

- 桌面端首页基准：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/source-home-desktop-1280x720.png`（1280 × 720）
- 手机端首页基准：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/source-home-mobile-viewport.png`（390 × 844）
- 修改前桌面文章页：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/article-desktop-before-1280x720.png`
- 修改前手机文章页：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/article-mobile-before-loaded.png`

## 文章详情页最终实现证据

- 桌面端完整视口：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/article-desktop-after-dark.png`（1280 × 720）
- 手机端完整视口：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/article-mobile-after-dark.png`（390 × 844）
- 桌面端首页与文章页同输入并排对照：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/compare-desktop.png`
- 手机端首页与文章页同输入并排对照：`/Users/yichu/Documents/Codex/2026-07-12/quiet-pages-sites-project-appgprj-6a527368bf98819188a272c7d26ff905-3/work/article-detail-design-qa/compare-mobile.png`

## 对照结论

- 桌面布局：文章页与首页共用 19.25rem 左栏分界、3rem 左侧起点和 4.75rem 主内容内边距；标题从主内容顶部正常开始，不再裁切或挤到右栏。
- 手机布局：文章页与首页共用 24px 页面留白、完整站点标题/副标题、横向导航和 48 × 48px 主题按钮；390px 视口无横向溢出。
- 视觉语言：标题字重、黄色 2px 下划线、灰色发丝分隔线、正文色阶、标签和返回入口与首页文章列表保持一致。
- 阅读节奏：正文宽度在桌面限制为 46rem，段落行高 1.85；手机标题允许平衡换行，正文不贴边，长文仍保留舒适扫描节奏。
- 资产与无障碍：继续复用 Retypeset 现有主题与返回 SVG；导航、主题切换和返回按钮均保留明确可访问名称。

## QA 历史

1. 基线发现 P1：桌面文章标题贴在视口顶端并被裁切，站点栏错置在右侧；手机文章页没有页面留白，副标题和导航被隐藏，内容与边缘相贴。
2. 新增文章页专用响应式外壳并复用首页视觉变量，重排标题、日期、正文、标签、返回入口和页脚；重新捕获桌面与手机视口。
3. 最终同输入并排检查未发现 P0 / P1 / P2 问题。主题切换可进入暗色并恢复；首页文章入口可进入详情页，详情页返回按钮可回到首页；关键控件均唯一且可访问。

## 工程验证

- Astro 类型与内容检查：通过（0 errors / 0 warnings / 0 hints）
- 修改文件定向 ESLint：通过
- Astro 生产构建：通过（8 个页面生成成功）

## Final result

passed
