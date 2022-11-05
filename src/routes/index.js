const { Router } = require("express");

const home = require("../handlers/home");
const { getLogin, postLogin } = require("../handlers/login");
const logout = require("../handlers/logout");

const router = Router({ caseSensitive: true });

router.get("/", home);
router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/logout", logout);

module.exports = router;
