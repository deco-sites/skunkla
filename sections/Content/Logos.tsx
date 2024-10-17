import { type ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Section, {
  type Props as SectionHeaderProps,
} from "../../components/ui/Section.tsx";

export interface Image {
  image: ImageWidget;
  alt: string;
}

export interface Props extends SectionHeaderProps {
  images?: Image[];
}

function Logos({
  title,
  cta,
  images = [
    {
      alt: "deco",
      image:
        "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/skunkla/88ba438b-ea7f-4abc-a51c-b8aed827c82f/logo-wide.png",
    },
    {
      alt: "deco",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    },
  ],
}: Props) {
  return (
    <Section.Container>
      <Section.Header title={title} cta={cta} />

      <ul class="flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-5 sm:px-0">
        {images.map((item) => (
          <li>
            <Image
              width={300}
              height={300}
              src={item.image}
              alt={item.alt}
              class="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </Section.Container>
  );
}

export default Logos;
