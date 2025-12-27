import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import {
  Plane,
  Cloud,
  MapPin,
  Ticket,
  Calendar,
  Clock,
  Music,
  Pause,
  Play,
  Mail,
  Star,
  Heart,
} from 'lucide-react';

// ============================================
// AIRMAIL ENVELOPE COMPONENT - The Initial Hook
// ============================================
interface EnvelopeProps {
  onOpen: () => void;
}

const AirmailEnvelope = ({ onOpen }: EnvelopeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: 'linear-gradient(180deg, #87CEEB 0%, #B8E4F9 30%, #E8F4FD 60%, #FFFFFF 100%)',
      }}
    >
      {/* Animated Clouds Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${-20 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Cloud
              className="text-white/70"
              style={{
                width: `${60 + i * 20}px`,
                height: `${40 + i * 15}px`,
              }}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      {/* Flying Plane Animation */}
      <motion.div
        className="absolute"
        initial={{ x: '-100%', y: '20%' }}
        animate={{ x: '120%', y: '-10%' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Plane className="w-12 h-12 text-sky-600 -rotate-12" />
      </motion.div>

      {/* Main Airmail Envelope */}
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        {/* Envelope Body */}
        <div className="relative w-80 h-52 md:w-96 md:h-64">
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white rounded-lg shadow-2xl">
            {/* Par Avion Border - Red and Blue stripes */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              {/* Top border */}
              <div className="absolute top-0 left-0 right-0 h-4 flex">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-600'}`}
                    style={{ transform: 'skewX(-15deg)' }}
                  />
                ))}
              </div>
              {/* Bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-4 flex">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${i % 2 === 0 ? 'bg-blue-600' : 'bg-red-500'}`}
                    style={{ transform: 'skewX(-15deg)' }}
                  />
                ))}
              </div>
              {/* Left border */}
              <div className="absolute top-4 bottom-4 left-0 w-4 flex flex-col">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-600'}`}
                    style={{ transform: 'skewY(-15deg)' }}
                  />
                ))}
              </div>
              {/* Right border */}
              <div className="absolute top-4 bottom-4 right-0 w-4 flex flex-col">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${i % 2 === 0 ? 'bg-blue-600' : 'bg-red-500'}`}
                    style={{ transform: 'skewY(-15deg)' }}
                  />
                ))}
              </div>
            </div>

            {/* Envelope Center Content */}
            <div className="absolute inset-6 flex flex-col items-center justify-center">
              {/* PAR AVION stamp */}
              <div className="bg-blue-600 text-white px-4 py-1 rounded text-sm font-bold tracking-wider mb-4 shadow-md">
                ✈ PAR AVION
              </div>

              {/* Stamp */}
              <motion.div
                className="w-16 h-20 bg-gradient-to-br from-sky-100 to-sky-200 border-2 border-dashed border-sky-400 rounded flex flex-col items-center justify-center"
                animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Plane className="w-8 h-8 text-sky-600 mb-1" />
                <span className="text-xs font-bold text-sky-700">2026</span>
              </motion.div>
            </div>
          </div>

          {/* Envelope Flap */}
          <motion.div
            className="absolute -top-1 left-0 right-0 h-28 md:h-32 origin-bottom"
            animate={isHovered ? { rotateX: -30 } : { rotateX: 0 }}
            transition={{ duration: 0.3 }}
            style={{ perspective: '1000px' }}
          >
            <svg viewBox="0 0 400 130" className="w-full h-full">
              <defs>
                <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E5E7EB" />
                  <stop offset="100%" stopColor="#F9FAFB" />
                </linearGradient>
              </defs>
              <path
                d="M0,130 L200,30 L400,130 Z"
                fill="url(#flapGradient)"
                stroke="#D1D5DB"
                strokeWidth="2"
              />
              {/* Red/Blue edge on flap */}
              <path d="M0,130 L200,30 L400,130" fill="none" stroke="#EF4444" strokeWidth="4" />
            </svg>
          </motion.div>
        </div>

        {/* Call to action text */}
        <motion.p
          className="mt-8 text-center text-lg md:text-xl font-bold text-sky-800"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ✈️ Click to Open Your Invitation! ✈️
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// HERO SECTION - Captain Lucas
// ============================================
const HeroSection = () => {
  return (
    <motion.section
      className="py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Cloud Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/40"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
          >
            <Cloud className="w-24 h-16" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Pilot Badge */}
        <motion.div
          className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', delay: 0.3 }}
        >
          {/* Badge Circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full shadow-xl border-4 border-white">
            {/* Wings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3/4 w-16 h-8 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full transform -rotate-12 shadow-md" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3/4 w-16 h-8 bg-gradient-to-l from-amber-300 to-amber-400 rounded-full transform rotate-12 shadow-md" />
            </div>

            {/* Photo placeholder */}
            <div className="absolute inset-4 bg-white rounded-full overflow-hidden border-2 border-sky-200">
              <img
                src="/assets/lucas-pilot.jpg"
                alt="Captain Lucas"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-100 to-sky-200">
                      <span class="text-5xl">👨‍✈️</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Propeller decoration */}
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-6 h-1 bg-gray-600 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-sky-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Captain Lucas
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-sky-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          is Turning <span className="text-amber-500">ONE!</span>
        </motion.h2>

        {/* Decorative plane */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Cloud className="w-8 h-8 text-sky-300" fill="currentColor" />
          <Plane className="w-8 h-8 text-sky-500" />
          <Cloud className="w-8 h-8 text-sky-300" fill="currentColor" />
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// BOARDING PASS - Event Details
// ============================================
const BoardingPass = () => {
  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top stripe */}
          <div className="h-3 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400" />

          <div className="flex flex-col md:flex-row">
            {/* Left side - Main ticket */}
            <div className="flex-1 p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Flight</p>
                    <p className="font-bold text-sky-800">LUCAS-01</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Class</p>
                  <p className="font-bold text-amber-500">First Class ⭐</p>
                </div>
              </div>

              {/* Route */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-sky-800">HOME</p>
                  <p className="text-xs text-gray-500">Departure</p>
                </div>
                <div className="flex-1 mx-4 flex items-center">
                  <div className="flex-1 h-px bg-gray-300" />
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Plane className="w-6 h-6 text-sky-500 mx-2" />
                  </motion.div>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-sky-800">PARTY</p>
                  <p className="text-xs text-gray-500">Destination</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-sky-50 p-3 rounded-lg">
                  <Calendar className="w-5 h-5 text-sky-500" />
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-bold text-sky-800">Jan 20, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-sky-50 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-sky-500" />
                  <div>
                    <p className="text-xs text-gray-500">Boarding</p>
                    <p className="font-bold text-sky-800">3:00 PM</p>
                  </div>
                </div>
                <div className="col-span-2 flex items-center gap-3 bg-sky-50 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-sky-500" />
                  <div>
                    <p className="text-xs text-gray-500">Gate / Location</p>
                    <p className="font-bold text-sky-800">Pangasinan City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dotted separator */}
            <div className="hidden md:flex flex-col items-center py-8">
              <div className="w-8 h-8 bg-gray-100 rounded-full -mt-12" />
              <div className="flex-1 border-l-2 border-dashed border-gray-300" />
              <div className="w-8 h-8 bg-gray-100 rounded-full -mb-12" />
            </div>

            {/* Right side - Stub */}
            <div className="md:w-32 bg-gray-50 p-4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-dashed border-gray-300">
              <Ticket className="w-8 h-8 text-sky-500 mb-2" />
              <p className="text-xs text-gray-500 text-center">Boarding Pass</p>
              <p className="font-bold text-sky-800 text-lg">VIP</p>
              <div className="mt-4 w-full">
                {/* Barcode effect */}
                <div className="flex justify-center gap-px">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-800"
                      style={{
                        width: `${2 + Math.random() * 2}px`,
                        height: '30px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stripe */}
          <div className="h-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// MESSAGE SECTION
// ============================================
const MessageSection = () => {
  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-sky-100 text-center relative overflow-hidden"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          {/* Cloud decorations */}
          <div className="absolute top-4 left-4 text-sky-200">
            <Cloud className="w-12 h-8" fill="currentColor" />
          </div>
          <div className="absolute bottom-4 right-4 text-sky-200">
            <Cloud className="w-16 h-10" fill="currentColor" />
          </div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Plane className="w-16 h-16 mx-auto mb-6 text-sky-500" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">
            Come Fly With Us! ✈️
          </h2>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              <span className="font-bold text-sky-700">Pack your bags</span> and prepare for
              takeoff as we celebrate our little captain's first journey around the sun!
            </p>
            <p>
              Join us for an adventure filled with{' '}
              <span className="font-bold text-amber-500">fun, laughter, and cake</span> as Captain
              Lucas takes his first flight into toddlerhood!
            </p>
            <p className="text-xl font-bold text-sky-800 pt-4">
              Ready for Takeoff? 🛫
            </p>
          </div>

          {/* Decorative stars */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// PHOTO GRID - 12 Months in the Sky
// ============================================
const PhotoGrid = () => {
  const months = [
    { month: 'Month 1', icon: '👶' },
    { month: 'Month 2', icon: '🍼' },
    { month: 'Month 3', icon: '🌟' },
    { month: 'Month 4', icon: '✈️' },
    { month: 'Month 5', icon: '☁️' },
    { month: 'Month 6', icon: '🎈' },
    { month: 'Month 7', icon: '🌈' },
    { month: 'Month 8', icon: '☀️' },
    { month: 'Month 9', icon: '🎀' },
    { month: 'Month 10', icon: '🧸' },
    { month: 'Month 11', icon: '🎂' },
    { month: 'Month 12', icon: '🎉' },
  ];

  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-sky-800 mb-4"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          ☁️ 12 Months in the Sky ☁️
        </motion.h2>
        <p className="text-center text-gray-600 mb-12">
          Captain Lucas's Flight Log
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {months.map((item, index) => (
            <motion.div
              key={item.month}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <motion.div
                className="aspect-square bg-gradient-to-br from-sky-50 to-white rounded-2xl overflow-hidden border-2 border-sky-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Placeholder image */}
                <img
                  src={`/assets/month${index + 1}.jpg`}
                  alt={item.month}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100">
                  <Cloud className="w-8 h-8 text-sky-300 mb-2" fill="currentColor" />
                  <span className="text-4xl mb-2">{item.icon}</span>
                </div>

                {/* Month overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-800/90 to-transparent p-3">
                  <p className="text-white font-bold text-center text-sm">{item.month}</p>
                </div>

                {/* Corner cloud */}
                <motion.div
                  className="absolute -top-2 -right-2 text-white"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                >
                  <Cloud className="w-8 h-6 drop-shadow-md" fill="currentColor" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// ============================================
// RSVP SECTION - Book Your Seat
// ============================================
const RSVPSection = () => {
  return (
    <motion.section
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          {/* Background clouds */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(4)].map((_, i) => (
              <Cloud
                key={i}
                className="absolute text-white"
                style={{
                  left: `${i * 25}%`,
                  top: `${20 + (i % 2) * 40}%`,
                  width: '80px',
                  height: '50px',
                }}
                fill="currentColor"
              />
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Plane className="w-16 h-16 mx-auto mb-6 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your Seat! 🎫
          </h2>

          <p className="text-sky-100 text-lg mb-8">
            Don't miss this flight! Let us know if you'll be joining our journey.
          </p>

          <motion.a
            href="mailto:rsvp@example.com?subject=RSVP for Captain Lucas's 1st Birthday - Booking Confirmed!"
            className="inline-flex items-center gap-3 bg-white text-sky-600 font-bold text-xl px-8 py-4 rounded-full shadow-lg hover:bg-sky-50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Ticket className="w-6 h-6" />
            Book Your Ticket
          </motion.a>

          <p className="text-sky-200 text-sm mt-6">
            Or contact us at <span className="font-bold text-white">+63 XXX XXX XXXX</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ============================================
// AUDIO PLAYER - Cockpit Style
// ============================================
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
    >
      <audio ref={audioRef} src="/assets/background-music.mp3" loop />

      {/* Cockpit toggle switch style */}
      <div className="relative">
        <motion.button
          onClick={togglePlay}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all ${isPlaying
              ? 'bg-gradient-to-br from-green-400 to-green-600'
              : 'bg-gradient-to-br from-gray-600 to-gray-800'
            }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            boxShadow: isPlaying
              ? '0 0 20px rgba(74, 222, 128, 0.5), inset 0 2px 4px rgba(255,255,255,0.3)'
              : '0 4px 15px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.1)',
          }}
        >
          {/* Inner ring */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${isPlaying ? 'bg-green-500' : 'bg-gray-700'
              }`}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </div>
        </motion.button>

        {/* Label */}
        <motion.span
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Music className="w-3 h-3 inline mr-1" />
          {isPlaying ? 'Playing' : 'Music'}
        </motion.span>
      </div>
    </motion.div>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = () => {
  return (
    <motion.footer
      className="py-12 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center gap-3 mb-6">
          {['☁️', '✈️', '🌟', '☁️', '🎈'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>

        <p className="text-gray-600 text-lg mb-2">
          Thank you for being part of our flight crew!
        </p>
        <p className="text-gray-500">
          With love,{' '}
          <span className="font-bold text-sky-700">The Gabbrione Family</span> 💙
        </p>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Plane className="w-4 h-4" />
            <span>Captain Lucas's 1st Birthday • January 20, 2026</span>
            <Cloud className="w-4 h-4" fill="currentColor" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(180deg, #87CEEB 0%, #B8E4F9 20%, #E8F4FD 50%, #F0F9FF 100%)',
      }}
    >
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={300}
          colors={['#87CEEB', '#60A5FA', '#FBBF24', '#F472B6', '#34D399', '#FFFFFF']}
        />
      )}

      {/* Envelope (Initial State) */}
      <AnimatePresence>
        {!isEnvelopeOpen && <AirmailEnvelope onOpen={handleEnvelopeOpen} />}
      </AnimatePresence>

      {/* Main Invitation Content */}
      <AnimatePresence>
        {isEnvelopeOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Floating clouds background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/30"
                  style={{
                    left: `${i * 20}%`,
                    top: `${10 + i * 15}%`,
                  }}
                  animate={{
                    x: [0, 50, 0],
                  }}
                  transition={{
                    duration: 30 + i * 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Cloud
                    style={{ width: `${100 + i * 30}px`, height: `${60 + i * 20}px` }}
                    fill="currentColor"
                  />
                </motion.div>
              ))}
            </div>

            {/* Main Content */}
            <main className="relative z-10">
              <HeroSection />
              <BoardingPass />
              <MessageSection />
              <PhotoGrid />
              <RSVPSection />
              <Footer />
            </main>

            {/* Audio Player */}
            <AudioPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
