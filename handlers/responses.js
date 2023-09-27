module.exports = {
	BadRequest: {
		error: 'Bad Request',
		status: 400,
	},

	Unauthorized: {
		error: 'Unauthorised',
		status: 401,
	},

	Forbidden: {
		error: 'Forbidden',
		status: 403,
	},

	NotFound: {
		error: 'Not Found',
		status: 404,
	},
    UnprocessableEntity: {
		status: 422,
		error: 'Unprocessable Entity',
	},

	InternalServerError: {
		error: 'Internal Server Error',
		status: 500,
	},

	Success: {
		error: '',
		status: 200,
	},

	onlyAdmin: extend({}, this.Forbidden, {
		message: 'Only admins are allowed to do this!',
	}),

	NoPermesssion: extend({}, {
		error: 'Forbidden',
		status: 403,
		message: 'You do not have permission to consume this resource!',
	}),

	invalidId: extend({}, this.BadRequest, {
		message: 'Invalid Id parameter',
	}),

    addFailure(name) {
		return extend({}, this.BadRequest, {
			message:  `${name} WAS NOT added`,
		});
	},

	deleteFailure(name) {
		return extend({}, this.BadRequest, {
			message:  `${name} WAS NOT deleted`,
		});
	},

	updateFailure(name) {
		return extend({}, this.BadRequest, {
			message:  `${name} WAS NOT updated`,
		});
	},

	addSuccess(name) {
		return extend({}, this.Success, {
			message:  `${name} added successfully`,
		});
	},

	deleteSuccess() {
		return extend({}, this.Success, {
			message:  `${name} deleted successfully`,
		});
	},
    updateSuccess(name) {
		
		return extend({}, this.Success, {
			message: `${name} updated successfully`,
		});
	},

	empty: [],
};
