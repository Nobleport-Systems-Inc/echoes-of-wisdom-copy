import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Coins, Rocket, FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function TokenLaunch() {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const toggleCheck = (itemId) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const checklistSections = [
    {
      title: "Pre-Launch Preparation",
      items: [
        { id: "whitepaper", text: "Complete NBPT whitepaper and tokenomics" },
        { id: "smart-contract", text: "Deploy and verify smart contract" },
        { id: "audit", text: "Complete security audit" },
        { id: "legal", text: "Legal compliance review" },
        { id: "website", text: "Launch official website" }
      ]
    },
    {
      title: "DEX Setup & Configuration",
      items: [
        { id: "uniswap-prep", text: "Prepare Uniswap V3 pool parameters" },
        { id: "liquidity", text: "Secure initial liquidity (ETH/NBPT)" },
        { id: "price-range", text: "Set initial price range strategy" },
        { id: "fee-tier", text: "Choose optimal fee tier (0.3% or 1%)" },
        { id: "pool-creation", text: "Create liquidity pool on Uniswap" }
      ]
    },
    {
      title: "AI Integration & Automation",
      items: [
        { id: "stephanie-ai", text: "Integrate Stephanie.ai trading automation" },
        { id: "price-monitoring", text: "Set up automated price monitoring" },
        { id: "liquidity-management", text: "Configure dynamic liquidity management" },
        { id: "arbitrage", text: "Enable MEV protection and arbitrage detection" },
        { id: "alerts", text: "Configure trading alerts and notifications" }
      ]
    },
    {
      title: "Community & Marketing",
      items: [
        { id: "discord", text: "Set up Discord community server" },
        { id: "telegram", text: "Launch Telegram announcement channel" },
        { id: "twitter", text: "Activate Twitter marketing campaign" },
        { id: "influencers", text: "Partner with crypto influencers" },
        { id: "press", text: "Prepare press release for launch" }
      ]
    },
    {
      title: "IPFS & Decentralization",
      items: [
        { id: "ipfs-pin", text: "Pin documentation to IPFS via stephanie.iq.eth" },
        { id: "launch-pin", text: "Pin launch materials via launch.nobleport.eth" },
        { id: "metadata", text: "Upload token metadata to IPFS" },
        { id: "backup", text: "Create decentralized backup of all assets" },
        { id: "ens", text: "Configure ENS domains for easy access" }
      ]
    },
    {
      title: "Launch Day Execution",
      items: [
        { id: "final-check", text: "Final pre-launch system check" },
        { id: "liquidity-add", text: "Add initial liquidity to DEX" },
        { id: "trading-enable", text: "Enable public trading" },
        { id: "announce", text: "Official launch announcement" },
        { id: "monitor", text: "Monitor trading activity and respond to issues" }
      ]
    },
    {
      title: "Post-Launch Monitoring",
      items: [
        { id: "volume-tracking", text: "Track trading volume and liquidity" },
        { id: "community-support", text: "Provide community support and updates" },
        { id: "partnerships", text: "Explore DEX partnerships and integrations" },
        { id: "analytics", text: "Set up advanced analytics dashboard" },
        { id: "roadmap", text: "Publish post-launch roadmap updates" }
      ]
    }
  ];

  const totalItems = checklistSections.reduce((sum, section) => sum + section.items.length, 0);
  const completedItems = checkedItems.size;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-4xl font-bold text-sage-800 mb-2 flex items-center gap-3">
              <Coins className="w-10 h-10 text-amber-600" />
              NBPT Token Launch
            </h1>
            <p className="text-sage-600 text-lg">
              Deployment checklist for Nobleport Token on DEX
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 text-lg">
              <Rocket className="w-5 h-5 mr-2" />
              {progressPercent}% Complete
            </Badge>
          </div>
        </motion.div>

        {/* Progress Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-sage-200">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-sage-700">Progress</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-sage-800 mb-2">
                {completedItems}/{totalItems}
              </div>
              <div className="w-full bg-sage-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-sage-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-sm text-sage-600">Tasks Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-sage-200">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-sage-700">IPFS Status</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-2 flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Pinned
              </div>
              <p className="text-sm text-sage-600">via stephanie.iq.eth</p>
              <p className="text-sm text-sage-600">& launch.nobleport.eth</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-sage-200">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-sage-700">Launch Status</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-amber-600 mb-2">
                Preparing
              </div>
              <div className="text-sm text-sage-600">
                Ready for DEX deployment
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Information */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-amber-50 to-emerald-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-sage-800">
                <FileText className="w-6 h-6 text-amber-600" />
                Key Launch Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">AI Integration</h3>
                  <p className="text-sage-600 text-sm mb-4">
                    Stephanie.ai provides AI-driven automation, compliance tools, 
                    and community features for seamless token management.
                  </p>
                  
                  <h3 className="font-semibold text-sage-700 mb-2">DEX Platform</h3>
                  <p className="text-sage-600 text-sm">
                    Launching on Uniswap V3 with optimized liquidity pools and 
                    automated market-making strategies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sage-700 mb-2">Decentralization</h3>
                  <p className="text-sage-600 text-sm mb-4">
                    All documentation and assets pinned to IPFS via ENS domains 
                    for permanent, censorship-resistant access.
                  </p>
                  
                  <h3 className="font-semibold text-sage-700 mb-2">Community Focus</h3>
                  <p className="text-sage-600 text-sm">
                    Built-in community governance and engagement tools to foster 
                    long-term project sustainability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Checklist Sections */}
        <div className="space-y-6">
          {checklistSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * sectionIndex }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-sage-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-sage-800">
                    {section.title}
                    <Badge variant="outline" className="text-sage-600">
                      {section.items.filter(item => checkedItems.has(item.id)).length}/{section.items.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div 
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-sage-50 transition-colors cursor-pointer"
                        onClick={() => toggleCheck(item.id)}
                      >
                        {checkedItems.has(item.id) ? (
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-sage-400 flex-shrink-0" />
                        )}
                        <span 
                          className={`flex-1 ${
                            checkedItems.has(item.id) 
                              ? 'text-sage-500 line-through' 
                              : 'text-sage-700'
                          }`}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
            <ExternalLink className="w-5 h-5 mr-2" />
            View IPFS Documentation
          </Button>
          <Button variant="outline" className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3">
            <Rocket className="w-5 h-5 mr-2" />
            Launch Preparation Guide
          </Button>
        </motion.div>
      </div>
    </div>
  );
}