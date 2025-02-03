import { Slide } from "@/types/slides";

export function getImageSrc(
  windowWidth: number,
  images?: Array<Slide>,
  image?: string,
  imageMobile?: string
): string {
  if (images?.length) {
    return windowWidth < 1000 ? images[0].imageMobileSrc : images[0].imageSrc;
  }
  return windowWidth < 1000 ? imageMobile ?? image ?? "" : image ?? "";
}
