
const elements = [
    new Circle(5, "green", 30, 30, 50, 0, 50),
    new Square(10, "red", 50, 50, 100, 0),
    new Triangle(8, "blue", 0, 0, 200, 0, 50, 50, 100)
]
const renderer = new Render()
const controller = new Controller(elements, renderer)
controller.run()