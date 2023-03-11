import {
	AdvancedTechSupport,
	BasicTechSupport,
	IntermediateTechSupport,
	TechSupportCall,
	Complexity,
	InitTechSupportChain,
	SysAdminTechSupport,
} from "./implementation";

const initChain = new InitTechSupportChain();
const basicSupport = new BasicTechSupport();
const intermediateSupport = new IntermediateTechSupport();
const advancedSupport = new AdvancedTechSupport();
const reallyDifficultIssueSupport = new SysAdminTechSupport();

// Add, remove, reorganize chain links...
initChain
	.setNext(basicSupport)
	.setNext(intermediateSupport)
	.setNext(advancedSupport)
	.setNext(reallyDifficultIssueSupport);

const simpleCall = new TechSupportCall("Peter", "Internet is gone :(", Complexity.LOW);
const complexCall = new TechSupportCall("John", "My computer is threatening me, I'm scared", Complexity.IMPOSSIBLE);

initChain.handle(simpleCall);
initChain.handle(complexCall);
