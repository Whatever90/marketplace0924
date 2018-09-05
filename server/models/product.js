var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Name is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    description: { type: String, required: [true, 'description is required'] },
    location: { type: Number, required: [true, 'location is required'] },
    images: { type: Array },
    seller: { type: String, required: [true, 'seller is required'] },
    category: { type: String, required: [true, 'category is required'] },
}, { timestamps: true });

var Product = mongoose.model('Product', productSchema) ;
