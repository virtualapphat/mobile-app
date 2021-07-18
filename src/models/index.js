class Hat {
	constructor({ id, name = '', minAmount = 0, isPrivate = false, fixedAmount, totalAmount = 0 }) {
		this.id = id;
		this.name = name;
		this.minAmount = minAmount;
		this.isPrivate = isPrivate;
		this.fixedAmount = fixedAmount;
		this.totalAmount = totalAmount;
	}

	getFields() {
		return [
			{ name: 'id' },
			{ name: 'name' },
			{ name: 'minAmount' },
			{ name: 'isPrivate' },
			{ name: 'fixedAmount' },
			{ name: 'totalAmount' },
		];
	}
	getFieldsCreateForm() {
		const fields = [
			{ name: 'name' },
			{ name: 'minAmount' },
			{ name: 'isPrivate' },
			{ name: 'fixedAmount' },
		];
		return this.getFields().filter(field => field.find(f => f.name === field.name));
	}
}

export { Hat };
