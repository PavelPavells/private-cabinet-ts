import React from "react";
import { Link } from "react-router-dom";

import "./404.scss";

const NotFound: React.FC = props => {
  return (
    <div className="not-found">
      <Link to="/dashboard">
        <b>404</b>
      </Link>
      <br />
      <p>Данной страницы не существует на нашем сервере</p>
      <p>
        Либо вы указали неверный URL, у вас нет доступа
        привилегии для страницы, или страница, которую вы ищете, была
        удален.
      </p>
    </div>
  );
};

export default NotFound;
