import { NextRequest, NextResponse } from "next/server";


export const allWorkers = async (req: NextRequest) => {
    return NextResponse.json({
        data:"hello",
    });
}