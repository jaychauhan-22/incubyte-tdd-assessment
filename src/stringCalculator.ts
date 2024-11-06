export class StringCalculator {
    add(numbers: string): number {
        let result = 0;
        
        // Check if numbers is empty
        if (numbers === "") {
            return 0;
        }

        // Split the numbers by delimeter ","
        const nums = numbers.split(",");

        // adding non-negative numbers and handling negative numbers
        for (const num of nums) {
            if (num !== "") {
                const n = parseInt(num, 10);
                result += n;
            }
        }

        return result;
    }
}