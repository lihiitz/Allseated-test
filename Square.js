class Square extends Element {
    constructor(speed, color, width, height, top, left) {
        super(speed, color, width, height, top, left)
    }

    draw(){
        let style = `style="width: ${this.width}px; height: ${this.height}px; top: ${this.top}px; left: ${this.left}px;
        background: ${this.color};"`
        return style
    }

    getShape(){
        return `square`
    }
}