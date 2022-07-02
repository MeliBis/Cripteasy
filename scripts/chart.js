
import {  getApiOne, getApiTwo, getApiTree, getApiCGGlobal } from "./api.js";





//grafica Conectada a APITwo
export const ctx = document.getElementById("myChart").getContext("2d");
export const myChart = async () => {
  const dataCG = await getApiCGGlobal();
  console.log(dataCG);
  ////CryptoCompare
  const dataOne = await getApiOne();
  console.log(dataOne);
  const dataDos = await getApiTwo();
  console.log(dataDos);
  const dataTree = await getApiTree();
  console.log(dataTree);
  // document.getElementById("pruebaOne").innerHTML = data;
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

myChart();
