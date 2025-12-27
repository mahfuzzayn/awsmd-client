import { StaticImageData } from "next/image";

export interface IBlog {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
}
