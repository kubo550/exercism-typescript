export default class Matrix {
    public rows: number[][]
    public columns: number[][]

    constructor(public string: string) {
        const matrix = this.string.split("\n").map((s) => s.split(" ").map(Number));
        this.rows = matrix
        this.columns = matrix[0].map((_, i) => this.rows.map(row => row[i]))
    }
}