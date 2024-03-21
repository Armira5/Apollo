import { IImage } from "@/backend/models/worker";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";

interface Props {
  images: IImage[];
}

const WorkerImageSlider = ({ images }: Props) => {
  return (
    <Carousel>
      {images?.length > 0 ? (
        images?.map((image) => (
          <Carousel.Item key={image?.public_id}>
            <div style={{ widows: "100%", height: "460px" }}>
              <Image
                className="d-block m-auto"
                src={image?.url}
                alt={image?.url}
                layout="fill"
              />
            </div>
          </Carousel.Item>
        ))
      ) : (
        <Carousel.Item>
          <div style={{ widows: "100%", height: "460px" }}>
            <Image
              className="d-block m-auto"
              src={"/images/default_worker_image.jpg"}
              alt={"/images/default_worker_image.jpg"}
              layout="fill"
            />
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default WorkerImageSlider;
