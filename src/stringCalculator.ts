export class StringCalculator {
    add(numbers: string): number {
        let result = 0;
        
        // Check if numbers is empty
        if (numbers === "") {
            return 0;
        }

        // Replace non numeric characters with ","
        numbers = numbers.replace(/[^0-9-]+/g, ",");

        // Split the numbers by delimeter ","
        const nums = numbers.split(",");

        const negativeNums: string[] = [];

        // Adding non-negative numbers and handling negative numbers
        for (const num of nums) {
            if (num !== "") {
                const n = parseInt(num, 10);
                if (n < 0) {
                    negativeNums.push(num);
                }
                else if (n <= 1000) {
                    result += n;
                }
            }
        }
        
        // Throw Exception when negative numbers are found
        if (negativeNums.length > 0) {
            throw new Error(`negatives not allowed: ${negativeNums.join(", ")}`);
        }

        return result;
    }
}