var mongoose = require('mongoose');
var messageSchema = new mongoose.Schema({
    product_id: { type: String, required: [true, 'product id is required'] },
    sender_id: { type: String, required: [true, 'buyer id is required'] },
    reciever_id: { type: String, required: [true, 'seller id is required'] },
    messages: { type: Array },
    sender_alias: { type: String, required: [true, 'buyer id is required'] },
    reciever_alias: { type: String, required: [true, 'buyer id is required'] }
}, { timestamps: true });

var Message = mongoose.model('Message', messageSchema);
