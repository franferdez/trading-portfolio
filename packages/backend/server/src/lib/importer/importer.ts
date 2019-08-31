import { TransactionCreateInput } from './../prisma/prisma-client/index';
import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';
import { prisma } from '../prisma/prisma-client';

const transactionsFiles = path.resolve(__dirname, '../../../database/private_data/Transactions.csv');

function readCsvFile(filename: string, callback: (results: object[]) => void) {
  const results = [];

  fs.createReadStream(filename)
    .pipe(csv())
    .on('data', data => results.push(data))
    .on('end', () => {
      callback(results);
    });
}

function transformDeGiroTransaction(deGiroTransaction): TransactionCreateInput {
  return {
    date: new Date(deGiroTransaction['Datum']),
    product: deGiroTransaction['Product'],
    isin: deGiroTransaction['ISIN'],
    market: deGiroTransaction['Exchange'],
    quantity: parseInt(deGiroTransaction['Aantal']),
    rate: parseFloat(deGiroTransaction['Koers ']),
    localValue: parseFloat(deGiroTransaction['Lokale waarde']),
    value: parseFloat(deGiroTransaction['Waarde']),
    exchangeRate: parseFloat(deGiroTransaction['Wisselkoers']),
    cost: parseFloat(deGiroTransaction['Kosten']),
    total: parseFloat(deGiroTransaction['Totaal']),
  };
}

async function importTransactions(transactions) {
  const allTransactions = await prisma.transactions();
  try {
    await transactions.forEach(async element => {
      const transaction = transformDeGiroTransaction(element);
      console.log('INSERT', transaction);

      await prisma.createTransaction(transaction);
    });
  } catch (err) {
    console.error('ERROR', err);
  }
}

readCsvFile(transactionsFiles, importTransactions);
