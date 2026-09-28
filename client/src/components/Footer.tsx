import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Instagram, Linkedin } from "lucide-react";

const SocialIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  switch (icon) {
    case "Instagram":
      return <Instagram className={`h-5 w-5 ${className || ''}`} />;
    case "Linkedin":
      return <Linkedin className={`h-5 w-5 ${className || ''}`} />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#196F3D] shadow-inner py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <Link to="/">
              <Logo size={60} variant="circular" textClass="text-white font-bold" />
            </Link>
            <p className="mt-4 text-white max-w-xl">
              Empowering small holder farmers through technology to improve agricultural productivity, income, and sustainability.
            </p>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {FOOTER_LINKS.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{section.title}</h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link to={link.href} className="text-white hover:opacity-70 transition-opacity duration-300">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} KrishiMitra. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-70 transition-opacity duration-300"
                  aria-label={social.platform}
                >
                  <SocialIcon icon={social.icon} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  