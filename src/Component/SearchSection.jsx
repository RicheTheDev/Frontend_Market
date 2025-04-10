const SearchSection = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Rechercher un professionnel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Champ Quoi */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Quoi
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Plombier, électricien, coiffeur..."
                />
              </div>
            </div>
  
            {/* Champ Où */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Où
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-map-marker-alt text-gray-400"></i>
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Ville, code postal..."
                />
              </div>
            </div>
  
            {/* Bouton Rechercher */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchSection;  