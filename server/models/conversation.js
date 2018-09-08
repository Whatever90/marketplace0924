var mongoose = require('mongoose');
var conversationSchema = new mongoose.Schema({
    product_id: { type: String, required: [true, 'product id is required'] },
    buyer_id: { type: String, required: [true, 'buyer id is required'] },
    seller_id: { type: String, required: [true, 'seller id is required'] },
    messages: { type: Array },
}, { timestamps: true });

var Conversation = mongoose.model('Conversation', conversationSchema);
