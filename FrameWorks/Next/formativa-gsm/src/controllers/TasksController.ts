import Task, { ITask } from "@/models/Task";
import connectMongo from "@/services/mongodb";

export const getAllTasks = async () => {
    await connectMongo();
    return await Task.find([]);
};

export const getOneTask = async (id: string) => {
    await connectMongo();
    return await Task.findById(id);
};

export const createTask = async (data: Partial<ITask>) => {
    await connectMongo();
    const t = new Task(data);
    return await t.save();
};

export const updateTask = async (id: string, data: Partial<ITask>) => {
    await connectMongo();
    return await Task.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTask = async (id: string) => {
    await connectMongo();
    await Task.findByIdAndDelete(id);
};



