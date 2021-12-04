function Hello(nombre, micallbakc) {
    setTimeout(function () {
        console.log('Hello ' + nombre);
        micallbakc();
    }, 1500);
}

function bye(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Good bye ' + nombre);
        otroCallback();
    }, 1000);
}
console.log('starting async process....');

Hello('Gabriel',function () {
  
});
bye('Gabriel',function(){});



