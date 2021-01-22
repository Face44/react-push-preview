import * as React from 'react'
import {iOS as MobileIOS}  from './previews/ios'

export type PushPreviewTarget = 'DesktopChrome' | 'DeskopFirefox' | 'DesktopMacOS' | 'MobileAndroid' | 'MobileIOS';

export interface PushPreviewProps {
    // The name of the app (for mobile push).
    appName?: string;

    // The target platform.
    target?: PushPreviewTarget;

    // The title to be displayed.
    title: string;

    // The optional message.
    message?: string;

    // The optional sub title (iOS only).
    subTitle?: string;

    // The url to the icon.
    iconUrl?: string;

    // The url to the image.
    imageUrl?: string;

    buttons?: readonly PushPreviewButton[];

    expanded?: boolean;
}

interface PushPreviewButton {
    // The label displayed to the user for the action button.
    title: string;

    // The URL of a small icon for the action button. An alternative to icons is to include emoticons or other symbols inside the title.
    iconUrl?: string;
}

const DEFAULT_LOGO = 'https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png';

export const PushPreview = (props: PushPreviewProps) => {
    if (!props.imageUrl) props.imageUrl = DEFAULT_LOGO
    return (
        <div className="preview-container">
            {props.target == 'MobileIOS' && <MobileIOS fields={props} />}
        </div>
        
    );
}