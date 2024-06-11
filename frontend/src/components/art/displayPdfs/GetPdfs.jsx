import React, { useEffect, useState } from 'react'
import PdfComps from '../PdfComps';
import axios from 'axios';

const GetPdfs = () => {

    const [allImage, setAllImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    useEffect(() => {
        getPdf();
    }, []);

    const getPdf = async () => {
        const result = await axios.get("http://localhost:8000/api/pdfs/get-files");
        console.log(result.data.data);
        setAllImage(result.data.data);
    };

    const showPdf = (pdf) => {
        window.open(`http://localhost:8000/files/${pdf}`, "_blank", "noreferrer");
        // setPdfFile(`/http://localhost:8000/files/${pdf}`)
    };
    return (
        // <div>
        //     <div className="uploaded">
        //         <h4>Uploaded PDF:</h4>
        //         <div className="output-div">
        //             {allImage == null ? "" : allImage.map((data) => {
        //                 return (
        //                     <div className="inner-div">
        //                         <h6>Title: {data.title}</h6>
        //                         <button className="btn btn-primary" onClick={() => showPdf(data.pdf)} >Show Pdf</button>
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //     </div>
        //     <div className="flex justify-center">
        //         <PdfComps pdfFile={pdfFile} />
        //     </div>
        // </div>

        
            <div className=" grid grid-cols-4 gap-2">
                {allImage == null ? "" : allImage.map((data) => {
                    return (
                        <div className="card bg-base-100 m-5 z-0">
                            <div className="card-body">
                                <h1 className="card-title">{data.title}</h1>
                                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                <div className="card-actions justify-center ">
                                    <button className="btn btn-primary" onClick={()=>showPdf(data.pdf)} >Open</button>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}
                
            </div>
        
    )
}

export default GetPdfs
