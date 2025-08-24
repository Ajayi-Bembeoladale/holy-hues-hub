import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-church-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-church-primary to-church-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">GC</span>
              </div>
              <span className="text-xl font-bold">Grace Community Church</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              A place where faith, community, and love come together. 
              We are committed to helping people grow in their relationship with God 
              and serve others with purpose and passion.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">123 Faith Street, Community City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@gracecommunity.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Service Times", "Events", "Ministries", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <strong className="text-white">Sunday Morning</strong><br />
                9:00 AM & 11:00 AM
              </li>
              <li>
                <strong className="text-white">Wednesday Evening</strong><br />
                7:00 PM
              </li>
              <li>
                <strong className="text-white">Youth Group</strong><br />
                Friday 6:30 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2024 Grace Community Church. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-white/80 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>for our community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;