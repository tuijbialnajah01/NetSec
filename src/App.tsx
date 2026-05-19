import { useState, useEffect } from 'react';
import { webEntities } from './data';
import EntityCard from './components/EntityCard';
import { AlertOctagon, Terminal, Download, MessageCircle, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-hidden">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none pb-0 mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 via-teal-900/40 to-slate-900/80 blur-[100px] rounded-full" />
      </div>

      {/* Navigation / Header */}
      <nav className="border-b border-white/5 bg-slate-950/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative flex items-center w-full min-h-[36px]">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2 z-10 w-max"
            >
              <span className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Obito<span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">hex</span></span>
            </motion.div>
            {deferredPrompt && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-0 z-20"
              >
                <button
                  onClick={handleInstallClick}
                  className="flex items-center space-x-1.5 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full text-xs font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Install App</span>
                  <span className="sm:hidden">Install</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Grid */}
        {webEntities.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {webEntities.map(entity => (
              <motion.div key={entity.id} variants={itemVariants}>
                <EntityCard entity={entity} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-900/30 backdrop-blur-sm rounded-3xl border border-slate-800/50"
          >
            <Terminal className="w-10 h-10 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-sm font-mono">No entries found.</p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950/80 backdrop-blur-md mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm flex items-center text-center md:text-left">
            <AlertOctagon className="w-4 h-4 mr-2 flex-shrink-0 inline text-emerald-500/70" />
            Stay safe online. Information is for educational awareness.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://chat.whatsapp.com/EtnNVgBmNsS402qmIJ9KYW"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group"
            >
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Join Group</span>
            </a>
            <a
              href="https://wa.me/923711602272"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
