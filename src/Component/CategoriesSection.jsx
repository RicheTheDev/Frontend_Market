import categories from '../data/categories';

const CategoriesSection = () => {
  const handleCategoryClick = (category) => {
    alert(`Catégorie ${category.name} sélectionnée`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Parcourez par catégories
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Trouvez le professionnel qu'il vous faut parmi nos nombreuses catégories.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card transition-all cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className={`flex items-center justify-center h-12 w-12 rounded-full ${category.color} mb-3`}>
                <i className={`fas ${category.icon}`}></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
