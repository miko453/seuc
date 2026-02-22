
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Gavel, ShieldOff, Clock } from "lucide-react";

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-headline font-bold mb-4 tracking-tighter">
            SERVICE <span className="text-accent">LIMITATION</span> AGREEMENT
          </h1>
          <p className="text-muted-foreground italic text-lg">
            "Because promising reliability is expensive and we already spent your money on coffee."
          </p>
        </header>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-primary border-b border-primary/20 pb-2 flex items-center gap-3">
              <Clock className="h-8 w-8" /> 1. UPTIME "ASPIRATIONS"
            </h2>
            <div className="bg-card p-6 border-l-4 border-primary font-light leading-relaxed">
              <p className="mb-4">
                Uncertain Cloud does not guarantee that your website will be online. We guarantee that we will <span className="italic">think</span> about putting it online occasionally.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li>Uptime measured by a guy named Steve checking if the lights are on.</li>
                <li>Planned maintenance: Any time we want to watch Netflix and it slows down the connection.</li>
                <li>Unplanned maintenance: Acts of God, cats, or local power outages.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-accent border-b border-accent/20 pb-2 flex items-center gap-3">
              <ShieldOff className="h-8 w-8" /> 2. DATA "SECURITY"
            </h2>
            <div className="bg-card p-6 border-l-4 border-accent font-light leading-relaxed">
              <p className="mb-4">
                We believe in the democratization of data. Your data, specifically.
              </p>
              <p className="text-sm text-muted-foreground italic">
                "By using this service, you agree that your database is technically public property. We do not use passwords because they are a form of gatekeeping that we find offensive."
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-destructive border-b border-destructive/20 pb-2 flex items-center gap-3">
              <AlertCircle className="h-8 w-8" /> 3. REFUND POLICY
            </h2>
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-8 text-center">
                <p className="text-2xl font-bold uppercase tracking-widest text-destructive mb-4">NO REFUNDS. EVER.</p>
                <p className="text-sm text-muted-foreground">
                  Even if the server explodes. Especially if the server explodes. Explosions are considered a premium special effect and will be billed accordingly.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-primary border-b border-primary/20 pb-2 flex items-center gap-3">
              <Gavel className="h-8 w-8" /> 4. LEGAL IMMUNITY
            </h2>
            <div className="bg-card p-6 border-l-4 border-primary font-mono text-xs uppercase opacity-70">
              <p>
                BY CLICKING "AGREE" OR SIMPLY VISITING THIS SITE, YOU WAIVE ALL RIGHTS TO SUE, COMPLAIN, OR EVEN BE SLIGHTLY ANNOYED AT US. WE ARE LEGALLY PROTECTED BY THE FACT THAT NO REASONABLE PERSON WOULD HAVE TRUSTED US IN THE FIRST PLACE.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-primary/20 text-center italic text-muted-foreground text-sm">
          "Sign here with your mouse, though it won't actually save your signature."
          <div className="mt-8 mx-auto w-64 h-24 border-2 border-primary/30 rounded flex items-center justify-center cursor-not-allowed">
            <span className="opacity-30">NOT RESPONDING...</span>
          </div>
        </div>
      </main>
    </div>
  );
}
