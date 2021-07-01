// ГРУППЫ ТЕХНИКУМА
let address_body = document.querySelector('.address_body');
let koshevogo = document.querySelector('.select_koshevogo');
let octyabrskaya = document.querySelector('.select_octyabrskaya');
let maya = document.querySelector('.select_maya');
let zaoch = document.querySelector('.select_zaoch');
let false_input_body = document.querySelector('.false_input_body');
address_body.addEventListener('change', () => {
    if(address_body.options.selectedIndex == 1){
        koshevogo.classList.add('active');
        octyabrskaya.classList.remove('active');
        maya.classList.remove('active');
        zaoch.classList.remove('active');
        false_input_body.style.display = 'none';
    }
    else if(address_body.options.selectedIndex == 2){
        octyabrskaya.classList.add('active');
        koshevogo.classList.remove('active');
        maya.classList.remove('active');
        zaoch.classList.remove('active');
        false_input_body.style.display = 'none';
    }
    else if(address_body.options.selectedIndex == 3){
        maya.classList.add('active');
        octyabrskaya.classList.remove('active');
        koshevogo.classList.remove('active');
        zaoch.classList.remove('active');
        false_input_body.style.display = 'none';
    }
    else if(address_body.options.selectedIndex == 4){
        maya.classList.remove('active');
        octyabrskaya.classList.remove('active');
        koshevogo.classList.remove('active');
        zaoch.classList.add('active');
        false_input_body.style.display = 'none';
    }
});

// НОМИНАЦИИ
let event_nom = document.querySelector('.event');
let nomination = document.querySelector('.nomination');
event_nom.addEventListener('change', () => {
    nomination.disabled = false;
});

// СПЕЦИАЛЬНОСТИ
let false_input_body_education = document.querySelector('.false_input_body_education');
let ugs = document.querySelector('.ugs');
let code_education_dr = document.querySelector('.select_code_education_dr');
let code_education_1 = document.querySelector('.select_code_education_1');
let code_education_2 = document.querySelector('.select_code_education_2');
let code_education_3 = document.querySelector('.select_code_education_3');
let code_education_4 = document.querySelector('.select_code_education_4');
let code_education_5 = document.querySelector('.select_code_education_5');
let code_education_6 = document.querySelector('.select_code_education_6');
let code_education_7 = document.querySelector('.select_code_education_7');
let code_education_8 = document.querySelector('.select_code_education_8');
let code_education_9 = document.querySelector('.select_code_education_9');
ugs.addEventListener('change', () => {
    if(ugs.options.selectedIndex == 1){
        code_education_1.classList.add('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 2){
        code_education_1.classList.remove('active');
        code_education_2.classList.add('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 3){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.add('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 4){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.add('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 5){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.add('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 6){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.add('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 7){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.add('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 8){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.add('active');
        code_education_9.classList.remove('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 9){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.add('active');code_education_dr.classList.remove('active');
        false_input_body_education.style.display = 'none';
    }
    else if(ugs.options.selectedIndex == 10){
        
        code_education_1.classList.remove('active');
        code_education_2.classList.remove('active');
        code_education_3.classList.remove('active');
        code_education_4.classList.remove('active');
        code_education_5.classList.remove('active');
        code_education_6.classList.remove('active');
        code_education_7.classList.remove('active');
        code_education_8.classList.remove('active');
        code_education_9.classList.remove('active');code_education_dr.classList.add('active');
        false_input_body_education.style.display = 'none';
    }
});

// вид работы
let view_work = document.querySelector('.view_work');
let statya = document.querySelector('.statya');
let project = document.querySelector('.project');
let false_input_body_view_work = document.querySelector('.false_input_body_view_work');
view_work.addEventListener('change', () => {
    if(view_work.options.selectedIndex == 1){
        statya.classList.add('active');
        project.classList.remove('active');
        false_input_body_view_work.style.display = 'none';
    }
    else if(view_work.options.selectedIndex == 2){
        statya.classList.remove('active');
        project.classList.add('active');
        false_input_body_view_work.style.display = 'none';
    }
});