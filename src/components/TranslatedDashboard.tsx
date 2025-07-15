
import { Activity, Shield, AlertTriangle, CheckCircle, Users, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const TranslatedDashboard = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  return (
    <section id="dashboard" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a3e635_0.5px,transparent_0.5px),linear-gradient(to_bottom,#a3e635_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.dashboard.title}
            <span className="block bg-gradient-to-r from-neon-lime to-neon-cyan bg-clip-text text-transparent neon-text">
              {t.dashboard.subtitle}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.dashboard.description}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main dashboard mockup */}
          <div className="bg-dark-surface/95 backdrop-blur-lg rounded-2xl neon-border overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-dark-bg px-6 py-4 flex items-center justify-between border-b border-neon-lime/20">
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6 text-neon-lime" />
                <span className="text-white font-semibold">AI Protection Dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-neon-lime animate-pulse-neon"></div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6 bg-dark-surface">
              {/* Stats row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="border-0 bg-neon-lime/10 neon-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neon-lime text-sm font-medium">IAs Detectadas</p>
                        <p className="text-2xl font-bold text-white">247</p>
                      </div>
                      <Activity className="h-8 w-8 text-neon-lime" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-red-500/10 border border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-red-400 text-sm font-medium">Bloqueadas</p>
                        <p className="text-2xl font-bold text-white">89</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-red-400" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-neon-cyan/10 border border-cyan-400/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neon-cyan text-sm font-medium">Permitidas</p>
                        <p className="text-2xl font-bold text-white">158</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-neon-cyan" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-neon-purple/10 border border-purple-400/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neon-purple text-sm font-medium">Análisis/mes</p>
                        <p className="text-2xl font-bold text-white">84.2K</p>
                      </div>
                      <BarChart className="h-8 w-8 text-neon-purple" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* AI Activity Table */}
              <Card className="bg-dark-bg/50 border border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Users className="h-5 w-5 mr-2 text-neon-lime" />
                    Actividad Reciente de IAs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "GPT-4 Crawler", status: "Bloqueada", time: "hace 2 min", pages: "15 páginas", color: "text-red-400" },
                      { name: "Claude AI", status: "Permitida", time: "hace 5 min", pages: "3 páginas", color: "text-neon-cyan" },
                      { name: "Unknown Bot", status: "Análisis", time: "hace 8 min", pages: "22 páginas", color: "text-amber-400" },
                      { name: "Bard Scraper", status: "Bloqueada", time: "hace 12 min", pages: "7 páginas", color: "text-red-400" },
                      { name: "Perplexity", status: "Permitida", time: "hace 15 min", pages: "5 páginas", color: "text-neon-cyan" }
                    ].map((ai, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-dark-surface/50 rounded-lg border border-slate-700">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 rounded-full bg-neon-lime animate-pulse"></div>
                          <div>
                            <p className="font-medium text-white">{ai.name}</p>
                            <p className="text-sm text-slate-400">{ai.pages}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`font-medium ${ai.color}`}>{ai.status}</span>
                          <p className="text-sm text-slate-400">{ai.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslatedDashboard;
