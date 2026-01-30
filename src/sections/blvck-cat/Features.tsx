const features = [
    {
        title: "Verified Locations",
        description: "Every Blvck-Cat spot is vetted for security and safety.",
    },
    {
        title: "Any Size Luggage",
        description: "From backpacks to surfboards, we store it all for the same flat price.",
    },
    {
        title: "Insured & Safe",
        description: "Peace of mind included. Your belongings are insured while you explore.",
    },
];

export default function Features() {
    return (
        <section className="py-20 md:py-24">
            <div className="container">
                <div className="flex justify-center">
                     <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-br from-white to-white/50 text-transparent bg-clip-text text-center">
                        Why choose Blvck-Cat?
                    </h2>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="border border-white/10 p-6 rounded-xl bg-neutral-900/50 hover:bg-neutral-900/80 transition duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
