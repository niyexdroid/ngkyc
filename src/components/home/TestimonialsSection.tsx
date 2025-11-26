"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  program: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    program: "AI4Kids",
    content:
      "My daughter has grown so much since joining AI4Kids! She's now building her own apps and teaching her friends about AI. The instructors are patient, knowledgeable, and truly care about each child's progress.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Participant, Age 14",
    program: "Speech Zone",
    content:
      "Speech Zone helped me overcome my fear of public speaking. Now I confidently present in class and even won a debate competition! The supportive community made all the difference.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Parent",
    program: "GMKR (Game Maker)",
    content:
      "Watching my 6-year-old create his first game was incredible! GMKR makes learning fun and engaging. He's always excited for the next session and talks about game design all week.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Participant, Age 16",
    program: "Entrepreneurs Club",
    content:
      "The Entrepreneurs Club gave me the tools and confidence to start my own small business. The mentorship and practical lessons are invaluable. I'm now running a profitable side hustle!",
    rating: 5,
  },
  {
    id: 5,
    name: "Aisha Okafor",
    role: "Parent",
    program: "Kids Chat Room",
    content:
      "My son has made friends from all over the world through Kids Chat Room! It's amazing to see him learn about different cultures while practicing his communication skills in a safe environment.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Participant, Age 12",
    program: "Passion Lab",
    content:
      "Passion Lab helped me discover my love for robotics! The hands-on projects and encouraging instructors made learning feel like play. I can't wait to see what I'll build next.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-400/20 rounded-full animate-bounce-slow"></div>

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Quote className="h-8 w-8 text-primary-500" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold gradient-text">
              What Families Say
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from parents and participants about their transformative
            experiences with NGKYC
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative min-h-[400px] flex items-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="card bg-white p-8 md:p-12 shadow-xl">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-accent-500 text-accent-500"
                        />
                      )
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="text-center">
                    <h4 className="font-heading font-bold text-xl text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].program}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-primary-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ready to start your own success story?
          </p>
          <a
            href="https://forms.gle/NakPm7YUyQBcH87z9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
