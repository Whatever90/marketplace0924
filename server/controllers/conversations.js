var express = require('express');
var app = express();
var mongoose = require('mongoose');

let temp = ''


var Conversation = mongoose.model('Conversation');
//console.log(User)
module.exports = {
  findByUser: function (req, res) {
    Conversation.find({ buyer_id: req.body.buyer_id})
      .sort("-updatedAt")
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
  findById: function (req, res) {//searching a conversation by buyer_id and product_id
    console.log(req.body)
    console.log('------------=-=-=-=-=-=-=-=-=-=')
    Conversation.find({ $and: [ { product_id: req.body.product_id }, { buyer_id: req.body.buyer_id } ] }, function(data, err){
      if(data){
        res.json(data)
      }else{
        console.log(err)
        res.json(err)
      }
    })
  },

}