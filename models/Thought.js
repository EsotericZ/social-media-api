const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
{ 
    toJSON: {
        getters: true,
    }
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    reactions: [reactionSchema],
    toJSON: {
        virtuals: true,
        getters: true,
    },
},
// { timestamps: true }
);

thoughtSchema.virtual('newDate').set(function(currentValueBeingSaved) {
    const dateArr = currentValueBeingSaved
    const newD = 12;
    this.set({
        date: newD,
    })
})

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;