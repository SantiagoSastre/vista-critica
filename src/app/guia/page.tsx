import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/es';

interface Guide {
  id: string;
  title: string;
  content: string;
  thumbnail?: string;
  description?: string;
  created: string;
}

async function getAllGuides(): Promise<Guide[]> {
  try {
    const res = await fetch('http://127.0.0.1:8090/api/collections/guides/records');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching guides:", error);
    return [];
  }
}

const Placeholder = () => (
  <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
    <span>Sin Miniatura</span>
  </div>
);

export default async function Guias() {
  const guides = await getAllGuides();

  return (
    <div className="flex justify-center">
      <div className="bg-white lg:w-1/2 md:w-2/3 mt-10 p-6 rounded-lg relative w-full">
        <h1 className="text-3xl font-bold mb-4">Todas las Guías</h1>
        <div className="grid grid-cols-1 gap-4">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/guia/${guide.id}`}>
                <div className="cursor-pointer">
                  {guide.thumbnail ? (
                    <div className="max-w-full h-auto overflow-hidden">
                      <img
                        src={`http://127.0.0.1:8090/api/files/pbc_30964190/${guide.id}/${guide.thumbnail}?token=`}
                        alt={guide.title}
                        className="object-contain w-full h-auto"
                        style={{ maxWidth: '400px', maxHeight: '225px' }}
                      />
                    </div>
                  ) : (
                    <Placeholder />
                  )}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
                    {guide.description && (
                      <p className="text-gray-700 line-clamp-3 mb-2">
                        {guide.description}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm">
                      {moment(guide.created).locale('es').format('MMMM Do YYYY, h:mm a')}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}