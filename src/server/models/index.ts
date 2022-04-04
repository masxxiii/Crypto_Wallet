import { Sequelize, } from 'sequelize-typescript';
import { Account, } from './Account';
import { Wallet, } from './Wallet';
import { Currency, } from './Currency';
import { Session, } from './Session';
import config from '../config/config';

/**
 * Initializes a sequelize instance.
 *
 * @remarks
 * Adding database models, syncs them and returns the instance.
 */
export async function InitDatabase() {
    const sequelize = new Sequelize(config.app.dbLink, {
        models: [Account, Wallet, Currency, Session],
        pool: {
            max: 60,
            min: 0,
            idle: 30000,
            acquire: 100000,
        },
        logging: false,

    });

    await sequelize.sync();

    return sequelize;
}
