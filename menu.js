//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})


//Upload

/*window.addEventListener("load",()=>{
	const input = document.getElementById("upload");
	const filewrapper =document.getElementById("filewrapper");
	
	input.addEventListener("change",(e)=>{
		let fileName = e.target.files[0].name;
		let filetype= e.target.value.split(".").pop();
		fileshow(fileName, filetype);
	})
	
	const fileshow= (filename, filetype)=>{
		const showfileboxElem= document.createElement("div");
		showfileboxElem.classList.add("showfilebox");
		const leftElem = document.createElement("div");
		leftElem.classList.add("left");
		const fileTypeElem = document.createElement("span");
		fileTypeElem.classList.add("filetype");
		fileTypeElem.innerHTML=filetype;
		leftElem.append(fileTypeElem);
		const filetitleElem = document.createElement("h3");
		filetitleElem.innerHtml=fileName;
		leftElem.append(filetitleElem);
		showfileboxElem.append(leftElem);
		const rightElem = document.createElement("div");
		rightElem.classList.add("right");
		showfileboxElem.append(rightElem);
		const crossElem =document.createElement("span");
		crossElem.innerHTML="&#215;";
		rightElem.append(crossElem);
		filewrapper.append(showfileboxElem);
		
		crossElem.addEventListener("click",()=>{
			filewrapper.removeChild(showfileboxElem);
		})
		
	}
		
		
		

}*/


