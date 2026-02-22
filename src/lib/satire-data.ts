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
    title: "弹性计算服务器 (超开 1:1000)",
    description: "真正的一键弹性。1 核 CPU 看起来像 32 核，512MB 内存听起来像 512GB，虽然跑起来连 Hello World 都费劲。",
    price: "0.15",
    unit: "小时",
    category: "计算",
    features: ["手摇发电冗余", "邻居 WiFi 接入", "随机内核崩溃"],
    options: [
      { label: "CPU 核心", items: [], range: { min: 1, max: 32, step: 1, unit: 'vCPU' }, hint: "虽然选了 32 核，但本质上都是由同一台 2005 年的奔腾处理器分出来的。", type: 'slider' },
      { label: "物理内存", items: [], range: { min: 0.5, max: 512, step: 8, unit: 'GB' }, hint: "选到 512G 时，技术员小王会去村口超市多买几根内存条（如果他有钱的话）。", type: 'slider' },
      { label: "网络带宽", items: ["56kbps 拨号", "1Mbps 老王家 WiFi", "10Gbps (仅限内网且没线)"], hint: "56kbps 模式下，网页加载可能需要几个世纪。", type: 'select' }
    ]
  },
  {
    id: "storage-jar",
    title: "大硬盘存储 (咸菜缸阵列)",
    description: "海量冷存储。我们将您的 0 和 1 打印在纸条上，塞进防水防潮的咸菜缸里，深埋地下 3 米。",
    price: "0.01",
    unit: "GB",
    category: "存储",
    features: ["咸菜风味数据", "绝对离线安全", "读取需挖掘机"],
    options: [
      { label: "硬盘空间", items: [], range: { min: 10, max: 2048, step: 100, unit: 'GB' }, hint: "2TB 空间需要 50 个特大号咸菜缸。", type: 'slider' },
      { label: "存储介质", items: ["新华字典背面", "咸菜坛子刻字", "小王脑补"], hint: "咸菜坛子刻字具备天然的防水特性。", type: 'radio' }
    ]
  },
  {
    id: "network-nat",
    title: "NAT 服务器 (18层套娃)",
    description: "通过 18 层 NAT 转发，经过老王家、小李家、村长家、广播站路由器。您的 IP 将会像量子叠加态一样难以捉摸。",
    price: "1.50",
    unit: "月",
    category: "网络",
    features: ["内网穿透(物理版)", "IP 随缘跳转", "无独立公网 IP"],
    options: [
      { label: "NAT 数量", range: { min: 10, max: 1000, step: 10, unit: '个' }, hint: "1000 个 NAT 意味着您的数据包可能要在村里绕上 3 天。", type: 'slider' },
      { label: "IP 类型", items: ["IPv6-Only (孤儿机)", "双栈 (老王双份 WiFi)", "公共 IP (村委会共有)"], hint: "IPv6-Only 模式下，只有 1% 的用户能访问到您，主打一个清静。", type: 'radio' }
    ]
  },
  {
    id: "cdn-pigeon",
    title: "内容分发网络 (信鸽 Carrier)",
    description: "全球首家物理分发。通过信鸽携带硬盘实现物理级缓存同步，丢包率取决于老鹰的出没频率。",
    price: "5.00",
    unit: "TB流量包",
    category: "网络",
    features: ["零延迟(指心理上)", "物理防劫持", "按羽计费"],
    options: [
      { label: "流量包大小", items: ["1TB (雏鸽版)", "10TB (壮年鸽)", "100TB (鸽群大迁徙)"], hint: "100TB 流量包下单后，我们会租用全村所有的鸽子。", type: 'select' },
      { label: "投递策略", items: ["降落伞投放", "窗台降落", "交给李大妈"], hint: "交给李大妈可能会被她拆开检查数据是否健康。", type: 'radio' }
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
      { label: "验证级别", items: ["DV (大王认证)", "OV (二王认证)", "EV (村长盖章)"], hint: "EV 级别需要您向村委会捐赠两斤猪肉。", type: 'radio' }
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
