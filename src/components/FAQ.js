'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Download, Shield, Zap, Globe } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

const faqs = [
  {
    category: 'General',
    icon: <HelpCircle className="h-5 w-5" />,
    questions: [
      {
        question: 'What is TikTok Stories Downloader?',
        answer: 'TikTok Stories Downloader is a free online tool that allows you to download TikTok stories in high quality without requiring login or revealing your identity. It works with all types of TikTok stories including photos and videos.'
      },
      {
        question: 'Is this TikTok Stories Downloader really free?',
        answer: 'Yes, absolutely! Our TikTok Stories Downloader is 100% free to use. There are no hidden charges, subscription fees, or download limits. You can download as many stories as you want without any cost.'
      },
      {
        question: 'Do I need to create an account to use this service?',
        answer: 'No account registration is required. You can start downloading TikTok stories immediately without any sign-up process. We respect your privacy and don\'t collect any personal information.'
      }
    ]
  },
  {
    category: 'Technical',
    icon: <Download className="h-5 w-5" />,
    questions: [
      {
        question: 'What quality of stories can I download?',
        answer: 'Our tool downloads TikTok stories in the highest available quality, typically 1080p for video stories and HD for photo stories. The downloaded files maintain the original quality as uploaded by the creator.'
      },
      {
        question: 'Can I download both photo and video stories?',
        answer: 'Yes, our downloader supports both photo stories and video stories. Whether the story contains a single photo, multiple photos, or a video, our tool can handle it seamlessly.'
      },
      {
        question: 'Is there a limit on how many stories I can download?',
        answer: 'No, there are no limits! You can download as many TikTok stories as you want. Our service doesn\'t impose any daily or monthly restrictions on the number of downloads.'
      }
    ]
  },
  {
    category: 'Privacy & Security',
    icon: <Shield className="h-5 w-5" />,
    questions: [
      {
        question: 'Is it safe to use this TikTok Stories Downloader?',
        answer: 'Absolutely! Our downloader is completely safe to use. We use secure HTTPS connections, don\'t store your personal data or download history, and all downloads are processed anonymously without any tracking.'
      },
      {
        question: 'Will the story creator know I downloaded their story?',
        answer: 'No, the story creator will not know that you downloaded their story. Our downloader works anonymously and doesn\'t notify the original creator when you download their content.'
      },
      {
        question: 'What happens to the URLs I paste? Are they stored?',
        answer: 'We don\'t store any TikTok story URLs or your download history. Once the download is complete, the URL is immediately discarded from our servers. We prioritize your privacy and don\'t keep any logs.'
      }
    ]
  },
  {
    category: 'Compatibility',
    icon: <Globe className="h-5 w-5" />,
    questions: [
      {
        question: 'What devices and browsers are supported?',
        answer: 'Our TikTok Stories Downloader works on all devices including Windows, Mac, Android, iOS, and tablets. It\'s compatible with all modern browsers like Chrome, Firefox, Safari, Edge, and Opera.'
      },
      {
        question: 'Does this work with private TikTok accounts?',
        answer: 'Our downloader works with public TikTok stories. For private accounts, you need to follow the account first and have access to their stories. The tool cannot bypass TikTok\'s privacy settings.'
      },
      {
        question: 'Which countries is this service available in?',
        answer: 'Our TikTok Stories Downloader is available worldwide and works in all countries where TikTok is accessible. There are no geographic restrictions on using our service.'
      }
    ]
  }
]

export function FAQ() {
  const [openCategory, setOpenCategory] = useState(0)
  const [openQuestion, setOpenQuestion] = useState({})

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenQuestion(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our TikTok Stories Downloader
          </p>
        </div>

        {/* Quick Tips */}
        <Alert className="mb-12 bg-blue-50 border-blue-200">
          <Zap className="h-4 w-4" />
          <AlertDescription className="text-blue-800">
            <strong>Pro Tip:</strong> You can download unlimited TikTok stories completely free. No registration, watermarks, or quality loss!
          </AlertDescription>
        </Alert>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-purple-600">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                {openCategory === categoryIndex ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openCategory === categoryIndex && (
                <div className="border-t border-gray-200">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`
                    const isOpen = openQuestion[key]
                    
                    return (
                      <div key={questionIndex} className="border-b border-gray-100 last:border-b-0">
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-medium text-gray-900 pr-4">
                              {faq.question}
                            </h4>
                            {isOpen ? (
                              <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Feel free to reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/posts" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Browse Articles
            </a>
            <a 
              href="/resources" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}