"use client"

import { useRouter } from "next/navigation"
import * as LucideIcons from "lucide-react"

export default function Page() {
  const router = useRouter();
  
  const departments = [
    { 
      name: "Applied Physics and Materials Engineering", 
      path: "/Department/Phy", 
      icon: "Atom"
    },
    { 
      name: "Architecture & Planning", 
      path: "/Department/Archi", 
      icon: "Building2"
    },
    { 
      name: "Chemical Science and Technology", 
      path: "/Department/Chem", 
      icon: "FlaskConical"
    },
    { 
      name: "Civil Engineering", 
      path: "/Department/CE", 
      icon: "Construction"
    },
    { 
      name: "Computer Science and Engineering", 
      path: "/Department/CSE", 
      icon: "Cpu"
    },
    { 
      name: "Electrical Engineering", 
      path: "/Department/EE", 
      icon: "Zap"
    },
    { 
      name: "Electronics And Communication Engineering", 
      path: "/Department/ECE", 
      icon: "Satellite"
    },
    { 
      name: "Humanities & Social Sciences", 
      path: "/Department/Humanities/syllabus", 
      icon: "BookOpen"
    },
    { 
      name: "Mathematics and Computing Technology", 
      path: "/Department/Math", 
      icon: "Calculator"
    },
    { 
      name: "Mechanical Engineering", 
      path: "/Department/ME", 
      icon: "Cogs"
    },
    { 
      name: "Mechatronics & Automation Engineering", 
      path: "/Department/Mechatronics", 
      icon: "CircuitBoard"
    }
  ];

  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent size={48} className="text-red-800" /> : <LucideIcons.GraduationCap size={48} className="text-red-800" />;
  };

  return (
    <div className="min-h-screen py-10 px-4" >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <LucideIcons.GraduationCap size={48} className="text-red-900" />
          </div>
          <h1 className="text-4xl font-bold text-red-900 mb-2">Curriculum Offered by NIT Patna</h1>
        
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div 
              key={index}
              onClick={() => {
                if (dept.name === "Humanities & Social Sciences") {
                  router.push(dept.path);
                } else {
                  router.push(`${dept.path}/acadProgram`);
                }
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-red-100 group"
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors">
                  {renderIcon(dept.icon)}
                </div>
                <h3 className="font-semibold text-red-900 text-lg mb-2 group-hover:text-red-700 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-red-600 text-sm mt-auto">
                 View Curriculum &rarr;
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}