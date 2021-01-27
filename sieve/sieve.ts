export default class Sieve {
    static primes(num: number) {
        const allNumbers = Array(num).fill(null).map((_, i) => i + 1).splice(1, num);
        const filter = (nums: number[], primes: number[] = []): number[] =>
            nums.length ? filter(nums.filter((val) => val % nums[0]), [...primes, nums[0]]) : primes
        return filter(allNumbers)
    }
}