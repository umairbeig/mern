import express from "express";
import { getMemo, addMemo,deleteMemo ,likeMemory} from "../controller/posts.js";



const router=express.Router();


router.get('/',getMemo);
router.post('/',addMemo);
router.delete('/',deleteMemo);
router.put('/like',likeMemory);

export default router;