import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__load">
        <h3 className='footer__load__title'>Скачайте наші додатки</h3>
        <div className="footer__load__content">
      <a href='#'> <img  className="footer__load__content__AS"src="./images/appStore.svg" alt="" /></a> 
      <a href='#'>  <img className="footer__load__content__GP" src="./images/googlePlay.svg" alt="" /></a>
       
        </div>
     
      </div>
      <div className="columns">
        <div className="column">
          <ul>
            <li>Слідкуйте за нами у соц мережах:</li>
            <li className='link'>
            <a className='column__link' href="#"><img src='./images/inst.svg'/></a>
            <a className='column__link' href="#"><img src='./images/f.svg'/></a>
            <a className='column__link' href="#"><img src='./images/uT.svg'/></a>
            <a className='column__link' href="#"><img src='./images/viber.svg'/></a>
            <a className='column__link' href="#"><img src='./images/teleg.svg'/></a>
            <a className='column__link' href="#"><img src='./images/twiter.svg'/></a>
            
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>Інформація про компанію</li>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Умови використання сайту</a></li>
            <li><a href="#">Умови використання сайту</a></li>
            <li><a href="#">Вакансії</a></li>
            <li><a href="#">Всі категорії</a></li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>Допомога</li>
            <li><a href="#">Доставка та оплата</a></li>
            <li><a href="#">Кредит</a></li>
            <li><a href="#">Гарантія</a></li>
            <li><a href="#">Повернення товару</a></li>
            <li><a href="#">Сервісні центри</a></li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>Сервіси</li>
            <li><a href="#">Бонусний рахунок</a></li>
            <li><a href="#">Подарункові сертифікати</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
