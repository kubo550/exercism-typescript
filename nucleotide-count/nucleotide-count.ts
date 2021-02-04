export default class NucleotideCount {
    static nucleotideCounts(nuc: string) {
        const translate = new Map([["A", 0], ["C", 0], ["G", 0], ["T", 0]]);
        [...nuc].forEach(n => {
            if (translate.has(n)) {
                translate.set(n, translate.get(n)! + 1)
            }
            else {
                throw Error("Invalid nucleotide in strand")
            }
        })
        return Object.fromEntries(translate)
    }
}