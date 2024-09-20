import Image from "next/image";
import wondersImages from "../../../wonders";
import Modal from "@/Components/modal";

export default function PhotoModal({ params }) {
  // Add a check to ensure params is defined and has the expected structure
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
    <Modal>
      <Image
        alt={wonderImage.name}
        src={wonderImage.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{wonderImage.name}</h2>
        <h3>{wonderImage.photographer}</h3>
        <h3>{wonderImage.location}</h3>
      </div>
    </Modal>
  );
}
