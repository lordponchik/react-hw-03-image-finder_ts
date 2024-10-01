export default interface IImage {
  id: number;
  webformatURL: string;
  largeFormatURL: string;
  [key: string]: string | number;
}
