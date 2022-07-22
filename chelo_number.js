function chelo_number(num, arr){
    let ost_1 = num % 10;
    let ost_2 = num % 100;
    let indx = (10 < ost_2 && ost_2 < 15) ? 2 : ost_1 == 1 ? 0 : (1 < ost_1 && ost_1 < 5) ? 1 : 2;
    return arr[indx];
}

console.log('Опубликовано: 114', chelo_number(114, ['день','дня','дней']), 'назад'); // Опубликовано 114 дней назад
