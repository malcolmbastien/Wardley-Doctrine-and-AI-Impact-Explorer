
import React from 'react';
import { scoreColorsClasses, SCORES_TO_TRACK } from '../constants';
import ImpactIcon from './ImpactIcon';

const scoreDetails = {
    5: {
        title: 'Cultural & Strategic Pivot',
        description: 'These principles demand the most profound transformation, focusing on **shifting fundamental beliefs, redefining mastery (away from coding), resetting strategic ambition**, or changing the organization\'s tolerance for risk and failure.'
    },
    4: {
        title: 'Organizational Re-engineering',
        description: 'These principles require deeper change in **organizational structure, key performance indicators (KPIs), governance models, and accountability protocols** to align human activity with AI velocity.'
    },
    3: {
        title: 'Technical & Process Optimization',
        description: 'These principles focus on **implementing new tools, defining clear prompt standards, and establishing fast guardrails** to capture immediate AI-driven efficiency gains within existing structures.'
    }
};

const FocusLevelDescriptions: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Understanding the Strategic Focus Levels</h3>
            <div className="space-y-4">
                {SCORES_TO_TRACK.map(score => {
                    const data = scoreDetails[score];
                    const colorClasses = scoreColorsClasses[score];
                    
                    return (
                        <div key={score} className={`p-4 rounded-lg ${colorClasses.blockBg} ${colorClasses.blockBorder} border`}>
                            <p className={`text-lg font-bold ${colorClasses.blockText} flex items-center`}>
                                <ImpactIcon score={score} colorClass={colorClasses.blockText} />
                                {data.title}
                            </p>
                            <p 
                                className={`text-sm ${colorClasses.blockText.replace('-700', '-600')} mt-1`}
                                dangerouslySetInnerHTML={{ __html: data.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FocusLevelDescriptions;