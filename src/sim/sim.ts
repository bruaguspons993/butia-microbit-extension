//% shim=TD_NOOP
function registerSim(): void {
    const simDist = new SimDistanceSensor();
    const r = Butia.RobotDriver.getCurrentRobot() as unknown as Butia.ButiaRobot;
    r.setSimDrivers(simDist);
    control.simmessages.onReceived(SIM_CHANNEL, (buf: Buffer) => {
        const msg = <ButiaSensorsMessage>JSON.parse(buf.toString());
        if (msg && msg.type === SIM_MSG_SENSORS) {
            simDist.setDistance(msg.distance);
        }
    });
}

//% shim=TD_NOOP
function sendSim(): void {
    const serial = control.deviceSerialNumber();
    const r = Butia.RobotDriver.getCurrentRobot() as unknown as Butia.RobotBase;
    const msg = <ButiaSimStateMessage>{
        type: SIM_MSG_STATE,
        id: RUN_ID,
        deviceId: serial,
        motorLeft: r.motorLeft(),
        motorRight: r.motorRight(),
        lineUsed: false,
        sonarUsed: true,
    };
    control.simmessages.send(SIM_CHANNEL, Buffer.fromUTF8(JSON.stringify(msg)), false);
}

//% shim=TD_NOOP
function startSendSimLoop(): void {
    control.inBackground(() => {
        while (true) {
            sendSim();
            basic.pause(POLL_INTERVAL_MS);
        }
    });
}
