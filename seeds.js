const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
    Thought,
    User,
} = require('./models');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const usersToCreate = [
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
    ];
    console.log(usersToCreate)
    const users = await User.insertMany(usersToCreate);

    
    const thoughtsToCreate = [
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
    ];
    console.log(thoughtsToCreate)
    const thoughts = await Thought.insertMany(thoughtsToCreate);
    console.log('Database Successfully Seeded');

    process.exit(0);
};

seedDb();