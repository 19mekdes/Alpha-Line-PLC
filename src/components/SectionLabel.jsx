// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const SectionLabel = ({ 
  title, 
  subtitle, 
  description,
  centered = true, 
  light = false,
  className = "",
  icon = null,
  badge = null
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {/* Badge (Optional) */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold ${
            light ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {badge}
        </motion.div>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-sm uppercase tracking-wider font-semibold mb-3 inline-block ${
            light ? 'text-blue-300' : 'text-blue-600'
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      
      {/* Title with Icon */}
      <div className="flex items-center justify-center gap-3 mb-4">
        {icon && centered && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${light ? 'text-blue-400' : 'text-blue-600'}`}
          >
            {icon}
          </motion.div>
        )}
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
            light ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </motion.h2>
        
        {icon && !centered && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${light ? 'text-blue-400' : 'text-blue-600'}`}
          >
            {icon}
          </motion.div>
        )}
      </div>
      
      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className={`h-1 w-20 rounded-full ${
          centered ? 'mx-auto' : 'ml-0'
        } ${light ? 'bg-blue-400' : 'bg-blue-600'}`}
      />
      
      {/* Description (Optional) */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className={`mt-6 text-lg max-w-3xl ${
            centered ? 'mx-auto text-center' : 'text-left'
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionLabel;