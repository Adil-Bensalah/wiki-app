// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srs0earch=${searchInput}`
 

const form= document.querySelector('form');
form.addEventListener('submit' ,handelSubmit)

function handelSubmit(e){
  e.preventDefault()
  const input = document.querySelector('input').value
  const searchInput = input.trim();

handleRequest(searchInput);


try {
  handleRequest(searchInput);
} catch (error) {
  error= alert(` une erreur c'est produite veillez  revenir plutard`)
}
}

  function handleRequest (searchInput) {
  const url =  `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchInput}`;
  axios.get(url)
  .then(request=> handelResult(request.data))
  .catch(error=> console.log(error))

}

function  handelResult (request) {
  
 var results = document.querySelector('.results-display')
 results.innerHTML=''

 request.query.search.forEach(element => {
  const url = `https://en.wikipedia.org/?curid=${element.pageid}`;

  results.insertAdjacentHTML(
    'beforeend',
   `<div class = resultSearch>
   <h3 class= title>
   <a href="${url}"  target="_blank" >${element.title}</a>
   <h3>
   <a href="${url}"  target="_blank" class="theLink" >${url}</a> <br>
   <span class = "snipet">${element.snippet} </span> 

   </div><br>`

  )
  
 })
 
};




