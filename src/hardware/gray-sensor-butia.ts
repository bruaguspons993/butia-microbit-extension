class GraySensor implements IGraySensor {
    private _pinTrigger: DigitalPin | AnalogPin;

    constructor(pinTrigger: DigitalPin | AnalogPin) {
        this._pinTrigger = pinTrigger;
    }

    getPin(): number {
        return this._pinTrigger;
    }

    read(): number {
        const raw = 1023 - pins.analogReadPin(this._pinTrigger);
        const value = (raw / 1023) * 100;
        return Math.round(value * 10) / 10;
    }

    poll(): void {}
    init(): void {}
}
