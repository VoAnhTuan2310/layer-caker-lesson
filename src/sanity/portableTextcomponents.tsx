import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          className="rounded-lg not-prose w-full h-auto my-8"
          src={urlFor(value)
            .width(800)
            .auto("format")
            .url()}
          alt={value.alt || "Post image"}
          width={800}
          height={450}
        />
      );
    },
  },
};