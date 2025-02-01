
export function maybeShowApiKeyBanner(key, action = `enter it at the top of
<code>main.js</code>`) {
    if (key === 'AIzaSyAuF1QtrhaacPg03PHRCpY4KzO1iE_bVxY') {
        let banner = document.createElement('div');
        banner.className = 'api-key-banner';
        banner.innerHTML = `
                  Descripcion de Productos con Gemini Ai.
                      `;
        document.body.prepend(banner);
    }
}