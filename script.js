const popup = document.getElementById('popup');
const btn = document.getElementById('openPopupBtn');
const container = document.getElementById('center-container');

function noneBtnOpenPopup() {  
   popup.style.display = 'block';
   btn.style.display = 'none';
   console.log('Кнопка исчезла')
  } 
function noneContainer() {
   const container = document.getElementById('center-container');
   container.style.display = 'none';
   console.log('viv edlete')
  } 

function openPopup() {
    popup.style.display = 'block';
  }  
  
function closePopup() {
    popup.style.display = 'none';
  }

function getValue(){
  const surname = document.getElementById('surname').value;
  const name = document.getElementById('name').value; 
  const patronymic = document.getElementById('patronymic').value; 
  const specialization = document.getElementById('specialization').value; 
  const experience = document.getElementById('experience').value;
  document.getElementById('surnameP').innerHTML=surname;
  document.getElementById('nameP').innerHTML=name;
  document.getElementById('patronymicP').innerHTML=patronymic;
  document.getElementById('specializationP').innerHTML=specialization;
  document.getElementById('experienceP').innerHTML=experience;
  popup.style.display = '';
  
}  

