import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ThumbsUp, 
  Filter, 
  
  ChevronLeft,
  ChevronRight,
  X,
  User,
  
  Clock,
  Share2,
  
  Award,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import TestimonialCard from '../components/TestimonialCard';
import { testimonialsData,  } from '../data/siteData';

const TestimonialsPage = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  // Filter options
  const filters = [
    { id: 'all', name: 'All Testimonials', count: testimonialsData.length },
    { id: 5, name: '5 Stars', count: testimonialsData.filter(t => t.rating === 5).length },
    { id: 4, name: '4 Stars', count: testimonialsData.filter(t => t.rating === 4).length },
    { id: 'featured', name: 'Featured', count: testimonialsData.filter(t => t.featured).length }
  ];

  // Sort options
  const sortOptions = [
    { id: 'latest', name: 'Latest First' },
    { id: 'oldest', name: 'Oldest First' },
    { id: 'highest', name: 'Highest Rated' },
    { id: 'lowest', name: 'Lowest Rated' }
  ];

  // Filter and sort testimonials
  const getFilteredTestimonials = () => {
    let filtered = [...testimonialsData];
    
    if (filter !== 'all') {
      if (filter === 'featured') {
        filtered = filtered.filter(t => t.featured);
      } else {
        filtered = filtered.filter(t => t.rating === filter);
      }
    }
    
    // Sort testimonials
    switch(sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    
    return filtered;
  };

  const filteredTestimonials = getFilteredTestimonials();
  
  // Pagination
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = filteredTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);

  // Statistics from testimonials
  const averageRating = (testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length).toFixed(1);
  const fiveStarCount = testimonialsData.filter(t => t.rating === 5).length;
  const satisfactionRate = ((fiveStarCount / testimonialsData.length) * 100).toFixed(0);

  // Rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: testimonialsData.filter(t => t.rating === rating).length,
    percentage: (testimonialsData.filter(t => t.rating === rating).length / testimonialsData.length) * 100
  }));

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-100 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://i.pinimg.com/736x/fd/40/04/fd4004703df72bbeb64be7d480b3c6d7.jpg')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Client Testimonials
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              What our clients say about their experience with Alpha Line PLC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="py-12 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className={`w-5 h-5 ${star <= averageRating ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'}`} />
                ))}
              </div>
              <div className="text-sm text-blue-200">Average Rating</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{testimonialsData.length}</div>
              <div className="text-sm text-blue-200">Total Reviews</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{satisfactionRate}%</div>
              <div className="text-sm text-blue-200">Satisfaction Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-blue-200">Would Recommend</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rating Distribution Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Rating Distribution</h3>
            {ratingDistribution.map((item, idx) => (
              <motion.div
                key={item.rating}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center gap-4 mb-3"
              >
                <div className="w-20 text-sm font-medium">{item.rating} Stars</div>
                <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="h-full bg-yellow-400 rounded-full flex items-center justify-end pr-2 text-xs font-medium text-gray-700"
                  >
                    {item.percentage > 10 && `${item.percentage.toFixed(0)}%`}
                  </motion.div>
                </div>
                <div className="w-12 text-sm text-gray-600">{item.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Sort Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filterOption) => (
                <button
                  key={filterOption.id}
                  onClick={() => {
                    setFilter(filterOption.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === filterOption.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {filterOption.name} ({filterOption.count})
                </button>
              ))}
            </div>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  image={testimonial.image}
                  date={testimonial.date}
                  featured={testimonial.featured}
                  projectImage={testimonial.projectImage}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredTestimonials.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">No testimonials found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories Section */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Success Stories"
            subtitle="Client Achievements"
            description="Real results delivered by Alpha Line PLC"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                company: "Ethio Manufacturing PLC",
                result: "40% increase in production efficiency",
                metric: "+40%",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                company: "Tech Industries",
                result: "Reduced downtime by 60% with SCADA implementation",
                metric: "-60%",
                icon: <Clock className="w-8 h-8" />
              },
              {
                company: "East African Bottling Co.",
                result: "25% reduction in energy costs",
                metric: "-25%",
                icon: <Award className="w-8 h-8" />
              }
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {story.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{story.metric}</div>
                <h3 className="font-semibold mb-2">{story.company}</h3>
                <p className="text-gray-600 text-sm">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial CTA */}
      <section className="py-20 bg-linear-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Have you worked with us? We'd love to hear about your experience
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Submit Your Testimonial
              <Star className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Details Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6">
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  {selectedTestimonial.image ? (
                    <img
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{selectedTestimonial.name}</h3>
                    <p className="text-gray-600">
                      {selectedTestimonial.position} at {selectedTestimonial.company}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className={`w-4 h-4 ${star <= selectedTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{selectedTestimonial.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-4">
                  <Quote className="w-8 h-8 text-blue-400 mb-3" />
                  <p className="text-gray-700 leading-relaxed">
                    "{selectedTestimonial.content}"
                  </p>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default TestimonialsPage;