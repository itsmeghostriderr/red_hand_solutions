import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about-us', icon: 'Users' },
    { name: 'Services', path: '/services-overview', icon: 'Settings' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Briefcase' },
    { name: 'Contact', path: '/contact-consultation', icon: 'Phone' }
  ];

  const moreItems = [
    { name: 'Mobile Development', path: '/mobile-app-development', icon: 'Smartphone' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-brand border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group transition-brand"
            onClick={closeMenu}
            aria-label="Red Hand Solutions Home"
          >
            <div className="relative flex items-center">
              <img
                src="/assets/images/RHS Logo (Edited).png"
                alt="Red Hand Solutions Logo"
                className="w-12 h-12 object-contain rounded-lg shadow-brand group-hover:shadow-brand-lg transition-brand bg-white"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-primary group-hover:text-gradient transition-brand">
                Red Hand Solutions
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Digital Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand relative
                  ${isActivePath(item?.path)
                    ? 'bg-secondary text-secondary-foreground shadow-brand after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-secondary after:to-accent'
                    : 'text-foreground hover:text-primary hover:after:absolute hover:after:left-4 hover:after:right-4 hover:after:-bottom-1 hover:after:h-1 hover:after:rounded-full hover:after:bg-gradient-to-r hover:after:from-secondary hover:after:to-accent'}
                `}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-brand">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon name="ChevronDown" size={14} className="group-hover:rotate-180 transition-brand" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-56 bg-popover border border-border rounded-lg shadow-brand-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-brand ${
                        isActivePath(item?.path)
                          ? 'bg-accent text-accent-foreground'
                          : 'text-popover-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand hover:shadow-brand-lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
              asChild={false}
              onClick={() => window.location.href = '/contact-consultation'}
            >
              Free Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-brand"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                className={isMenuOpen ? "rotate-90" : "rotate-0"} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-brand overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 border-t border-border bg-card/50 backdrop-blur-sm rounded-b-lg">
            {[...navigationItems, ...moreItems]?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                  isActivePath(item?.path)
                    ? 'bg-secondary text-secondary-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border">
              <Button
                variant="default"
                size="sm"
                fullWidth
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
                asChild={false}
                onClick={() => window.location.href = '/contact-consultation'}
              >
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;