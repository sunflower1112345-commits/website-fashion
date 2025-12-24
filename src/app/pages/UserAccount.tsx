import { useState } from 'react';
import { User } from 'lucide-react';
import { motion } from 'motion/react';

export const UserAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'orders', label: 'Orders' },
    { id: 'addresses', label: 'Addresses' },
    { id: 'settings', label: 'Settings' },
  ];

  const mockOrders = [
    {
      id: '#12345',
      date: '2024-12-20',
      status: 'Delivered',
      total: 159.99,
      items: 3,
    },
    {
      id: '#12344',
      date: '2024-12-15',
      status: 'In Transit',
      total: 89.99,
      items: 2,
    },
    {
      id: '#12343',
      date: '2024-12-10',
      status: 'Processing',
      total: 129.99,
      items: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-600">john.doe@email.com</p>
                    </div>
                  </div>
                </div>

                <nav className="p-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-8"
              >
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">First Name</label>
                          <input
                            type="text"
                            defaultValue="John"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Last Name</label>
                          <input
                            type="text"
                            defaultValue="Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="john.doe@email.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Order History</h2>
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div
                          key={order.id}
                          className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold text-lg">Order {order.id}</h3>
                              <p className="text-sm text-gray-600">{order.date}</p>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                order.status === 'Delivered'
                                  ? 'bg-green-100 text-green-700'
                                  : order.status === 'In Transit'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-600">
                              {order.items} {order.items === 1 ? 'item' : 'items'}
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-bold">${order.total}</span>
                              <button className="text-sm text-blue-600 hover:text-blue-800">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'addresses' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Saved Addresses</h2>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">Home</h3>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Default</span>
                        </div>
                        <p className="text-gray-600">
                          123 Main Street<br />
                          Apt 4B<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                        <div className="flex gap-4 mt-4">
                          <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                          <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
                        </div>
                      </div>
                      <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-black transition-colors">
                        + Add New Address
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-4">Change Password</h3>
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Current Password
                            </label>
                            <input
                              type="password"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              New Password
                            </label>
                            <input
                              type="password"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                          <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                          >
                            Update Password
                          </button>
                        </form>
                      </div>

                      <div className="border-t pt-6">
                        <h3 className="font-semibold mb-4">Email Preferences</h3>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="text-sm">Promotional emails</span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="text-sm">Order updates</span>
                          </label>
                          <label className="flex items-center gap-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-sm">Product recommendations</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
