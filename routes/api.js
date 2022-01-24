const PatientController = require("../contollers/PatientController");
const express = require("express");

const router = express.Router();


router.get("/",(req,res)=>{
    res.send("hello world");
});

router.get("/patient",PatientController.index);
router.post("/patient",PatientController.store);
router.put("/patient/:id",PatientController.update);
router.delete("/patient/:id",PatientController.destroy);

module.exports = router;
