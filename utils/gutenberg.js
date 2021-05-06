import config from 'gutenberg.config';

export const addTailwindClassToRawHtml = (content) => {
    
    let result = content;
    for (const [key, value] of Object.entries(config)) {
        var regex = new RegExp(`<${key}>`, "g");
        result = result.replace(regex, `<${key} class="${value}">`);
    };

    return result;
};