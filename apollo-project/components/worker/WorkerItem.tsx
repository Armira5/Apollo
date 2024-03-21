"use client";

import { IWorker } from "@/backend/models/worker";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface Props {
  worker: IWorker;
}

const WorkerItem = ({ worker }: Props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3 d-flex">
      <div className="card p-2 w-100">
        <Image
          className="card-img-top mx-auto"
          src={
            worker?.images?.length > 0
              ? worker.images[0].url
              : "/images/default_worker_image.jpg"
          }
          alt={worker?.name}
          height={170}
          width={100}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="/workers/workerId}">{worker?.name}</a>
          </h5>
          <div className="mt-auto">
            <p className="card-text mt-2">
              <b>${worker?.pricePerDay}</b> / night
            </p>
          </div>
          <div>
            <div className="d-flex">
              
              <span className="no-of-reviews">
                ({worker?.numOfReviews} Reviews)
              </span>
            </div>
            <Link
              className="btn view-btn mt-3 w-100"
              href={`/workers/${worker?._id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerItem;