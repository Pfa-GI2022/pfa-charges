const models = require("../models/index.js");
const Charge = models.charge;

const getCharge = async (req, res, next) => {
  try {
    console.log("Fetching Charge");
    const charge = await Charge.findOne({ where: { profID: req.params.id } });
    console.log("Charge Fetched successfully");
    return res.status(200).send(charge);
  } catch (error) {
    console.log("Fetching Charge Failed");
    return res.status(500).send(error.message);
  }
};

const createCharge = async (req, res, next) => {
  try {
    const { chargeTotal } = req.body;
    console.log("Creating Charge");
    const charge = await Charge.create({
      chargeTotal: chargeTotal,
      profID: req.params.id,
    });
    console.log("Charge Created successfully");
    return res.status(200).json({ charge });
  } catch (error) {
    console.log("Charge Creation Failed");
    return res.status(500).send(error.message);
  }
};

const updateCharge = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("Updating Charge");
    const [updated] = await Charge.update(req.body, {
      where: { profID: id },
    });
    if (updated) {
      const updatedCharge = await Charge.findOne({ where: { profID: id } });
      console.log("Charge Updated Successfully");
      return res.status(200).json({ charge: updatedCharge });
    }
    throw new Error("Charge not found");
  } catch (error) {
    console.log("Updating Charge Failed");
    return res.status(500).send(error.message);
  }
};

const deleteCharge = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting Charge");
    const deleted = await Charge.destroy({
      where: { profID: id },
    });
    if (deleted) {
      console.log("Charge deleted");
      return res.status(204).send("Charge deleted");
    }
    throw new Error("Charge not found");
  } catch (error) {
    console.log("Deleting Charge Failed");
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getCharge,
  createCharge,
  updateCharge,
  deleteCharge,
};
