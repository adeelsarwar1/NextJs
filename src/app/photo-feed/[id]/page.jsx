import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default function PhotoPage({
  params
}
) {
  const wonderImage = wondersImages.find((p) => p.id === params?.id);

  // Handle the case where the image is not found
  if (!wonderImage) {
    return (
      <Modal>
        <div className="bg-white p-4">
          <h2 className="text-xl font-semibold">Image not found</h2>
        </div>
      </Modal>
    );
  }
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{wonderImage.name}</h1>
        </div>
        <Image
          alt={wonderImage.name}
          src={wonderImage.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white py-4">
          <h3>{wonderImage.photographer}</h3>
          <h3>{wonderImage.location}</h3>
        </div>
      </div>
    </div>
  );
}
