class Web {
    constructor() {
        //флаг страницы
        this.savedPage = localStorage.getItem('activePage');

        this.header();
        if (this.savedPage === 'registrationPage') {
            this.registration();
        } else {
            this.homePage();
        }
    }
    header() {
        // Кнопка меню
        this.menuBtn = document.getElementById('menu');
        this.myDropdown = document.getElementById('myDropdown');

        //функция меню
        //TODO Перенести функции в логический класс
        const hideMenu = () => {
            //скрытие меню
            if (this.myDropdown.classList.contains('show')) {
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
            }
        };
        const showMenu = () => {
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

        //обработчик нажатия на кнопку меню
        this.menuBtn.addEventListener('click', (e) => {
            if (this.myDropdown.classList.contains('show')) {
                hideMenu();
            } else {
                showMenu();
            }
        })
            
        //обработчик клика вне меню
        document.addEventListener('click', (e) => {
            if (this.myDropdown.classList.contains('show') && !this.myDropdown.contains(e.target) && !this.menuBtn.contains(e.target)) {
                hideMenu();
            }
        });

        this.menuButton3 = document.getElementById('menuButton3');
        this.menuButton3.addEventListener('click', () => {
            if (this.savedPage !== 'registrationPage') {
                this.registration();
            }
            hideMenu();
        })

        //Кнопка лого
        this.logo = document.getElementById('logo');
        this.logo.addEventListener('click', () => {
            if (this.savedPage !== 'homePage') {
                this.homePage();
            } else {
                window.scrollTo(0, 0);
            }
        })
    }
    default() {
        
    }
    homePage() {
        localStorage.setItem('activePage', 'homePage');
        this.savedPage = 'homePage';

        //TODO вывести в класс логики
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (this.main) {
            if (header && footer) {
                header.parentNode.insertBefore(this.main, footer);
            }
            this.main.innerHTML = '';
        } else {
            this.main = document.createElement('main');
            if (header && footer) {
                header.parentNode.insertBefore(this.main, footer);
            }
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

        //Основа сноски
        class MiniInfo {
            constructor(imgSrc, text, additionalClass = '') {
                //Создаём основной контейнер miniInfo
                this.miniInfo = document.createElement('div');
                this.miniInfo.className = 'miniInfo';

                //Создаём внутренний контейнер (miniInfo1, miniInfo2 и т.д.)
                this.container = document.createElement('div');
                this.container.className = `miniInfo${additionalClass}`;

                //Создаём изображение
                this.img = document.createElement('img');
                this.img.src = imgSrc;
                this.img.className = `miniInfo${additionalClass}_img`;

                //Создаём параграф
                this.p = document.createElement('p');
                this.p.textContent = text;
                this.p.className = `miniInfo${additionalClass}_p`;

                //Собираем всё вместе
                this.container.append(this.img, this.p);
                this.miniInfo.append(this.container);

                //Возвращаем готовый элемент
                return this.miniInfo;
            }
        }

        //Первая сноска
        const deliveryInfo = new MiniInfo('reference/delivery.png', 'Доставка по всему миру почтой россии', '1');
        this.main.append(deliveryInfo);

        //Вторая сноска
        const qualityInfo = new MiniInfo('reference/quality.png', 'Качество соответствует международным стандартам', '2')
        this.main.append(qualityInfo);

        //Третья строка
        //...

        class CompanyFeed {
            constructor(text, additionalClass = '') {
                //Создаём основной контейнер companyFeed
                this.companyFeed = document.createElement('div');
                this.companyFeed.className = 'companyFeed';

                //создаём внутренний контейнер
                this.container = document.createElement('div');
                this.container.className = `companyFeed${additionalClass}`;

                //Создаём параграф
                this.p = document.createElement('p');
                this.p.className = `companyFeed${additionalClass}p`;
                this.p.textContent = text;

                //Собираем всё вместе
                this.container.append(this.p);
                this.companyFeed.append(this.container);

                //Возвращаем готовый элемент
                return this.companyFeed;
            }
        }
        //Первый фид
        const factoryFeed = new CompanyFeed('Бумага создаётся на современном оборудовании с соблюдением передовых технологий', '1');
        this.main.append(factoryFeed);
        
        //Второй фид
        const deliveryFeed = new CompanyFeed('Доставка осуществляется частными перевозками', '2');
        this.main.append(deliveryFeed);
    }

    registration() {
        localStorage.setItem('activePage', 'registrationPage');
        this.savedPage = 'registrationPage';

        //TODO вывести в класс логики
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (this.main) {
            if (header && footer) {
                header.parentNode.insertBefore(this.main, footer);
            }
            this.main.innerHTML = '';
        } else {
            this.main = document.createElement('main');
            this.main.id = 'main';
            if (header && footer) {
                header.parentNode.insertBefore(this.main, footer);
            }
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

        this.main.append(this.pReg);
        this.main.append(this.containerReg);

    }
    
}

class Logical extends Web {
    //логика кнопки регистрации
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
    bor() {
        alert('ddd')
    }
}


const logical = new Logical();

