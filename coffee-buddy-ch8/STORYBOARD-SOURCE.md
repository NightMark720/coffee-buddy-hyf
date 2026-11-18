# Coffee Buddy × Yeema One — Chapter 8: "Name it. Keep it. Repeat it."
## 分镜脚本 · 时间轴结构版（对齐 UI V1.1 卡片逻辑 · 私人饮品库新功能）

> 本章目标：**私人饮品库**——冲泡 → 口味确认 → 命名 → 库中查看配方数据（粉量 / 磨豆档位 / 萃取方式 / 液重 / 萃取段数）→ 一键复现。章节独立成片，不依赖其他章节。
> 全部界面文案为英文（Figma 中文需出英文版）。无配音——文字 + 音效。
> 本章无飞出动效；核心画面为**饮品库页面 + 配方数据详情**——数据密度最高的一章。
> 能力边界：磨豆档位在配方中为**记录展示**（研磨仍手动设定），UI 不出现「AI 调整研磨」表述。

---

## 0. 全局规格

| 项目 | 值 |
|------|-----|
| 画布 | 1080 × 1920（9:16） |
| 时长 | 28.0 s @ 30 fps（840 帧） |
| 结构 | 两段：Agent 会话流（0–19.8s）→ 页面右滑进入饮品库（19.8s）→ 库内一镜到底 |
| 颜色 / 字体 | 取自 Figma；配方数据行用等宽数字字体（数据是主角） |
| 缓动 | settle: cubic-bezier(0.22,1,0.36,1) · snap: cubic-bezier(0.34,1.56,0.64,1) · exit: cubic-bezier(0.55,0,1,0.45) |
| 动效规则 | 本章无飞出动效；核心动效为**库页面推入 + 配方行逐项落定** |
| 卡片规则 | 推荐卡 → 放杯确认卡 → 制作卡 → 完成 + 反馈 → 命名卡 → 库卡 → 配方详情 → 复现任务卡 |

---

## 1. 时间轴

### 第一段 · Agent（0–19.8s）

| 时间 | 画面 | 屏幕文案 / 交互 | 动效重点 | 叙事目的 |
|------|------|------|------|------|
| 0.0–1.2s | Agent 问候态 | `Hi, Alex`（打字机）／ `What would you like today?`；输入框 + 麦克风 | settle 落定 | 系列统一起始帧 |
| 1.2–2.8s | 语音输入：麦克风波形 + 实时转写 | Alex 长按麦克风说出：`Make me something smooth and chocolatey — with oat milk.` | 波形 1.6s；液面 3 层正弦 ±20%；麦克风按压音 + 低鸣 | 需求入口（语音路径） |
| 2.8–4.0s | 助手块：解析标签 + 三滴图形 | 标签 `Yeema is reading your taste` | 同系列节奏 | — |
| 4.0–5.8s | 一句简短理解 pill + 三个口味标签 | pill：`A smooth, chocolatey oat latte`；标签：`Chocolatey` / `Silky` / `Oat milk` | pill settle；标签 snap 弹入，各升香气微粒 | 模糊语义→结构化口味 |
| 5.8–7.4s | 黑色推荐卡 | 眉标 `YOUR COFFEE MATCH`；品名 `Velvet Oat Latte`；描述 `Cocoa-soft espresso folded into steamed oat milk.`；chips `Medium-dark roast` · `Cocoa` · `Oat milk` | 卡片重量感 settle | 推荐是"回答"而非"列表" |
| 7.4–8.6s | 确认 chip 按下 | `Brew it →`；Alex 点击 | scale 0.96 → 实色 | 确认执行 |
| 8.6–10.4s | 放杯确认卡 | 标题 `Place your cup under the spout`；说明 `Once it's set, start brewing.`；CTA `Cup is in place`；Alex 点击 | settle；CTA 呼吸 | UX 红线 |
| 10.4–14.4s | 任务卡原地激活 | 卡头 `Velvet Oat Latte` + `Yeema One`；chip `Brewing`；步骤：`Grinding`(10.4–11.3) → `Extraction`(11.3–13.1，副标签 `Steaming milk · venturi`) → `Disposing`(13.1–13.7)；chip `Resetting`(13.7–14.4)；卡底 `Stop brewing` | 液流进度 + 节点推进；奶白细流在 Extraction 阶段流动 | 真实状态驱动 |
| 14.4–15.8s | 完成态 + 反馈点击 | chip `Done` + 绿勾；反馈 chips：`Too sour` / `Too bitter` / `Too strong` / `Too weak`；CTA `Just right`；`Later`；Alex 点击 `Just right` | 绿勾 snap；点击后芯片实色 | 口味确认：这一杯对了 |
| 15.8–17.8s | **命名卡**浮现于完成卡下方：输入框 + 保存按钮 | 标题 `Love it? Name it and keep it.`；输入框 placeholder `Name this drink…`；Alex 打字：`Midnight Cloud`；点击 `Save to library` | 卡片 settle；打字 ×15 键；保存按钮按下实色 | 命名的仪式感：一杯饮品变成你的资产 |
| 17.8–19.8s | 命名落定：卡内出现库条目 + 查看入口 | 完成卡状态行更新：`Midnight Cloud · in your library`（橙字）；条目右侧箭头 chip `View library` | 状态行淡入；箭头 chip 滑入 | 埋下转场钩子 |

