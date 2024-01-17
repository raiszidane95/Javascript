class MathUtil {
    static sum(...numbers) {

        if (numbers.length === 0) {
            throw new Error("Total parameter must have more than 1 value!");
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

try {
    console.info(MathUtil.sum(1, 1, 1, 1));
    console.info(MathUtil.sum());
    console.info("Done");
} catch (error) {
    console.info(`Error : ${error.message}`);
} finally {
    console.info("Program finished!");
}