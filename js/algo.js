/*
főző bekapcsolása
if nincs benne kávé
    kávé bettétele
endif
if nincs elég víz
    víz hozzáadása
endif
while nem melegedett fel a víz
    10 mp várakozás
endwhile
csésze odahelyezése
gomb megnyomása
*/


//nevezetes algoritmusok

/*Összegzés algoritmusa
összeg = 0 ---összegyűjti az értékeket
ciklus AMÍG van még szám, ADDIG 
    szám= következő elem
    összeg = összeg + szám
ciklus vége
*/
let numericArray=[1,3,2,5,4,7,6,9];
let sum = 0;
for(let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum:", sum);


/*Számlálás algoritmusa
darab=0
Ciklus AMÍG van még szám, ADDIG
    szám=  következő elem
    HA igaz a feltétel a számra, AKKOR
        darab= darab+1
    Feltétel vége
Ciklus vége
*/

let db = 0;
for(let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] % 2 == 0) /*párosszám*/ {
        db++;
    }
}
console.log("Even numbers:", db);


/*Szélsőérték keresés algoritmusa
legnagyobb = első elem
Ciklus AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    Feltétel vége
Ciklus vége
*/

let biggest = numericArray[0]; /*numerarray első eleme*/
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] > biggest) {
        biggest = numericArray[i];
    } 
}
console.log("The biggest element:", biggest);

let smallest = numericArray[0]; /*numerarray első eleme*/
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] < smallest) {
        smallest = numericArray[i];
    } 
}
console.log("The smallest element:", smallest);



/*Eldöntés tétele (algoritmusa)?
találat = HAMIS
Ciklus AMÍG van elem ÉS TALÁLAT = HAMIS, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = TRUE
    Feltétel vége
Ciklus vége
*/

let contains = false;
for (let i = 0; i < numericArray.length && !contains; i++) /*lehetne simán contains==false */{
    if (numericArray[i] == 13) {
        contains = true;
    }
}
console.log("This array contains 13:", contains);