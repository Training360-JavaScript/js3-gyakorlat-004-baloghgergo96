const validator = (/\d{3}\.\d{3}\.\d{3}\.\d{2}$/);
const checkIP = (number) => {
    return number.match(validator) ? true : false;
};

export default checkIP;