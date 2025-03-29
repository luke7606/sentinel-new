import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ScoreMeter from "./components/ScoreMeter";

const App = () => {
  const { t, i18n } = useTranslation();
  const [answers, setAnswers] = useState(["", "", ""]);
  const [score, setScore] = useState(null);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const evaluate = () => {
    const points = answers.reduce((sum, val) => sum + (val === "yes" ? 33 : 0), 0);
    setScore(points);
  };

  return (
    <div className="container">
      <h1>SENTINEL CUJU</h1>
      <h2>{t("purpose")}</h2>
      <div className="language-buttons">
        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>

      <h2>{t("simulator")}</h2>
      <div className="select-group">
        <p>{t("q1")}
          <select onChange={(e) => handleChange(0, e.target.value)}>
            <option value="">{t("select")}</option>
            <option value="yes">{t("yes")}</option>
            <option value="no">{t("no")}</option>
          </select>
        </p>
        <p>{t("q2")}
          <select onChange={(e) => handleChange(1, e.target.value)}>
            <option value="">{t("select")}</option>
            <option value="yes">{t("yes")}</option>
            <option value="no">{t("no")}</option>
          </select>
        </p>
        <p>{t("q3")}
          <select onChange={(e) => handleChange(2, e.target.value)}>
            <option value="">{t("select")}</option>
            <option value="yes">{t("yes")}</option>
            <option value="no">{t("no")}</option>
          </select>
        </p>
        <button onClick={evaluate}>{t("evaluate")}</button>
      </div>

      {score !== null && <ScoreMeter score={score} />}

      <button className="cta-button" onClick={() => alert('Redirigir a formulario o agendar demo')}>
        {t("cta")}
      </button>
    </div>
  );
};

export default App;