import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-Zа-яА-ЯіІїЇ]{1-20}$')).required(),
    price: Joi.number().min(1).max(100000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})