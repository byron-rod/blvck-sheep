'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { sharedRoutes } from '@/data/pricing';
import { Trip, QuotationData } from '@/components/quoter/QuotationPDF';

const QuotationDownload = dynamic(() => import('@/components/quoter/QuotationDownload'), {
  ssr: false,
  loading: () => (
    <button disabled className="w-full py-4 rounded-lg bg-zinc-800 text-white font-bold opacity-50 cursor-not-allowed">
      Loading PDF Engine...
    </button>
  ),
});

export default function QuoterPage() {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');
  const [clientName, setClientName] = useState('');
  const [pax, setPax] = useState<number>(1);
  const [trips, setTrips] = useState<Trip[]>([]);

  // Add a new empty trip
  const addTrip = () => {
    const newTrip: Trip = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
      type: 'shared',
      routeId: sharedRoutes[0].id,
      customRouteName: '',
      pax,
      price: sharedRoutes[0].price * pax,
    };
    setTrips([...trips, newTrip]);
  };

  // Remove a trip
  const removeTrip = (id: string) => {
    setTrips(trips.filter(t => t.id !== id));
  };

  // Recalculate price for a specific trip when its dependencies change
  const calculatePrice = (trip: Trip, globalPax: number): number => {
    if (trip.type === 'group' || trip.routeId === 'custom') {
      return trip.price; // Keep manual price
    }
    const route = sharedRoutes.find(r => r.id === trip.routeId);
    if (!route) return 0;

    if (trip.type === 'shared') {
      return route.price * globalPax;
    } else if (trip.type === 'private') {
      let base = route.privatePrice;
      if (globalPax === 4) {
        base += 100;
      }
      return base;
    }
    return 0;
  };

  // Update a specific trip field
  const updateTrip = (id: string, field: keyof Trip, value: any) => {
    setTrips(prev => prev.map(trip => {
      if (trip.id !== id) return trip;
      
      const updatedTrip = { ...trip, [field]: value };
      
      // Auto-recalculate price if type, routeId change (and not custom/group)
      if (field === 'type' || field === 'routeId') {
        if (updatedTrip.type === 'group') {
          updatedTrip.price = 0; // Clear price for group
        } else if (updatedTrip.routeId === 'custom') {
          updatedTrip.price = 0; // Clear price for custom
        } else {
          updatedTrip.price = calculatePrice(updatedTrip, pax);
        }
      }
      
      return updatedTrip;
    }));
  };

  // When global pax changes, recalculate all auto prices
  useEffect(() => {
    setTrips(prev => prev.map(trip => {
      // Sync pax to trip
      const updatedTrip = { ...trip, pax };
      // Only recalculate if not custom/group
      if (updatedTrip.type !== 'group' && updatedTrip.routeId !== 'custom') {
        updatedTrip.price = calculatePrice(updatedTrip, pax);
      }
      return updatedTrip;
    }));
  }, [pax]);

  const total = trips.reduce((sum, trip) => sum + (Number(trip.price) || 0), 0);

  const quotationData: QuotationData = {
    clientName,
    trips,
    total,
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      {/* Header */}
      <header className="p-6 border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur-md z-10">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <h1 className="text-xl font-bold tracking-widest">QUOTER</h1>
          <div className="flex bg-zinc-800 rounded-lg p-1">
            <button
              onClick={() => setLanguage('EN')}
              className={`px-4 py-1 text-sm font-bold rounded-md transition-colors ${language === 'EN' ? 'bg-white text-black' : 'text-zinc-400'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ES')}
              className={`px-4 py-1 text-sm font-bold rounded-md transition-colors ${language === 'ES' ? 'bg-white text-black' : 'text-zinc-400'}`}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-md mx-auto space-y-8">
        {/* Global Details */}
        <section className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={e => setClientName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-colors"
              placeholder="e.g. John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Passengers (Pax)</label>
            <input
              type="number"
              min="1"
              value={pax}
              onChange={e => setPax(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </section>

        {/* Trips */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Trips</h2>
          </div>

          {trips.map((trip, index) => (
            <div key={trip.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-4 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded">Trip {index + 1}</span>
                <button onClick={() => removeTrip(trip.id)} className="text-red-500 text-sm font-bold uppercase tracking-wider">Remove</button>
              </div>

              {/* Date & Type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-500 mb-1">Date</label>
                  <input
                    type="date"
                    value={trip.date}
                    onChange={e => updateTrip(trip.id, 'date', e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-1">Type</label>
                  <select
                    value={trip.type}
                    onChange={e => updateTrip(trip.id, 'type', e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-white appearance-none"
                  >
                    <option value="shared">Shared</option>
                    <option value="private">Private (1-4)</option>
                    <option value="group">Group (5+)</option>
                  </select>
                </div>
              </div>

              {/* Route */}
              <div>
                <label className="block text-xs text-zinc-500 mb-1">Route</label>
                <select
                  value={trip.routeId}
                  onChange={e => updateTrip(trip.id, 'routeId', e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-sm mb-2 focus:outline-none focus:border-white appearance-none"
                >
                  {sharedRoutes.map(route => (
                    <option key={route.id} value={route.id}>{route.from} to {route.to}</option>
                  ))}
                  <option value="custom">-- Custom Route --</option>
                </select>

                {trip.routeId === 'custom' && (
                  <input
                    type="text"
                    value={trip.customRouteName}
                    onChange={e => updateTrip(trip.id, 'customRouteName', e.target.value)}
                    placeholder="e.g. Xela to Panajachel"
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-white mt-2"
                  />
                )}
              </div>

              {/* Price */}
              <div>
                <label className="block text-xs text-zinc-500 mb-1">Price (Q)</label>
                <input
                  type="number"
                  value={trip.price === 0 ? '' : trip.price}
                  onChange={e => updateTrip(trip.id, 'price', parseFloat(e.target.value) || 0)}
                  disabled={trip.type !== 'group' && trip.routeId !== 'custom'}
                  className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-white disabled:opacity-50"
                  placeholder={trip.type === 'group' || trip.routeId === 'custom' ? 'Manual Price' : 'Auto'}
                />
              </div>
            </div>
          ))}

          <button
            onClick={addTrip}
            className="w-full py-4 border-2 border-dashed border-zinc-800 rounded-xl text-zinc-400 font-bold hover:border-white hover:text-white transition-colors"
          >
            + ADD TRIP
          </button>
        </section>
      </main>

      {/* Fixed Footer Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-black border-t border-zinc-800 p-6 z-20">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Total</span>
            <span className="text-2xl font-bold">Q{total.toFixed(2)}</span>
          </div>
          <QuotationDownload data={quotationData} language={language} />
        </div>
      </div>
    </div>
  );
}
