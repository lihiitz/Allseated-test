class Triangle extends Element{
    constructor(id, speed, color, width, height, top, left, bl, br, bb) {
        super(id, speed, color, width, height, top, left)
        this.bl = bl
        this.br = br
        this.bb = bb
    }

    getCalculatedRight(){
        return (this.bb + this.left)
    }

    draw(){
        $(`#container`).append(`<div id="${this.id}" class="${this.getShape()} element" style="width: ${this.width}px; height: ${this.height}px; top: ${this.top}px; left: ${this.left}px; border-left: ${this.bl}px solid transparent; border-right: ${this.br}px solid transparent; border-bottom: ${this.bb}px solid ${this.color};"}></div>`)
        super.draw()
    }

    getShape(){
        return `triangle`
    }
}