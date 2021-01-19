/// <reference types="react" />
export declare type PushPreviewTarget = 'DesktopChrome' | 'DeskopFirefox' | 'DesktopMacOS' | 'MobileAndroid' | 'MobileIOS';
export interface PushPreviewProps {
    appName?: string;
    target?: PushPreviewTarget;
    title: string;
    message?: string;
    subTitle?: string;
    iconUrl?: string;
    imageUrl?: string;
    buttons?: readonly PushPreviewButton[];
}
interface PushPreviewButton {
    title: string;
    iconUrl?: string;
}
export declare const PushPreview: (props: PushPreviewProps) => JSX.Element;
export {};
