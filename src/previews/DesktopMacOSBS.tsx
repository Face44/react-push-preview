import * as React from 'react';
import { Image } from '../Image';
import Dots from '../images/Dots';
import DownArrow from '../images/DownArrowMacOSBS';
import { PushPreviewProps } from '../PushPreviewProps';

export const DesktopMacOSBS = (
  props: PushPreviewProps & { expanded: boolean; toggle: () => void }
) => {
  const {
    appName = '',
    expanded,
    iconUrl,
    imageUrl,
    message,
    title,
    website,
    buttons,
    toggle,
  } = props;

  return (
    <div
      className={`desktop-macos-bigsur ${
        expanded ? 'expanded' : 'minimum'
      }`}
      onClick={toggle}
    >
      <div className="rpp-main">
        <div className="rpp-header">
          <div className="rpp-meta-container">
            <div className="rpp-icon-container">
              <Image className="rpp-icon" src={iconUrl} fallbackSrc={iconUrl} />
            </div>
            <div className="rpp-app-name">{appName || 'App Name'}</div>
          </div>
          <div className="rpp-options">
            {expanded ? (
              <div>
                <Dots />
                <DownArrow />
              </div>
            ) : (
              <div>now</div>
            )}
          </div>
        </div>
        {expanded && <Image className="rpp-img-preview" src={imageUrl} />}
        <div className="rpp-content-container">
          <div className={`rpp-text ${imageUrl ? 'limited' : ''}`}>
            {title && <div className="rpp-title">{title}</div>}
            <div className="rpp-site">{website}</div>
            {message && <div className="rpp-message">{message}</div>}
          </div>
          {!expanded && imageUrl && (
            <Image className="rpp-img-preview" src={imageUrl} />
          )}
        </div>

        {expanded && buttons?.length && (
          <div className="rpp-footer">
            <div className="rpp-buttons">
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
