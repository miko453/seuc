"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight } from "lucide-react";

type Post = {
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  status: string;
};

const BASE_POSTS: Post[] = [
  {
    date: "今天",
    title: "手摇发电机皮带断裂通知",
    excerpt: "技术员小王由于午饭没吃饱，摇发电机时用力过猛。目前全站靠蓄电池苟延残喘，预计 5 分钟后断网。",
    tag: "电力故障",
    status: "火化中"
  },
  {
    date: "2小时前",
    title: "紧急：红薯藤蔓缠绕了主板",
    excerpt: "地窖内存放的红薯大量发芽，藤蔓已进入 02 号服务器。访问者可能会感觉到网页带有红薯清香味。",
    tag: "生物干扰",
    status: "生态运行"
  },
  {
    date: "昨天",
    title: "关于隔壁老王 WiFi 密码更改说明",
    excerpt: "由于老王家小孩期中考试不及格，老王改了密码。我们已带上全村最好的礼品上门进行物理爆破。",
    tag: "网络中断",
    status: "全线瘫痪"
  },
  {
    date: "3天前",
    title: "内存超开倍率临时翻倍公告",
    excerpt: "为了迎接 618 大促，我们将 1GB 内存超开至 2TB。如果你的程序报错 OOM，那是你的信仰不够。",
    tag: "性能调整",
    status: "全靠想象"
  },
  {
    date: "5天前",
    title: "地窖漏雨：服务器已转入全水冷模式",
    excerpt: "天降大雨，服务器目前漂浮在水盆里运行。散热效率提升 500%，漏电风险提升 10000%。",
    tag: "环境预警",
    status: "漏电运行"
  },
  {
    date: "1周前",
    title: "HelloWorld 触发村庄变压器起火事故",
    excerpt: "某用户运行了过于复杂的 HelloWorld 代码，导致村口电表转成了电风扇。对此我们深表遗憾但不退款。",
    tag: "重大事故",
    status: "冒烟中"
  },
  {
    date: "2024-05-01",
    title: "信鸽载体协议 (IPoAC) 测试失败",
    excerpt: "由于村口老鹰捕食了我们的骨干网节点（那只鸽子），导致数据包丢失。丢包率 100%，已放弃修复。",
    tag: "协议升级",
    status: "鸽子被吃"
  },
  {
    date: "半个月前",
    title: "技术员小王辞职：带走了唯一的鼠标",
    excerpt: "小王说想去大城市看看，顺便顺走了服务器唯一的鼠标。目前控制台全靠小王留下的玄学指令维持。",
    tag: "人为因素",
    status: "降级运行"
  }
];

export function DynamicOutageList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // 随机打乱顺序或者根据时间戳伪造一些内容
    const shuffled = [...BASE_POSTS].sort(() => 0.5 - Math.random()).slice(0, 6);
    setPosts(shuffled);
  }, []);

  return (
    <div className="space-y-6">
      {posts.map((post, idx) => (
        <div key={idx} className="group cursor-pointer border-b border-primary/10 pb-4 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="outline" className="text-[8px] font-mono border-primary/30 text-primary uppercase">
              {post.tag}
            </Badge>
            <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
              <Calendar className="h-2 w-2" /> {post.date}
            </span>
          </div>
          <h4 className="text-sm font-bold group-hover:text-accent transition-colors mb-1">
            {post.title}
          </h4>
          <p className="text-[11px] text-muted-foreground italic line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[9px] uppercase font-bold text-destructive animate-pulse">
              状态: {post.status}
            </span>
            <ChevronRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ))}
      <div className="pt-4 text-center">
        <button className="text-[10px] font-mono uppercase text-primary underline decoration-dotted hover:text-accent">
          查看所有离谱历史记录
        </button>
      </div>
    </div>
  );
}
