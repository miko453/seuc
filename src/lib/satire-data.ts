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
      { label: "系统盘 (NVMe)", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "上限 1TB，再多地窖装不下了。", type: 'slider' },
      { label: "出口节点", items: ["地窖出口", "村长办公室", "老王后院"], hint: "节点决定了数据的风味。", type: 'select' }
    ]
  },
  {
    id: "vps-elastic",
    title: "轻量应用服务器 (NAT VPS)",
    description: "极致共享 IP。由于 18 层 NAT 套娃转发，您的延迟可能绕地球三圈。",
    price: "5.00",
    unit: "月",
    category: "计算",
    features: ["共享 IPv4", "10Mbps 邻居宽带", "跑路保障"],
    options: [
      { label: "核心配置", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "采用 2005 年的奔腾分芯。", type: 'slider' },
      { label: "内存配置", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "实际可用视邻居下载情况而定。", type: 'slider' },
      { label: "硬盘配置", items: [], range: { min: 20, max: 1024, step: 20, unit: 'GB' }, hint: "由二手 U 盘组成。", type: 'slider' },
      { label: "出口节点", items: ["老王 WiFi", "拨号上网"], hint: "老王睡觉后会自动断网。", type: 'radio' }
    ]
  },
  {
    id: "vds-dedicated",
    title: "虚拟独立服务器 (VDS)",
    description: "基于 KVM 架构。其实是村长家台式机的一个虚拟机，拥有独立的死机权。",
    price: "45.00",
    unit: "月",
    category: "计算",
    features: ["KVM 虚拟化", "物理核独占", "独立死机"],
    options: [
      { label: "vCPU 核心", items: [], range: { min: 2, max: 4, step: 1, unit: 'C' }, hint: "独占核心，村长孙子不能动。", type: 'slider' },
      { label: "分配内存", items: [], range: { min: 4, max: 8, step: 1, unit: 'GB' }, hint: "内存独占，不会被老王占用。", type: 'slider' },
      { label: "数据硬盘", items: [], range: { min: 50, max: 1024, step: 50, unit: 'GB' }, hint: "其实是高速 SD 卡。", type: 'slider' },
      { label: "操作系统", items: ["Win 98", "Win XP (SP3)", "Ubuntu 6.06"], hint: "建议 XP，兼容性好。", type: 'select' }
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
      { label: "读取核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "决定了挖掘机读取速度。", type: 'slider' },
      { label: "内存缓冲", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "缓存咸菜味数据。", type: 'slider' },
      { label: "存储容量", items: [], range: { min: 100, max: 1024, step: 100, unit: 'GB' }, hint: "1TB 需占用后院两平米。", type: 'slider' },
      { label: "缸体等级", items: ["瓦缸 (普通)", "瓷缸 (VIP)", "不锈钢缸 (尊贵)"], hint: "不锈钢缸防锈效果最好。", type: 'radio' }
    ]
  },
  {
    id: "block-storage",
    title: "云硬盘 (Block Storage)",
    description: "采用三副本机制：村长、老王、李大妈各记一份在小本本上。",
    price: "0.20",
    unit: "GB",
    category: "存储",
    features: ["三副本冗余", "手动快照", "极速扩容"],
    options: [
      { label: "核心处理", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "处理 IO 队列的人数。", type: 'slider' },
      { label: "暂存内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "记忆力上限。", type: 'slider' },
      { label: "磁盘空间", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "上限 1TB，多了本子写不下。", type: 'slider' },
      { label: "出口节点", items: ["本子封面", "本子末页"], hint: "末页节点读取较慢。", type: 'select' }
    ]
  },

  // --- 网络 (Network) ---
  {
    id: "cdn-pigeon",
    title: "信鸽全球加速 (CDN)",
    description: "全村覆盖。信鸽叼着缓存光盘全速飞行，节点遍布村东头和村西头。",
    price: "0.05",
    unit: "GB",
    category: "网络",
    features: ["分发加速", "缓存清洗", "自带投递"],
    options: [
      { label: "调度核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "自动化鸽舍控制力。", type: 'slider' },
      { label: "缓存容量", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "鸽子腿部挂载缓冲。", type: 'slider' },
      { label: "回源硬盘", items: [], range: { min: 56, max: 1024, step: 128, unit: 'GB' }, hint: "回源数据存放点。", type: 'slider' },
      { label: "信鸽品种", items: ["肉鸽 (普通)", "赛鸽 (VIP)", "特工鸽 (旗舰)"], hint: "特工鸽自带防空火力。", type: 'radio' }
    ]
  },
  {
    id: "dns-loudspeaker",
    title: "大喇叭权威解析 (DNS)",
    description: "采用模拟信号进行解析。播音员大喊一声即可实现全球（全村）跳转。",
    price: "2.00",
    unit: "月",
    category: "网络",
    features: ["模拟信号", "人工解析", "嗓门加密"],
    options: [
      { label: "解析规格", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "代表播音员人数。", type: 'slider' },
      { label: "出口节点", items: ["广播站", "村委会电线杆"], hint: "电线杆节点信号最强。", type: 'select' },
      { label: "内存缓存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "存放域名的字典厚度。", type: 'slider' },
      { label: "硬盘存储", items: [], range: { min: 1, max: 1024, step: 1, unit: 'GB' }, hint: "备份本子的页数。", type: 'slider' }
    ]
  },

  // --- 数据库 (Database) ---
  {
    id: "db-mysql",
    title: "MySQL 托管 (猫尿驱动)",
    description: "通过在硬盘上喷洒猫尿维持磁头活性。异味加密，全表扫描专用。",
    price: "19.99",
    unit: "月",
    category: "数据库",
    features: ["MySQL 1.0", "异味加密", "物理级防护"],
    options: [
      { label: "核心规格", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "核心越多，味道越冲。", type: 'slider' },
      { label: "缓冲区内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "用于脑补查询结果。", type: 'slider' },
      { label: "数据库空间", items: [], range: { min: 5, max: 1024, step: 5, unit: 'GB' }, hint: "生锈上限 1TB。", type: 'slider' },
      { label: "备份节点", items: ["地窖窗口", "后院地洞"], hint: "地洞节点防鼠效果好。", type: 'select' }
    ]
  },

  // --- 平台 (Platform) ---
  {
    id: "paas-hand-crank",
    title: "PaaS (手摇应用引擎)",
    description: "全托管服务。所有 API 请求由技术员小王手动回复 JSON。",
    price: "50.00",
    unit: "月",
    category: "平台",
    features: ["人工后端", "手摇发电", "诚恳回复"],
    options: [
      { label: "手摇核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "小王手摇手柄的频率。", type: 'slider' },
      { label: "应用内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "短期记忆容量。", type: 'slider' },
      { label: "代码硬盘", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "小王墙上的草稿纸。", type: 'slider' },
      { label: "运行时", items: ["Node 0.0.1", "PHP 2.0", "Python 0.1"], hint: "Node 版响应较快。", type: 'radio' }
    ]
  },

  // --- 安全 (Security) ---
  {
    id: "anti-complaint",
    title: "抗投诉服务器 (地窖物理屏蔽)",
    description: "物理隔离防护。三把大锁守护，任何律师函都寄不进地窖。",
    price: "150.00",
    unit: "月",
    category: "安全",
    features: ["物理防火墙", "法律隔离", "挂锁加密"],
    options: [
      { label: "屏蔽核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "地窖通风扇数量。", type: 'slider' },
      { label: "加密内存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "抗电磁干扰级别。", type: 'slider' },
      { label: "硬盘配置", items: [], range: { min: 100, max: 1024, step: 100, unit: 'GB' }, hint: "防锈涂层厚度。", type: 'slider' },
      { label: "锁具型号", items: ["普通挂锁", "指纹锁 (画的)", "电子锁 (没电)"], hint: "普通挂锁最稳定。", type: 'radio' }
    ]
  },
  {
    id: "waf-dog",
    title: "大黄狗防火墙 (WAF)",
    description: "村口大黄狗亲自蹲守。可疑流量会引发狗叫，从而吓退黑客。",
    price: "35.00",
    unit: "月",
    category: "安全",
    features: ["生物识别", "声感拦截", "自动防御"],
    options: [
      { label: "防御核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "大黄狗兴奋程度。", type: 'slider' },
      { label: "内存缓冲", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "狗叫分贝上限。", type: 'slider' },
      { label: "日志硬盘", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "记录被咬网线的次数。", type: 'slider' },
      { label: "出口节点", items: ["狗窝旁", "电线杆下"], hint: "狗窝旁节点最安全。", type: 'select' }
    ]
  },

  // --- 其他 (Other) ---
  {
    id: "email-server",
    title: "邮件服务器 (信鸽专业版)",
    description: "支持双向投递。每封邮件由信鸽叼回，自带物理已读回执。",
    price: "25.00",
    unit: "月",
    category: "其他",
    features: ["双向投递", "物理回执", "反垃圾(老鹰)"],
    options: [
      { label: "投递核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "鸽舍自动化程度。", type: 'slider' },
      { label: "内存挂载", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "鸽子腿部负重。", type: 'slider' },
      { label: "信箱硬盘", items: [], range: { min: 10, max: 1024, step: 10, unit: 'GB' }, hint: "鸽棚物理大小。", type: 'slider' },
      { label: "出口节点", items: ["大槐树", "村委会电线杆"], hint: "电线杆节点视野好。", type: 'select' }
    ]
  },
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长按红泥章)",
    description: "物理公信力认证。虽然浏览器报红，但村长说这就是安全的。",
    price: "99.00",
    unit: "年",
    category: "其他",
    features: ["物理盖章", "村长背书", "有效期三天"],
    options: [
      { label: "认证核心", items: [], range: { min: 1, max: 4, step: 1, unit: 'C' }, hint: "村长按章的力度。", type: 'slider' },
      { label: "内存缓存", items: [], range: { min: 1, max: 8, step: 1, unit: 'GB' }, hint: "印泥饱和度缓存。", type: 'slider' },
      { label: "存档硬盘", items: [], range: { min: 1, max: 1024, step: 1, unit: 'GB' }, hint: "印章扫描件存放点。", type: 'slider' },
      { label: "证书等级", items: ["DV (红泥)", "OV (私章)", "EV (指纹)"], hint: "指纹版最具公信力。", type: 'radio' }
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
