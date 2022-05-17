const { BadRequestError } = require("../expressError");

// THIS NEEDS SOME GREAT DOCUMENTATION.
/* This function constructs the sql statements from the dataToUpdate(req from the body)
 * ex: dataToUpdate is object with key and values
 * dataToUpdate = {"firstName": "Rama", "lastName": "Srinivas"}
 * jsToSql = { 
          firstName: "first_name",
          lastName: "last_name",
          isAdmin: "is_admin",
        }
  * The db stores firstName as first_name, lastName as last_name and isAdmin as
    isAdmin so for firstName, lastName and isAdmin use the values (first_name, last_name, 
    is_admin from jsToSql in the query string.

    We first construct an array cols,
    ex cols =  ['"first_name"=$1', '"last_name"=$2']
    Use join function to convert this array to string. So setCols is a string with 
    sql statements and values are their corresponding values of $1 and $2 etc
    ex setCols = " "first_name"=$1, "last_name"=$2 "
    values = ["Rama", "Srinivas"]
  */

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) => 
    `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  // const cols1 = keys.map((colName, idx) => 
  //   {
  //     console.log(colName);
  //     console.log(idx);
  //     return `"${jsToSql[colName] || colName}"=$${idx + 1}` 
  //   }
  // );

  // Convert to string using join
  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}


module.exports = { sqlForPartialUpdate };
