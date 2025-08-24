import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      category: "Worship",
      description: "Join us for a special Easter service celebrating the resurrection of Jesus Christ. Special music, communion, and a powerful message of hope.",
      attendees: "All Ages"
    },
    {
      title: "Community Food Drive",
      date: "April 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Church Parking Lot",
      category: "Outreach",
      description: "Help us collect food donations for local families in need. Volunteers needed to sort and distribute donations.",
      attendees: "Families Welcome"
    },
    {
      title: "Marriage Enrichment Retreat",
      date: "April 20-21, 2024",
      time: "Friday 7 PM - Saturday 6 PM",
      location: "Mountain View Retreat Center",
      category: "Ministry",
      description: "A weekend retreat focused on strengthening marriages through biblical principles, workshops, and fellowship.",
      attendees: "Married Couples"
    },
    {
      title: "Youth Spring Camp",
      date: "May 3-5, 2024",
      time: "Friday - Sunday",
      location: "Camp Wildwood",
      category: "Youth",
      description: "Three days of outdoor activities, worship, teaching, and fun for our teenage youth group members.",
      attendees: "Ages 12-18"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Worship": return "bg-church-primary text-white";
      case "Outreach": return "bg-green-500 text-white";
      case "Ministry": return "bg-purple-500 text-white";
      case "Youth": return "bg-orange-500 text-white";
      default: return "bg-church-accent text-church-text";
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-church-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-church-muted max-w-3xl mx-auto">
            Stay connected with our community through special services, fellowship events, 
            and opportunities to serve together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-church-accent/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-church-muted mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-church-muted">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-church-text group-hover:text-church-primary transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-church-muted mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-church-muted">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-church-muted">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-church-primary group-hover:text-white group-hover:border-church-primary transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 border border-church-accent/20">
          <h3 className="text-2xl font-bold text-church-text mb-4">Stay Updated</h3>
          <p className="text-church-muted mb-6 max-w-2xl mx-auto">
            Don't miss out on upcoming events and special announcements. 
            Subscribe to our newsletter or follow us on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-church-primary hover:bg-church-primary/90">
              Subscribe to Newsletter
            </Button>
            <Button variant="outline">
              View Full Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;