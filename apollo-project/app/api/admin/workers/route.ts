
import dbConnect from "@/backend/config/dbConnect";
import { newWorker } from "@/backend/controllers/workerControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.post(newWorker);

export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
  }