export const convertToDateAndFormat = (dateString: string | undefined) =>{
    if( dateString === undefined ) {
        return null;
    }

    const date = new Date(dateString);
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day} ${month}, ${year}`;

    return formattedDate;
}
