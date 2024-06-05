import pdfTemplate from '../documents/GiftDeed.js'
import pdf from 'html-pdf'
import path from 'path'


const __dirname = path.resolve()

export const create = (req,res)=>{
    pdf.create(pdfTemplate(req.body),{}).toFile('result.pdf',(error)=>{
        if(error){
            res.send(Promise.reject())
        }
        res.send(Promise.resolve())
    })
}

export const fetch = (req,res)=>{
    res.sendFile(`${__dirname}/result.pdf`)
}