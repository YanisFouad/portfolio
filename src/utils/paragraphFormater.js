export function formatParagraphs(paragrahs) {
    return paragrahs.map(paragraph => {
        let content = paragraph.content.replace('\t', '    ');
        content = content.split('\n');

        return {
            title: paragraph.title,
            content: content
        }
    });
}