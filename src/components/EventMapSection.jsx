import React from 'react';
import { Button } from './ui/button';

const EventMapSection = () => {
  return (
    <section id="event-info" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Event Map
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find your way around our expansive event grounds. Explore activity zones, community kitchens, and all that WMSJ 2025 camp site.
          </p>
          
          <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold rounded-md transition-colors">
            Read More
          </Button>
        </div>
        
        {/* Event Map Placeholder */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxvdXRkb29yJTIwY2FtcGluZ3xlbnwwfHx8fDE3NTgyNzU3MDl8MA&ixlib=rb-4.1.0&q=85" 
              alt="Event Map" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventMapSection;