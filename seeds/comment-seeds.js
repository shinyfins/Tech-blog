const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 4,
        comment_text: "ok"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_text: "woohoo"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "yeah"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "no"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "nuh uh"
    },
    {
        user_id: 6,
        post_id: 3,
        comment_text: "for what"
    },
    {
        user_id: 7,
        post_id: 5,
        comment_text: "who are u"
    },
    {
        user_id: 8,
        post_id: 4,
        comment_text: "I'm so tired!"
    },
    {
        user_id: 9,
        post_id: 3,
        comment_text: "First comment!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;