import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Village', href: '#about' },
  { label: 'Tower', href: '#projects' },
  { label: 'Caverns', href: '#skills' },
  { label: 'Portal', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-panel py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="font-pixel text-xs text-primary tracking-wider">
          ATHARVA<span className="text-secondary">CRAFT</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-pixel text-[10px] text-muted-foreground hover:text-secondary transition-colors duration-300 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
