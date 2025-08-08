import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-600/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-red-600/20 backdrop-blur-sm border border-red-600/30 rounded-full px-4 py-2 mb-6"
            >
              <Icon name="MapPin" size={16} className="text-red-400" />
              <span className="text-red-300 text-sm font-medium">Proudly Based in Rajkot, Gujarat</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transforming
              <span className="block text-gradient bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                Gujarat's Digital
              </span>
              Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              From our roots in Rajkot to serving businesses across Gujarat, we've been pioneering innovative technology solutions that drive real business growth since our founding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Icon name="Calendar" size={20} className="text-blue-400" />
                <div>
                  <p className="text-white font-semibold">Founded</p>
                  <p className="text-gray-300 text-sm">2018</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Icon name="Users" size={20} className="text-red-400" />
                <div>
                  <p className="text-white font-semibold">Team Size</p>
                  <p className="text-gray-300 text-sm">25+ Experts</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <Icon name="Award" size={20} className="text-yellow-400" />
                <div>
                  <p className="text-white font-semibold">Projects</p>
                  <p className="text-gray-300 text-sm">200+ Delivered</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      {Icon && <Icon name="TrendingUp" size={24} className="text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white">98%</h3>
                    <p className="text-gray-300 text-sm">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      {Icon && <Icon name="Clock" size={24} className="text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white">6+</h3>
                    <p className="text-gray-300 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      {Icon && <Icon name="Shield" size={24} className="text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white">100%</h3>
                    <p className="text-gray-300 text-sm">Data Security</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      {Icon && <Icon name="Zap" size={24} className="text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white">24/7</h3>
                    <p className="text-gray-300 text-sm">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm">Scroll to explore our journey</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;