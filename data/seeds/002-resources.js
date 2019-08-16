
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "resource 1"},
        {resource_name: "resource 2", resource_description: "resource description 2"},
        {resource_name: "resource 3", resource_description: "resource description 3"}
      ]);
    });
};
