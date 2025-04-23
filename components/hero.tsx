"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Logo from "./logo";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [days, setDays] = useState(30);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setLoaded(true);

    // Countdown timer
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation classes based on loaded state
  const titleClasses = `transition-all duration-1000 ease-out ${
    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  const subtitleClasses = `transition-all duration-1000 delay-300 ease-out ${
    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  const countdownClasses = `transition-all duration-1000 delay-500 ease-out ${
    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  const buttonClasses = `transition-all duration-1000 delay-700 ease-out ${
    loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <div className="absolute top-6 left-6 z-20">
        <Logo />
      </div>

      <div className="max-w-4xl mx-auto ">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${titleClasses} `}
        >
          <span className="text-blue-500">Innovating</span> The Digital Future
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto ${subtitleClasses}`}
        >
          We&apos;re building something amazing. InserTech is crafting
          next-generation solutions for web, mobile, ERP, and digital media.
        </p>

        <div className={`mb-12 ${countdownClasses}`}>
          <p className="text-muted-foreground mb-4">Launching in</p>
          <div className="flex justify-center items-center gap-2 md:gap-6">
            <div className="flex flex-col p-2 md:p-4 bg-card/20 backdrop-blur-sm rounded-lg min-w-16">
              <span className="text-2xl md:text-4xl font-bold">{days}</span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Days
              </span>
            </div>
            <div className="flex flex-col p-2 md:p-4 bg-card/20 backdrop-blur-sm rounded-lg min-w-16">
              <span className="text-2xl md:text-4xl font-bold">{hours}</span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Hours
              </span>
            </div>
            <div className="flex flex-col p-2 md:p-4 bg-card/20 backdrop-blur-sm rounded-lg min-w-16">
              <span className="text-2xl md:text-4xl font-bold">{minutes}</span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Minutes
              </span>
            </div>
            <div className="flex flex-col p-2 md:p-4 bg-card/20 backdrop-blur-sm rounded-lg min-w-16">
              <span className="text-2xl md:text-4xl font-bold">{seconds}</span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Seconds
              </span>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className={`group ${buttonClasses}`}
          onClick={scrollToServices}
        >
          Discover Our Services
          <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
