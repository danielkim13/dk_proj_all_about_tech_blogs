const { Comment } = require('../models');

const commentData = [
    {
        user_id: 5,
        post_id: 1,
        comment_text: "Cool!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "Great Job!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "This is a great post!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Thank you for the steps!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I will check it out!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Amazing!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "learned something new today!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;