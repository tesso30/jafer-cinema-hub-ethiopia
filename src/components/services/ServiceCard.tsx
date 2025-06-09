
import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Language = 'en' | 'am' | 'or';

interface ServiceCardProps {
  service: {
    key: string;
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
  };
  serviceData: {
    title: string;
    description: string;
    features: string[];
    duration: string;
  };
  translations: {
    viewDetails: string;
    bookService: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export default function ServiceCard({ 
  service, 
  serviceData, 
  translations, 
  isSelected, 
  onClick 
}: ServiceCardProps) {
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <div 
      className={cn(
        "bg-black/40 rounded-xl p-6 border border-gray-800 cursor-pointer transition-all duration-300 hover:shadow-lg group",
        isSelected 
          ? "border-jafer-gold shadow-jafer-gold/20 transform scale-105" 
          : "hover:border-jafer-gold/50 hover:shadow-jafer-gold/10 hover:-translate-y-1"
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Select ${serviceData.title} service`}
    >
      <div className="flex flex-col items-center text-center">
        <div className={cn(
          "h-20 w-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
          service.bgColor,
          isSelected ? "scale-110" : "group-hover:scale-105"
        )}>
          <Icon className={cn("h-10 w-10", service.color)} />
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-jafer-gold transition-colors">
          {serviceData.title}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {serviceData.description}
        </p>

        <div className="space-y-2 mb-4 w-full">
          {serviceData.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="w-full space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Duration:
            </span>
            <span className="text-jafer-gold font-medium">{serviceData.duration}</span>
          </div>
        </div>

        <div className="flex gap-2 w-full">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 border-jafer-gold text-jafer-gold hover:bg-jafer-gold hover:text-black transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/service/${service.id}`);
            }}
          >
            {translations.viewDetails}
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-jafer-gold text-black hover:bg-jafer-darkgold transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/book/${service.id}`);
            }}
          >
            {translations.bookService}
          </Button>
        </div>
      </div>
    </div>
  );
}
