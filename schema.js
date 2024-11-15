// const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         image: Joi.string().allow("", null),
//         price: Joi.number().required().min(0),
//         country: Joi.string().required(),
//         location: Joi.string().required(),
//     }).required()
// });


// module.exports.reviewSchema = Joi.object({
//     review: Joi.object({
//         rating: Joi.number().required().min(1).max(5),
//         comment: Joi.string().required(),
//     }).required()
// });


const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required().min(3).max(100),
        description: Joi.string().required().min(10).max(1000),
        image: Joi.string().uri().allow("", null),
        price: Joi.number().required().min(0),
        country: Joi.string().pattern(/^[a-zA-Z\s]+$/).required(),
        location: Joi.string().pattern(/^[a-zA-Z\s]+$/).required(),
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5).default(1),
        comment: Joi.string().required().min(5).max(500),
    }).required()
});
