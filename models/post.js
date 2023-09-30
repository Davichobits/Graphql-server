const moongose = require('mongoose');
const { ObjectId } = moongose.Schema;

const postSchema = new moongose.Schema(
  {
    content:{
      type: {},
      required: true,
    },
    image:{
      url: {
        type: String,
        default: 'https://via.placeholder.com/200x200.png?text=Post',
      },
      public_id: {
        type: String,
        default: Date.now(),
      },
    },
    postedBy: {
      type: ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

module.exports = moongose.model('Post', postSchema);