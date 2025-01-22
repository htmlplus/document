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
    <div className={`feature ${className}`}>
      <plus-avatar shape="circle" size="48">
        <plus-icon name={icon} size="24"></plus-icon>
      </plus-avatar>
      {metric && (
        <div className="metric">
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
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      {more && (
        <a href={more} className="link">
          Learn more
        </a>
      )}
    </div>
  );
};
