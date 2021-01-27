export default class MatchingBrackets {
    constructor(private input: string) { }
    public isPaired() {
        let str = (this.input.match(/([\(\)\[\]\{\}])/g) || []).join("");
        const reg = /\(\)|\[\]|{}/g;
        while (reg.test(str)) { str = str.replace(reg, "") }
        return !str
    }
}