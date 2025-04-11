import merchants from '../data/merchants';

const FeaturedMerchants = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professionnels recommandés
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez nos marchands les mieux notés.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchants.map((merchant) => (
            <div key={merchant.id} className="transition-all cursor-pointer">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={merchant.image}
                    alt={merchant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                    <div className="flex items-center">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      <span>{merchant.rating}</span>
                      <span className="text-gray-300 ml-2">({merchant.reviews} avis)</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{merchant.name}</h3>
                  <p className="text-gray-500 mt-1">{merchant.category}</p>
                  <div className="mt-4 flex items-center">
                    <i className="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                    <span className="text-sm text-gray-600">
                      {merchant.address.split(',')[0]}
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                    Voir le profil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedMerchants;
