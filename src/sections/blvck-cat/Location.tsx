export default function Location() {
    return (
        <section className="py-20 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-br from-white to-white/50 text-transparent bg-clip-text mb-6">
                            Conveniently Located
                        </h2>
                        <p className="text-white/70 text-lg mb-8">
                            We are located in the heart of Panajachel, just steps away from the main dock and Santander street. Drop off your bags and start exploring immediately.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl">Main Office</h4>
                                    <p className="text-white/50">Calle Santander 3-45, Panajachel</p>
                                    <p className="text-white/50">Sololá, Guatemala</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl">Opening Hours</h4>
                                    <p className="text-white/50">Monday - Sunday</p>
                                    <p className="text-white/50">7:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] w-full bg-neutral-800 rounded-2xl overflow-hidden relative">
                         {/* Placeholder for Map - In a real app, integrate Google Maps or Mapbox here */}
                         <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 border border-white/10 rounded-2xl">
                            <p className="text-white/30 font-medium">Map Integration Placeholder</p>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
