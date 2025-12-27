export interface IFooter {
  title: string;
  items: {
    label: string;
    href?: string;
    isLink?: boolean;
    isIcon?: boolean;
    isEmail?: boolean;
  }[];
}
