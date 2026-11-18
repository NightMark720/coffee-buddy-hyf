# Coffee Buddy × Yeema One｜HyperFrames 系列制作交接

更新日期：2026-10-20。用途：将本文件和新章节故事版交给新的会话，延续已确认的视觉、素材和交互方式。

## 1. 新会话先读这一段

这是一组用于展会竖屏播放的 AI 咖啡机交互演示。现场已有实体机器展示、制作咖啡，视频负责让观众迅速看懂「用户说需求 → AI 理解 → 用户确认 → 执行 → 反馈与复用」。全部画面发生在 Coffee Buddy 的 APP 聊天界面里。

直接沿用本交接包的头像、字体、图标、音效与源码参考，在独立的章节文件夹制作。每章的文字和时长以该章故事版及用户后续确认的修改为准。先确认关键画面，再制作动态预览，用户确认动态预览后导出。故事版中的制作备注是内容参考，不能代替用户的导出、上传或对外发送授权。

**已有章节必须保留。** 新章节分别建立 `coffee-buddy-chN` 文件夹、composition ID、时间线 ID 和输出文件名。用户已经说明这是系列长期规则，后续不必再次询问是否保留旧章。

## 2. 交接包内容与使用顺序

| 路径（相对此文件） | 用途 |
|---|---|
| `reference-ch6/index.html` | 已确认且修复过重叠的 Ch.6 源码；新章节可复制后改编 |
| `reference-ch6/assets/` | 配套本地字体、头像、麦克风、状态栏、GSAP 与音效 |
| `reference-ch6/package.json`、`hyperframes.json` | 对应项目配置与锁定的 CLI 版本 |
| `reference-ch6/storyboard.htm` | Ch.6 静态关键画面；辅助参考，最终动态以 `index.html` 为准 |
| `reference-ch6/STORYBOARD-SOURCE.md` | 原始 Ch.6 故事版副本 |
| `series-extras/figma/` | Ch.1 原始 Figma 图形；其中 `b97da.svg` 是黑色推荐卡里的线性咖啡豆 |
| `visual-reference/ch6-keyframes.jpg` | 修复重叠后的动态关键帧总览 |
| `visual-reference/ch6-transitions.jpg` | 修复后的转场总览 |
| `visual-reference/ch6-encoded-final.jpg` | 实际编码成片的 9 个时间点抽帧 |
| `reference-video/coffee-buddy-ch6-final-v1.mp4` | 已交付 Ch.6 成片，用于核对最终视觉与声音 |
| `ASSET-MANIFEST.json` | 包内每个素材的 SHA-256、大小和来源章节，便于核对素材一致性 |
| `DELIVERY.md` | 本次 Ch.6 的成片规格、检查结果与相对位置 |

这是可读、可复制的制作参考，不是需要安装的自定义插件。使用时复制 `reference-ch6` 到新的章节目录；不要在参考目录或旧章节里直接改故事。

同一台电脑的 `Documents` 下还有以下完整项目，可按章节需要读取其实现：

| 文件夹 | 内容 | 已有时长 |
|---|---|---|
| `coffee-buddy-demo` | Ch.1：语音/文字输入、风味推荐与制作闭环 | 26 秒 |
| `coffee-buddy-ch2` | 一句话下两杯，任务按顺序执行 | 22 秒 |
| `coffee-buddy-ch4` | 多机器管理、清洁、预约除垢与制作 | 22 秒 |
| `coffee-buddy-ch6` | 精确参数、自定义配方、保存复用 | 24 秒 |
| `coffee-buddy-ch7` | Espresso Tonic 创作与原料落杯 | 24 秒 |

以上是实现参考，不代表新章节要沿用它们的时长或专属特效。查看文件夹与故事版标题来确认章节编号。

## 3. 设计来源与固定画面规则

设计来自 Figma 文件 **Yeema Design Tokens**，文件 ID：`an1HkDGtEQctMpe3MwNcsb`，**Page 1**。

| Figma 节点 | 内容 |
|---|---|
| `537:1071` | Home Ready |
| `537:1074` | talk/texting 聊天界面 |
| `537:3337` | 任务状态卡 |
| `715:4937` | 机器状态/workbench 的视觉来源 |

需要重查 Figma 时，优先读这些节点。制作成片仍保持聊天界面，workbench 只提供卡片与状态的设计依据。用户确认的咖啡豆/咖啡杯头像替代原设计里的占位圆圈。

