function getLogin(req, res) {
  if (req.session.userId) {
    return res.redirect("/");
  }

  res.setHeader("Content-Type", "text/HTML");
  res.write(`
        <h1>Login</h1>
        <form method="post" action="/login">
          <input type="text" name="username" placeholder="Username" /> <br>
          <input type="password" name="password" placeholder="Password" /> <br>
          <button type="submit">Login</button>
        </form>
      `);

  res.end();
}

function postLogin(req, res) {
  if (req.body.username !== "admin" || req.body.password !== "admin") {
    return res.send("Invalid username or password");
  }

  req.session.userId = req.body.username;

  res.redirect("/");
}

module.exports = {
  getLogin,
  postLogin,
};
