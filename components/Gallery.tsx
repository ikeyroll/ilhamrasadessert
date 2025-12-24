
import React from 'react';

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
    alt: "Creamy Dadih Original",
    title: "Signature Dadih"
  },
  {
    url: "https://images.unsplash.com/photo-1511910849309-0dffb8c83e46?auto=format&fit=crop&w=800&q=80",
    alt: "Chocolate Bliss",
    title: "Rich Chocolate"
  },
  {
    url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    alt: "Strawberry Delight",
    title: "Fruit Infusions"
  },
  {
    url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    alt: "Assorted Mini Cups",
    title: "Party Packs"
  },
  {
    url: "https://images.unsplash.com/photo-1551446591-142875a901a1?auto=format&fit=crop&w=800&q=80",
    alt: "Homemade Goodness",
    title: "Freshly Made"
  },
  {
    url: "https://images.unsplash.com/photo-1579372781878-66042465e921?auto=format&fit=crop&w=800&q=80",
    alt: "Dessert Table Setup",
    title: "Event Catering"
  }
];

interface GalleryProps {
  t: any;
}

const Gallery: React.FC<GalleryProps> = ({ t }) => {
  return (
    <section className="py-8 sm:py-20 animate-fade-in bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark mb-4">{t.gallery.title}</h2>
          <div className="w-24 h-1 bg-brand-rose mx-auto mb-6"></div>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto italic px-4">
            {t.gallery.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg aspect-square bg-gray-100"
            >
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-6">
                <h3 className="text-white font-bold text-xs sm:text-lg">{img.title}</h3>
                <p className="text-white/80 text-[10px] sm:text-sm hidden sm:block">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
            <div className="inline-block p-6 sm:p-8 bg-white border border-brand-pink/30 rounded-2xl sm:rounded-3xl shadow-sm max-w-3xl">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-dark mb-3 sm:mb-4">{t.gallery.eventTitle}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                    {t.gallery.eventDesc}
                </p>
                <button 
                  onClick={() => window.open(`https://wa.me/60126872069?text=Hi, I saw your gallery and I'm interested in catering for my event!`, '_blank')}
                  className="bg-brand-rose text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold hover:bg-rose-500 transition-colors shadow-md"
                >
                    {t.gallery.eventBtn}
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
