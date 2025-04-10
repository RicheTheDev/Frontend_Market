const HeroSection = () => {
    return (
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            {/* Text section */}
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
                Trouvez les meilleurs professionnels près de chez vous
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl">
                ConnectMarket met en relation les clients avec des marchands locaux qualifiés. Découvrez, comparez et contactez en quelques clics.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-white hover:bg-gray-100 text-indigo-600 px-6 py-3 rounded-md text-lg font-medium transition-all">
                  Trouver un marchand
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-md text-lg font-medium border border-white transition-all">
                  Devenir marchand
                </button>
              </div>
            </div>
  
            {/* Image section */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Professionnels au travail"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-2/3">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    alt="Marie D."
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Marie D.</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  "J'ai trouvé un excellent plombier en 10 minutes grâce à ConnectMarket!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  