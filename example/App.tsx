import * as React from 'react'
import { useState } from 'react';

import { PushPreview, PushPreviewTarget, PushPreviewProps } from './../src'
import './../src/styles.css';

const ALL_TARGETS: { target: PushPreviewTarget, label: string }[] = [{
    target: 'DeskopFirefox',
    label: 'Firefox'
}, {
    target: 'DesktopChrome',
    label: 'Chrome'
}, {
    target: 'DesktopMacOS',
    label: 'MacOS'
}, {
    target: 'MobileAndroid',
    label: 'Android'
}, {
    target: 'MobileIOS',
    label: 'iOS'
}];

const DEFAULT_PROPS: PushPreviewProps = {
    message: 'Your Notification Message',
    iconUrl: 'https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png',
    imageUrl: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fit=crop&w=600',
    target: 'DesktopChrome',
    title: 'Your Notification',
}

const App = () => {
    const [previewProps, setPreviewProps] = useState<PushPreviewProps>(DEFAULT_PROPS);

    return (
        <div className='container pt-4'>
            <h1>Push Preview</h1>

            <div className='row'>
                <div className='col-5 pt-4'>
                    <div className='form-group'>
                        <label htmlFor='appName'>App Name</label>

                        <input className='form-control' id='appName' value={previewProps.appName || ''}
                            onChange={ev => setPreviewProps(v => ({ ...v, appName: ev.target.value }))} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='subTitle'>Sub Title (iOS only)</label>

                        <input className='form-control' id='subTitle' value={previewProps.subTitle || ''}
                            onChange={ev => setPreviewProps(v => ({ ...v, subTitle: ev.target.value }))} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>

                        <input className='form-control' id='title' value={previewProps.title || ''}
                            onChange={ev => setPreviewProps(v => ({ ...v, title: ev.target.value }))} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>

                        <textarea className='form-control' id='message' value={previewProps.message || ''}
                            onChange={ev => setPreviewProps(v => ({ ...v, message: ev.target.value }))} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='iconUrl'>Icon URL</label>

                        <input className='form-control' id='iconUrl' value={previewProps.iconUrl || ''}
                            onChange={ev => setPreviewProps(v => ({ ...v, iconUrl: ev.target.value }))} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='imageUrl'>Image URL</label>

                        <input className='form-control' id='imageUrl' value={previewProps.imageUrl || ''}
                            onChange={ev => setPreviewProps(v => ({ ...v, imageUrl: ev.target.value }))} />
                    </div>
                </div>
                <div className='col-7'>
                    <div className='mb-4 text-center'>
                        <div className='btn-group'>
                            {ALL_TARGETS.map(x => 
                                <button key={x.target} type='button' className={targetButtonClass(x.target, previewProps.target)}
                                    onChange={() => setPreviewProps(v => ({ ...v, target: x.target }))}>
                                    {x.label}
                                </button>
                            )}
                        </div>
                    </div>

                    <PushPreview {...previewProps} />
                </div>
            </div>
        </div>
    );
}

function targetButtonClass(target: PushPreviewTarget, currentTarget?: PushPreviewTarget) {
    let clazz = 'btn btn-outline-primary';

    if (target === currentTarget) {
        clazz += ' active';
    }

    return clazz;
}

export default App