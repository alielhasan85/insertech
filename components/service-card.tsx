import React from 'react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  visible: boolean;
  delay: number;
};

const ServiceCard = ({ icon, title, description, visible, delay }: ServiceCardProps) => {
  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-slate-950 p-6 rounded-xl border border-gray-800 overflow-hidden group hover:border-blue-600/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-5 text-blue-500">{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm flex-grow">{description}</p>
          
          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-blue-500 text-sm font-medium">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;