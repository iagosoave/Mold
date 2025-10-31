import './index.css';
import before1 from './before1.png';
import after1 from './after1.png';
import before2 from './before2.png';
import after2 from './after2.png';
import before3 from './before3.png';
import after3 from './after3.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1 - Hero/About */}
      <section className="relative px-6 py-40 md:py-48 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center space-x-3 mb-2">
              <div className="h-px w-12 bg-green-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
              <div className="h-px w-12 bg-green-600"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-green-600 leading-tight tracking-tight">
              Professional Mold &<br className="hidden md:block" /> Water Damage Services
            </h1>
            
            <div className="pt-4">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                We're 20 years in the business doing mold inspections removals and water damage restoration. 
                We're fully licensed and insured family owned we take pride in our work and most of the time 
                have same day openings. We offer free estimates and mold inspections.
              </p>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-600/20 to-transparent"></div>
      </section>

      {/* Section 2 - Services */}
      <section className="px-6 py-32 md:py-40 bg-green-600">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-px w-20 bg-white"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              Our Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-white p-12 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 cursor-pointer overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <div className="relative flex flex-col">
                <div className="mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-green-600/20">
                    <svg className="w-8 h-8 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800 group-hover:text-green-600 transition-colors duration-300 tracking-tight leading-snug">
                  Mold Inspection
                </h3>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white p-12 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 cursor-pointer overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <div className="relative flex flex-col">
                <div className="mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-green-600/20">
                    <svg className="w-8 h-8 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800 group-hover:text-green-600 transition-colors duration-300 tracking-tight leading-snug">
                  Mold Removal
                </h3>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white p-12 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 cursor-pointer overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <div className="relative flex flex-col">
                <div className="mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-green-600/20">
                    <svg className="w-8 h-8 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-800 group-hover:text-green-600 transition-colors duration-300 tracking-tight leading-snug">
                  Water Damage Restoration
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Before & After */}
      <section className="px-6 py-32 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-px w-20 bg-green-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-green-600 tracking-tight">
              Before & After
            </h2>
          </div>

          <div className="space-y-12">
            {/* Pair 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={before1} alt="Before 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-white text-sm font-light tracking-wider">BEFORE</p>
                  </div>
                </div>
                {/* After */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={after1} alt="After 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-green-600 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white text-sm font-light tracking-wider">AFTER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pair 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={before2} alt="Before 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-white text-sm font-light tracking-wider">BEFORE</p>
                  </div>
                </div>
                {/* After */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={after2} alt="After 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-green-600 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white text-sm font-light tracking-wider">AFTER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pair 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={before3} alt="Before 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-white text-sm font-light tracking-wider">BEFORE</p>
                  </div>
                </div>
                {/* After */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={after3} alt="After 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-green-600 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-white text-sm font-light tracking-wider">AFTER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Contact */}
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