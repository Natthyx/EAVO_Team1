import mongoose from "mongoose";

const federatedCredentialSchema = new mongoose.Schema({
    provider: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        unique: true,
        required: true
    }
   
}, { timestamps: true });

const FCModel = mongoose.model("federated", federatedCredentialSchema);
export { FCModel };
