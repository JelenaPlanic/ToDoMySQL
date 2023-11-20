const dayjs = require("dayjs");

const formatDate = (date) => {
    return dayjs(date).format("DD.MM.YYYY.");
};

const inputDate = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
};

module.exports = {formatDate, inputDate};