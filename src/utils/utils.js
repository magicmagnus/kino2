
export const HOUR_WIDTH = 112; // w-32 = 128px
export const START_HOUR = 9; // 9 AM
export const END_HOUR = 25; // 1 AM next day
export const TOTAL_HOURS = END_HOUR - START_HOUR + 1;
export const TIMELINE_WIDTH = TOTAL_HOURS * HOUR_WIDTH;
// export today as YYYY-MM-DD
export const TODAY_FORMATTED = new Date().toISOString().split('T')[0];

// Generate hours for the timeline (9 AM to 1 AM next day)
export const HOURS = Array.from({ length: 17 }, (_, i) => {
    const hour = (i + START_HOUR) % 24;
    return `${hour.toString().padStart(2, '0')}:00`;
});


export const timeToPixels = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const hoursFromStart = hours >= START_HOUR ?
        hours - START_HOUR :
        hours + 24 - START_HOUR;
    return (hoursFromStart * 60 + minutes) * (HOUR_WIDTH / 60);
};

export const formatDateString = (date) => {
    
    let dateObj = new Date(date)
    if (date === TODAY_FORMATTED) {
        return 'Heute'
    } else if (
        dateObj.getDate() === new Date().getDate() + 1 &&
        dateObj.getMonth() === new Date().getMonth()
    ) {
        return 'Morgen'
    }
    
    return dateObj.toLocaleDateString('de-DE', {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric',
    })
}