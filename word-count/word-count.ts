export default class Words {
    public count = (text: string) => text.trim().toLowerCase().split(/\s+/)
        .reduce((map, word) => map.set(word, map.get(word) + 1 || 1), new Map())
}
