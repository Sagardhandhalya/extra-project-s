const upload = (e) =>{
  const file = e.target.files[0];
  console.log(file);

  let reader = new FileReader();
  reader.onload=(e) => console.log("jhfhx" + e.target.result)
  reader.readAsText(file); 
  }


document.getElementById('afile').addEventListener('change' , upload)


