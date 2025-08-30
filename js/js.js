class Web {
    constructor() {
        this.header();
        //this.registration();
        this.homePage();
    }
    header() {
        // Кнопка меню
        this.menuBtn = document.getElementById('menu');
        this.myDropdown = document.getElementById('myDropdown');

        this.menuBtn.addEventListener('click', () => {
            if (this.myDropdown.classList.contains('show')) {

                // Прячем меню
                this.myDropdown.classList.remove('visible');
                if (this.containerReg) {
                    this.containerReg.classList.remove('containerRegOpenMenu');
                }
                if (this.upHome) {
                    this.upHome.classList.remove('upHomeMenuOpen');
                }
                const handleTransitionEnd = () => {
                    this.myDropdown.classList.remove('show');
                    this.myDropdown.removeEventListener('transitionend', handleTransitionEnd);
                };
                this.myDropdown.addEventListener('transitionend', handleTransitionEnd);
            } else {
                // Показываем меню
                this.myDropdown.classList.add('show');
                if (this.containerReg) {
                    this.containerReg.classList.add('containerRegOpenMenu');
                }
                if (this.upHome) {
                    this.upHome.classList.add('upHomeMenuOpen');
                }
                requestAnimationFrame(() => {
                  this.myDropdown.classList.add('visible');
                });
            }
        });

        this.menuButton3 = document.getElementById('menuButton3');
        this.menuButton3.addEventListener('click', () => {
            this.registration();
        })

        //Кнопка лого
        this.logo = document.getElementById('logo');
        this.logo.addEventListener('click', () => {
            this.homePage();
        })
    }
    default() {
        
    }
    homePage() {
        if (this.main) {
            this.main.innerHTML = '';
        } else {
            this.main = document.createElement('main');
            document.body.append(this.main);
        }
        //верх главной
        this.upHomeTile = document.createElement('div');
        this.upHomeTile.className = 'upHomeTile';
        this.upHome = document.createElement('div');
        this.upHome.className = 'upHome';
        this.button1 = document.createElement('button');
        this.button1.className = 'button1';
        this.button2 = document.createElement('button');
        this.button2.className = 'button2';
        this.button3 = document.createElement('button');
        this.button3.className = 'button3';
        this.button4 = document.createElement('button');
        this.button4.className = 'button4';


        this.upHome.append(this.button1, this.button2, this.button3, this.button4);

        this.upHomeTile.append(this.upHome);
        this.main.append(this.upHomeTile);

        //ниже
        this.miniInfo = document.createElement('div');
        this.miniInfo.className = 'miniInfo';

        this.miniInfo1 = document.createElement('div');
        this.miniInfo1.className = 'miniInfo1';
        this.miniInfo1_img = document.createElement('img');
        this.miniInfo1_img.src = 'reference/delivery.png';
        this.miniInfo1_img.className = 'miniInfo1_img';
        this.miniInfo1_p = document.createElement('p');
        this.miniInfo1_p.textContent = 'Доставка по всему миру почтрой россии';
        this.miniInfo1_p.className = 'miniInfo1_p';

        this.miniInfo1.append(this.miniInfo1_img);
        this.miniInfo1.append(this.miniInfo1_p);

        this.miniInfo.append(this.miniInfo1);

        this.main.append(this.miniInfo);
    }

    registration() {
        if (this.main) {
            this.main.innerHTML = '';
        } else {
            this.main = document.createElement('main');
            document.body.append(this.main);
        }

        this.pReg = document.createElement('p');
        this.pReg.className = 'pReg';
        this.pReg.textContent = 'Регистрация';
        

        this.containerReg = document.createElement('div');
        this.containerReg.className = 'containerReg';

        this.areaReg = document.createElement('div');
        this.areaReg.className = 'areaReg';
        
        this.inputEmail = document.createElement('div');
        this.inputEmail.className = 'inputEmail';
        this.inputEmail.innerHTML = '<label>Твоя почта</label><input type="email" id="inputMail" required placeholder="@mail">';
        this.areaReg.append(this.inputEmail)

        this.inputPassword = document.createElement('div');
        this.inputPassword.className = 'inputPassword';
        this.inputPassword.innerHTML = '<label>Придумай пароль</label><input type="password" id="inputPas" placeholder="Пароль">';
        this.areaReg.append(this.inputPassword)

        this.inputPassword1 = document.createElement('div');
        this.inputPassword1.className = 'inputPassword';
        this.inputPassword1.innerHTML = '<label>Повторите пароль</label><input type="password" id="inputPas1" placeholder="Пароль">';
        this.areaReg.append(this.inputPassword1);

        this.containerReg.append(this.areaReg)

        this.button = document.createElement('div');
        this.button.className = 'button';
        this.buttonReg = document.createElement('button');
        this.buttonReg.className = 'buttonReg';
        this.buttonReg.textContent = 'Регистрация';
        this.button.append(this.buttonReg)
        this.areaReg.append(this.button);
        this.buttonReg.addEventListener('click', () => {
            logical.buttonRegistration();
        })

        this.main = document.createElement('main');

        this.main.append(this.pReg);
        this.main.append(this.containerReg);

        document.body.append(this.main);
    }
}

class Logical extends Web {
    constructor() {
        super();
    }
    buttonRegistration() {  
        this.pas = document.getElementById('inputPas');
        this.pas1 = document.getElementById('inputPas1');
        this.Mail = document.getElementById('inputMail');

        const isValid = this.Mail.checkValidity();

        if (this.pas.value !== this.pas1.value || this.pas.value.trim() == '' || this.pas1.value.trim() == '') {
            this.pas.classList.add('error');
            this.pas1.classList.add('error');
            setTimeout(() => {
                this.pas.classList.remove('error');
                this.pas1.classList.remove('error');
            }, 5000);
        } else {
            this.pas.classList.remove('error');
            this.pas1.classList.remove('error');
            alert('good!');
        };
        if (!isValid || this.Mail.value == null) {
            this.Mail.classList.add('error');
            setTimeout(() => {
                this.Mail.classList.remove('error');
            }, 5000)
        } else {

        }
    }
}


const logical = new Logical();

