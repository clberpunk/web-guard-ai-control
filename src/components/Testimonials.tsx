
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/i18n";

const Testimonials = () => {
  const { currentLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const testimonials = [
    {
      name: t.testimonials.client1.name,
      position: t.testimonials.client1.position,
      content: t.testimonials.client1.content,
      company: t.testimonials.client1.company,
      rating: 5
    },
    {
      name: t.testimonials.client2.name,
      position: t.testimonials.client2.position,
      content: t.testimonials.client2.content,
      company: t.testimonials.client2.company,
      rating: 5
    },
    {
      name: t.testimonials.client3.name,
      position: t.testimonials.client3.position,
      content: t.testimonials.client3.content,
      company: t.testimonials.client3.company,
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.testimonials.title}
            <span className="block text-blue-600">{t.testimonials.subtitle}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white relative overflow-hidden">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
