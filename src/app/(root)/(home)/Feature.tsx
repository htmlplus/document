'use client';

import { NoSSR } from '@/NoSSR';

interface FeatureProps {
  className?: string;
  description: string;
  icon: string;
  metric?: number;
  more?: string;
  title: string;
}

export const Feature = ({ className, description, icon, metric, more, title }: FeatureProps) => {
  return (
    <div className={`flex flex-col gap-4 items-center text-center ${className}`}>
      <plus-avatar className="bg-main-3" shape="circle" size="48">
        <plus-icon className="text-main-11" name={icon} size="24"></plus-icon>
      </plus-avatar>
      {metric && (
        <div className="font-9-600 text-main-11">
          <NoSSR>
            <plus-intersection
              once
              onPlusChange={(event) => {
                (event.target as any).children.item(0).play = event.detail.isIntersecting;
              }}
            >
              <plus-counter to={metric} duration={2500}>
                0
              </plus-counter>
            </plus-intersection>
          </NoSSR>
        </div>
      )}
      <div className="font-5-500">{title}</div>
      <div className="font-3-400 text-alpha-black-7">{description}</div>
      {more && (
        <a href={more} className="link">
          Learn more
        </a>
      )}
    </div>
  );
};
