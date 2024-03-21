"use client";

import { IWorker } from "@/backend/models/worker";
import React, { useEffect } from "react";
import WorkerImageSlider from "./WorkerImageSlider";
import WorkerFeatures from "./WorkerFeatures";
import BookingDatePicker from "./BookingDatePicker";
import ListReviews from "../review/ListReviews";
import NewReview from "../review/NewReview";
//import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";

interface Props {
  data: {
    worker: IWorker;
  };
}

//mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const WorkerDetails = ({ data }: Props) => {
  const { worker } = data;

  useEffect(() => {
    const setMap = async () => {
      const coordinates = worker?.location?.coordinates;

    //   const map = new mapboxgl.Map({
    //     container: "worker-map",
    //     style: "mapbox://styles/mapbox/streets-v11",
    //     center: coordinates,
    //     zoom: 12,
    //   });

      // Add marker to the map
     // new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    };

    if (worker?.location) setMap();
  }, []);

  return (
    <div className="container container-fluid">
      <h2 className="mt-5">{worker.name}</h2>
      <p>{worker.address}</p>

      <div className="ratings mt-auto mb-3">
        
        <span className="no-of-reviews">({worker?.numOfReviews} Reviews)</span>
      </div>
      <WorkerImageSlider images={worker?.images} />

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>{worker?.description}</p>

          <WorkerFeatures worker={worker} />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker worker={worker} />

          {worker?.location && (
            <div className="my-5">
              <h4 className="my-2">Worker Location:</h4>
              <div
                id="worker-map"
                className="shadow rounded"
                style={{ height: 350, width: "100%" }}
              ></div>
            </div>
          )}
        </div>
      </div>
{/* 
      <NewReview workerId={worker?._id} />
      <ListReviews reviews={worker?.reviews} /> */}
    </div>
  );
};

export default WorkerDetails;
