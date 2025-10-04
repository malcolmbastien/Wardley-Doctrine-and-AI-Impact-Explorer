
import React from 'react';
import { Score } from '../types';

interface ImpactIconProps {
    score: Score | number;
    colorClass: string;
    className?: string;
}

const ImpactIcon: React.FC<ImpactIconProps> = ({ score, colorClass, className = "h-4 w-4 inline-block align-middle mr-1" }) => {
    const filledBarClass = colorClass.replace('text-', 'fill-');
    const mutedBarClass = colorClass.includes('text-white') ? 'fill-indigo-300' : 'fill-gray-300';
    
    const bar1Class = score >= 3 ? filledBarClass : mutedBarClass;
    const bar2Class = score >= 4 ? filledBarClass : mutedBarClass;
    const bar3Class = score === 5 ? filledBarClass : mutedBarClass;

    return (
        <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bar 1 (Score 3) */}
            <rect x="2" y="12" width="4" height="4" rx="1" className={bar1Class}/>
            {/* Bar 2 (Score 4) */}
            <rect x="7" y="7" width="4" height="9" rx="1" className={bar2Class}/>
            {/* Bar 3 (Score 5) */}
            <rect x="12" y="2" width="4" height="14" rx="1" className={bar3Class}/>
        </svg>
    );
};

export default ImpactIcon;