### 第二段 · 饮品库（19.8–28.0s）

| 时间 | 画面 | 屏幕文案 / 交互 | 动效重点 | 叙事目的 |
|------|------|------|------|------|
| 19.8–20.6s | 页面右滑推入饮品库；Agent 会话流左出 | 库标题 `Your drink library`；副文 `3 drinks · synced with your account` | 页面推入 0.6s（exit 略快），保持空间连续 | 从对话到资产：空间切换即语义切换 |
| 20.6–22.6s | 库内饮品卡网格：2×2 卡位（3 卡 + 1 空位） | 卡1 `Alex's Shot`；卡2 `Morning Americano`；卡3 `Midnight Cloud` · 角标 `Just saved`；空位虚线 `+ Brew something new` | 三卡依次落定；新卡带一次橙光扫过 + `Just saved` 角标 snap | 库里已有两杯存量饮品——新卡入场，库在使用中生长；各章独立，卡名不引用其他章节 |
| 22.6–25.4s | 点击新卡 → 配方详情展开（本章核心画面）：饮品名 + 五项配方数据行 | 标题 `Midnight Cloud`；副标 `Velvet Oat Latte base · Yeema One`；数据行逐项落定：`Dose 18 g` / `Grind level 3` / `Extraction low-pressure pre-infusion → 9 bar` / `Yield 36 g` / `Stages 2 · pre-infusion + extraction`；底部主 CTA `Re-brew →` + 次按钮 `Adjust` | 五行数据 0.2s/行 依次落定（等宽数字，落定有独立轻响）；底部 CTA 最后浮起 | B 端核心信息帧：配方是**可移植的数据**——换一台机器，同一杯 |
| 25.4–26.6s | 点击 `Re-brew →`：页面滑回 Agent，任务卡已就位 | 任务卡 `Midnight Cloud` + `Yeema One`；chip `Brewing` 已激活 | 页面滑回 0.6s；卡片已处于 Brewing（无放杯确认——叙事设定为杯在原地；见备注 6） | 一键复现：从数据到出品一步 |
| 26.6–28.0s | 制作卡推进 + 完成 | 步骤 `Grinding`(26.6–27.0) → `Extraction`(27.0–27.6) → chip `Done`(27.6–28.0) 静帧 | 液流快速推进（压缩节奏）；27.6s 绿勾 snap 后静帧 | 干净结尾：库里的每一杯都能立刻再来一杯 |

---

## 2. 音效清单

| 时间 | 音效 |
|------|------|
| 1.2–2.8s | 麦克风按压 + 液体波形低鸣 |
| 2.8s | bloop |
| 2.8–4.0s | 三滴下落 |
| 15.8–17.8s | 键盘 whoosh + 按键音 ×15 + 保存点击 |
| 18.4s | 保存轻响（系列统一保存音效） |
| 19.8s | 页面推入 whoosh（上行） |
| 20.6–22.6s | 三卡落定（三连音）+ 橙光扫过 |
| 22.6–25.4s | 数据行五连落定（音高递增，等宽数字感） |
| 25.4s | 页面滑回 whoosh（下行） |
| 26.6–27.6s | 研磨 / 萃取（压缩版，真机实录） |
| 27.6s | 完成风铃 |

---

## 3. 交接备注（给 Codex）

1. 840 帧单一 composition；分层节点：0 / 1.2 / 2.8 / 4.0 / 5.8 / 7.4 / 8.6 / 10.4 / 14.4 / 15.8 / 17.8 / 19.8 / 20.6 / 22.6 / 25.4 / 26.6 / 28.0。
2. 饮品库为独立页面层（同工作台推入手势）：Agent 左出、库右入；配方详情为库内展开，不另起页面。
3. 配方数据用等宽数字字体；五行数据是全章视觉主角，间距按 8pt 节奏。
4. 库内 `Alex's Shot` 与 `Morning Americano` 仅作存量占位（各章独立，不与其他章节联动），如 Figma 有实际饮品名可替换。
5. `Grind level 3` 为**记录展示**（研磨手动设定），UI 中不出现"AI 调整研磨"的表述。
6. 25.4s 复现流程**省略放杯确认**：叙事设定为杯子仍在出杯口（紧接上一杯的连续动作），与 Ch.3 的全自动省略理由不同——若 UX 团队要求保留，在任务卡激活前插 1.2s 放杯确认，总时长 +1.2s。
7. 文案逐字锁定；帧驱动定时；机器音效优先真机实录。
