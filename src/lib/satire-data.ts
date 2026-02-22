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
    type: 'select' | 'slider' | 'radio';
    range?: { min: number; max: number; step: number; unit: string };
  }[];
};

export const PRODUCTS: ProductConfig[] = [
  // --- 计算 (Compute) ---
  {
    id: "gpu-beast",
    title: "GPU 服务器 (电子骨灰盒版)",
    description: "顶级算力阵列。我们通过透明胶带组成了强大的算力阵列，支持扫雷 4K 运行。",
    price: "88.00",
    unit: "月",
    category: "计算",
    features: ["GTX 440 满血版", "手摇散热系统", "1000% 算力超开"],
    options: [
      { label: "显卡型号", items: ["GTX 440 (带尘版)", "GT 210 (静音即死亡)", "S3 Trio64 (复古算力)"], hint: "GTX 440 具备 1GB 珍贵显存，足以处理您的 8bit 贴图。", type: 'radio' },
      { label: "vCPU 核心", items: [], range: { min: 1, max: 128, step: 1, unit: 'vCPU' }, hint: "虽然你选了 128 核，但实际上它们都在共享同一个生锈的风扇。", type: 'slider' },
      { label: "物理内存", items: [], range: { min: 4, max: 1024, step: 4, unit: 'GB' }, hint: "超过 16GB 后，技术员小王会尝试用 U 盘充当虚拟内存。", type: 'slider' },
      { label: "系统盘 (地窖机械)", items: ["20GB HDD", "40GB HDD", "80GB (村长家拆的)"], hint: "机械硬盘读写时会发出悦耳的咯吱声，有助于睡眠。", type: 'radio' }
    ]
  },
  {
    id: "vps-elastic",
    title: "弹性云服务器 (轻量版)",
    description: "真正的一键弹性。1 核 CPU 看起来像 32 核，跑起来连 Hello World 都费劲。",
    price: "0.15",
    unit: "小时",
    category: "计算",
    features: ["手摇发电冗余", "邻居 WiFi 接入", "随机内核崩溃"],
    options: [
      { label: "vCPU 核心", items: [], range: { min: 1, max: 32, step: 1, unit: 'vCPU' }, hint: "核心越多，邻居老王家跳闸的概率越高。", type: 'slider' },
      { label: "内存容量", items: [], range: { min: 0.5, max: 512, step: 0.5, unit: 'GB' }, hint: "内存超开比例为 1:100，建议不要运行超过 2 行的代码。", type: 'slider' },
      { label: "系统盘", items: [], range: { min: 10, max: 500, step: 10, unit: 'GB' }, hint: "硬盘由村口废品站回收的 5400 转硬盘组成。", type: 'slider' },
      { label: "公网带宽", items: ["56kbps 拨号", "1Mbps (老王睡觉时)", "10Gbps (内网空气)"], hint: "10Gbps 是技术员小王手拉手传输的速度。", type: 'select' }
    ]
  },
  {
    id: "nat-vps-套娃",
    title: "NAT 服务器 (18层套娃版)",
    description: "极致共享 IP。通过 18 层 NAT 转发，您的出口 IP 可能在南极，也可能在村长办公室。",
    price: "2.50",
    unit: "月",
    category: "计算",
    features: ["共享 IP", "端口随机漂移", "自带 10 个内网端口"],
    options: [
      { label: "NAT 转发层数", items: ["1层 (直连老王)", "9层 (九九归一)", "18层 (地狱难度)"], hint: "层数越多，延迟越高，越能锻炼您的耐心。", type: 'radio' },
      { label: "映射端口数", items: ["5个", "10个", "20个 (需打点小王)"], hint: "端口会在由于停电重启后随机变换，请随时检查。", type: 'radio' }
    ]
  },
  {
    id: "rdp-desktop",
    title: "远程桌面 (网吧模拟器)",
    description: "完全托管的远程桌面。内置《扫雷》、《蜘蛛纸牌》，让您重温 2005 年的网吧激情。",
    price: "15.00",
    unit: "月",
    category: "计算",
    features: ["WinXP 经典皮肤", "内置万能显卡驱动", "支持挂机升级"],
    options: [
      { label: "系统环境", items: ["Windows XP (SP2)", "Windows 2000", "MS-DOS"], hint: "XP 系统已由村长亲自打补丁，安全性全靠缘分。", type: 'select' },
      { label: "分辨率限制", items: ["640x480", "800x600", "1024x768 (尊享)"], hint: "过高的分辨率会导致地窖显卡阵列起火。", type: 'radio' }
    ]
  },

  // --- 存储 (Storage) ---
  {
    id: "storage-jar",
    title: "对象存储 (咸菜缸 OSS)",
    description: "高可用冷存储。我们将您的数据打印在纸条上，塞进防水防潮的咸菜缸里。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["咸菜风味数据", "绝对离线安全", "读取需挖掘机"],
    options: [
      { label: "存储容量", items: [], range: { min: 10, max: 2000, step: 10, unit: 'GB' }, hint: "1TB 存储需要占用村长家后院两平米土地。", type: 'slider' },
      { label: "缸体材质", items: ["陶土缸 (入门)", "玻璃缸 (可视化)", "青铜鼎 (传家宝)"], hint: "青铜鼎模式下，数据保存期限可达 3000 年。", type: 'radio' }
    ]
  },
  {
    id: "drive-big-pigeon",
    title: "大硬盘服务器 (信鸽备份)",
    description: "物理级灾备。数据通过信鸽定时飞往邻村地窖存储，防黑客但防不住老鹰。",
    price: "50.00",
    unit: "TB",
    category: "存储",
    features: ["按羽计费", "物理防劫持", "随机丢包(指被吃)"],
    options: [
      { label: "硬盘数量", items: ["1块 (二手笔记本)", "4块 (阵列模式)", "10块 (地窖满载)"], hint: "10块硬盘同时转动时，噪音足以吵醒村里所有的狗。", type: 'radio' },
      { label: "备份频率", items: ["每日 (鸽子很累)", "每周 (随缘)", "每世纪 (传家)"], hint: "备份频率越高，需要的谷子开销越大。", type: 'select' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "cdn-pigeon-global",
    title: "CDN 加速 (信鸽全球分发)",
    description: "基于物理层面的边缘节点。通过在各村口布置鸽舍，实现数据的近场分发。",
    price: "0.99",
    unit: "GB",
    category: "网络",
    features: ["极低延迟(指鸽子飞得快)", "支持 10 种语言(指叫声)", "纯物理防火墙"],
    options: [
      { label: "流量包", items: ["10GB (10只鸽子)", "100GB (一群鸽子)", "1TB (饱和式覆盖)"], hint: "如果遇到老鹰出没，流量包会自动损耗 50%。", type: 'radio' },
      { label: "加速区域", items: ["大槐树村", "全镇覆盖", "县城边缘 (极速)"], hint: "县城边缘节点可能会因为电线杆太多导致鸽子迷路。", type: 'select' }
    ]
  },

  // --- 数据库 (Database) ---
  {
    id: "db-cat-mysql",
    title: "MySQL 托管 (猫尿驱动版)",
    description: "高可用数据库。我们通过在服务器上喷洒猫尿来维持其活跃度，数据极具“味道”。",
    price: "9.99",
    unit: "月",
    category: "数据库",
    features: ["支持 MySQL 1.0", "自带异味加密", "随机表空间蒸发"],
    options: [
      { label: "计算核心", items: [], range: { min: 0.1, max: 4, step: 0.1, unit: 'vCPU' }, hint: "0.1 vCPU 意味着每秒钟只能处理一个 SELECT 1 语句。", type: 'slider' },
      { label: "缓冲池内存", items: [], range: { min: 128, max: 4096, step: 128, unit: 'MB' }, hint: "内存不足时，我们会将数据缓存到技术员小王的脑子里。", type: 'slider' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "ssl-stamp-village",
    title: "SSL 证书 (村长盖章认证)",
    description: "顶级 CA 签发。全绿加密图标，浏览器会显示‘村长已阅’安全提示。",
    price: "5.00",
    unit: "年",
    category: "安全",
    features: ["手工印章", "地窖加密", "浏览器红色警告"],
    options: [
      { label: "验证级别", items: ["DV (大王认证)", "OV (老王背书)", "EV (村长亲自盖章)"], hint: "EV 级别需要您向村委会捐赠两斤五花肉作为人工费。", type: 'radio' }
    ]
  },
  {
    id: "ddos-physical-shield",
    title: "抗投诉 (地窖物理屏蔽)",
    description: "绝对的物理隔绝。当检测到攻击或投诉时，技术员会直接拔掉电源线。",
    price: "199.00",
    unit: "月",
    category: "安全",
    features: ["物理防火墙(指上锁)", "拔线保护", "0 漏警"],
    options: [
      { label: "防护等级", items: ["入门 (拔网线)", "专业 (断电)", "终极 (水泥封箱)"], hint: "水泥封箱模式下，数据将获得永久的安全（指永远无法访问）。", type: 'radio' }
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
