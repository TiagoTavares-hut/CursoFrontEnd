"use client";
import { useEffect, useState } from "react";
import KanbanBoard from "@/components/KanbanBoard";
import { ITask } from "@/models/Task";

export default function KanbanPage() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('/api/tasks');
                const data = await res.json();
                if (data.success) {
                    setTasks(data.data);
                }
            } catch (error) {
                console.error('Erro ao carregar tarefas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) return <div>Carregando...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Quadro Kanban</h1>
            <KanbanBoard tasks={tasks} />
        </div>
    );
}
