import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Anomaly Detection in IoT Healthcare",
      description: "Developed an ML model to identify anomalies in patient data with 92% accuracy. Implemented Explainable AI (XAI) for transparent diagnostics and optimized IoT sensor data processing pipeline.",
      technologies: ["Machine Learning", "Python", "IoT", "XAI", "Healthcare"],
      achievements: ["92% accuracy", "Real-time processing", "Transparent diagnostics"],
      category: "AI/ML"
    },
    {
      title: "Lane-Following Autonomous Buggy",
      description: "Built Arduino-based autonomous vehicle using IR/ultrasonic sensors for environmental sensing. Programmed lane-detection algorithm in C with 85% path accuracy.",
      technologies: ["Arduino", "C++", "IR Sensors", "PCB Design", "Eagle"],
      achievements: ["85% path accuracy", "Custom PCB design", "Real-time navigation"],
      category: "IoT/Robotics"
    },
    {
      title: "COVID-19 Relief Fund Platform",
      description: "Coordinated CSR response platform to provide financial assistance, medical supplies, and food distribution. Partnered with healthcare providers and local governments.",
      technologies: ["Project Management", "Coordination", "Community Impact"],
      achievements: ["1000+ families helped", "Multi-stakeholder coordination", "Emergency response"],
      category: "Social Impact"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-primary text-primary-foreground";
      case "IoT/Robotics":
        return "bg-success text-white";
      case "Social Impact":
        return "bg-info text-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">My Recent Work</p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="h-2 bg-primary-gradient" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;