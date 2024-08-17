const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getCuongNB,
  getCreatePage,
  deleteUserId,
  getUpdatePage,
  postUpdatePage,
  deleteUser,
  postCreateUser,
} = require("../controllers/homeController");
const database = require("../config/database");

router.get("/abc/123", getABC);
router.get("/cuongnb", getCuongNB);

//Home
router.get("/", getHomepage);
//create user
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
//update user
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdatePage);
//delete user
router.get("/delete/:id", deleteUser);
router.post("/delete-user", deleteUserId);

module.exports = router;
