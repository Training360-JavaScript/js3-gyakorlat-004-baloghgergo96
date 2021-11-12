const validator = (/^4\d{15}/);
const checkVisa = (number) => {
    return number.match(validator) ? true : false;
};

export default checkVisa;