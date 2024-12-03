const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn } = require("../middleware.js")
const reviewController = require("../controllers/review.js")

// Post Route Review 
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));

// Delete Review Route 
router.delete("/:reviewId",
    wrapAsync(reviewController.destroyReview));

module.exports = router;