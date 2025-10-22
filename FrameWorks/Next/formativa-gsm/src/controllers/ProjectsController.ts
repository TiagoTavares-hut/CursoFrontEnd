import Project, { IProject } from "@/models/Project";
import connectMongo from "@/services/mongodb";

export const getAllProjects = async () => {
    await connectMongo();
    return await Project.find([]);
};

export const getOneProject = async (id: string) => {
    await connectMongo();
    return await Project.findById(id);
};

export const createProject = async (data: Partial<IProject>) => {
    await connectMongo();
    const project = new Project(data);
    return await project.save();
};

export const updateProject = async (id: string, data: Partial<IProject>) => {
    await connectMongo();
    return await Project.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProject = async (id: string) => {
    await connectMongo();
    await Project.findByIdAndDelete(id);
};


