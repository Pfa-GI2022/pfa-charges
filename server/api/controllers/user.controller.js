exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
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
