module.exports = function logout(req, res) {
  // Destroy current session
  req.session.destroy();
  res.redirect("/");
};
