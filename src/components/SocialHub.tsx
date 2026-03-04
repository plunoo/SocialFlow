import React from 'react'
import { Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react'

function SocialHub() {
  const accounts = [
    { platform: 'Instagram', username: '@mycompany', status: 'connected', followers: '12.5K' },
    { platform: 'Twitter', username: '@mycompany', status: 'connected', followers: '8.2K' },
    { platform: 'LinkedIn', username: 'My Company', status: 'pending', followers: '3.1K' },
    { platform: 'Facebook', username: 'My Company Page', status: 'disconnected', followers: '15.8K' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'disconnected': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return CheckCircle
      case 'pending': return Clock
      case 'disconnected': return AlertCircle
      default: return AlertCircle
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Social Hub</h1>
        <p className="text-gray-600">Manage all your social media accounts in one place</p>
      </div>

      {/* Add Account Button */}
      <div className="mb-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Connect New Account</span>
        </button>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => {
          const StatusIcon = getStatusIcon(account.status)
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {account.platform[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{account.platform}</h3>
                    <p className="text-sm text-gray-600">{account.username}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(account.status)}`}>
                  <StatusIcon className="h-3 w-3" />
                  <span className="capitalize">{account.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Followers</span>
                  <span className="font-semibold text-gray-900">{account.followers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Posts This Month</span>
                  <span className="font-semibold text-gray-900">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Engagement Rate</span>
                  <span className="font-semibold text-gray-900">4.2%</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                {account.status === 'connected' ? (
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Manage Account
                  </button>
                ) : account.status === 'pending' ? (
                  <button className="w-full bg-yellow-100 text-yellow-700 py-2 rounded-lg font-medium">
                    Authorization Pending
                  </button>
                ) : (
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Reconnect Account
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Posted to Instagram', time: '2 hours ago', status: 'success' },
            { action: 'Scheduled Twitter post', time: '4 hours ago', status: 'scheduled' },
            { action: 'LinkedIn connection failed', time: '6 hours ago', status: 'error' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'scheduled' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span className="text-gray-900 font-medium">{activity.action}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialHub