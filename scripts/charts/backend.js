// import Chart from 'chart.js/auto';

(async function () {
  new Chart(document.getElementById("backend"), {
    type: "pie",
    data: {
      labels: ["JavaScript for Backend", "PHP", "ASP.NET", "Otros"],
      datasets: [
        {
          label: "Cuota de mercado (%)",

          backgroundColor: ["#efd81d", "#5c69eb", "#497ae5", "#3889e0"],
          data: [5, 77.3, 4.8, 12.9],
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Lenguajes de programación para Backend | OCTUBRE 2025",
          
        },
        subtitle: {
          display: true,
          text: "Según w3techs.com ",
          color: "blue",
          font: {
            size: 12,
            family: "tahoma",
            weight: "normal",
            style: "italic",
          
          },
          
          padding: {
            bottom: 10,
          },
        },
      },
    },
  });
})();
