function fetchApi(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=W7KDD8GCUHZWUAUCQAUY4KGWY"
    fetch(url).then((res)=>res.json())
    .then(renderUI);
}
fetchApi();
const root= document.getElementById("root");

function renderUI(data){
    const days=data.days;
    console.log(days);
    const row = document.createElement("tr");
    let cell1 = document.createElement("th");
    cell1.innerText= 'Date'
    row.appendChild(cell1);
    let cell2 = document.createElement("th");
    cell2.innerText= 'Maximum \n Temperature'
    row.appendChild(cell2);
    let cell3 = document.createElement("th");
    cell3.innerText= 'Minimum \n Temperature'
    row.appendChild(cell3);
    root.append(row);

    // const childrow=document.createElement("tr");
    // let c1 = document.createElement("th");
    // c1.innerText= '07-04-24'
    // childrow.appendChild(c1);
    // let c2 = document.createElement("td");
    // c2.innerText= '90 F'
    // childrow.appendChild(c2);
    // root.append(childrow);
    for(i=0; i<days.length; i++)
    {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        cell1.innerText= days[i].datetime;
        cell2.innerText= days[i].tempmax;
        cell3.innerText= days[i].tempmin;
        row.append(cell1);
        row.append(cell2);
        row.append(cell3);
        root.append(row);
    }

}
renderUI();