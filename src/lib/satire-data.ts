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
    id: "compute-engine",
    title: "Compute Engine (老王发电机版)",
    description: "高性能（指噪音大）虚拟机实例。支持 1:1000 严重超卖，配备物理散热（指扇扇子）。",
    price: "0.15",
    unit: "小时",
    category: "计算",
    features: ["手摇发电冗余", "邻居 WiFi 接入", "随机内核崩溃"],
    options: [
      { label: "机器类型", items: ["n1-ultra-small (0.0125核)", "n2-imaginary (虚拟核)", "e2-overbooked (千人共用)"], hint: "选择虚拟核时，性能由您的信仰决定。" }
    ]
  },
  {
    id: "cloud-storage",
    title: "Cloud Storage (地窖持久化)",
    description: "多区域（指全村不同地窖）存储。持久性极高（指地窖门锁了）。",
    price: "0.02",
    unit: "GB",
    category: "存储",
    features: ["防潮袋备份", "大妈手工索引", "读取需排队"],
    options: [
      { label: "存储级别", items: ["Standard (常温)", "Nearline (微冻)", "Archive (深埋)"], hint: "Archive 级别需要技术员小王拿铁锹去挖。" }
    ]
  },
  {
    id: "cloud-run",
    title: "Cloud Run (村长快跑)",
    description: "全托管式无服务器平台。根据村长心情自动缩容至 0。",
    price: "0.001",
    unit: "请求",
    category: "计算",
    features: ["心情感知扩容", "鸽子包路由", "自动跑路"],
    options: [
      { label: "最大实例数", items: ["1个", "0个 (最省钱)", "看缘分"], hint: "推荐选择 0 个，既环保又不会报错。" }
    ]
  },
  {
    id: "bigquery",
    title: "BigQuery (村委会大数据)",
    description: "完全托管的大数据分析平台。支持查询全村走丢的鸭子和老王的私房钱。",
    price: "5.00",
    unit: "TB",
    category: "分析",
    features: ["秒级处理(伪)", "人工分析结果", "数据泄露保障"],
    options: [
      { label: "分析深度", items: ["查户口", "查资产", "查八卦"], hint: "查询八卦可能触发‘邻居投诉’警告。" }
    ]
  }
];