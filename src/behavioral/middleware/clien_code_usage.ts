import { Pen, InkMiddleware, PenAssembly, TipMiddleware, BarrelMiddleware, SpringMiddleware } from "./implementation";

const inkMiddleware: InkMiddleware = new InkMiddleware();
const tipMiddleware: TipMiddleware = new TipMiddleware();
const barrelMiddleware: BarrelMiddleware = new BarrelMiddleware();
const springMiddleware: SpringMiddleware = new SpringMiddleware();

const penAssemblyLine = new PenAssembly();
penAssemblyLine.use(inkMiddleware);
penAssemblyLine.use(tipMiddleware);
penAssemblyLine.use(barrelMiddleware);
//penAssembly.use(springMiddleware); // add middleware to change pen assembly process

const pen: Pen = new Pen(false, false, false, false);
penAssemblyLine.run(pen);

console.log(pen.hasInk); // true
console.log(pen.hasTip); // true
console.log(pen.hasBarrel); // true
console.log(pen.hasSpring); // false
