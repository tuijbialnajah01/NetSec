import { useState, useEffect } from 'react';
import { webEntities } from './data';
import EntityCard from './components/EntityCard';
import { Shield, Lock, Hexagon, AlertOctagon, Terminal, Download } from 'lucide-react';

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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Custom CSS/Icon Logo */}
              <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-lg mix-blend-screen"></div>
                {/* Background geometric shape */}
                <Hexagon className="w-8 h-8 text-emerald-500/40 absolute" strokeWidth={1.5} />
                {/* Main Icon */}
                <Shield className="w-4 h-4 text-emerald-400 relative z-10" strokeWidth={2.5} />
                {/* Mini badge icon */}
                <div className="absolute -bottom-1 -right-1 bg-slate-900 border border-emerald-500/30 rounded-full p-0.5 z-20 shadow-sm shadow-emerald-900/50">
                  <Lock className="w-2.5 h-2.5 text-emerald-300" strokeWidth={3} />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Net<span className="text-emerald-500">Sec</span></span>
            </div>
            {deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full text-xs font-semibold transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install App</span>
              </button>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-xs flex items-center">
              <AlertOctagon className="w-3.5 h-3.5 mr-1.5" />
              Stay safe online. Information is for educational awareness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
