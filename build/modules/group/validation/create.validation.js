import { ApiError } from "@point-hub/express-error-handler";
import Validatorjs from "validatorjs";
// https://github.com/mikeerickson/validatorjs
export const validate = (document) => {
    try {
        const validation = new Validatorjs(document, {
            name: "required",
        });
        if (validation.fails()) {
            throw new ApiError(422, validation.errors.errors);
        }
    }
    catch (error) {
        throw error;
    }
};
