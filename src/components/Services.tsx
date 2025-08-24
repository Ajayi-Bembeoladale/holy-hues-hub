import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Music } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Music className="h-6 w-6" />,
      title: "Sunday Morning Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for inspiring worship, biblical teaching, and fellowship. Our services include contemporary music, prayer, and practical messages for daily life.",
      audience: "All Ages Welcome"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Wednesday Bible Study",
      time: "7:00 PM",
      description: "Dive deeper into God's word with our interactive Bible study. A time for learning, discussion, and growing together in faith.",
      audience: "Adults & Teens"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Youth Group",
      time: "Friday 6:30 PM",
      description: "A fun and engaging environment for teenagers to connect with God and each other through games, worship, and relevant teaching.",
      audience: "Ages 12-18"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Children's Ministry",
      time: "Sunday 9:00 AM & 11:00 AM",
      description: "Age-appropriate lessons, activities, and fun that help children learn about God's love in an engaging and safe environment.",
      audience: "Ages 3-12"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
            Service Times
          </h2>
          <p className="text-xl text-church-muted max-w-3xl mx-auto">
            We offer various opportunities throughout the week for worship, learning, and fellowship. 
            Everyone is welcome to join us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-church-accent/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-church-light rounded-lg text-church-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-church-text">{service.title}</CardTitle>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-church-muted">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{service.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{service.audience}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-church-muted leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-church-light to-church-accent rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-church-text mb-4">First Time Visiting?</h3>
          <p className="text-lg text-church-muted mb-6 max-w-2xl mx-auto">
            We know visiting a new church can feel overwhelming. Our friendly welcome team will be happy 
            to help you find your way and answer any questions you might have.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-church-text mb-2">What to Expect</h4>
              <p className="text-sm text-church-muted">Casual dress, friendly people, and a warm atmosphere where you can be yourself.</p>
            </div>
            <div>
              <h4 className="font-semibold text-church-text mb-2">Kids Welcome</h4>
              <p className="text-sm text-church-muted">Safe, fun children's programs available during all services for ages 3-12.</p>
            </div>
            <div>
              <h4 className="font-semibold text-church-text mb-2">Free Coffee</h4>
              <p className="text-sm text-church-muted">Complimentary coffee, tea, and light refreshments before and after services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;