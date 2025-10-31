import './index.css';
import before1 from './before1.png';
import after1 from './after1.png';
import before2 from './before2.png';
import after2 from './after2.png';
import before3 from './before3.png';
import after3 from './after3.png';
import before4 from './before4.png';
import after4 from './after4.png';
import inspectionImg from './inspection.png';
import moldImg from './mold.png';
import waterImg from './water.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1 - Hero/About */}
      <section className="relative px-6 py-32 md:py-44 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Logo/Brand mark */}
            <div className="inline-flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-600"></div>
                <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-green-600"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Company name */}
              <div className="relative inline-block">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700 tracking-tight leading-tight">
                  RELIABLE MOLD<br />
                  INSPECTION AND REMOVAL
                </h1>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
              </div>
              
              {/* Tagline */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-tight tracking-tight max-w-3xl mx-auto mt-8">
                Professional Mold & Water Damage Services
              </h2>
            </div>
            
            {/* Description */}
            <div className="pt-6 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                We're 20 years in the business doing mold inspections removals and water damage restoration. 
                We're fully licensed and insured family owned we take pride in our work and most of the time 
                have same day openings. We offer free estimates and mold inspections.
              </p>
            </div>

           
          </div>
        </div>
      </section>

      {/* Section 2 - Services */}
      <section className="px-6 py-20 md:py-28 bg-green-600">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-px w-20 bg-white"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              Our Services
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Service 1 */}
            <div className="group relative bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                {/* Image Container */}
                <div className="w-full md:w-1/2 lg:w-2/5 relative">
                  <div className="aspect-square md:aspect-video lg:aspect-square p-12 md:p-16 flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
                    <div className="relative w-full max-w-xs">
                      {/* Decorative circle */}
                      <div className="absolute inset-0 bg-green-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                      <img 
                        src={inspectionImg} 
                        alt="Mold Inspection" 
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-16">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-800 group-hover:text-green-600 transition-colors duration-300 tracking-tight mb-4">
                    Mold Inspection
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Comprehensive mold inspection services to identify and assess mold issues in your property with professional equipment and expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex flex-col md:flex-row-reverse items-center">
                {/* Image Container */}
                <div className="w-full md:w-1/2 lg:w-2/5 relative">
                  <div className="aspect-square md:aspect-video lg:aspect-square p-12 md:p-16 flex items-center justify-center bg-gradient-to-bl from-green-50 to-white">
                    <div className="relative w-full max-w-xs">
                      {/* Decorative circle */}
                      <div className="absolute inset-0 bg-green-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                      <img 
                        src={moldImg} 
                        alt="Mold Removal" 
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-16">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-800 group-hover:text-green-600 transition-colors duration-300 tracking-tight mb-4">
                    Mold Removal
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Professional mold removal and remediation to ensure a safe and healthy environment for you and your family.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                {/* Image Container */}
                <div className="w-full md:w-1/2 lg:w-2/5 relative">
                  <div className="aspect-square md:aspect-video lg:aspect-square p-12 md:p-16 flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
                    <div className="relative w-full max-w-xs">
                      {/* Decorative circle */}
                      <div className="absolute inset-0 bg-green-100 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                      <img 
                        src={waterImg} 
                        alt="Water Damage Restoration" 
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-16">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-800 group-hover:text-green-600 transition-colors duration-300 tracking-tight mb-4">
                    Water Damage Restoration
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Expert water damage restoration services to restore your property to its original condition quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Before Gallery */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-px w-20 bg-green-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-green-600 tracking-tight">
              Before Treatment
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">Examples of damage we've encountered</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Before 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="relative">
                <img src={before1} alt="Before 1" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    BEFORE
                  </span>
                </div>
              </div>
            </div>

            {/* Before 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="relative">
                <img src={before2} alt="Before 2" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    BEFORE
                  </span>
                </div>
              </div>
            </div>

            {/* Before 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="relative">
                <img src={before3} alt="Before 3" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    BEFORE
                  </span>
                </div>
              </div>
            </div>

            {/* Before 4 */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
              <div className="relative">
                <img src={before4} alt="Before 4" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-block bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    BEFORE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - After Gallery */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-px w-20 bg-green-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-green-600 tracking-tight">
              After Treatment
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">Professional restoration results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* After 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-green-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="relative">
                <img src={after1} alt="After 1" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    AFTER
                  </span>
                </div>
              </div>
            </div>

            {/* After 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-green-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="relative">
                <img src={after2} alt="After 2" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    AFTER
                  </span>
                </div>
              </div>
            </div>

            {/* After 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-green-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="relative">
                <img src={after3} alt="After 3" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    AFTER
                  </span>
                </div>
              </div>
            </div>

            {/* After 4 */}
            <div className="group relative overflow-hidden rounded-xl bg-green-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="relative">
                <img src={after4} alt="After 4" className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    AFTER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Contact */}
      <section className="px-6 py-32 md:py-40 bg-green-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-20 bg-white"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-20 tracking-tight">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <a href="mailto:Hallandalebeachmold@gmail.com" className="group block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <p className="text-xs text-white/70 mb-2 font-light tracking-wider uppercase">Email</p>
                  <p className="text-white text-base font-light break-all">Hallandalebeachmold@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:7867556455" className="group block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <p className="text-xs text-white/70 mb-2 font-light tracking-wider uppercase">Phone</p>
                  <p className="text-white text-xl font-light">(786) 755-6455</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}