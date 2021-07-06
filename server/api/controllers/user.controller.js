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
  await user.findAll({ include: models.role }).then((users) => {
    res.status(200).send(users);
  });
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Updating User");
    const [updated] = await models.user_roles.update(req.body, {
      where: { userId: id },
    });
    if (updated) {
      const updatedUser = await user.findOne({ where: { id: id } });
      console.log("User Updated Successfully");
      return res.status(200).json({ user: updatedUser });
    }
    throw new Error("User not found");
  } catch (error) {
    console.log("Updating User Failed");
    return res.status(500).send(error.message);
  }
};
