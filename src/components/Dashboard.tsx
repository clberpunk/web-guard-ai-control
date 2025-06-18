import { Activity, Shield, AlertTriangle, CheckCircle, Users, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Panel de control
            <span className="block text-blue-600">intuitivo y potente</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Gestiona toda la actividad de IAs desde un dashboard centralizado
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main dashboard mockup */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Header */}
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-white font-semibold">AI Protection Dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6">
              {/* Stats row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="border-0 bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-600 text-sm font-medium">IAs Detectadas</p>
                        <p className="text-2xl font-bold text-blue-800">247</p>
                      </div>
                      <Activity className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-gradient-to-r from-amber-50 to-amber-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-amber-600 text-sm font-medium">Bloqueadas</p>
                        <p className="text-2xl font-bold text-amber-800">89</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-amber-600" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-gradient-to-r from-green-50 to-green-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-600 text-sm font-medium">Permitidas</p>
                        <p className="text-2xl font-bold text-green-800">158</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-teal-600 text-sm font-medium">Análisis/mes</p>
                        <p className="text-2xl font-bold text-teal-800">84.2K</p>
                      </div>
                      <BarChart className="h-8 w-8 text-teal-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* AI Activity Table */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-slate-600" />
                    Actividad Reciente de IAs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "GPT-4 Crawler", status: "Bloqueada", time: "hace 2 min", pages: "15 páginas", color: "text-red-600" },
                      { name: "Claude AI", status: "Permitida", time: "hace 5 min", pages: "3 páginas", color: "text-green-600" },
                      { name: "Unknown Bot", status: "Análisis", time: "hace 8 min", pages: "22 páginas", color: "text-amber-600" },
                      { name: "Bard Scraper", status: "Bloqueada", time: "hace 12 min", pages: "7 páginas", color: "text-red-600" },
                      { name: "Perplexity", status: "Permitida", time: "hace 15 min", pages: "5 páginas", color: "text-green-600" }
                    ].map((ai, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <div>
                            <p className="font-medium text-slate-900">{ai.name}</p>
                            <p className="text-sm text-slate-500">{ai.pages}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`font-medium ${ai.color}`}>{ai.status}</span>
                          <p className="text-sm text-slate-500">{ai.time}</p>
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

export default Dashboard;
