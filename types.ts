
export type Phase = 
    | "Phase I - Stop Self Harm"
    | "Phase II - Becoming More Context Aware"
    | "Phase III - Better for Less"
    | "Phase IV - Continuously Evolving";

export type Score = 3 | 4 | 5;

export interface DoctrinePrinciple {
    phase: Phase;
    principle: string;
    description: string;
    score: Score;
    explanation: string;
    recommendation: string;
}