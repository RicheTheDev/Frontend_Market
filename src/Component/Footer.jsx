// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'À propos',
                links: ['Notre entreprise', 'Carrières', 'Presse'],
              },
              {
                title: 'Pour les marchands',
                links: ['Devenir marchand', 'Tarifs', 'Ressources'],
              },
              {
                title: 'Assistance',
                links: ['Centre d\'aide', 'Sécurité', 'Contact'],
              },
              {
                title: 'Légal',
                links: ['Confidentialité', 'Conditions', 'Cookies'],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {[
                { icon: 'facebook-f', label: 'Facebook' },
                { icon: 'instagram', label: 'Instagram' },
                { icon: 'twitter', label: 'Twitter' },
                { icon: 'linkedin-in', label: 'LinkedIn' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-gray-300"
                  aria-label={social.label}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2023 ConnectMarket. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  