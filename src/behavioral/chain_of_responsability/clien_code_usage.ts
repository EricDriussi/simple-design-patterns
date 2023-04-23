import {
	AdvancedTechSupport,
	BasicTechSupport,
	IntermediateTechSupport,
	TechSupportCall,
	Complexity,
	InitTechSupportChain,
	SysAdminTechSupport,
} from "./pattern_implementation";

const chain = new InitTechSupportChain();
const basicSupport = new BasicTechSupport();
const intermediateSupport = new IntermediateTechSupport();
const advancedSupport = new AdvancedTechSupport();
const reallyDifficultIssueSupport = new SysAdminTechSupport();

// Add, remove, reorganize chain links...
chain.setNext(basicSupport).setNext(intermediateSupport).setNext(advancedSupport).setNext(reallyDifficultIssueSupport);

const simpleCall = new TechSupportCall("Peter", "Internet is gone :(", Complexity.LOW);
const complexCall = new TechSupportCall("John", "My computer is threatening me, I'm scared", Complexity.IMPOSSIBLE);

chain.handle(simpleCall);
chain.handle(complexCall);
