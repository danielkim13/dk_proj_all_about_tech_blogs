const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: ["id", "title", "post_body", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username", "github"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "user_id", "post_id", "created_at"],
          include: {
            model: User,
            attributes: ["username", "github"],
          },
        },
      ],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    // console.log(posts);

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/post/:id", async (req, res) => {
  const dbGetData = await Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "created_at", "post_body"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "github"],
        },
      },
      {
        model: User,
        attributes: ["username", "github"],
      },
    ],
  });
  if (!dbGetData) {
    res.status(404).json({ message: "No post found with this id" });
    return;
  }

  const singlePost = dbGetData.get({ plain: true });
  res
    .render("/single-post", {
      singlePost,
      loggedIn: true,
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
