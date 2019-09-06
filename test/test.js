const assert = require('assert');
const controllerApp = require('../controller/controller');
const modelApp = require('../model/model');

describe('Endpoint multiplicar', () => {
	describe('Modulo multiplicar', () => {
		it('Debe tener un metodo multiplicar', () => {
			assert.equal(typeof controllerApp, 'object');
			assert.equal(typeof controllerApp.multiplicar, 'function');
		});

		it('La respuesta de la multiplicacion debe ser un objeto', () => {
			modelApp.multiplicar(5, 5, 25)
			.then(resp => {
				assert.equal(typeof resp, 'object');
			})
			.catch(err => {
				console.log(err);
			})
			
		})
	});
})