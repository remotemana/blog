// console.log("comment linked!")
// document.querySelector("#comment").addEventListener("click", e=>{
//     e.preventDefault();
//     const userObj = {
//         commentBody:document.querySelector("#commentInput").value,
//         blogId:document.querySelector("input[name='blog-id']").value
//     }
//     console.log(userObj)
//     fetch("/api/comments",{
//         method:"POST",
//         body:JSON.stringify(userObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//             location.href="/dashboard"
//         } else {
//             alert("trumpet sound")
//         }
//     })
// })


console.log("comment linked!")

const commentHandler = async function(e) {

    e.preventDefault();
    console.log("clicked the add comment button")
    
    commentBody = document.querySelector("#commentInput").value,
    blogId = document.querySelector('input[name="blog-id"]').value


    console.log("blog id " + blogId)
    console.log(typeof(commentBody))
    if (commentBody) {
        fetch("/api/comments",{
            method:"POST",
            body: JSON.stringify({
                blogId,
                commentBody
            }),
            
            headers:{
                "Content-Type":"application/json"
            }
        });
        document.location.reload()
    }

}



document.querySelector("#comment").addEventListener("click", commentHandler)