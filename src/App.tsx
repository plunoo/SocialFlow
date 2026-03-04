import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import ContentStudio from './components/ContentStudio'
import SocialHub from './components/SocialHub'
import Analytics from './components/Analytics'
import Settings from './components/Settings'
import { 
  Home, 
  PenTool, 
  Users, 
  BarChart3, 
  Settings as SettingsIcon,
  LogOut,
  Sparkles
} from 'lucide-react'

type AppView = 'landing' | 'dashboard' | 'content' | 'social' | 'analytics' | 'settings'

function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
    setCurrentView('dashboard')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentView('landing')
  }

  if (!isAuthenticated) {
    return <LandingPage onLogin={handleLogin} />
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'content', label: 'Content Studio', icon: PenTool },
    { id: 'social', label: 'Social Hub', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ]

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />
      case 'content': return <ContentStudio />
      case 'social': return <SocialHub />
      case 'analytics': return <Analytics />
      case 'settings': return <Settings />
      default: return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SocialFlow AI</h1>
              <p className="text-sm text-gray-500">Effortless Growth</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as AppView)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                currentView === item.id ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-600' : 'text-gray-700'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-64 p-6 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderCurrentView()}
      </div>
    </div>
  )
}

export default App