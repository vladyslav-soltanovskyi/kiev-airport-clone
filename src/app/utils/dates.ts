import moment from "moment";
import queryString from "query-string";

export const formatTime = (date: string) => moment(new Date(date)).format('HH:mm');

export const formatDay = (date: Date) => moment(new Date(date)).format('DD/MM');

export const formatDate = (date: Date) => moment(date).format('YYYY/MM/DD');

export const formatDateQuery = (date: Date) => moment(date).format('DD-MM-YYYY');

export const checkIsDatesEqual = (date1: Date, date2: Date) => {
  const d1 = formatDate(date1);
  const d2 = formatDate(date2);
  
  return moment(new Date(d1)).isSame(new Date(d2));
}

export const today = new Date();
export const tomorrow = new Date(moment(today).add(1, 'days').format());
export const yesterday = new Date(moment(today).subtract(1, 'days').format());

export const getDateByParams = () => {
  const { date } = queryString.parse(location.search);
  const formatedDate = typeof date === 'string' ? date.split('-').reverse().join('/') : '';
  const d = typeof date === 'string' ? new Date(formatedDate) : today;

  return d;
}