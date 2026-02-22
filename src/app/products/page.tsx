"use client";

import { PRODUCTS } from "@/lib/satire-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, Database, HardDrive, LayoutGrid, 
  ChevronRight, ShoppingCart, Filter, Info, 
  Cpu, Globe, ShieldCheck, Layers, Boxes, Network, Activity, Zap, Bird
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["全部", "计算", "物理", "网络", "存储", "托管", "安全", "平台", "其他"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProducts = activeCategory === "全部" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getIcon = (category: string) => {
    switch(category) {
      case '计算': return <Cpu className="h-5 w-5 text-primary" />;
      case '物理': return <Server className="h-5 w-5 text-primary" />;
      case '存储': return <HardDrive className="h-5 w-5 text-primary" />;
      case '网络': return <Network className="h-5 w-5 text-primary" />;
      case '数据库': return <Database className="h-5 w-5 text-primary" />;
      case '平台': return <Layers className="h-5 w-5 text-primary" />;
      case '安全': return <ShieldCheck className="h-5 w-5 text-primary" />;
      case '托管': return <Globe className="h-5 w-5 text-primary" />;
      default: return <Boxes className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col py-16">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            <Card className="border-primary/20 bg-card/50 shadow-sm sticky top-24">
              <CardHeader className="p-4 border-b border-primary/10">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" /> 产品分类矩阵
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <nav className="space-y-1">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded text-sm transition-all flex items-center justify-between group ${
                        activeCategory === cat 
                        ? 'bg-primary text-white font-bold' 
                        : 'hover:bg-primary/5 text-muted-foreground font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {getIcon(cat)}
                        {cat}
                      </div>
                      <Badge variant="outline" className={activeCategory === cat ? "border-white text-white" : "border-primary/20"}>
                        {cat === '全部' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length}
                      </Badge>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5 p-6 space-y-3">
              <h4 className="text-xs font-bold text-accent uppercase flex items-center gap-2">
                <Info className="h-4 w-4" /> 受骗指南
              </h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                下单即表示您知道自己在做什么，或者您只是想试试会发生什么。我们保留随时卷钱跑路的权利。
              </p>
            </Card>
          </aside>

          <main className="flex-1 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-primary/10 pb-8">
              <div>
                <h1 className="text-5xl font-headline font-black italic tracking-tighter">
                  业务中心 <span className="text-primary">/ {activeCategory}</span>
                </h1>
                <p className="text-muted-foreground text-sm font-mono mt-1 uppercase tracking-widest">
                  STATUS: 正在努力尝试不让发电机爆炸
                </p>
              </div>
              <Badge variant="outline" className="border-primary text-primary font-bold h-8 px-4 text-xs">
                共有 {filteredProducts.length} 款坑爹方案
              </Badge>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="bg-card border-primary/10 hover:border-primary transition-all flex flex-col group overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300">
                  <CardHeader className="p-6 border-b border-primary/5 bg-primary/[0.02]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm border border-primary/5 text-primary">
                        {getIcon(product.category)}
                      </div>
                      <Badge className="bg-primary/10 text-primary border-none text-[10px] uppercase font-bold tracking-widest h-6 px-2">{product.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-bold italic tracking-tight">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-xs text-muted-foreground leading-relaxed min-h-[3rem]">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {product.features.map((f, i) => (
                        <li key={i} className="text-[10px] flex items-center gap-2 text-foreground/80 font-mono font-bold">
                          <Zap className="h-2 w-2 text-primary" /> {f}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-primary/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] opacity-40 uppercase font-black">受骗价</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-primary font-mono">${product.price}</span>
                          <span className="text-[10px] text-muted-foreground">/{product.unit}</span>
                        </div>
                      </div>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 font-black px-6 h-12 gap-2 shadow-lg" asChild>
                        <Link href={`/products/${product.id}`}>
                          <ShoppingCart className="h-4 w-4" /> 选购
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-24 text-center space-y-6 bg-muted/20 rounded-2xl border-2 border-dashed border-primary/10">
                <LayoutGrid className="h-16 w-16 text-muted-foreground mx-auto opacity-20" />
                <div className="space-y-2">
                  <p className="text-xl font-bold italic">该分类业务已跑路</p>
                  <p className="text-sm text-muted-foreground">技术员正在尝试从咸菜缸里捞服务器。</p>
                </div>
                <Button variant="outline" className="border-primary text-primary font-bold" onClick={() => setActiveCategory("全部")}>返回全线业务</Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
