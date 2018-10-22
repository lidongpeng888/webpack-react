const formatDate=(time)=>{
    const date= new Date(time),
    year = date.getFullYear(),
    month = date.getMonth()+1,
    day = date.getDate(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
    return `${year}-${(''+month).padStart(2,'0')}-${(day+'').padStart(2,'0')} ${(hour+'').padStart(2,'0')}:${minutes}:${(seconds+'').padStart(2,'0')}`
}

export {formatDate}