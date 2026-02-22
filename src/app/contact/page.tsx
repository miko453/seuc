
"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2, Mail, MessageCircle, PhoneOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a really long, annoying delay to show "unreliability"
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "ERROR: Ticket Ignored",
        description: "Your complaint was received and immediately deleted to save disk space. Have a nice day!",
        variant: "destructive",
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-headline font-bold mb-4 tracking-tighter">
            GET IN <span className="text-accent italic">"TOUCH"</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            We have no support staff. Your emails go directly to an unmonitored printer in a recycling center.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card border-primary/20 text-center p-6">
            <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-1">EMAIL</h3>
            <p className="text-xs text-muted-foreground font-mono">null@uncertain.cloud</p>
          </Card>
          <Card className="bg-card border-primary/20 text-center p-6">
            <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-1">LIVE CHAT</h3>
            <p className="text-xs text-muted-foreground font-mono">Status: Offline (Forever)</p>
          </Card>
          <Card className="bg-card border-primary/20 text-center p-6">
            <PhoneOff className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-1">PHONE</h3>
            <p className="text-xs text-muted-foreground font-mono">Just scream into the void.</p>
          </Card>
        </div>

        <Card className="bg-card border-accent/20 border-2 overflow-hidden">
          <div className="bg-accent/10 p-4 border-b border-accent/20">
            <p className="text-[10px] font-mono text-accent text-center uppercase tracking-widest font-bold">
              ESTIMATED RESPONSE TIME: 4-6 BUSINESS DECADES
            </p>
          </div>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase opacity-70">Victim Name</label>
                  <Input 
                    placeholder="Enter name..." 
                    className="bg-background border-primary/30 focus:border-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase opacity-70">Email to Spamorize</label>
                  <Input 
                    type="email" 
                    placeholder="Enter email..." 
                    className="bg-background border-primary/30 focus:border-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase opacity-70">Your Useless Grievance</label>
                <Textarea 
                  placeholder="Tell us what broke, even though we won't fix it..." 
                  className="min-h-[150px] bg-background border-primary/30 focus:border-accent"
                  required
                />
              </div>

              <div className="pt-4">
                <Button 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/80 text-white font-bold h-14 uppercase tracking-widest text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      IGNORING REQUEST...
                    </>
                  ) : (
                    <>
                      SEND TO VOID
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center opacity-30 text-[10px] font-mono italic">
          Disclaimer: By submitting this form, you grant us permission to sell your contact information to at least 15 different insurance telemarketers.
        </div>
      </main>
    </div>
  );
}
