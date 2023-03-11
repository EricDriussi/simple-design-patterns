export class AndroidPhone {
	useMicroUsb(): void {
		console.log("Using micro usb port...");
	}
}

export class ApplePhone {
	useLightning(): void {
		console.log("Using lightning port...");
	}
}

export class LightningToMicroUsbAdapter {
	constructor(readonly applePhone: ApplePhone) {}
	useMicroUsb(): void {
		// This is kinda risky and usually only makes sense when
		// useMicroUsb() and useLightning() do the same thing
		// but have different names
		this.applePhone.useLightning();
	}
}
