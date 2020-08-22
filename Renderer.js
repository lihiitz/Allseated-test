class Render{


    renderElement(element){
        $(`#container`).append(`<div class="${element.getShape()} element" ${element.draw()}></div>`)

    }

    removeElement(element){
        $(`.${element.getShape()}`).remove()
    }
}
