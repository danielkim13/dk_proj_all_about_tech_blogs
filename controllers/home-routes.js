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

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
