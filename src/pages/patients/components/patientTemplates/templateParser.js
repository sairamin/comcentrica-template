import { forEach } from "lodash"

const parseTemplate = (content, patient) => {
    let newContent = content
    const parser = new DOMParser()
    const document = parser.parseFromString(content, 'text/html')
    const mentions = document.getElementsByClassName('mention')
    console.log(mentions)
    for(let i = 0; i <  mentions.length; i++) {
        const mention = mentions[i]
        const key = mention.getAttribute('data-id')
        newContent = newContent.replace(mention.outerHTML, patient[key])
    }
    return newContent
}

export {
    parseTemplate
}