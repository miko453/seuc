
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
    id: "db",
    title: "RDS 关系型数据库 (猫尿备份)",
    description: "数据实时同步至村口古井。虽然不可靠，但充满了禅意。支持 MySQL (My-Silly-Query)。",
    price: "12.00",
    unit: "月",
    category: "数据库",
    features: ["猫砂级压缩", "数据‘随机’丢失", "无法恢复保障"],
    options: [
      { label: "存储引擎", items: ["内存即焚", "猫砂持久化", "古井深埋"], hint: "内存即焚模式下，只要断电数据就彻底解脱了。" },
      { label: "备份频率", items: ["看心情", "技术员醒着时", "从未备份"], hint: "由于硬盘不够，我们通常只备份文件名。" }
    ]
  },
  {
    id: "oss",
    title: "对象存储 OSS (物理磁带)",
    description: "海量存储空间。我们雇佣了 10 名大妈手工记录您的二进制数据，持久性极高（只要大妈不退休）。",
    price: "0.50",
    unit: "GB",
    category: "存储",
    features: ["大妈手工校验", "物理隔离", "读取需排队"],
    options: [
      { label: "存储类型", items: ["标准(大妈记性好)", "低频(大妈老花眼)", "归档(大妈已搬家)"], hint: "归档模式下，取回数据可能需要您亲自去村里找。" },
      { label: "加密方式", items: ["方言加密", "手写签名", "不加任何密"], hint: "方言加密采用村口正宗土话，连 AI 都破解不了。" }
    ]
  },
  {
    id: "cdn",
    title: "全站加速 DCDN (信鸽版)",
    description: "全球首创 IPoAC (IP over Avian Carriers)。利用职业信鸽在村口节点间物理加速。",
    price: "8.80",
    unit: "次",
    category: "网络",
    features: ["抗干扰(禁放鞭炮)", "物理带宽", "自带鸟食"],
    options: [
      { label: "加速区域", items: ["村头路口", "村尾地窖", "全县覆盖"], hint: "全县覆盖模式下，信鸽有概率在半路被老鹰抓走。" },
      { label: "回源策略", items: ["飞回去问", "等它飞累了", "随缘"], hint: "由于风力影响，回源延迟可能在 24 到 48 小时之间。" }
    ]
  },
  {
    id: "vpn",
    title: "安全加速 VPN (老王路由)",
    description: "流量经过老王家洗衣机智能转发。全链路加密（指老王看不懂英文）。",
    price: "15.00",
    unit: "月",
    category: "网络",
    features: ["老王嗅探加密", "洗衣机式重传", "速度看缘分"],
    options: [
      { label: "转发出口", items: ["老王地窖", "村长家狗圈", "张三家烟囱"], hint: "如果张三家在生火，流量可能会因为高温而丢包。" },
      { label: "隐私级别", items: ["全公开", "老王可见", "老王及其亲属可见"], hint: "选全公开可以省 5 块钱维护费。" }
    ]
  }
];
