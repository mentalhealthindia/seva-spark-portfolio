
import { useState } from 'react';
import { MapPin, Mail, Send, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [language, setLanguage] = useState('english');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    type: 'inquiry'
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: [
        'Building No./Flat No.: 08',
        'Name Of Premises/Building: Ahmamau',
        'Road/Street: Arjunganj',
        'City: Lucknow, Uttar Pradesh',
        'PIN Code: 226002'
      ],
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['help.gopalwelfare@gmail.com'],
      color: 'text-secondary'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Donation Support',
    'Volunteer Opportunity',
    'Program Information',
    'Partnership Proposal',
    'Media Inquiry',
    'Complaint/Feedback'
  ];

  const content = {
    english: {
      title: 'Get in Touch',
      subtitle: 'Have questions or want to get involved? We\'d love to hear from you. Reach out to us and let\'s create positive change together.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        type: 'Inquiry Type',
        submit: 'Send Message',
        placeholders: {
          name: 'Enter your full name',
          email: 'Enter your email address',
          phone: 'Enter your phone number',
          message: 'Tell us how we can help you or how you\'d like to get involved...'
        }
      },
      types: {
        inquiry: 'General Inquiry',
        volunteer: 'Volunteer Application',
        donation: 'Donation Inquiry',
        partnership: 'Partnership Proposal'
      }
    },
    hindi: {
      title: 'संपर्क में रहें',
      subtitle: 'क्या आपके कोई प्रश्न हैं या आप शामिल होना चाहते हैं? हम आपसे सुनना पसंद करेंगे। हमसे संपर्क करें और आइए मिलकर सकारात्मक बदलाव लाएं।',
      form: {
        name: 'पूरा नाम',
        email: 'ईमेल पता',
        phone: 'फ़ोन नंबर',
        subject: 'विषय',
        message: 'आपका संदेश',
        type: 'पूछताछ का प्रकार',
        submit: 'संदेश भेजें',
        placeholders: {
          name: 'अपना पूरा नाम दर्ज करें',
          email: 'अपना ईमेल पता दर्ज करें',
          phone: 'अपना फ़ोन नंबर दर्ज करें',
          message: 'हमें बताएं कि हम आपकी कैसे मदद कर सकते हैं या आप कैसे शामिल होना चाहते हैं...'
        }
      },
      types: {
        inquiry: 'सामान्य पूछताछ',
        volunteer: 'स्वयंसेवक आवेदन',
        donation: 'दान पूछताछ',
        partnership: 'साझेदारी प्रस्ताव'
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'english' ? "Missing Information" : "जानकारी गुम है",
        description: language === 'english' 
          ? "Please fill in all required fields."
          : "कृपया सभी आवश्यक फ़ील्ड भरें।",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - You'll need to set up your EmailJS account
      const serviceId = 'service_qka0qkq'; // Replace with your EmailJS service ID
      const templateId = 'template_vel3g58'; // Replace with your EmailJS template ID
      const publicKey = 'X-H6CJ6Z3vVTY1E7S'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        inquiry_type: currentContent.types[formData.type as keyof typeof currentContent.types],
        message: formData.message,
        to_email: 'abhilashvarshney3@gmail.com',
        reply_to: formData.email,
      };

      // For now, we'll simulate the email sending since EmailJS requires setup
      // Uncomment the line below once you have EmailJS configured
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      console.log('Email would be sent to: help.gopalwelfare@gmail.com');
      console.log('Template params:', templateParams);
      
      toast({
        title: language === 'english' ? "Message Sent!" : "संदेश भेजा गया!",
        description: language === 'english' 
          ? "Thank you for reaching out. We'll get back to you within 24 hours."
          : "संपर्क करने के लिए धन्यवाद। हम 24 घंटे के भीतर आपसे संपर्क करेंगे।",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
        type: 'inquiry'
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: language === 'english' ? "Error" : "त्रुटि",
        description: language === 'english' 
          ? "Failed to send message. Please try again or contact us directly."
          : "संदेश भेजने में विफल। कृपया पुनः प्रयास करें या सीधे हमसे संपर्क करें।",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800">
              {currentContent.title}
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'english' ? 'hindi' : 'english')}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span className="font-open-sans">
                {language === 'english' ? 'हिंदी' : 'English'}
              </span>
            </Button>
          </div>
          <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="font-montserrat font-bold text-2xl mb-8 text-gray-800">
              {language === 'english' ? 'Contact Information' : 'संपर्क जानकारी'}
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${info.color} bg-current/10 flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-2">
                          {info.title}
                        </h4>
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="font-open-sans text-sm text-gray-600 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="mt-8 overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="font-montserrat font-semibold text-gray-700">
                      {language === 'english' ? 'Interactive Map' : 'इंटरैक्टिव मैप'}
                    </p>
                    <p className="font-open-sans text-sm text-gray-600 mt-2">
                      {language === 'english' 
                        ? 'Ahmamau, Arjunganj, Lucknow' 
                        : 'अहमामऊ, अर्जुनगंज, लखनऊ'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl">
                  {language === 'english' ? 'Send us a Message' : 'हमें संदेश भेजें'}
                </CardTitle>
                <CardDescription className="font-open-sans">
                  {language === 'english' 
                    ? 'Fill out the form below and we\'ll get back to you within 24 hours.'
                    : 'नीचे दिया गया फॉर्म भरें और हम 24 घंटे के भीतर आपसे संपर्क करेंगे।'}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-open-sans font-medium">
                        {currentContent.form.name} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={currentContent.form.placeholders.name}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="font-open-sans"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-open-sans font-medium">
                        {currentContent.form.email} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={currentContent.form.placeholders.email}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="font-open-sans"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="font-open-sans font-medium">
                        {currentContent.form.phone}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={currentContent.form.placeholders.phone}
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="font-open-sans"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="type" className="font-open-sans font-medium">
                        {currentContent.form.type}
                      </Label>
                      <Select 
                        value={formData.type} 
                        onValueChange={(value) => handleInputChange('type', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="font-open-sans">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(currentContent.types).map(([key, value]) => (
                            <SelectItem key={key} value={key} className="font-open-sans">
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-open-sans font-medium">
                      {currentContent.form.subject} *
                    </Label>
                    <Select 
                      value={formData.subject} 
                      onValueChange={(value) => handleInputChange('subject', value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="font-open-sans">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject} className="font-open-sans">
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-open-sans font-medium">
                      {currentContent.form.message} *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={currentContent.form.placeholders.message}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="font-open-sans resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 font-montserrat font-semibold py-6 text-lg"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        {language === 'english' ? 'Sending...' : 'भेजा जा रहा है...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {currentContent.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
