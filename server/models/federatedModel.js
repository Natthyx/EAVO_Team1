import mongoose from "mongoose";

const federatedCredentialSchema = new mongoose.Schema({
    provider: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    }
   
});

const FCModel = mongoose.model("federated", federatedCredentialSchema);
export { FCModel };
