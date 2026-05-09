import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, Map, Eye, Calendar, 
  MapPin, Award, TrendingUp, Users, Phone, Mail,
  Download, Share2, ZoomIn, Image as ImageIcon,
  Activity, BarChart3, CheckCircle, Clock, Target
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectGallery = ({ project, onClose }) => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [activeTab, setActiveTab] = useState('gallery');

  const isAmharic = i18n.language === 'am';
  const images = project.images || [];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(images[index]);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b flex justify-between items-center z-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {isAmharic && project.titleAm ? project.titleAm : project.title}
            </h2>
            <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.completed}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {project.duration}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Tabs */}
        <div className="border-b px-4">
          <div className="flex gap-6">
            {['gallery', 'details', 'map'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 font-medium text-sm transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-safety-orange text-safety-orange'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'gallery' && 'Photo Gallery'}
                {tab === 'details' && 'Project Details'}
                {tab === 'map' && 'Map View'}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div>
              {/* Stats Cards */}
              {project.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {project.stats.fiberKm && (
                    <div className="bg-primary-blue/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-primary-blue">{project.stats.fiberKm}</div>
                      <div className="text-xs text-gray-600">KM of Fiber</div>
                    </div>
                  )}
                  {project.stats.utilityPoles && (
                    <div className="bg-safety-orange/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-safety-orange">{project.stats.utilityPoles}</div>
                      <div className="text-xs text-gray-600">Utility Poles</div>
                    </div>
                  )}
                  {project.stats.households && (
                    <div className="bg-green-500/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">{project.stats.households}</div>
                      <div className="text-xs text-gray-600">Households Served</div>
                    </div>
                  )}
                </div>
              )}

              {/* Before & After Section */}
              {project.beforeAfter && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-safety-orange" />
                    Before & After Comparison
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => setShowBeforeAfter(true)}>
                      <img src={project.beforeAfter.before.url} alt="Before" className="w-full h-64 object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-semibold">Click to View</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                        {project.beforeAfter.before.caption}
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => setShowBeforeAfter(true)}>
                      <img src={project.beforeAfter.after.url} alt="After" className="w-full h-64 object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-semibold">Click to View</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                        {project.beforeAfter.after.caption}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Image Gallery */}
              {images.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-safety-orange" />
                    Project Documentation ({images.length} photos)
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, idx) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
                        onClick={() => openLightbox(idx)}
                      >
                        <img
                          src={image.thumbnail || image.url}
                          alt={image.caption}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-xs">
                          {isAmharic && image.captionAm ? image.captionAm : image.caption}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No images available for this project yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Details Tab */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-safety-orange" />
                  Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-safety-orange" />
                  Solution
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-safety-orange" />
                  Result & Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.result}</p>
                {project.impact && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{project.impact}</p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-safety-orange" />
                  Client
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.client}</p>
              </div>
            </div>
          )}

          {/* Map Tab */}
          {activeTab === 'map' && project.mapView && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Map className="w-5 h-5 text-safety-orange" />
                Project Location Map
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={project.mapView.embedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Project Location Map"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Coordinates: {project.mapView.coordinates}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 text-white hover:text-gray-300"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 text-white hover:text-gray-300"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}
            
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
              {isAmharic && selectedImage.captionAm ? selectedImage.captionAm : selectedImage.caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;