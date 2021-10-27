


function displayPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        // console.log(data)
    

    let cardHolder = document.getElementById('card-holder')

   // console.log(cardHolder);
    let html ="";
    data.forEach(e => {
       
        // console.log(e)
        html += `
        <div class=" col-12 col-lg-4 col-md-6 py-5">
          <div class="h-100 text-center  mx-auto" style="width: 18rem;">
              <div class="card text-center  h-100 py-5 " style="width: 18rem;">
                <div class="card-body py-2">
                  <h5 class="card-title">${e.title}</h5>
                  <p class="text-center py-3">${e.body}</a>
                  <h3 class="py-2">${e.id}</h3>
                  <a href="singlepage.html" class="btn btn-secondary stretched-link">Single Page</a>
                </div>
              </div>
          </div>
        </div>`
         
      cardHolder.innerHTML = html

    });

})
}

displayPost()



function displaySinglePost(){
  fetch('https://jsonplaceholder.typicode.com/posts/50')
  .then(response => response.json())
  .then((data) => {
      console.log(data)
      console.log(data.body)
  

  let singleCardHolder = document.getElementById('single-card-holder')

  console.log(singleCardHolder);

  let content ="";

  content += `
  <div class="col-md-4 ">
            <div class="card text-center" style="width: 18rem;">
               
                <div class="card-body bg-success text-white">
                  <h5 class="card-title py-3">${data.title}</h5>
                  <p class="text-center py-4">${data.body}.</p>
                  <h3>${data.id}</h3>
                  <a href="index.html" class="btn btn-warning my-3 stretched-link">Home Page</a>
                </div>
              </div>
        </div>`
     
    singleCardHolder.innerHTML = content

  });

}

displaySinglePost()