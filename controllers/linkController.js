const link = require("../models/Link");
const Link = require("../models/Link");
const ejs = require("ejs");
const redirect = async (req, res, next) => {
  let title = req.params.title;
  try {
    let doc = await Link.findOne({ title });
    if (doc) {
      res.redirect(doc.url);
    } else {
      next();
    }
  } catch (err) {
    res.send("Houve algum erro na aplicação! ");
  }
};

const addLink = async (req, res) => {
  let link = new Link(req.body);
  try {
    let doc = await link.save();
    res.send("Link adicionado com sucesso!");
  } catch (err) {
    res.render("index", { err });
  }
};

const allLinks = async (req, res) => {
  try {
    let links = await Link.find({});
    res.render("../templates/all", { links });
  } catch (err) {
    res.send(err);
  }
};

const deleteLink = async (req, res) => {
  let id = req.params.id;
  try {
    res.send(await Link.findByIdAndDelete(id));
  } catch (err) {
    res.send(err);
  }
};

module.exports = { redirect, addLink, allLinks, deleteLink };
