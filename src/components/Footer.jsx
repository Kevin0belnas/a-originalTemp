const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      url: "#",
      hoverColor: "hover:bg-[#1DA1F2]"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
        </svg>
      ),
      url: "#",
      hoverColor: "hover:bg-[#E4405F]"
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      url: "#",
      hoverColor: "hover:bg-[#1877F2]"
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: "#",
      hoverColor: "hover:bg-[#000000]"
    }
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "Books", url: "#books" },
    { name: "About", url: "#about" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Decorative top gradient - responsive */}
      <div className="absolute top-0 left-0 w-full h-0.5 xs:h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></div>
      
      {/* Main Footer Content - fully responsive */}
      <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 md:gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 text-center sm:text-left">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              A. J SinClair
            </h3>
            <p className="text-blue-100 text-[10px] xs:text-xs sm:text-sm leading-relaxed mb-3 xs:mb-4">
              Fantasy author known for epic world-building and unforgettable adventures.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1 xs:gap-2 text-blue-200 text-[10px] xs:text-xs sm:text-sm">
              <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>In The Land Far Far Away</span>
            </div>
          </div>

          {/* Quick Links - Centered on mobile */}
          <div className="col-span-1 text-center sm:text-left">
            <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-1 xs:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url}
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-[10px] xs:text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1 xs:gap-2 group"
                  >
                    <span className="w-0.5 xs:w-1 h-0.5 xs:h-1 bg-blue-400 rounded-full group-hover:w-1 xs:group-hover:w-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="col-span-1 text-center sm:text-left">
            <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white">Contact</h4>
            <ul className="space-y-2 xs:space-y-3">
              <li>
                <a 
                  href="mailto:manelisingcayivuthwa506@gmail.com"
                  className="text-blue-200 hover:text-white transition-colors duration-300 text-[10px] xs:text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1 xs:gap-2 group"
                >
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">contact@ajsinclair.com</span>
                </a>
              </li>
              <li className="text-blue-200 text-[10px] xs:text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1 xs:gap-2">
                <svg className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Social Links - Centered on mobile */}
          <div className="col-span-1 text-center sm:text-left">
            <h4 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 sm:mb-4 text-white">Follow Me</h4>
            <p className="text-blue-200 text-[10px] xs:text-xs sm:text-sm mb-3 xs:mb-4">
              Stay updated with new releases and events.
            </p>
            <div className="flex flex-wrap gap-1 xs:gap-2 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`bg-blue-600/50 p-1.5 xs:p-2 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider - Responsive */}
        <div className="relative my-6 xs:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-500/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-blue-700 xs:bg-blue-800 px-2 xs:px-3 sm:px-4 py-0.5 xs:py-1 rounded-full text-[8px] xs:text-xs text-blue-200 border border-blue-500/30">
              ✨ Your Fantasy Author
            </span>
          </div>
        </div>

        {/* Bottom Bar - Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 xs:gap-4 text-[10px] xs:text-xs sm:text-sm text-blue-200">
          <p className="text-center sm:text-left">
            © {currentYear} A. J SinClair. All Rights Reserved. | Sited by Kevin Belnas
          </p>
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-300 whitespace-nowrap">Cookies</a>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient - responsive */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 xs:h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></div>

      {/* Custom breakpoint for extra small devices */}
      <style jsx>{`
        @media (min-width: 380px) {
          .xs\\:text-sm {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;