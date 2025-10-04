
import React from 'react';

const Onboarding: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {/* How to Use Guide */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use This Explorer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="font-semibold text-gray-700">1. Get the Big Picture</h3>
                        <p className="text-sm text-gray-600 mt-1">Start with the distribution table to see where AI's impact is most concentrated across the four phases of strategy.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM13 10a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" /></svg>
                        </div>
                        <h3 className="font-semibold text-gray-700">2. Filter Your Focus</h3>
                        <p className="text-sm text-gray-600 mt-1">Use the filters to isolate patterns by a specific Phase or Strategic Focus Level (e.g., 'Cultural Pivots').</p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <h3 className="font-semibold text-gray-700">3. Dive into the Details</h3>
                        <p className="text-sm text-gray-600 mt-1">Click on any pattern card below to reveal a detailed analysis of AI's impact and our recommendations for managers.</p>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* What is Wardley Doctrine Section */}
            <div>
                <h3 className="text-xl font-bold text-gray-800">First time here? What is Wardley Doctrine?</h3>
                <div id="doctrine-info" className="mt-4">
                    <div className="prose prose-indigo max-w-none text-gray-600">
                        <p>
                            Wardley Doctrine, developed by Simon Wardley, is a framework for strategic thinking. It's built on the idea that everything a business does—from activities and practices to data and knowledge—is a "component" that evolves over time through predictable stages:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Genesis:</strong> The brand new, the novel, the uncertain. High risk, high potential.</li>
                            <li><strong>Custom-Built:</strong> Unique solutions created for a specific context. Still rare and poorly understood.</li>
                            <li><strong>Product (+Rental):</strong> Standardized, commercially available products. The market is growing.</li>
                            <li><strong>Commodity (+Utility):</strong> Highly standardized, widely available, and treated as a utility (like electricity).</li>
                        </ul>
                        <p>
                            By mapping these components on a chart (a "Wardley Map"), organizations can gain high situational awareness. The **Four Phases** used in this explorer represent a practical application of the doctrine, guiding an organization from correcting internal mistakes ("Stop Self Harm") to achieving continuous, adaptive strategy ("Continuously Evolving").
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
