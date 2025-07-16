let input = document.querySelectorAll("input")
let table = document.querySelector("table")
let btn = document.getElementById("createBtn")
let row
let formHandle=()=>{
event.preventDefault()
let userName = input[0].value
let userSalary = input[1].value
let userCompany = input[2].value
let tr = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")
let td4 = document.createElement("td")
let updateBtn = document.createElement("button")
let deleteBtn = document.createElement("button")

if(btn.innerText=="submit")
{
    if(userName=="" || userSalary=="" || userCompany==""){
        alert("please fill the all fields")
    }
    else{
        td1.innerText = userName
        td2.innerText = userSalary
        td3.innerText = userCompany
        updateBtn.innerText = "Edit"
        deleteBtn.innerText = "Delete"
        td4.append(updateBtn,deleteBtn)
        tr.append(td1, td2, td3, td4)
        table.appendChild(tr)
        input[0].value=""
        input[1].value=""
        input[2].value=""
        
        updateBtn.addEventListener("click",()=>{
            row = tr;
            input[0].value = row.cells[0].innerText;
            input[1].value = row.cells[1].innerText;
            input[2].value = row.cells[2].innerText;
            btn.innerText="update"
        }  ) 
        deleteBtn.addEventListener("click",()=>{
            tr.remove()
        })
    }
}else{
    row.cells[0].innerText = input[0].value
    row.cells[1].innerText = input[1].value
    row.cells[2].innerText = input[2].value
    input[0].value=""
    input[1].value=""
    input[2].value=""
    btn.innerText = "submit"
}   

}
