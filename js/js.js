import { supabase } from './Supabase.js';

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
            this.main.id = 'main';
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

        //Раздел фидбэка
        this.feedbackSection = document.createElement('div');
        this.feedbackSection.className = 'feedbackSection';

        this.feedback_p = document.createElement('p')
        this.feedback_p.className = 'feedback_p';
        this.feedback_p.textContent = 'Обратная связь';
        this.feedbackSection.append(this.feedback_p);

        this.feedback_p = document.createElement('p')
        this.feedback_p.className = 'feedback_p_info';
        this.feedback_p.textContent = 'оставьте контактную связь и менеджер свяжется с вами.';
        this.feedbackSection.append(this.feedback_p);

        this.feedback = document.createElement('div');
        this.feedback.className = 'feedback';

        this.feedbackInputSection = document.createElement('div');
        this.feedbackInputSection.className = 'feedbackInputSection';
        this.feedback.append(this.feedbackInputSection);

        this.feedbackMail_p = document.createElement('p');
        this.feedbackMail_p.className = 'feedbackMail_p';
        this.feedbackMail_p.textContent = 'Введите почту';
        this.feedbackInputSection.append(this.feedbackMail_p);

        this.feedbackMail = document.createElement('input');
        this.feedbackMail.className = 'feedbackMail';
        this.feedbackMail.placeholder = 'Email';
        this.feedbackInputSection.append(this.feedbackMail);

        this.feedbackPhone_p = document.createElement('p');
        this.feedbackPhone_p.className = 'feedbackPhone_p';
        this.feedbackPhone_p.textContent = 'Введите телефон';
        this.feedbackInputSection.append(this.feedbackPhone_p);

        this.feedbackPhone = document.createElement('input');
        this.feedbackPhone.className = 'feedbackPhone';
        this.feedbackPhone.placeholder = 'Телефон';
        this.feedbackInputSection.append(this.feedbackPhone);

        this.buttonFeedback = document.createElement('button');
        this.buttonFeedback.className = 'buttonFeedback';
        this.buttonFeedback.textContent = 'Отправить';
        this.feedbackInputSection.append(this.buttonFeedback);

        this.accompanying = document.createElement('div');
        this.accompanying.className = 'accompanying';
        this.feedback.append(this.accompanying);

        this.feedbackSection.append(this.feedback);
        this.main.append(this.feedbackSection);

        //информационная зона
        this.infoZone = document.createElement('div');
        this.infoZone.className = 'infoZone';

        //заголовок блока
        this.infoZoneLabel = document.createElement('p');
        this.infoZoneLabel.className = 'infoZoneLabel';
        this.infoZoneLabel.textContent = 'Новостная лента';
        this.infoZone.append(this.infoZoneLabel);

        //контейнер для контента
        this.information1 = document.createElement('div');
        this.information1.className = 'information1';

        //текст контента
        this.information1_p = document.createElement('p');
        this.information1_p.className = 'information1_p';
        this.information1_p.textContent = 'Учитывая ключевые представителей целевой аудитории является четким доказательством простого факта: перспективное планирование позволяет оценить значение существующих финансовых и административных условий. В частности, постоянный количественный рост и сфера нашей активности способствует подготовке и реализации первоочередных требований. В частности, внедрение современных методик требует от нас анализа приоретизации разума над эмоциями. Но дальнейшее развитие различных форм деятельности требует определения и уточнения поставленных обществом задач. И нет сомнений, что элементы политического процесса призывают нас к новым свершениям, которые, в свою очередь, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Однозначно, активно развивающиеся страны третьего мира являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. А также действия представителей оппозиции, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть ассоциативно распределены по отраслям. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов.';

        //сборка
        this.information1.append(this.information1_p);
        this.infoZone.append(this.information1);
        this.main.append(this.infoZone);
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
            this.buttonRegistration();
        })

        this.main.append(this.pReg);
        this.main.append(this.containerReg);

    }
    
}

class Logical extends Web {
    //логика кнопки регистрации
    async buttonRegistration() {
        this.pas = document.getElementById('inputPas');
        this.pas1 = document.getElementById('inputPas1');
        this.Mail = document.getElementById('inputMail');

        const isValid = this.Mail.checkValidity();

        if (this.pas.value !== this.pas1.value || this.pas.value.trim() === '') {
            this.pas.classList.add('error');
            this.pas1.classList.add('error');
            setTimeout(() => {
                this.pas.classList.remove('error');
                this.pas1.classList.remove('error');
            }, 5000);
            return;
        }

        if (!isValid || this.Mail.value.trim() === '') {
            this.Mail.classList.add('error');
            setTimeout(() => {
                this.Mail.classList.remove('error');
            }, 5000);
            return;
        }

        // Используем безопасную регистрацию через Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email: this.Mail.value,
            password: this.pas.value,
        });

        if (error) {
            console.error('Ошибка при регистрации:', error.message);
            alert('Ошибка при регистрации: ' + error.message);
        } else {
            // Получаем ID пользователя
            const userId = data.user?.id;

            // Создаём профиль в таблице profiles
            const { error: profileError } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: userId,
                        email: this.Mail.value,
                        // можно добавить и другие поля, например:
                        // username: 'Имя_пользователя'
                    }
                ]);

            if (profileError) {
                console.error('Ошибка при создании профиля:', profileError.message);
            }

            alert('Регистрация прошла успешно! Подтвердите почту.');
        }
    }
}


const logical = new Logical();

