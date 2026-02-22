export const ANNOUNCEMENTS = [
  "Compute Engine: 节点 '老王家-1' 因发电机没油已自动关机。",
  "Cloud Storage: 存储桶 '地窖-图片' 因渗水出现位反转。",
  "Billing: 检测到您已成为优质韭菜，系统已自动扣除 500 金币作为‘呼吸费’。",
  "IAM: 村长已撤销您的‘连接 WiFi’权限，请去村委会申诉。",
  "Cloud Run: 服务已停止，原因是由于信鸽因体力不支在半路休息。",
  "BigQuery: 正在处理 1TB 走丢的鸭子数据，预计耗时 3 个月。",
  "Networking: 邻居改了密码，全球负载均衡器已瘫痪。",
  "Security Command Center: 检测到技术员小王正在翻看您的私密文件。",
  "Firebase: 数据库已坍缩，所有数据现已通过量子纠缠方式（指脑补）存储。",
  "App Engine: 由于技术员小王去相亲，所有应用现处于‘随缘运行’模式。"
];

export type ProductConfig = {
  id: string;
  title: string;
  description: string;
  price: string;
  unit: string;
  category: string;
  features: string[];
  options: {
    label: string;
    items: string[];
    hint: string;
  }[];
};

export const PRODUCTS: ProductConfig[] = [
  // 计算类
  {
    id: "vps-gen",
    title: "虚拟专用服务器 (发电机版)",
    description: "高性能（指噪音大）虚拟机实例。支持 1:1000 严重超卖，配备物理散热（指扇扇子）。",
    price: "0.15",
    unit: "小时",
    category: "计算",
    features: ["手摇发电冗余", "邻居 WiFi 接入", "随机内核崩溃"],
    options: [
      { label: "机器类型", items: ["n1-ultra-small (0.0125核)", "n2-imaginary (虚拟核)", "e2-overbooked (千人共用)"], hint: "选择虚拟核时，性能由您的信仰决定。" }
    ]
  },
  {
    id: "light-app",
    title: "轻量应用服务器 (纸飞机版)",
    description: "开箱即用，适合小型（指只有 1 个人访问）博客或测试。采用纸质化存储架构。",
    price: "9.9",
    unit: "月",
    category: "计算",
    features: ["一键跑路脚本", "自动宕机保护", "流量随缘计算"],
    options: [
      { label: "套餐选择", items: ["起步版 (仅工作时间在线)", "进阶版 (支持 5 个并发)", "土豪版 (村长亲自盯着运行)"], hint: "进阶版支持 5 个并发，第 6 个人访问时服务器会起火。" }
    ]
  },
  {
    id: "nat-vps",
    title: "NAT 服务器 (共享 IP 版)",
    description: "通过老王家的路由器进行端口转发。支持 1 个共享 IPv4，端口数由老王心情决定。",
    price: "1.50",
    unit: "月",
    category: "计算",
    features: ["内网穿透(物理版)", "IP 随时失联", "无独立公网 IP"],
    options: [
      { label: "转发协议", items: ["TCP (偶尔通)", "UDP (基本不通)", "ICMP (想都别想)"], hint: "TCP 协议在老王打游戏时会变得极其不稳定。" }
    ]
  },
  {
    id: "rdp-server",
    title: "远程桌面服务器 (全自动挂机)",
    description: "预装 Windows XP 极速版。适合挂载 QQ 宠物、偷菜脚本等高价值业务。",
    price: "25.00",
    unit: "月",
    category: "计算",
    features: ["支持虚拟显卡", "24h 人工值守(指睡觉)", "显存超开 1000%"],
    options: [
      { label: "OS 版本", items: ["XP 纯净版", "Win7 深度版", "Win95 怀旧版"], hint: "Win95 版本附赠‘扫雷’高可用集群。" }
    ]
  },
  {
    id: "dedicated-server",
    title: "独立服务器 (独栋发电机)",
    description: "专机专用。我们为您在地窖里预留了一个咸菜坛子，专门安放这台机器。",
    price: "888.00",
    unit: "月",
    category: "计算",
    features: ["独立 220V 插座", "物理防火墙(大黄狗)", "技术员小王专属服务"],
    options: [
      { label: "硬件级别", items: ["洋垃圾单路", "洋垃圾双路", "报废工作站"], hint: "报废工作站具有极高的收藏价值。" }
    ]
  },
  // 存储类
  {
    id: "oss-manual",
    title: "对象存储 (大妈手工记账)",
    description: "海量非结构化数据存储。每一位数据都由村口李大妈用笔记本记录。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["防潮袋物理存储", "人工 MD5 校验", "读取需排队(等大妈看完电视剧)"],
    options: [
      { label: "冗余级别", items: ["单点大妈", "多点大妈 (广场舞同步)", "跨村冗余"], hint: "跨村冗余需要我们通过信鸽将笔记本寄往邻村。" }
    ]
  },
  {
    id: "big-disk",
    title: "大硬盘服务器 (咸菜缸阵列)",
    description: "适合海量（指 500GB）数据备份。基于最新的 JBOD (Just a Bunch of Old Disks) 架构。",
    price: "50.00",
    unit: "月",
    category: "存储",
    features: ["多余螺丝钉固定", "随机噪音降噪", "读取延迟以分钟计"],
    options: [
      { label: "阵列类型", items: ["RAID 0 (极致自杀)", "RAID 1 (老王也有一份)", "RAID 5 (数学难题)"], hint: "RAID 5 由于计算量太大，会导致 CPU 冒烟。" }
    ]
  },
  // 网络类
  {
    id: "cdn-pigeon",
    title: "内容分发网络 (信鸽 Carrier)",
    description: "全球首家物理分发网络。通过信鸽将硬盘运送到用户家门口。",
    price: "5.00",
    unit: "TB",
    category: "网络",
    features: ["零网络开销", "物理防劫持(指信鸽会躲老鹰)", "按羽计费"],
    options: [
      { label: "信鸽等级", items: ["肉鸽 (入门级)", "赛鸽 (企业级)", "特工鸽 (机密级)"], hint: "赛鸽速度最快，但容易在半路去相亲。" }
    ]
  },
  {
    id: "dns-village",
    title: "智能 DNS 托管 (村口指路)",
    description: "根据用户位置（指在哪个地里）自动解析。解析时间取决于广播大喇叭的嗓门。",
    price: "0.99",
    unit: "域",
    category: "网络",
    features: ["多线路解析(老王线/村长线)", "TTL 永久生效", "缓存手动清理"],
    options: [
      { label: "解析速度", items: ["快如狗 (30秒)", "稳如牛 (3小时)", "随缘 (下周见)"], hint: "‘随缘’模式下，我们会等村委会开会决定解析结果。" }
    ]
  },
  {
    id: "ipv6-only",
    title: "IPv6-Only 服务器 (仅有 6 个 IP)",
    description: "超前部署。我们为您分配了 6 个 IPv6 地址，其中 5 个是技术员脑补的。",
    price: "0.50",
    unit: "月",
    category: "网络",
    features: ["无法连接 IPv4", "原生协议支持", "极其难记的 IP 地址"],
    options: [
      { label: "IP 数量", items: ["6个 (足额)", "1个 (极简)", "0个 (最安全)"], hint: "0 个 IP 地址可以有效预防所有黑客攻击。" }
    ]
  },
  // 数据库类
  {
    id: "mysql-sweet-potato",
    title: "MySQL 托管 (红薯数据库)",
    description: "基于红薯存储介质。支持 SQL 查询（通过纸条传递）。",
    price: "12.00",
    unit: "库",
    category: "数据库",
    features: ["防爆备份(深埋)", "慢查询人工处理", "支持红薯 SQL 语法"],
    options: [
      { label: "存储引擎", items: ["InnoDB (地窖内)", "MyISAM (我的红薯)", "Memory (即吃即焚)"], hint: "Memory 引擎在村长饿了的时候会丢失所有数据。" }
    ]
  },
  // 平台与高级类
  {
    id: "paas-platform",
    title: "PaaS (村长跑路平台)",
    description: "一站式应用构建。我们为您准备了所有的跑路工具，无需关心底层发电机。",
    price: "99.00",
    unit: "APP",
    category: "平台",
    features: ["自动缩容至 0", "环境即焚", "代码泄露保护"],
    options: [
      { label: "运行环境", items: ["PHP 4.0", "Python 2.3", "Node.js 0.1"], hint: "我们只提供最稳定的老旧版本，防止您引入过新的 Bug。" }
    ]
  },
  {
    id: "saas-leek",
    title: "SaaS (自动收韭菜系统)",
    description: "企业级管理软件。包含‘员工心理控制’、‘工资条自动消失’等核心模块。",
    price: "199.00",
    unit: "月",
    category: "平台",
    features: ["全自动压榨", "KPI 脑补生成", "老板跑路提醒"],
    options: [
      { label: "管理深度", items: ["浅层洗脑", "中层打鸡血", "深层 PUA"], hint: "‘深层 PUA’模式会向员工发送‘这是对你的锻炼’等自动消息。" }
    ]
  },
  {
    id: "iaas-gen",
    title: "IaaS (基础设施即发电机)",
    description: "最底层的资源交付。直接交付一台发电机和一桶柴油到您的机柜。",
    price: "1500.00",
    unit: "月",
    category: "平台",
    features: ["物理层交互", "柴油自理", "手动点火服务"],
    options: [
      { label: "发电机型号", items: ["常柴单缸 (经典)", "潍柴多缸 (豪华)", "人力手摇 (环保)"], hint: "人力手摇模式需要您自带两名壮丁。" }
    ]
  },
  // 安全类
  {
    id: "anti-complaint",
    title: "抗投诉服务器 (地窖屏蔽版)",
    description: "完美防御所有投诉。地窖深达 50 米，且由大黄狗严密看守，邮递员都进不去。",
    price: "300.00",
    unit: "月",
    category: "安全",
    features: ["物理层无视投诉", "IP 随时跳转", "数据销毁保险"],
    options: [
      { label: "屏蔽等级", items: ["屏蔽律师函", "屏蔽法院传票", "屏蔽全球通缉"], hint: "最高等级会断开所有网线，确保绝对安全。" }
    ]
  },
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长亲自盖章)",
    description: "全绿加密图标。由村委会 CA (Cun-Committee Authority) 签发。",
    price: "5.00",
    unit: "年",
    category: "安全",
    features: ["村长手印防伪", "地窖加密协议", "浏览器提示不安全(正常现象)"],
    options: [
      { label: "证书等级", items: ["DV (大王认证)", "OV (二王认证)", "EV (村委会集体认证)"], hint: "EV 证书会在您的网站底部显示村长的电子签名。" }
    ]
  }
];
