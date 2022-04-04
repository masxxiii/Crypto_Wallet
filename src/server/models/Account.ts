import * as bcrypt from 'bcrypt';
import {
    Column, DataType, HasMany, Model, Scopes, Table,
} from 'sequelize-typescript';
import { getUUID, } from '../utils';
import { Wallet, } from './Wallet';

export enum AccountStatus {
    Unconfirmed = 'unconfirmed',
    Confirmed = 'confirmed',
}

interface AccountSettings {
    confirmCode: string | null;
    confirmCodeValidUntil: string | null;
    changePasswordCodeStatus: boolean | null;
    changePasswordCode: string | null;
    changePasswordCodeValidUntil: string | null;
    numberOfAttempts: number | null;
    lockedTill: string | null;
}

export const accountSettingsDefault: AccountSettings = {
    confirmCode: null,
    confirmCodeValidUntil: null,
    changePasswordCodeStatus: null,
    changePasswordCode: null,
    changePasswordCodeValidUntil: null,
    numberOfAttempts: 5,
    lockedTill: null,
};

@Scopes(() => ({
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    },
}))

@Table
export class Account extends Model {
    @Column({ type: DataType.STRING, defaultValue: () => getUUID(), primaryKey: true, })
        id: string;

    @Column({ type: DataType.STRING, defaultValue: null, })
        firstName: string;

    @Column({ type: DataType.STRING, defaultValue: null, })
        lastName: string;

    @Column({ type: DataType.STRING, unique: true, })
        username: string;

    @Column
    get password(): string {
        return this.getDataValue('password');
    }

    set password(value: string) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('password', String(hash));
    }

    @Column({ type: DataType.STRING, unique: true, })
        email: string;

    @Column({ type: DataType.STRING, defaultValue: null, })
        phone: string;

    @Column({ type: DataType.STRING, defaultValue: AccountStatus.Unconfirmed, })
        status: AccountStatus;

    @Column({ type: DataType.JSONB, defaultValue: accountSettingsDefault, })
        settings!: AccountSettings;

    @HasMany(() => Wallet)
        wallets!: Wallet[];

    passwordCompare(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
}
