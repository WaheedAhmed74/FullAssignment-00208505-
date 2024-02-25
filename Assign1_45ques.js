//// Answer No.1
//Install Node.js, TypeScript and VS Code on your computer.
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Process additional options
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar("Toyota", "Camry", "color", "blue", "optionalFeature", "sunroof");
console.log(myCar);
