function copyToClipboard(text, callback) {
    const textarea = document.createElement('textarea');
    textarea.innerText = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // If a callback is provided, call it with the copied text
    if (callback) {
        callback(text);
    }
}

export default copyToClipboard