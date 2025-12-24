import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587047744199-afd4d2e3bbc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBzaG9wfGVufDF8fHx8MTc2NjUzMzI0OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white z-10"
        >
          <h1 className="text-5xl font-bold mb-4">About FASHION</h1>
          <p className="text-xl">Your Style, Your Story</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2024, FASHION is more than just a clothing brand – we're a lifestyle. We believe that fashion is a form of self-expression, and everyone deserves to look and feel their best.
              </p>
              <p className="text-gray-600 mb-6">
                Our curated collections feature the latest trends from around the world, carefully selected to bring you quality, style, and affordability. From everyday essentials to statement pieces, we have something for everyone.
              </p>
              <p className="text-gray-600">
                We're committed to sustainability, ethical sourcing, and creating a positive impact in the fashion industry. Join us on our journey to make fashion accessible, inclusive, and environmentally conscious.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We source only the finest materials and work with skilled artisans to ensure every piece meets our high standards.',
              },
              {
                title: 'Sustainability',
                description: 'We are committed to reducing our environmental impact through eco-friendly practices and sustainable sourcing.',
              },
              {
                title: 'Inclusivity',
                description: 'Fashion is for everyone. We celebrate diversity and offer sizes and styles for all body types and preferences.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO' },
              { name: 'Michael Chen', role: 'Creative Director' },
              { name: 'Emily Rodriguez', role: 'Head of Sustainability' },
              { name: 'David Kim', role: 'Chief Marketing Officer' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-40 h-40 mx-auto mb-4 bg-gray-200 rounded-full" />
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
