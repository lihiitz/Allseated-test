class Circle extends Element {
    constructor(speed, color, width, height, top, left, radius) {
        super(speed, color, width, height, top, left)
        this.radius = radius
    }

    draw(){
        let style = `style="width: ${this.width}px; height: ${this.height}px; border-radius: ${this.radius}%; top: ${this.top}px; left: ${this.left}px;
        background: ${this.color};"`
        return style
    }

    getShape(){
        return `circle`
    }
}
