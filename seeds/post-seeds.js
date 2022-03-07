const { Post } = require('../models');

const postData = [
    {
        title: "Why MVC is so important",
        post_body: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
        user_id: 1
    },
    {
        title: "Authentication vs. Authorization",
        post_body: "There is a difference between authentication and authorization. Authentication means confirming you own identify, whereas authorization means being allowed access to the system.",
        user_id: 2
    },
    {
        title: "Object-Relational Mapping (ORM)",
        post_body: "I have really loved learning about ORMs. It's really simplified the way I created queries in SQL!",
        user_id: 3
    },
    {
        title: "How to Update Your GitHub Repo in Visual Studio Code",
        post_body: "1. Pre-requirement: install VSC, and Git, 2. Clone GitHub Repository, 3. Commit and Push Changes, 4. Make a Pull Request",
        user_id: 4
    },
    {
        title: "GWU Coding Boot Camp review",
        post_body: "GWU Coding Boot Camp is a six month long program where you will learn to become a full-stack developer. The program is well designed to teach you front and back ends as well as optimization. You need to invest your time to study thoroughly in order to truly learn the materials but I do highly recommend people who are thinking about changing their career to become a full-stack developer!",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;