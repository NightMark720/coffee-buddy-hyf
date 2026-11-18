# Coffee Buddy × Yeema One — Chapter 6: "Precision, by words"
## 分镜脚本 · 时间轴结构版（对齐 UI V1.1 卡片逻辑）

> 本章目标：**自定义饮品**——一句话锁定五个 AI 可控参数（粉量 / 水温 / 压力 / 时间 / 水量比），并保存为可复用配方。
> 全部界面文案为英文（Figma 中文需出英文版）。无配音——文字 + 音效。
> 本章无飞出动效；核心动效为**参数 chips 阵列 + 配方保存闭环**。
> 能力边界：研磨度只能手动——卡内如实注明，是刻意的信任设计。

---

## 0. 全局规格

| 项目 | 值 |
|------|-----|
| 画布 | 1080 × 1920（9:16） |
| 时长 | 24.0 s @ 30 fps（720 帧） |
| 结构 | 一镜到底（Agent 会话流），无剪辑 |
| 颜色 / 字体 | 取自 Figma；参数 chips 用墨黑底 + 白字（数字为视觉焦点） |
| 缓动 | settle: cubic-bezier(0.22,1,0.36,1) · snap: cubic-bezier(0.34,1.56,0.64,1) · exit: cubic-bezier(0.55,0,1,0.45) |
| 动效规则 | 本章无飞出动效；核心为参数 chips 的**阵列式弹入**与「保存为配方」状态 |
| 卡片规则 | 参数确认卡 → 放杯确认卡 → 制作卡 → 完成 + 保存配方 |

---

## 1. 时间轴

| 时间 | 画面 | 屏幕文案 / 交互 | 动效重点 | 叙事目的 |
|------|------|------|------|------|
| 0.0–1.2s | Agent 问候态 | `Hi, Alex`（打字机）／ `What would you like today?`；输入框 + 麦克风 | settle 落定 | 系列统一起始帧 |
| 1.2–2.6s | 语音输入：麦克风波形 + 实时转写（本章展示第二种输入路径） | Alex 长按麦克风说出指令，气泡内文字规范化为：`Pull my shot at 88°C, 9 bar, 28 s, 1:2.`（口语原句 `Pull my shot at 88 degrees, 9 bar, 28 seconds, 1 to 2.`） | 波形 1.4s；转写规范化瞬间（数字→符号）做一次 0.3s 字符级 morph 闪变，只闪一次 | 口语指令 → 精确参数的自然跨越 |
| 2.6–3.8s | 助手块：解析标签 + 三滴图形 | 标签 `Yeema is locking your parameters` | 同系列节奏 | — |
| 3.8–6.0s | 一句简短理解 pill + 五个参数 chips 阵列（两行排布） | pill：`Custom shot · 5 parameters locked`；chips 依次弹入：`Dose 18 g` / `Temp 88°C` / `Pressure 9 bar` / `Time 28 s` / `Ratio 1:2` | chips snap 弹入（0.2s/个，独立轻响）；第五个落定后全阵列微光扫过一次 | 五个数字一句话到位——AI 控制范围的最硬核展示 |
| 6.0–8.2s | 参数确认卡：五行参数行 + 能力边界注记 + 确认 chip | 眉标 `CUSTOM SHOT`；参数行（标签 + 数值 + ± 微调箭头）×5；注记 `Grind is set manually on the machine.`；确认 chip `Brew it →` | 卡片 settle；参数行逐行落定 | 专业用户可在此 ± 微调，感受优先用户可直接确认；研磨手动注记 = 不夸大能力 |
| 8.2–9.4s | 确认 chip 按下 | `Brew it →`；Alex 点击 | scale 0.96 → 实色 | 确认执行 |
| 9.4–11.2s | 放杯确认卡 | 标题 `Place your cup under the spout`；说明 `Once it's set, start brewing.`；CTA `Cup is in place`；Alex 点击 | 卡片 settle；CTA 呼吸 | UX 红线保留 |
| 11.2–15.2s | 任务卡原地激活：状态 chip + 三步进度 + 停止按钮 | 卡头 `Custom Shot` + `Yeema One`；状态 chip `Brewing`；步骤：`Grinding`(11.2–12.1) → `Extraction`(12.1–14.3) → `Disposing`(14.3–14.9)；chip `Resetting`(14.9–15.2)；卡底 `Stop brewing` | 液流进度 + 节点推进 | 参数被忠实执行（真机实录声此刻最有说服力） |
| 15.2–17.2s | 完成态原地更新：绿勾 + 反馈区（不点击） | 状态 chip `Done`（绿）；右上绿勾；反馈 chips：`Too sour` / `Too bitter` / `Too strong` / `Too weak`；`Just right`；`Later` | 状态切换 180–240ms；反馈区展开 0.4s | 系列完成签名 |
| 17.2–19.6s | 卡内浮现保存条 → 点击保存 → 状态行更新 | 保存条：`Save this recipe?` + 主按钮 `Save as "Alex's Shot"` + 次按钮 `Later`；Alex 点击保存；参数卡状态行更新：`Alex's Shot · Saved`（橙字） | 保存条自卡底展开 0.4s；点击后芯片实色 + 文案淡入 | 配方落库 = 出品一致性：任何一台 Yeema 都能复现这杯 |
| 19.6–21.4s | 助手一行 | `Saved. Next time, just say "make my shot".` | 打字 0.9s | 配方有了名字，就有了下一句咒语 |
| 21.4–24.0s | 静帧：参数卡 | — | 参数卡极细蒸汽一次后静止 | 干净结尾 |

---

## 2. 音效清单

| 时间 | 音效 |
|------|------|
| 1.2–2.6s | 麦克风按压 + 液体波形低鸣 |
| 2.6s | bloop（含规范化 morph 轻闪音） |
| 2.6–3.8s | 三滴下落 |
| 4.0–6.0s | chips 弹入五连音（音高递增）+ 阵列扫光 |
| 8.8s | 确认点击 |
| 10.6s | 放杯 CTA 点击 |
| 11.2–15.2s | 研磨 / 萃取 / 咔哒 / 复位（真机实录优先） |
| 15.2s | 完成风铃 |
| 18.6s | 保存轻响（档案落库，与 Ch.1 同音） |
| 19.8s | 打字音 |

---

## 3. 交接备注（给 Codex）

1. 720 帧单一 composition；分层节点：0 / 1.2 / 2.6 / 3.8 / 6.0 / 8.2 / 9.4 / 11.2 / 15.2 / 17.2 / 19.6 / 21.4 / 24.0。
2. 参数 chips 与参数确认卡是同一数据的两种呈现：chips 在会话流（展示），卡片带 ± 微调（操作）。
3. 转写规范化 morph（`88 degrees` → `88°C`）只做一次、0.3s 内完成，不闪第二次。
4. `Grind is set manually on the machine.` 必须保留——能力边界注记，删掉会被设备团队挑战。
5. 文案逐字锁定；帧驱动定时；机器音效优先真机实录。
