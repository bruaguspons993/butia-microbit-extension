const SIM_CHANNEL = "butia";
const SIM_MSG_STATE = "state";
const SIM_MSG_SENSORS = "sensors";
const RUN_ID: string = Math.random() + "";

interface ButiaSimStateMessage {
    type: "state"
    id: string
    deviceId: number
    motorLeft: number
    motorRight: number
}

interface ButiaSensorsMessage {
    type: "sensors"
    id: string
    deviceId: number
    distance: number
}
