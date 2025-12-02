const galleryImages = [
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-6-1764692142031.jpeg?width=8000&height=8000&resize=contain',
    alt: 'Mahatma Old Age Home Residents',
    title: 'Our Beloved Residents',
    category: 'Residents',
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-5-1764693422575.jpeg?width=8000&height=8000&resize=contain',
    alt: 'Residents Playing Snakes and Ladders',
    title: 'Board Games Fun',
    category: 'Activities',
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-4-1764693422806.jpeg?width=8000&height=8000&resize=contain',
    alt: 'Fun Activities and Games',
    title: 'Joyful Moments',
    category: 'Activities',
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-3-1764693423094.jpeg?width=8000&height=8000&resize=contain',
    alt: 'Traditional Pallanguzhi Game',
    title: 'Traditional Games',
    category: 'Activities',
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-2-1764693422736.jpeg?width=8000&height=8000&resize=contain',
    alt: 'Carrom Board Game',
    title: 'Indoor Games',
    category: 'Activities',
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-2-1764692142513.jpeg?width=8000&height=8000&resize=contain',
    alt: 'Recreation Activities',
    title: 'Recreation Activities',
    category: 'Activities',
  },
]

export default function Gallery() {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Photo <span className="text-green-700">Gallery</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A glimpse into the warm and caring environment we provide for our beloved elders at Mahatma Old Age Home.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <div className="p-6">
                    <span className="text-green-300 text-sm font-medium">{image.category}</span>
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Life at Mahatma</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Experience the joy and warmth of our old age home through the eyes of our residents.
            </p>
            <div className="max-w-4xl mx-auto bg-green-100 rounded-2xl aspect-video flex items-center justify-center">
              <p className="text-green-700 font-medium">Coming Soon: Video Gallery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
