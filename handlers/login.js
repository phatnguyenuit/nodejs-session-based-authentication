function getLogin(req, res) {
  if (req.session.userId) {
    return res.redirect("/");
  }

  res.render("pages/login");
}

function postLogin(req, res) {
  if (req.body.userName !== "admin" || req.body.password !== "admin") {
    return res.render("pages/login", {
      errorMessage: "Invalid username or password",
    });
  }

  // Login success
  req.session.userId = req.body.userName;
  res.redirect("/");
}

module.exports = {
  getLogin,
  postLogin,
};
