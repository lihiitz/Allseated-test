class Element {
    constructor(speed, color, width, height, top, left) {
        this.speed = speed
        this.color = color
        this.width = width
        this.height = height
        this.top = top
        this.left = left
        this.leftToRight = true
        this.calculatedRight = this.width + this.left
    }

    draw() {

    }

    getShape() {

    }

    setCalculatedRight(){
        this.calculatedRight = this.width + this.left
    }

    move() {
        if (this.leftToRight) {
            if (this.calculatedRight < $(window).width()) {
                this.left++
                this.setCalculatedRight()
            } else {
                this.leftToRight = false
            }
        } else {
            if (this.left === 0) {
                return true
            } else {
                this.left--
                this.setCalculatedRight()
            }
        }
        return false
    }
}