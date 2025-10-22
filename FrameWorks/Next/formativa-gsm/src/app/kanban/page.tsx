"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardAdmin from "./DashboardAdmin";
import DashboardGestor from "./DashboardGestor";
import DashboardTecnico from "./DashboardTecnico";

export default function DashboardPage() {
    const router = useRouter();
    const [userFuncao, setUserFuncao] = useState<string | null>(null);

    useEffect(() => {
        const funcao = localStorage.getItem("funcao");
        if (!funcao) {
            router.push("/login");
        } else {
            setUserFuncao(funcao);
        }
    }, [router]);

    const handleLogout = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("funcao");
        router.push("/login");
    };

    const renderDashboard = () => {
        if (userFuncao?.toLowerCase() === "admin") {
            return <DashboardAdmin />;
        } else if (userFuncao?.toLowerCase() === "gestor") {
            return <DashboardGestor />;
        } else if (userFuncao?.toLowerCase() === "tecnico") {
            return <DashboardTecnico />;
        } else {
            return <p>Carregando dashboard...</p>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
                <h1 className="text-2xl font-semibold">
                    Bem-vindo, {userFuncao?.toUpperCase() || "Usuário"}
                </h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </header>

            <main className="p-6">{renderDashboard()}</main>
        </div>
    );
}
