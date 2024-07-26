import { DateTime } from 'luxon';
import { Asset } from './Asset';
import { lineDataItem } from 'react-native-gifted-charts';
import { Transaction } from './Transaction';

const todayNetValue = require('../data/netvaluejson/today.json');
const weekNetValue = require('../data/netvaluejson/week.json');
const monthNetValue = require('../data/netvaluejson/month.json');
const yearNetValue = require('../data/netvaluejson/year.json');

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

export const transactionsJson = require('../data/transactions.json').slice(
  0,
  10,
);

export const getTransactions = (jsonData) => {
  return jsonData.map((item: any) => ({
    date: new Date(item.Date),
    merchant: item.Merchant,
    category: item.Category,
    account: item.Account,
    amount: parseFloat(item.Amount),
    originalStatement: item.OriginalStatement,
    notes: item.Notes,
    tags: item.Tags,
    type: parseFloat(item.Amount) < 0 ? 'Charge' : 'Deposit',
  }));
};
