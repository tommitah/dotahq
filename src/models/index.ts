import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: '../db/dotahq.sqlite'
    }
);

export { sequelize };
