import moment from "moment";

export default (date) => moment.utc(date).format("Do MMMM YYYY");
