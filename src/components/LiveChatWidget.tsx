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
          <Button size="icon" className="rounded-full w-14 h-14 bg-brand-blue hover:bg-brand-blue/90 dark:bg-brand-gold dark:hover:bg-brand-gold/90 dark:text-brand-blue shadow-lg">
            <MessageSquare className="h-7 w-7" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 mr-4 mb-2" side="top" align="end">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Need Help?</h4>
              <p className="text-sm text-muted-foreground">
                Reach out to us through any of these channels.
              </p>
            </div>
            <div className="grid gap-2">
              <Button asChild variant="outline">
                <a href="https://wa.me/2348155928993" target="_blank" rel="noopener noreferrer" className="flex items-center justify-start gap-2">
                  <WhatsappIcon className="h-4 w-4 text-green-500" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact" className="flex items-center justify-start gap-2">
                  <Mail className="h-4 w-4" />
                  Send us a Message
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact" className="flex items-center justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  View Contact Info
                </Link>
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}