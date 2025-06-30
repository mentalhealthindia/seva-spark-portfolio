
import { useState } from 'react';
import { Heart, Users, BookOpen, Gift, Check, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const DonationHub = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const { toast } = useToast();

  const donationTiers = [
    {
      id: 'supporter',
      name: 'Supporter',
      amount: 500,
      icon: Heart,
      color: 'primary',
      benefits: [
        'Monthly newsletter updates',
        'Impact report access',
        'Thank you certificate',
        'Social media recognition'
      ],
      impact: 'Provides educational materials for 2 students'
    },
    {
      id: 'advocate',
      name: 'Advocate',
      amount: 2000,
      icon: Users,
      color: 'secondary',
      benefits: [
        'All Supporter benefits',
        'Quarterly program visits',
        'Direct beneficiary updates',
        'Volunteer opportunities',
        'Advisory committee invitation'
      ],
      impact: 'Sponsors a month of quality education for 5 students'
    },
    {
      id: 'champion',
      name: 'Champion',
      amount: 5000,
      icon: BookOpen,
      color: 'success',
      benefits: [
        'All Advocate benefits',
        'Annual appreciation event invite',
        'Personalized impact stories',
        'Program naming opportunities',
        'Direct communication with leadership'
      ],
      impact: 'Funds complete educational support for 10 students for a month'
    }
  ];

  const quickAmounts = [250, 500, 1000, 2500, 5000, 10000];

  const currentGoal = {
    target: 500000,
    raised: 387500,
    donors: 245,
    daysLeft: 15
  };

  const progressPercentage = (currentGoal.raised / currentGoal.target) * 100;

  const handleDonation = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    // Here you would integrate with payment gateway
    toast({
      title: "Thank You!",
      description: `Your donation of ₹${amount} will make a real difference. Redirecting to payment gateway...`,
    });
    
    console.log('Processing donation:', { amount, tier: selectedTier });
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary bg-primary/5 text-primary';
      case 'secondary':
        return 'border-secondary bg-secondary/5 text-secondary';
      case 'success':
        return 'border-success bg-success/5 text-success';
      default:
        return 'border-primary bg-primary/5 text-primary';
    }
  };

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Support Our Mission
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution directly impacts lives and creates lasting change in our communities. 
            Choose how you'd like to support education and empowerment initiatives.
          </p>
        </div>

        {/* Current Campaign */}
        <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-3xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">
              🎓 Back to School 2024 Campaign
            </h3>
            <p className="font-open-sans text-lg text-gray-700 mb-6">
              Help us provide educational materials, uniforms, and support to 500 underprivileged students
            </p>
            
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-montserrat font-semibold text-gray-800">Progress</span>
                <span className="font-open-sans text-sm text-gray-600">
                  ₹{currentGoal.raised.toLocaleString()} of ₹{currentGoal.target.toLocaleString()}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-3 mb-4" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-montserrat font-bold text-xl text-primary">
                    {Math.round(progressPercentage)}%
                  </div>
                  <div className="font-open-sans text-sm text-gray-600">Funded</div>
                </div>
                <div>
                  <div className="font-montserrat font-bold text-xl text-secondary">
                    {currentGoal.donors}
                  </div>
                  <div className="font-open-sans text-sm text-gray-600">Donors</div>
                </div>
                <div>
                  <div className="font-montserrat font-bold text-xl text-success">
                    {currentGoal.daysLeft}
                  </div>
                  <div className="font-open-sans text-sm text-gray-600">Days Left</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Tiers */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-8">Choose Your Support Level</h3>
            <div className="space-y-6">
              {donationTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`cursor-pointer transition-all duration-300 card-hover ${
                    selectedTier === tier.id ? `ring-2 ${getColorClasses(tier.color)}` : ''
                  }`}
                  onClick={() => {
                    setSelectedTier(tier.id);
                    setSelectedAmount(tier.amount);
                    setCustomAmount('');
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl ${getColorClasses(tier.color)} flex items-center justify-center`}>
                          <tier.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="font-montserrat text-xl">{tier.name}</CardTitle>
                          <CardDescription className="font-open-sans">
                            ₹{tier.amount.toLocaleString()}/month
                          </CardDescription>
                        </div>
                      </div>
                      {selectedTier === tier.id && (
                        <Check className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <p className="font-open-sans text-sm text-gray-600 font-medium mb-2">Impact:</p>
                      <p className="font-open-sans text-sm text-gray-800">{tier.impact}</p>
                    </div>
                    
                    <div>
                      <p className="font-open-sans text-sm text-gray-600 font-medium mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {tier.benefits.map((benefit, index) => (
                          <li key={index} className="font-open-sans text-sm text-gray-700 flex items-center">
                            <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Donation Form */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-8">Make a Donation</h3>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-primary" />
                  Quick Donation
                </CardTitle>
                <CardDescription>
                  Choose an amount or enter a custom donation
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Quick Amount Buttons */}
                <div>
                  <Label className="font-open-sans font-medium mb-3 block">Select Amount</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? 'default' : 'outline'}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                          setSelectedTier(null);
                        }}
                        className="font-open-sans"
                      >
                        ₹{amount.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <Label htmlFor="custom-amount" className="font-open-sans font-medium mb-2 block">
                    Or Enter Custom Amount
                  </Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount in ₹"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                      setSelectedTier(null);
                    }}
                    className="font-open-sans"
                  />
                </div>

                {/* Selected Amount Display */}
                {(selectedAmount || customAmount) && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="font-montserrat font-semibold text-lg text-primary">
                      Donation Amount: ₹{(selectedAmount || parseInt(customAmount)).toLocaleString()}
                    </div>
                    <div className="font-open-sans text-sm text-gray-600 mt-1">
                      This amount will help provide educational support to students in need
                    </div>
                  </div>
                )}

                {/* Donate Button */}
                <Button 
                  onClick={handleDonation}
                  className="w-full bg-secondary hover:bg-secondary/90 text-black font-montserrat font-semibold py-6 text-lg"
                  size="lg"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>

                <p className="font-open-sans text-xs text-gray-500 text-center">
                  🔒 Secure payment processing. Your donation is tax-deductible under Section 80G.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationHub;
