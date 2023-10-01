module.exports = {
	mongooseObjectArrToOjbectArr: function (mongooseObjectArr) {
		return mongooseObjectArr.map((mongooseObject) => mongooseObject.toObject());
	},

	mongooseObjectToOjbect: function (mongooseObject) {
		return mongooseObject ? mongooseObject.toObject() : mongooseObject;
	},
};
