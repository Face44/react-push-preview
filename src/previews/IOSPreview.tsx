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
      className={`ios ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="rpp-main">
        <div className="rpp-header">
          <div className="app-meta">
            <Image className="rpp-icon" src={iconUrl} fallbackSrc={iconUrl} />
            <span className="rpp-app-name">{appName || 'Your App'}</span>
          </div>
          <div className={`time ${expanded && 'close-btn'}`}>
            {!expanded ? 'now' : 'X'}
          </div>
        </div>
        {expanded && <Image className="rpp-image" src={imageUrl} />}
        <div className="rpp-section">
          <div className="rpp-short-description">
            {title && <div className="rpp-title">{title}</div>}
            {subTitle && <div className="rpp-subtitle">{subTitle}</div>}
            {message && <div className="rpp-message">{message}</div>}
          </div>
          {!expanded && (
            <div className="rpp-image-preview-small">
              <Image src={imageUrl} />
            </div>
          )}
        </div>
      </div>
      {expanded && (
        <div className="rpp-buttons">
          {buttons && (
            <div>
              {buttons.map(
                (button: any, i: number) =>
                  button.title && (
                    <div className="rpp-button" key={i}>
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
