import { Eye, Stethoscope, BookOpen, Monitor, Droplets, Ear, Home, HeartHandshake } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Old Age Home Care',
    description: 'Comprehensive residential care for senior citizens with 24/7 support, nutritious meals, medical attention, and recreational activities.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Droplets,
    title: 'Blood Donation Camp',
    description: 'Regular blood donation camps organized in collaboration with local hospitals. We also conduct blood group testing for the community.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Eye,
    title: 'Free Eye Camp',
    description: 'Comprehensive eye checkups including cataract screening, vision testing, and free spectacles distribution for those in need.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Stethoscope,
    title: 'Free Medical Camp',
    description: 'General health checkups with qualified doctors, free medicine distribution, and health awareness programs for the underprivileged.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Ear,
    title: 'ENT Camp',
    description: 'Specialized ear, nose, and throat checkups with hearing loss detection and affordable hearing aid project for the community.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: BookOpen,
    title: 'Educational Support',
    description: 'Free distribution of school uniforms, notebooks, and educational materials to underprivileged students to support their education.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Monitor,
    title: 'Computer Coaching',
    description: 'Free computer training classes for youth to empower them with essential digital skills for the modern workplace.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: HeartHandshake,
    title: 'Community Outreach',
    description: 'Various community support programs including food distribution, clothing donations, and assistance during natural disasters.',
    color: 'bg-orange-100 text-orange-600',
  },
]

export default function Services() {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-700">Services</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond caring for our elders, we actively serve the community through various social welfare programs and health initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-green-100 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Volunteer?</h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Join us in our mission to serve the community. Whether you want to help at our old age home 
            or participate in our health camps, your contribution matters.
          </p>
        </div>
      </section>
    </div>
  )
}
