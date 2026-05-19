import React from 'react';
import { WebEntity } from "../data";
import { ExternalLink, ShieldAlert, BookOpen, AlertTriangle } from "lucide-react";
import { motion } from 'motion/react';

interface Props {
  entity: WebEntity;
  key?: React.Key;
}

export default function EntityCard({ entity }: Props) {
  const getCategoryTheme = () => {
    switch (entity.category) {
      case 'Privacy & Security Tools':
        return {
          bg: 'bg-emerald-500/10',
          text: 'text-emerald-400',
          border: 'border-emerald-500/20',
          glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
        };
      case 'Search & Directories':
        return {
          bg: 'bg-blue-500/10',
          text: 'text-blue-400',
          border: 'border-blue-500/20',
          glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
        };
      case 'Historical Black Markets':
        return {
          bg: 'bg-red-500/10',
          text: 'text-red-500',
          border: 'border-red-500/20',
          glow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]'
        };
      case 'Forums & Info':
        return {
          bg: 'bg-purple-500/10',
          text: 'text-purple-400',
          border: 'border-purple-500/20',
          glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
        };
      case 'Myths & Legends':
        return {
          bg: 'bg-orange-500/10',
          text: 'text-orange-400',
          border: 'border-orange-500/20',
          glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]'
        };
      default:
        return {
          bg: 'bg-slate-500/10',
          text: 'text-slate-400',
          border: 'border-slate-500/20',
          glow: 'group-hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]'
        };
    }
  };

  const getIcon = () => {
    switch (entity.category) {
      case 'Privacy & Security Tools':
        return <ShieldAlert className="w-4 h-4 mr-1.5" />;
      case 'Historical Black Markets':
        return <AlertTriangle className="w-4 h-4 mr-1.5" />;
      default:
        return <BookOpen className="w-4 h-4 mr-1.5" />;
    }
  };

  const theme = getCategoryTheme();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group flex flex-col h-full bg-slate-900/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${theme.glow}`}
    >
      {/* Subtle ambient hover glow behind card */}
      <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-full ${theme.bg.replace('/10', '')}`} />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-semibold text-white font-sans tracking-tight leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
            {entity.name}
          </h3>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${theme.bg} ${theme.text} ${theme.border}`}>
            {getIcon()}
            {entity.category}
          </span>
        </div>
        
        <div className="flex flex-col items-end space-y-2">
          {entity.isShutDown && (
            <span className="text-[10px] font-bold bg-red-500/10 text-red-500 px-2.5 py-1 rounded-full border border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
              SHUT DOWN
            </span>
          )}
          {entity.link ? (
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href={entity.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-slate-400 hover:text-emerald-400 transition-colors border border-white/5 shadow-sm"
              title="Official Clearnet Link"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          ) : (
            <div title="No safe clearnet link available" className="w-8 h-8 rounded-full border border-dashed border-slate-700/50"></div>
          )}
        </div>
      </div>

      <p className="text-slate-400/90 text-sm leading-relaxed flex-grow font-sans relative z-10 group-hover:text-slate-300 transition-colors duration-300">
        {entity.explanation}
      </p>
    </motion.div>
  );
}
