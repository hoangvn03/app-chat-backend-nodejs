import * as services from '../services/index.js';
import { badRequest, interalServerError } from '../middlewares/handle_errors.js';
import {email , password} from '../helpper/joi_schema.js'
import joi from 'joi';
export const register = async (req, res) => {
  try {
    const {error} = joi.object({email, password}).validate(req.body);
    if (error) return badRequest(error.details[0]?.message, res);
    const response = await services.register(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return interalServerError(res)
  }
};
export const login = async (req, res) => {
  try {
    const {error} = joi.object({email, password}).validate(req.body);
    if (error) return badRequest(error.details[0]?.message, res);
    const response = await services.login(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return interalServerError(res)
  }
};