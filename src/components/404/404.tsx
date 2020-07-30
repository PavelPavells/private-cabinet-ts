import React from "react";
import { Link } from "react-router-dom";
import "./404.scss";

const NotFound: React.FC = () => {
  return (
    <div className="error">
      <div className="error__image"></div>
      <div className="error__header">Доступ к ресурсу отклонен</div>
      <div className="error__description">Предоставленные данные не прошли проверку</div>
      <div className="error__code">Ошибка 404</div>
      <Link to="/" className="error__button">Авторизуйтесь</Link>
      <div className="error__link">Или перейдите на <a href="https://carddex.ru" target="_blank" rel="noopener noreferrer">официальный сайт</a></div>
    </div>
  );
};

export default NotFound;
