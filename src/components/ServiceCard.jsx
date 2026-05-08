import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, ArrowRight, CheckCircle, X} from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  longDescription,
  icon: Icon = Wrench,
  image,
  features = [],
  specifications = {},
  delay = 0,
  onLearnMore
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      >
        {/* Image Section */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Engineering Service
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6">
          {/* Icon */}
          <div className={`mb-4 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Icon className="w-7 h-7" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Features List */}
          {features.length > 0 && (
            <div className="mb-4 space-y-2">
              {features.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
              {features.length > 2 && (
                <p className="text-xs text-blue-600 mt-1">+{features.length - 2} more features</p>
              )}
            </div>
          )}

          {/* Learn More Button */}
          <button
            onClick={handleLearnMore}
            className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
          >
            <span>Learn More</span>
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </button>
        </div>

        {/* Hover Border Effect */}
        <div className={`absolute inset-0 border-2 border-blue-500 rounded-2xl transition-all duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </motion.div>

      {/* Modal for View Details */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: image ? `url(${image})` : 'none' }}>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6">{longDescription || description}</p>

                {/* Features */}
                {features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {Object.keys(specifications).length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Specifications:</h4>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="font-medium text-gray-600">{key}:</span>
                          <span className="text-gray-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;