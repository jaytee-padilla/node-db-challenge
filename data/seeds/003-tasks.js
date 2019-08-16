
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "task description 1" , task_completed: false, project_id: 1},
        {task_description: "task description 2" , task_notes: "task note 2", task_completed: true, project_id: 2},
        {task_description: "task description 3" , task_completed: false, project_id: 3}
      ]);
    });
};
