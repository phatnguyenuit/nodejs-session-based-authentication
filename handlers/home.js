module.exports = function home(req, res) {
  console.log(`req.session`, JSON.stringify(req.session, null, 2));
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  res.setHeader("Content-Type", "text/HTML");
  res.write(`
      <h1>Welcome back ${req.session.userId}</h1>
      <a href="/logout">Logout</a>
    `);

  res.end();
};
