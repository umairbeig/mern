import mongoose from "mongoose";


const postSchema=mongoose.Schema(
    {
       id:String,
       title:String,
       message:String,
       creator:String,
       tags:[String],
       selectedFile:String,

       likeCount:{
        type:Number,
        default:0
       },
       createdAt:{
        type:Date,
        default:new Date()
       }


    }
)
    //  now the second PostMessage is the database name!
    const PostMessage=mongoose.model('PostMessage',postSchema);
    // the first one is use to create objects of the schema
    export default PostMessage;
