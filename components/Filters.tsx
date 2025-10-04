
import React from 'react';
import { Phase, Score } from '../types';
import { phaseShortNames, PHASES, SCORES_TO_TRACK } from '../constants';
import ImpactIcon from './ImpactIcon';

interface FiltersProps {
    currentPhase: Phase | 'All';
    currentScore: Score | 'All';
    searchTerm: string;
    onPhaseChange: (phase: Phase | 'All') => void;
    onScoreChange: (score: Score | 'All') => void;
    onSearchChange: (term: string) => void;
}

const scoreButtonLabels: Record<Score, string> = {
    5: "Cultural & Strategic Pivot",
    4: "Organizational Re-engineering",
    3: "Technical & Process Optimization",
};

const Filters: React.FC<FiltersProps> = ({ currentPhase, currentScore, searchTerm, onPhaseChange, onScoreChange, onSearchChange }) => {

    const getButtonClass = (isActive: boolean) => {
        return isActive 
            ? 'filter-btn active bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow'
            : 'filter-btn bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200';
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore the Doctrine Patterns</h2>
            
            <div className="space-y-6">
                 <div>
                    <h3 className="font-semibold text-gray-700 mb-3">Search by Keyword:</h3>
                    <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                             <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="e.g., risk, culture, teams..."
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-700 mb-3">Filter by Phase:</h3>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => onPhaseChange('All')} className={getButtonClass(currentPhase === 'All')}>
                            All Phases
                        </button>
                        {PHASES.map(phase => (
                            <button key={phase} onClick={() => onPhaseChange(phase)} className={getButtonClass(currentPhase === phase)}>
                                {phaseShortNames[phase]}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-700 mb-3">Filter by Strategic Focus Level:</h3>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => onScoreChange('All')} className={getButtonClass(currentScore === 'All')}>
                            All Focus Levels
                        </button>
                        {SCORES_TO_TRACK.map(score => (
                             <button key={score} onClick={() => onScoreChange(score)} className={getButtonClass(currentScore === score)}>
                                <ImpactIcon score={score} colorClass={currentScore === score ? 'text-white' : 'text-gray-600'} />
                                {scoreButtonLabels[score]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
