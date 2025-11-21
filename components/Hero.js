export default function Hero() {
    return (
        <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-8 drop-shadow-sm leading-tight">
                            Your One Stop <br />
                            Campaign Solution
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 mb-12 leading-relaxed">
                            We combine digital signage, interactive livestreaming, and synchronized multi-venue distribution to enable coordinated, real-time experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="#contact" className="px-8 py-4 rounded-full bg-pink-500 text-white font-bold text-lg hover:bg-pink-600 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,20,147,0.4)]">
                                Get Started
                            </a>
                            <a href="#pillars" className="px-8 py-4 rounded-full bg-white/50 text-pink-600 font-bold text-lg hover:bg-white/80 backdrop-blur-md border border-pink-200 transition-all">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* YouTube Short */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group rounded-3xl overflow-hidden border-4 border-white bg-white shadow-[0_0_30px_rgba(255,105,180,0.3)] max-w-sm w-full transform rotate-2 hover:rotate-0 transition-all duration-500">
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
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse mix-blend-multiply"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000 mix-blend-multiply"></div>
            </div>
        </div>
    );
}
