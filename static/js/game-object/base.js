let GAME_OBJECTS = [];

class GameObject {
    constructor() {
        GAME_OBJECTS.push(this);

        this.timeDelta = 0;
        this.hasCallStart = false;
    }

    start() {

    }

    update() {

    }

    destroy() {
        for (let i in GAME_OBJECTS) {
            if (GAME_OBJECTS[i] === this) {
                GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let lastTimeStamp;

let GAME_OBJECTS_FRAME = (TimeStamp) => {
    for (let obj of GAME_OBJECTS) {
        if (!obj.hasCallStart) {
            obj.start();
            obj.hasCallStart = true;
        }
        else {
            obj.timeDelta = TimeStamp - lastTimeStamp;
            obj.update();
        }

        // console.log(TimeStamp);
    }

    lastTimeStamp = TimeStamp;
    requestAnimationFrame(GAME_OBJECTS_FRAME);
}

requestAnimationFrame(GAME_OBJECTS_FRAME);

export {
    GameObject
}