
exports.up = function(knex) {
	return knex.schema
	// ONE project can have MANY tasks

	// ONE task belongs to only ONE project

	// ONE project can have MANY resources

	// ONE resource can be used in MANY project
};

exports.down = function(knex) {
  return knex.schema
};
