import { Movie } from "../models/UserModel.js";
import db from "../config/Database.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Direktori tujuan untuk menyimpan gambar yang diunggah
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "." + file.originalname.split(".").pop());
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."), false);
  }
};

const upload = multer({ storage, fileFilter });

export const getMovies = async (req, res) => {
  try {
    await db.authenticate();
    const response = await Movie.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMoviesById = async (req, res) => {
  try {
    const response = await Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// export const createMovies = async (req, res) => {
//   const { id, title, genres, year, photo } = req.body;
//   try {
//     const user = await Movie.create({ id, title, genres, year, photo });
//     res.json(user);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const createMovies = (req, res) => {
  upload.single("photo")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const { id, title, genres, year } = req.body;
    const photoPath = req.file.path;

    try {
      // Simpan data ke dalam database menggunakan Sequelize
      const movie = await Movie.create({
        id,
        title,
        genres,
        year,
        photo: photoPath,
      });

      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ error: "Failed to upload and save data." });
    }
  });
};

export const editMovies = async (req, res) => {
  const { title, genres, year } = req.body;
  const { id } = req.params;
  try {
    const movies = await Movie.findOne({ where: { id } });

    if (movies) {
      movies.title = title;
      movies.genres = genres;
      movies.year = year;
      movies.save();
    } else {
      return response.status(404).json({ message: "Movies not found" });
    }

    res.json({ status: 200 });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Movie.findOne({ where: { id } });

    if (user) {
      await user.destroy();
      return res
        .status(200)
        .json({ message: `User dengan id ${id} berhasil dihapus` });
    } else {
      return res.status(404).json({ message: `User tidak ditemukan` });
    }
  } catch (error) {
    console.log(error.message);
  }
};
