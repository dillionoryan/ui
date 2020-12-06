

var updateView = async (button) => {
  if(button.dataset.querytype=="by_coursecode"){
    let queryValue= document.querySelector('#codeQuery').value;
    api= `http://localhost:3000/api/by_coursecode/${queryValue}`;
  }
  if(button.dataset.querytype=="by_undergrad"){
    api=`http://localhost:3000/api/by_courselevel/undergraduate`;
  }
  if(button.dataset.querytype=="by_graduate"){
    api=`http://localhost:3000/api/by_courselevel/graduate`;
  }
  if(button.dataset.querytype=="by_coursetitle"){
    let queryValue= document.querySelector('#titleQuery').value;
    api= `http://localhost:3000/api/by_coursetitle/${queryValue}`;
  }
  if(button.dataset.querytype=="by_courseprofessor"){
    let queryValue= document.querySelector('#professorQuery').value;
    api= `http://localhost:3000/api/by_courseprofessor/${queryValue}`;
  }
  const data= await fetch(api);
  const model= await data.json();
  render_view(model);

}


var render_view= (model) => {
  var source= document.querySelector("#show_results_view").innerHTML;
  var template= Handlebars.compile(source);
  var html= template(model);

  document.querySelector("#results").innerHTML= html;

}
