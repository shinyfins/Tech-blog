const { User } = require('../models');

const userData = [
    {
        username: "Boji",
        github: "princeBoji",
        linkedIn: "Bojiii",
        email: "lilprince0@gmail.com",
        password: "password1"
    },
    {
        username: "Kage",
        github: "Shadow_Kage",
        linkedIn: "KageClan",
        email: "ripfam@gmail.com",
        password: "password1"
    },
    {
        username: "Bebin",
        github: "BebinHiss",
        linkedIn: "bebin",
        email: "snakeguy@gmail.com",
        password: "password1"
    },
    {
        username: "Domas",
        github: "superfighter",
        linkedIn: "GuardDomas",
        email: "Hilingfan1@gmail.com",
        password: "password1"
    },
    {
        username: "Desha",
        github: "godking",
        linkedIn: "KingDesha",
        email: "underworld@gmail.com",
        password: "password1"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;