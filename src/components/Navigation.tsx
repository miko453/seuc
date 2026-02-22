
"use client";

import Link from "next/link";
import { CloudOff, Menu, X, Activity, FileText, Settings, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-primary/20 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <CloudOff className="h-8 w-8 text-primary group-hover:animate-glitch" />
              <span className="font-headline font-bold text-xl tracking-tighter">
                UNCERTAIN <span className="text-accent">CLOUD</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
              <Activity className="h-4 w-4" /> Status
            </Link>
            <Link href="/config" className="flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
              <Settings className="h-4 w-4" /> Config
            </Link>
            <Link href="/sla" className="flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
              <FileText className="h-4 w-4" /> SLA
            </Link>
            <Link href="/contact" className="flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
              <MessageSquare className="h-4 w-4" /> Support
            </Link>
            <Button variant="default" className="bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-widest text-xs">
              Sign In (Broken)
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-primary/20 px-4 pt-2 pb-6 space-y-2">
          <Link href="/dashboard" className="block py-2 text-lg font-medium">Status</Link>
          <Link href="/config" className="block py-2 text-lg font-medium">Config</Link>
          <Link href="/sla" className="block py-2 text-lg font-medium">SLA</Link>
          <Link href="/contact" className="block py-2 text-lg font-medium">Support</Link>
          <Button className="w-full mt-4 bg-primary text-white">Sign In</Button>
        </div>
      )}
    </nav>
  );
}
