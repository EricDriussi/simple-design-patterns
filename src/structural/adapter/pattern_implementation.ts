export class AndroidPhone {
	useUsbC(): void {
		console.log("Using usb-c port...");
	}
}

export class ApplePhone {
	useLightning(): void {
		console.log("Using lightning port...");
	}
}

export class LightningToUsbCAdapter {
	constructor(readonly applePhone: ApplePhone) {}
	useUsbC(): void {
		// This is kinda risky and usually only makes sense when
		// useMicroUsb() and useLightning() do the same thing
		// but have different names
		this.applePhone.useLightning();
	}
}
