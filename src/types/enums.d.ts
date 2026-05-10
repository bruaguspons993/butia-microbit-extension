declare const enum TurnDirection {
    //% block="izquierda"
    Left = 0,
    //% block="derecha"
    Right = 1,
}

declare const enum RobotAssist {
    //% block="obstacle stop"
    ObstacleStop = 1 << 1,
}

declare const enum ButiaEvent {
    ObstacleNear = 5,
    ObstacleFar = 6,
}
