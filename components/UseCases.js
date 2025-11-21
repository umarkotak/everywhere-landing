const useCases = [
    {
        title: "Multi-Venue Ad Campaign",
        description: "Brands run Ads across medical clinics, retail, and malls to reach diverse audience segments with centralized reporting.",
        gradient: "from-pink-50 to-purple-50",
        border: "border-pink-100",
        image: "/assets/ads.png"
    },
    {
        title: "Expo Activation",
        description: "Multiple PlayBox Tower placement in Expo venue, showcase Sponsor Ads and Interactive livestreams music with Ads Overlay, guide visitors to sponsors’ promoted products. Online bidding gamification across multiple display; prize collection is centralized to reduce booth overhead.",
        gradient: "from-purple-50 to-blue-50",
        border: "border-purple-100",
        image: "/assets/expo.png"
    },
    {
        title: "Ngopi & Nobar Pacuan Kuda",
        description: "Low-latency streams create near-real-time horse race viewing across 10 venues, paired with local MCs, offline gamification, and overlay Ads for sponsor visibility and attendees excitement.",
        gradient: "from-blue-50 to-cyan-50",
        border: "border-blue-100",
        image: "/assets/nobar.png"
    },
    {
        title: "Concert Everywhere",
        description: "One production streams to partner venues in multiple cities with unified sponsor placements and synchronized audience interaction.",
        gradient: "from-cyan-50 to-teal-50",
        border: "border-cyan-100",
        image: "/assets/concert.png"
    }
];

export default function UseCases() {
    return (
        <div id="use-cases" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Selected Use Case</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real-world applications of our synchronized ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <div key={index} className={`relative group rounded-3xl border ${useCase.border} bg-gradient-to-br ${useCase.gradient} backdrop-blur-xl hover:shadow-[0_0_20px_rgba(255,20,147,0.2)] transition-all duration-500 hover:-translate-y-1 overflow-hidden`}>
                            <div className="h-56 w-full relative overflow-hidden">
                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    {useCase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
