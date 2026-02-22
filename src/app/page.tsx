
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CloudOff, Zap, ShieldAlert, WifiOff, HardDrive, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const villageImage = PlaceHolderImages.find(img => img.id === 'village-datacenter');
  
  return (
    <div className="relative">
      <GlitchOverlay />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold mb-6 leading-none">
            <span className="block italic opacity-70 text-4xl mb-4">WE DON'T PROMISE</span>
            <span className="glitch-effect" data-text="AVAILABILITY">AVAILABILITY</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light italic">
            "We found some old servers in a suburban village. We plugged them in. Now you can host your apps there. Good luck."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-white font-bold px-12 py-8 text-xl border-b-4 border-accent">
              DEPLOY NOW (MAYBE)
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent font-bold px-12 py-8 text-xl">
              READ THE LIES (SLA)
            </Button>
          </div>
        </div>
      </section>

      {/* Satirical Marketing Grid */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:-rotate-1">
              <CardContent className="p-8">
                <HardDrive className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl mb-4 font-headline text-accent">RAM OVERSOLD 1000%</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our proprietary memory management technology allows us to sell 64GB of RAM to 200 different customers simultaneously on a single 8GB machine. It's called "Quantum Swapping".
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:rotate-1">
              <CardContent className="p-8">
                <Cpu className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl mb-4 font-headline text-accent">VILLAGE DATA CENTERS</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic locations in unnamed basements and abandoned storerooms. Cooling provided by a single desk fan (when the technician remembers to turn it on).
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:-rotate-1">
              <CardContent className="p-8">
                <ShieldAlert className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl mb-4 font-headline text-accent">ZERO SECURITY GUARANTEE</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Firewalls? More like "Fire Suggestion". We believe in a truly open internet where anyone can access your database. It builds character for your developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured "Service" */}
      <section className="py-24 border-y border-primary/20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-primary/40 group">
              {villageImage && (
                <Image 
                  src={villageImage.imageUrl} 
                  alt={villageImage.description} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                  data-ai-hint={villageImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-xs font-mono border border-accent/50 text-accent">
                UNCERTAIN_EDGE_01: SUBURBAN_BASEMENT
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-headline tracking-tighter">THE <span className="text-accent italic">"BLACK INTERNET"</span> EDGE</h2>
              <p className="text-lg text-muted-foreground italic">
                Our network is so unstable that it exists in a state of superposition. Is your packet sent? Is it lost? Nobody knows until it fails to arrive.
              </p>
              <ul className="space-y-4 font-mono text-sm uppercase">
                <li className="flex items-center gap-3">
                  <WifiOff className="h-5 w-5 text-accent" /> Random Packet Loss Included
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" /> High-Voltage Latency Spikes
                </li>
                <li className="flex items-center gap-3">
                  <CloudOff className="h-5 w-5 text-accent" /> Bi-Weekly Data Loss Events
                </li>
              </ul>
              <Button asChild className="bg-accent text-white font-bold tracking-widest px-8">
                <Link href="/dashboard">VIEW REAL-TIME CHAOS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 text-center opacity-50">
        <p className="text-sm font-mono mb-2 uppercase">© 2024 UNCERTAIN CLOUD CO. - A DIVISION OF DISASTER INC.</p>
        <p className="text-[10px] uppercase tracking-[0.2em]">Privacy is impossible. Downtime is inevitable. Profit is our only priority.</p>
      </footer>
    </div>
  );
}
