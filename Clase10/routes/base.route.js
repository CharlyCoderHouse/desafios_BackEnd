import { Router } from "express";

const router = Router();
const productos = [];

// Renderizo EJS
/* router.get("/", (req, res) => {
  res.render("productForm.ejs");
});

router.post('/product', (req, res) => {
  const { title, price, thumbnail } = req.body;

  productos.push({ title, price, thumbnail });

  res.redirect("/");
});

router.get('/product', (req, res) => {
  res.render("products.ejs", { productos });
}); */


// RENDERIZO HBS
/* router.get("/", (req, res) => {
  res.render("products.hbs");
});

router.post('/product', (req, res) => {
  const { title, price, thumbnail } = req.body;

  productos.push({ title, price, thumbnail });

  res.redirect("/");
});

router.get('/product', (req, res) => {
  res.render("viewProducts.hbs", { productos });
}); */

// RENDERIZO PUG
router.get("/", (req, res) => {
  res.render("products.pug");
});

router.post('/product', (req, res) => {
  const { title, price, thumbnail } = req.body;

  productos.push({ title, price, thumbnail });

  res.redirect("/");
});

router.get('/product', (req, res) => {
  res.render("viewProducts.pug", { productos });
});

export default router;