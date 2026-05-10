//% color="#e67e22" icon="" weight=80
//% groups="['Eventos']"
namespace ButiaEvents {

    //% blockId="butia_evt_obstacle_near"
    //% block="Al detectar obstáculo cerca"
    //% weight=90
    //% group="Eventos"
    export function onObstacleNear(handler: () => void): void {
        control.onEvent(BUTIA_EVENT_SOURCE, ButiaEvent.ObstacleNear, handler);
    }

    //% blockId="butia_evt_obstacle_far"
    //% block="Al no detectar obstáculo"
    //% weight=89
    //% group="Eventos"
    export function onObstacleFar(handler: () => void): void {
        control.onEvent(BUTIA_EVENT_SOURCE, ButiaEvent.ObstacleFar, handler);
    }

    //% blockId="butia_evt_button_a"
    //% block="Al presionar botón A"
    //% weight=80
    //% group="Eventos"
    export function onButtonAPressed(handler: () => void): void {
        input.onButtonPressed(Button.A, handler);
    }

    //% blockId="butia_evt_button_b"
    //% block="Al presionar botón B"
    //% weight=75
    //% group="Eventos"
    export function onButtonBPressed(handler: () => void): void {
        input.onButtonPressed(Button.B, handler);
    }

    //% blockId="butia_evt_shake"
    //% block="Al agitar el micro:bit"
    //% weight=70
    //% group="Eventos"
    export function onShake(handler: () => void): void {
        input.onGesture(Gesture.Shake, handler);
    }
}
