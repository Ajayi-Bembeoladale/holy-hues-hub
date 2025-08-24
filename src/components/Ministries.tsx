import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Book, Music, Baby, HelpingHand } from "lucide-react";

const Ministries = () => {
  const ministries = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Adult Ministries",
      description: "Small groups, Bible studies, and fellowship opportunities for adults to grow in faith and build lasting relationships.",
      features: ["Weekly Bible Studies", "Men's & Women's Groups", "Senior Ministry", "Young Adults"]
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Children's Ministry",
      description: "Safe, fun, and engaging programs that help children discover God's love through age-appropriate lessons and activities.",
      features: ["Sunday School", "Children's Church", "VBS", "Kids' Camps"]
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Youth Ministry",
      description: "Dynamic programs for teenagers to grow in faith, build friendships, and discover their purpose in Christ.",
      features: ["Youth Group", "Youth Camps", "Mission Trips", "Mentorship"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Outreach",
      description: "Serving our community through various programs that demonstrate God's love in practical ways.",
      features: ["Food Bank", "Homeless Ministry", "Prison Ministry", "Community Events"]
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Worship Ministry",
      description: "Leading our congregation in meaningful worship through music, vocals, and technical support.",
      features: ["Choir", "Worship Band", "Audio/Visual Team", "Music Lessons"]
    },
    {
      icon: <HelpingHand className="h-8 w-8" />,
      title: "Care Ministry",
      description: "Providing support and care for those going through difficult times or life transitions.",
      features: ["Prayer Team", "Counseling", "Meal Trains", "Hospital Visits"]
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
            Our Ministries
          </h2>
          <p className="text-xl text-church-muted max-w-3xl mx-auto">
            We offer a variety of ministries designed to help you grow in your faith, 
            connect with others, and serve our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministries.map((ministry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-church-accent/20 h-full">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-church-light rounded-full mb-4 group-hover:bg-church-primary group-hover:text-white transition-all duration-300 mx-auto">
                  <div className="text-church-primary group-hover:text-white">
                    {ministry.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-church-text">{ministry.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-church-muted mb-6 leading-relaxed flex-grow">
                  {ministry.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-church-text mb-3">What We Offer:</h4>
                  <ul className="space-y-2">
                    {ministry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-church-muted">
                        <div className="w-2 h-2 bg-church-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-church-primary group-hover:text-white group-hover:border-church-primary transition-all mt-auto"
                >
                  Get Involved
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-church-primary to-church-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Involved?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Whether you're looking to serve, learn, or connect with others, 
            there's a place for you in our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-church-primary hover:bg-white/90"
            >
              <Book className="mr-2 h-5 w-5" />
              Join a Small Group
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <Heart className="mr-2 h-5 w-5" />
              Volunteer Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;