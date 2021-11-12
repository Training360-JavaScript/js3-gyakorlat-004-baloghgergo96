const validator = (/([a-fA-F0-9]{2}\:){5}[a-fA-F0-9]{2}/);
const checkMAC = (number) => {
    return number.match(validator) ? true : false;
};

export default checkMAC;