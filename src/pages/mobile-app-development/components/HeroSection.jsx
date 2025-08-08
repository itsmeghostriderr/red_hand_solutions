import React from 'react';

import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Icon name="Smartphone" size={16} className="text-secondary" />
              <span className="text-sm font-medium">Mobile App Development</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Build Apps That
                <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Transform Business
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                From concept to app store success, we create native iOS, Android, and cross-platform mobile applications that drive engagement and deliver measurable results for Gujarat businesses.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'Zap', title: 'React Native', desc: 'Cross-platform efficiency' },
                { icon: 'Shield', title: 'Native iOS/Android', desc: 'Maximum performance' },
                { icon: 'Cloud', title: 'Cloud Integration', desc: 'Scalable backend' },
                { icon: 'TrendingUp', title: 'App Store Success', desc: 'Optimization included' }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand-lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Free App Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Play"
                iconPosition="left"
              >
                View App Demos
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              {[
                { number: '150+', label: 'Apps Developed' },
                { number: '4.8★', label: 'Average Rating' },
                { number: '2M+', label: 'Total Downloads' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - App Mockups */}
          <div className="relative">
            <div className="relative z-10 flex justify-center items-center">
              {/* Main Phone Mockup */}
              <div className="relative">
                <div className="w-72 h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 bg-secondary rounded-lg"></div>
                          <div className="flex space-x-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-24 bg-gradient-to-br from-secondary to-accent rounded-lg"></div>
                          <div className="h-24 bg-gradient-to-br from-accent to-purple-500 rounded-lg"></div>
                        </div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                              <div className="flex-1 space-y-1">
                                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
                  <Icon name="Heart" size={24} className="text-secondary" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse-slow">
                  <Icon name="Star" size={24} className="text-accent" />
                </div>
              </div>

              {/* Secondary Phone Mockup */}
              <div className="absolute -right-16 top-16 transform rotate-12 opacity-60">
                <div className="w-48 h-96 bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl p-1.5 shadow-xl">
                  <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden">
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="w-6 h-6 bg-secondary rounded"></div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                          <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-8 bg-white/10 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;