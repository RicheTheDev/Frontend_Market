
import testimonials from '../data/testimonials';

const Testimonials = () => {
  return (
    <div className="bg-indigo-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ils nous font confiance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white text-gray-900 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="italic mb-4">"{t.quote}"</p>
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full" src={t.avatar} alt={t.name} />
                <div className="ml-3">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
