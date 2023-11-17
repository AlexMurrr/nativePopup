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
  document.getElementById('dataInput').innerText='Данные из input:';
  document.getElementById('surnameP').innerText=surname;
  document.getElementById('nameP').innerText=name;
  document.getElementById('patronymicP').innerText=patronymic;
  document.getElementById('specializationP').innerText=specialization;
  document.getElementById('experienceP').innerText=experience;  

  const jsonData = JSON.stringify({Фамилия:surname, Имя: name, Отчество: patronymic, Специальность: specialization, Опыт: experience}); 
  document.getElementById('jsonName').innerText='Данные из json:';
  document.getElementById('jsonDate').innerText=jsonData;
  popup.style.display = '';
}  

window.addEventListener("click", function(event) { 
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      popup.style.display = "none";    
  }
});

function setJSON (){
  const jsonData = JSON.stringify({Фамилия:'surname'}); 
  document.getElementById('jsonDate').innerText='Данные из json: ' + jsonData;
}
