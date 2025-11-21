export default function VideoSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Experience Everywhere</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See how we bring campaigns to life through our network and events.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Standard Video */}
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
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Play Everywhere Rewind 2024</h3>
                            <p className="text-gray-400 text-sm">
                                Evoking Moments and Entertainment Here and Everywhere!
                            </p>
                        </div>
                    </div>

                    {/* YouTube Short */}
                    <div className="flex justify-center">
                        <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm shadow-2xl shadow-blue-500/10 max-w-sm w-full">
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

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[-1] pointer-events-none opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
