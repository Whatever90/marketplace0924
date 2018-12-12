module.exports = ( req, res, next ) => {
    if ( !req.session.user ) {
        req.session.user = {
            username: null
        }
    }
    var checker = req.session.user.subscribe(user => console.log("A suka, che to user pomenyalsya!!!!", user))
    next();
  }