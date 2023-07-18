// importar la función sum del archivo app.js
//const { sum } = require('./app.js');

// comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
   // let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
   // expect(total).toBe(23);
//});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One Dollar should be 0.009382329945269741 Yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(0.009382329945269741); //1 dollar son 1.2/127.9 yens, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One Yen should be 159,875 Pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPund } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPund(1)).toBe(159.875); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
