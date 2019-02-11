var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

var conversationSchema = new mongoose.Schema({
    product_id: { type: ObjectId },
    sender_id: { type: ObjectId },
    reciever_id: { type: ObjectId},
    messages: { type: Array },
    sender_alias: { type: String, required: [true, 'buyer id is required'] },
    reciever_alias: { type: String, required: [true, 'buyer id is required'] }
}, { timestamps: true });

var Conversation = mongoose.model('Conversation', conversationSchema);
