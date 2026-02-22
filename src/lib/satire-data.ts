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
      { label: "GPU 核心", items: ["GTX 440 (带尘版)", "GT 210 (静音即死亡)", "S3 Trio64 (复古算力)"], hint: "GTX 440 具备 1GB 珍贵显存，足以处理您的 8bit 贴图。", type: 'radio' },
      { label: "CPU 核心", items: [], range: { min: 1, max: 128, step: 1, unit: 'vCPU' }, hint: "虽然你选了 128 核，但实际上它们都在共享同一个风扇。", type: 'slider' },
      { label: "物理内存", items: [], range: { min: 4, max: 1024, step: 4, unit: 'GB' }, hint: "超过 16GB 后，技术员小王会尝试用 U 盘充当虚拟内存。", type: 'slider' },
      { label: "操作系统", items: ["Win98 纯净版", "Ubuntu 6.06 (LTS)", "红旗 Linux"], hint: "红旗 Linux 在本村具有极高的政治正确性。", type: 'select' }
    ]
  },
  {
    id: "vps-elastic",
    title: "弹性服务器 (虚空版)",
    description: "真正的一键弹性。1 核 CPU 看起来像 32 核，跑起来连 Hello World 都费劲。",
    price: "0.15",
    unit: "小时",
    category: "计算",
    features: ["手摇发电冗余", "邻居 WiFi 接入", "随机内核崩溃"],
    options: [
      { label: "CPU 核心", items: [], range: { min: 1, max: 64, step: 1, unit: 'vCPU' }, hint: "CPU 负载超过 5% 即视为“恶意挖矿”并触发关机。", type: 'slider' },
      { label: "内存容量", items: [], range: { min: 0.5, max: 512, step: 0.5, unit: 'GB' }, hint: "内存超开比例为 1:100，建议不要运行超过 2 行的代码。", type: 'slider' },
      { label: "系统盘 (地窖机械)", items: [], range: { min: 10, max: 2000, step: 10, unit: 'GB' }, hint: "硬盘由村口废品站回收的 5400 转硬盘组成，读写速度随缘。", type: 'slider' },
      { label: "网络带宽", items: ["56kbps 拨号", "1Mbps (老王不看电影时)", "10Gbps (仅限内网且没线)"], hint: "10Gbps 是我们的技术员小王手拉手传输的速度。", type: 'select' }
    ]
  },

  // --- 数据库 (Database) ---
  {
    id: "db-cat",
    title: "MySQL 托管 (猫尿驱动版)",
    description: "高可用数据库。我们通过在服务器上喷洒猫尿来维持其活跃度，确保数据在“味道”上保持一致性。",
    price: "9.99",
    unit: "月",
    category: "数据库",
    features: ["完全兼容 MySQL 1.0", "自带异味加密", "随机表空间蒸发"],
    options: [
      { label: "计算规格", items: [], range: { min: 0.1, max: 8, step: 0.1, unit: 'vCPU' }, hint: "0.1 vCPU 意味着每秒钟只能处理一个 SELECT 1 语句。", type: 'slider' },
      { label: "缓冲池内存", items: [], range: { min: 0.125, max: 16, step: 0.125, unit: 'GB' }, hint: "内存不足时，我们会将数据缓存到技术员小王的脑子里。", type: 'slider' },
      { label: "数据库版本", items: ["MySQL 1.0", "MySQL 3.23 (企业级)", "MariaDB 5.1"], hint: "MySQL 1.0 不支持索引，主打一个全表扫描的快感。", type: 'select' }
    ]
  },

  // --- 平台 (Platform / 虚拟主机) ---
  {
    id: "web-hosting-classic",
    title: "虚拟主机 (千人坑版)",
    description: "极致共享。一台奔腾 4 服务器托管全村 1000 个站，访问速度取决于谁的 CSS 写的更短。",
    price: "5.00",
    unit: "年",
    category: "平台",
    features: ["支持 PHP 3.0", "自带 100M 空间", "域名自动重定向到村委会"],
    options: [
      { label: "网页空间", items: [], range: { min: 50, max: 1024, step: 50, unit: 'MB' }, hint: "1GB 空间需要通过 500 张软盘进行物理扩容。", type: 'slider' },
      { label: "PHP 版本", items: ["PHP 3.0", "PHP 4.0", "PHP 5.2 (极速)"], hint: "PHP 5.2 是本站目前最尖端的技术，支持绝大部分过时框架。", type: 'select' },
      { label: "Web 服务器", items: ["IIS 4.0", "Apache 1.3", "手工返回 HTML"], hint: "手工返回模式下，技术员小王会实时盯着 80 端口并手打响应包。", type: 'radio' }
    ]
  },

  // --- 存储 (Storage) ---
  {
    id: "storage-jar",
    title: "大硬盘存储 (咸菜缸阵列)",
    description: "海量冷存储。我们将您的数据打印在纸条上，塞进防水防潮的咸菜缸里。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["咸菜风味数据", "绝对离线安全", "读取需挖掘机"],
    options: [
      { label: "存储容量", items: [], range: { min: 100, max: 5000, step: 100, unit: 'GB' }, hint: "5TB 空间需要占用村长家后院的一半土地。", type: 'slider' },
      { label: "缸体材质", items: ["陶土缸 (入门)", "玻璃缸 (可视化)", "青铜鼎 (传家宝级)"], hint: "青铜鼎模式下，数据保存期限可达 3000 年。", type: 'select' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "cdn-pigeon",
    title: "CDN (信鸽分发)",
    description: "全球首家物理分发。通过信鸽携带硬盘实现物理级缓存同步，丢包率取决于老鹰的出没频率。",
    price: "5.00",
    unit: "TB",
    category: "网络",
    features: ["按羽计费", "物理防劫持", "随机丢包"],
    options: [
      { label: "流量包大小", items: [], range: { min: 1, max: 100, step: 1, unit: 'TB' }, hint: "100TB 流量需要动用全村 5000 只信鸽进行饱和式传输。", type: 'slider' },
      { label: "信鸽品种", items: ["肉鸽 (入门级)", "赛鸽 (企业级)", "特工鸽 (加密级)"], hint: "特工鸽会在飞行途中自动吞食数据以防泄密。", type: 'select' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长盖章)",
    description: "CA (Cun-Committee Authority) 签发。全绿加密图标，显示‘村长已阅’。",
    price: "5.00",
    unit: "年",
    category: "安全",
    features: ["手工印章", "地窖加密", "浏览器红色警告"],
    options: [
      { label: "验证级别", items: ["DV (大王认证)", "OV (老王背书)", "EV (村长亲自盖章)"], hint: "EV 级别需要您向村委会捐赠两斤五花肉作为人工费。", type: 'radio' }
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
  "硬件坍缩：由于地窖太潮湿，您的 GTX 440 已经生锈了。"
];
