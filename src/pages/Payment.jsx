import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Wallet, 
  Building2, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: "stripe",
      name: "Stripe Gateway",
      description: "Credit card and ACH payments",
      gateway: "stripe.nobleport.eth",
      icon: CreditCard,
      priority: "#1",
      features: [
        "Credit & Debit Cards",
        "ACH Bank Transfers",
        "Multi-chain USDC Support",
        "Instant Processing"
      ],
      status: "Live",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "metamask",
      name: "MetaMask Integration",
      description: "Direct crypto payments",
      gateway: "wallet.nobleport.eth",
      icon: Wallet,
      priority: "#2",
      features: [
        "9+ Blockchain Support",
        "ETH, ARB, BASE, MATIC",
        "SOL, XRP, ADA, AVAX",
        "Direct Wallet Connection"
      ],
      status: "Live",
      color: "from-orange-500 to-amber-600"
    },
    {
      id: "paypal",
      name: "PayPal Bridge",
      description: "USD → NBPT token conversion",
      gateway: "pay.nobleport.eth",
      icon: DollarSign,
      priority: "#3",
      features: [
        "PayPal Balance",
        "USD to NBPT Conversion",
        "Automated Detection",
        "Arbitrum One Integration"
      ],
      status: "Production Ready",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "mercury",
      name: "Mercury Banking",
      description: "Treasury management & auto-sweep",
      gateway: "treasury.nobleport.eth",
      icon: Building2,
      priority: "#4",
      features: [
        "Treasury Management",
        "Auto-sweep Functionality",
        "Stripe Reconciliation",
        "Enterprise Banking"
      ],
      status: "Production Ready",
      color: "from-emerald-500 to-green-600"
    }
  ];

  const blockchains = [
    { name: "Ethereum", id: "ETH", chain: "1" },
    { name: "Arbitrum", id: "ARB", chain: "42161", primary: true },
    { name: "Base", id: "BASE", chain: "8453" },
    { name: "Polygon", id: "MATIC", chain: "137" },
    { name: "Optimism", id: "OP", chain: "10" },
    { name: "Avalanche", id: "AVAX", chain: "43114" },
    { name: "Solana", id: "SOL" },
    { name: "Cardano", id: "ADA" },
    { name: "XRP Ledger", id: "XRP" }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a9e037dda7ab1a74eb83af/d4be7c51a_20250620_1106_NobleportTokenEmblem_simple_compose_01jy6xyt72e3rr6a4n7geqm37q2.png"
              alt="Nobleport Token"
              className="w-20 h-20 object-contain drop-shadow-xl"
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
              Payment Options
            </h1>
          </div>
          <p className="text-xl text-blue-200 mb-2">
            Multiple ways to participate in the NoblePort ecosystem
          </p>
          <Badge className="bg-purple-700/60 text-white border border-purple-400/40 px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Powered by NoblePort.eth on Arbitrum One
          </Badge>
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer ${
                  selectedMethod === method.id ? 'ring-2 ring-yellow-400 shadow-2xl shadow-yellow-400/30' : 'hover:shadow-xl'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color} shadow-lg`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-xl text-white">{method.name}</CardTitle>
                          <Badge className="bg-amber-500/80 text-black text-xs font-bold">
                            {method.priority}
                          </Badge>
                        </div>
                        <CardDescription className="text-blue-200">
                          {method.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge 
                      className={`${
                        method.status === 'Live' 
                          ? 'bg-green-500/80 text-white' 
                          : 'bg-blue-500/80 text-white'
                      }`}
                    >
                      {method.status === 'Live' ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <Zap className="w-3 h-3 mr-1" />
                      )}
                      {method.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {method.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-blue-100">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Gateway */}
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-300">Gateway:</span>
                        <code className="text-yellow-300 bg-purple-900/40 px-2 py-1 rounded text-xs">
                          {method.gateway}
                        </code>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-semibold shadow-lg`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Payment integration would go here
                      }}
                    >
                      Select {method.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Supported Blockchains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Globe className="w-7 h-7 text-blue-300" />
                Supported Blockchains
              </CardTitle>
              <CardDescription className="text-blue-200">
                Multi-chain support for maximum flexibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {blockchains.map((blockchain, idx) => (
                  <motion.div
                    key={blockchain.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className={`p-4 rounded-xl border ${
                      blockchain.primary 
                        ? 'bg-gradient-to-br from-purple-600/40 to-purple-700/40 border-purple-400/50 shadow-lg shadow-purple-500/30' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    } transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white mb-1">{blockchain.name}</div>
                        <div className="text-xs text-blue-200">{blockchain.id}</div>
                        {blockchain.chain && (
                          <div className="text-xs text-blue-300 mt-1">
                            Chain ID: {blockchain.chain}
                          </div>
                        )}
                      </div>
                      {blockchain.primary && (
                        <Badge className="bg-yellow-400 text-black text-xs font-bold">
                          Primary
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Primary Blockchain</h4>
                    <p className="text-sm text-blue-200 mb-2">
                      Arbitrum One (Chain ID: 42161) - Low fees, high throughput, Ethereum compatibility
                    </p>
                    <code className="text-xs text-yellow-300 bg-purple-900/40 px-2 py-1 rounded">
                      https://arb1.arbitrum.io/rpc
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* NBPT Token Info */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-amber-900/30 via-purple-900/30 to-amber-900/30 backdrop-blur-xl border border-amber-400/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <DollarSign className="w-7 h-7 text-amber-400" />
                NBPT Token Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">$1.00</div>
                  <div className="text-sm text-blue-200">ICO Price</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-green-300 mb-2">$7.58</div>
                  <div className="text-sm text-blue-200">Target Price</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-purple-300 mb-2">658%</div>
                  <div className="text-sm text-blue-200">ROI Potential</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-purple-900/40 border border-purple-400/30">
                <div className="text-sm text-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">Contract Address:</span>
                    <code className="text-yellow-300 text-xs">0x3778E67655Ec26D6bC8294C6F7a1e754AFD2C91C</code>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">Total Supply:</span>
                    <span className="text-yellow-300">100,000,000 NBPT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Standard:</span>
                    <span className="text-purple-300">ERC-1400 Security Token</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}