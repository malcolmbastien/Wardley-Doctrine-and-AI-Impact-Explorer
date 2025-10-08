import { DoctrinePrinciple, Phase, Score } from './types';

export const doctrineData: DoctrinePrinciple[] = [
    // Data extracted directly from the uploaded CSV file
    // Phase I - Stop Self Harm
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Know your users",
        "description": "Understand the needs of all stakeholders, including customers, shareholders, regulators, and staff.",
        "score": 3,
        "explanation": "AI eliminates the cost barrier to feature building, forcing management to focus intensely on which features to build. The risk is implementing the wrong user need at hyper-speed.",
        "recommendation": "Empower Validation: Focus investment and staff capacity (freed up from coding) into deeper qualitative research and expansive A/B testing, prioritizing strategic validation before execution."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Challenge assumptions",
        "description": "Actively question existing beliefs, practices, and underlying assumptions.",
        "score": 5,
        "explanation": "The cost of building and testing a strategic hypothesis (technical or business) drops to near zero, making failure of imagination (not challenging assumptions) the new bottleneck to strategic growth.",
        "recommendation": "Establish a Hypothesis Culture: Encourage a process where major investments are framed as hypotheses, empowering teams to rapidly build and test multiple distinct, AI-generated solution paths."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Use appropriate methods",
        "description": "Apply suitable tools and techniques (e.g., agile, lean, Six Sigma) that fit the specific context.",
        "score": 5,
        "explanation": "AI makes the execution of all methods (Agile, TDD, Waterfall) hyper-efficient. The strategic challenge is ensuring teams select the right method for the component's context, as the wrong method quickly creates massive, well-coded waste.",
        "recommendation": "Re-evaluate Component Stage: Continuously map and reassess where components sit on the evolution curve. Treat AI as a climatic force accelerating component evolution and adapt methodologies accordingly."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Use a systematic mechanism of learning",
        "description": "Implement processes for continuous organizational learning, often with a bias towards data and evidence.",
        "score": 4,
        "explanation": "AI collapses the OODA loop (Observe-Orient-Decide-Act) by providing instant, continuous feedback from code generation. The strategic challenge is preventing the organization from being outrun by continuous, automated deployment.",
        "recommendation": "Integrate Ethical Pauses: Introduce human review checkpoints in the continuous delivery pipeline to ensure strategic and ethical alignment are maintained despite hyper-speed execution."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Focus on user needs",
        "description": "Prioritize understanding and addressing the fundamental requirements and problems of the users.",
        "score": 3,
        "explanation": "With development speed decoupled from cost, management must become extremely disciplined about value delivery vs. feature output. The risk is drowning the customer in irrelevant, quickly-built software.",
        "recommendation": "Prioritize Outcome Metrics: Shift success metrics from feature output to a direct link with measurable, validated user outcomes, mitigating the risk of infinite, low-value feature sprawl."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Focus on high situational awareness",
        "description": "Maintain a clear understanding of the current environment and all factors being considered.",
        "score": 4,
        "explanation": "AI removes technical opacity (the \"black box\" of legacy code), enabling management to have perfect, instant insight into the health and complexity of the entire codebase, forcing attention onto strategic/market awareness.",
        "recommendation": "Enable Code Visibility: Leverage AI's documentation and analysis capabilities to maintain a live, up-to-date component catalog that allows managers to instantly map technology dependencies to business value."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Remove bias and duplication",
        "description": "Eliminate redundant efforts, subjective prejudices, and unnecessary complexity.",
        "score": 5,
        "explanation": "The managerial opportunity is to achieve instant, massive-scale standardization and cost reduction by using AI to enforce a single, optimal \"write once\" pattern across the entire organization.",
        "recommendation": "Incentivize Standardization: Promote a process that uses AI to actively consolidate and retire redundant services and codebases, capitalizing on the AI's ability to homogenize technical practice instantly."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Use a common language",
        "description": "Establish a shared vocabulary and understanding to improve communication and collaboration.",
        "score": 3,
        "explanation": "AI ensures technical consistency, but the strategic value is ensuring the business domain language (product definitions, core concepts) is perfectly and instantly reflected in the AI-generated code.",
        "recommendation": "Integrate Domain Models: Position the organization's official business glossary and domain model as the critical input for AI training, ensuring the codebase is a perfect, living reflection of the business strategy."
        },
        {
        "phase": "Phase I - Stop Self Harm",
        "principle": "Think small (as in know the details)",
        "description": "Understand the granular aspects, specific details, and intricacies of operations.",
        "score": 3,
        "explanation": "Management is now accountable for the details because AI removes the previous excuse of \"complexity\" or \"legacy code.\" Strategic decisions must be informed by instant, perfect granular detail.",
        "recommendation": "Upskill Architects & Reviewers: Train senior staff on advanced prompt engineering and the critical security/quality auditing of AI-generated code. Small teams should be empowered with the AI to handle a larger scope of work."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Be transparent",
        "description": "Maintain openness in operations, processes, and decision-making, with a bias towards sharing information.",
        "score": 4,
        "explanation": "AI inherently forces transparency by logging every prompt and code choice. The strategic challenge is using this granular data to achieve radical transparency in why decisions were made (human + AI logic).",
        "recommendation": "Establish a Decision Audit Trail: Implement logging for AI prompts and human code acceptance/rejection, creating a continuous, auditable record of the organizational decision-making process for governance and compliance."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Focus on the outcome, not a contract",
        "description": "Prioritize achieving valuable results and impacts over strict adherence to formal agreements or contractual terms.",
        "score": 5,
        "explanation": "AI can fulfill technical contract specifics (specs) instantly. Management's strategic value shifts entirely to defining and validating the business outcome (value delivered), making contract adherence a low-value activity.",
        "recommendation": "Tie Funding to Value Realization: Design budgetary and project approval mechanisms that are released based on achieving measurable business outcomes (customer retention, revenue increase), not on code completion milestones."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Think aptitude and attitude",
        "description": "Emphasize the skills, capabilities, and mindset of individuals and teams.",
        "score": 3,
        "explanation": "Technical aptitude (coding skill) is heavily augmented by AI. Strategic focus shifts to attitude: curiosity, problem-framing, and critical thinking (i.e., prompt engineering aptitude).",
        "recommendation": "Incentivize Prompt Mastery & Curiosity: Establish career paths and recognition programs that reward staff for their ability to frame complex problems for AI and critically evaluate the strategic implications of generated solutions."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Strategy is iterative, not linear",
        "description": "Recognize that strategy evolves through rapid, reactive cycles and continuous adaptation, rather than a fixed, predetermined path.",
        "score": 5,
        "explanation": "The development cycle is so fast that strategy must be constantly and instantly adjusted based on market feedback from rapid deployment. Linear planning is now guaranteed failure.",
        "recommendation": "Formalize Real-Time Feedback Loops: Implement a governance structure that can review and pivot strategic direction monthly or weekly, ensuring that strategy and execution (AI-driven) remain tightly coupled."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Move fast",
        "description": "Prioritize timely execution; an imperfect plan executed today is often better than a perfect plan delayed until tomorrow.",
        "score": 4,
        "explanation": "AI makes moving fast the default, not an aspiration. The strategic danger is building the wrong thing quickly. The doctrine shifts from speed being a choice to speed being a necessity.",
        "recommendation": "Define Reversible Changes: Empower teams with autonomy for high-velocity deployment, provided all changes are small, isolated, and easily reversible (built-in \"undo\" capability) to mitigate the cost of speed."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Use appropriate tools",
        "description": "Select and apply tools and techniques that are suitable for the specific context, such as mapping or financial models.",
        "score": 3,
        "explanation": "AI eliminates the technical friction of learning new tools. The choice of tool becomes a purely strategic choice regarding vendor lock-in, data sovereignty, and security, decoupled from effort/training cost.",
        "recommendation": "Develop a Strategic Tooling Framework: Shift from technical to strategic evaluation. With AI lowering the adoption cost of any tool, your decision framework must prioritize non-technical factors like vendor lock-in, data sovereignty, security posture, and total cost of ownership. The key question moves from ‘Can we use this tool?’ to ‘Should we commit to this tool?’"
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Think small (as in teams)",
        "description": "Advocate for smaller, more focused, and agile teams to enhance responsiveness and efficiency.",
        "score": 4,
        "explanation": "AI dramatically increases the output of a single developer, making ultra-small teams (or individuals) capable of managing massive scope. The challenge is coordination across many small units.",
        "recommendation": "Enable Autonomous Cells: Design organizational governance to support numerous small, autonomous, cross-functional cells empowered to manage full component lifecycles using AI, focusing management energy on clear communication between cells."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "A bias towards action",
        "description": "Favor learning by doing, experimenting, and playing the game rather than prolonged planning.",
        "score": 5,
        "explanation": "With AI, the cost of 'Action' is minimized. The strategic focus must shift from overcoming inertia to intelligently managing the risk associated with constant, autonomous action.",
        "recommendation": "Promote a High-Velocity Culture: Actively reward teams for small, fast, reversible production changes, demonstrating that speed of iteration is the organization's ultimate competitive advantage, while simultaneously building strong guardrails."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Be pragmatic",
        "description": "Focus on what works effectively to achieve goals, regardless of ideological purity or specific methods.",
        "score": 3,
        "explanation": "AI delivers pragmatic solutions instantly. The managerial challenge is ensuring that this immediate pragmatism does not obscure the need for long-term strategic elegance or architecture.",
        "recommendation": "Institute Architectural Review Gates: Introduce lightweight review steps focused on long-term maintainability and strategic alignment, preventing the AI from generating a proliferation of short-sighted, pragmatic fixes."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Manage Inertia",
        "description": "Actively address resistance to change stemming from existing practices, political capital, or past investments.",
        "score": 5,
        "explanation": "The primary source of organizational inertia shifts from technical debt/legacy code (which AI can resolve) to political capital and vested interests in old processes/structures that AI renders obsolete.",
        "recommendation": "Fund Process Re-engineering: Dedicate budget and senior leadership attention to re-engineering or dismantling managerial, HR, and approval processes that no longer align with AI-accelerated development speed."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Use standards where appropriate",
        "description": "Apply established standards selectively where they add genuine value and simplify processes.",
        "score": 3,
        "explanation": "AI is the ultimate standardizer. The managerial challenge is defining the minimal, necessary standards (security, governance, naming conventions) that the AI must enforce across all codebases.",
        "recommendation": "Curate the Standard Library: Invest in curating an organizational \"AI Standard Library\" (approved code patterns, security checks, and components) that the AI is explicitly trained to use and enforce during generation."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Distribute power and decision making",
        "description": "Empower individuals and teams to make decisions closer to the work, fostering autonomy and responsiveness.",
        "score": 4,
        "explanation": "Velocity demands that decision-making happen at the point of action (the prompt). Managers must decentralize power to the prompt engineers and the teams closest to the AI execution.",
        "recommendation": "Delegate Prompt Authority: Empower small, cross-functional teams with full ownership and decision rights over the components they build, trusting their proximate knowledge and AI-driven speed over centralized review."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Think Fast, Inexpensive, Restrained, and Elegant (FIRE)",
        "description": "Design solutions that are quick to implement, cost-effective, constrained in scope, and refined in their execution.",
        "score": 4,
        "explanation": "AI inherently delivers Fast, Inexpensive, and Restrained code. The managerial focus shifts entirely to ensuring the generated solution is Elegant (high quality, maintainable, strategically fit).",
        "recommendation": "Elevate Elegance as a Core Metric: Incorporate code quality, test coverage, and documentation generated by the AI as key performance indicators for teams, focusing the human effort on quality assurance of the AI's output."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Effectiveness over efficiency",
        "description": "Prioritize achieving desired results and solving the right problems over merely optimizing resource usage.",
        "score": 5,
        "explanation": "AI handles execution efficiency. Management's entire focus must shift to effectiveness, ensuring the team is applying the AI's enormous speed to the problems that deliver the highest strategic value.",
        "recommendation": "Measure Strategic Impact: Implement OKRs or KPIs that track the strategic value (e.g., market share, risk reduction) of AI-accelerated projects, ensuring efficiency gains are directed toward maximum business impact."
        },
        {
        "phase": "Phase II - Becoming More Context Aware",
        "principle": "Manage failure",
        "description": "Learn from and constructively address setbacks and mistakes as opportunities for improvement.",
        "score": 4,
        "explanation": "Failure becomes constant, small, and fast. The strategic necessity is to shift the organization's tolerance for failure from \"punishment\" to \"cheap, critical learning.\"",
        "recommendation": "Institutionalize Post-Mortem Automation: Encourage the use of AI to automatically analyze small, fast failures, extract structured lessons, and integrate those learnings back into the next development cycle (closing the loop)."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Provide purpose, mastery & autonomy",
        "description": "Empower individuals by giving them a clear reason for their work, opportunities to excel, and control over how they achieve their goals.",
        "score": 5,
        "explanation": "AI provides near-total autonomy over code execution. Management must now strategically define the high-level purpose and redefine mastery away from coding to strategic thinking and advanced prompt engineering.",
        "recommendation": "Redefine Mastery: Establish a clear value proposition for human developers where mastery is measured by business outcome impact, complex problem-framing, and critical auditing of AI-generated solutions."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Do better with less",
        "description": "Strive for improved outcomes and greater value while utilizing fewer resources.",
        "score": 4,
        "explanation": "AI is the ultimate tool for \"Better with Less,\" delivering immense value (code) with minimal direct human resource cost. The managerial focus shifts from resource reduction to maximizing strategic leverage of the AI.",
        "recommendation": "Maximize AI-to-Human Leverage Ratio: Implement project structures that intentionally use few human resources to manage large, complex, AI-generated components, freeing up talent for high-impact innovation areas."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Be the owner",
        "description": "Take responsibility and accountability for actions, decisions, and their resulting outcomes.",
        "score": 4,
        "explanation": "When failure occurs, accountability must be clearly assigned, even if the primary generator of the code was an AI. The prompt engineer or the reviewing manager is the final owner, not the tool.",
        "recommendation": "Clarify Accountability Protocols: Document and enforce clear protocols stating that human prompt engineers and code reviewers hold ultimate accountability for security, compliance, and business outcomes of AI-generated code."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Set exceptional standards",
        "description": "Aim for excellence that goes beyond mere adequacy, recognizing that \"great is just not good enough.\"",
        "score": 5,
        "explanation": "AI makes \"good enough\" (adequate code) the default baseline. Management must raise standards to exceptional (optimal, secure, elegant, highly documented) to differentiate strategic output.",
        "recommendation": "Establish a \"Zero-Waste\" Goal: Train the AI on highly-curated, optimal code patterns and implement automated quality gates that reject code lacking exceptional standards for security, test coverage, and performance."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Optimise Flow",
        "description": "Identify and remove bottlenecks in processes and workflows to improve the smooth and continuous progression of work.",
        "score": 4,
        "explanation": "Coding is no longer the bottleneck; the constraint shifts to human tasks: strategic prioritization, governance, and organizational politics. Management must aggressively simplify these human gates.",
        "recommendation": "Automate Governance: Use AI to automatically generate compliance documentation, security checks, and impact analyses, turning mandatory governance tasks from sequential bottlenecks into parallel, automated steps."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Strategy is complex",
        "description": "Acknowledge the inherent uncertainty, interconnectedness, and non-linear dynamics in strategic planning and execution.",
        "score": 5,
        "explanation": "AI generates solutions quickly, but the managerial challenge of connecting these solutions to a complex, evolving market landscape remains a human task of synthesis and judgment.",
        "recommendation": "Invest in Strategic Synthesis Roles: Prioritize recruiting and training staff who excel at synthesizing information from fragmented, high-speed execution data into coherent, actionable strategic insights for leadership."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Commit to the direction, be adaptive along the path",
        "description": "Maintain a clear overall objective and strategic intent while remaining flexible and responsive in how to achieve it.",
        "score": 5,
        "explanation": "AI-accelerated execution creates the ultimate adaptive path. Management must provide an ironclad Commitment to Direction (the North Star) to prevent high-velocity teams from wandering into irrelevant but easy-to-build solutions.",
        "recommendation": "Reinforce Mission Over Task: Communicate the strategic mission (the \"why\") relentlessly and clearly. Use high-level strategy as the primary filter for team-level AI prompt design and decision-making."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "A bias towards the new",
        "description": "Foster curiosity, encourage experimentation, and embrace appropriate risks with novel approaches and innovations.",
        "score": 5,
        "explanation": "AI removes the risk of technical failure from experimentation, making the bias towards the new economically sensible. Management must actively foster the cultural willingness to embrace non-traditional approaches.",
        "recommendation": "Create Innovation Sprints: Design specific, low-stakes innovation sprints where the sole purpose is to test novel business concepts using 100% AI-generated code, with all associated failure costs being non-punitive and celebrated for learning."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Be humble",
        "description": "Practice active listening, selflessness, and demonstrate fortitude in the face of challenges.",
        "score": 3,
        "explanation": "AI challenges the organizational hierarchy based on \"who knows the code best,\" requiring managers to be humble enough to trust AI's analysis over long-held expert opinions.",
        "recommendation": "Promote New Skills: Re-skill senior staff to shift their value from technical code mastery to strategic pattern recognition and high-level AI prompt engineering for business problems."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Think Big",
        "description": "Inspire others with a broad vision, consider large-scale implications, and provide clear strategic direction.",
        "score": 4,
        "explanation": "AI accelerates the ability to build visionary concepts (e.g., entirely new business models) that were previously technically infeasible. The strategic vision must now be exponentially more ambitious.",
        "recommendation": "Reset Strategic Ambition: Re-evaluate and elevate the strategic vision to account for the near-infinite technical capacity provided by AI, focusing on market domination or disruptive innovation."
        },
        {
        "phase": "Phase III - Better for Less",
        "principle": "Seek the best",
        "description": "Continuously pursue optimal solutions, practices, and talent, striving for improvement in all areas.",
        "score": 4,
        "explanation": "The competitive advantage shifts from having the best coders to having the best AI training data and the best prompt engineers who can elicit the \"best\" strategic solutions.",
        "recommendation": "Secure Training Data as IP: Treat the internal, curated codebase used to train the organization's private AI as the most critical Intellectual Property, actively securing and constantly enhancing this data asset."
        },
        {
        "phase": "Phase IV - Continuously Evolving",
        "principle": "Exploit the landscape",
        "description": "Leverage the current environment, its characteristics, and competitive dynamics for strategic advantage.",
        "score": 5,
        "explanation": "The competitive landscape now moves at AI speed. The strategic advantage shifts from anticipating change to the organizational capacity to instantly exploit new technical opportunities (e.g., a new cloud service or API).",
        "recommendation": "Establish 'Opportunity Sprints': Dedicate small, empowered teams to rapidly prototype and deploy solutions using new APIs, open-source models, or platform features the moment they are announced. Their goal is not long-term viability but immediate learning and capturing first-mover advantages."
        },
        {
        "phase": "Phase IV - Continuously Evolving",
        "principle": "Design for constant evolution",
        "description": "Build systems, organizations, and processes with continuous adaptation and change as a fundamental design principle.",
        "score": 5,
        "explanation": "AI ensures constant technical evolution (code changes). Management must design the organizational structure and compliance framework (the human processes) to be equally liquid and adaptable to prevent human inertia from throttling the AI's speed.",
        "recommendation": "Implement 'Liquid Governance': Replace rigid annual budgeting and review cycles with dynamic, rolling forecasts and automated compliance checks. Structure teams around short-term missions, not permanent functions, allowing the organization to reconfigure itself as quickly as the AI refactors code."
        },
        {
        "phase": "Phase IV - Continuously Evolving",
        "principle": "There is no core",
        "description": "Recognize that all elements, even seemingly central ones, are transient and subject to change; nothing is permanently fixed.",
        "score": 5,
        "explanation": "AI can rapidly rewrite or replace any \"core\" component overnight. The strategic danger is clinging to systems or architectures because of historical investment or belief, rather than their current functional value.",
        "recommendation": "Component Sunset Protocol: Institute a 'Sunset Protocol' for all major systems, automatically triggering replacement review after a set time or performance threshold. Treat all components as transient and disposable."
        },
        {
        "phase": "Phase IV - Continuously Evolving",
        "principle": "Listen to your ecosystems",
        "description": "Actively monitor and learn from external environments, customers, partners, and communities, treating them as sources of future insights and sensing engines.",
        "score": 4,
        "explanation": "When technical capacity is unlimited, the critical input is not how to build but what to build. Ecosystem listening becomes the primary strategic function, feeding high-value prompts to the AI engine.",
        "recommendation": "AI Sensing Engines: Deploy AI/LLMs to continuously monitor external public data (e.g., social media, news, forums) to proactively identify emergent weak signals and unmet user needs before they become market trends."
        },
        {
        "phase": "Phase IV - Continuously Evolving",
        "principle": "There is no one culture",
        "description": "Understand that different stages of evolution (e.g., explorers, villagers, town planners) require diverse cultural approaches and mindsets.",
        "score": 4,
        "explanation": "AI blurs the lines between explorer, villager, and town planner. Management must intentionally maintain cultural pockets that foster exploration alongside those focused on governance (town planning).",
        "recommendation": "Cultural Portfolio Management: Define and explicitly manage a 'portfolio of cultures' within the organization, using AI to assign personnel to environments that match their cultural archetype (e.g., placing explorers in high-risk Genesis projects)."
        }
];
export const scoreNames: Record<number, string> = {
    5: "Cultural & Strategic Pivot",
    4: "Organizational Re-engineering",
    3: "Technical & Process Optimization",
    2: "Attitude & Aptitude Adjustment", 
    1: "Foundation"
};

