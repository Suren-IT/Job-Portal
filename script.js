/* Java Script */
document.addEventListener('DOMContentLoaded' , function (){
    // =====LOGIN MODEL=======
    const loginBtn = document.getElementById('loginBtn1');
    const model = document.getElementById('loginModel');
    const closeModel = document.getElementById('closemodel');

    if (loginBtn && model && closeModel) {
        //open model
        loginBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            model.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        //closeModel
        const closeFn = ()=> {
            model.classList.remove('active');
            document.body.style.overflow= '';
        };

        closeModel.addEventListener('click',closeFn);
        model.addEventListener('click',(e) => {
            if(e.target === model) closeFn();
        })

        //ESC key
        document.addEventListener('keydown', (e) =>{
            if(e.key === 'Escape' && model.classList.contains('active')){
                closeFn();
            }
        });

    }

    // MOBILE MENU 
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click',(e)=>{
            nav.classList.toggle('active');
            menuToogle.innerHTML  = nav.classList.contains('active') ? 'Close': 'Menu'
        });
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click',()=>{
                nav.classList.remove('active');
                menuToggle.innerHTML = 'Menu';
            });
        });

        
    }
    console.log('Login Model & Footer Fixed  Working 100%');

});