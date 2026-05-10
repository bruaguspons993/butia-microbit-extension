class DistanceSensor implements IDistanceSensor {
    private _pinTrigger: DigitalPin | AnalogPin;
    private _prevNear: boolean = false;

    constructor(pinTrigger: DigitalPin | AnalogPin) {
        this._pinTrigger = pinTrigger;
    }

    getPin(): number {
        return this._pinTrigger;
    }

    read(): number {
        const adc = pins.analogReadPin(this._pinTrigger as number as AnalogPin);
        return 9462 / (adc - 16);
    }

    poll(): void {
        const near = this.read() <= OBSTACLE_STOP_DISTANCE_CM;
        if (near === this._prevNear) return;
        this._prevNear = near;
        control.raiseEvent(BUTIA_EVENT_SOURCE, near ? ButiaEvent.ObstacleNear : ButiaEvent.ObstacleFar);
    }

    init(): void {}
}
