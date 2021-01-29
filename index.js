import express from "express";
const app = express();
let PORT = 4000;

const handleHome = (req, res) => res.send("hi from fuckin ");
const handleProfile = (req, res) => res.send("you are on my profile");
const handleBetween = (req, res, next) => {
  console.log("hi I'm between");
  next();
};
function handleListening() {
  console.log(`You are listening on:http://localhost:${PORT}`);
}
app.use(handleBetween);
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
