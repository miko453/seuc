# 村口云 (Cunkou Cloud) v4.0 - 全球领先的地窖托管方案

> "用得起的云，用不一定起的心"

本仓库已由 **村委会信息通信发展司** 深度签发 (Signed by GIT-S)。我们提供行业领先的 **内存超售** 与 **CPU 超售** 技术，搭配 **城中村机房** 与 **黑宽带**，实现成本自由与延迟随机化。

## 🚀 核心特性 (Mothership Features)

- **工业级探针 v4.0**: 实时监控 9+ 离谱节点，包含 CPU 温度、磁盘占用及著名的 **WD Blue HDD SWAP** 物理灾难预警。
- **数字考古镜像库**: 支持从 Windows 3.11 到 Plan 9 的全量考古级镜像，主打一个“随缘运行”。
- **全维度业务选配**: 所有服务器支持 CPU (Max 4C)、RAM (Max 8G)、硬盘 (Max 1TB) 以及“出口节点”的深度配置。
- **Passenger 兼容**: 原生支持 Phusion Passenger 启动，基于 `app.js` (Express) 封装。

## 🛠 启动指南

### 1. 本地开发 (手摇发电模式)
```bash
npm run dev
```

### 2. 生产环境启动 (Passenger / Express)
项目已配置 `app.js` 作为入口，支持 Passenger Manager 直接挂载。
```bash
npm start
```

## 🔒 签发建议

为了符合村口合规要求，请在提交时使用 GPG 签发：
```bash
git commit -S -m "feat: implement village-grade industrial monitoring v4.0"
```

## ⚠️ 风险提示
* 促销解释权归断电的那位师傅所有。抢修成功则优惠失效。
* 内存超卖比例最高可达 1:1000，请勿在服务器内运行任何需要真实物理内存的程序。
* 磁盘阵列由 5.25 寸软盘与拆机 SSD 混编，数据丢失属于“量子坍缩”正常现象。

© 2026 大槐树村信息技术发展有限责任公司. (并无任何法律效力)
