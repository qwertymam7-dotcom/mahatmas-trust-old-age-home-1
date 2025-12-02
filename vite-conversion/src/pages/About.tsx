import { Heart, Users, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-green-700">Mahatma Old Age Home</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              மகாத்மா முதியோர் இல்லம் - Serving our elders with love and dignity since 2002
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide a loving, safe, and dignified home for senior citizens who need care and support. 
                We are committed to ensuring that every elder in our care receives the attention, medical support, 
                and emotional care they deserve in their golden years.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To create a society where no elder feels abandoned or lonely. We envision a community 
                that respects and cherishes its senior members, providing them with the care and love 
                they have given to society throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Mahatma Old Age Home was founded in 2002 with a simple yet profound mission: to provide 
                  a loving home for elders who have no one to care for them. What started as a small 
                  initiative has grown into a comprehensive care facility serving dozens of seniors.
                </p>
                <p>
                  Over the past 22 years, we have expanded our services beyond elder care to include 
                  community health programs such as free medical camps, eye camps, blood donation drives, 
                  and educational support for underprivileged children.
                </p>
                <p>
                  Our residents are not just occupants of our facility - they are our family. We celebrate 
                  their birthdays, festivals, and achievements together. We believe that every senior 
                  deserves to live their later years with dignity, joy, and purpose.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-6-1764692142031.jpeg?width=8000&height=8000&resize=contain"
                alt="Our Residents"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold mb-2">22+</p>
              <p className="text-green-100">Years of Service</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-green-100">Residents Cared</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-green-100">Health Camps</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-green-100">Lives Touched</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
