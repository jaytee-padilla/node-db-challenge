
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Lorem ipsum 1', project_description: "dolor sit amet 1", project_completed: false},
        {project_name: 'Lorem ipsum 2', project_description: "dolor sit amet 2", project_completed: false},
        {project_name: 'Lorem ipsum 3', project_description: "dolor sit amet 3", project_completed: true}
      ]);
    });
};
