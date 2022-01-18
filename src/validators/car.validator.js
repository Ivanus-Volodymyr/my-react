import Joi from "joi";

export const carValidator = Joi.object({

    model: Joi.string().regex(new RegExp('^[[a-zA-Zа-яА-ЯіІїЇ]{1,20}$')).required().messages({
        'string.empty': 'Model can not be empty',
        'string.pattern.base': 'Model mast be a string'
    }),
    price: Joi.number().min(1).max(100000).required().messages({
        'number.base': 'Price can not be empty, must be number from 1 to 100000',
        'number.min': 'Min price is 1',
        'number.max': 'Max price is 100000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Year can not be empty, must be a number from 1990 to 2022',
        'number.min': 'Min year is 1990',
        'number.max': 'Max year is 2022'
    })
})