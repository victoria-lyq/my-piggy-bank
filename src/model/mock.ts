import { Asset } from '../model/Asset';
import { NetValue } from '../model/NetValue';
import { DateTime } from 'luxon';

export const mockAssets: Asset[] = [
    {
        name: 'Cash',
        value: 1000,
        assetType: 'Cash',
    },
    {
        name: 'Investments',
        value: 1000,
        assetType: 'Investment',
    },
    {
        name: 'Savings',
        value: 1000,
        assetType: 'Savings',
    },
    {
        name: 'Crypto',
        value: 1000,
        assetType: 'Crypto',
    },
    {
        name: 'Crypto',
        value: 1000,
        assetType: 'Crypto',
    },
    {
        name: 'Crypto',
        value: 1000,
        assetType: 'Crypto',
    },
    {
        name: 'Crypto',
        value: 1000,
        assetType: 'Crypto',
    },
];

export const mockNetValues: NetValue[] = [
    {
        value: 1000,
        date: DateTime.local(2022, 1, 1),
    },
    {
        value: 2000,
        date: DateTime.local(2022, 2, 1),
    },
    {
        value: 3500,
        date: DateTime.local(2022, 3, 1),
    },
    {
        value: 15000,
        date: DateTime.local(2023, 4, 1),
    },
    {
        value: 13000,
        date: DateTime.local(2023, 5, 1),
    },
    {
        value: 12000,
        date: DateTime.local(2023, 6, 1),
    },
    {
        value: 16000,
        date: DateTime.local(2023, 8, 1),
    },
    {
        value: 35000,
        date: DateTime.local(2024, 3, 1),
    },
    {
        value: 33000,
        date: DateTime.local(2024, 5, 1),
    },
    {
        value: 49000,
        date: DateTime.local(2024, 7, 9),
    },
    {
        value: 53000,
        date: DateTime.local(2024, 7, 10),
    },
    {
        value: 50000,
        date: DateTime.local(2024, 7, 11),
    },
    {
        value: 50000,
        date: DateTime.local(2024, 7, 12),
    },
];
