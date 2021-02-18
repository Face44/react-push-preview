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
      className={`test desktop-macos-bigsur ${
        expanded ? 'expanded' : 'minimum'
      }`}
      onClick={toggle}
    >
      <div className="main">
        <div className="header">
          <div className="meta-container">
            <div className="icon-container">
              <Image className="icon" src={iconUrl} fallbackSrc={iconUrl} />
            </div>
            <div className="app-name">{appName || 'App Name'}</div>
          </div>
          <div className="options">
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
        {expanded && <Image className="img-preview" src={imageUrl} />}
        <div className="content-container">
          <div className={`text ${imageUrl ? 'limited' : ''}`}>
            {title && <div className="title">{title}</div>}
            <div className="site">{website}</div>
            {message && <div className="message">{message}</div>}
          </div>
          {!expanded && imageUrl && (
            <Image className="img-preview" src={imageUrl} />
          )}
        </div>


        {expanded && buttons?.length &&
          <div className="footer">
            <div className="buttons">
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
          </div>
        }
      </div>
    </div>
  );
};
