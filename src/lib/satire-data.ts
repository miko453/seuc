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
    title: "GPU 服务器 (电子骨灰盒版)",
    description: "顶级算力阵列。通过透明胶带并联 GTX 440，支持扫雷 4K 运行。",
    price: "88.00",
    unit: "月",
    category: "计算",
    features: ["GTX 440 满血版", "手摇散热系统", "1000% 算力超开"],
    options: [
      { label: "显卡型号", items: ["GTX 440 (带尘版)", "GT 210 (静音即死亡)", "S3 Trio64 (复古算力)"], hint: "GTX 440 具备 1GB 珍贵显存，足以处理您的 8bit 贴图。", type: 'radio' },
      { label: "vCPU 核心", items: [], range: { min: 1, max: 128, step: 1, unit: 'vCPU' }, hint: "虽然你选了 128 核，但实际上它们都在共享同一个生锈的风扇。", type: 'slider' },
      { label: "物理内存", items: [], range: { min: 4, max: 1024, step: 4, unit: 'GB' }, hint: "超过 16GB 后，技术员小王会尝试用 U 盘充当虚拟内存。", type: 'slider' },
      { label: "数据硬盘", items: [], range: { min: 20, max: 2000, step: 20, unit: 'GB' }, hint: "读写时请保持安静，以免硬盘磁头掉落。", type: 'slider' }
    ]
  },
  {
    id: "vps-elastic",
    title: "弹性专用服务器 (VPS)",
    description: "极致超开。CPU 和内存均可弹性调节，只要邻居不改密码绝不断网。",
    price: "5.00",
    unit: "月",
    category: "计算",
    features: ["共享 IPv4", "100Mbps (邻居带宽)", "全自动跑路保障"],
    options: [
      { label: "计算能力", items: [], range: { min: 1, max: 64, step: 1, unit: 'vCPU' }, hint: "核心数取决于技术员小王的心情。", type: 'slider' },
      { label: "内存容量", items: [], range: { min: 0.5, max: 512, step: 0.5, unit: 'GB' }, hint: "实际可用约为选定值的 0.01%。", type: 'slider' },
      { label: "SSD 存储", items: [], range: { min: 10, max: 1000, step: 10, unit: 'GB' }, hint: "存储在村长家地窖的旧硬盘中。", type: 'slider' },
      { label: "网络带宽", items: [], range: { min: 1, max: 1000, step: 10, unit: 'Mbps' }, hint: "取决于老王家路由器的信号强度。", type: 'slider' }
    ]
  },

  // --- 存储 (Storage) ---
  {
    id: "storage-jar",
    title: "咸菜缸冷存储 (OSS)",
    description: "高可用冷存储。数据打印后塞进防水咸菜缸，绝对离线安全。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["物理隔绝", "风味数据", "读取靠挖"],
    options: [
      { label: "存储容量", items: [], range: { min: 10, max: 5000, step: 100, unit: 'GB' }, hint: "1TB 存储需要占用村长家后院两平米土地。", type: 'slider' },
      { label: "读取带宽", items: ["人力搬运 (1kbps)", "驴车快递 (5kbps)", "顺丰(假装有)"], hint: "选择人力搬运需额外支付一瓶二锅头。", type: 'radio' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "cdn-pigeon",
    title: "内容分发网络 (CDN)",
    description: "信鸽全球加速。利用物理层信鸽协议，实现数据的近场分发。",
    price: "0.99",
    unit: "GB",
    category: "网络",
    features: ["物理层加速", "抗劫持", "按羽计费"],
    options: [
      { label: "月流量包", items: [], range: { min: 10, max: 1000, step: 10, unit: '羽' }, hint: "1 羽流量约等于 1GB 数据传输量。", type: 'slider' },
      { label: "分发节点", items: ["村口桥头", "李大妈家", "全村广播站"], hint: "节点越多，鸽子累死的概率越大。", type: 'select' }
    ]
  },
  {
    id: "ipv6-pure",
    title: "IPv6-Only 纯净服务器",
    description: "由于买不起 IPv4，您的业务将处于一个没人找得到的网络中。",
    price: "1.00",
    unit: "月",
    category: "网络",
    features: ["海量 IP", "零延迟", "防黑客"],
    options: [
      { label: "计算核心", items: [], range: { min: 1, max: 16, step: 1, unit: 'Core' }, hint: "纯净核心，无残留数据。", type: 'slider' },
      { label: "公网带宽", items: ["56kbps 拨号", "128kbps ISDN", "邻居共享"], hint: "56kbps 是我们的黄金标准。", type: 'radio' }
    ]
  },

  // --- 数据库 (Database) ---
  {
    id: "db-mysql",
    title: "MySQL 托管 (猫尿驱动版)",
    description: "通过在服务器上喷洒猫尿维持活跃度，数据极具味道。",
    price: "9.99",
    unit: "月",
    category: "数据库",
    features: ["MySQL 1.0", "异味加密", "表空间随缘"],
    options: [
      { label: "处理核心", items: [], range: { min: 0.1, max: 8, step: 0.1, unit: 'vCPU' }, hint: "低核心数有助于培养耐心。", type: 'slider' },
      { label: "连接数上限", items: ["1 (独占)", "5 (群居)", "无限制 (立即坍缩)"], hint: "建议选择独占模式，避免小王偷看。", type: 'radio' }
    ]
  },

  // --- 平台 (Platform) ---
  {
    id: "paas-worker",
    title: "PaaS (手摇应用引擎)",
    description: "完全托管。每一个 API 请求都会由技术员小王手动处理并返回 JSON。",
    price: "50.00",
    unit: "月",
    category: "平台",
    features: ["人类智慧解析", "JSON 纯手工打造", "支持 SQL 盲注(手动)"],
    options: [
      { label: "并发处理量", items: [], range: { min: 1, max: 10, step: 1, unit: 'Req/Hour' }, hint: "小王每小时最多只能写 10 个 JSON。", type: 'slider' },
      { label: "出口节点", items: ["村长办公室", "地窖出口", "老王后院"], hint: "出口节点决定了请求带不带烟味。", type: 'select' }
    ]
  },
  {
    id: "saas-jiucai",
    title: "SaaS 全自动收韭菜系统",
    description: "行业领先。一键部署，实现从播种到收割的全流程自动化。",
    price: "199.00",
    unit: "月",
    category: "平台",
    features: ["智能算法", "心理分析", "自动报表"],
    options: [
      { label: "收割力度", items: ["温柔对待", "连根拔起", "寸草不生"], hint: "力度越大，回本越快。", type: 'radio' },
      { label: "数据硬盘", items: [], range: { min: 50, max: 500, step: 50, unit: 'GB' }, hint: "用于存储受害者的交易记录。", type: 'slider' }
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
  "正在将您的硬件需求告诉李大妈...",
  "由于网速 56kbps 订单在半路迷路了...",
  "技术员去吃午饭了，请求已挂起..."
];

export const ORDER_FAIL_REASONS = [
  "余额不足：不仅是您的，我们的卡也被冻结了。",
  "发电机起火：您下单过快，地窖里的发电机冒烟了。",
  "老王改了密码：订单在传输过程中丢失。",
  "信鸽罢工：今天没喂谷子，信鸽拒绝起飞。",
  "村长不同意：村长认为您长得不像大冤种，拒绝为您服务。",
  "硬件坍缩：由于地窖太潮湿，您的硬盘已经生锈了。"
];
