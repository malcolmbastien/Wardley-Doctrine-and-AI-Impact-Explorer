
import React from 'react';
import { DoctrinePattern } from '../types';
import { scoreColorsClasses, scoreNames, scoreShortNames, phaseShortNames } from '../constants';
import ImpactIcon from './ImpactIcon';

interface PatternCardProps {
    pattern: DoctrinePattern;
}

const PatternCard: React.FC<PatternCardProps> = ({ pattern }) => {
    const score = pattern.score || 3;
    const colorClasses = scoreColorsClasses[score] || scoreColorsClasses[3];

    const createMarkup = (text: string) => {
        return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="card-header p-6 hover:bg-gray-50">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <p className="phase-tag text-xs font-semibold uppercase tracking-wider text-indigo-600">{phaseShortNames[pattern.phase] || pattern.phase}</p>
                        <div 
                            className={`strategic-focus-tag flex-shrink-0 px-3 py-1 text-xs font-bold rounded-full shadow-md flex items-center ${colorClasses.tagBg} ${colorClasses.tagText}`}
                            title={scoreNames[score] || "Unknown Focus Level"}
                        >
                            <ImpactIcon score={score} colorClass={colorClasses.tagText} />
                            {scoreShortNames[score] || "Unknown"}
                        </div>
                    </div>
                    <h3 className="pattern-title text-xl font-bold text-gray-800">{pattern.pattern}</h3>
                </div>
                <p className="pattern-description mt-3 text-gray-600">{pattern.description}</p>
            </div>
            <div className="px-6 pb-6">
                <div className="border-t border-gray-200 pt-4 space-y-4">
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">The Impact of AI</h4>
                        <p className="explanation-text text-gray-600 text-sm" dangerouslySetInnerHTML={createMarkup(pattern.explanation)}></p>
                    </div>
                    {pattern.recommendation && (
                         <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Recommendations for Managers</h4>
                            <p className="recommendation-text text-gray-600 text-sm" dangerouslySetInnerHTML={createMarkup(pattern.recommendation)}></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatternCard;