import { StaticImageData } from "next/image";

export interface IService {
  serial: number;
  title: string;
  description: string;
  href: string;
  stacks: string[];
  image: StaticImageData;
}
