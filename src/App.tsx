import { useState, useEffect } from 'react';
import { webEntities } from './data';
import EntityCard from './components/EntityCard';
import { AlertOctagon, Terminal, Download, MessageCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation / Header */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative flex items-center w-full min-h-[36px]">
            <div className="flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2 z-10 w-max">
              {/* Custom Ox Logo */}
              <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0 bg-slate-900 border border-emerald-500/40 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 text-[15px] tracking-tight">Ox</span>
                {/* Status Dot */}
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-slate-950 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Obito<span className="text-emerald-500">hex</span></span>
            </div>
            {deferredPrompt && (
              <div className="absolute right-0 z-20">
                <button
                  onClick={handleInstallClick}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full text-xs font-semibold transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Install App</span>
                  <span className="sm:hidden">Install</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid */}
        {webEntities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {webEntities.map(entity => (
              <EntityCard key={entity.id} entity={entity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed">
            <Terminal className="w-8 h-8 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-sm font-mono">No entries found.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs flex items-center text-center md:text-left">
            <AlertOctagon className="w-4 h-4 mr-1.5 flex-shrink-0 inline" />
            Stay safe online. Information is for educational awareness.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/923711602272"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full text-xs font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
