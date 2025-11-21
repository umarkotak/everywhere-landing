import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-pink-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              Everywhere<span className="text-pink-500 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">.id</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#pillars" className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Core Pillars
              </Link>
              <Link href="#network" className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Network
              </Link>
              <Link href="#contact" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_10px_rgba(255,20,147,0.5)] hover:shadow-[0_0_20px_rgba(255,20,147,0.7)]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
