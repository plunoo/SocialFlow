import React from 'react'
import { ArrowRight, Sparkles, Zap, BarChart3, Users, Bot, Check } from 'lucide-react'

interface LandingPageProps {
  onLogin: () => void
}

function LandingPage({ onLogin }: LandingPageProps) {
  const features = [
    {
      icon: Bot,
      title: "AI Content Generation",
      description: "Create engaging posts with advanced AI that understands your brand voice"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Schedule and publish across all platforms with intelligent timing"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track performance and optimize your content strategy with detailed metrics"
    },
    {
      icon: Users,
      title: "Multi-Platform",
      description: "Manage Instagram, Twitter, LinkedIn, and more from one dashboard"
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "$19",
      features: ["5 Social Accounts", "100 AI Posts/month", "Basic Analytics", "Email Support"]
    },
    {
      name: "Professional",
      price: "$49", 
      features: ["15 Social Accounts", "500 AI Posts/month", "Advanced Analytics", "Priority Support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      features: ["Unlimited Accounts", "Unlimited AI Posts", "Custom Analytics", "24/7 Support"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SocialFlow AI</h1>
                <p className="text-sm text-gray-600">Effortless Social Growth</p>
              </div>
            </div>
            <button
              onClick={onLogin}
              className="btn-primary flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">
              Transform Your Social Media with AI
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create, schedule, and optimize your social media content across all platforms 
              with the power of artificial intelligence
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={onLogin} className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you grow your social media presence effortlessly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h3>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  {plan.price}<span className="text-lg text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onLogin}
                  className={plan.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold">SocialFlow AI</h1>
          </div>
          <p className="text-gray-400 mb-4">
            Effortless social media growth powered by artificial intelligence
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 SocialFlow AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage