import React from 'react'
import { TrendingUp, Users, Eye, Heart, MessageCircle, Calendar } from 'lucide-react'

function Dashboard() {
  const stats = [
    { label: 'Total Followers', value: '24.8K', change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Post Views', value: '156K', change: '+8%', icon: Eye, color: 'text-green-600' },
    { label: 'Engagement Rate', value: '4.2%', change: '+15%', icon: Heart, color: 'text-pink-600' },
    { label: 'Comments', value: '892', change: '+23%', icon: MessageCircle, color: 'text-purple-600' }
  ]

  const recentPosts = [
    { platform: 'Instagram', content: 'Summer vibes are here! ☀️', engagement: '156 likes', time: '2 hours ago' },
    { platform: 'Twitter', content: 'Just shipped a new feature...', engagement: '89 retweets', time: '4 hours ago' },
    { platform: 'LinkedIn', content: 'Thoughts on AI in marketing...', engagement: '45 comments', time: '6 hours ago' }
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your social media performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 ${stat.color} bg-opacity-10 rounded-xl`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change}</p>
              </div>
            </div>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Posts</h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {post.platform[0]}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{post.content}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>{post.engagement}</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Generate AI Content</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 p-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Post</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 p-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Connect Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard