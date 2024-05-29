import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema(
    {
      pdf: String,
      title: String,
    },
    // { collection: "PdfDetails" }
  );
  
const Pdf = mongoose.model("Pdf", PdfDetailsSchema);

export default Pdf