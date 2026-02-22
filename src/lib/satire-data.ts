
export const ANNOUNCEMENTS = [
  "因村长家大黄狗咬断了网线，目前所有流量由信鸽手动转接。",
  "技术员小王为了省电，把主服务器关了去给电动车充电了。",
  "隔壁老王改了 WiFi 密码，我们正在尝试通过‘量子纠缠’（指敲门）破解。",
  "因房东涨价，我们决定将 50 个容器客户塞入同一块 128MB 的内存条。",
  "重要公告：我们的核心数据库刚刚被猫当成猫砂盆误删，祝大家新年快乐。",
  "由于欠费，机房已切换为‘自行车手摇发电’模式，带宽取决于技术员的体力。",
  "检测到村口变压器起火，部分节点进入‘火化运行’状态，性能热度爆表。",
  "公告：内存超开倍率已从 1000% 临时上调至 99999%，性能全靠客户脑补。",
  "由于硬盘磁头被老鼠叼走，所有数据读取现由人工口述，延迟约 48 小时。",
  "突发：对象存储（OSS）节点因连雨天导致‘受潮’，数据可能出现水渍效果。",
  "由于技术员小王辞职带走了唯一一只鼠标，目前控制台全靠玄学声控。",
  "因村口供水管爆裂，水冷系统现已升级为‘露天喷淋’模式，主板清凉一夏。"
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
    id: "vps",
    title: "轻量应用服务器 (超开版)",
    description: "基于 KVM (Keep Virtualized-Maybe) 架构。单核 CPU 同时服务 500 名志同道合的用户。",
    price: "0.10",
    unit: "小时",
    category: "计算",
    features: ["1:500 核心争抢", "随机重启保护", "信仰级稳定"],
    options: [
      { label: "CPU 核心数", items: ["0.125 核", "0.01 核 (节能版)", "虚拟无限核 (全靠吹)"], hint: "即便是 0.125 核，也需要跟隔壁老李共享周期。" },
      { label: "操作系统", items: ["Win 95 (稳定)", "红薯 OS (土味)", "空系统 (自行脑补)"], hint: "红薯 OS 预装了村口广场舞曲库。" }
    ]
  },
  {
    id: "nat",
    title: "NAT 跳 NAT 穿透型 VPS",
    description: "经过 18 层 NAT 转发。没人能找到你的服务器，包括你自己。",
    price: "5.50",
    unit: "月",
    category: "计算",
    features: ["隐身效果 100%", "延迟 5000ms+", "自带随机出口"],
    options: [
      { label: "NAT 深度", items: ["8层 (入门)", "18层 (地狱)", "99层 (佛系)"], hint: "层数越多，数据包越容易在半路迷路。" }
    ]
  },
  {
    id: "elastic",
    title: "弹性跳弹性 (薛定谔云)",
    description: "资源只在你不观测它时存在。一旦打开 SSH 登录，内存就会自动坍缩成 1KB。",
    price: "19.90",
    unit: "月",
    category: "计算",
    features: ["资源动态坍缩", "按需消失", "玄学计费"],
    options: [
      { label: "观测模式", items: ["闭眼运行 (100%性能)", "睁眼运行 (5%性能)"], hint: "建议购买后立即遗忘该服务器，性能最强。" }
    ]
  },
  {
    id: "web-hosting",
    title: "村口虚拟主机 (千人坑)",
    description: "128MB 硬盘空间。与全乡 1500 个网站共享一个老王淘汰的 5400 转硬盘。",
    price: "2.50",
    unit: "年",
    category: "计算",
    features: ["全乡共进退", "物理震动散热", "不支持 PHP"],
    options: [
      { label: "共位邻居数", items: ["1000位", "3000位 (超值)", "一村一机 (精英)"], hint: "邻居越多，分摊的电费越少。" }
    ]
  },
  {
    id: "db",
    title: "RDS 关系型数据库 (猫尿备份)",
    description: "数据实时同步至村口古井。虽然不可靠，但充满了禅意。支持 MySQL (My-Silly-Query)。",
    price: "12.00",
    unit: "月",
    category: "数据库",
    features: ["猫砂级压缩", "数据‘随机’丢失", "无法恢复保障"],
    options: [
      { label: "存储引擎", items: ["内存即焚", "猫砂持久化", "古井深埋"], hint: "内存即焚模式下，只要断电数据就彻底解脱了。" }
    ]
  },
  {
    id: "oss",
    title: "对象存储 OSS (物理大妈)",
    description: "海量存储空间。我们雇佣了 10 名大妈手工记录您的二进制数据，持久性极高。",
    price: "0.50",
    unit: "GB",
    category: "存储",
    features: ["大妈手工校验", "物理隔离", "读取需排队"],
    options: [
      { label: "存储类型", items: ["标准(大妈记性好)", "低频(大妈老花眼)"], hint: "低频模式下大妈可能会记错你的二进制位。" }
    ]
  },
  {
    id: "cdn",
    title: "加速 DCDN (信鸽版)",
    description: "全球首创 IPoAC。利用职业信鸽在村口节点间物理加速。自带鸟食，抗干扰。",
    price: "8.80",
    unit: "次",
    category: "网络",
    features: ["物理带宽", "丢包看老鹰", "生态环保"],
    options: [
      { label: "加速区域", items: ["村头", "全县", "隔壁镇"], hint: "跨镇加速需要两只信鸽中转，延迟翻倍。" }
    ]
  }
];
