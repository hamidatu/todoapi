import mongoose from 'mongoose';

const {Schema,model} = mongoose; 

const todoSchema = new Schema({
    title:{
        type: String,
        requireed:true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type:Boolean,
        default:false,
        required: true
    },
    date_time: {
        type:String,
        required: true
    }

});


const Todo = model('Todos', todoSchema);
export {Todo};


