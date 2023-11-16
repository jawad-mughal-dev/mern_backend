const mongoose = require('mongoose');




const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String,  },
    description: { type: String,  },
    price: { type: Number, min: [1, 'wrong min discount'], max: [10000, 'wrong max price'],  },
    discountPercentage: { type: Number, min: [1, 'wrong max per'], max: [99, 'wrong max per'] },
    rating: { type: Number, min: [1, 'min tating issue '], max: [5, 'max rating issue '] },
    stock: { type: Number, min: [0, 'stock min issue '], max: [1000, 'stock max issue '], default: 0 },
    brand: { type: String,  },
    category: { type: String,  },
    thumbnail: { type: String, requried: true },
    images: { type: [String],  },

})



const virtual = productSchema.virtual('id');
virtual.get(function () {
    return this._id
})
productSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})



exports.Product = mongoose.model('Product', productSchema);