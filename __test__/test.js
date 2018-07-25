const utils = require('../utils'); // Trae el archivo que se debe testear

describe('Kebab function', () =>{
    test ('kebab',()=>{
        expect(true).toBe(true);
        // expect espera que lo que esta entre parentesis sea igual a toBe y sus parentesis
    })

});

describe('countWords function', () => {
    test('countWords', () => {
        expect(()=>{
            utils.countWords()
        }).toThrow(); // Aqui se puede agregar .not.toThrow(); Que significa negacion
    })

});

describe('cafee',()=>{
    test('should',async ()=>{ // async define funcion asincrona
        const result = await utils.getCoffee() // await es espereme aqui el resultado
        expect(result).toBe("☕️");
    })
})

describe('Name of the group', ()=>{
    test('should', () =>{
        const result = utils.getID() // se nombra una variable que liga nuestro archivo js y el nombre de la funcion
        expect(result).toEqual({
            id: expect.any(String), // any asi que se compare con algo similar a un string
            create_at: expect.any(Date)
        })
    })
});

jest.spyOn(utils, 'getID') // spyOn sirve para espiar la funcion

describe('Name of the group', ()=>{
    test('should', () =>{
        const result = utils.getID() // Espiamos que se use la funcion.
    expect(utils.getID).toBeCalled()
    })
});

const funcion = jest.fn() // mocks sirven para volver falsa la funcion, por eso falla el test VOLVIO FAKE LA FUNCION

describe('Name of the group', ()=>{
    test('should', () =>{
        const result = make (funcion) // Espiamos que se use la funcion.
    expect(funcion).toBeCalled()
    })
});

// jest.mock('../utils') // Crea version falsa de esa ruta FAKE

// describe('Name of the group', ()=>{
//     test('should', () =>{
//         utils
//     expect(true).toBe(true)
//     })
// });
