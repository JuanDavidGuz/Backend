const {Schema, model} = require('mongoose');

const TaskSchema = Schema({
    title: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },

},{
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
});

TaskSchema.methods('toJSON',function(){
    const{__v, _id, ...object} = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Task', TaskSchema);