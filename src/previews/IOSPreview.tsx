import * as React from 'react';
import { Image } from '../Image';
import { PushPreviewProps } from '../PushPreviewProps';

export const IOSPreview = (
  props: PushPreviewProps & { expanded: boolean; toggle: () => void }
) => {
  const {
    appName = '',
    buttons,
    expanded,
    iconUrl,
    imageUrl,
    message,
    subTitle,
    title,
    toggle,
  } = props;

  return (
    <div
      className={`test ios ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="main">
        <div className="header">
          <div className="app-meta">
            <Image className="icon" src={iconUrl} fallbackSrc={iconUrl} />
            <span className="app-name">{appName || 'Your App'}</span>
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
      </div>
      {expanded && (
        <div className="buttons">
          {buttons && (
            <div>
              {buttons.map(
                (button: any, i: number) =>
                  button.title && (
                    <div className="button" key={i}>
                      <span>
                        <Image src={button.iconUrl} />
                        {button.title}
                      </span>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
