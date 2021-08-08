import express from 'express';
import userController from '../../controllers/userController.js';
import wikiController from '../../controllers/wikiController.js';
import { errors } from '../../constants/errorMessages.js';
import axios from 'axios';
import { assertExpressionStatement } from '@babel/types';

const unAuthV2Router = express.Router();
unAuthV2Router.post('/', (req, res) => {
  res.status(200).send({ success: true, message: 'hello' });
});

unAuthV2Router.post('/register', async (req, res) => {
  try {
    const result = await userController.registerUser(req.body);
    return res.status(200).send({ success: true, user: result });
  } catch (err) {
    return res.status(400).send({
      success: false,
      err: err.message || errors.GENERIC_ERROR,
    });
  }
});

unAuthV2Router.get('/phraseDetails', async (req, res) => {
  try {
    const { phrase } = req.query;
    const response = await axios.get(`${process.env.WIKI_URL}?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=${phrase}`);
    const result = await wikiController.insertWikiRecord(response.data);
    if (result)
      res.status(201).send(response.data);
    else
      res.status(500);
  } catch (err) {
    return res.status(400).send({
      success: false,
      err: err.message || errors.GENERIC_ERROR,
    });
  }
});

export default unAuthV2Router;
