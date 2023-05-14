const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const BankSchema = require('./models/BankData');

app.use(cors());

const mongoUrl = 'mongodb+srv://sanaabid:sana1234@cluster0.guiajle.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('connected to database');
  })
  .catch((e) => console.log(e));

const Bank = mongoose.model('Bank-database', BankSchema);

app.use(express.json());

app.listen(4042, () => {
  console.log('Server started');
});

const newBank = new Bank({
  Name: 'John Smith',
  CNIC: '1234567890123',
  Cards: 'Debit',
  Balance: 5000,
  AccNo: 1234567890,
});

newBank
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
