import moment from "moment";

const func = (date, type) => {
  if (!date) return null;
  if (type === "input") {
    date = moment.utc(date).toDate();
    date.setHours(date.getHours() + 24);
    return moment.utc(date).format("YYYY-MM-DD");
  }

  if (type === "fromNow") {
    date = moment.utc(date).toDate();
    date.setHours(date.getHours() + 8);
    date.setMinutes(date.getMinutes() - 60);
    date = moment.utc(date).fromNow();
    return date;
  }

  date = moment.utc(date).toDate();
  date.setHours(date.getHours() + 24);
  return moment.utc(date).format("Do MMMM YYYY");
};
//   !date
//     ? null
//     : type === "input"
//     ? moment.utc(date).format("YYYY-DD-MM")
//     : type === "fromNow"
//     ? moment.utc(date).fromNow()
//     : moment.utc(date).format("Do MMMM YYYY");

export default func;
