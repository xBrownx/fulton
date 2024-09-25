import { memo } from 'react';
import { Page } from '../../templates';

function Map() {
    return (
        <Page $fullScreen>
            <iframe src="https://my.atlist.com/map/164fda48-b25a-4046-bd6c-ea74ce9c20fa/?share=true"
                    allow="geolocation 'self' https://my.atlist.com" width="100%" height="100%" loading="lazy"
                    frameBorder="0" scrolling="no" allowFullScreen id="atlist-embed"></iframe>

        </Page>
    );
}


export default memo(Map);