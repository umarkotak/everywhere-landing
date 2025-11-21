export default function Footer() {
    return (
        <footer id="contact" className="bg-white/80 backdrop-blur-lg border-t border-pink-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">About Everywhere.id</h3>
                        <p className="text-gray-600 max-w-md leading-relaxed">
                            Everywhere.id operates under PT Produksi Kreatif Anak Bangsa. We develop public interaction solutions that combine digital signage, interactive livestreaming, and synchronized multi-venue distribution to enable coordinated, real-time experiences for brands, artists, and audiences.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Ready to Activate Your Campaign or Event?</h4>
                        <p className="text-gray-600 mb-4">Contact our partnerships team to discuss venue options, campaign formats, and technocal requirement.</p>
                        <a href="mailto:business@everywhere.id" className="text-pink-500 hover:text-pink-600 transition-colors font-medium text-lg">
                            business@everywhere.id
                        </a>
                    </div>
                </div>
                <div className="border-t border-pink-100 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Everywhere.id. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
