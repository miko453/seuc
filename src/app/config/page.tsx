
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Network, Zap, CloudOff } from "lucide-react";
import { useState } from "react";

export default function ConfigPage() {
  const [ram, setRam] = useState([1]);
  const [cpu, setCpu] = useState([0.1]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-12">
            <section>
              <h1 className="text-4xl font-headline font-bold mb-2">CUSTOMIZE YOUR <span className="text-accent">CHAOS</span></h1>
              <p className="text-muted-foreground italic font-mono text-sm">Configure your server. We will ignore these settings and give you whatever is available in the closet.</p>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-headline flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" /> CPU CORES (SHARED WITH 5,000 OTHERS)
                </h3>
                <Badge variant="outline" className="text-accent">{cpu} vCPU</Badge>
              </div>
              <Slider 
                value={cpu} 
                onValueChange={setCpu} 
                max={1} 
                step={0.1} 
                className="[&_.relative]:bg-primary" 
              />
              <p className="text-[10px] text-muted-foreground font-mono italic">Lower values recommended to avoid drawing too much power and tripping the breaker.</p>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-headline flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" /> MEMORY (OVERSOLD)
                </h3>
                <Badge variant="outline" className="text-accent">{ram} GB</Badge>
              </div>
              <Slider 
                value={ram} 
                onValueChange={setRam} 
                max={128} 
                step={1} 
                className="[&_.relative]:bg-primary" 
              />
              <p className="text-[10px] text-muted-foreground font-mono italic">Choose 128GB if you want us to use your local browser's RAM via a dirty WebAssembly hack.</p>
            </section>

            <section className="space-y-6">
              <h3 className="text-xl font-headline flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" /> NETWORK "SPEED"
              </h3>
              <RadioGroup defaultValue="dialup" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="dialup" id="dialup" />
                  <Label htmlFor="dialup" className="flex flex-col">
                    <span className="font-bold">56k Dial-Up (Classic)</span>
                    <span className="text-[10px] opacity-60">Authentication via actual modems. Very noisy.</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="neighbor" id="neighbor" />
                  <Label htmlFor="neighbor" className="flex flex-col">
                    <span className="font-bold">Neighbor's Wi-Fi</span>
                    <span className="text-[10px] opacity-60">High speed, but disconnected when they go to sleep.</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="carrier" id="carrier" />
                  <Label htmlFor="carrier" className="flex flex-col">
                    <span className="font-bold">IPoAC (Carrier Pigeon)</span>
                    <span className="text-[10px] opacity-60">Extreme latency (8-12 hours). High packet loss (hawks).</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="magic" id="magic" />
                  <Label htmlFor="magic" className="flex flex-col">
                    <span className="font-bold">Quantum Random</span>
                    <span className="text-[10px] opacity-60">Network works or doesn't. Depends on your mood.</span>
                  </Label>
                </div>
              </RadioGroup>
            </section>
          </div>

          <aside className="w-full md:w-80 sticky top-24">
            <Card className="border-4 border-accent shadow-[0_0_20px_rgba(231,107,237,0.15)] bg-card overflow-hidden">
              <CardHeader className="bg-accent text-white p-4">
                <CardTitle className="text-lg uppercase tracking-tighter">ESTIMATED BILL (LIE)</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between font-mono text-sm">
                  <span>Base Price</span>
                  <span>$0.99</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span>"Uptime" Fee</span>
                  <span>$45.00</span>
                </div>
                <div className="flex justify-between font-mono text-sm text-destructive font-bold">
                  <span>Failure Insurance</span>
                  <span>$120.00</span>
                </div>
                <div className="pt-4 border-t border-primary/20 flex justify-between items-end">
                  <span className="font-headline text-xl">TOTAL:</span>
                  <span className="text-3xl font-bold text-accent">$165.99/hr</span>
                </div>
                <p className="text-[9px] text-muted-foreground italic leading-tight text-center">
                  * Price subject to change every 15 seconds based on our CEO's stock market performance.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary text-white font-bold py-6 group">
                  PURCHASE DISASTER
                  <Zap className="ml-2 h-4 w-4 group-hover:animate-glitch" />
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-6 p-4 border border-dashed border-primary/40 rounded italic text-[10px] text-center opacity-70">
              <CloudOff className="h-6 w-6 mx-auto mb-2 opacity-30" />
              "I bought the 128GB RAM plan and now my laptop's fans won't stop spinning even when it's off. 5 stars." - Happy Customer
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
