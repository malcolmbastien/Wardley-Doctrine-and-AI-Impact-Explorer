
import React, { useMemo } from 'react';
import { DoctrinePattern, Phase, Score } from '../types';
import { scoreColorsClasses, scoreShortNames, phaseShortNames, PHASES, SCORES_TO_TRACK } from '../constants';
import ImpactIcon from './ImpactIcon';

interface DistributionTableProps {
    data: DoctrinePattern[];
}

const DistributionTable: React.FC<DistributionTableProps> = ({ data }) => {
    const { distribution, totalCounts } = useMemo(() => {
        const distribution: Record<Phase, { Total: number, '3': number, '4': number, '5': number }> = {} as any;
        let totalCounts = { 5: 0, 4: 0, 3: 0, Total: 0 };

        data.forEach(item => {
            const { phase, score } = item;
            
            if (!distribution[phase]) {
                distribution[phase] = { Total: 0, 3: 0, 4: 0, 5: 0 };
            }

            if (SCORES_TO_TRACK.includes(score)) {
                distribution[phase][score]++;
                distribution[phase].Total++;
                totalCounts[score]++;
                totalCounts.Total++;
            }
        });

        return { distribution, totalCounts };
    }, [data]);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Strategic Focus Level Distribution by Phase</h2>
            <p className="text-gray-500 mb-6">This table illustrates the density of strategic challenges within each phase of the Wardley Doctrine, highlighting where the most profound AI impact lies.</p>
            
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/3">
                                Phase
                            </th>
                            {SCORES_TO_TRACK.map(score => {
                                const classes = scoreColorsClasses[score];
                                return (<th key={score} scope="col" className={`px-3 py-3 text-center text-xs font-semibold ${classes.tableText} uppercase tracking-wider`}>
                                    <div className="flex items-center justify-center"><ImpactIcon score={score} colorClass={classes.tableText} /></div>
                                    <span className="block font-medium text-gray-500 text-[10px]">{scoreShortNames[score]}</span>
                                </th>);
                            })}
                            <th scope="col" className="px-3 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider bg-gray-100">
                                Total Patterns
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {PHASES.map(phase => {
                            const phaseData = distribution[phase];
                            if (!phaseData) return null;
                            return (
                                <tr key={phase} className="hover:bg-gray-50">
                                    <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{phaseShortNames[phase]}</td>
                                    {SCORES_TO_TRACK.map(score => {
                                        const count = phaseData[score as Score];
                                        const classes = scoreColorsClasses[score];
                                        return (
                                            <td key={score} className={`px-3 py-3 whitespace-nowrap text-sm text-center font-bold ${classes.tableText} ${count > 0 ? classes.tableBg : 'text-gray-400'}`}>
                                                {count}
                                            </td>
                                        );
                                    })}
                                    <td className="px-3 py-3 whitespace-nowrap text-sm text-center font-extrabold text-indigo-700 bg-indigo-50">
                                        {phaseData.Total}
                                    </td>
                                </tr>
                            );
                        })}
                        <tr className="bg-gray-100 border-t-2 border-gray-300">
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-bold text-gray-800">TOTAL</td>
                            {SCORES_TO_TRACK.map(score => {
                                const classes = scoreColorsClasses[score];
                                return (
                                    <td key={score} className={`px-3 py-3 whitespace-nowrap text-sm text-center font-extrabold ${classes.tableText}`}>
                                        {totalCounts[score as Score]}
                                    </td>
                                );
                            })}
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-center font-extrabold text-white bg-indigo-600">
                                {totalCounts.Total}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DistributionTable;
