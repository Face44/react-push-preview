import React from 'react';
import { Image } from '../Image';

interface Props {
  fields: any;
}
interface State {}

export const iOS = (props: any) => {
  const {
    appName = '',
    title,
    message,
    iconUrl,
    buttons,
    imageUrl,
    expanded,
    subTitle,
  } = props.fields;
  return (
    <div className={`test ios ${expanded ? 'expanded' : 'minimum'}`}>
      <div className="header">
        <div className="app-meta">
          <Image className="icon" src={iconUrl} fallbackSrc={iconUrl} />
          <span>{appName || 'Your App'}</span>
        </div>
        <div className={`time ${expanded && 'close-btn'}`}>{!expanded ? 'now' : 'X'}</div>
      </div>
      {expanded && (
          <Image className="image" src={imageUrl} />
        )}
      <div className="section">
        
        <div className="short-description">
          {title && <div className="title">{title}</div>}
          {subTitle && <div className="subtitle">{subTitle}</div>}
          {message && <div className="message">{message}</div>}
        </div>
        {!expanded && (
          <div className="image-preview-small">
            <Image src={imageUrl} />
          </div>
        )}
      </div>

      {buttons && (
        <div>
          {buttons.map((button: any, i: number) => (
            <div key={i}>
              <Image src={button.iconUrl} />

              {button.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
