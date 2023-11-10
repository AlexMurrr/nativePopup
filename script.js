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

