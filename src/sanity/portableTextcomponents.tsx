import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      // Nếu không có ảnh thì không render gì cả
      if (!value?.asset?._ref) {
        return null;
      }
      
      return (
        <div className="my-8 relative rounded-lg overflow-hidden">
             <Image
              className="object-cover"
              src={urlFor(value)
                .width(800)
                .auto("format")
                .url()}
              alt={value.alt || "Post image"}
              width={800}
              height={500}
            />
        </div>
      );
    },
  },
};