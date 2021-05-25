const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const { user } = require("../models");
const db = require("../models");
const User = db.user;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = (req, res, next) => {
  user.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

const isChefDep = (req, res, next) => {
  user.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "chefDeDepartement") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require chefDep Role!",
      });
    });
  });
};

const isChefFil = (req, res, next) => {
  user.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "chefDeFiliere") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require chefFil Role!",
      });
    });
  });
};

const isProf = (req, res, next) => {
  user.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "professeur") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Prof Role!",
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isChefDep: isChefDep,
  isChefFil: isChefFil,
  isProf: isProf,
};
module.exports = authJwt;
