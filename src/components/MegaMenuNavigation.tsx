
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/i18n';

const MegaMenuNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const handleFreeTrial = () => {
    window.open('https://ialert.ciberpunk.es/auth/login', '_blank');
  };

  const menuItems = [
    {
      title: t.nav.product,
      id: 'product',
      items: [
        { title: t.product.features, desc: t.product.featuresDesc, href: '#features' },
        { title: t.product.howItWorks, desc: t.product.howItWorksDesc, href: '#how-it-works' },
        { title: t.product.benefits, desc: t.product.benefitsDesc, href: '#immediate-benefits' },
        { title: t.product.dashboard, desc: t.product.dashboardDesc, href: '#dashboard' }
      ]
    },
    {
      title: t.nav.useCases,
      id: 'use-cases',
      items: [
        { title: t.useCases.whatWeDo, desc: t.useCases.whatWeDoDesc, href: '#what-we-do' },
        { title: t.useCases.sectors, desc: t.useCases.sectorsDesc, href: '#industry-sectors' },
        { title: t.useCases.testimonials, desc: t.useCases.testimonialsDesc, href: '#testimonials' },
        { title: t.useCases.comparison, desc: t.useCases.comparisonDesc, href: '#comparison' },
        { title: t.useCases.enhancedBenefits, desc: t.useCases.enhancedBenefitsDesc, href: '#enhanced-benefits' }
      ]
    },
    {
      title: t.nav.company,
      id: 'company',
      items: [
        { title: t.company.pricing, desc: t.company.pricingDesc, href: '#pricing' },
        { title: t.company.security, desc: t.company.securityDesc, href: '#security-privacy' },
        { title: t.company.contact, desc: t.company.contactDesc, href: '#contact' },
        { title: t.company.documentation, desc: t.company.documentationDesc, href: '#technical-docs' },
        { title: t.company.stats, desc: t.company.statsDesc, href: '#stats' }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-900">
              iAlert
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors py-2">
                  <span>{menu.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Mega Menu Dropdown */}
                {activeMenu === menu.id && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-6 z-50">
                    <div className="space-y-4">
                      {menu.items.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-slate-600 mt-1">
                            {item.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              onClick={handleFreeTrial}
            >
              {t.nav.freeTrial}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="space-y-4">
              {menuItems.map((menu) => (
                <div key={menu.id}>
                  <div className="font-semibold text-slate-900 mb-2">{menu.title}</div>
                  <div className="space-y-2 ml-4">
                    {menu.items.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block text-slate-600 hover:text-blue-600 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors mt-4"
                onClick={handleFreeTrial}
              >
                {t.nav.freeTrial}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MegaMenuNavigation;
