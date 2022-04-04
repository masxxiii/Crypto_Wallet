import {
    BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table,
} from 'sequelize-typescript';
import { getUUID, } from '../utils';
import { Account, } from './Account';
import { Currency, } from './Currency';

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    },
}))

@Table
export class Wallet extends Model {
    @Column({ type: DataType.STRING, defaultValue: () => getUUID(), primaryKey: true, })
        id: string;

    @Column({ type: DataType.STRING, allowNull: false, unique: true, })
        address: string;

    @ForeignKey(() => Account)
    @Column(DataType.STRING)
        accountId: string;

    @ForeignKey(() => Currency)
    @Column(DataType.STRING)
        symbol: string;

    @Column({ type: DataType.DECIMAL, defaultValue: '0', })
        lockedBalance: string;

    @Column({ type: DataType.DECIMAL, defaultValue: '0', })
        balance: string;

    @BelongsTo(() => Account, 'accountId')
        account: Account;

    @BelongsTo(() => Currency, 'symbol')
        currency: Currency;
}
