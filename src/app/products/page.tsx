"use client";

import { Navigation } from "@/components/Navigation";
import { PRODUCTS } from "@/lib/satire-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, Database, Network, HardDrive, LayoutGrid, 
  ChevronRight, ShoppingCart, Filter, Info, 
  Cpu, Globe, Bird
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["全部", "计算", "存储", "网络", "数据库"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProducts = activeCategory === "全部" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getIcon = (category: string) => {
    switch(category) {
      case '计算': return <Cpu className="h-5 w-5" />;
      case '存储': return <HardDrive className="h-5 w-5" />;
      case '网络': return <Globe className="h-5 w-5" />;
      case '数据库': return <Database className="h-5 w-5" />;
      default: return <Server className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* WHMCS Style Sidebar Categories */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            <Card className="border-primary/20 bg-card/50 shadow-sm sticky top-24">
              <CardHeader className="p-4 border-b border-primary/10">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" /> 业务分类
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
                        : 'hover:bg-primary/5 text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {activeCategory === cat ? <ChevronRight className="h-3 w-3" /> : null}
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
                <Info className="h-4 w-4" /> 选购声明
              </h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                下单即表示您自愿承认自己是一个大冤种，且承诺绝不因服务器起火、数据丢失、或村长跑路而产生任何负面情绪。
              </p>
            </Card>
          </aside>

          {/* Main Product List */}
          <main className="flex-1 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-primary/10 pb-8">
              <div>
                <h1 className="text-5xl font-headline font-black italic tracking-tighter">
                  产品中心 <span className="text-primary">/ {activeCategory}</span>
                </h1>
                <p className="text-muted-foreground text-sm font-mono mt-1 uppercase tracking-widest">
                  STATUS: 正在努力尝试不卷钱跑路
                </p>
              </div>
              <Badge variant="outline" className="border-primary text-primary font-bold h-8 px-4 text-xs">
                共有 {filteredProducts.length} 款受骗方案待选
              </Badge>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="bg-card border-primary/10 hover:border-primary transition-all flex flex-col group overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5">
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
                          <div className="h-1 w-1 rounded-full bg-primary" /> {f}
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
                      <Button size="lg" className="bg-primary hover:bg-primary/90 font-black px-6 h-12 gap-2 shadow-lg shadow-primary/10" asChild>
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
                  <p className="text-xl font-bold italic">该分类下的业务已全部跑路</p>
                  <p className="text-sm text-muted-foreground">可能是因为技术员小王去相亲了。</p>
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
