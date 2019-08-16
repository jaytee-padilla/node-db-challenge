
exports.up = function(knex) {
	return knex.schema
	// ONE project can have MANY tasks
		.createTable('projects', tbl => {
			tbl.increments('project_id');

			tbl
				.string('project_name', 128)
				.notNullable()
				.unique()
			tbl
				.string('project_description', 255)
			tbl
				.boolean('project_completed').notNullable().defaultTo(false)
		})

	// ONE project can have MANY resources
		.createTable('resources', tbl => {
			tbl.increments('resource_id');

			tbl
				.string('resource_name', 128)
					.notNullable()
					.unique()
			tbl
				.string('resource_description', 255)
		})

	// ONE task belongs to only ONE project
		.createTable('tasks', tbl => {
			tbl.increments('task_id');

			tbl
				.string('task_description', 255)
				.notNullable()
			tbl
				.text('task_notes')
			tbl
				.boolean('task_completed').notNullable().defaultTo(false)

			// Foreign Key
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE')
		})

	// ONE resource can be used in MANY project
};

exports.down = function(knex) {
  return knex.schema
};
