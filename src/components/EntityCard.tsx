import React from 'react';
import { WebEntity } from "../data";
import { ExternalLink, ShieldAlert, BookOpen, AlertTriangle } from "lucide-react";

interface Props {
  entity: WebEntity;
  key?: React.Key;
}

export default function EntityCard({ entity }: Props) {
  const getCategoryColor = () => {
    switch (entity.category) {
      case 'Privacy & Security Tools':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Search & Directories':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Historical Black Markets':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'Forums & Info':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Myths & Legends':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
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

  return (
    <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors duration-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base font-medium text-slate-100 font-sans tracking-tight">
          {entity.name}
          {entity.isShutDown && (
            <span className="ml-2 text-[10px] font-semibold bg-red-950/40 text-red-400 px-1.5 py-0.5 rounded-full border border-red-900/50">
              SHUT DOWN
            </span>
          )}
        </h3>
        
        {entity.link ? (
          <a
            href={entity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-emerald-400 transition-colors"
            title="Official Clearnet Link"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <div title="No safe clearnet link available" className="text-slate-800 h-4 w-4"></div>
        )}
      </div>

      <div className="mb-3">
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${getCategoryColor()}`}>
          {getIcon()}
          {entity.category}
        </span>
      </div>

      <p className="text-slate-400 text-xs leading-relaxed flex-grow font-sans">
        {entity.explanation}
      </p>
    </div>
  );
}
