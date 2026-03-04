import React from 'react'
import { TrendingUp, TrendingDown, Eye, Users, Heart, MessageCircle } from 'lucide-react'

function Analytics() {
  const metrics = [
    { label: 'Total Reach', value: '156.2K', change: '+12%', trending: 'up' },
    { label: 'Engagement Rate', value: '4.2%', change: '+8%', trending: 'up' },
    { label: 'New Followers', value: '+324', change: '-3%', trending: 'down' },
    { label: 'Post Interactions', value: '2.1K', change: '+15%', trending: 'up' }
  ]

  const topPosts = [
    { content: 'Summer product launch announcement', platform: 'Instagram', engagement: 245, reach: '12.5K' },
    { content: 'Behind the scenes team photo', platform: 'LinkedIn', engagement: 189, reach: '8.2K' },
    { content: 'Industry insights thread', platform: 'Twitter', engagement: 156, reach: '6.8K' }
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Track your social media performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                metric.trending === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trending === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                <span>{metric.change}</span>
              </div>
            </div>
            <p className="text-gray-600 font-medium">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Engagement Over Time</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Interactive chart would be displayed here</p>
              <p className="text-sm">Showing engagement trends over the last 30 days</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Platform Performance</h3>
          <div className="space-y-4">
            {[
              { platform: 'Instagram', engagement: 85, followers: '12.5K', color: 'bg-pink-500' },
              { platform: 'Twitter', engagement: 72, followers: '8.2K', color: 'bg-blue-500' },
              { platform: 'LinkedIn', engagement: 68, followers: '3.1K', color: 'bg-blue-700' },
              { platform: 'Facebook', engagement: 45, followers: '15.8K', color: 'bg-blue-600' }
            ].map((platform, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${platform.color}`} />
                  <span className="font-medium text-gray-900">{platform.platform}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{platform.engagement}%</div>
                  <div className="text-sm text-gray-600">{platform.followers} followers</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Performing Posts</h3>
        <div className="space-y-4">
          {topPosts.map((post, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {post.platform[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.content}</p>
                  <p className="text-sm text-gray-600">{post.platform}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.reach}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{post.engagement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analytics