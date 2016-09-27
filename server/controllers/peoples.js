const api = require('../data/api');
const filterBy = require('../utils/filter').filterBy;
const paginate = require('../utils/pagination').paginate;

exports.getPeoples = (req, res, next) => {
	const query = req.query.q;
	const size = req.query.size;
	const page = req.query.page;

	let results = api.allPeoples

	if (!query) {
		return res.json(paginate(results, page, size));
	}

	const phoneReg = /(\d{4}\-?\d*)/;
	const ageReg = /\b([1-9]\d{0,2})\b/;
	const nameReg = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\,.']+/ig;

	const phone = query.match(phoneReg)
	const age = query.match(ageReg)
	const name = query.match(nameReg)

	if (phone) {
		results = filterBy(results, 'phone', phone[0])
	}

	if (name) {
		let fullName = name.join(' ');
		results = filterBy(results, 'name', fullName)
	}

	if (age) {
		results = results.filter((people) => {
			let birthYear = new Date(people.birthday).getYear();
      let thisYear = new Date().getYear();
      return (thisYear - birthYear) === parseInt(age[0]);
		});
	}

	return res.json(paginate(results, page, size));
}
