const database = require("../config/database");
const {
  getAlluser,
  getUserId,
  createUser,
  patchUserId,
} = require("../services/CRUDservices");
const getHomepage = async (req, res) => {
  // res.send({listUsers :results});
  let results = await getAlluser();
  res.render("home.ejs", { listUsers: results });
  console.log(results);
};
const getABC = (req, res) => {
  res.send("Check ABC");
};
const getCuongNB = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  let id = req.params.id;
  let user = await getUserId(id);
  res.render("update.ejs", { userEdit: user });
};
const postCreateUser = async (req, res) => {
  let firstname = req.body.fname;
  let lastname = req.body.lname;
  let city = req.body.city;
  console.log("request body :", req.body.fname);
  console.log("request body :", req.body.lname);
  console.log("request body :", req.body.city);

  const create = await createUser(firstname,lastname,city);
  res.redirect("/");

  console.log("check>>>", create);
};
const postUpdatePage = async (req, res) => {
  let firstname = req.body.fname;
  let lastname = req.body.lname;
  let city = req.body.city;

  let id = req.body.Id;

  console.log("request body :", req.body.fname);
  console.log("request body :", req.body.lname);
  console.log("request body :", req.body.city);
  console.log("request body :", req.body.Id);

  const patchUser = await patchUserId(firstname, lastname,city, id);
  res.redirect("/");

  console.log("check>>>", patchUser);
};
const deleteUser = async (req, res) => {
  let id = req.params.id;

  let user = await getUserId(id);
  res.render("delete.ejs", { userEdit: user });
};
const deleteUserId = async (req, res) => {
  let id = req.body.Id;

  console.log("request body :", id);
  const [results, fields] = await database.query(
    `delete from user where Id='${id}'`
  );
  console.log("check>>>", results);

  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  getCuongNB,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdatePage,
  deleteUser,
  deleteUserId,
};
