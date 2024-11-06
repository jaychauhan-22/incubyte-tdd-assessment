import { StringCalculator } from "../src/stringCalculator";

describe("StringCalculatorAdd", () => {
    // Given
    let calc: StringCalculator;
    
    beforeEach(() => {
        calc = new StringCalculator();
    });

    test("shouldReturnZeroWhenInputIsEmpty", () => {
        // When
        const result = calc.add("");
        // Then
        expect(result).toBe(0);
    });

    test('shouldReturnNumberWhenInputHasSingleNumber', () => {
        // When
        const result = calc.add("1");
        // Then
        expect(result).toBe(1);
    });
    
});