var express = require('express');
var app = express();
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
let temp = ''


var Conversation = mongoose.model('Conversation');
//console.log(User)
module.exports = {

  findByUser: function (req, res) {
    console.log("get all conversation for user", req.body.id)
    Conversation.aggregate([{
          $match: {
            $or: [{sender_id: mongoose.Types.ObjectId(req.body.id)}, {reciever_id: mongoose.Types.ObjectId(req.body.id)}]
          }
        }, {
          $lookup: {
            from: "users",
            localField: "sender_id",
            foreignField: "_id",
            as: "sender"
          }
        }, {
          $lookup: {
            from: "users",
            localField: "reciever_id",
            foreignField: "_id",
            as: "reciever"
          }
        },{
          $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "product"
          }
        }
      ])
      //  .find({ $or: [ { sender_id: req.body.id }, { reciever_id: req.body.id } ] }) 
      //     .sort("updatedAt")
      .then(data => {
        console.log("WE FOUND SOME CONVERSATION!")
        console.log(data)
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      }); //, function(err, data){
  },


  /*

   find: function (req, res) {
      Deal.aggregate([ { $match : { _id : mongoose.Types.ObjectId(req.body._id) } },
        {
          $lookup: {
            from: "tires",
            localField: "tire_id",
            foreignField: "_id",
            as: "tire"
          }
        }, {
          $lookup: {
            from: "rims",
            localField: "rim_id",
            foreignField: "_id",
            as: "rim"
          },
        }
      ])
        .then(data => {
          res.json(data);
        })
        .catch();
    }



  */


  findById: function (req, res) {
    Conversation.findOne({
        _id: req.body.id
      })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      }); //, function(err, data){

  },
  create: function (req, res) {
    var conversation = new Conversation({
      product_id: (req.body.product_id),
      buyer_id: (req.body.buyer_id),
      seller_id: (req.body.seller_id),
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
  find: function (req, res) { //searching a conversation by buyer_id and product_id
    Conversation.findOne({
        $and: [{
          product_id: req.body.product._id
        }, {
          sender_id: req.body.buyer_id
        }]
      }) //, function (data, err) {
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        var conversation = new Conversation({
          product_id: (req.body.product._id),
          buyer_id: (req.body.buyer_id),
          seller_id: (req.body.product.seller._id),
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
    if (!message.conversation_id) {
      var conversation = new Conversation({
        product_id: (req.body.product_id),
        sender_id: (req.body.sender_id),
        sender_alias: req.body.sender_alias,
        reciever_id: (req.body.reciever_id),
        reciever_alias: req.body.reciever_alias,
        messages: [message]
      });
      conversation.save(function (err, data) {
        if (data) {
          res.json(data)
        } else {
          console.log(err)
        }
      })
    } else {
      Conversation.update({
        _id: req.body.conversation_id
      }, {
        $push: {
          messages: message
        }
      }, function (e, d) {
        if (d) {
          console.log("updated!")
          Conversation.findOne({
            _id: req.body.conversation_id
          }, function (data, err) {
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
      });
    }

  }
}