import { DateTime } from 'luxon';
import { Asset } from './Asset';
import { lineDataItem } from 'react-native-gifted-charts';
import { DataPointLabelComponent } from '../component/DataPointLabelComponent';

const todayNetValue = require('./netvaluejson/today.json');
const weekNetValue = require('./netvaluejson/week.json');
const monthNetValue = require('./netvaluejson/month.json');
const yearNetValue = require('./netvaluejson/year.json');

const getChartDataPoints = (data) => {
    return data.map((point) => {
        return {
            value: point.value,
            time: DateTime.fromISO(point.time),
        };
    });
};

export const netValueData = {
    today: {
        data: getChartDataPoints(todayNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => {
                return {
                    value: point.value,
                    date: point.time.toISODate(),
                } as lineDataItem;
            }),
        time: getChartDataPoints(todayNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => point.time),
    },
    week: {
        data: getChartDataPoints(weekNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => {
                return {
                    value: point.value,
                    date: point.time.toISODate(),
                } as lineDataItem;
            }),
        time: getChartDataPoints(weekNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => point.time),
    },
    month: {
        data: getChartDataPoints(monthNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => {
                return {
                    value: point.value,
                    date: point.time.toISODate(),
                } as lineDataItem;
            }),
        time: getChartDataPoints(monthNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => point.time),
    },
    year: {
        data: getChartDataPoints(yearNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => {
                return {
                    value: point.value,
                    date: point.time.toISODate(),
                } as lineDataItem;
            }),
        time: getChartDataPoints(yearNetValue)
            .sort((a, b) => a.time - b.time)
            .map((point) => point.time),
    },
};

export const mockAssets: Asset[] = [
    {
        name: 'Cash',
        value: 1000,
        assetType: 'Cash',
        time: DateTime.now(),
    },
    {
        name: 'Savings',
        value: 2000,
        assetType: 'Savings',
        time: DateTime.now(),
    },
    {
        name: 'Investment',
        value: 3000,
        assetType: 'Investment',
        time: DateTime.now(),
    },
];
