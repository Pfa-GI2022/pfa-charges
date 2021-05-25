const authJwt = require("../middlewares/authJwt");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/prof",
    [authJwt.verifyToken, authJwt.isProf],
    controller.profBoard
  );
  app.get(
    "/api/test/chefDep",
    [authJwt.verifyToken, authJwt.isChefDep],
    controller.chefBoard
  );
  app.get(
    "/api/test/chefFil",
    [authJwt.verifyToken, authJwt.isChefFil],
    controller.filBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
