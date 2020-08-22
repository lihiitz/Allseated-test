class Triangle extends Element{
    constructor(speed, color, width, height, top, left, bl, br, bb) {
        super(speed, color, width, height, top, left)
        this.bl = bl
        this.br = br
        this.bb = bb
        this.calculatedRight = this.bb + this.left
    }

    setCalculatedRight(){
        this.calculatedRight = this.bb + this.left
    }

    draw(){
        let style = `style="width: ${this.width}px; height: ${this.height}px; top: ${this.top}px; left: ${this.left}px;
        border-left: ${this.bl}px solid transparent; border-right: ${this.br}px solid transparent; border-bottom: ${this.bb}px solid ${this.color}"`
        return style
    }

    getShape(){
        return `triangle`
    }
}