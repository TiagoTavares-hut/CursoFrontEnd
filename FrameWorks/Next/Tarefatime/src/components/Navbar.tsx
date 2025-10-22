import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="font-bold text-lg">Agência StartUp - Kanban</h1>
      <button
        onClick={() => alert("Logout ainda não implementado")}
        className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold"
      >
        Sair
      </button>
    </nav>
  );
}