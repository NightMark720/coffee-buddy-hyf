---
format: 1080x1920
duration: 24s
message: "Coffee Buddy invents a named drink from context, ingredients and taste."
arc: "Context -> Creation -> Visualization -> Confirmation -> Espresso -> Save"
audience: exhibition visitors
mode: collaborative
status: preview-review
---

# Ch.7 制作与预览记录

原始故事版完整保留于 STORYBOARD-SOURCE.md。本文件记录已确认调整、实际制作与检查结果，不替换原文。

## Frame 1 - Context

- status: implemented
- duration: 4.4s
- scene: Greeting, keyboard input and sent user message.
- narrativeRole: Show weather, available ingredients and the request for surprise.

0.0–4.4 秒：Hi, Alex / What would you like today?；输入并发送完整句子。输入句实际含 69 个字符，快速打字后持续保留气泡，音效不必逐字符一一对应。

## Frame 2 - Creation

- status: implemented
- duration: 4.8s
- scene: Three drops, a small spark, named response and recipe card.
- narrativeRole: Distinguish invention from a standard recommendation.

4.4–9.2 秒：三滴后增加一簇短促橙色火花，显示 Espresso Tonic No.3、配方卡、5°C 与 32°C · Sunny。配方卡预留空槽，不提前出现成品杯。

## Frame 3 - Ingredient-to-Cup Moment

- status: implemented
- duration: 3.2s
- scene: Ingredient words fall into a glass, which returns to the recipe slot.
- narrativeRole: Make the creation tangible while preserving the chat world.

9.2–12.4 秒：聊天保留并压暗 15%；原料词落杯，汤力水、浓缩与橙片依序形成饮品，杯壁出现冷凝，成品杯缩嵌回空槽。实际缩嵌发生于 11.72–12.27 秒；大杯构图、运动轨迹与缩嵌终点均已检查。

## Frame 4 - Explicit Confirmation

- status: implemented
- duration: 3s
- scene: Make it action followed by cup-placement confirmation.
- narrativeRole: Preserve the user's explicit approval and cup safety check.

12.4–15.4 秒：保留饮品确认与放杯确认。13.2 秒点击 Make it →，14.8 秒点击 Cup is in place。确认卡已加入用户批准的 Espresso only. Add tonic and orange yourself.

## Frame 5 - Espresso Execution

- status: implemented
- duration: 4s
- scene: The same task card updates grinding, extraction, disposing and resetting.
- narrativeRole: Execute the coffee portion without claiming automatic cocktail assembly.

15.4–19.4 秒：Grinding → Extraction → Disposing → Resetting，保持一张任务卡原地更新。机器声音沿用示意素材，后续可换真机实录。

## Frame 6 - Save the Creation

- status: implemented
- duration: 3s
- scene: Done, Just right, save message and assistant follow-up.
- narrativeRole: Turn a one-off creation into a reusable personal recipe.

19.4–22.4 秒：Done，点击 Just right，Saved to your creations.，助手补充 No.3 可按名字再次调用。保存音沿用 Ch.1。

## Frame 7 - Living Hold

- status: implemented
- duration: 1.6s
- scene: The recipe card and embedded cup remain visible.
- narrativeRole: Leave a clean, memorable cold-drink finish.

22.4–24.0 秒：配方卡与嵌位杯保留，杯内少量微气泡持续上升；一次冷凝高光结束后静止。

## 已确认并实施的调整

1. 液体层次：用户批准汤力水在下、浓缩在上，配方描述改为 Bright espresso over tonic, finished with orange. Cold at 5°C.
2. 能力边界：用户批准在放杯确认卡补充 Espresso only. Add tonic and orange yourself.，保留 Make it → 与 Cup is in place。
3. 视觉风格：用户批准关键画面后授权完整制作；杯子采用与系列相容的简洁色块插画，画面继续发生在 APP 聊天框中。

## 完成条件

- Ch.1 的全部原有文件内容不变。
- Ch.7 项目、预览身份和输出文件独立。
- 1080x1920，24 秒，30 fps；最终视频 720 帧并包含音轨。
- 左侧豆、右侧杯、顶部同杯的头像规则一致。
- 杯子缩嵌终点与配方卡图标槽准确吻合。
- 放杯确认保留；机器段不暗示自动加入汤力水、橙片或冰。
- 完整检查通过，并抽查输入、调制、确认、冲泡、保存和结尾。
- 用户确认完整预览后才导出 coffee-buddy-ch7-demo.mp4。

## 当前进度与验收

- Ch.7 的独立动态预览已完成，完整时长 24 秒；composition 声明 1080×1920、30 fps，已编排 23 个音效片段，无配音和音乐。
- 源文件 index.html 与 animation.js 已同步。输入、配方、大杯成型、缩嵌、放杯确认、制作、保存与结尾已抽查；缩嵌终点已通过关键帧轨迹检查。
- 完整检查通过：lint、runtime、layout、contrast 均为 0 错误、0 警告、0 信息；71 项对比度检查全部通过。报告位于 .hyperframes/ch7-check.json。未声明 motion sidecar 的自动断言；运动已通过快照、轨迹图及 Studio 播放检查。
- Studio 地址为 http://localhost:3017/#project/coffee-buddy-ch7，服务已核对 HTTP 200。2026-10-14 已修复 Studio lint：静态审核页改名为 storyboard.htm，原内容不变，避免被识别为视频入口和重复媒体；独立 shimmer-sweep 组件已补齐稳定 composition 标识。Studio 显示 All checks passed，完整 check 在 0、3.5、10、14.4、23.97 秒抽查通过，71 项对比度检查全部合格。
- Ch.1 先前 200 个文件的核对结果为无内容变化；原始故事版副本与输入文件一致。Ch.7 未复制旧 MP4，项目身份与默认输出文件独立。
- CLI 已从 0.8.152 更新至 0.8.155，更新后的完整检查通过。
- 尚待用户确认完整动态预览，随后导出 coffee-buddy-ch7-demo.mp4，并核对 720 帧、30 fps、24 秒和音轨。当前未生成 Ch.7 MP4。
