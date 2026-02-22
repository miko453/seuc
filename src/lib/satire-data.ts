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
    type?: 'select' | 'slider' | 'radio';
    range?: { min: number; max: number; step: number; unit: string };
  }[];
};

export const PRODUCTS: ProductConfig[] = [
  // --- 计算 (Compute) ---
  {
    id: "gpu-beast",
    title: "GPU 服务器 (电子骨灰盒版)",
    description: "高性能（指发热量）图形算力。我们从废品站回收了大量珍贵的 GTX 440 和 GT 210 显卡，通过透明胶带组成了强大的算力阵列。",
    price: "88.00",
    unit: "月",
    category: "计算",
    features: ["GTX 440 满血版", "手动散热(扇子)", "支持扫雷 4K 运行"],
    options: [
      { label: "GPU 型号", items: ["GTX 440 (带尘版)", "GT 210 (静音即死亡)", "S3 Trio64 (复古算力)"], hint: "GTX 440 具备 1GB 珍贵显存，足以处理您的 8bit 图片渲染。", type: 'radio' },
      { label: "显卡数量", items: ["1x", "4x (胶带并联)", "16x (由于电流过载必炸)"], hint: "16x 模式下，我们会联系当地消防队待命。", type: 'radio' }
    ]
  },
  {
    id: "vps-elastic",
    title: "弹性服务器 (超开 1:1000)",
    description: "真正的一键弹性。1 核 CPU 看起来像 32 核，512MB 内存听起来像 512GB，虽然跑起来连 Hello World 都费劲。",
    price: "0.15",
    unit: "小时",
    category: "计算",
    features: ["手摇发电冗余", "邻居 WiFi 接入", "随机内核崩溃"],
    options: [
      { label: "CPU 核心", items: [], range: { min: 1, max: 32, step: 1, unit: 'vCPU' }, hint: "虽然选了 32 核，但本质上都是由同一台 2005 年的奔腾处理器分出来的。", type: 'slider' },
      { label: "物理内存", items: [], range: { min: 0.5, max: 512, step: 8, unit: 'GB' }, hint: "选到 512G 时，技术员小王会去村口超市多买几根内存条（如果他有钱的话）。", type: 'slider' }
    ]
  },
  {
    id: "dedicated-village",
    title: "独立服务器 (村长家台式机)",
    description: "尊享独占资源。这是一台部署在村长家客厅、由大黄狗贴身守护的高端 PC。配置了正版 Win98（未激活）。",
    price: "199.00",
    unit: "月",
    category: "计算",
    features: ["独占发热", "村长亲自开关机", "物理静音(关机即静音)"],
    options: [
      { label: "操作系统", items: ["Win98 纯净版", "DOS 6.22 (极速)", "纸笔记录(绝对安全)"], hint: "选 Win98 的话，开机可能需要 15 分钟。", type: 'select' }
    ]
  },

  // --- 存储 (Storage) ---
  {
    id: "storage-jar",
    title: "大硬盘存储 (咸菜缸阵列)",
    description: "海量冷存储。我们将您的 0 和 1 打印在纸条上，塞进防水防潮的咸菜缸里，深埋地下 3 米。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["咸菜风味数据", "绝对离线安全", "读取需挖掘机"],
    options: [
      { label: "硬盘空间", items: [], range: { min: 100, max: 2048, step: 100, unit: 'GB' }, hint: "2TB 空间需要 50 个特大号咸菜缸。", type: 'slider' },
      { label: "存储介质", items: ["咸菜坛子刻字", "小王脑补"], hint: "咸菜坛子刻字具备天然的防水特性。", type: 'radio' }
    ]
  },
  {
    id: "oss-notes",
    title: "对象存储 (便利贴版)",
    description: "非结构化数据处理专家。每一条上传的数据都会由技术员小王写在便利贴上，贴在村委会的白板上。",
    price: "0.50",
    unit: "100次调用",
    category: "存储",
    features: ["高可靠(指胶水粘得牢)", "全球加速(指技术员跑得快)", "支持 ACL (指谁都能看)"],
    options: [
      { label: "冗余级别", items: ["单份 (一吹就掉)", "多份 (全村乱贴)"], hint: "多份模式下，村委会所有门窗都会贴满您的数据。", type: 'radio' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "network-nat",
    title: "NAT 服务器 (18层套娃)",
    description: "通过 18 层 NAT 转发，经过老王家、小李家、村长家、广播站路由器。您的 IP 将会像量子叠加态一样难以捉摸。",
    price: "1.50",
    unit: "月",
    category: "网络",
    features: ["内网穿透(物理版)", "IP 随缘跳转", "无独立公网 IP"],
    options: [
      { label: "NAT 层数", range: { min: 5, max: 18, step: 1, unit: '层' }, hint: "18 层 NAT 意味着您的数据包可能要在村里绕上 3 天。", type: 'slider' },
      { label: "IP 类型", items: ["IPv6-Only (孤儿机)", "公共 IP (村委会共有)"], hint: "IPv6-Only 模式下，只有 1% 的用户能访问到您，主打一个清静。", type: 'radio' }
    ]
  },
  {
    id: "cdn-pigeon",
    title: "CDN (信鸽载体)",
    description: "全球首家物理分发。通过信鸽携带硬盘实现物理级缓存同步，丢包率取决于老鹰的出没频率。",
    price: "5.00",
    unit: "TB",
    category: "网络",
    features: ["按羽计费", "物理防劫持", "随机丢包"],
    options: [
      { label: "信鸽品种", items: ["肉鸽 (入门级)", "赛鸽 (企业级)", "特工鸽 (加密级)"], hint: "特工鸽会在飞行途中自动吞食数据以防泄密。", type: 'select' }
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
      { label: "实例规格", items: ["128MB (猫砂版)", "512MB (布偶版)", "1GB (橘猫版-极易宕机)"], hint: "橘猫版实例非常沉重，会导致物理磁盘由于重力塌陷。", type: 'radio' }
    ]
  },
  {
    id: "db-incinerate",
    title: "Redis (即存即焚)",
    description: "超高性能缓存。数据一旦存入，为了保证绝对的内存安全，我们会立即清空内存。速度之快，连内存条都反应不过来。",
    price: "0.01",
    unit: "次",
    category: "数据库",
    features: ["0ms 延迟", "0% 命中率", "极简架构"],
    options: [
      { label: "清空频率", items: ["每微秒", "存入即焚"], hint: "“存入即焚”模式下，您的数据甚至不会产生任何电子流动。", type: 'radio' }
    ]
  },

  // --- 平台 (Platform) ---
  {
    id: "paas-pigeon",
    title: "PaaS (信鸽容器服务)",
    description: "无服务器架构。您的代码会由信鸽带到云端（大槐树顶），仅在信鸽咕咕叫的时候运行。",
    price: "2.00",
    unit: "月",
    category: "平台",
    features: ["咕咕咕驱动", "按羽扩容", "支持 Docker (指鸽笼)"],
    options: [
      { label: "自动扩容", items: ["禁用", "等鸽子下蛋后扩容"], hint: "开启自动扩容后，您的算力增长取决于繁殖季节的成效。", type: 'radio' }
    ]
  },
  {
    id: "saas-scythe",
    title: "SaaS (全自动韭菜收割)",
    description: "智能业务流程。只需配置您的账户，系统就会全自动、高频率地从您的银行卡扣款，无需任何人工操作。",
    price: "500.00",
    unit: "秒",
    category: "平台",
    features: ["极速扣款", "自动忽略退款", "深度绑定银行卡"],
    options: [
      { label: "收割力度", items: ["轻度 (剩点钱吃饭)", "重度 (清空余额)", "地狱 (透支信用卡)"], hint: "地狱模式下，我们会自动帮您向村头高利贷借款。", type: 'radio' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长亲自盖章)",
    description: "CA (Cun-Committee Authority) 签发。全绿加密图标，显示‘村长已阅’。",
    price: "5.00",
    unit: "年",
    category: "安全",
    features: ["手工印章", "地窖加密", "浏览器红色警告"],
    options: [
      { label: "验证级别", items: ["DV (大王认证)", "EV (村长盖章)"], hint: "EV 级别需要您向村委会捐赠两斤猪肉。", type: 'radio' }
    ]
  },
  {
    id: "waf-padlock",
    title: "防火墙 (地窖挂锁版)",
    description: "物理级防护。我们的技术员会在地窖门上挂一把大锁，确保任何黑客都无法通过物理方式连接服务器（除非他有老虎钳）。",
    price: "10.00",
    unit: "月",
    category: "安全",
    features: ["100% 物理隔绝", "防盗防火(指锁是铁的)", "带锁芯备份"],
    options: [
      { label: "锁头材质", items: ["生锈铁锁 (入门)", "不锈钢锁 (进阶)", "指纹锁 (仅限村长指纹)"], hint: "生锈铁锁有 50% 概率自己打不开。", type: 'select' }
    ]
  },

  // --- 其他 (Other) ---
  {
    id: "mail-shout",
    title: "邮件托管 (村口喇叭版)",
    description: "高效信息传递。您的邮件发送后，我们会通过村口大喇叭全文朗读 3 遍，确保全村都能收到您的信息。",
    price: "1.00",
    unit: "封",
    category: "其他",
    features: ["全村送达", "自带混响", "隐私权为零"],
    options: [
      { label: "语种", items: ["普通话", "村级土话 (加收2毛)", "加密火星文"], hint: "村级土话模式下，李大妈会负责进行实时翻译（脑补）。", type: 'radio' }
    ]
  },
  {
    id: "dns-wang",
    title: "DNS 托管 (老王笔记本)",
    description: "智能解析。用户访问域名时，老王会翻开他的笔记本寻找对应的地窖编号，然后手动插拔电话线完成解析。",
    price: "0.50",
    unit: "次解析",
    category: "其他",
    features: ["手动解析", "老王手写", "高延迟(指老王没带老花镜)"],
    options: [
      { label: "生效时间", items: ["等老王醒来", "下辈子"], hint: "老王目前处于午休时间，预计生效时间为 4 小时后。", type: 'radio' }
    ]
  }
];

export const QUEUE_EVENTS = [
  "正在贿赂村口大黄狗...",
  "技术员小王正在从废品站找 GTX 440...",
  "正在手摇点火发电机以驱动 GPU 阵列...",
  "正在通过信鸽协议同步您的支付信息...",
  "邻居老王正在重启 WiFi 路由器，请稍等...",
  "村长正在核实您的家庭背景...",
  "地窖机房正在排水（昨天下雨了）...",
  "正在将您的 512G 内存需求告诉李大妈...",
  "正在由于网速 56kbps 导致订单在半路迷路了...",
  "正在因为技术员去吃午饭，您的请求被挂起..."
];

export const ORDER_FAIL_REASONS = [
  "余额不足：不仅是您的，我们的银行卡也被冻结了。",
  "发电机起火：由于您下单过快，地窖里的发电机负载过高冒烟了。",
  "老王改了密码：订单在传输过程中因无法连接 WiFi 丢失。",
  "信鸽罢工：由于今天没有喂谷子，信鸽拒绝传输您的订单。",
  "村长不同意：村长认为您长得不像大冤种，拒绝为您服务。",
  "硬件坍缩：由于地窖太潮湿，您的 GTX 440 已经生锈了。"
];
