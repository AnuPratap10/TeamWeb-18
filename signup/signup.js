let form=document.querySelector("form");
function showinfo(){
    event.preventDefault();
    let obj={
        name:form.name.value,
        email:form.email.value,
        organisation:form.organisation.value
    }
    alert(obj.name+" "+"welcome to campus");
}
form.addEventListener("submit",showinfo);