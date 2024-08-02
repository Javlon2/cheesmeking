import img from '../../assets/Header/location.svg'
import img1 from '../../assets/Header/time.svg'
import img2 from '../../assets/Header/akk.svg'
import img3 from '../../assets/Logo.svg'
import img4 from '../../assets/Header/blear.svg'  
import img5 from '../../assets/Header/blear-1.svg'  
import img6 from '../../assets/Header/blear-2.svg'  
import Telegram from '../../assets/Header/Telegram.svg'
import WhatsUp from '../../assets/Header/WhatsUp.svg'
import Messenger from '../../assets/Header/Messenger.svg'
import phone from '../../assets/Header/phone.svg'  
import shop from '../../assets/Header/shop.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center bg-[#FFFBED]'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="w-full max-w-[1580px] h-10 bg-[#FFFBED] px-20  flex justify-between items-center">
             <div className="flex flex-row items-center gap-5 ">
                <span className="flex items-center"><img src={img} alt="" />Ваш город: 
                    <select className='bg-[#FFFBED] '>
                        <option value="">Moskva</option>
                        <option value="">Xitoy</option>
                        <option value="">Uzbek</option>
                        <option value="">Angliya</option>
                    </select>
                </span>
                <span className="flex items-center gap-1">
                     <img src={img1} alt="" />
                     Пн-Пт 9:00 - 19:00 
                </span> 
             </div>
             <div className='flex gap-5 font-[500] items-center'>
                <a href="#">О компании</a>
                <a href="#">Преимущества</a>
                <a href="#">Акционные товары</a>
               <Link to={"./login"}>
                    <a href='#' className='flex items-center gap-1'><img src={img2} alt="" /> Войти в аккаунт</a>
               </Link>
             </div> 
          </div>
          <div className='w-[100%] h-20 bg-[#FFFBED] px-20 border-[1px] border-slate-300 flex gap-3 items-center'>
             <Link to={'/'}><img src={img3} alt="" /></Link>
             <div className="flex gap-4">
              <div className="flex gap-3 items-center">
               <img src={img4} alt="" />
               <div className='text-[14px]'>
                  <p>Бесплатная </p>    
                  <p> доставка</p>
               </div>
               </div>
               <div className="flex gap-3 items-center">
               <img src={img5} alt="" />
               <div className='text-[14px]'>
                  <p>Скидка при  </p>    
                  <p> оплате на сайте</p>
               </div>
               </div>
               <div className="flex gap-3 items-center">
               <img src={img6} alt="" />
               <div className='text-[14px]'>
                  <p>Защита </p>    
                  <p> покупателей</p>
               </div>
               </div>
             </div>
             <div className="flex gap-4 items-center">
                  <img src={Telegram} alt="" />
                  <img src={WhatsUp} alt="" />
                  <img src={Messenger} alt="" />
               </div>
               <div className="flex gap-1 items-center flex-col">
                  <h5 className='font-bold'>+8 916 460-19-60</h5>
                  <button className='flex items-center justify-center gap-2 w-[180px] h-[35px] border-[#FD9339] border-[2px] rounded-[5px] text-[#FD9339]'><img src={phone} alt="" /> Заказать звонок</button>
               </div>
               <div className="flex gap-3 items-center">
                  <p className='text-[17px]'>Ваша корзина<br />
                  <span className='text-[#FD9339]'>1680 руб.</span> </p>
                  <Link to={'./korzinka'}>
                     <div className="flex ">
                     <img src={shop} alt="" />
                     <p ></p>
                     </div>
                  </Link>
               </div>
          </div>
          <div className="w-[100%] h-10 bg-[#FFFBED] px-20  flex justify-between items-center"   >
            <div className="flex gap-4  items-center text-[14px]">
               <p>
                  <select className='bg-[#FFFBED] text-[14px]  ' name="dfasfas" id="adasfsa">
                     <option value="">Рецепты</option>
                     <option value="">Молодые сыры</option>
                     <option value="">Полутвердые сыры</option>
                     <option value="">Паста Филата</option>
                     <option value="">Сывороточные сыры</option>
                     <option value="">Сыры с плесенью</option>
                     <option value="">Твердые сыры</option>
                     <option value="">Творожные сыры</option>
                     <option value="">Кисломолочные продукты</option>
                     <option value="">Все рецепты</option>
                  </select>
               </p>
               <p>Доставка и оплата</p>
               <p>Калькулятор Сыродела</p>
               <p>Отзывы</p>
               <p>Вопросы и ответы</p>
               <p>Контакты</p>
            </div>
            <div className="flex gap-2 items-center">
               <input className='bg-[#FFFBED] text-[14px] w-60 h-8 p-2 rounded-[5px]  border-[#F4F0E6] border-[2px]' type="text" placeholder='Введите название товара или артикул' />
            </div>
          </div>
       </nav>
    </div>
  )
}

export default Header
