const database = require("../config/database");

const getAlluser = async () => {
  const [results, fields] = await database.query(`select * from user `);
  return results;
};

const getUserId = async (list) => {
  const [results, fields] = await database.query(
    `select * from user where Id=${list} `
  );
  let user = results && results.length > 0 ? results[0] : {};
  console.log("check results:", user);

  return user;
};

const createUser = async (fname, lname,city) => {
  const [results, fields] = await database.query(
    `INSERT INTO user (firstname, lastname, city) VALUES ('${fname}', '${lname}','${city}')`
  );
  console.log("check results:", results);

  return results;
};

const patchUserId = async (fname, lname,city, id) => {
  const [results, fields] = await database.query(
    `update user set firstname ='${fname}', lastname='${lname}',city='${city}' where Id='${id}'`
  );
  let user = results && results.length > 0 ? results[0] : {};
  console.log("check results:", user);

  return user;
};
module.exports = {
  getUserId,
  getAlluser,
  createUser,
  patchUserId,
};
