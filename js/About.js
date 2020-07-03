let users = [
    {surname: "Berger", firstname: "Whitney", age: 22 },
    {surname: "Nagy", firstname: "Béla", age: 10 },
    {surname: "Kiss", firstname: "Bence", age: 2 },
    {surname: "Kovács", firstname: "Ágos", age: 13 },
    {surname: "Doe", firstname: "Joe", age: 33 },
    {surname: "Jack", firstname: "Szabó", age: 12 },
    {surname: "Antal", firstname: "Dezső", age: 80 },
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML= html;
    parent.appendChild(td);
} //megkapja a megjelenítendő adatot (html) és melyik elemhez kell hozzáadni(szülő elem)

//gomb csoport elkészítése
let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group"; //ez lesz a classname-je

    let btnInfo = document.createElement("button");
    btnInfo.classname = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.classname = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-sync-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(users[k])) { //értékeken megy végig
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}




//Promise elágazás
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{ // időeltolás
        resolve ({name:"Piri"});
        reject({error:"User not found"});
    }, 3000);//3 másodpercet vár
});
myPromise.then(
    data => console.log(data), //ez a resolve
    err => console.err(err) //ez a reject
)

//Fetch úgy kérjek le adatot a szerverről hogy ne töltsön be újra a szerver
let fetchInit = {
    method: "GET", //milyen metódus
    headers: new Headers(),// milyen fejléc
    mode: "cors", //olyan URl-re kérés aminek nem egyezik meg a domainja azzal ahonnan küldöm---cors-al domaineken átívelő
    cache: "default" //eltárolja e az adatokat
};
fetch("http://localhost:300/users", fetchInit).then ( //promise beállítható
data => data.json(), //ez is egy promise lesz
err => console.error(err)
).then (
    users => console.log(users)
)


/* ilyet akarok
                        <tr>
                            <td>1</td>
                            <td>Kiss</td>
                            <td>János</td>
                            <td>55</td>
                            <td class="btn-group">
                                <button class="btn-info btn">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                                <button class="btn-danger btn">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
*/