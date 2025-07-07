import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-primary-gradient opacity-5" />
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-pulse">
              <img 
                src="/lovable-uploads/e12f37b7-cd1c-4e62-8e0f-20cae018c2dc.png" 
                alt="Nusaibul Hasan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-primary-gradient rounded-full opacity-20 blur-2xl -z-10 animate-pulse" />
            
            {/* Animated Code Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating Code Snippets */}
              <div className="absolute -top-8 -left-8 text-primary text-sm font-mono opacity-70 animate-bounce">
                &lt;/&gt;
              </div>
              <div className="absolute -top-4 -right-12 text-primary text-xs font-mono opacity-60 animate-pulse">
                {'{'}...{'}'}
              </div>
              <div className="absolute -bottom-6 -left-12 text-primary text-sm font-mono opacity-50 animate-bounce" style={{animationDelay: '0.5s'}}>
                [ ]
              </div>
              <div className="absolute -bottom-8 -right-8 text-primary text-xs font-mono opacity-70 animate-pulse" style={{animationDelay: '1s'}}>
                ( )
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-60"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full opacity-50"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '25s'}}>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-40"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Nusaibul Hasan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI/ML & IoT Developer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Highly motivated EIC STUDENT with expertise in Machine Learning, IoT, and programming. 
              Passionate about developing innovative solutions that address real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold rounded-full"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown 
              className="w-6 h-6 text-primary cursor-pointer" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;