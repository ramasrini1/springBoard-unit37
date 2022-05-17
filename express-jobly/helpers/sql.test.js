//const { BadRequestError } = require("../expressError");
const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
  test("Generate Partial SQL", function () {
    
    const { setCols, values }  = sqlForPartialUpdate(
        { "firstName": "Rama", "lastName": "Srinivas" },
        { 
          firstName: "first_name",
          lastName: "my_last_name",
          isAdmin: "is_admin",
        } );
    
    expect(values).toEqual(
      ["Rama", "Srinivas"]
    );

    expect(setCols).toEqual(
      "\"first_name\"=$1, \"my_last_name\"=$2"
    );

  });
})