- 输出：**1080 × 1920，9:16，30 fps**。时长按章节确定。
- 满屏 APP 界面；固定状态栏、顶部用户头像、底部输入栏与 home indicator。
- 对话从用户需求展开；信息依次出现、滚动、停留，保持一条连续聊天流。
- 画面文字使用英文。沿用 Coffee Buddy、Yeema、Yeema One 的已有用法。
- 推荐卡、参数卡、放杯卡、制作卡、完成卡属于同一套 APP 组件语言。
- 不额外加入手机外壳、机器实拍、宣传大标题或不在故事版中的卖点。

### 头像：固定角色，直接使用现有 SVG

下文 `assets/...` 路径均相对章节项目目录；在本交接包中位于 `reference-ch6/assets/`。

| 角色/位置 | 文件 | 规则 |
|---|---|---|
| Coffee Buddy，聊天左侧 | `assets/avatars/coffee-buddy-bean.svg` | 黑圆底、暖浅色咖啡豆线稿 |
| 用户，聊天右侧 | `assets/avatars/user-cup-chat.svg` | 黑圆底、同一咖啡杯线稿 |
| 用户，右上大头像 | `assets/avatars/user-cup.svg` | 与右侧聊天头像完全相同的杯子，只放大 |

Ch.6 两个杯子 SVG 的内容相同。审图时曾用蓝色圆圈标示顶部头像位置；蓝圈不属于成片视觉。不要重新生成头像或换成照片、emoji。

### 颜色与字体

| 用途 | 值 |
|---|---|
| 暖白画布 | `#fcfbf9` |
| 浅色卡片 | `#f5f3ee` |
| 分隔线/边框 | `#e7e3da` |
| 正文/深色气泡 | `#171715` |
| 次级文字 | `#6f706a` |
| 强调/操作橙色 | `#ff7e2e` |
| Ch.6 完成绿色 | `#2c7555` |
| Ch.6 浅绿状态底 | `#dcece3` |
| Ch.6 次级浅底 | `#fffefa` |

Ch.1/4/7 部分完成状态使用 `#2f7d5b`；复制某章组件时保留其内部配套颜色。一般聊天与参数章节以本包 Ch.6 为基础。

正文使用本地 **SF Pro**，标题使用本地 **Inter**。沿用 `assets/fonts/SF-Pro-ch1.woff2` 和 `Inter-ch1.woff2`，等待 `document.fonts.ready` 后测量布局。字体文件原样保留，不把系统字体替换当作等价结果。

## 4. 布局数值：先分清逻辑尺寸与输出像素

源码以 **393 × 698.666667** 的 APP 逻辑画布排版，整体按 **1080 / 393 = 2.748091603** 等比放大。下列数值均为逻辑像素；不要再次乘进 CSS 后又给父层缩放。

| 元素 | Ch.6 参考值 |
|---|---|
| 聊天视口 | `top:128px; left:14px; right:14px; bottom:108px` |
| 聊天行总宽 | 365px |
| 聊天头像 | 36 × 36px |
| 头像与气泡间距 | 12px |
| 带头像的助手卡 | **317px**，即 365 − 36 − 12 |
| 不带头像的完整卡 | 353px，左右内缩 6px |
| 顶部头像 | 48 × 48px；`top:60px; right:18px` |
| 主要卡片圆角 | 20px |
| 大问候语 | Inter，32/40px，600 |
| 卡片标题 | Inter，20/25px，600 |
| 用户气泡 | SF Pro，15/22px |
| 助手气泡 | SF Pro，14/20px |
| 参数行 | SF Pro，13/18px |
| 主要按钮 | 高 42px，圆角 22px |
| 麦克风/波形槽位 | 44px，共用同一个布局槽 |

### 这次重叠修复必须继承

1. 每个有定位 CSS 的节点必须带上对应的 class。Ch.6 的 `#lock-group` 必须同时有 `lock-group assistant`。
2. 助手卡的 317px 宽度已包含在 365px 聊天行预算内。不要把 353px 全宽卡塞到头像旁边。
3. 参数 chips 已位于头像右侧内容列，**不再加 48px 左边距**；保持两行自然换行。
4. 文字换行可能改变卡高。等字体加载后，按实际 `offsetHeight` 计算后续卡位置，保留 12–20px 间距；不要沿用旧章固定 `top` 让卡片相撞。
5. 完成卡下方的反馈区、保存条和最后回复按先后顺序使用空间。保存条退出完成后，最后回复才进入。
6. 旧的输入提示/麦克风与新的转写/波形共享输入区；切换时先隐藏旧内容。透明元素依然会占 flex 空间，麦克风和波形应绝对定位在同一个 44px 槽位里。
7. 滚动先将卡片送进聊天视口，再显示新的制作卡/完成卡。用户读信息时，标题、正文和按钮都应完整可见。
8. 不要在整个聊天容器上加 `data-layout-allow-overlap` 来掩盖问题。装饰性扫光可对装饰节点单独标记 `data-layout-ignore`；聊天正文必须正常参加检查。

