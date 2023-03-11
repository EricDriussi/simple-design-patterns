export class Pen {
	constructor(public hasInk: boolean, public hasTip: boolean, public hasSpring: boolean, public hasBarrel: boolean) {}
}

type Next = () => void;
interface Middleware<T> {
	run(context: T, next: Next): void;
}

export class InkMiddleware implements Middleware<Pen> {
	run(pen: Pen, next: Next): void {
		pen.hasInk = true;
		return next();
	}
}

export class TipMiddleware implements Middleware<Pen> {
	run(pen: Pen, next: Next): void {
		pen.hasTip = true;
		return next();
	}
}

export class BarrelMiddleware implements Middleware<Pen> {
	run(pen: Pen, next: Next): void {
		pen.hasBarrel = true;
		return next();
	}
}

export class SpringMiddleware implements Middleware<Pen> {
	run(pen: Pen, next: Next): void {
		pen.hasSpring = true;
		return next();
	}
}

interface MiddlewareHandler<T> {
	middlewares: Array<Middleware<T>>;
	use(...middlewares: Array<Middleware<T>>): void;
	run(context: T): void;
}

export class PenAssembly implements MiddlewareHandler<Pen> {
	middlewares: Array<Middleware<Pen>>;

	constructor() {
		this.middlewares = [];
	}

	use(...middlewares: Array<Middleware<Pen>>): void {
		this.middlewares.push(...middlewares);
	}

	run(context: Pen): void {
		this.recursePenMiddlewares(context, this.middlewares);
	}

	private recursePenMiddlewares(pen: Pen, middlewares: Array<Middleware<Pen>>): void {
		if (!middlewares.length) return;

		const currentMiddleware = middlewares[0];
		return currentMiddleware.run(pen, () => {
			this.recursePenMiddlewares(pen, middlewares.slice(1));
		});
	}
}
