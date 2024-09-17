import express from "express";

const AdminRoute = express.Router();

AdminRoute.post("/check", (req, res) => {
  let { name } = req.body;
  try {
    if (name == "Admin") {
        res.cookie("verified", true).json({ successful: 200 ,verified: true });
      } else {
        res.cookie("verified", false).json({ successful: 200,verified: false });
      }
  } catch (error) {
     console.log(error)
    res.cookie("verified", false).json({ successful: 200,"verified": false });
  }

});

export default AdminRoute;
