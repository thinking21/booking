import dayjs from "dayjs";

export function getRemaingTimeUntilTimeStamp(timestamp){
    const timestampDayjs = dayjs(timestamp);
    const nowDayjs = dayjs();
    if(timestampDayjs.isBefore(nowDayjs)){
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }

    return{
        seconds: getRemaingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemaingMinutes(nowDayjs, timestampDayjs),
        hours: getRemaingHours(nowDayjs, timestampDayjs),
        days: getRemaingDays(nowDayjs, timestampDayjs)
    };
}

function getRemaingSeconds(nowDayjs, timestampDayjs){
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}

function getRemaingMinutes(nowDayjs, timestampDayjs){
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}

function getRemaingHours(nowDayjs, timestampDayjs){
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}

function getRemaingDays(nowDayjs, timestampDayjs){
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString(); 
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}