# Ch.7 预览交付

状态：完整动态预览已完成，等待预览确认后导出 MP4。

- 预览：http://localhost:3017/#project/coffee-buddy-ch7；持续后台服务已核对 HTTP 200。
- 规格：1080×1920 竖屏，24 秒，30 fps；英文 UI、23 个音效片段，无配音和音乐。
- 已实现：自然语言输入 → 三滴与创作火花 → Espresso Tonic No.3 → 原料落杯与缩嵌 → Make it → 放杯确认 → 浓缩制作 → Just right 与保存 → 结尾气泡。
- 已确认：汤力水在下、浓缩在上；配方使用 over tonic；确认卡说明 Espresso only. Add tonic and orange yourself.
- 头像：左侧 Coffee Buddy 咖啡豆，右侧与顶部用户使用同一咖啡杯图案。
- 文件独立：本项目为 coffee-buddy-ch7，配置输出 coffee-buddy-ch7-demo.mp4；本次收尾前后对 Ch.1 的 200 个文件逐一比较 SHA-256，内容均未改变。原始故事版副本也与输入文件逐字节一致。
- 检查：.hyperframes/ch7-check.json 通过，lint/runtime/layout/contrast 全部零发现；71/71 对比度检查通过。关键段落已人工抽查，杯子轨迹已检查。
- 预览截图：.hyperframes/review-frames/studio-delivery-preview.png；关键帧总览：.hyperframes/review-frames/contact-sheet.jpg。
- CLI：从 0.8.152 更新至 0.8.155，更新后的检查通过。

Studio 中的 Lint 6 来自其同时扫描的静态故事版和独立组件片段；主 composition 的 CLI 检查通过。机器音效为示意素材，未使用 Yeema 真机录音。工具未读取到订阅额度，当前可用额度未知。

已完成预览验收；MP4 尚未导出。用户确认后执行独立导出，再以 ffprobe 核对尺寸、时长、帧率、720 帧与音轨。
