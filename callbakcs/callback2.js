function Hello(nombre, micallbakc) {
    setTimeout(function () {
        console.log('Hello ' + nombre);
        micallbakc(nombre);
    }, 1000);
}

function bye(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Good bye ' + nombre);
        otroCallback();
    }, 1000);
}
console.log('starting async process....');

Hello('Gabriel',function (nombre) {
    bye(nombre, function () {
        console.log('ending async process....');
    });
});



