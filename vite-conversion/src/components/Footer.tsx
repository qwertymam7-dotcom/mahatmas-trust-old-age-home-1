import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-700" fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-lg">Mahatma</p>
                <p className="text-xs text-green-200 -mt-1">Old Age Home</p>
              </div>
            </div>
            <p className="text-green-100 text-sm">
              Providing love, care, and dignity to our elders since 2002.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-green-100 hover:text-white text-sm">Home</Link>
              <Link to="/about" className="text-green-100 hover:text-white text-sm">About Us</Link>
              <Link to="/services" className="text-green-100 hover:text-white text-sm">Services</Link>
              <Link to="/gallery" className="text-green-100 hover:text-white text-sm">Gallery</Link>
              <Link to="/contact" className="text-green-100 hover:text-white text-sm">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <nav className="flex flex-col gap-2">
              <span className="text-green-100 text-sm">Blood Donation Camp</span>
              <span className="text-green-100 text-sm">Free Eye Camp</span>
              <span className="text-green-100 text-sm">Free Medical Camp</span>
              <span className="text-green-100 text-sm">ENT Camp</span>
              <span className="text-green-100 text-sm">Educational Support</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-300 mt-1 flex-shrink-0" />
                <p className="text-green-100 text-sm">
                  Mahatma Old Age Home, Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-300" />
                <p className="text-green-100 text-sm">+91 XXXXX XXXXX</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-300" />
                <p className="text-green-100 text-sm">info@mahatmaoldagehome.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © {new Date().getFullYear()} Mahatma Old Age Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
