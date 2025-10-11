

(async function () {


    new Chart(document.getElementById("frontend"), {
        type: 'pie',
        data: {
            labels: ["JavaScript for Frontend", "Flash", "Java",],
            datasets: [{
                label: "Cuota de mercado (%)",
                backgroundColor: ["#efd81d", "#d90003", "#3cba9f"],
                data: [98.9, 0.8, 0.1,]
            }]
        },
        options: {
            plugins: {

                title: {
                    display: true,
                    text: 'Lenguajes de programación para Frontend',
                },
                subtitle: {
                    display: true,
                    text: 'Según w3techs.com',
                    color: 'blue',
                    font: {
                        size: 12,
                        family: 'tahoma',
                        weight: 'normal',
                        style: 'italic'
                    },
                    padding: {
                        bottom: 10
                    }
                }
            },

        }
    });


})();