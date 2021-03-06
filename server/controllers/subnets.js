/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */
import express from 'express';
import mongoose from 'mongoose';

const router = module.exports = express.Router();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
const subnet = new mongoose.Schema({
  subnetName: { type: String, default: '' },
  description: { type: String, default: '' },
  cidr: { type: String, default: '' },
  vpcName: { type: String, default: '' }
});
const MySubnet = mongoose.model('subnet', subnet);

router.get('/vpc/:vpcName', (req, res) => {
  MySubnet.find({ vpcName: req.params.vpcName }, function (err, docs) {
    if (err) {
      console.log("Error: " + err);
      res.send(err)
    } else {
      res.send(docs)
    }
  });
});

router.get('/cidr/:cidr', (req, res) => {
  MySubnet.find({ cidr: req.params.cidr }, function (err, docs) {
    if (err) {
      console.log("Error: " + err);
      res.send(err)
    } else {
      res.send(docs)
    }
  });
});

router.get('/', (req, res) => {
  MySubnet.find({}, function (err, docs) {
    if (err) {
      console.log("Error: " + err);
      res.send(err)
    } else {
      res.send(docs)
    }
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  MySubnet.update({subnetName: req.body.subnetName},{ vpcName: req.body.vpcName, description: req.body.description, cidr: req.body.cidr, subnetName: req.body.subnetName }, { upsert : true }, function (err) {
    if (err) {
      console.log("Error: " + err);
      res.send(err)
    } else {
      res.send("saved to db")
    }
  });
});
