'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@bizheal/ui'
import { featureTabs, getFeatureIcon } from './tabs.config'

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(featureTabs[0].id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const activeTabData = featureTabs.find(tab => tab.id === activeTab) || featureTabs[0]

  const handleKeyDown = (event: React.KeyboardEvent, currentTabId: string) => {
    const currentIndex = featureTabs.findIndex(tab => tab.id === currentTabId)
    let newIndex = currentIndex

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        newIndex = currentIndex > 0 ? currentIndex - 1 : featureTabs.length - 1
        break
      case 'ArrowDown':
        event.preventDefault()
        newIndex = currentIndex < featureTabs.length - 1 ? currentIndex + 1 : 0
        break
      case 'Home':
        event.preventDefault()
        newIndex = 0
        break
      case 'End':
        event.preventDefault()
        newIndex = featureTabs.length - 1
        break
      default:
        return
    }

    const newTabId = featureTabs[newIndex].id
    setActiveTab(newTabId)
    tabRefs.current[newTabId]?.focus()
  }

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    tabRefs.current[tabId]?.focus()
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades que Fazem a Diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todas as ferramentas que você precisa para gerir e otimizar seu negócio em uma só plataforma.
          </p>
        </div>

        {/* Tabs Layout */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 sm:min-h-[400px] lg:min-h-[600px]">
            
            {/* Tab Navigation - Left Side */}
            <div className="lg:col-span-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
              <div 
                role="tablist" 
                aria-orientation="vertical"
                className="space-y-2"
              >
                {featureTabs.map((tab) => (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[tab.id] = el
                    }}
                    onClick={() => handleTabClick(tab.id)}
                    onKeyDown={(e) => handleKeyDown(e, tab.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-white shadow-md border-2 border-blue-100 text-blue-900'
                        : 'hover:bg-white/50 text-gray-700 hover:text-gray-900'
                    }`}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls="main-tabpanel"
                    id={`tab-${tab.id}`}
                    tabIndex={activeTab === tab.id ? 0 : -1}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeTab === tab.id 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {getFeatureIcon(tab.icon)}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">
                          {tab.label}
                        </div>
                        <div className={`text-xs ${
                          activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {tab.eyebrow}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content - Right Side */}
            <div className="lg:col-span-8 p-8 lg:p-12">
              <div
                role="tabpanel"
                id="main-tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="h-full flex flex-col justify-center"
                tabIndex={0}
              >
                {/* Eyebrow */}
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600">
                      {getFeatureIcon(activeTabData.icon)}
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
                    {activeTabData.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {activeTabData.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {activeTabData.description}
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeTabData.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                    asChild
                  >
                    <a href={activeTabData.cta.href}>
                      {activeTabData.cta.label}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Enhancement - Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-pulse pointer-events-none"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-100 rounded-full opacity-30 animate-pulse delay-1000 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}