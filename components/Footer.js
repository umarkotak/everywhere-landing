export default function Footer() {
    return (
        <footer id="contact" className="bg-black/50 backdrop-blur-lg border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Everywhere.id</h3>
                        <p className="text-gray-400 max-w-md">
                            We develop public interaction solutions that combine digital signage, interactive livestreaming, and synchronized multi-venue distribution.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <p className="text-gray-400 mb-2">Ready to activate your campaign or event?</p>
                        <a href="mailto:business@everywhere.id" className="text-blue-400 hover:text-blue-300 transition-colors">
                            business@everywhere.id
                        </a>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Everywhere.id. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
