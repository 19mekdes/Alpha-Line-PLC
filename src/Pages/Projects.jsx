import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  MapPin, Calendar, ArrowRight, Filter, 
  Grid, List, Search, X, ZoomIn, Eye, Award
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import ProjectGallery from '../components/ProjectGallery';
import { projectsData, categories } from '../data/projectsData';

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const isAmharic = i18n.language === 'am';

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoriesList = [
    { id: "all", name: "All Projects", nameAm: "ሁሉም ፕሮጀክቶች", count: projectsData.length },
    { id: "Telecom Infrastructure", name: "Telecom Infrastructure", nameAm: "ቴሌኮም መሠረተ ልማት", count: projectsData.filter(p => p.category === "Telecom Infrastructure").length },
    { id: "Power & Utilities", name: "Power & Utilities", nameAm: "ሃይል እና መገልገያዎች", count: projectsData.filter(p => p.category === "Power & Utilities").length }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <SectionLabel 
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          description={t('projects.description')}
        />

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-safety-orange dark:bg-gray-800"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categoriesList.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-safety-orange text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {isAmharic && cat.nameAm ? cat.nameAm : cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-safety-orange text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-safety-orange text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Project Banner - Afdera Project */}
        <div className="mb-12 bg-linear-to-r from-primary-blue to-deep-blue rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 text-white">
              <div className="inline-block px-3 py-1 bg-safety-orange rounded-full text-xs font-semibold mb-3">Featured Project</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Afdera Utility Infrastructure Project
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Afar-Afdera Region</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Completed 2024</span>
              </div>
              <p className="text-gray-200 mb-4 line-clamp-3">
                Successfully deployed 50+ km of fiber optic network and 200+ utility poles in one of Ethiopia's most challenging environments.
              </p>
              <button
                onClick={() => setSelectedProject(projectsData.find(p => p.id === 1))}
                className="inline-flex items-center gap-2 px-4 py-2 bg-safety-orange hover:bg-orange-700 rounded-lg transition-colors"
              >
                View Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/3861969/engineer-working-on-fiber-optic-cable-3861969.jpg"
                alt="Afdera Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-l from-primary-blue/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        {filteredProjects.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.images[0]?.url || "https://placehold.co/600x400/1B3A5C/white?text=Project+Image"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-safety-orange text-white text-xs px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">
                      {isAmharic && project.titleAm ? project.titleAm : project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <button className="text-safety-orange font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 md:h-auto">
                      <img
                        src={project.images[0]?.url || "https://placehold.co/200x200/1B3A5C/white?text=Project"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.completed}</span>
                        <span className="bg-safety-orange text-white px-2 py-0.5 rounded text-xs">{project.category}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Project Gallery Modal */}
        {selectedProject && (
          <ProjectGallery 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;