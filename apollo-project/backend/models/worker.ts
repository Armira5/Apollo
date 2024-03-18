import mongoose, { Schema, Document } from "mongoose";

export interface IImage extends Document {
  public_id: string;
  url: string;
}

export interface IReview extends Document {
  user:mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

export interface ILocation {
    type: string;
    coordinates: number[];
    formattedAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export interface IWorker extends Document {
    name: string;
    description: string;
    pricePerDay: number;
    address: string;
    location: ILocation;
    guestCapacity: number;
    isShtimiUserit: boolean;
    isQasjaTekPuntoret: boolean;
    isGjenimiRaportit: boolean;
    ratings: number;
    numOfReviews: number;
    images: IImage[];
    category: string;
    reviews: IReview[];
    user:mongoose.Schema.Types.ObjectId;
    createdAt: Date;
}

const WorkerSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter room name"],
        trim: true,
        maxLength: [200, "Room name cannot exceed 100 characters"],
      },
      description: {
        type: String,
        required: [true, "Please enter room description"],
      },
      pricePerDay: {
        type: Number,
        required: [true, "Please enter room price per night"],
        default: 0.0,
      },
      address: {
        type: String,
        required: [true, "Please enter room address"],
      },
      location: {
        type: {
          type: String,
          enum: ["Point"],
        },
        coordinates: {
          type: [Number],
          index: "2dsphere",
        },
        formattedAddress: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
      },
      guestCapacity: {
        type: Number,
        required: [true, "Please enter room guest capacity"],
      },
      isShtimiUserit: {
        type: Boolean,
        default: false,
      },
      isQasjaTekPuntoret: {
        type: Boolean,
        default: false,
      },
      isGjenimiRaportit: {
        type: Boolean,
        default: false,
      },
      ratings: {
        type: Number,
        default: 0,
      },
      numOfReviews: {
        type: Number,
        default: 0,
      },
      images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
      category: {
        type: String,
        required: [true, "Please enter room category"],
        enum: {
          values: ["King", "Single", "Twins"],
          message: "Please select correct category for room",
        },
      },
      reviews: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

export default mongoose.models.Worker ||
  mongoose.model<IWorker>("Worker", WorkerSchema);
