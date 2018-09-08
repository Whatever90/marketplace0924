var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var User = mongoose.model('User');
//console.log(User)
let currentuser;
module.exports = {
  showAll: function (req, res) {
    User.find({})
      .sort("-score")
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  create: function (req, res) {
    User.findOne({ email: req.body.email })
      .then(data => {
        if (data) {
          res.json(false)
        } else {
          var user = new User({
            alias: req.body.alias,
            email: req.body.email,
            password: req.body.password
          });
          user.save()
            .then(saved => {
              req.session.user = data;
              res.json(saved)
            })
            .catch(err => {
              res.json(err);
            })
        }
      })
  },
  login: function (req, res) {
    User.findOne({ email: req.body.email })
      .then(data => {
        if (data) {
          if (data.password == req.body.password) {
            req.session.user = data;
            res.json(data)
          } else {
            res.json(false)
          }
        } else {
          res.json(false)
        }
      })
  },
  contact: function (req, res) {

    User.findOne({ _id: req.body.user })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  retrieve: function (req, res) {
    if (!req.session.user) {
      res.json(false);
    } else {
      res.json(req.session.user);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    console.log("destroyd!!!");
    res.status(200).send();
  },
  addToWishList: function (req, res) {
    User.update({ _id: req.body.id }, {$push: { wishList: req.body.product }})
      .then(data => {
        if (data) {
          req.session.user.wishList.push(req.body.product);
          res.json(data)
        } else {
          console.log(err)
          res.json(false)
        }
      })
  },
  // })
  // User.update({login: req.body.login}, {$set: {score: req.body.score}}, function(err, data){
  //   if(err){
  //     console.log('Not in DB')
  //     var user = new User({
  //         login: req.body.login,
  //         score: req.body.score,
  //         photo: req.body.photo
  //       });
  //     user.save(function(err, data) {
  //         if(err) {
  //           console.log('failed')
  //           res.json(err)
  //         } else {
  //           console.log("saved")
  //           res.json(data)
  //         }
  //     })
  //   }else{
  //     console.log('updated')
  //     res.json(data)
  //   }
  // })

  //   var user = new User({
  //     login: req.body.login,
  //     score: req.body.score,
  //     photo: req.body.photo
  //   });
  // user.save(function(err, data) {
  //     if(err) {
  //       console.log('failed')
  //       res.json(err)
  //     } else {
  //       console.log("saved")
  //       res.json(data)
  //     }
  // })


  //   checker(log){
  //     let x = log
  //     User.find({login: x}, function(err, user){
  //       if(err){
  //         console.log('not found')
  //         return false
  //       }
  //       if(user){
  //         console.log(user.length)
  //         if(user.length==0){
  //           return true
  //           console.log("nope, user isn't here", x)

  //         }
  //         console.log('yep, user is here', x)
  //         return false
  //       }
  //     })
  //   },
  // update: function(req, res){

  //   console.log(req.body.status)
  //   console.log('here')
  //   User.update({_id: req.body.id}, {$set: {game1: req.body.status}}, function(err, data){
  //     if(err){
  //       console.log('failed to delete')
  //       res.json(err);
  //       }else{
  //       console.log("deleted")
  //       res.json(data);
  //     }
  //   })

  //   },  
  // update2: function(req, res){

  //   console.log(req.body.status)
  //   console.log('here')
  //   User.update({_id: req.body.id}, {$set: {game2: req.body.status}}, function(err, data){
  //     if(err){
  //       console.log('failed to delete')
  //       res.json(err);
  //       }else{
  //       console.log("deleted")
  //       res.json(data);
  //     }
  //   })

  //   },  
  // update3: function(req, res){

  //   console.log(req.body.status)
  //   console.log('here')
  //   User.update({_id: req.body.id}, {$set: {game3: req.body.status}}, function(err, data){
  //     if(err){
  //       console.log('failed to delete')
  //       res.json(err);
  //       }else{
  //       console.log("deleted")
  //       res.json(data);
  //     }
  //   })

  //   }, 

  // delete: function(req, res){

  //   console.log(req.body.id)
  //   console.log('here')

  //   User.remove({_id: req.body.id}, function(err, data){
  //     if(err){
  //       console.log('failed to delete')
  //       res.json(err);
  //       }else{
  //       console.log("deleted")
  //       res.json(data);
  //     }
  //   })

  //   },
  //   show_user: function(req, res){
  //    console.log(req.params.id)
  //    User.find({_id: req.params.id}, function(err, data){
  //       if(err){
  //       console.log('failed to delete')
  //       res.json(err);
  //       }else{
  //       console.log("deleted")
  //       res.json(data);
  //     }
  //     })
  //   },
}
