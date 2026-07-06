function calculerMoyenne(notes) {
  if (notes.length === 0) return 0;

  let somme = 0;
  for (let note of notes) {
    somme += note;
  }
  return somme / notes.length;
}

// récupération des élements du DOM
const elementDivParent = document.getElementById('champs');
const elementbtnAdd = document.getElementById('btn_add');
const elementbtnCalc = document.getElementById('btn_calc');
const elementResultat = document.getElementById('element_resultat');

function onclickAjouterChamps() {
  const index = elementDivParent.children.length + 1;
  // div du champs
  const elementDivChamp = document.createElement('div');
  elementDivChamp.draggable = true;
  elementDivChamp.classList.add('animate__animated');
  elementDivChamp.classList.add('animate__bounceIn');

  // creation de l'input
  const elementInput = document.createElement('input');
  elementInput.id = 'champ_' + index;
  elementInput.type = 'number';
  elementInput.placeholder = 'note ' + index;
  elementInput.autocomplete = 'on';

  elementInput.addEventListener('input', (event) => {
    console.log(event)
  });

  // creation du bouton de suppression
  const elementBtn = document.createElement('button');
  elementBtn.textContent = 'Supprimer'
  elementBtn.onclick = () => {
    if (elementDivParent.children.length === 1) return;
    elementDivChamp.remove();
  }

  // ajout à la div du champs
  elementDivChamp.appendChild(elementInput);
  if (elementDivParent.children.length >= 1) {
    elementDivChamp.appendChild(elementBtn);
  }
  
  // ajouter la div à la div parent
  elementDivParent.appendChild(elementDivChamp);
}

function onclickSupprimerChamps() {
  const lastChildrenDiv = elementDivParent.children[elementDivParent.children.length - 1];
  lastChildrenDiv.remove();
}

onclickAjouterChamps()

function onclickCalculer() {
  console.log('enfant de la div', elementDivParent.children)
  const notes = [];
  for (let elementDiv of elementDivParent.children) {
    const input = elementDiv.querySelector('input');
    notes.push(isNaN(parseFloat(input.value)) ? 0 : parseFloat(input.value))
  }
  console.log('notes', notes);
  const moyenne = calculerMoyenne(notes);
  console.log('moyenne', moyenne);
  elementResultat.innerText = `Resultat: ${moyenne}`;
}

elementbtnAdd.addEventListener('click', onclickAjouterChamps);
elementbtnCalc.addEventListener('click', onclickCalculer);
