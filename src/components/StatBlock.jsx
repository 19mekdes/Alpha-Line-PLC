import  { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users} from 'lucide-react';

const StatBlock = ({ 
  icon: Icon = Users,
  value = 0,
  label = "",
  suffix = "",
  prefix = "",
  delay = 0,
  duration = 2000,
  color = "blue"
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
    teal: "from-teal-500 to-teal-600"
  };

  const bgColorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    teal: "bg-teal-100 text-teal-600"
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl shadow-lg p-6 text-center overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 rounded-full ${bgColorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
      </div>
      
      {/* Value */}
      <div className="mb-2">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>
      
      {/* Label */}
      <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">
        {label}
      </p>
      
      {/* Decorative Line */}
      <div className={`w-12 h-1 ${bgColorClasses[color]} mx-auto mt-4 rounded-full transition-all duration-300 group-hover:w-20`} />
    </motion.div>
  );
};

export const StatsGrid = ({ stats = [], columns = 4 }) => {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {stats.map((stat, index) => (
        <StatBlock
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          prefix={stat.prefix}
          delay={index * 0.1}
          color={stat.color || "blue"}
          duration={stat.duration || 2000}
        />
      ))}
    </div>
  );
};

export default StatBlock;