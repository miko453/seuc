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
  }[];
};

export const PRODUCTS: ProductConfig[] = [
  {
    id: "vps-ultra",
    title: "虚拟专用服务器 (超开 1:1000)",
    description: "极致性能。我们通过修改内核参数，让您的 1 核 CPU 看起来像 1024 核，虽然跑起来像个计算器。",
    price: "0.15",
    unit: "小时",
    category: "计算",
    features: ["手摇发电冗余", "邻居 WiFi 接入", "随机内核崩溃"],
    options: [
      { label: "机器类型", items: ["n1-ultra-small (0.001核)", "n2-imaginary (纯虚拟)", "e2-overbooked (共享发电机)"], hint: "选择虚拟核时，性能由您的信仰决定。" },
      { label: "操作系统", items: ["CentOS 6 (传家宝)", "WinXP 纯净版", "红星系统 (高安全)"], hint: "安装 WinXP 需额外支付老王的授权费。" }
    ]
  },
  {
    id: "cdn-pigeon",
    title: "内容分发网络 (信鸽 Carrier)",
    description: "全球首家物理分发。通过信鸽携带硬盘实现物理级缓存同步，丢包率取决于老鹰的出没频率。",
    price: "5.00",
    unit: "TB",
    category: "网络",
    features: ["零延迟(指心理上)", "物理防劫持", "按羽计费"],
    options: [
      { label: "信鸽等级", items: ["肉鸽 (入门)", "赛鸽 (企业)", "特工鸽 (机密)"], hint: "特工鸽会躲避村头的弹弓攻击。" },
      { label: "投递策略", items: ["降落伞投放", "窗台降落", "交给李大妈"], hint: "交给李大妈可能会被她拆开检查数据是否健康。" }
    ]
  },
  {
    id: "oss-manual",
    title: "对象存储 (大妈手工记账)",
    description: "海量数据持久化。每一位 0 和 1 都由村口李大妈用笔记本手工记录，数据永久保存直到笔记本丢了。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["人工校验和", "防潮袋备份", "读取需等广告结束"],
    options: [
      { label: "备份介质", items: ["新华字典背面", "咸菜坛子刻字", "小王脑补"], hint: "咸菜坛子刻字具备天然的防水特性。" },
      { label: "读取速度", items: ["大妈清醒时", "电视剧广告期间", "等大妈睡醒"], hint: "大妈睡醒后读取速度可达 1 bit 每小时。" }
    ]
  },
  {
    id: "nat-jump",
    title: "NAT 跳 NAT (无限转发)",
    description: "经过老王家、小李家、村长家共 18 层路由转发。完美隐藏真实 IP，连你自己都找不到服务器在哪里。",
    price: "1.50",
    unit: "月",
    category: "计算",
    features: ["内网穿透(物理版)", "18层转发", "无独立公网 IP"],
    options: [
      { label: "转发层数", items: ["3层 (普通)", "9层 (地狱)", "18层 (虚无)"], hint: "18层转发后，延迟大概在 3 到 5 个世纪。" }
    ]
  },
  {
    id: "rds-potato",
    title: "MySQL 托管 (红薯数据库)",
    description: "基于地窖红薯存储引擎。数据像红薯一样深埋地底，具备天然的防核弹打击能力。",
    price: "12.00",
    unit: "库",
    category: "数据库",
    features: ["防爆备份", "红薯 SQL 语法", "慢查询人工干预"],
    options: [
      { label: "存储引擎", items: ["InnoDB (地窖)", "Memory (即吃即焚)", "MaoNiao (猫尿驱动)"], hint: "猫尿驱动引擎在湿度大时性能会有质的飞跃。" }
    ]
  },
  {
    id: "anti-complaint",
    title: "抗投诉服务器 (地窖屏蔽版)",
    description: "50 米深地窖。屏蔽一切律师函、传票和催缴单。只有大黄狗能找到这里。",
    price: "300.00",
    unit: "月",
    category: "安全",
    features: ["物理层无视投诉", "IP 随时跳转", "大黄狗巡逻"],
    options: [
      { label: "防御等级", items: ["屏蔽李大妈", "屏蔽村委会", "屏蔽联合国"], hint: "屏蔽联合国模式下，我们会剪断所有外接网线。" }
    ]
  },
  {
    id: "ssl-stamp",
    title: "SSL 证书 (村长亲自盖章)",
    description: "CA (Cun-Committee Authority) 签发。全绿加密图标，显示‘村长已阅’。",
    price: "5.00",
    unit: "年",
    category: "安全",
    features: ["手工印章", "地窖加密", "浏览器红色警告(正常)"],
    options: [
      { label: "验证级别", items: ["DV (大王认证)", "OV (二王认证)", "EV (村长盖章)"], hint: "EV 级别需要您向村委会捐赠两斤猪肉。" }
    ]
  },
  {
    id: "saas-leek",
    title: "SaaS (自动收韭菜系统)",
    description: "企业级管理。内置‘员工心理预警’、‘工资延迟发放’、‘自动加班通知’等模块。",
    price: "199.00",
    unit: "月",
    category: "平台",
    features: ["全自动压榨", "KPI 脑补生成", "跑路预演"],
    options: [
      { label: "压榨模式", items: ["996基础版", "007进阶版", "直到入土豪华版"], hint: "豪华版会自动监控员工的心跳以确保最大产出。" }
    ]
  },
  {
    id: "iaas-gen",
    title: "IaaS (基础设施即发电机)",
    description: "最底层资源交付。直接交付一台常柴 195 单缸机和一桶过期柴油到您的工位。",
    price: "1500.00",
    unit: "月",
    category: "平台",
    features: ["物理层交互", "手动点火", "黑烟排放许可"],
    options: [
      { label: "发电机型号", items: ["常柴单缸 (震动大)", "人力手摇 (低碳)", "土法炼焦驱动"], hint: "人力手摇需自行聘请两名壮丁。" }
    ]
  },
  {
    id: "email-spam",
    title: "邮件托管 (垃圾箱直达版)",
    description: "专业发信。我们保证您的每一封邮件都会精准进入用户的垃圾箱，绝不漏掉任何一个被举报的机会。",
    price: "0.50",
    unit: "万封",
    category: "其他",
    features: ["SPF/DKIM/老王认证", "无限黑名单", "自动退信保护"],
    options: [
      { label: "投递服务器", items: ["村口大喇叭", "信鸽群发", "老王转发器"], hint: "村口大喇叭适合进行公开的社会性抹黑。" }
    ]
  }
];

export const QUEUE_EVENTS = [
  "正在贿赂村口大黄狗...",
  "技术员小王正在手摇点火发电机...",
  "正在通过信鸽协议同步您的支付信息...",
  "邻居老王正在重启 WiFi 路由器，请稍等...",
  "村长正在核实您的家庭背景...",
  "地窖机房正在排水（昨天下雨了）...",
  "正在将您的订单写入李大妈的笔记本...",
  "正在由于网速过慢导致订单在半路迷路了...",
  "正在尝试联系猫找回被删掉的数据库...",
  "正在因为技术员去吃午饭，您的请求被挂起..."
];

export const ORDER_FAIL_REASONS = [
  "余额不足：不仅是您的，我们的银行卡也被冻结了。",
  "发电机起火：由于您下单过快，地窖里的发电机负载过高冒烟了。",
  "老王改了密码：订单在传输过程中因无法连接 WiFi 丢失。",
  "信鸽罢工：由于今天没有喂谷子，信鸽拒绝传输您的订单。",
  "村长不同意：村长认为您长得不像大冤种，拒绝为您服务。",
  "数据坍缩：由于地窖太潮湿，您的订单纸条已经糊掉了。"
];
