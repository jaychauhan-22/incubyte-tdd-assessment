import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculatorAdd", () => {

    test("shouldReturnZeroWhenInputIsEmpty", () => {
        // Given
        let calc = new StringCalculator();

        // When
        const result = calc.add("");

        // Then
        expect(result).toBe(0);
    });
});