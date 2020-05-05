// Selectors
const btns = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.item');
const search = document.querySelector('#search');

// function for filtering with the buttons
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const filter = e.target.innerHTML;

        items.forEach((item) => {
            if(filter === "all") {
                item.style.display = "flex";
            } 
                else if(item.dataset.id === filter) {
                    item.style.display = 'flex';
                }

                else {
                    item.style.display = 'none';
                }
        
        })
    
    })
})

// function for filtering with search input

const searchBtn = document.querySelector('.search-btn');

function searchFilter() {
    let input = search.value.toLowerCase();
    
    items.forEach((item) => {
        if(item.dataset.id.includes(input)) {
            item.style.display = 'flex';
        } 
            else {
                item.style.display = 'none';   
        }
    })
}

searchBtn.addEventListener('click', searchFilter)
search.addEventListener('keyup', searchFilter)

//=================================================================================================================================================

const addToCart = document.querySelectorAll('.cart-btn')
const itemInfo =document.querySelectorAll('.item-info')


for(let i=0; i < addToCart.length; i++) {
   addToCart[i].addEventListener('click', () => {
    console.log( items[i]) 
   })
}
