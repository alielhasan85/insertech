import React from 'react';
import { TwitterIcon, GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          
          <div>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              © {new Date().getFullYear()} InserTech. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/80 text-center md:text-right">
              Your partner in digital transformation.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-white transition-colors duration-200">
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors duration-200">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors duration-200">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors duration-200">
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;