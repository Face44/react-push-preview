import * as React from "react"
import { useState } from "react";

import { PushPreview, PushPreviewTarget, PushPreviewProps } from "./../src"
import "./../src/styles.scss";

const ALL_TARGETS: { target: PushPreviewTarget, label: string }[] = [{
    target: "Notifo",
    label: "Notifo"
}, {
    target: "DesktopChrome",
    label: "Chrome"
}, {
    target: "DesktopMacOS",
    label: "MacOS Catalina"
}, {
  target: "DesktopMacOS2",
  label: "MacOS Big Sur"
}, {
    target: "MobileAndroid",
    label: "Android"
}, {
    target: "MobileIOS",
    label: "iOS"
}];

const DEFAULT_PROPS: PushPreviewProps = {
    buttons: [{
      title: "Reply"
  }, {
      title: "Ignore"
  }, {
      title: "Cancel"
  }],
    appName: "Notifo",
    message: "Notifo is an awesome tool for all kind of notification messages that are sent through different channels.",
    iconUrl: "https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png",
    imageUrl: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fit=crop&w=600",
    linkName: "My Link",
    target: "DesktopMacOS2",
    title: "Your Notification",
    website: "example.com"
}

const App = () => {
    const [previewProps, setPreviewProps] = useState<PushPreviewProps>(DEFAULT_PROPS);

    const setProps = (property: keyof PushPreviewProps, value: any) => {
        const props = { ...previewProps };

        props[property] = value;

        setPreviewProps(props);
    }

    const setButton = (index: number, title: string) => {
        const props = { ...previewProps };

        if (props.buttons) {
            props.buttons = [...props.buttons];
            props.buttons[index] = { title };
        }

        setPreviewProps(props);
    }

    return (
        <div className="container pt-4">
            <h1>Push Preview</h1>

            <div className="row">
                <div className="col-5 pt-4">
                    <div className="form-group">
                        <label htmlFor="appName">App Name</label>

                        <input className="form-control" id="appName" value={previewProps.appName || ""}
                            onChange={ev => setProps("appName", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subTitle">Sub Title (iOS only)</label>

                        <input className="form-control" id="subTitle" value={previewProps.subTitle || ""}
                            onChange={ev => setProps("subTitle", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>

                        <input className="form-control" id="title" value={previewProps.title || ""}
                            onChange={ev => setProps("title", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="website">Website (MacOS only)</label>

                        <input className="form-control" id="website" value={previewProps.website || ""}
                            onChange={ev => setProps("website", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>

                        <textarea className="form-control" id="message" value={previewProps.message || ""}
                            onChange={ev => setProps("message", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="iconUrl">Icon URL</label>

                        <input className="form-control" id="iconUrl" value={previewProps.iconUrl || ""}
                            onChange={ev => setProps("iconUrl", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="linkName">Link Name</label>

                        <input className="form-control" id="imageUrl" value={previewProps.linkName || ""}
                            onChange={ev => setProps("linkName", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageUrl">Image URL</label>

                        <input className="form-control" id="imageUrl" value={previewProps.imageUrl || ""}
                            onChange={ev => setProps("imageUrl", ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="button1">Button 1</label>

                        <input className="form-control" id="button1" value={previewProps.buttons?.[0]?.title || ""}
                            onChange={ev => setButton(0, ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="button2">Button 2</label>

                        <input className="form-control" id="button2" value={previewProps.buttons?.[1]?.title || ""}
                            onChange={ev => setButton(1, ev.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="button3">Button 3</label>

                        <input className="form-control" id="button3" value={previewProps.buttons?.[2]?.title || ""}
                            onChange={ev => setButton(2, ev.target.value)} />
                    </div>
                </div>
                <div className="col-7">
                    <div className="mb-4 text-center">
                        <div className="btn-group">
                            {ALL_TARGETS.map(x => 
                                <button key={x.target} type="button" className={targetButtonClass(x.target, previewProps.target)}
                                    onClick={() => setPreviewProps(v => ({ ...v, target: x.target }))}>
                                    {x.label}
                                </button>
                            )}
                        </div>
                    </div>

                    <PushPreview {...previewProps} buttons={previewProps.buttons?.filter(btn => btn.title)?.length ? previewProps.buttons : undefined} />
                </div>
            </div>
        </div>
    );
}

function targetButtonClass(target: PushPreviewTarget, currentTarget?: PushPreviewTarget) {
    let clazz = "btn btn-outline-primary";

    if (target === currentTarget) {
        clazz += " active";
    }

    return clazz;
}

export default App