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
    description: "通过透明胶带并联的垃圾显卡阵列。支持扫雷 4K，是村里最顶级的算力。",
    price: "88.00",
    unit: "月",
    category: "计算",
    features: ["GTX 440 满血版", "手持散热", "1000% 超开"],
    options: [
      { label: "显卡型号", items: ["GTX 440 (带尘)", "GT 210 (静音即死)", "S3 Trio64"], hint: "GTX 440 已经是顶配了。", type: 'radio' },
      { label: "vCPU 核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "地窖发电机上限就是 4 核。", type: 'slider' },
      { label: "物理内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "再多发电机就要冒烟了。", type: 'slider' },
      { label: "数据盘", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "上限 1TB，再多地窖装不下了。", type: 'slider' },
      { label: "出口节点", items: ["地窖出口", "村长办公室", "老王后院"], hint: "节点决定了数据的风味。", type: 'select' }
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
      { label: "核心配置", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "采用 2005 年的奔腾分芯。", type: 'slider' },
      { label: "内存配置", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "实际可用视邻居下载情况而定。", type: 'slider' },
      { label: "硬盘配置", items: [], range: { min: 20, max: 1024, step: 20, unit: 'GB' }, hint: "由二手 U 盘组成。", type: 'slider' },
      { label: "网络环境", items: ["老王 WiFi", "拨号上网"], hint: "老王睡觉后会自动断网。", type: 'radio' }
    ]
  },
  {
    id: "dedicated-head",
    title: "裸金属服务器 (村长桌面版)",
    description: "独占村长家的联想开天台式机。性能稳定，除非村长孙子要玩 4399。",
    price: "299.00",
    unit: "月",
    category: "计算",
    features: ["物理独占", "大屁股显示器", "带写字台空间"],
    options: [
      { label: "核心分配", items: [], range: { min: 2, max: 4, step: 1, unit: 'C' }, hint: "村长要求留两核看新闻。", type: 'slider' },
      { label: "内存大小", items: [], range: { min: 2, max: 8, step: 2, unit: 'GB' }, hint: "已经是这台机器的极限了。", type: 'slider' },
      { label: "存储容量", items: [], range: { min: 80, max: 1024, step: 40, unit: 'GB' }, hint: "使用的是古老的 IDE 硬盘。", type: 'slider' },
      { label: "出口节点", items: ["村长卧室", "村委会大厅"], hint: "卧室节点信号稍弱。", type: 'select' }
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
      { label: "计算性能", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "决定了挖掘机读取速度。", type: 'slider' },
      { label: "内存缓冲", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "缓存咸菜味数据。", type: 'slider' },
      { label: "存储容量", items: [], range: { min: 100, max: 1024, step: 100, unit: 'GB' }, hint: "1TB 需占用后院两平米。", type: 'slider' },
      { label: "缸体等级", items: ["瓦缸 (普通)", "瓷缸 (VIP)", "不锈钢缸 (尊贵)"], hint: "不锈钢缸防锈效果最好。", type: 'radio' }
    ]
  },
  {
    id: "tape-basement",
    title: "磁带归档 (地窖磁带库)",
    description: "采用回收的录音带进行数据存储。虽然读取时有杂音，但极具复古情怀。",
    price: "0.005",
    unit: "GB",
    category: "存储",
    features: ["磁带存储", "杂音加密", "读取需倒带"],
    options: [
      { label: "驱动性能", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表随身听的电机功率。", type: 'slider' },
      { label: "暂存内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "防震缓存大小。", type: 'slider' },
      { label: "总容量", items: [], range: { min: 50, max: 1024, step: 50, unit: 'GB' }, hint: "地窖里的磁带存货有限。", type: 'slider' },
      { label: "出口节点", items: ["地窖窗口", "老王广播站"], hint: "广播站节点支持广播读取。", type: 'select' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "dns-loudspeaker",
    title: "大喇叭权威解析 (DNS)",
    description: "采用村口大喇叭进行广播式域名解析。解析成功率取决于播音员嗓门。",
    price: "2.00",
    unit: "月",
    category: "网络",
    features: ["模拟信号解析", "人工纠错", "嗓门加密"],
    options: [
      { label: "解析规格", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表播音员的人数。", type: 'slider' },
      { label: "内存缓冲", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "播音员的小本本容量。", type: 'slider' },
      { label: "存储容量", items: [], range: { min: 1, max: 1024, step: 1, unit: 'GB' }, hint: "用于存放历史解析记录。", type: 'slider' },
      { label: "解析频率", items: ["每小时播报", "随缘播报"], hint: "随缘播报更具艺术感。", type: 'radio' }
    ]
  },
  {
    id: "network-pigeon",
    title: "信鸽载体协议 (IPoAC)",
    description: "真正的离线传输。通过训练有素的鸽子投递数据包，自带丢包（指鸽子飞丢）。",
    price: "15.00",
    unit: "月",
    category: "网络",
    features: ["物理分发", "空中路由", "防鹰过滤"],
    options: [
      { label: "计算规格", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "自动化鸽舍的控制力。", type: 'slider' },
      { label: "内存分配", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "鸽子腿部挂载缓冲。", type: 'slider' },
      { label: "存储总额", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "鸽笼的物理存储极限。", type: 'slider' },
      { label: "出口节点", items: ["大槐树树冠", "村委会旗杆"], hint: "旗杆节点视野开阔。", type: 'select' }
    ]
  },

  // --- 数据库 (Database) ---
  {
    id: "db-mysql",
    title: "MySQL 托管 (猫尿驱动)",
    description: "通过在硬盘上喷洒猫尿维持磁头活性。异味加密，物理级防盗（贼不敢闻）。",
    price: "19.99",
    unit: "月",
    category: "数据库",
    features: ["MySQL 1.0", "异味加密", "全表扫描专用"],
    options: [
      { label: "数据库规格", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "味道越冲，性能越强。", type: 'slider' },
      { label: "缓冲区内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "用于脑补查询结果。", type: 'slider' },
      { label: "数据库空间", items: [], range: { min: 5, max: 1024, step: 5, unit: 'GB' }, hint: "建议不要存太多，猫尿会溢出。", type: 'slider' },
      { label: "存储节点", items: ["地窖排风口", "村长家厨房"], hint: "排风口节点最具特色。", type: 'select' }
    ]
  },
  {
    id: "db-redis-memory",
    title: "Redis 缓存 (村长短时记忆)",
    description: "完全基于内存。实际上是技术员小王蹲在地窖里拿着纸笔手动记录。",
    price: "9.90",
    unit: "月",
    category: "数据库",
    features: ["纯手工记录", "断电即失忆", "充满人文关怀"],
    options: [
      { label: "书写核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表小王的出汗量。", type: 'slider' },
      { label: "大脑内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "小王脑补的上限。", type: 'slider' },
      { label: "纸张空间", items: [], range: { min: 1, max: 1024, step: 1, unit: 'GB' }, hint: "也就是小王带的笔记本数量。", type: 'slider' },
      { label: "笔迹等级", items: ["草书 (快)", "楷书 (慢但准)", "涂鸦 (看缘分)"], hint: "涂鸦节点通常会返回 404。", type: 'radio' }
    ]
  },

  // --- 平台 (Platform) ---
  {
    id: "paas-hand-crank",
    title: "PaaS (手摇应用引擎)",
    description: "完全托管。所有 API 请求由小王手动回复 JSON，回复内容随机但诚恳。",
    price: "50.00",
    unit: "月",
    category: "平台",
    features: ["手工回复", "离线部署", "出口节点可选"],
    options: [
      { label: "核心规格", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "小王手摇手柄的频率。", type: 'slider' },
      { label: "内存分配", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "短期记忆容量。", type: 'slider' },
      { label: "应用存储", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "也就是小王墙上的草稿纸。", type: 'slider' },
      { label: "出口节点", items: ["村口大喇叭", "李大妈厨房"], hint: "大喇叭节点响应最广。", type: 'select' }
    ]
  },
  {
    id: "saas-leek",
    title: "SaaS (全自动韭菜收割机)",
    description: "一键部署。专门用于分析全村资产并自动生成扣费单，是村长的最爱。",
    price: "99.00",
    unit: "月",
    category: "平台",
    features: ["自动收割", "大数据脑补", "全村兼容"],
    options: [
      { label: "收割核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表收割的密集程度。", type: 'slider' },
      { label: "暂存内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "用于存放临时韭菜名单。", type: 'slider' },
      { label: "账单存储", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "账单堆叠高度。", type: 'slider' },
      { label: "收割强度", items: ["温柔 (9.9折)", "狠辣 (99.9% 扣款)", "根除"], hint: "根除模式下会直接导致用户破产。", type: 'radio' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "anti-complaint",
    title: "抗投诉服务器 (地窖物理屏蔽)",
    description: "由于服务器在地窖里且加了三把锁，任何律师函和投诉信都寄不进去。",
    price: "150.00",
    unit: "月",
    category: "安全",
    features: ["物理防火墙", "挂锁加密", "法律隔离"],
    options: [
      { label: "屏蔽核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "地窖通风扇的数量。", type: 'slider' },
      { label: "加密内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "抗电磁干扰级别。", type: 'slider' },
      { label: "防护硬盘", items: [], range: { min: 100, max: 1024, step: 100, unit: 'GB' }, hint: "防锈图层厚度。", type: 'slider' },
      { label: "出口节点", items: ["地窖窗口", "老王后院地洞"], hint: "地洞节点最隐蔽。", type: 'select' }
    ]
  },
  {
    id: "waf-dog",
    title: "大黄狗防火墙 (WAF)",
    description: "村口大黄狗亲自蹲守。任何可疑流量都会引发一阵狗叫，从而吓退黑客。",
    price: "35.00",
    unit: "月",
    category: "安全",
    features: ["声感拦截", "自动防御", "生物识别"],
    options: [
      { label: "防御核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "大黄狗的兴奋程度。", type: 'slider' },
      { label: "警告内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "狗叫声的分贝上限。", type: 'slider' },
      { label: "日志空间", items: [], range: { min: 1, max: 1024, step: 1, unit: 'GB' }, hint: "用于存放被啃坏的网线。", type: 'slider' },
      { label: "出口节点", items: ["狗窝旁", "电线杆下"], hint: "狗窝旁防御力最强。", type: 'select' }
    ]
  },

  // --- 其他 (Other) ---
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长按红泥章)",
    description: "由村长亲自加盖公章。浏览器必然报红，但代表了全村的公信力。",
    price: "99.00",
    unit: "年",
    category: "其他",
    features: ["物理印章", "村长背书", "有效期三天"],
    options: [
      { label: "印章性能", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表印泥的饱和度。", type: 'slider' },
      { label: "证书内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "扫描件的清晰度。", type: 'slider' },
      { label: "存储容量", items: [], range: { min: 1, max: 1024, step: 1, unit: 'GB' }, hint: "印章扫描件存放点。", type: 'slider' },
      { label: "印章等级", items: ["DV (红泥)", "OV (私章)", "EV (手指印)"], hint: "手指印等级最高。", type: 'radio' }
    ]
  },
  {
    id: "email-pigeon-pro",
    title: "邮件服务器 (信鸽专业版)",
    description: "支持回复功能。每封邮件由鸽子叼回村长办公室，充满古朴的质感。",
    price: "25.00",
    unit: "月",
    category: "其他",
    features: ["双向投递", "自带反垃圾", "物理回执"],
    options: [
      { label: "投递核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "鸽舍自动化程度。", type: 'slider' },
      { label: "附件内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "鸽子腿上能绑的重量。", type: 'slider' },
      { label: "信箱空间", items: [], range: { min: 5, max: 1024, step: 5, unit: 'GB' }, hint: "其实就是鸽棚的大小。", type: 'slider' },
      { label: "信鸽品种", items: ["肉鸽 (入门)", "赛鸽 (极速)"], hint: "肉鸽可能会被半路抓去炖了。", type: 'radio' }
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
