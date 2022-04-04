import {
    Column, DataType, Model, Table, HasMany, Scopes,
} from 'sequelize-typescript';
import { Wallet, } from './Wallet';
import { getUUID, } from '../utils';

export enum Symbols {
    ETH = 'ETH',
    BSC = 'BSC'
}

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    },
}))

@Table
export class Currency extends Model {
    @Column({ type: DataType.STRING, defaultValue: () => getUUID(), })
        id: string;

    @Column({ type: DataType.STRING, allowNull: false, primaryKey: true, })
        symbol: Symbols;

    @Column({ type: DataType.DECIMAL, defaultValue: '0', })
        price: string;

    @Column({ type: DataType.INTEGER, defaultValue: 18, })
        decimals: number;

    @HasMany(() => Wallet)
        wallets: Wallet[];
}