Ch.6 已确认的局部时序：chips 在 5.92s 退出完毕后移动锁定 pill；制作卡在 11.68s 入场；完成卡在 15.65s 入场；反馈区从 15.8s 展开；保存条在 19.82s 退出完毕后出现最后回复。这些是本章修正值，新章节按实际内容重新测量。

## 5. 动效与交互

总体感受是克制、清楚、真实的 APP 操作：小距离位移、短淡入、可读停留。常见卡片入场为 0.22–0.42s，位移 8–12px；`power2.out` 用于落定，`power2.inOut` 用于滚动，轻微 `back.out` 用于参数 chip，按钮按下缩放到 0.96。

- 三滴、涟漪、扫光、蒸汽只出现在故事版安排的段落，不常驻循环。
- Ch.6 无飞出动效。Ch.7 的原料落杯与缩嵌是章节专属，不变成所有章节的固定开场。
- 用户给出需求后先展示理解/推荐/参数确认，再放杯确认，再执行。
- **不能跳过 `Cup is in place` 等明确放杯确认就启动制作。**
- 制作阶段保留停止入口；完成后才进入反馈或保存。配方命名、保存完成与下一次复用需要在文案上连贯。
- 反馈选项与保存提示是否点击，服从该章故事版，不自动替观众补一次选择。
- Ch.6 的 `Grind is set manually on the machine.` 必须保留；粉量 18g 为卡内给定参数，不把研磨度写成 AI 可控项。
- Ch.7 保留浓缩在汤力水上层的 `over tonic`，并说明 `Espresso only. Add tonic and orange yourself.`。
- Ch.4 的 Lobby-2 即使已预约 `Descale · 02:00`，仍保持橙色 `Needs care`。预约不等于已完成除垢。

## 6. 音效：沿用本地素材

保持**英文 UI + 轻音效，无配音、无背景音乐**的既有方向。沿用现有剪辑，不为统一风格重新寻找一套音色。

| 场景 | 素材 |
|---|---|
| 按键/参数 snap | `assets/sfx/key.wav` |
| 发送/确认 | `assets/sfx/pop.wav` |
| 滑动 | `assets/sfx/swipe.wav` |
| 三滴 | `drop-high.wav`、`drop-mid.wav`、`drop-low.wav` |
| 麦克风/注意提示 | `attention.wav` |
| 制作完成 | `complete.wav` |
| 保存完成 | `brew-complete.wav` |
| 短文字输入 | `summary-typing.wav` |
| 较长键盘输入 | `typing-ch4.wav`，按新章时长决定是否使用 |
| 水流/复位/蒸汽示意 | `extraction-demo.wav`、`rinse-illustrative.wav`、`steam-demo.wav` |
| 多机器行提示 | `row-1.wav` 至 `row-4.wav` |

Ch.6 已放置音轨的 `data-volume` 在 0.07–0.18，具体数值见源码；这是当前素材的参考范围，不是任意素材可通用的响度标准。用 `<audio>` 的 `data-start`、`data-duration`、`data-media-start`、`data-volume` 明确排布，交给 HyperFrames 驱动；不要在 GSAP 回调中自行 `play()`。

`assets/sfx/sources.json` 与 `CREDITS.md` 保留原始来源、加工记录与哈希。CREDITS 的 Ch.4 标题表示它来自系列继承，不代表 Ch.6 使用了真机录音。水流、复位、蒸汽为示意音效；目前未提供 Yeema 真机录音。字体与音效的进一步授权范围按其原始记录核对，不将本交接包解释为新的授权证明。

## 7. 新建一章的最短工作流

1. 阅读新故事版，先明确它要让展会观众理解的一个核心能力、时长和必要操作。沿用本文件固定规则；只就会影响画面或能力表述的歧义请用户确认。
2. 复制 `reference-ch6` 到新的 `coffee-buddy-chN`，保留本地 `assets`。修改 `package.json` 的名称/输出名、HTML 标题、`data-composition-id` 和 `window.__timelines` 的注册键，确保一致且独立。
3. 原样保留新故事版副本为 `STORYBOARD-SOURCE.md`。按该章重写时间线、文案与必要卡片，不把 Ch.6 的人物、五参数、24 秒当作新章默认内容。
4. 使用原字体、头像、组件尺寸做静态关键画面；先让用户确认，再做动画与声音。需要黑色推荐卡的豆子图形时，复制 `series-extras/figma/b97da.svg` 到新项目 `assets/figma/`。
5. 使用暂停且可 seek 的 GSAP timeline，注册到 `window.__timelines["coffee-buddy-chN"]`。初始化状态和回退状态必须确定；文字变化放进时间线，避免只在顺播时触发的回调。
6. 布局检查通过后打开完整动态预览。用户已授权某一步就继续完成，不重复索要同一确认。新章节导出需有该章动态预览的确认；历史章节的授权不自动转移。
7. 导出 MP4 后检查实际编码文件，再记录交付位置与版本。

