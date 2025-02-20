import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Guide {
  id: string;
  title: string;
  content: string;
  thumbnail?: string;
  created: string;
}

async function getGuide(id: string): Promise<Guide | null> {
  try {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/guides/records/${id}`);
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const guide: Guide = await res.json();
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

export default async function Guide({ params }: { params: { id: string } }) {
  const guidePromise = getGuide(params.id); 

  const guide = await guidePromise; 

  if (!guide) {
    notFound();
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 bg-white mt-10 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
        {guide.thumbnail ? (
          <div className="max-w-full h-auto overflow-hidden">
            <Image
              src={`http://127.0.0.1:8090/api/files/pbc_30964190/${params.id}/${guide.thumbnail}?token=`}
              alt={guide.title}
              className="object-contain w-full h-auto"
              width={400} 
              height={225} 
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