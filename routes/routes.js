import express from 'express';
import { uploadHandler, downloadHandler} from '../controllers/filecontroller.js';
import upload from '../utils-middleware/upload.js';


const router = express.Router();


router.post('/upload',upload.single('file'),uploadHandler);
router.get('/files/:fileId',downloadHandler)

export default router;