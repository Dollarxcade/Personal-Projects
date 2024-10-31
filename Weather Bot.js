const express = require("express");
const app = express ()

app.listen(3000, () => {
  console.log("project is running")
})

app.get("/", (req, res) => {
  res.send("Hello World");
})

const Discord = require("discord.js")
const client = new Discord.Client({intent: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
})

client.login(process.env.token)

//Run this node.js
