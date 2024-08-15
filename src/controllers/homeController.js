const database = require("../config/database");
const {getAlluser,getUserId,patchUserId}=require('../services/CRUDservices')
const getHomepage = async (req, res) => {
  // res.send({listUsers :results});
  let results= await getAlluser();
  res.render("home.ejs", { listUsers: results });
  console.log(results)
};
const getABC = (req, res) => {
  res.send("Check ABC");
}
const getCuongNB = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
    res.render("create.ejs");
  };
  const getUpdatePage = async(req, res) => {
    let id= req.params.id;
    // let firstname = req.body.fname;
    // let lastname = req.body.lname;
    let user= await getUserId(id);
    res.render("update.ejs", { userEdit: user });
  };
  const postCreateUser = async(req, res) => {
    let firstname = req.body.fname;
    let lastname = req.body.lname;
  
    console.log("request body :", req.body.fname);
    console.log("request body :", req.body.lname);
  
    // database.query(`INSERT INTO user (firstname, lastname) VALUES ('${firstname}', '${lastname}');`,
    //         [],
    //         function(err,results){
    //                 if(err) throw err;
    //                 res.send(results);
    //         }
    // )
    const [results, fields] = await database.query(
      `INSERT INTO user (firstname, lastname) VALUES ('${firstname}', '${lastname}')`
    );
    res.redirect("/");

    console.log("check>>>", results);
  };
  const postUpdatePage = async(req, res) => {
    let firstname = req.body.fname;
    let lastname = req.body.lname;
    let id = req.body.Id;
  
    console.log("request body :", req.body.fname);
    console.log("request body :", req.body.lname);
    console.log("request body :",req.body.Id);

   const patchUser= await patchUserId(firstname,lastname,id);
   res.redirect("/");

    console.log("check>>>", patchUser);
  };
  const deleteUser = async(req, res) => {
    let id = req.params.id;

//     console.log("request body11111 :",id);
// const [results, fields] = await database.query(
//       `delete from user where Id='${id}'`
//     );
//     console.log("check>>>", results);
let user= await getUserId(id);
res.render("delete.ejs", { userEdit: user });
  };
  const deleteUserId = async(req, res) => {
    let id = req.body.Id;

    console.log("request body11111 :",id);
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
  deleteUserId
};
