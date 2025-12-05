'use client'

import { ArrowRight, Download, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-yellow-300 fill-current" />
            <Star className="h-6 w-6 text-yellow-300 fill-current" />
            <Star className="h-6 w-6 text-yellow-300 fill-current" />
            <Star className="h-6 w-6 text-yellow-300 fill-current" />
            <Star className="h-6 w-6 text-yellow-300 fill-current" />
          </div>
          <p className="text-xl text-purple-100">Trusted by 1M+ users worldwide</p>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Start Downloading Discord Stories Now
        </h2>
        <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
          Join millions of users who trust our free Discord stories downloader.
          No registration, no watermarks, no limits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 text-lg"
            onClick={() => document.getElementById('download-input')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="h-5 w-5 mr-2" />
            Download Your First Story
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>100% Free</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>No Login Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>HD Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Anonymous & Safe</span>
          </div>
        </div>
      </div>
    </section>
  )
}