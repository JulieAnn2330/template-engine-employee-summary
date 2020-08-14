function ValidationManager(name, id, email, officeNumber) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }
  
    if (typeof email !== "email" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
    throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
    }

  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;

}

  module.exports = ValidationManager