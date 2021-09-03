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
      const { page, perPage } = req.query;
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
      };
      const songs = await Song.paginate({}, options);
      return res.json(songs);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  async findOne(req, res) {
    try {
      const song = await Song.findById(req.params.id);
      if (!song) {
        return res.status(404).json({ err: "could not find song" });
      }
      return res.json(song);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const song = await Song.findOneAndDelete({ _id: req.params.id });
      if (!song) {
        return res.status(404).json({ err: "could not find song" });
      }
      return res.json(song);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      console.log(req.body);
      const schema = Joi.object().keys({
        title: Joi.string().optional(),
        url: Joi.string().optional(),
        rating: Joi.number().integer().min(0).max(5).optional(),
      });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const song = await Song.findOneAndUpdate({ _id: req.params.id }, value, {
        new: true,
      });
      if (!song) {
        return res.status(404).json({ err: "could not find song" });
      }
      return res.json(song);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
