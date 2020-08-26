class Circle extends Element {
    constructor(id, speed, color, width, height, top, left, radius) {
        super(id, speed, color, width, height, top, left)
        this.radius = radius
    }

    draw(){
        $(`#container`).append(`<div id="${this.id}" class="${this.getShape()} element" style="width: ${this.width}px; height: ${this.height}px; border-radius: ${this.radius}%; top: ${this.top}px; left: ${this.left}px; background: ${this.color};"}></div>`)
        super.draw()
    }

    getShape(){
        return `circle`
    }
}
