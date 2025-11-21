export default function Hero() {
    return (
        <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-8 drop-shadow-lg leading-tight">
                            Your One Stop <br />
                            Campaign Solution
                        </h1>
                        <p className="mt-4 text-xl text-gray-300 mb-12 leading-relaxed">
                            We combine digital signage, interactive livestreaming, and synchronized multi-venue distribution to enable coordinated, real-time experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="#contact" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20">
                                Get Started
                            </a>
                            <a href="#pillars" className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* YouTube Short */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm shadow-2xl shadow-blue-500/10 max-w-sm w-full transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="aspect-[9/16] w-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/YWXupOQRfMo"
                                    title="Everywhere.id Short"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
        </div>
    );
}
