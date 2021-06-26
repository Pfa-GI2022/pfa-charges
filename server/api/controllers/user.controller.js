const models = require("../models/index");
const user = models.user;

exports.allAccess = (req, res) => {
  res.status(200).send("<h1>All access</h1>");
};

exports.profBoard = (req, res) => {
  res.status(200).send("Prof Content.");
};
exports.chefBoard = (req, res) => {
  res.status(200).send("Chef Dep Content.");
};
exports.filBoard = (req, res) => {
  res.status(200).send("Chef Fil Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.getAllUsers = async (req, res) => {
  await user.findAll().then((users) => res.status(200).send(users));
};
