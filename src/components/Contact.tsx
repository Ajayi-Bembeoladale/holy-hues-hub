import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-church-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-church-muted max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, need prayer, 
            or want to get involved, don't hesitate to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-church-text mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-church-light rounded-lg">
                    <MapPin className="h-6 w-6 text-church-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-church-text mb-1">Address</h4>
                    <p className="text-church-muted">
                      123 Faith Street<br />
                      Community City, CC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-church-light rounded-lg">
                    <Phone className="h-6 w-6 text-church-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-church-text mb-1">Phone</h4>
                    <p className="text-church-muted">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-church-light rounded-lg">
                    <Mail className="h-6 w-6 text-church-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-church-text mb-1">Email</h4>
                    <p className="text-church-muted">info@gracecommunity.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-church-light rounded-lg">
                    <Clock className="h-6 w-6 text-church-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-church-text mb-1">Office Hours</h4>
                    <p className="text-church-muted">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-church-text mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </Button>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </Button>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Youtube className="h-5 w-5 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-church-accent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-church-primary mx-auto mb-4" />
                    <p className="text-church-muted">Interactive map would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <p className="text-church-muted">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-church-text mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-church-text mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-church-text mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-church-text mb-2 block">
                  Phone (Optional)
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="text-sm font-medium text-church-text mb-2 block">
                  Subject
                </label>
                <Input placeholder="What's this about?" />
              </div>

              <div>
                <label className="text-sm font-medium text-church-text mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us how we can help you..." 
                  className="min-h-[120px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="prayer" className="rounded" />
                <label htmlFor="prayer" className="text-sm text-church-muted">
                  I would like prayer for this request
                </label>
              </div>

              <Button className="w-full bg-church-primary hover:bg-church-primary/90" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-church-accent/20">
          <h3 className="text-2xl font-bold text-church-text mb-4">
            Ready to Visit?
          </h3>
          <p className="text-church-muted mb-6 max-w-2xl mx-auto">
            We can't wait to meet you! Join us this Sunday for worship, fellowship, 
            and to experience God's love in our community.
          </p>
          <Button size="lg" className="bg-church-primary hover:bg-church-primary/90">
            Plan Your First Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;