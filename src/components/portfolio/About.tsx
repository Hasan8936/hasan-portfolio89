import { Card, CardContent } from "@/components/ui/card";
import cartoonAvatar from "@/assets/cartoon-avatar.jpg";

const About = () => {
  const stats = [
    { number: "08+", label: "Technical Skills", description: "Programming languages & tools" },
    { number: "20+", label: "Projects Completed", description: "Academic & personal projects" },
    { number: "2+", label: "Years Experience", description: "With programming & tech" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">My Introduction</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-primary-gradient p-1 max-w-md mx-auto">
                <div className="w-full h-full rounded-xl overflow-hidden bg-card relative">
                  <img 
                    src={cartoonAvatar} 
                    alt="Nusaibul Hasan - About"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Coding Animation Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Matrix-style dots */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-accent rounded-full opacity-50 animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-primary rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-accent rounded-full opacity-60 animate-ping" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Floating Code Elements */}
                    <div className="absolute top-2 right-2 text-primary text-xs font-mono opacity-70 animate-bounce">
                      01
                    </div>
                    <div className="absolute bottom-2 left-2 text-primary text-xs font-mono opacity-60 animate-bounce" style={{animationDelay: '0.7s'}}>
                      AI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a passionate EIC STUDENT at Thapar Institute of Engineering and Technology 
                  with extensive knowledge and experience in AI/ML, IoT, and programming. I have a proven 
                  track record of managing complex projects and developing innovative solutions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My expertise spans across machine learning algorithms, IoT sensor integration, and 
                  full-stack development. I'm particularly interested in creating solutions that make 
                  a positive impact on people's lives through technology.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow border-0 bg-card/50">
                    <CardContent className="p-0">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;