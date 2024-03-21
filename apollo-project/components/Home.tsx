"use client";

import React from "react";
import WorkerItem from "./worker/WorkerItem";
import { IWorker } from "@/backend/models/worker";
import CustomPagination from "./layout/CustomPagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredWorkersCount: number;
    workers: IWorker[];
  };
}
const Home = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const { workers, resPerPage, filteredWorkersCount } = data;
  return (
    <div>
      <section id="workers" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          AllRooms
          {location
            ? `${filteredWorkersCount} workers found in ${location}`
            : "All Workers"}
        </h2>
        <Link href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left me-1"></i> Back to Search
        </Link>
        <div className="row mt-4">
          {workers?.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Workers.</b>
            </div>
          ) : (
            workers?.map((worker) => (
              <WorkerItem key={worker._id} worker={worker} />
            ))
          )}
        </div>
      </section>
      
      <CustomPagination
        resPerPage={resPerPage}
        filteredWorkersCount={filteredWorkersCount}
      />
    </div>
  );
};

export default Home;
