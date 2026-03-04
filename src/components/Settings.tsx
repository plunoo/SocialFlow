import React, { useState } from 'react'
import { User, Bell, Shield, CreditCard, Key, Database } from 'lucide-react'

function Settings() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'database', label: 'Database', icon: Database }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" defaultValue="John" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" defaultValue="john@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input type="text" defaultValue="My Company" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Save Changes
            </button>
          </div>
        )
      
      case 'api':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">API Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gemini API Key</label>
                <input 
                  type="password" 
                  placeholder="Enter your Gemini API key"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
                <p className="text-sm text-gray-500 mt-1">Used for AI content generation</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload-Post API Key</label>
                <input 
                  type="password" 
                  placeholder="Enter your Upload-Post API key"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
                <p className="text-sm text-gray-500 mt-1">For multi-platform posting</p>
              </div>
            </div>
          </div>
        )

      case 'database':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Database Configuration</h3>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-green-800">PostgreSQL Connected</span>
              </div>
              <p className="text-sm text-green-700 mt-1">Database: socialflow (PostgreSQL 15)</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Database Host</label>
                <input type="text" value="postgres" disabled className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Database Name</label>
                <input type="text" value="socialflow" disabled className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50" />
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">{tabs.find(t => t.id === activeTab)?.label}</h3>
            <p className="text-gray-600">Settings for {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} will be available here.</p>
          </div>
        )
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings