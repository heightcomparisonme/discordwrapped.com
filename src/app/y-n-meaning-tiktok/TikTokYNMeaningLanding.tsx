'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BookOpen,
  Users,
  Sparkles,
  RefreshCw,
  Heart,
  Play,
  PenTool,
  Lightbulb,
  Target,
  TrendingUp,
  Star,
  CheckCircle2,
  Video,
  MessageCircle,
  Share2,
  Eye,
  Award,
  Clock,
  Zap,
  Film,
  Music,
  Drama,
  Gamepad2
} from 'lucide-react'

interface StoryIdea {
  id: string
  title: string
  genre: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tags: string[]
}

interface TrendingExample {
  id: string
  title: string
  description: string
  views: string
  likes: string
  format: string
}

const storyIdeas: StoryIdea[] = [
  {
    id: '1',
    title: 'Coffee Shop Meet Cute',
    genre: 'Romance',
    description: 'Y/N bumps into someone at their favorite coffee shop, leading to an unexpected connection.',
    difficulty: 'Beginner',
    tags: [' romance', ' slice of life', ' meet cute']
  },
  {
    id: '2',
    title: 'Midnight Adventure',
    genre: 'Adventure',
    description: 'Y/N discovers a mysterious map that leads to a hidden treasure in their hometown.',
    difficulty: 'Intermediate',
    tags: [' adventure', ' mystery', ' friendship']
  },
  {
    id: '3',
    title: 'First Day Magic',
    genre: 'Fantasy',
    description: 'On Y/N\'s first day at a new school, they discover they have supernatural powers.',
    difficulty: 'Advanced',
    tags: [' fantasy', ' magic', ' coming of age']
  },
  {
    id: '4',
    title: 'Time Travel Mix-Up',
    genre: 'Sci-Fi',
    description: 'Y/N accidentally travels back in time and must navigate the past while finding their way home.',
    difficulty: 'Intermediate',
    tags: [' sci-fi', ' time travel', ' comedy']
  },
  {
    id: '5',
    title: 'Hidden Talent',
    genre: 'Drama',
    description: 'Y/N discovers a hidden musical talent that changes their life and relationships.',
    difficulty: 'Beginner',
    tags: [' drama', ' music', ' self-discovery']
  },
  {
    id: '6',
    title: 'Haunted House Mystery',
    genre: 'Horror',
    description: 'Y/N moves into a supposedly haunted house and must uncover the truth behind the paranormal events.',
    difficulty: 'Advanced',
    tags: [' horror', ' mystery', ' thriller']
  }
]

const trendingExamples: TrendingExample[] = [
  {
    id: '1',
    title: 'When Y/N Meets Their Celebrity Crush',
    description: 'Popular romantic scenario where viewers imagine meeting their favorite celebrity.',
    views: '2.3M',
    likes: '450K',
    format: 'Romantic POV'
  },
  {
    id: '2',
    title: 'Y/N Saves the Day',
    description: 'Action-oriented storytelling where the viewer becomes the hero in dramatic situations.',
    views: '1.8M',
    likes: '320K',
    format: 'Action Adventure'
  },
  {
    id: '3',
    title: 'Y/N\'s Dream Come True',
    description: 'Fantasy scenarios where viewers experience their ultimate dreams and wishes.',
    views: '3.1M',
    likes: '580K',
    format: 'Fantasy Wish'
  },
  {
    id: '4',
    title: 'Y/N in a K-Drama',
    description: 'Discord versions of popular K-drama scenarios with the viewer as the main character.',
    views: '2.7M',
    likes: '490K',
    format: 'K-Drama Style'
  }
]

const features = [
  {
    icon: <Users className="h-6 w-6 text-purple-500" />,
    title: "Immersive Experience",
    description: "Y/N creates a personal connection between content and viewer by making them the main character."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
    title: "Creative Storytelling",
    description: "Unlimited narrative possibilities with viewers imagining themselves in any scenario."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    title: "Highly Engaging",
    description: "Content using Y/N format receives significantly higher engagement and shares."
  },
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Emotional Connection",
    description: "Creates immediate emotional investment as viewers become part of the story."
  },
  {
    icon: <Target className="h-6 w-6 text-yellow-500" />,
    title: "Broad Appeal",
    description: "Works across multiple demographics and content types for maximum reach."
  },
  {
    icon: <Zap className="h-6 w-6 text-indigo-500" />,
    title: "Easy to Create",
    description: "Simple format that creators can easily implement in their content strategy."
  }
]

export function DiscordYNMeaningLanding() {
  const [yourName, setYourName] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [generatedStory, setGeneratedStory] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const genres = [
    { id: 'all', name: 'All Genres', icon: <Star className="h-4 w-4" />, color: 'bg-gray-500' },
    { id: 'romance', name: 'Romance', icon: <Heart className="h-4 w-4" />, color: 'bg-pink-500' },
    { id: 'adventure', name: 'Adventure', icon: <Gamepad2 className="h-4 w-4" />, color: 'bg-green-500' },
    { id: 'fantasy', name: 'Fantasy', icon: <Sparkles className="h-4 w-4" />, color: 'bg-purple-500' },
    { id: 'drama', name: 'Drama', icon: <Drama className="h-4 w-4" />, color: 'bg-red-500' },
    { id: 'comedy', name: 'Comedy', icon: <Lightbulb className="h-4 w-4" />, color: 'bg-yellow-500' }
  ]

  const generateStory = useCallback(async () => {
    if (!yourName.trim()) {
      alert('Please enter your name to generate a personalized story')
      return
    }

    setIsGenerating(true)

    setTimeout(() => {
      const templates = [
        `${yourName} walked into their favorite coffee shop, not knowing that this ordinary day would change everything. As they waited for their order, they caught someone\'s eye across the room...`,
        `When ${yourName} received the mysterious letter, they never expected it would lead them on an adventure they\'d never forget. The map inside showed a path to something incredible...`,
        `${yourName} woke up feeling different somehow. Little did they know, today they would discover a power they never knew they had...`,
        `It was ${yourName}\'s first day at the new job/school, and they were determined to make a good impression. But fate had other plans...`,
        `When ${yourName} found the old diary in the attic, they didn\'t expect the stories inside to be about them. But as they read deeper, everything started to make sense...`
      ]

      const randomStory = templates[Math.floor(Math.random() * templates.length)]
      setGeneratedStory(randomStory)
      setIsGenerating(false)
    }, 2000)
  }, [yourName])

  const getDifficultyColor = (difficulty: StoryIdea['difficulty']) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredStoryIdeas = selectedGenre === 'all'
    ? storyIdeas
    : storyIdeas.filter(idea => idea.tags.some(tag => tag.includes(selectedGenre)))

  const faqs = [
    {
      question: "What does Y/N mean on Discord?",
      answer: "Y/N stands for 'Your Name' and is used as a placeholder in storytelling content where viewers can insert their own name. It originated from fanfiction communities and has become popular on Discord for creating immersive, personalized content."
    },
    {
      question: "How do you pronounce Y/N?",
      answer: "Y/N is typically read as 'Why-en' or readers mentally substitute their actual name when they see it. The creator says 'Your Name' when speaking, and viewers imagine their own name in that context."
    },
    {
      question: "Why is Y/N so popular on Discord?",
      answer: "Y/N is popular because it creates an immediate personal connection between the content and viewer. It transforms passive viewing into an active, immersive experience where the viewer becomes the main character of the story."
    },
    {
      question: "Where did the Y/N format originate?",
      answer: "The Y/N format originated in fanfiction communities on platforms like Wattpad and Archive of Our Own (AO3) before migrating to Discord and other social media platforms."
    },
    {
      question: "What types of content work best with Y/N?",
      answer: "Y/N works especially well for romance scenarios, dramatic situations, character interactions, fantasy adventures, and any content where emotional connection or personal experience is important."
    },
    {
      question: "How can I create Y/N content on Discord?",
      answer: "To create Y/N content, write your story or script using 'Y/N' instead of a specific character name. Consider your audience's demographics and create scenarios that would appeal to them as the main character."
    },
    {
      question: "Is Y/N only used on Discord?",
      answer: "No, Y/N is used across multiple platforms including Instagram Reels, YouTube Shorts, and traditional fanfiction. However, it has become particularly popular on Discord due to the platform's storytelling format."
    },
    {
      question: "Can Y/N content be educational?",
      answer: "Yes! Y/N can be used in educational content to help learners imagine themselves in different scenarios, such as historical events, scientific concepts, or professional situations."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-purple-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What Does <span className="text-purple-500">Y/N</span> Mean on Discord?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the meaning behind Discord's most popular storytelling format.
              Learn how Y/N (Your Name) creates immersive content and how to use it
              in your own Discord videos for maximum engagement.
            </p>
          </div>

          {/* Quick Explanation */}
          <Card className="max-w-3xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">The Simple Answer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-purple-600">
                  Y/N = <span className="text-pink-500">Your Name</span>
                </div>
                <p className="text-lg text-gray-700">
                  When you see "Y/N" in Discord content, it's a placeholder for <strong>your name</strong>.
                  Creators use this format so viewers can imagine themselves as the main character
                  in the story, creating a personalized and immersive experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Story Generator */}
          <Card className="max-w-2xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Create Your Y/N Story</CardTitle>
              <CardDescription className="text-center">
                Enter your name to generate a personalized story opening using the Y/N format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  className="pl-12 pr-4 py-3"
                />
              </div>
              <Button
                onClick={generateStory}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Generating Story...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <PenTool className="h-5 w-5" />
                    <span>Generate My Story</span>
                  </div>
                )}
              </Button>

              {generatedStory && (
                <div className="p-6 bg-purple-50 rounded-lg text-center">
                  <Star className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <div className="text-lg text-gray-800 leading-relaxed">
                    "{generatedStory}"
                  </div>
                  <p className="text-sm text-purple-600 mt-4">
                    This is how Y/N content works - you just became the main character!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story Ideas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Y/N Story Ideas
            </h2>
            <p className="text-xl text-gray-600">
              Get inspired with these Y/N storytelling concepts for your Discord content
            </p>
          </div>

          {/* Genre Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {genres.map((genre) => (
              <Button
                key={genre.id}
                variant={selectedGenre === genre.id ? "default" : "outline"}
                className={`${selectedGenre === genre.id ? genre.color : ""}`}
                onClick={() => setSelectedGenre(genre.id)}
              >
                <span className="flex items-center space-x-2">
                  {genre.icon}
                  <span>{genre.name}</span>
                </span>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStoryIdeas.map((idea) => (
              <Card key={idea.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{idea.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(idea.difficulty)}`}>
                      {idea.difficulty}
                    </span>
                  </div>
                  <CardDescription className="text-sm text-purple-600">
                    {idea.genre}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{idea.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Y/N Format Works So Well
            </h2>
            <p className="text-xl text-gray-600">
              The psychology behind the success of Your Name storytelling
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Examples */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Y/N Examples
            </h2>
            <p className="text-xl text-gray-600">
              Popular Y/N content formats that are currently going viral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingExamples.map((example) => (
              <Card key={example.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{example.views}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{example.likes}</span>
                          </span>
                        </div>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                          {example.format}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Y/N on Discord
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Y/N Content?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start using the Y/N format to create engaging, personalized content
            that connects with your audience on a deeper level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-semibold px-8"
            >
              Generate Story Ideas
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-500 font-semibold px-8"
              onClick={() => window.open('https://www.Discord.com', '_blank')}
            >
              Create on Discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
