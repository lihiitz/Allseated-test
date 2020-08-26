class Render{


    renderElement(element){
        $(`#container`).append(`<div id="${this.id}" class="${element.getShape()} element" ${element.draw()}></div>`)
    }

    removeElement(element){
        $(`.${element.getShape()}`).remove()
    }
}
