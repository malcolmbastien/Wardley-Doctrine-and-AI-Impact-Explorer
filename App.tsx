
import React, { useState, useMemo } from 'react';
import { doctrineData, PHASES, phaseShortNames } from './constants';
import { DoctrinePattern, Phase, Score } from './types';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import DistributionTable from './components/DistributionTable';
import FocusLevelDescriptions from './components/FocusLevelDescriptions';
import Filters from './components/Filters';
import PatternCard from './components/PatternCard';

const App: React.FC = () => {
    const [phaseFilter, setPhaseFilter] = useState<Phase | 'All'>('All');
    const [scoreFilter, setScoreFilter] = useState<Score | 'All'>('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => {
        let data = doctrineData;
        const lowercasedSearchTerm = searchTerm.toLowerCase();

        if (phaseFilter !== 'All') {
            data = data.filter(item => item.phase === phaseFilter);
        }

        if (scoreFilter !== 'All') {
            data = data.filter(item => item.score === scoreFilter);
        }

        if (lowercasedSearchTerm) {
            data = data.filter(item => 
                item.pattern.toLowerCase().includes(lowercasedSearchTerm) ||
                item.description.toLowerCase().includes(lowercasedSearchTerm)
            );
        }

        return data;
    }, [phaseFilter, scoreFilter, searchTerm]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Header />
            <main>
                <section id="dashboard" className="space-y-12">
                    <Onboarding />
                    <DistributionTable data={doctrineData} />
                    <FocusLevelDescriptions />
                    <Filters 
                        currentPhase={phaseFilter} 
                        currentScore={scoreFilter} 
                        searchTerm={searchTerm}
                        onPhaseChange={setPhaseFilter}
                        onScoreChange={setScoreFilter}
                        onSearchChange={setSearchTerm}
                    />
                    
                    <div id="patterns-container" className="space-y-12">
                       {filteredData.length > 0 ? (
                            PHASES.map(phase => {
                                const patternsInPhase = filteredData.filter(p => p.phase === phase);
                                if (patternsInPhase.length === 0) {
                                    return null;
                                }
                                return (
                                    <section key={phase}>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                                            {phaseShortNames[phase]}
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {patternsInPhase.map((pattern, index) => (
                                                <PatternCard key={`${pattern.pattern}-${index}`} pattern={pattern} />
                                            ))}
                                        </div>
                                    </section>
                                );
                            })
                       ) : (
                        <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg">
                            No patterns match the selected filters. Please adjust the Phase or Strategic Focus Level filters.
                        </div>
                       )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
