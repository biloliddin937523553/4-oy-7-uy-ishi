let str = ['Olma' , 'Banan' , 'Gilos' ,'Shaftoli' ];

let con = confirm(`Boshlaninshda Arryining uzunligi: ${str.length}`)
let con1 = confirm('Sizning arrayingizdan malumatlarni olib tashla moqchimiz')

if(con){
    console.log(str.splice(0,4));
}
else if (str == 4){
    (` Arryining uzunligi: 4`)
}
else if (str ==3){
    (` Arryining uzunligi: 3`)
}
else{
    console.log(str.splice(0,3));
}