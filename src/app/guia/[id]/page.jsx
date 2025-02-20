import { notFound } from 'next/navigation';
import Image from 'next/image';

async function getGuide(id) {
  try {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/guides/records/${id}`);
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`HTTP error! status: ${res.status} for guide ID: ${id}`); // More specific error
    }
    const guide = await res.json();
    return guide;
  } catch (error) {
    console.error("Error fetching guide:", error);
    return null;
  }
}

const Placeholder = () => (
  <div className="bg-gray-200 w-full h-48 flex items-center justify-center mb-20">
    <span>Sin Miniatura</span>
  </div>
);

export default async function Guide({ params }) {
  const guide = await getGuide(params.id);

  if (!guide) {
    notFound();
  }

  const imageSrc = guide.thumbnail
    ? `http://127.0.0.1:8090/api/files/pbc_30964190/${params.id}/${guide.thumbnail}` // Removed ?token=
    : null;

  console.log("Image Source:", imageSrc); // Check the URL in the console

  return (
    <div className="flex justify-center">
      <div className="w-1/2 bg-white mt-10 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
        {imageSrc ? (
          <div className="relative h-48 w-full overflow-hidden"> {/* Parent for fill */}
            <Image
              src={imageSrc}
              alt={guide.title}
              fill
              style={{ objectFit: 'cover' }} // Important!
              sizes="100vw"
              priority
              onLoadingComplete={() => console.log("Image loaded:", imageSrc)}
              onError={(e) => console.error("Image load error:", e, imageSrc)}
            />
          </div>
        ) : (
          <Placeholder />
        )}
        <div dangerouslySetInnerHTML={{ __html: guide.content }} />
      </div>
    </div>
  );
}