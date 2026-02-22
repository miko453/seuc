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
      { label: "数据盘", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "上限 1TB，再多地窖装不下了。", type: 'slider' },
      { label: "网络带宽", items: ["56kbps 拨号", "1Mbps 老王 WiFi", "信鸽转发"], hint: "带宽越高，掉线越快。", type: 'radio' },
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
      { label: "硬盘空间", items: [], range: { min: 20, max: 1024, step: 20, unit: 'GB' }, hint: "由多个二手 16G U 盘组成。", type: 'slider' },
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
      { label: "计算规格", items: ["单核(挖土用)", "双核(自动深挖)"], hint: "用于驱动挖掘机读取数据。", type: 'radio' },
      { label: "内存配置", items: [], range: { min: 0.5, max: 4, step: 0.5, unit: 'GB' }, hint: "用于缓存咸菜味数据。", type: 'slider' },
      { label: "存储容量", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "1TB 需要占用后院一平米。", type: 'slider' },
      { label: "运输方式", items: ["驴车 (5kbps)", "二锅头贿赂版", "信鸽空运"], hint: "驴车虽然慢，但它不丢包。", type: 'radio' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "dns-loudspeaker",
    title: "大喇叭权威解析 (DNS)",
    description: "采用村口大喇叭进行广播式域名解析，全球（村）可见。",
    price: "2.00",
    unit: "月",
    category: "网络",
    features: ["模拟信号解析", "人工纠错", "支持 1 条 A 记录"],
    options: [
      { label: "解析核心", items: [], range: { min: 1, max: 2, step: 1, unit: 'C' }, hint: "核心越多，喇叭声音越大。", type: 'slider' },
      { label: "内存缓冲", items: [], range: { min: 0.1, max: 1, step: 0.1, unit: 'GB' }, hint: "用于记录老王的笔记。", type: 'slider' },
      { label: "解析延迟", items: ["1小时 (播音员在)", "24小时 (播音员睡觉)", "随缘"], hint: "建议选随缘，心态更平稳。", type: 'radio' }
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
      { label: "计算核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "核心数越多，味道越冲。", type: 'slider' },
      { label: "内存分配", items: [], range: { min: 0.5, max: 8, step: 0.5, unit: 'GB' }, hint: "用于脑补查询缓存。", type: 'slider' },
      { label: "硬盘大小", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "建议不要存太多，猫尿会溢出。", type: 'slider' },
      { label: "出口节点", items: ["地窖排风口", "村长家厨房"], hint: "排风口节点气味最浓郁。", type: 'select' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "anti-complaint",
    title: "地窖抗投诉服务器 (无视一切)",
    description: "物理级抗投诉。由于服务器在地窖里且上锁，任何投诉信都寄不进去。",
    price: "150.00",
    unit: "月",
    category: "安全",
    features: ["物理防火墙(挂锁)", "电磁屏蔽(土层)", "防跨省(找不到路)"],
    options: [
      { label: "CPU 核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "抗投诉专用低频 U。", type: 'slider' },
      { label: "加密内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "阅后即焚（指漏电）。", type: 'slider' },
      { label: "加密硬盘", items: [], range: { min: 100, max: 1024, step: 100, unit: 'GB' }, hint: "数据一旦写入，村长也找不回来。", type: 'slider' },
      { label: "带宽类型", items: ["纯净水拨号", "泥炭宽带", "老王 WiFi"], hint: "泥炭宽带最抗投诉，因为根本不通。", type: 'radio' }
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
      { label: "计算性能", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表小王摇手柄的频率。", type: 'slider' },
      { label: "暂存内存", items: [], range: { min: 0.5, max: 4, step: 0.5, unit: 'GB' }, hint: "小王的短期记忆上限。", type: 'slider' },
      { label: "应用空间", items: [], range: { min: 5, max: 500, step: 5, unit: 'GB' }, hint: "写在墙上的代码量。", type: 'slider' },
      { label: "并发处理量", items: ["1 Req/H", "5 Req/H", "10 Req/H"], hint: "小王写字速度上限是每小时 10 条。", type: 'radio' },
      { label: "出口节点", items: ["村口大喇叭", "李大妈厨房", "地窖出口"], hint: "决定了 JSON 里的错别字频率。", type: 'select' }
    ]
  },

  // --- 其他 (Other) ---
  {
    id: "email-pigeon",
    title: "信鸽邮件服务器 (专业反垃圾)",
    description: "通过训练有素的鸽子投递邮件。自带垃圾邮件过滤（鸽子不叼垃圾）。",
    price: "15.00",
    unit: "月",
    category: "其他",
    features: ["物理分发", "自带加密", "支持回复"],
    options: [
      { label: "投递性能", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表鸽笼的自动化程度。", type: 'slider' },
      { label: "附件内存", items: [], range: { min: 0.5, max: 2, step: 0.5, unit: 'GB' }, hint: "鸽子腿上能绑的重量。", type: 'slider' },
      { label: "信箱容量", items: [], range: { min: 1, max: 100, step: 1, unit: 'GB' }, hint: "也就是鸽棚的大小。", type: 'slider' },
      { label: "信鸽等级", items: ["肉鸽 (入门)", "赛鸽 (极速)", "野鸽 (随缘)"], hint: "赛鸽最快，但容易被老鹰抓。", type: 'radio' }
    ]
  },
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长亲自盖章)",
    description: "由于没有 CA 机构授权，由大槐树村长亲自按红泥章，浏览器必报红。",
    price: "99.00",
    unit: "年",
    category: "其他",
    features: ["物理印章", "村长背书", "有效期 3 天"],
    options: [
      { label: "印章等级", items: ["DV (村口红章)", "OV (村长私章)", "EV (手指印)"], hint: "红章最正式，手指印最鬼畜。", type: 'radio' },
      { label: "存储容量", items: [], range: { min: 1, max: 10, step: 1, unit: 'GB' }, hint: "用于存放印章扫描件。", type: 'slider' }
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
