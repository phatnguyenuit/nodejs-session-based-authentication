const path = require("path");
const express = require("express");
const sessions = require("express-session");

const routes = require("./routes");

const app = express();

app.use(
  sessions({
    secret: "some-secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
    resave: true,
    saveUninitialized: false,
    // TODO: Replace with another session store
    // This is just for development perspective
    // NOT for production purpose
    // ONLY store sessionID on client side,
    // session data is stored in the server side
    store: new sessions.MemoryStore(),
  })
);

// Parse application/json
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

// set views directory
app.set("views", path.resolve(__dirname, "views"));

app.use("/", routes);

app.listen(3000, () => {
  console.log(`Server Running at port 3000`);
});