export const scoreShortNames: Record<number, string> = {
    5: "Strategic Pivot", 
    4: "Org. Re-engineering", 
    3: "Tech/Process Opt.",
    2: "Aptitude Adjustment",
    1: "Foundation"
};

export const scoreColorsClasses: Record<number, any> = {
    5: { 
        blockBg: 'bg-rose-50', blockText: 'text-rose-700', blockBorder: 'border-rose-300', 
        tagBg: 'bg-rose-100', tagText: 'text-rose-800', 
        tableBg: 'score-5-bg', tableText: 'text-rose-700'
    },
    4: { 
        blockBg: 'bg-stone-50', blockText: 'text-stone-700', blockBorder: 'border-stone-300', 
        tagBg: 'bg-stone-200', tagText: 'text-stone-800', 
        tableBg: 'score-4-bg', tableText: 'text-stone-700'
    },
    3: { 
        blockBg: 'bg-emerald-50', blockText: 'text-emerald-700', blockBorder: 'border-emerald-300', 
        tagBg: 'bg-emerald-100', tagText: 'text-emerald-800', 
        tableBg: 'score-3-bg', tableText: 'text-emerald-700'
    },
    2: { 
        blockBg: 'bg-amber-50', blockText: 'text-amber-700', blockBorder: 'border-amber-300', 
        tagBg: 'bg-amber-100', tagText: 'text-amber-800', 
        tableBg: 'bg-amber-100', tableText: 'text-amber-700'
    },
    1: { 
        blockBg: 'bg-blue-50', blockText: 'text-blue-700', blockBorder: 'border-blue-300', 
        tagBg: 'bg-blue-100', tagText: 'text-blue-800', 
        tableBg: 'bg-blue-100', tableText: 'text-blue-700'
    },
};

