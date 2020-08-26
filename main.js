
const elements = [
    new Circle(1, 5, "green", 30, 30, 50, 0, 50),
    new Square(2, 10, "red", 50, 50, 100, 0),
    new Triangle(3, 8, "blue", 0, 0, 200, 0, 50, 50, 100)
]
const controller = new Controller(elements)
controller.run()