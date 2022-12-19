const searc = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const url = 'https://www.google.com.br/search?q=' + searc.value;
    window.open(url,'self');
})

searc.addEventListener('keypress', function(e) {
    if(e.key === "Enter"){
        const url = 'https://www.google.com.br/search?q=' + searc.value;
        searc.click();
        window.open(url,'_self');
    }
    
})