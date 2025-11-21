import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-pink-500/30">
      <Head>
        <title>Everywhere.id - Your One Stop Campaign Solution</title>
        <meta name="description" content="Everywhere.id - Your One Stop Campaign Solution. Digital Screen Network, Interactive Live Stream, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Features />
        <UseCases />
      </main>

      <Footer />
    </div>
  );
}
