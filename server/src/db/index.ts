import { Sequelize } from 'sequelize';

const db = new Sequelize({
    dialect: 'sqlite',
    // not sure if this path is 'good practice'. The path is always relative to root
    storage: './src/db/dotahq.sqlite',
});

export { db };
