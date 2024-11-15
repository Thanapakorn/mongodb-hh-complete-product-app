import { json, Router } from "express";
import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";
const productRouter = Router();

productRouter.get("/", async (req, res) => {
  try {
    const colect = db.collection("products");
    const allProduct = await colect.find({}).toArray();
    return res.json({ data: allProduct });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

productRouter.get("/:id", (req, res) => {});

productRouter.post("/", async (req, res) => {
  try {
    const colect = db.collection("products");
    const newProduct = { ...req.body };
    const addNewProduct = await colect.insertOne(newProduct);
    return res.json({
      message: "Product has been created successfully",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

productRouter.put("/:id", async (req, res) => {
  try {
    const colect = db.collection("products");
    const id = new ObjectId(req.params.id);
    const upDateProducts = { ...req.body };
    await colect.updateOne({ _id: id }, { $set: upDateProducts });
    return res.json({
      message: "Product has been updated successfully",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    const colect = db.collection("products");
    const id = new ObjectId(req.params.id);
    await colect.deleteOne({ _id: id });
    return res.json({
      message: "Product has been deleted successfully",
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
});

export default productRouter;
