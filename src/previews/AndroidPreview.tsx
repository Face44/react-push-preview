import * as React from 'react';
import { Image } from '../Image';
import UpArrow from '../images/UpArrow';
import DownArrow from '../images/DownArrow';
import BellIcon from '../images/Bell';
import { PushPreviewProps } from '../PushPreviewProps';

export const AndroidPreview = (
  props: PushPreviewProps & { expanded: boolean; toggle: () => void }
) => {
  const {
    appName = '',
    buttons,
    expanded,
    imageUrl,
    message,
    subTitle,
    iconUrl,
    title,
    toggle,
  } = props;

  return (
    <div
      className={`android ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="rpp-main">
        <div className="rpp-header">
          <div className="rpp-app-meta">
            <BellIcon />
            <span className="rpp-app-name">{appName || 'Your App'}</span>
            <span className={`arrow-icon`}>
              {!expanded ? <DownArrow /> : <UpArrow />}
            </span>
          </div>
        </div>
        <div className="rpp-section">
          <div className="rpp-short-description">
            {title && <div className="rpp-title">{title}</div>}
            {subTitle && <div className="rpp-subtitle">{subTitle}</div>}
            {message && <div className="rpp-message">{message}</div>}
          </div>
          {!expanded && (
            <div className="rpp-image-preview-small">
              <Image src={iconUrl} />
            </div>
          )}
          {expanded && <Image className="rpp-image" src={imageUrl} />}
        </div>
        {expanded && buttons?.length && (
          <div className="rpp-buttons">
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
          </div>
        )}
      </div>
    </div>
  );
};
