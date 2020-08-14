function ValidationEngineer(name, id, email, github) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }
  
    if (typeof email !== "email" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

  if (typeof github !== "string" || !github.trim().length) {
  throw new Error("Expected parameter 'github' to be a non-empty string");
    }
  
  
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;

}

  module.exports = ValidationEngineer