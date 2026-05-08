import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, User,  ThumbsUp,  X,  Share2 } from 'lucide-react';

const TestimonialCard = ({ 
  name, 
  position, 
  company, 
  content, 
  rating = 5, 
  image, 
  date,
  delay = 0,
  featured = false,
  projectImage = null,
  onShare
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  // eslint-disable-next-line react-hooks/purity
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 50));

  const handleLike = () => {
    if (!liked) {
      setLikesCount(prev => prev + 1);
    } else {
      setLikesCount(prev => prev - 1);
    }
    setLiked(!liked);
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      // Fallback share
      navigator.clipboard.writeText(`Check out this testimonial from ${name} at ${company}: "${content.substring(0, 100)}..."`);
      alert('Testimonial link copied to clipboard!');
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
          featured ? 'lg:col-span-2 xl:col-span-1 ring-2 ring-blue-500 ring-offset-2' : ''
        }`}
      >
        {/* Project Image (if available) */}
        {projectImage && (
          <div 
            className="relative h-48 bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${projectImage})` }}
            onClick={() => setShowImageModal(true)}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <button className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
              View Project
            </button>
          </div>
        )}

        <div className="p-6">
          {/* Rating and Quote Icon */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex">{renderStars(rating)}</div>
            <Quote className="w-8 h-8 text-gray-300 opacity-50" />
          </div>

          {/* Content */}
          <div className="mb-4">
            <p className={`text-gray-700 leading-relaxed ${!isExpanded && 'line-clamp-4'}`}>
              "{content}"
            </p>
            {content.length > 200 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 text-sm font-semibold mt-2 hover:text-blue-700 transition-colors"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>

          {/* Client Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              )}
              
              <div>
                <h4 className="font-semibold text-gray-900">{name}</h4>
                <p className="text-xs text-gray-500">
                  {position}
                  {company && ` at ${company}`}
                </p>
                {date && <p className="text-xs text-gray-400 mt-1">{date}</p>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-colors duration-300 ${
                  liked ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-500'
                }`}
              >
                <ThumbsUp className="w-3 h-3" />
                <span className="text-xs">{likesCount}</span>
              </button>
              <button
                onClick={handleShare}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <Share2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100" />
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && projectImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projectImage}
                alt="Project"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TestimonialCard;