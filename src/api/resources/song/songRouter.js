import express from 'express';
import songController from './songController';

export const songRouter = express.Router();
songRouter.route('/').post(songController.create).get(songController.findAll);