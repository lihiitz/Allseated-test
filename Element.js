class Element {
    constructor(id, speed, color, width, height, top, left, effect) {
        this.speed = speed
        this.color = color
        this.width = width
        this.height = height
        this.top = top
        this.left = left
        this.leftToRight = true
        this.effect = effect
        this.id = id
        this.touchWall = 0
        this.reverse = false
        this.div = null
    }

    draw() {
        this.div = document.getElementById(this.id)
    }

    getShape() {

    }

    getCalculatedRight(){
        return (this.width + this.left)
    }

    changeDir(){
        if (this.reverse){
            this.touchWall--
        }else{
            this.touchWall++
        }
        this.div.innerHTML = this.touchWall
        this.leftToRight = !this.leftToRight
    }

    doMove(pos){
        this.left += pos
        this.div.style.left = this.left + "px";
    }

    move() {
        if (this.leftToRight) {
            if (this.getCalculatedRight() < $(window).width()) {
                this.doMove(1)
            } else {
                this.changeDir()
            }
        } else {
            if (this.left === 0) {
                this.changeDir()
            } else {
                this.doMove(-1)
            }
        }
    }
    

}