// src/components/HowItWorks.jsx
const HowItWorks = () => {
    const steps = [
      {
        id: 1,
        title: 'Recherchez',
        description:
          "Trouvez le professionnel qu'il vous faut en utilisant notre moteur de recherche ou en parcourant les catégories.",
      },
      {
        id: 2,
        title: 'Comparez',
        description:
          'Consultez les profils, les tarifs, les disponibilités et les avis des professionnels.',
      },
      {
        id: 3,
        title: 'Contactez',
        description:
          'Envoyez une demande de contact directement au professionnel de votre choix.',
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comment ça marche ?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Trouver un professionnel n'a jamais été aussi simple.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                <span className="text-xl font-bold">{step.id}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  