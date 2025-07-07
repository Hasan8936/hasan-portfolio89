import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "Technologies & Frameworks",
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "IoT Development", level: 85 },
        { name: "Sensor Integration", level: 82 },
        { name: "Arduino/Embedded", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Eagle PCB Design", level: 75 },
        { name: "Data Analysis", level: 85 },
        { name: "Git/Version Control", level: 80 },
        { name: "Linux/Unix", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">My Technical Stack</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-center text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Certified Data Scientist",
                "Certified IoT Developer", 
                "Certified Python Programmer"
              ].map((cert, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">✓</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{cert}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;