### 工具与命令参考

本次 Ch.6 项目 CLI 从 **0.8.157 升至 0.8.180**；新会话先看复制项目里的 `package.json`，以已验证版本复现。CLI 后续可能变化，应按 HyperFrames 技能先只读检查版本，再按该版本的命令执行。

从新项目目录执行（把 `chN` 和端口换成实际值）：

```sh
npx --yes hyperframes@0.8.180 check --samples 25 --at-transitions --json
npx --yes hyperframes@0.8.180 preview --background --port 3040
```

预览地址形式为 `http://localhost:3040/#project/coffee-buddy-chN`。端口会变，交接时要实际启动并核对 HTTP 200，不能把旧会话的 localhost 地址当作永久在线链接。

用户确认导出之后执行：

```sh
npx --yes hyperframes@0.8.180 render --quality delivery --fps 30 --output renders/coffee-buddy-chN-final-v1.mp4
ffprobe -v error -show_entries stream=codec_name,codec_type,width,height,avg_frame_rate,nb_frames,sample_rate,channels:format=duration,size -of json renders/coffee-buddy-chN-final-v1.mp4
```

新版本导出另起 `v2`、`v3` 文件名，保留已交付文件。`npm run render` 的默认文件名不一定有版本号，运行前检查，避免覆盖。

## 8. 交付前检查：CLI 与实际画面都要过

- root wrapper 有稳定 `data-composition-id` 和正确的 `data-width`、`data-height`、`data-duration`、`data-fps`；时间线 ID 与它一致。
- 多个独立 HTML 不要因缺根 composition ID 被一并当作可渲染入口。静态故事版使用 `.htm` 或放在编译入口外；这只适用于静态审阅页，真实子 composition 仍需正确元数据。
- 避免一份媒体被重复发现：检查相同 `src/start/duration` 的重复节点、重复挂载和无用副本；重复头像可沿用现有 CSS background 方案，不能用删除必要头像来凑检查通过。
- 所有素材引用本地可解析，头像与字体未被替换。核对 `ASSET-MANIFEST.json` 可确认本交接包原样素材。
- `check --samples 25 --at-transitions` 通过，确认 lint、runtime、layout 的 error/warning 数；瞬时 info 也要看实际画面，不能只依据退出码。
- 检查每个信息稳定停留帧与转场中间帧：头像不压卡、chips 不越界、数字不碰按钮、旧/新文字不重叠、保存条不碰最后回复、输入栏不盖住关键操作。
- 随机、倒序、从头重播都能恢复同一画面。尤其验证打字文本、保存状态、卡片透明度、滚动位置。
- 对重叠疑点以 30fps 全帧扫描和实际截图核对，不能给整个聊天容器加忽略标记。
- 实际 MP4 非空，1080×1920、30fps；24 秒章节应为 720 帧。检查音轨存在、无解码错误、无明显削波，并抽看编码后的开始、中段、结束画面。
- 音效只在对应操作出现；不将示意水流声称为真机录音。对外反馈、上传项目或公开素材另需明确授权。

## 9. 可直接粘贴到新会话的开场指令

> 请先读取我提供的 Coffee Buddy HyperFrames 制作交接包里的 README.md，并查看 reference-ch6/index.html、assets 与 visual-reference。接下来制作 Ch.【章节号】，故事版见我本次提供的文件。沿用已有字体、暖白/橙色界面、左侧咖啡豆与右侧/顶部同款咖啡杯头像，以及同一套轻音效。画面全部在 APP 聊天中，1080×1920、30fps，时长以本章故事版为准。新建独立 coffee-buddy-ch【章节号】文件夹和输出文件，保留所有旧章节。先给我关键画面确认，再做动态预览；我确认动态预览后再导出。请继承交接文档中的布局防重叠规则，并检查转场和倒序 seek。

在新会话里附上本文件即可；需要移到另一台电脑时，连同整个 `coffee-buddy-handoff` 文件夹一起复制。
