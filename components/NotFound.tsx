import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  Heart,
  BookOpen,
  GraduationCap,
  Calculator,
  Globe,
  FlaskConical,
  Users,
  PenTool,
  Bookmark,
  StickyNote,
} from "lucide-react";

const NotFounb = () => {
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<
    Array<{ id: number; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    setMounted(true);

    // Generate floating educational elements with notes theme
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
    }));
    setFloatingElements(elements);
  }, []);

  const educationalIcons = [
    BookOpen,
    GraduationCap,
    Calculator,
    Globe,
    FlaskConical,
    Users,
    PenTool,
    Bookmark,
    StickyNote,
  ];

  return (
    <div className="min-h-screen pt-4 bg-gradient-to-br  from-black via-black to-black relative overflow-hidden transition-all duration-700">
      {/* Theme Toggle - Fixed Position */}

      {/* Notebook Paper Background Pattern */}
      <div className="absolute inset-0 notebook-lines notebook-margin paper-texture opacity-10"></div>

      {/* Floating Background Elements - Notes Themed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => {
          const IconComponent =
            educationalIcons[element.id % educationalIcons.length];
          return (
            <div
              key={element.id}
              className="absolute opacity-5 dark:opacity-[0.02]"
              style={{
                left: `${(element.id * 19) % 100}%`,
                top: `${(element.id * 23) % 100}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            >
              <IconComponent
                size={24 + (element.id % 4) * 12}
                className="animate-float"
              />
            </div>
          );
        })}
      </div>

      {/* Spiral Notebook Holes - Hidden on mobile */}
      <div className="absolute left-8 sm:left-16 top-0 bottom-0 w-4 sm:w-8 flex-col items-center justify-start pt-12 space-y-6 sm:space-y-8 pointer-events-none hidden sm:flex">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 shadow-inner"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:ml-16 md:ml-24">
        <div
          className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Handwritten Style 404 */}
          <div className="relative mb-8 sm:mb-12">
            {/* Paper Note Background */}
            <div className="absolute -inset-2 sm:-inset-4 bg-yellow-100 dark:bg-yellow-900/20 transform rotate-1 rounded-lg shadow-lg border border-yellow-200 dark:border-yellow-800/30"></div>
            <div className="absolute -inset-2 sm:-inset-4 bg-white dark:bg-gray-800/50 transform -rotate-1 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"></div>

            <div className="relative bg-white dark:bg-black/90 p-4 sm:p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              {/* Handwritten style 404 */}
              <div className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 dark:from-blue-400 dark:via-purple-400 dark:to-red-400 leading-none tracking-wide transform -rotate-2 animate-fade-in flex items-center justify-center">
                4
                <span
                  className="inline-block animate-bounce mx-1 sm:mx-2 text-4xl sm:text-6xl md:text-7xl opacity-100"
                  style={{ animationDelay: "0.2s" }}
                >
                  0
                </span>
                4
              </div>

              {/* Underline doodle */}
              <div className="flex justify-center mt-2">
                <svg
                  width="150"
                  height="15"
                  className="animate-scale-in sm:w-[200px] sm:h-[20px]"
                  style={{ animationDelay: "0.8s" }}
                >
                  <path
                    d="M 20 10 Q 50 5 100 10 T 180 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-blue-500 dark:text-blue-400"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Sticky note style message */}
              <div className="mt-4 sm:mt-6 relative">
                <div className="bg-yellow-200 dark:bg-yellow-900/40 p-3 sm:p-4 rounded transform rotate-1 shadow-md border-l-4 border-yellow-400">
                  <p className="text-sm sm:text-lg font-handwriting text-gray-800 dark:text-gray-200 italic">
                    &quot;This page went to study for exams and never came
                    back!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Message - Notebook Style */}
          <div
            className={`mb-8 sm:mb-12 transform transition-all duration-700 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="bg-white dark:bg-black/80 p-4 sm:p-8 rounded-lg shadow-lg border-l-4 border-blue-500 backdrop-blur-sm">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4 leading-tight">
                Page Not Found in Your Notes
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Looks like this page got lost in your notebook! 📚
                <br className="hidden sm:block" />
                Don&apos;t worry, our comprehensive IGCSE revision notes are
                still here to help you achieve those A* grades.
              </p>
            </div>
          </div>

          {/* Study Stats Cards - Notebook Pages Style */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto transform transition-all duration-700 delay-500 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="bg-white dark:bg-black/80 backdrop-blur-lg p-4 sm:p-6 rounded-lg border-l-4 border-blue-500 shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl notebook-lines">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                Study Notes
              </div>
              <div className="mt-2 h-px bg-blue-200 dark:bg-blue-800"></div>
            </div>

            <div className="bg-white dark:bg-black/80 backdrop-blur-lg p-4 sm:p-6 rounded-lg border-l-4 border-purple-500 shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl notebook-lines">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 dark:text-purple-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                25+
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                IGCSE Subjects
              </div>
              <div className="mt-2 h-px bg-purple-200 dark:bg-purple-800"></div>
            </div>

            <div className="bg-white dark:bg-black/80 backdrop-blur-lg p-4 sm:p-6 rounded-lg border-l-4 border-green-500 shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl notebook-lines sm:col-span-2 md:col-span-1">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 dark:text-green-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                50k+
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                Students Helped
              </div>
              <div className="mt-2 h-px bg-green-200 dark:bg-green-800"></div>
            </div>
          </div>

          {/* Action Buttons - Notebook Style */}
          <div
            className={`flex flex-col gap-4 justify-center items-center transform transition-all duration-700 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Button
              onClick={() => (window.location.href = "/")}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[220px] border-2 border-transparent hover:border-blue-300"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Back to Study Notes
            </Button>

            <Button
              onClick={() =>
                window.open("https://donate.example.com", "_blank")
              }
              size="lg"
              variant="outline"
              className="group border-2 border-pink-500/70 hover:border-pink-500 text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold bg-white/80 dark:bg-black/80 backdrop-blur-sm hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[220px] shadow-lg hover:shadow-xl"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300 text-pink-500" />
              Support Our Notes
            </Button>
          </div>

          {/* Educational Quote - Sticky Note Style */}
          <div
            className={`mt-8 sm:mt-12 transform transition-all duration-700 delay-900 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="relative max-w-sm sm:max-w-lg mx-auto">
              {/* Sticky note background */}
              <div className="bg-yellow-200 dark:bg-yellow-900/30 p-4 sm:p-6 rounded-lg shadow-lg transform rotate-1 border border-yellow-300 dark:border-yellow-700">
                <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 dark:bg-yellow-600 rounded-full shadow-inner"></div>
                <p className="text-slate-700 dark:text-slate-300 italic text-sm sm:text-lg leading-relaxed font-medium">
                  &quot;Education is the most powerful weapon which you can use
                  to change the world... and ace your IGCSEs!
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-3 text-right">
                  - Nelson Mandela ✏️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Notebook Elements - Adjusted for mobile */}
      <div
        className="absolute top-16 sm:top-20 right-4 sm:right-10 animate-float text-2xl sm:text-4xl"
        style={{ animationDelay: "1s" }}
      >
        📓
      </div>
      <div
        className="absolute bottom-20 sm:bottom-32 left-16 sm:left-32 animate-float text-xl sm:text-3xl"
        style={{ animationDelay: "3s" }}
      >
        ✏️
      </div>
      <div
        className="absolute top-1/3 right-1/4 animate-float text-xl sm:text-3xl"
        style={{ animationDelay: "2s" }}
      >
        📐
      </div>
      <div
        className="absolute bottom-1/4 right-1/3 animate-float text-xl sm:text-3xl"
        style={{ animationDelay: "4s" }}
      >
        🗂️
      </div>
    </div>
  );
};

export default NotFounb;
