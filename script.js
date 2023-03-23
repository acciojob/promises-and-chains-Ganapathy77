//your JS code here. If required.
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    
    let name1 = nameInput.value;
    let age = parseInt(ageInput.value);

    if(isNaN(age) || age<1 || name1.trim() === ""){
        alert("Please enter a valid input...")
        return;
    }

    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age>18){
                resolve();
            }
            else{
                reject();
            }
        },4000)
    }).then(()=>{
        alert(`Welcome, ${name1}. You can vote.`)
    }).catch(()=>{
        alert(`Oh sorry ${name1} You aren't old enough.`)
    })
});


