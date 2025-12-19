export default function normalizeGoogleDriveUrl(url) {
    if (!url) return "";
    const trimmed = String(url).trim();
    if (trimmed === "") return "";

    try {
        const patterns = [
            {
                regex: /https?:\/\/docs\.google\.com\/document\/d\/([A-Za-z0-9_-]+)/i,
                format: (id) => `https://docs.google.com/document/d/${id}/view`
            },
            {
                regex: /https?:\/\/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/i,
                format: (id) => `https://drive.google.com/file/d/${id}/view`
            },
            {
                regex: /https?:\/\/drive\.google\.com\/open\?id=([A-Za-z0-9_-]+)/i,
                format: (id) => `https://drive.google.com/file/d/${id}/view`
            },
            {
                regex: /https?:\/\/drive\.google\.com\/uc\?id=([A-Za-z0-9_-]+)/i,
                format: (id) => `https://drive.google.com/file/d/${id}/view`
            },
            {
                regex: /id=([A-Za-z0-9_-]{10,})/,
                format: (id) => `https://drive.google.com/file/d/${id}/view`
            }
        ];

        for (const p of patterns) {
            const m = trimmed.match(p.regex);
            if (m && m[1]) {
                return p.format(m[1]);
            }
        }

        if (/^https?:\/\//i.test(trimmed)) {
            return trimmed
                .replace(/\/edit(\?.*)?$/i, '/view')
                .replace(/\?.*$/, '');
        }
    } catch (e) {

    }

    return trimmed;
}