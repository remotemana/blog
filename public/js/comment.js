console.log("comment linked!")
document.querySelector("#comment").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#commentInput").value
    }
    console.log(userObj)
    fetch("/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})


