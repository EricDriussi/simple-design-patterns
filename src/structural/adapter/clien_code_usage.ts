import { AndroidPhone, ApplePhone, LightningToUsbCAdapter } from "./pattern_implementation";

function chargeAndroidPhone(phone: AndroidPhone) {
	phone.useUsbC();
}

const pixel = new AndroidPhone();
chargeAndroidPhone(pixel);

const iphone = new ApplePhone();
chargeAndroidPhone(iphone); // Doesn't work
chargeAndroidPhone(new LightningToUsbCAdapter(iphone)); // Let's you charge your iphone
