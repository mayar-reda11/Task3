let people = [
    {name:"Hanan", age:24, city:"Alex"}
    ,{name:"Jana", age:15, city:"Mansoura"}
    ,{name:"menna", age:19, city:"Giza"}
    ,{name:"Ahmed", age:26, city:"Ismailia"}
    ,{name:"Abdalla", age:23, city:"Asyut"}
    ,{name:"Mohamed" , age:20, city:"cairo"}
    ,{name:"Malak" , age:17, city:"Luxer"}
    ,{name:"Apada" , age:19, city:"Matrouh"}
    ,{name:"Farah" , age:20, city:"Monufia"}
    ,{name:"Hayat" , age:14, city:"Suez"}
    ]

const table = document.querySelector("#table");
const search = document.querySelector("#search");
const sortByName= document.querySelector("#sortByName");
const sortByAge = document.querySelector("#sortByAge");

function renderTable(data){
    table.innerHTML = "";
    if(data.length ===0){
        table.innerHTML = `<tr><td colspan="3" style="text-align: center;">No results found</td></tr>`;
        return;
    }

    data.forEach(person => {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
                `;
                table.appendChild(row);
    });
}
renderTable(people);

search.addEventListener("input",(e) =>{
    const term = e.target.value.toLowerCase().trim();

    const filtered = people.filter(p=>
        p.name.toLowerCase().includes(term) ||
        p.city.toLowerCase().includes(term)
    );
    renderTable(filtered);
});

sortByName.addEventListener("click",() => {
    const sorted = [...people].sort((a,b) => a.name.localeCompare(b.name));
    renderTable(sorted);
})

sortByAge.addEventListener("click", () =>{
    const sorted = [...people].sort((a,b) => a.age-b.age);
    renderTable(sorted);
})