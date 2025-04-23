"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MailIcon } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isInView) {
      setVisible(true);
    }
  }, [isInView]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would submit to an API
    toast({
      title: "Thank you!",
      description: "You've been added to our waitlist. We'll notify you when we launch!",
    });
    
    setEmail('');
  };

  return (
    <section className="py-20 px-4">
      <div 
        ref={ref}
        className={`transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } max-w-md mx-auto text-center`}
      >
        <MailIcon className="h-12 w-12 mx-auto mb-6 text-blue-500" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8">
          Be the first to know when we launch. Subscribe to our newsletter for updates and early access.
        </p>
        
        <form onSubmit={handleSubscribe} className="flex gap-2 flex-col sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-card/20 border-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;