// rrotas de requisição api que não usa ID (GET / POST)

import { NextRequest, NextResponse } from "next/server";
import { createProject, getAllProjects } from "@/controllers/ProjectsController";

export async function GET() {
    try {
        const projects = await getAllProjects();
        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const novo = await createProject(data);
        return NextResponse.json({ success: true, data: novo });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

