'use client'

import { useState } from 'react'
import { Download, Share2, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function DiscordStoriesDownloader() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [downloadedStory, setDownloadedStory] = useState(null)

  const features = [
    {
      icon: <Download className="h-6 w-6" />,
      title: 'HD Quality Downloads',
      description: 'Download Discord stories in high definition quality'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Anonymous & Private',
      description: 'Download stories without revealing your identity'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Lightning Fast',
      description: 'Quick downloads with our optimized servers'
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: 'No Login Required',
      description: 'Download stories without any account registration'
    }
  ]

  const handleDownload = async () => {
    if (!url.trim()) {
      setError('Please enter a Discord story URL')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock response
      setDownloadedStory({
        id: 'mock-story-id',
        url: url,
        downloadUrl: 'https://example.com/story.mp4',
        thumbnail: 'https://example.com/thumbnail.jpg',
        username: 'mockuser',
        timestamp: new Date().toISOString()
      })
    } catch (err) {
      setError('Failed to download story. Please check the URL and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClear = () => {
    setUrl('')
    setError('')
    setDownloadedStory(null)
  }

  return (
    <div className="relative">
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discord Stories Downloader
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Download Discord stories anonymously and for free in HD quality
            </p>

            {/* Download Input Section */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Paste Discord Story URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-white/90 text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/50"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={handleDownload}
                    disabled={isLoading || !url.trim()}
                    className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-6"
                  >
                    {isLoading ? 'Downloading...' : 'Download'}
                  </Button>
                  <Button
                    onClick={handleClear}
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Clear
                  </Button>
                </div>
              </div>

              {error && (
                <Alert className="mt-4 bg-red-500/20 border-red-400 text-white">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Discord Stories Downloader?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The most reliable and feature-rich Discord story downloading tool available online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Download Discord Stories
            </h2>
            <p className="text-lg text-gray-600">
              Simple 3-step process to download any Discord story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Copy Story URL</h3>
              <p className="text-gray-600">Open the Discord story and copy its URL from the share menu</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paste URL</h3>
              <p className="text-gray-600">Paste the copied URL into the input field above</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Story</h3>
              <p className="text-gray-600">Click the download button and save your story instantly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Result */}
      {downloadedStory && (
        <div className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Download Ready!</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700">Story from @{downloadedStory.username}</p>
                  <p className="text-sm text-gray-500">Ready to download in HD quality</p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}