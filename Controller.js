class Controller {
    constructor(elements, renderer) {
        this.elements = elements
        this.renderer = renderer
    }
    run() {

        this.elements.forEach(e => this.renderer.renderElement(e, true))
        $(`button`).on('click', function(){
            elements.forEach(e => {
                let id = setInterval(frame, e.speed)
                function frame() {
                    renderer.removeElement(e)
                    let stop = e.move()
                    renderer.renderElement(e)
                    if (stop){
                        clearInterval(id)
                    }
                }
            })
        
        })

        // $(`button`).on('click', function(){
        //     this.elements.forEach(e => {
        //         let id = setInterval(frame, e.speed)
        //         function frame() {
        //             this.renderer.renderElement(e, false)
        //             let stop = e.move(300)
        //             this.renderer.renderElement(e, true)
        //             if (stop){
        //                 clearInterval(id)
        //             }
        //         }
        //     })
        
        // })
    }

}