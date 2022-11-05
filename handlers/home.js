module.exports = function home(req, res) {
  // console.log(`req.session`, JSON.stringify(req.session, null, 2));
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  res.render("pages/home", { userId: req.session.userId });
};
