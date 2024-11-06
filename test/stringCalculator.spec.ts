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

    test('shouldReturnSumWhenInputHasTwoNumber', () => {
        // When
        const result = calc.add("1,2");
        // Then
        expect(result).toBe(3);
    });

    test('shouldReturnSumWhenInputHasMultipleNumber', () => {
        // When
        const result = calc.add("1,2,3,10,32,43");
        // Then
        expect(result).toBe(91);
    });

    test('shouldReturnSumWhenInputHasNewLine', () => {
        // When
        const result = calc.add("1\n2,3");
        // Then
        expect(result).toBe(6);
    });

    test('shouldReturnSumWhenInputHasDiffDelimeter', () => {
        // When
        const result = calc.add("//[***]\n1***2***3");
        // Then
        expect(result).toBe(6);
    });

    test('shouldThrowExceptionWhenInputHasSingleNegativeNumber', () => {
        // Then
        expect(() => calc.add("-1,2")).toThrow("negatives not allowed: -1");
    });

    test('shouldThrowExceptionWhenInputHasMultipleNegativeNumber', () => {
        // Then
        expect(() => calc.add("-1,-2")).toThrow("negatives not allowed: -1, -2");
    });

    test('shouldIgnoreValueWhenInputContainsValueGreaterThan1000', () => {
        // When
        const result = calc.add("23,1001,3");
        // Then
        expect(result).toBe(26);
    });

});