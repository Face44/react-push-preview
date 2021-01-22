import * as React from 'react';
import { Image } from '../Image';
import { PushPreviewProps } from '../PushPreviewProps';

export const IOSPreview = (props: PushPreviewProps) => {
  const {
    appName = '',
    buttons,
    iconUrl,
    imageUrl,
    message,
    subTitle,
    title,
  } = props;

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className={`test ios ${expanded ? 'expanded' : 'minimum'}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="header">
        <div className="app-meta">
          <Image className="icon" src={iconUrl} fallbackSrc={iconUrl} />
          <span>{appName || 'Your App'}</span>
        </div>
        <div className={`time ${expanded && 'close-btn'}`}>
          {!expanded ? 'now' : 'X'}
        </div>
      </div>
      {expanded && <Image className="image" src={imageUrl} />}
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
