const countVal = document.querySelector('#counter'); 

const increment = () => {
    let val = parseInt(countVal.innerHTML);
    val = val + 1;
    countVal.innerHTML = val;
};

const decrement = () => {
    let val = parseInt(countVal.innerHTML);
    val = val - 1;
    countVal.innerHTML = val;
};