export const phaseShortNames: Record<string, string> = {
    "Phase I - Stop Self Harm": "Phase I: Stop Self Harm",
    "Phase II - Becoming More Context Aware": "Phase II: Context Aware",
    "Phase III - Better for Less": "Phase III: Better for Less",
    "Phase IV - Continuously Evolving": "Phase IV: Evolving"
};

export const PHASES: Phase[] = [
    "Phase I - Stop Self Harm",
    "Phase II - Becoming More Context Aware",
    "Phase III - Better for Less",
    "Phase IV - Continuously Evolving"
];

export const SCORES_TO_TRACK: Score[] = [3, 4, 5];

export const principleIcons: Record<string, string> = {
    "Know your users": "👥",
    "Challenge assumptions": "🤔",
    "Use appropriate methods": "🛠️",
    "Use a systematic mechanism of learning": "🔄",
    "Focus on user needs": "🎯",
    "Focus on high situational awareness": "🗺️",
    "Remove bias and duplication": "✂️",
    "Use a common language": "🗣️",
    "Think small (as in know the details)": "🔍",
    "Be transparent": "👁️",
    "Focus on the outcome, not a contract": "🏆",
    "Think aptitude and attitude": "🧠",
    "Strategy is iterative, not linear": "🔁",
    "Move fast": "⚡️",
    "Use appropriate tools": "🔧",
    "Think small (as in teams)": "🧑‍🤝‍🧑",
    "A bias towards action": "🚀",
    "Be pragmatic": "👍",
    "Manage Inertia": "⚓",
    "Use standards where appropriate": "📜",
    "Distribute power and decision making": "🤝",
    "Think Fast, Inexpensive, Restrained, and Elegant (FIRE)": "🔥",
    "Effectiveness over efficiency": "✅",
    "Manage failure": "🛡️",
    "Provide purpose, mastery & autonomy": "🧭",
    "Do better with less": "🌱",
    "Be the owner": "🔑",
    "Set exceptional standards": "🌟",
    "Optimise Flow": "🌊",
    "Strategy is complex": "🕸️",
    "Commit to the direction, be adaptive along the path": "🗺️",
    "A bias towards the new": "💡",
    "Be humble": "🙏",
    "Think Big": "🔭",
    "Seek the best": "🥇",
    "Exploit the landscape": "⛰️",
    "Design for constant evolution": "🧬",
    "There is no core": "💥",
    "Listen to your ecosystems": "📡",
    "There is no one culture": "🌍",
};