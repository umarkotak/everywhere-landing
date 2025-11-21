const features = [
    {
        title: "Ads Everywhere",
        subtitle: "DOOH Solution",
        description: "A distributed digital-out-of-home networks with scheduled advertisement. Centralized distribution via Ads Everywhere network ensures high frequency and reliable reach.",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Hybrid Activation",
        subtitle: "Interactive Experiences",
        description: "Offline-online activations interactive livestreams with on-site experiences. Formats include EXPO activations and NOBAR synchronized watch-parties.",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Concert Everywhere",
        subtitle: "Digital Performances",
        description: "Multi-venue concert formats and digital performances: SyncFest, Borderless Beats, and Meta Arena. Designed for synchronized audience experiences.",
        gradient: "from-amber-500/20 to-orange-500/20"
    }
];

const services = [
    { title: "Digital Screen Network", desc: "Public screens in clinics, retail, malls, and partner venues." },
    { title: "Ad Slots & TV 3.0", desc: "Scheduled Rotation advertisement content that deliver repeat impressions." },
    { title: "Interactive Live Stream", desc: "Two-way engagement through QR, low-latency video and audio." },
    { title: "On-Site Gamification", desc: "Synchronized challenges and activations managed from the central studio." },
    { title: "Overlay Ads", desc: "Integrated monetization layers running on top of live streams." },
    { title: "Multi Cast Distribution", desc: "One production distributed simultaneously to multiple partner venues." }
];

export default function Features() {
    return (
        <div id="pillars" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Three Core Pillars</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our foundation for delivering exceptional campaign solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {features.map((feature, index) => (
                        <div key={index} className={`relative group p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${feature.gradient} backdrop-blur-xl hover:border-white/30 transition-all duration-500 hover:-translate-y-2`}>
                            <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm font-semibold text-blue-300 mb-4 uppercase tracking-wider">{feature.subtitle}</p>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div id="network" className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Network</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Expanding reach through technology and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                            <p className="text-gray-400 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Rewind Video Section */}
                <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
                    <div className="aspect-video w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/TywjEEtNszA"
                            title="Evoking Moments and Entertainment Here and Everywhere! - Play Everywhere Rewind 2024"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Play Everywhere Rewind 2024</h3>
                        <p className="text-gray-400">
                            Evoking Moments and Entertainment Here and Everywhere!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
