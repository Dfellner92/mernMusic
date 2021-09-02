import Joi from "joi"; // validation package
import Song from "./songModel";

export default {
  async create(req, res) {
    try {
      console.log(req.body);
      const schema = Joi.object().keys({
        title: Joi.string().required(),
        url: Joi.string().required(),
        rating: Joi.number().integer().min(0).max(5).optional(),
      });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const song = await Song.create(value);
      return res.json(song);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },
  async findAll(req, res) {
    try {
      const songs = await Song.find();
      return res.json(songs);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};