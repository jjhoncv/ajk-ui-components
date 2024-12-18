// src/stories/ProductGallery.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ProductGallery } from "./ProductGallery";
import { mockProducts } from "@ajk-ui/data";
import { useState } from "react";
import { ProductImage, ProductImages } from "@ajk-ui/product";

const meta: Meta<typeof ProductGallery> = {
  title: "Feature/ProductGallery",
  component: ProductGallery,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    thumbPosition: {
      control: "radio",
      options: ["bottom", "left"],
      description: "Posición de las miniaturas",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductGallery>;

const mockImages = mockProducts[0].images;

const GalleryWithState = ({
  images,
  thumbPosition = "bottom",
  enableFade = false,
}: {
  images: ProductImages;
  thumbPosition?: "bottom" | "left";
  enableFade?: boolean;
}) => {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(
    images.gallery[0]
  );

  return (
    <ProductGallery
      images={images}
      selectedImage={selectedImage}
      onImageSelect={setSelectedImage}
      thumbPosition={thumbPosition}
    />
  );
};

// Story por defecto
export const Default: Story = {
  render: () => <GalleryWithState images={mockImages} />,
};

// Con miniaturas a la izquierda y fade
export const LeftThumbs: Story = {
  render: () => (
    <GalleryWithState
      images={mockImages}
      thumbPosition="left"
      enableFade={true}
    />
  ),
};

// Versión móvil con fade
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => <GalleryWithState images={mockImages} enableFade={true} />,
};
