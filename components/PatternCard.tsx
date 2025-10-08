import React from 'react';
import { DoctrinePrinciple } from '../types';
import { scoreColorsClasses, scoreNames, scoreShortNames, phaseShortNames, principleIcons } from '../constants';
import ImpactIcon from './ImpactIcon';

interface PrincipleCardProps {
    principle: DoctrinePrinciple;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle }) => {
    const score = principle.score || 3;
    const colorClasses = scoreColorsClasses[score] || scoreColorsClasses[3];

    const createMarkup = (text: string) => {
        return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="card-header p-6 hover:bg-gray-50">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-4">
                        <p className="phase-tag text-xs font-semibold uppercase tracking-wider text-indigo-600">{phaseShortNames[principle.phase] || principle.phase}</p>
                        <div 
                            className={`strategic-focus-tag flex-shrink-0 px-3 py-1 text-xs font-bold rounded-full shadow-md flex items-center ${colorClasses.tagBg} ${colorClasses.tagText}`}
                            title={scoreNames[score] || "Unknown Focus Level"}
                        >
                            <ImpactIcon score={score} colorClass={colorClasses.tagText} />
                            {scoreShortNames[score] || "Unknown"}
                        </div>
                    </div>
                    <h3 className="principle-title text-xl font-bold text-gray-800 flex items-center gap-3">
                        {principleIcons[principle.principle] && (
                            <span className="text-2xl flex-shrink-0" aria-hidden="true">{principleIcons[principle.principle]}</span>
                        )}
                        <span>{principle.principle}</span>
                    </h3>
                </div>
                <p className="principle-description mt-3 text-gray-600">{principle.description}</p>
            </div>
            <div className="px-6 pb-6">
                <div className="border-t border-gray-200 pt-4 space-y-4">
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">The Impact of AI</h4>
                        <p className="explanation-text text-gray-600 text-sm" dangerouslySetInnerHTML={createMarkup(principle.explanation)}></p>
                    </div>
                    {principle.recommendation && (
                         <div>
                            <h4 className="font-semibold text-gray-700 mb-2">Recommendations for Managers</h4>
                            <p className="recommendation-text text-gray-600 text-sm" dangerouslySetInnerHTML={createMarkup(principle.recommendation)}></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrincipleCard;