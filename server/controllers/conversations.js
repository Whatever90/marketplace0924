var express = require('express');
var app = express();
var mongoose = require('mongoose');

let temp = ''


var Conversation = mongoose.model('Conversation');
//console.log(User)
module.exports = {
  findByUser: function (req, res) {
    Conversation.find({ buyer_id: req.body.buyer_id })
      .sort("-updatedAt")
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });//, function(err, data){

  },
  findById: function (req, res) {
    Conversation.findOne({ _id: req.body.id })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });//, function(err, data){

  },
  create: function (req, res) {
    var conversation = new Conversation({
      product_id: req.body.product_id,
      buyer_id: req.body.buyer_id,
      seller_id: req.body.seller_id,
      messages: []
    });
    conversation.save(function (data, err) {
      if (data) {
        res.json(data)
      } else {
        res.json(err)
      }
    })


  },
  find: function (req, res) {//searching a conversation by buyer_id and product_id
    Conversation.findOne({ $and: [{ product_id: req.body.product._id }, { buyer_id: req.body.buyer_id }] })//, function (data, err) {
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        var conversation = new Conversation({
          product_id: req.body.product._id,
          buyer_id: req.body.buyer_id,
          seller_id: req.body.product.seller._id,
          messages: []
        });
        conversation.save(function (d, e) {
          if (d) {
            console.log('data', d)
            res.json(d)
          } else {
            console.log('err', e)
            res.json(e)
          }
        });
      })
  },
  update: function (req, res) {
    let message = req.body;
    message.date = Date.now();
    Conversation.update({ _id: req.body.conversation_id }, { $push: { messages: message } }, function (e, d) {
      if (d) {
        console.log("updated!")
        Conversation.findOne({ _id: req.body.conversation_id }, function (data, err) {
          if (data) {
            res.json(data)
          } else {
            res.json(err)
          }
        })
      } else {
        console.log("ERROR")
        res.json(e)
      }
    })
  }
}