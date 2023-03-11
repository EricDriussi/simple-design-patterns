import { AndroidPhone, ApplePhone, LightningToMicroUsbAdapter } from "./implementation";

function chargeAndroidPhone(phone: AndroidPhone) {
	phone.useMicroUsb();
}

const pixel = new AndroidPhone();
chargeAndroidPhone(pixel);

const iphone = new ApplePhone();
// chargeAndroidPhone(iphone); Doesn't work
chargeAndroidPhone(new LightningToMicroUsbAdapter(iphone)); // Let's you charge your iphone
