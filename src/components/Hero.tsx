import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import churchHero from "@/assets/church-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${churchHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-church-primary/90 to-church-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to<br />
            <span className="bg-gradient-to-r from-white to-church-light bg-clip-text text-transparent">
              Grace Community
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            A place where faith, community, and love come together. 
            Join us in worship, fellowship, and growing closer to God.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-church-primary hover:bg-white/90 text-lg px-8 py-3"
            >
              Plan Your Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              Watch Online
            </Button>
          </div>

          {/* Service Info Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Service Times</h3>
              </div>
              <p className="text-white/90">
                Sunday: 9:00 AM & 11:00 AM<br />
                Wednesday: 7:00 PM
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <MapPin className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">Location</h3>
              </div>
              <p className="text-white/90">
                123 Faith Street<br />
                Community City, CC 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;