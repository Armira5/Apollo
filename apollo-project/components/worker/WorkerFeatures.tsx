import { IWorker } from "@/backend/models/worker";
import React from "react";

interface Props {
  worker: IWorker;
}

const WorkerFeatures = ({ worker }: Props) => {
  return (
    <div className="features mt-5">
      <h3 className="mb-4">Features:</h3>
      <div className="worker-feature">
        <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
        <p>{worker?.guestCapacity} Guests</p>
      </div>
      <div className="worker-feature">
        <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
        {/* <p>{worker?.numOfBeds} Beds</p> */}
      </div>
      <div className="worker-feature">
        <i
          className={
            worker?.isShtimiUserit
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        ></i>
        <p>ShtimiisShtimiUserit</p>
      </div>
      <div className="worker-feature">
        <i
          className={
            worker?.isQasjaTekPuntoret
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        ></i>
        <p>QaisQasjaTekPuntoret</p>
      </div>
      <div className="worker-feature">
        <i
          className={
            worker?.isGjenimiRaportit
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        ></i>
        <p>Gjenerimi raportit</p>
      </div>
   
      </div>
  
  );
};

export default WorkerFeatures;
