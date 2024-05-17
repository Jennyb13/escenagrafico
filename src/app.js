import 'aframe'; 

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const pieChartEntity = document.querySelector('#pieChart');
        if (pieChartEntity) { // Verificar si se encontró la entidad
          pieChartEntity.setAttribute('babia-pie', {
            legend: true,
            palette: 'blues',
            key: 'TIPOCURSO_DESC',
            size: 'Recuento de TIPOCURSO_DESC',
            data: data
          });
        } else {
          console.error('Pie chart entity not found');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });
