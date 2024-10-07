export default interface IImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  [key: string]: string | number;
}
