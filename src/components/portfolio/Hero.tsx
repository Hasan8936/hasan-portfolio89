import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";

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
          {/* Profile Image - Bigger and with talking animation */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-6 border-primary shadow-2xl animate-talk-bounce relative">
              <img 
                src="/lovable-uploads/e12f37b7-cd1c-4e62-8e0f-20cae018c2dc.png" 
                alt="Nusaibul Hasan"
                className="w-full h-full object-cover"
              />
              
              {/* Speech indicator overlay */}
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-speech-pulse"></div>
            </div>
            
            {/* Enhanced background glow */}
            <div className="absolute -inset-8 bg-primary-gradient rounded-full opacity-30 blur-3xl -z-10 animate-pulse" />
            
            {/* Speech bubbles */}
            <div className="absolute -top-4 -right-8 animate-float-speech">
              <div className="bg-yellow-accent text-warm-brown px-3 py-2 rounded-lg text-sm font-medium shadow-lg relative">
                Hello! 👋
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-accent transform translate-y-full"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-8 animate-float-speech" style={{animationDelay: '1s'}}>
              <div className="bg-orange-medium text-warm-brown px-3 py-2 rounded-lg text-sm font-medium shadow-lg relative">
                Let's build! 🚀
                <div className="absolute top-0 right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-orange-medium transform -translate-y-full"></div>
              </div>
            </div>
            
            {/* Enhanced Animated Code Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating Code Snippets with orange theme */}
              <div className="absolute -top-12 -left-12 text-primary text-lg font-mono font-bold opacity-80 animate-bounce">
                &lt;/&gt;
              </div>
              <div className="absolute -top-8 -right-16 text-yellow-accent text-base font-mono opacity-70 animate-pulse">
                {'{'}AI{'}'}
              </div>
              <div className="absolute -bottom-10 -left-16 text-primary text-lg font-mono opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}>
                [ ML ]
              </div>
              <div className="absolute -bottom-12 -right-12 text-orange-medium text-base font-mono opacity-80 animate-pulse" style={{animationDelay: '1s'}}>
                IoT( )
              </div>
              
              {/* Enhanced Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full opacity-70 shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 w-2 h-2 bg-yellow-accent rounded-full opacity-60"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '25s'}}>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-medium rounded-full opacity-50"></div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute -top-6 right-8 animate-ping">
                <Sparkles className="w-4 h-4 text-yellow-accent" />
              </div>
              <div className="absolute -bottom-8 left-12 animate-ping" style={{animationDelay: '1.5s'}}>
                <Sparkles className="w-3 h-3 text-primary" />
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