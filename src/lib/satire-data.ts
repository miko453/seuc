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

export type ProductOption = {
  label: string;
  items: string[];
  hint: string;
  type: 'select' | 'slider' | 'radio';
  range?: { min: number; max: number; step: number; unit: string };
};

export type ProductConfig = {
  id: string;
  title: string;
  description: string;
  price: string;
  unit: string;
  category: string;
  features: string[];
  options: ProductOption[];
};

export const PRODUCTS: ProductConfig[] = [
  // --- 计算 (Compute) ---
  {
    id: "gpu-beast",
    title: "GPU 服务器 (GTX 440 胶带版)",
    description: "通过透明胶带并联的垃圾显卡阵列。虽然只有 4C 8G，但支持扫雷 4K。",
    price: "88.00",
    unit: "月",
    category: "计算",
    features: ["GTX 440 满血版", "手摇散热", "1000% 超开"],
    options: [
      { label: "显卡型号", items: ["GTX 440 (带尘)", "GT 210 (静音即死)", "S3 Trio64"], hint: "GTX 440 是村里最顶级的算力。", type: 'radio' },
      { label: "vCPU 核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "地窖发电机上限就是 4 核。", type: 'slider' },
      { label: "物理内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "再多发电机就要冒烟了。", type: 'slider' },
      { label: "出口节点", items: ["地窖出口", "村长办公室", "老王后院"], hint: "决定了数据的风味。", type: 'select' }
    ]
  },
  {
    id: "vps-elastic",
    title: "轻量应用服务器 (NAT 版)",
    description: "极致共享 IP。由于 18 层 NAT 转发，您的延迟可能绕地球三圈。",
    price: "5.00",
    unit: "月",
    category: "计算",
    features: ["共享 IPv4", "10Mbps 邻居宽带", "跑路保障"],
    options: [
      { label: "CPU 核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "采用 2005 年的奔腾分芯。", type: 'slider' },
      { label: "内存大小", items: [], range: { min: 0.5, max: 8, step: 0.5, unit: 'GB' }, hint: "实际可用视邻居下载情况而定。", type: 'slider' },
      { label: "带宽来源", items: ["老王 WiFi", "信鸽中转", "手摇拨号"], hint: "老王 WiFi 最稳，只要他不改密码。", type: 'radio' }
    ]
  },
  {
    id: "bare-metal",
    title: "裸金属服务器 (村长家台式机)",
    description: "物理独占。除了村长孙子偶尔玩 4399 以外，整台机器都是你的。",
    price: "299.00",
    unit: "月",
    category: "计算",
    features: ["物理独占", "大屁股显示器", "风扇带泥"],
    options: [
      { label: "物理核心", items: ["双核 (已封顶)", "四核 (需加钱)"], hint: "村长家只有这两台机器。", type: 'radio' },
      { label: "出口节点", items: ["客厅电线杆", "书房窗户口"], hint: "信号强度取决于窗帘厚度。", type: 'select' }
    ]
  },

  // --- 存储 (Storage) ---
  {
    id: "storage-jar",
    title: "咸菜缸冷存储 (OSS)",
    description: "绝对物理隔绝。数据塞进防水咸菜缸，安全系数直通地心。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["物理隔绝", "防潮防灾", "读取靠挖"],
    options: [
      { label: "存储容量", items: [], range: { min: 10, max: 2048, step: 10, unit: 'GB' }, hint: "2TB 需要占用后院两平米。", type: 'slider' },
      { label: "运输方式", items: ["驴车 (5kbps)", "二锅头贿赂版", "顺丰(虚构)"], hint: "驴车虽然慢，但它不丢包。", type: 'radio' }
    ]
  },
  {
    id: "usb-drive-cloud",
    title: "高速 SSD 存储 (二手 U 盘)",
    description: "采用扩容 U 盘阵列，读写速度随缘，断电数据归零。",
    price: "2.50",
    unit: "月",
    category: "存储",
    features: ["即插即用", "指示灯狂闪", "自动丢包"],
    options: [
      { label: "空间大小", items: [], range: { min: 8, max: 128, step: 8, unit: 'GB' }, hint: "再大 U 盘就要烧了。", type: 'slider' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "cdn-pigeon",
    title: "信鸽全球加速 (CDN)",
    description: "利用信鸽载体协议实现内容分发。支持缓存、抗劫持（指老鹰）。",
    price: "0.99",
    unit: "GB",
    category: "网络",
    features: ["按羽计费", "离线缓存", "支持 SSL"],
    options: [
      { label: "流量包", items: [], range: { min: 1, max: 100, step: 1, unit: '羽' }, hint: "1 羽流量可传输一张模糊的照片。", type: 'slider' },
      { label: "信鸽种类", items: ["赛鸽 (低延迟)", "肉鸽 (高带宽)", "野鸽 (随缘)"], hint: "赛鸽最快，但容易飞丢。", type: 'radio' }
    ]
  },
  {
    id: "ipv6-invisible",
    title: "IPv6-Only 隐身服务器",
    description: "由于买不起 IPv4，您的网站将处于一个黑客都找不到的次元中。",
    price: "1.00",
    unit: "月",
    category: "网络",
    features: ["海量 IP", "天然防火墙", "由于没人能访问所以极安全"],
    options: [
      { label: "计算核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "隐身状态下的微弱算力。", type: 'slider' }
    ]
  },

  // --- 数据库 (Database) ---
  {
    id: "db-mysql",
    title: "MySQL 托管 (猫尿驱动)",
    description: "通过在硬盘上喷洒猫尿维持磁头活性。异味加密，物理级防盗。",
    price: "19.99",
    unit: "月",
    category: "数据库",
    features: ["MySQL 1.0", "异味加密", "不支持索引"],
    options: [
      { label: "数据库核心", items: [], range: { min: 0.1, max: 4, step: 0.1, unit: 'C' }, hint: "核心数越多，味道越冲。", type: 'slider' },
      { label: "内存分配", items: [], range: { min: 0.5, max: 8, step: 0.5, unit: 'GB' }, hint: "用于脑补查询缓存。", type: 'slider' }
    ]
  },

  // --- 平台 (Platform) ---
  {
    id: "paas-hand-crank",
    title: "PaaS (手摇应用引擎)",
    description: "完全托管。所有 API 请求由小王手动回复 JSON，充满人文关怀。",
    price: "50.00",
    unit: "月",
    category: "平台",
    features: ["手工 JSON", "支持 SQL 盲注(手动回复)", "出口节点可选"],
    options: [
      { label: "并发处理量", items: [], range: { min: 1, max: 10, step: 1, unit: 'Req/H' }, hint: "小王写字速度上限是每小时 10 条。", type: 'slider' },
      { label: "出口节点", items: ["村口大喇叭", "李大妈厨房", "地窖出口"], hint: "决定了 JSON 里的错别字频率。", type: 'select' }
    ]
  },
  {
    id: "saas-leek",
    title: "SaaS 全自动收韭菜系统",
    description: "行业领先。一键收割，全自动心理分析，让每一颗韭菜都感到宾至如归。",
    price: "199.00",
    unit: "月",
    category: "平台",
    features: ["智能收割", "韭菜分析", "自动跑路报表"],
    options: [
      { label: "收割力度", items: ["温柔", "连根拔起", "寸草不生"], hint: "力度越大，回本越快。", type: 'radio' },
      { label: "计算规格", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "用于运行复杂的韭菜算法。", type: 'slider' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "waf-laowang",
    title: "Lao Wang WAF (人肉监控)",
    description: "老王搬个小板凳坐在交换机旁，发现黑客直接拔线。",
    price: "15.00",
    unit: "月",
    category: "安全",
    features: ["物理拔线", "老王锐评", "动态防御"],
    options: [
      { label: "监控时段", items: ["白班 (小王)", "晚班 (老王)", "全天 (大黄)"], hint: "大黄只在陌生人经过时叫。", type: 'radio' }
    ]
  },

  // --- 其他 (Other) ---
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长亲自盖章)",
    description: "由于没有 CA 机构授权，由大槐树村长亲自按红泥章，浏览器必报红。",
    price: "99.00",
    unit: "年",
    category: "其他",
    features: ["物理印章", "村长背书", "有效期 3 天"],
    options: [
      { label: "印章种类", items: ["村委会红章", "村长私章", "手指印"], hint: "红章最正式，手指印最鬼畜。", type: 'radio' }
    ]
  }
];

export const QUEUE_EVENTS = [
  "正在贿赂村口大黄狗...",
  "技术员小王正在从废品站找显卡...",
  "正在手摇点火发电机...",
  "正在通过信鸽协议同步支付信息...",
  "邻居老王正在重启 WiFi 路由器...",
  "村长正在核实您的家庭背景...",
  "地窖机房正在排水（昨天下雨了）...",
  "由于网速 56kbps 订单在半路迷路了...",
  "技术员去吃午饭了，请求已挂起...",
  "正在贿赂村长让他同意您的备案..."
];

export const ORDER_FAIL_REASONS = [
  "余额不足：不仅是您的，我们的卡也被冻结了。",
  "发电机起火：您下单过快，地窖里的发电机冒烟了。",
  "老王改了密码：订单在传输过程中丢失。",
  "信鸽罢工：今天没喂谷子，信鸽拒绝起飞。",
  "硬件坍缩：由于地窖太潮湿，您的硬盘已经生锈了。",
  "由于您长得不像大冤种，村长拒绝为您服务。"
];
