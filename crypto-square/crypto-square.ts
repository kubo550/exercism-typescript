export default class name {
    normalized: string
    length: number
    segments: string[]
    constructor(readonly text: string) {
        this.normalized = this.text.toLowerCase().match(/[A-Za-z0-9]/g)?.join("")!
        this.length = Math.ceil(Math.sqrt(this.normalized!.length))
        this.segments = this.normalized?.match(new RegExp(`.{1,${this.length}}`, "g"))!
    }

    public normalizePlaintext = () => this.normalized
    public size = () => this.length
    public plaintextSegments = () => this.segments

    public ciphertext() {
        let output = ''
        for (let i = 0; i < this.length; i++) {
            this.segments?.forEach(word => {
                const char = word[i] ? word[i] : ""
                output += char
            })
        }
        return output
    }
}