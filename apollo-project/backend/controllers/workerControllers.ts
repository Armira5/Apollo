import { NextRequest, NextResponse } from "next/server";
import Worker, { IWorker } from "../models/worker";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import APIFilters from "../utils/apiFilters";
import ErrorHandler from "../utils/errorHandle";

// Get all workers  =>  /api/workers
export const allWorkers = catchAsyncErrors(async (req: NextRequest) => {
  const resPerPage: number = 8;

  const { searchParams } = new URL(req.url);

  throw new ErrorHandler("hello",400);

  const queryStr: any = {};
  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  });

  //const workersCount: number = await Worker.countDocuments();

  const apiFilters = new APIFilters(Worker, queryStr).search().filter();

  let workers: IWorker[] = await apiFilters.query;
  const filteredWorkersCount: number = workers.length;

  apiFilters.pagination(resPerPage);
  workers = await apiFilters.query.clone();

  return NextResponse.json({
    success: true,
    //workersCount,
    filteredWorkersCount,
    resPerPage,
    workers,
  });
});

// Create new worker  =>  /api/admin/workers
export const newWorker = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();

  const worker = await Worker.create(body);

  return NextResponse.json({
    success: true,
    worker,
  });
});

// Get worker details  =>  /api/workers/:id
export const getWorkerDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const worker = await Worker.findById(params.id);

    if (!worker) {
      //throw new ErrorHandler("Worker not found", 404);
    }

    return NextResponse.json({
      success: true,
      worker,
    });
  }
);

// Update worker details  =>  /api/admin/workers/:id
export const updateWorker = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    let worker = await Worker.findById(params.id);
    const body = await req.json();

    if (!worker) {
      //throw new ErrorHandler("Worker not found", 404);
    }

    worker = await Worker.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    return NextResponse.json({
      success: true,
      worker,
    });
  }
);

// Delete worker details  =>  /api/admin/workers/:id
export const deleteWorker = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const worker = await Worker.findById(params.id);

    if (!worker) {
      //throw new ErrorHandler("Worker not found", 404);
    }

    // TODO - Delete images associated with the worker

    await worker.deleteOne();

    return NextResponse.json({
      success: true,
    });
  }
);