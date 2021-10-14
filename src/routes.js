const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const AdminController = require('./controllers/AdminController');
const ProductController = require('./controllers/ProductController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/user', UserController.index);
routes.post('/user', celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    repeat_password: Joi.ref('password'),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'dev', 'me', 'co'] } }).required(),
    city: Joi.string().required(),
  })
}),UserController.create);

routes.get('/admin', AdminController.index);
routes.post('/admin', celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    repeat_password: Joi.ref('password'),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'dev', 'me', 'co'] } }).required(),
    city: Joi.string().required(),
    city: Joi.string().required(),
    position: Joi.string().required(),
  })
}),AdminController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.get('/Product', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), ProductController.index)

routes.post('/product', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    price: Joi.number().required(),
    qtd: Joi.number().required(),
    description: Joi.string().required(),
  })
}), ProductController.create)

routes.delete('/product/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), ProductController.delete);

module.exports = routes;