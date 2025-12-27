import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsappIcon } from './icons/WhatsappIcon';
export function LiveChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            size="icon" 
            className="rounded-full w-14 h-14 bg-brand-teal hover:bg-cyan-400 text-brand-blue shadow-glow animate-pulse hover:animate-none transition-all"
            aria-label="Contact support"
          >
            <MessageSquare className="h-7 w-7" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 mr-4 mb-2 p-0 overflow-hidden border-brand-teal/20 shadow-glow-lg" side="top" align="end">
          <div className="bg-brand-blue p-4 text-white">
            <h4 className="font-medium leading-none flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              Need Help?
            </h4>
            <p className="text-xs text-gray-300 mt-2">
              We usually reply within 2 hours.
            </p>
          </div>
          <div className="p-4 grid gap-2 bg-background">
            <Button asChild variant="outline" className="justify-start gap-3 border-brand-teal/20 hover:border-brand-teal hover:bg-brand-teal/5">
              <a href="https://wa.me/2348155928993" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="h-4 w-4 text-green-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-3 border-brand-teal/20 hover:border-brand-teal hover:bg-brand-teal/5">
              <Link to="/contact">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span>Send us a Message</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-3 border-brand-teal/20 hover:border-brand-teal hover:bg-brand-teal/5">
              <Link to="/contact">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span>View Contact Info</span>
              </Link>
            </Button>
          </div>
          <div className="bg-brand-light dark:bg-brand-blue/30 p-2 text-center">
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">AcademiaPlus Support</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}