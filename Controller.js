class Controller {
    constructor(elements, renderer) {
        this.elements = elements
        this.renderer = renderer
        this.canClickButton = this.elements.length
    }
    run() {

        this.elements.forEach(e => this.renderer.renderElement(e, true))
        $(`button`).on('click', () => {
            if (this.canClickButton === this.elements.length){
                this.canClickButton = 0
                this.elements.forEach(e => {
                    let id = setInterval(() =>{
                        this.renderer.removeElement(e)
                        let stop = e.move()
                        this.renderer.renderElement(e)
                        if (stop){
                            clearInterval(id)
                            this.canClickButton++
                        }
                    }, e.speed)
                })
            }        
        })
    }

}