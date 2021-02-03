export type PushPreviewTarget =
  | 'DesktopChrome'
  | 'DeskopFirefox'
  | 'DesktopMacOS'
  | 'DesktopMacOS2'
  | 'MobileAndroid'
  | 'MobileIOS'
  | 'Notifo';

export interface PushPreviewProps {
  // The name of the app (for mobile push).
  appName?: string;

  // The target platform.
  target?: PushPreviewTarget;

  // The title to be displayed.
  title: string;

  // The website of the app to be displayed (MacOS only).
  website: string;

  // The optional message.
  message?: string;

  // The optional sub title (iOS only).
  subTitle?: string;

  // The url to the icon.
  iconUrl?: string;

  // The name of the link (Notifo only).
  linkName?: string;

  // The url to the image.
  imageUrl?: string;

  // The buttons.
  buttons?: PushPreviewButton[];
}

export interface PushPreviewButton {
  // The label displayed to the user for the action button.
  title: string;

  // The URL of a small icon for the action button. An alternative to icons is to include emoticons or other symbols inside the title.
  iconUrl?: string;
}
