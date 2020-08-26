class Square extends Element {
    constructor(id, speed, color, width, height, top, left) {
        super(id, speed, color, width, height, top, left)
    }

    draw(){
        $(`#container`).append(`<div id="${this.id}" class="${this.getShape()} element" style="width: ${this.width}px; height: ${this.height}px; top: ${this.top}px; left: ${this.left}px; background: ${this.color};"}></div>`)
        super.draw()
    }

    getShape(){
        return `square`
    }
}