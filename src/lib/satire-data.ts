
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

const COMMON_SERVER_OPTIONS: ProductOption[] = [
  { label: "vCPU 核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "地窖发电机上限就是 4 核。", type: 'slider' },
  { label: "物理内存", items: [], range: { min: 0.5, max: 8, step: 0.5, unit: 'GB' }, hint: "再多发电机就要冒烟了。", type: 'slider' },
  { label: "数据硬盘", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "采用三副本机制（村长/老王/李大妈各记一份）。", type: 'slider' },
  { label: "网络带宽", items: [], range: { min: 56, max: 10240, step: 56, unit: 'Kbps' }, hint: "56Kbps 拨号是我们的金牌服务。", type: 'slider' },
  { 
    label: "操作系统", 
    items: [
      "Windows 3.11 (需手绘 UI)", "Windows 95 (蓝屏优化版)", "Windows 98 SE", "Windows ME (失败实验版)", 
      "Windows XP Pro (不死传说)", "Windows Vista Starter", "Windows 7 Starter", "Windows 2000 Pro",
      "CentOS 5.0 (企业遗产)", "Ubuntu 7.04 (远古版)", "Debian 4.0", "Red Hat 9.0", 
      "MS-DOS 6.22", "FreeDOS", "PC-DOS", "Minix 2", "Plan 9 (理念先进现实残酷)", "ReactOS"
    ], 
    hint: "系统可用性取决于您的祈祷频率。", 
    type: 'select' 
  },
  { label: "出口节点", items: ["地窖出口", "村长办公室", "老王后院", "村委会大喇叭旁"], hint: "节点风味决定延迟波动。", type: 'radio' }
];

export const PRODUCTS: ProductConfig[] = [
  // --- 计算类 (Compute) ---
  {
    id: "vps-standard",
    title: "VPS 云服务器 (村长版)",
    description: "标准超开实例。我们不生产资源，我们只是李大妈台式机的搬运工。",
    price: "12.00",
    unit: "月",
    category: "计算",
    features: ["KVM 虚拟化", "1000% 内存超售", "延迟随机化"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "vds-dedicated",
    title: "VDS 虚拟独享服务器",
    description: "真正的独占资源（指村长不用电脑的时候）。",
    price: "45.00",
    unit: "月",
    category: "计算",
    features: ["物理核映射", "独占内存", "稳定性提升 0.1%"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "gpu-beast",
    title: "GPU 服务器 (GTX 440 胶带版)",
    description: "通过透明胶带并联的垃圾显卡阵列。支持扫雷 4K，是村里最顶级的算力。",
    price: "88.00",
    unit: "月",
    category: "计算",
    features: ["GTX 440 满血版", "手持散热", "手动插拔显卡"],
    options: [
      { label: "显卡型号", items: ["GTX 440 (带尘)", "GT 210 (静音即死)", "S3 Trio64"], hint: "GTX 440 已经是顶配了。", type: 'radio' },
      ...COMMON_SERVER_OPTIONS
    ]
  },
  {
    id: "bare-metal-chief",
    title: "裸金属服务器 (村长办公机)",
    description: "独占村长家 2008 年采购的联想台式机。开机只需 3 分钟。",
    price: "299.00",
    unit: "月",
    category: "物理",
    features: ["物理机独占", "真实噪音体验", "手动开关机"],
    options: COMMON_SERVER_OPTIONS
  },

  // --- 网络与带宽 (Network) ---
  {
    id: "nat-taowa",
    title: "NAT 云服务器 (18层套娃)",
    description: "极致转发。您的 IP 地址可能在半个村子流转后才到达出口。",
    price: "2.50",
    unit: "月",
    category: "网络",
    features: ["18层 NAT 转换", "共享出口", "延迟极高"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "cdn-pigeon-pro",
    title: "信鸽全球加速 (CDN)",
    description: "通过信鸽叼着 SD 卡分发数据。延迟以鸽子的体力为准。",
    price: "0.50",
    unit: "GB",
    category: "托管",
    features: ["动态调度", "物理缓存", "全村分发"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "dns-loudspeaker",
    title: "大喇叭解析服务 (DNS)",
    description: "播音员大喊一声即可解析。支持智能分发（大喊/小喊）。",
    price: "1.00",
    unit: "月",
    category: "网络",
    features: ["模拟信号", "人工解析", "嗓门加密"],
    options: COMMON_SERVER_OPTIONS
  },

  // --- 存储与数据 (Storage) ---
  {
    id: "oss-pickle-jar",
    title: "对象存储 (咸菜缸 OSS)",
    description: "数据持久化极致方案。咸菜缸密封，防潮防腐。",
    price: "0.01",
    unit: "GB/月",
    category: "存储",
    features: ["三副本缸体", "物理封盖", "读取靠挖"],
    options: COMMON_SERVER_OPTIONS
  },

  // --- 安全与“安全” (Security) ---
  {
    id: "anti-complaint-pro",
    title: "抗投诉服务器 (地窖屏蔽版)",
    description: "物理隔离。任何律师函进入村口后都会因迷路而自动作废。",
    price: "120.00",
    unit: "月",
    category: "安全",
    features: ["物理防火墙", "法律豁免", "挂锁加密"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "waf-dog-standard",
    title: "大黄狗 WAF",
    description: "村口大黄狗监控。发现异常流量会引发狗叫警告。",
    price: "35.00",
    unit: "月",
    category: "安全",
    features: ["生物识别", "声控拦截", "自动咬网线"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "ddos-cut-wire",
    title: "物理断网 DDoS 防护",
    description: "检测到流量过载时，技术员小王会立即剪断网线，防御成功率 100%。",
    price: "500.00",
    unit: "次",
    category: "安全",
    features: ["绝对防御", "纯物理隔离", "手动重连"],
    options: COMMON_SERVER_OPTIONS
  },

  // --- 其他 ---
  {
    id: "email-pigeon-relay",
    title: "信鸽邮件转发服务器",
    description: "基于 IPoAC 协议的专业邮件网关。防洪防弹防老鹰。",
    price: "15.00",
    unit: "月",
    category: "其他",
    features: ["高可靠性", "信鸽加密", "支持超大附件(128G SD卡)"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "ssl-stamp",
    title: "村长亲自盖章 SSL",
    description: "完全手工颁发的证书。村长手写签名，全村信任。",
    price: "19.00",
    unit: "年",
    category: "安全",
    features: ["人工颁发", "红头文件加密", "支持多域名"],
    options: COMMON_SERVER_OPTIONS
  },
  {
    id: "beian-tea",
    title: "代办备案 (两包烟套餐)",
    description: "由技术员小王去镇上跑腿。包含路费和买烟钱。",
    price: "50.00",
    unit: "次",
    category: "平台",
    features: ["快速通道", "关系网映射", "免面试"],
    options: COMMON_SERVER_OPTIONS
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
  "正在贿赂村长让他同意您的备案...",
  "正在为您的老系统匹配 1995 年的驱动...",
  "安装进度条卡在 99%（官方解释：李大妈在用电磁炉）..."
];

export const ORDER_FAIL_REASONS = [
  "余额不足：不仅是您的，我们的卡也被冻结了。",
  "发电机起火：您下单过快，地窖里的发电机冒烟了。",
  "老王改了密码：订单在传输过程中丢失。",
  "信鸽罢工：今天没喂谷子，信鸽拒绝起飞。",
  "硬件坍缩：由于地窖太潮湿，您的硬盘已经生锈了。",
  "由于您长得不像大冤种，村长拒绝为您服务。",
  "系统安装成功，但 SSH 服务在 1998 年就已经下线了。"
];
