import { GameObject } from '/static/js/game-object/base.js'
import { Controller } from '/static/js/controller/base.js'

export class GameMap extends GameObject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);

        this.root.$kof.append($(`<div class="kof-head">
        <div class="kof-head-hp-0"><div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-head-hp-1"><div></div></div>
        </div>`));

        this.time_left = 60000;
        this.$timer = this.root.$kof.find(`.kof-head-timer`);


    }

    start() {

    }

    update() {
        this.time_left -= this.timeDelta;
        if (this.time_left < 0) {
            this.time_left = 0;
        }

        this.$timer.text(parseInt(this.time_left / 1000));

        this.render();
    }

    render() {
        //this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //this.ctx.fillStyle = 'red';
        this.ctx.clearRect(0, 0, this.$canvas.width(), this.$canvas.height());
    }
}