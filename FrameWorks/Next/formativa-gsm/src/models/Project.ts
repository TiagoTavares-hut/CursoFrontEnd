import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProject extends Document {
    _id: string;
    titulo: string;
    descricao?: string;
    criadoEm: Date;
}

const ProjectSchema: Schema<IProject> = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    criadoEm: { type: Date, default: Date.now },
});

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
export default Project;