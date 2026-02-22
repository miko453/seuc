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
      { label: "系统盘", items: ["20GB HDD", "40GB HDD", "80GB (村长家拆的)"], hint: "机械硬盘读写时会发出悦耳的咯吱声，有助于睡眠。", type: 'radio' }
    ]
  },
  {
    id: "vps-standard",
    title: "虚拟专用服务器 (VPS)",
    description: "经典超开 VPS。内存超开 1:1000，邻居老王不改密码绝不断网。",
    price: "5.00",
    unit: "月",
    category: "计算",
    features: ["共享 IPv4 (18层转发)", "100Mbps (邻居带宽)", "全自动跑路保障"],
    options: [
      { label: "vCPU 核心", items: [], range: { min: 1, max: 64, step: 1, unit: 'vCPU' }, hint: "核心数取决于技术员小王的心情。", type: 'slider' },
      { label: "内存容量", items: [], range: { min: 0.5, max: 256, step: 0.5, unit: 'GB' }, hint: "实际可用约为选定值的 0.01%。", type: 'slider' },
      { label: "硬盘空间", items: [], range: { min: 10, max: 500, step: 10, unit: 'GB' }, hint: "存储在村长家地窖的旧硬盘中。", type: 'slider' },
      { label: "操作系统", items: ["Windows XP", "CentOS 5", "DOS 6.22"], hint: "不建议安装任何现代系统。", type: 'select' }
    ]
  },
  {
    id: "lighthouse",
    title: "轻量应用服务器",
    description: "专为轻量业务设计。虽然我们叫它“轻量”，但它跑起来可能比砖头还沉。",
    price: "2.50",
    unit: "月",
    category: "计算",
    features: ["一键坏账", "流量包按羽计费", "自带 502 特效"],
    options: [
      { label: "套餐规格", items: ["基础受骗版", "进阶韭菜版", "终极冤种版"], hint: "套餐越高，被绿得越快。", type: 'radio' },
      { label: "数据中心", items: ["大槐树村-A", "李大妈家-B", "咸菜坛子-C"], hint: "物理位置随机漂移。", type: 'select' }
    ]
  },
  {
    id: "bare-metal",
    title: "独立服务器 (裸金属)",
    description: "村长家台式机托管。真正的独享硬件，支持物理散热（指技术员对着吹气）。",
    price: "500.00",
    unit: "月",
    category: "计算",
    features: ["物理隔离(指上锁)", "手摇发电冗余", "真·1:1 算力"],
    options: [
      { label: "处理器型号", items: ["奔腾 4", "赛扬 D", "龙芯 1A (收藏版)"], hint: "高性能处理器，冬天可取暖。", type: 'radio' },
      { label: "内存插槽", items: ["1条 (256MB)", "2条 (512MB)", "全满 (1GB)"], hint: "满血显存，傲视全村。", type: 'radio' }
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
    id: "disk-beast",
    title: "大硬盘服务器",
    description: "海量存储方案。由 50 块旧笔记本硬盘拼凑而成，读写时噪音足以防贼。",
    price: "99.00",
    unit: "月",
    category: "存储",
    features: ["2TB+ 物理空间", "随机扇区损坏", "自带异味加密"],
    options: [
      { label: "磁盘容量", items: [], range: { min: 100, max: 2048, step: 100, unit: 'GB' }, hint: "扩容需要技术员现场加装胶带。", type: 'slider' },
      { label: "RAID 模式", items: ["RAID 0 (追求自毁)", "JBOD (一锅端)", "村长备份 (手动拷走)"], hint: "不建议开启任何冗余模式。", type: 'select' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "cdn-pigeon",
    title: "内容分发网络 (CDN)",
    description: "信鸽全球加速。利用物理层面的信鸽载体协议，实现数据的近场（指村口）分发。",
    price: "0.99",
    unit: "GB",
    category: "网络",
    features: ["物理层加速", "抗劫持(鸽子不识字)", "流量按羽计算"],
    options: [
      { label: "信鸽品种", items: ["普通肉鸽 (低延迟)", "赛鸽 (极速版)", "特工鸽 (加密传输)"], hint: "赛鸽套餐包含意外保险（防老鹰）。", type: 'radio' },
      { label: "流量包大小", items: ["10GB (10只鸽子)", "100GB (一群鸽子)", "1TB (全村出动)"], hint: "超额流量将转化为等值玉米扣除。", type: 'radio' }
    ]
  },
  {
    id: "ipv6-only",
    title: "IPv6-Only 服务器",
    description: "极致纯净。由于我们买不起 IPv4 资源，所以您的业务将处于一个没人找得到的网络中。",
    price: "1.00",
    unit: "月",
    category: "网络",
    features: ["海量 IP (全是 0)", "零延迟(因为没人访问)", "自带防黑客属性"],
    options: [
      { label: "子网掩码长度", items: ["/64 (基础受骗)", "/48 (豪华受难)", "/32 (祖传网络)"], hint: "掩码越短，存在的虚无感越强。", type: 'radio' }
    ]
  },
  {
    id: "dns-village",
    title: "DNS 托管 (大喇叭解析)",
    description: "高可靠解析。当有人查询您的域名时，村委会大喇叭会实时播报对应的 IP 地址。",
    price: "0.50",
    unit: "月",
    category: "网络",
    features: ["语音解析", "全球(村)同步", "支持 TTL 调节(取决于播音员语速)"],
    options: [
      { label: "解析频率", items: ["整点播报", "随时插播", "村长吃饭时除外"], hint: "插播解析可能产生额外的噪音税。", type: 'select' }
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
  {
    id: "redis-salt",
    title: "Redis 缓存 (咸盐加速版)",
    description: "极速 KV 存储。我们将数据保存在村长家的电饭煲里，读取速度取决于米饭熟没熟。",
    price: "4.50",
    unit: "月",
    category: "数据库",
    features: ["单线程自燃", "持久化靠脑补", "数据有效期 5 分钟"],
    options: [
      { label: "内存限额", items: [], range: { min: 16, max: 512, step: 16, unit: 'MB' }, hint: "超过 64MB 后，电饭煲会报警。", type: 'slider' }
    ]
  },

  // --- 平台 (Platform) ---
  {
    id: "saas-jiucai",
    title: "SaaS 全自动收韭菜系统",
    description: "行业领先的韭菜管理平台。一键部署，实现从播种到收割的全流程自动化。",
    price: "199.00",
    unit: "月",
    category: "平台",
    features: ["智能收割算法", "韭菜心理分析", "自动导出为财务报表"],
    options: [
      { label: "收割力度", items: ["温柔对待", "连根拔起", "寸草不生"], hint: "力度越大，回本越快，跑路概率越高。", type: 'radio' }
    ]
  },
  {
    id: "baas-hand",
    title: "BaaS (手摇后端服务)",
    description: "完全托管的后端。您的每一个 API 请求都会由技术员小王手动处理并返回 JSON。",
    price: "50.00",
    unit: "月",
    category: "平台",
    features: ["人类智慧解析", "响应时间 4-6 小时", "支持 SQL 盲注(手动)"],
    options: [
      { label: "响应速度", items: ["正常人 (慢)", "小王 (快)", "老王 (随缘)"], hint: "选老王的话，他可能直接把你请求删了。", type: 'select' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "ssl-stamp",
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
    id: "ddos-shield",
    title: "抗投诉服务器",
    description: "绝对的物理屏蔽。当检测到投诉或攻击时，技术员会直接拔掉电源线。",
    price: "199.00",
    unit: "月",
    category: "安全",
    features: ["物理防火墙(指上锁)", "拔线保护", "0 漏警"],
    options: [
      { label: "防护等级", items: ["入门 (拔网线)", "专业 (断电)", "终极 (水泥封箱)"], hint: "水泥封箱模式下，数据将获得永久的安全（指永远无法访问）。", type: 'radio' }
    ]
  },

  // --- 其他 (Other) ---
  {
    id: "mail-pigeon",
    title: "邮件托管 (信鸽搬运版)",
    description: "真正不被监听的邮件。信鸽一对一搬运，支持回复附件（指带根玉米）。",
    price: "15.00",
    unit: "月",
    category: "其他",
    features: ["绝对隐私", "无垃圾邮件(鸽子不吃)", "物理送达"],
    options: [
      { label: "邮箱容量", items: ["10封/月", "50封 (尊享)", "不限量 (累死鸽子)"], hint: "邮件过多会导致信鸽罢工。", type: 'select' }
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
