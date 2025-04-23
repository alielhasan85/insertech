"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import ServiceCard from './service-card';
import { GlobeIcon, SmartphoneIcon, LayoutDashboardIcon, PaletteIcon } from 'lucide-react';

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);
    }
  }, [isInView]);

  const services = [
    {
      icon: <GlobeIcon className="h-12 w-12" />,
      title: "Web App Development",
      description: "Custom web applications crafted with modern technologies. We build responsive, intuitive, and powerful solutions for your business needs.",
      delay: 0,
    },
    {
      icon: <SmartphoneIcon className="h-12 w-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications. Our mobile solutions provide seamless experiences across all devices and platforms.",
      delay: 150,
    },
    {
      icon: <LayoutDashboardIcon className="h-12 w-12" />,
      title: "Odoo ERP Integration",
      description: "Streamline your business operations with customized Odoo ERP solutions. From implementation to customization, we've got you covered.",
      delay: 300,
    },
    {
      icon: <PaletteIcon className="h-12 w-12" />,
      title: "Digital Media",
      description: "Creative digital media solutions to boost your brand presence. We craft compelling visuals, videos, and interactive content for your audience.",
      delay: 450,
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-center mb-16`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're creating innovative digital solutions to transform your business ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              visible={visible}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;