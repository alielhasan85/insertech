import React from 'react';
import { Code as CodeXIcon } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <CodeXIcon className="h-7 w-7 text-primary" />
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-primary">Inser</span>
        <span className="text-blue-500">Tech</span>
      </span>
    </div>
  );
};

export default Logo;