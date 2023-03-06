// 1/ Отримати посилання на єлементи списку з класом item методом querySelectorAll та вивести довжину масиву
// 2/ Number of categories - це довжина отриманого масиву
// 3/ методом forEach перебираю єлементи з класом .item,
// щоб отримати інформацію про дітей цих єлементів
// 

const itemRefs = document.querySelectorAll('.item');

const categoriesNum = itemRefs.length;
console.log('Number of categories: ', categoriesNum);


itemRefs.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    console.log('Category:', categoryName);
    
    const categoryListItems = item.lastElementChild.children;
    console.log('Elements:', categoryListItems.length);
});


