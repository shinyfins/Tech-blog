const { Post } = require('../models');

const postData = [
    {
        title: "Best path to the underworld?",
        post_content: "Is there still a way under the castle? Anyone know?",
        user_id: 3
    },
    {
        title: "I'm learning coding to make my own kingdom online",
        post_content: "Be sure to join in when it's complete.",
        user_id: 5
    },
    {
        title: "Snakes in my code?",
        post_content: "I've heard of bugs but I'm having issues with snakes. Any solutions?",
        user_id: 4
    },
    {
        title: "Ranking of coders?",
        post_content: "We have a ranking of kings, how about one for coders?",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;