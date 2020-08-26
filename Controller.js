class Controller {
    constructor(elements) {
        this.elements = elements
        this.canClickButton = this.elements.length
    }

    moveElement(e) {
        let id = setInterval(() => {
            // let stop = e.move()
            e.move()
            // if (stop) {
            //     clearInterval(id)
            //     this.canClickButton++
            // }
        }, e.speed)
    }

    run() {
        this.elements.forEach(e => e.draw());

        $("#move").on('click', () => {
            // if (this.canClickButton === this.elements.length) {
            //     this.canClickButton = 0
                this.elements.forEach(e => {
                    this.moveElement(e)
                })
           // }
        })

        $("#reverse").on('click', () => {
            this.elements.forEach(e => {
                e.reverse = !e.reverse
                e.leftToRight = !e.leftToRight
            })
            // $("#reverse").html("Right To Left")
        })
    }
}