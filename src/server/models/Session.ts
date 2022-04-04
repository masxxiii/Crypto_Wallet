import {
    BelongsTo, Column, DataType, ForeignKey, Model, Scopes, Table,
} from 'sequelize-typescript';
import { getUUID, } from '../utils';
import { Account, } from './Account';

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    },
}))

@Table
export class Session extends Model {
    @Column({ type: DataType.STRING, defaultValue: () => getUUID(), primaryKey: true, })
        id: string;

    @ForeignKey(() => Account)
    @Column(DataType.STRING)
        accountId: string;

    @Column(DataType.STRING)
        ip: string;

    @Column(DataType.STRING)
        device: string;

    @BelongsTo(() => Account)
        account: Account;
}
