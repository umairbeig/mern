

import PostMessage from "../model/newpost.js";


export const getMemo = async (req, res) => {
    try {

        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const addMemo = async (req, res) => {

    const { id, title, message, creator, tags, selectedFile } = req.body;

    const newPostMessage = new PostMessage({ id, title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const deleteMemo = async (req, res) => {

    try {
        const { id } = req.body;

        const resp = await PostMessage.findByIdAndDelete(id);
        res.status(201).json(id);

    } catch (error) {
        console.log(error)
        res.status(401).json({ message: error })
    }

}

export const likeMemory = async (req, res) => {
    const { id } = req.body;


    try {
        const mem = await PostMessage.findById(id);
   

        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: mem.likeCount + 1 }, { new: true })

        res.status(201).json(updatedPost);

    } catch (error) {
        console.log(error.message);
        res.status(401).json({ message: error });
    }


}
export const updateMemory = async (req, res) => {
    const {id}=req.params;
    const { title, message, creator, selectedFile, tags }=req.body;
   
    
    
    const updatedPost={title, message, creator, selectedFile, tags,_id:id};
    console.log(updatedPost);
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    // console.log(updatedPost)
    res.status(201).json(updatedPost);              

}
