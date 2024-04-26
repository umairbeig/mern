import express from "express";
import { getMemo, addMemo,deleteMemo ,likeMemory,updateMemory} from "../controller/posts.js";



const router=express.Router();


router.get('/',getMemo);
router.post('/',addMemo);
router.delete('/',deleteMemo);
router.put('/like',likeMemory);
router.put('/update/:id',updateMemory);

export default router;