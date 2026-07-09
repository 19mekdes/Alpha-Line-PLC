import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Calendar,
  ArrowRight,
  X,
  ZoomIn,
  Eye,
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Activity,
  Camera,
  ImageIcon,
  Map,
  Phone,
} from "lucide-react";

// Import all your local images from public/images folder
const ShashamaneMainImage = "/images/image5.jpg"; // Use your best Shashamane project image
const beforeImage = "/images/image6.jpg"; // Before image
const afterImage = "/images/image7.jpg"; // After image

// Gallery images for the project
const galleryImages = [
  {
    id: 1,
    url: "/images/image1.jpg",
    caption: "Fiber optic cable installation",
    captionAm: "የፋይበር ኦፕቲክ ገመድ መትከል",
  },
  {
    id: 2,
    url: "/images/image2.jpg",
    caption: "Utility pole installation",
    captionAm: "የመገልገያ ምሰሶ መትከል",
  },
  {
    id: 3,
    url: "/images/image3.jpg",
    caption: "Site survey and documentation",
    captionAm: "የቦታ ጥናት እና ሰነድ",
  },
  {
    id: 4,
    url: "/images/image4.jpg",
    caption: "Equipment and hardware setup",
    captionAm: "የመሳሪያ እና ሃርድዌር መጫን",
  },
  {
    id: 5,
    url: "/images/image5.jpg",
    caption: "Fiber optic cable installation",
    captionAm: "የፋይበር ኦፕቲክ ገመድ መትከል",
  },
  {
    id: 6,
    url: "/images/image6.jpg",
    caption: "Utility pole installation team",
    captionAm: "የመገልገያ ምሰሶ መትከል ቡድን",
  },
  {
    id: 7,
    url: "/images/image7.jpg",
    caption: "Site survey work",
    captionAm: "የቦታ ጥናት ስራ",
  },
  {
    id: 8,
    url: "/images/image8.jpg",
    caption: "Equipment setup",
    captionAm: "የመሳሪያ መጫን",
  },
  {
    id: 9,
    url: "/images/image9.jpg",
    caption: "Team at work",
    captionAm: "ቡድን በስራ ላይ",
  },
  {
    id: 10,
    url: "/images/image10.jpg",
    caption: "Infrastructure deployment",
    captionAm: "የመሠረተ ልማት ማሰማራት",
  },
  {
    id: 11,
    url: "/images/image11.jpg",
    caption: "Quality testing",
    captionAm: "የጥራት ሙከራ",
  },
  {
    id: 12,
    url: "/images/image12.jpg",
    caption: "Project completion",
    captionAm: "የፕሮጀክት ማጠናቀቅ",
  },
];

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === "am";
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("gallery");

  const projects = [
    {
      id: 1,
      title: "Shashamane Utility Infrastructure Project",
      titleAm: "ሻሻማኔ የመገልገያ መሠረተ ልማት ፕሮጀክት",
      location: "Shashamane-Oromia Region, Ethiopia",
      locationAm: "ሻሻማኔ-ኦሮሚያ ክልል፣ ኢትዮጵያ",
      category: "Power & Utilities",
      completed: "2026",
      duration: "3 months",
      description:
        "Complete utility infrastructure deployment including pole installation, fiber optic cabling, and electrical systems in the challenging Shashamane-Oromia region.",
      descriptionAm:
        "በአስቸጋሪው የሻሻማኔ-ኦሮሚያ ክልል የምሰሶ መትከል፣ የፋይበር ኦፕቲክ ገመድ እና የኤሌክትሪክ ስርዓቶችን ጨምሮ ሙሉ የመገልገያ መሠረተ ልማት ማሰማራት።",
      challenge:
        "Extreme temperatures reaching 45°C+, remote location with limited access, difficult rocky terrain, and logistical challenges.",
      solution:
        "Specialized heat-resistant equipment, local workforce training, phased deployment approach with mobile support teams, and drone-assisted surveying.",
      result:
        "Successfully deployed 50+ km of fiber optic network and 200+ utility poles serving 5,000+ residents.",
      impact:
        "Reduced power outage by 75% and increased internet connectivity by 200% in the region.",
      client: "Ethiopian Electric Utility / Ethio Telecom",
      images: galleryImages.map((img) => ({
        id: img.id,
        url: img.url,
        thumbnail: img.url,
        caption: img.caption,
        captionAm: img.captionAm,
        type: "gallery",
        date: "2026",
      })),
      beforeAfter: {
        before: {
          url: beforeImage,
          caption: "Before: Undeveloped area with no infrastructure",
          captionAm: "ከበፊቱ: መሠረተ ልማት የሌለው አካባቢ",
        },
        after: {
          url: afterImage,
          caption: "After: New utility poles and fiber optic network installed",
          captionAm: "ከሆነ በኋላ: አዲስ የመገልገያ ምሰሶዎች እና የፋይበር ኦፕቲክ ኔትወርክ ተጭኗል",
        },
      },
      stats: {
        fiberKm: "50+",
        utilityPoles: "200+",
        households: "5,000+",
        powerReduction: "75%",
      },
    },
    {
      id: 2,
      title: "Addis Ababa Fiber Optic Network",
      titleAm: "አዲስ አበባ የፋይበር ኦፕቲክ ኔትወርክ",
      location: "Addis Ababa, Ethiopia",
      category: "Telecom Infrastructure",
      completed: "2026",
      duration: "6 months",
      description:
        "Design and implementation of fiber optic network infrastructure across key districts of Addis Ababa.",
      images: [],
      stats: {
        fiberKm: "80+",
        districts: "5",
        households: "100,000+",
      },
    },
  ];

  const shashamaneProject = projects[0];

  const openLightbox = (images, index) => {
    setSelectedImage({ images, index });
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    if (selectedImage) {
      const newIndex = (currentImageIndex + 1) % selectedImage.images.length;
      setCurrentImageIndex(newIndex);
      setSelectedImage({ ...selectedImage, index: newIndex });
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const newIndex =
        (currentImageIndex - 1 + selectedImage.images.length) %
        selectedImage.images.length;
      setCurrentImageIndex(newIndex);
      setSelectedImage({ ...selectedImage, index: newIndex });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - White Background */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4">
              {isAmharic ? "የእኛ ፕሮጀክቶች" : "Our Projects"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {isAmharic
                ? "በአስቸጋሪ አካባቢዎች ያለንን እውቀት በማሳየት ላይ"
                : "Showcasing our expertise in challenging environments across Ethiopia"}
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Shashamane */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-r from-orange-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-10">
                <div className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold mb-4">
                  {isAmharic ? "ዋና ፕሮጀክት" : "Featured Project"}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {isAmharic
                    ? shashamaneProject.titleAm
                    : shashamaneProject.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Shashamane-Oromia Region,
                    Ethiopia
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 3 months
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Complete utility infrastructure deployment including pole
                  installation, fiber optic cabling, and electrical systems in
                  the challenging Shashamane-Oromia region.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-orange-500">
                      50+
                    </div>
                    <div className="text-xs text-gray-500">KM of Fiber</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-orange-500">
                      200+
                    </div>
                    <div className="text-xs text-gray-500">Utility Poles</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-orange-500">
                      5,000+
                    </div>
                    <div className="text-xs text-gray-500">
                      Households Served
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="text-2xl font-bold text-green-500">75%</div>
                    <div className="text-xs text-gray-500">
                      Power Outage Reduction
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(shashamaneProject)}
                  className="inline-flex items-center px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all"
                >
                  {isAmharic ? "ዝርዝር ይመልከቱ" : "View Details"}{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src={ShashamaneMainImage}
                  alt="Shashamane Utility Infrastructure Project"
                  className="w-full h-full object-cover rounded-r-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {isAmharic ? selectedProject.titleAm : selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="flex border-b px-4">
              {["gallery", "details", "map"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-4 font-medium text-sm transition-colors border-b-2 ${
                    activeTab === tab
                      ? "border-orange-500 text-orange-500"
                      : "border-transparent text-gray-500"
                  }`}
                >
                  {tab === "gallery" && (isAmharic ? "ምስሎች" : "Gallery")}
                  {tab === "details" && (isAmharic ? "ዝርዝሮች" : "Details")}
                  {tab === "map" && (isAmharic ? "ካርታ" : "Map")}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === "gallery" && (
                <div>
                  {selectedProject.beforeAfter && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-orange-500" />
                        {isAmharic ? "ከበፊት እና ከሆነ በኋላ" : "Before & After"}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative rounded-xl overflow-hidden shadow-md">
                          <img
                            src={selectedProject.beforeAfter.before.url}
                            alt="Before"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center text-sm">
                            {isAmharic
                              ? selectedProject.beforeAfter.before.captionAm
                              : selectedProject.beforeAfter.before.caption}
                          </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-md">
                          <img
                            src={selectedProject.beforeAfter.after.url}
                            alt="After"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center text-sm">
                            {isAmharic
                              ? selectedProject.beforeAfter.after.captionAm
                              : selectedProject.beforeAfter.after.caption}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.images &&
                    selectedProject.images.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Camera className="w-5 h-5 text-orange-500" />
                          {isAmharic ? "የፕሮጀክት ምስሎች" : "Project Images"}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {selectedProject.images.map((img, idx) => (
                            <div
                              key={img.id}
                              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                              onClick={() =>
                                openLightbox(selectedProject.images, idx)
                              }
                            >
                              <img
                                src={img.thumbnail || img.url}
                                alt={img.caption}
                                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="w-6 h-6 text-white" />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-1 text-xs text-center truncate">
                                {isAmharic ? img.captionAm : img.caption}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              )}

              {activeTab === "details" && (
                <div className="space-y-5">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {isAmharic ? "ተግዳሮት" : "Challenge"}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {isAmharic ? "መፍትሄ" : "Solution"}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {isAmharic ? "ውጤት" : "Result"}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {selectedProject.result}
                    </p>
                  </div>
                  {selectedProject.impact && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {isAmharic ? "ተጽእኖ" : "Impact"}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {selectedProject.impact}
                      </p>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {isAmharic ? "ደንበኛ" : "Client"}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {selectedProject.client}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "map" && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Map className="w-5 h-5 text-orange-500" />
                    {isAmharic ? "የፕሮጀክት አካባቢ ካርታ" : "Project Location Map"}
                  </h3>
                  <div className="bg-gray-100 rounded-xl p-8 text-center">
                    <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium">
                      {selectedProject.location}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Shashamane-Oromia Region, Ethiopia
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t">
              <a
                href="tel:+251933708486"
                className="block w-full text-center px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all"
              >
                <Phone className="inline mr-2 w-4 h-4" />
                {isAmharic
                  ? "ለተመሳሳይ ፕሮጀክት ዋጋ ይጠይቁ"
                  : "Request Quote for Similar Project"}
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-60 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl w-10 h-10 rounded-full bg-white/20 hover:bg-white/30"
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-3xl w-10 h-10 rounded-full bg-white/20 hover:bg-white/30"
          >
            ‹
          </button>
          <img
            src={selectedImage.images[currentImageIndex].url}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            alt=""
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-3xl w-10 h-10 rounded-full bg-white/20 hover:bg-white/30"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 mx-auto w-fit px-6 rounded-full">
            {isAmharic
              ? selectedImage.images[currentImageIndex].captionAm
              : selectedImage.images[currentImageIndex].caption}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {isAmharic
              ? "ተመሳሳይ ፕሮጀክት ማቀድ ይፈልጋሉ?"
              : "Planning a Similar Project?"}
          </h2>
          <p className="text-gray-500 mb-5 max-w-md mx-auto">
            {isAmharic
              ? "በእርስዎ ፕሮጀክት ላይ እንዴት እንደምንረዳ ለመወያየት ቡድናችንን ያግኙ"
              : "Contact our team to discuss how we can help with your project"}
          </p>
          <a
            href="tel:+251933708486"
            className="inline-flex items-center px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Phone className="mr-2 w-4 h-4" />
            {isAmharic ? "ዋጋ ይጠይቁ" : "Request a Quote"}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
