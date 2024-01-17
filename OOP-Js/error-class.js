class ValidationError extends Error {

    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class MathUtil {
    static sum(...numbers) {

        if (numbers.length === 0) {
            throw new ValidationError("Total parameter must have more than 1 value!", "numbers");
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

try {
    console.info(MathUtil.sum());
    console.info("Done");
} catch (error) {
    console.info(`Error : ${error.message} [input ${error.field} value]`);
} finally {
    console.info("Program finished!");
}