const CSVToJSON = require('csvtojson');
const path = require('path');

exports.getAllData = async (request, response, next) => {
	try {
		const data = await CSVToJSON().fromFile(
			path.join(__dirname, '../models/data.csv')
		);
		data.forEach((d) => {
			delete d.field1;
			if (d.pre_orderboard === '') {
				d.pre_ordered = 'false';
				d.waiting_time =
					parseInt(d.total_time) -
					(parseInt(d.orderboard) + parseInt(d.pickup));
			} else {
				d.pre_ordered = 'true';
				d.waiting_time =
					parseInt(d.total_time) -
					(parseInt(d.orderboard) +
						parseInt(d.pickup) +
						parseInt(d.pre_orderboard));
			}
		});
		response.status(200).send(data);
	} catch (err) {
		console.log(err);
	}
};
