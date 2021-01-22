import * as React from 'react';
import { PushPreviewProps } from "../PushPreviewProps";
import { Image } from './../Image';

export const NotifoPreview = (props: PushPreviewProps) => {
    const {
        buttons,
        iconUrl,
        imageUrl,
        linkName,
        message,
        title,
    } = props;

    const firstButton = buttons?.[0];

    return (
        <div className='notifo-modal-panel'>
            <div className='notifo-notification'>
                <Image className='notifo-notification-image-large' src={imageUrl} />

                <div className='notifo-notification-row2'>
                    <span className='notifo-notification-new'></span>

                    <Image className='notifo-notification-image-small notifo-notification-left' src={iconUrl} />

                    <div className='notifo-notification-right'>
                        <div className='notifo-notification-subject'>
                            {title}
                        </div>

                        {message &&
                            <div className='notifo-notification-body'>
                                {message}
                            </div>
                        }

                        {linkName &&
                            <div className='notifo-notification-link'>
                                <a className='notifo-link'>{linkName}</a>
                            </div>
                        }

                        <div className='notifo-notification-time'>
                            A few minutes ago
                        </div>

                        {firstButton &&
                            <button className='notifo-notification-confirm'>
                                {firstButton.title}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};