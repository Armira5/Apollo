import dbConnect from "@/backend/config/dbConnect";
import { deleteWorker, updateWorker} from "@/backend/controllers/workerControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();


router.put(updateWorker);
router.delete(deleteWorker);


export async function PUT(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
export async function DELETE(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
  }
