const model = require('../model/model');

const math = {
	multiplicar : (request, response) => {
		let num1 = request.params.n1;
		let num2 = request.params.n2;
		let resultado = num1 * num2;

		model.multiplicar(num1, num2, resultado)
		.then(result => {
			response.status(200).send({'resultado' : resultado})
		})
		.catch(err => {
			response.status(500).send({'error' : err});
		})
	}
}

module.exports = math;