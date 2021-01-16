import * as React from 'react'
import styles from './styles.module.css'

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
}

interface PushPreviewButton {
    // The label displayed to the user for the action button.
    title: string;

    // The URL of a small icon for the action button. An alternative to icons is to include emoticons or other symbols inside the title.
    iconUrl?: string;
}

export const PushPreview = (props: PushPreviewProps) => {
    const {
        appName = '',
        title,
        message,
        iconUrl,
        buttons,
        imageUrl,
        subTitle,
    } = props;

    return (
        <div className={styles.test}>
            <Image className={styles.image} src={imageUrl} />


            <div>
                <Image className={styles.icon} src={iconUrl} fallbackSrc='https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png' />
                
                <span>{appName || 'Your App'}</span>
            </div>

            {title &&
                <div>{title}</div>
            }

            {subTitle &&
                <div>{subTitle}</div>
            }

            {message &&
                <div>{message}</div>
            }

            {buttons &&
                <div>
                    {buttons.map((button, i) => 
                        <div key={i}>
                            <Image src={button.iconUrl} />

                            {button.title}
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

interface ImageProps {
    className?: string;

    // The fallback source.
    fallbackSrc?: string;

    // The size of the icon.
    src?: string;
}

const Image = ({ src, fallbackSrc: fallback, className }: ImageProps) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [imageSource, setImageSource] = React.useState(src);

    React.useEffect(() => {
        setImageSource(src || fallback);
        setIsLoaded(false);
    }, [src, fallback]);

    const setLoaded = React.useCallback(() => {
        if (src === imageSource || !imageSource) {
            setIsLoaded
        }
        setIsLoaded(true);
    }, [imageSource, src]);

    const onError = React.useCallback(() => {
        if (fallback) {
            setImageSource(fallback);
        }
    }, [fallback]);

    const style = isLoaded ? {} : { display: 'none' };

    return (
        <div className={className} style={style}>
            <img src={src} onLoad={setLoaded} onError={onError} />
        </div>
    );
};