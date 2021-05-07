const express = require("express");
const app = express();

//
app.use(express.json())

//importing the routes
const departementRoutes = require("./api/routes/departements");
const professeurRoutes = require("./api/routes/professeurs");
const modulesRoutes = require("./api/routes/modules");
const matieresRoutes = require("./api/routes/matieres");
const filieresRoutes = require("./api/routes/filieres");
const activitesRoutes = require("./api/routes/activitepedagogiques");
const groupesRoutes = require("./api/routes/groupe");

app.use("/departements", departementRoutes);
app.use("/professeurs", professeurRoutes);
app.use("/modules", modulesRoutes);
app.use("/matieres", matieresRoutes);
app.use("/filieres", filieresRoutes);
app.use("/activitepedagogiques", activitesRoutes);
app.use("/groupes", groupesRoutes);

//not found routes
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
