import { StaticImageData } from "next/image";

export interface IReview {
  name: string;
  designation: string;
  comment: string;
  image: StaticImageData;
}

export interface IAward {
  image: StaticImageData;
  alt: string;
}
