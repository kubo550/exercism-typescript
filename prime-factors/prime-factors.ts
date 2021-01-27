export default (num: number) => {
    const factors: number[] = []
    while (num !== 1) {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                factors.push(i);
                num /= i;
                i = 1;
            }
        }
    }
    return factors
}