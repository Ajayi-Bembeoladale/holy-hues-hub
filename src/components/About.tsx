import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Book, Cross } from "lucide-react";

const About = () => {
  const values = [
      icon: <Heart className="h-8 w-8" />,
      title: "Love",
      description: "We believe in showing God's love through our actions and relationships with one another."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building strong connections and supporting each other through life's journey."
    },
    {
    {
      icon: <Book className="h-8 w-8" />,
      title: "Truth",
      description: "Grounded in biblical truth and committed to sharing God's word with authenticity."
    },
    {
      icon: <Cross className="h-8 w-8" />,
      title: "Faith",
      description: "Deepening our relationship with Jesus Christ and growing in spiritual maturity."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-church-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
            About Our Church
          </h2>
          <p className="text-xl text-church-muted max-w-3xl mx-auto leading-relaxed">
            Grace Community Church has been a beacon of faith and hope in our community for over 30 years. 
            We are a diverse family united by our love for Jesus Christ and our commitment to serving others.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-church-text mb-6">Our Story</h3>
            <p className="text-church-muted mb-6 leading-relaxed">
              Founded in 1993, Grace Community Church began as a small group of families who shared a vision 
              of creating a church where everyone could experience God's love and grace. Today, we've grown 
              into a vibrant community of believers from all walks of life.
            </p>
            <p className="text-church-muted leading-relaxed">
              Our mission is simple: to know Christ and make Him known. We strive to create an environment 
              where people can encounter God, build meaningful relationships, and discover their purpose in life.
            </p>
          </div>
          
          <div className="bg-church-accent rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-church-text mb-6">Our Mission</h3>
            <blockquote className="text-lg text-church-text italic mb-4">
              "To be a community where people can encounter God's love, grow in faith, 
              and serve others with purpose and passion."
            </blockquote>
            <p className="text-church-muted">
              We believe that every person has inherent worth and dignity, and we welcome 
              all who seek to grow in their relationship with God.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-church-light rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <div className="text-church-primary group-hover:text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-church-text mb-4">{value.title}</h4>
                <p className="text-church-muted leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;