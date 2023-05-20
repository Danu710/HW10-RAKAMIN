import express from "express";
import {
  getMovies,
  getMoviesById,
  createMovies,
  editMovies,
  deleteMovies,
} from "../controller/UserMovies.js";
import {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} from "../controller/UserController.js";
import { loginUser } from "../controller/LoginController.js";
import { uploadMovies } from "../controller/MovieController.js";

const router = express.Router();

router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);
router.post("/movies", createMovies);
router.put("/movies/:id", editMovies);
router.delete("/movies/:id", deleteMovies);

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

router.post("/login", loginUser);
router.use("/uploads", express.static("uploads"));

export default router;
