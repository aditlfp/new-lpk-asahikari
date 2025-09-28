import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    // Target date: September 9, 2025
    const targetDate = new Date('2025-09-09T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
          Save the date
        </h2>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-16 mb-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-lg text-gray-600">Days</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-lg text-gray-600">Hours</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-lg text-gray-600">Minutes</div>
          </div>
        </div>
        
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors">
          Join NOW!
        </Button>
      </div>
    </section>
  );
};

export default CountdownSection;