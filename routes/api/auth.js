const express = require("express");

const ctrl = require('../../controllers/auth');

const {ctrlWrapper} = require('../../helpers');

const {validateBody, authenticate, upload} = require('../../middlewares');

const { single } = require("../../middlewares/upload");

const {schemas} = require("../../models/user")


const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));


// signin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));


router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))




module.exports = router;
