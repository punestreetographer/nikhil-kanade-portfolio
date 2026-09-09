import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-frame-gold text-lg font-serif mb-4">Nikhil Kanade</h3>
            <p className="text-cream text-sm leading-relaxed">
              Freelance cinematographer & campaign photographer based in Pune
            </p>
          </div>
          <div>
            <h4 className="text-cream text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/photo" className="text-cream hover:text-frame-gold text-sm transition-colors">
                Photo
              </Link>
              <Link href="/video" className="text-cream hover:text-frame-gold text-sm transition-colors">
                Video
              </Link>
              <Link href="/services" className="text-cream hover:text-frame-gold text-sm transition-colors">
                Services
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-cream text-sm uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@nikhilkanade.com" className="text-cream hover:text-frame-gold text-sm transition-colors">
                Email
              </a>
              <a href="https://instagram.com/pune_streetographer" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-frame-gold text-sm transition-colors">
                Instagram @pune_streetographer
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-cream border-opacity-20 pt-8 text-center text-cream text-xs">
          <p>&copy; {new Date().getFullYear()} Nikhil Kanade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
