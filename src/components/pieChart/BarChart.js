import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { api } from "../../api/api";
import { datas } from "../../utilities/datas";
import "./bar.scss";
import { languageModule, Languages } from "../../helpers/languages";

ChartJS.register(ArcElement, Tooltip);

function BarChart() {
  const [fundsData, setFundsData] = useState([]);
  const [BarChartData, setBarChartData] = useState(datas);

  const arr = ["#FFECB3", "#FFD54F", "#F7B633", "#FF8F00", "#EF6C00"];

  useEffect(() => {
    api
      .get("/allocationfunds")
      .then((res) => {
        setFundsData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);


  const getTranslatedTitle = (item) => {
    let currentLanguage = languageModule.getCurrentLanguage();
    if (currentLanguage === Languages.EN) return item.title_en;
    if (currentLanguage === Languages.RU) return item.title_ru;
    if (currentLanguage === Languages.TR) return item.title_tr;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 title mb-5 p-0">
          <h1 data-aos="zoom-out">ALLOCATION OF FUNDS</h1>
        </div>
        <div className="col-lg-6 col-md-6 d-flex justify-content-center my-5">
          <div data-aos="zoom-out-up" className="doughnt">
            <Doughnut data={BarChartData} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 d-flex align-items-center">
          <div className="chart-info">
            {fundsData.map((d) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                key={d.id}
                className="d-flex align-items-center mb-3"
              >
                <span
                  style={{
                    backgroundColor: `${arr[d.id - 1]}`,
                  }}
                ></span>
                <p className="mb-0">{getTranslatedTitle(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;