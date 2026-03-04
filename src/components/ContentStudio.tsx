import React, { useState } from 'react'
import { Sparkles, Image, Calendar, Send } from 'lucide-react'

function ContentStudio() {
  const [content, setContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateContent = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setContent('🌟 Exciting news! Our latest product launch is here and we couldn\'t be more thrilled to share it with you. Innovation meets simplicity in this game-changing solution. What do you think? #Innovation #ProductLaunch #Excited')
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Studio</h1>
        <p className="text-gray-600">Create and schedule engaging content with AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content Creator */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Content Generator</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Topic</label>
              <input
                type="text"
                placeholder="e.g., Product launch, company news, industry insights..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option>Professional</option>
                <option>Casual</option>
                <option>Friendly</option>
                <option>Excited</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
              <div className="flex space-x-2">
                {['Instagram', 'Twitter', 'LinkedIn'].map((platform) => (
                  <button key={platform} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={generateContent}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
          >
            <Sparkles className="h-5 w-5" />
            <span>{isGenerating ? 'Generating...' : 'Generate Content'}</span>
          </button>
        </div>

        {/* Content Preview */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Content Preview</h3>
          
          <div className="border border-gray-200 rounded-xl p-4 mb-6 min-h-[200px]">
            {content ? (
              <div>
                <p className="text-gray-900 whitespace-pre-wrap">{content}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>156 likes</span>
                    <span>23 comments</span>
                    <span>12 shares</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                  <Image className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Generated content will appear here</p>
                </div>
              </div>
            )}
          </div>

          {content && (
            <div className="flex space-x-3">
              <button className="flex-1 bg-gray-100 text-gray-700 p-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Schedule</span>
              </button>
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Post Now</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentStudio