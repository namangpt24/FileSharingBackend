import File from "../models/file.js";
import dotenv from "dotenv";

dotenv.config();
const BASE_URL = process.env.BASE_URL

export const uploadHandler = async (req,res)=>{
    const fileobj = {
        path: req.file.path,
        name: req.file.originalname
    }

    try {
        const file = await File.create(fileobj);
        res.status(200).send({path:`${BASE_URL}/files/${file._id}`})  //this files is collection name in mongodb

    } catch (error) {
        console.log(error);
        res.status(500).send({error:error.message})
    }
}


export const downloadHandler = async (req,res)=>{
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadContent++;
        await file.save();

        res.download(file.path,file.name);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:error})
    }
    
}