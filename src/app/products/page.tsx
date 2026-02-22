
"use client";

import { Navigation } from "@/components/Navigation";
import { PRODUCTS } from "@/lib/satire-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, Database, Network, HardDrive, LayoutGrid, 
  ChevronRight, ShoppingCart, Filter, Info
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["全部", "计算", "存储", "网络", "数据库"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProducts = activeCategory === "全部" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* WHMCS Style Sidebar Categories */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            <Card className="border-primary/20 bg-card/50">
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
                        : 'hover:bg-primary/10 text-muted-foreground'
                      }`}
                    >
                      {cat}
                      <ChevronRight className={`h-3 w-3 opacity-50 group-hover:translate-x-1 transition-transform ${activeCategory === cat ? 'opacity-100' : ''}`} />
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/5 p-4 space-y-3">
              <h4 className="text-xs font-bold text-accent uppercase flex items-center gap-2">
                <Info className="h-3 w-3" /> 购物提示
              </h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                所有业务均不提供在线率保障。购买即表示您承认自己是一个大冤种。
              </p>
            </Card>
          </aside>

          {/* Main Product List */}
          <main className="flex-1 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-primary/10 pb-6">
              <div>
                <h1 className="text-4xl font-headline font-black italic tracking-tighter">
                  产品中心 <span className="text-primary">/ {activeCategory}</span>
                </h1>
                <p className="text-muted-foreground text-sm font-mono mt-1 uppercase">
                  STATUS: 正在努力尝试不卷钱跑路
                </p>
              </div>
              <Badge variant="outline" className="border-primary/30 text-primary font-mono h-6">
                共有 {filteredProducts.length} 款受骗方案
              </Badge>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="bg-card border-primary/10 hover:border-primary transition-all flex flex-col group overflow-hidden">
                  <CardHeader className="p-5 border-b border-primary/5 bg-primary/5">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-background rounded-lg border border-primary/10">
                        {product.category === '计算' && <Server className="h-5 w-5 text-primary" />}
                        {product.category === '存储' && <HardDrive className="h-5 w-5 text-primary" />}
                        {product.category === '网络' && <Network className="h-5 w-5 text-primary" />}
                        {product.category === '数据库' && <Database className="h-5 w-5 text-primary" />}
                      </div>
                      <Badge className="bg-primary/20 text-primary border-none text-[9px] uppercase tracking-widest">{product.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-xs text-muted-foreground leading-relaxed min-h-[3rem]">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {product.features.map((f, i) => (
                        <li key={i} className="text-[10px] flex items-center gap-2 text-foreground/80 font-mono">
                          <div className="h-1 w-1 rounded-full bg-accent" /> {f}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-primary/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] opacity-40 uppercase font-bold">受骗价</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-primary font-mono">${product.price}</span>
                          <span className="text-[10px] text-muted-foreground">/{product.unit}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/80 font-bold px-4 h-10 gap-2" asChild>
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
              <div className="py-20 text-center space-y-4 bg-muted/20 rounded-2xl border-2 border-dashed border-primary/10">
                <LayoutGrid className="h-12 w-12 text-muted-foreground mx-auto opacity-20" />
                <p className="text-muted-foreground font-mono">该分类下的业务已全部跑路。</p>
                <Button variant="outline" onClick={() => setActiveCategory("全部")}>返回全线业务</Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
