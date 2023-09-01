$(document).ready(() => {
    //listado de mesas
    const list=()=>{
        $.ajax({
            url: 'http://localhost:8080/mesas',
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                let data = '';
                res.forEach(element => {
                    data += `
                        <tr>
                            <td>${element.qr_MESA}</td>
                            <td>${element.num_MESA}</td>
                            <td>${element.zona_MESA}</td>
                        </tr>
                    `;
                });
                $('#tbody').html(data);
            }
        });
    }
    //REGISTRAR
    const registrarMesa = () => {
        const numMesa = $('#NUM_MESA').val();
        const zonaMesa = $('#ZONA_MESA').val();
        
        const mesa = {
          num_MESA: numMesa,
          zona_MESA: zonaMesa
        };
        
        if (confirm('¿Seguro que desea agregar la mesa?')) {
          $.ajax({
            url: 'http://localhost:8080/savemesa',
            type: 'POST',
            data: JSON.stringify(mesa),
            contentType: 'application/json',
            success: function(res) {
              console.log('Mesa registrada exitosamente');
              // Limpiar el formulario
              reset();
              // Actualizar la tabla de mesas
              list();
            },
            error: function(err) {
              console.error(err);
              alert('Error al registrar la mesa');
            }
          });
        }
      }
      
      $('#agregar').click(() => {
        registrarMesa();
      });

      //EDITAR
const editarMesa = () => {
    const qrMesa = $('#EDIT_QR_MESA').val();
    const numMesa = $('#EDIT_NUM_MESA').val();
    const zonaMesa = $('#EDIT_ZONA_MESA').val();
    
    const mesa = {
      qr_MESA: qrMesa,
      num_MESA: numMesa,
      zona_MESA: zonaMesa
    };
    
    if (confirm('¿Seguro que desea editar la mesa?')) {
      $.ajax({
        url: `http://localhost:8080/updateMesa/${qrMesa}`,
        type: 'PUT',
        data: JSON.stringify(mesa),
        contentType: 'application/json',
        success: function(res) {
          console.log('Mesa editada exitosamente');
          // Limpiar el formulario
          resetEdit();
          // Actualizar la tabla de mesas
          list();
        },
        error: function(err) {
          console.error(err);
          alert('Error al editar la mesa');
        }
      });
    }
  }
  
  $('#editar').click(() => {
    editarMesa();
  });

  //ELIMINAR
const eliminarMesa = () => {
    const qrMesa = $('#DELETE_QR_MESA').val();
    
    if (confirm('¿Seguro que desea eliminar la mesa?')) {
      $.ajax({
        url: `http://localhost:8080/deleteMesa/${qrMesa}`,
        type: 'DELETE',
        success: function(res) {
          console.log('Mesa eliminada exitosamente');
          // Limpiar el formulario
          resetDelete();
          // Actualizar la tabla de mesas
          list();
        },
        error: function(err) {
          console.error(err);
          alert('Error al eliminar la mesa');
        }
      });
    }
  }
  
  $('#eliminar').click(() => {
    eliminarMesa();
  });
  
  //Metodos para limpiar el formulario
  const resetDelete=()=>{
    $('#DELETE_QR_MESA').val('');
  }
  
  
  //Metodos para limpiar el formulario
  const resetEdit=()=>{
    $('#EDIT_QR_MESA').val('');
    $('#EDIT_NUM_MESA').val('');
    $('#EDIT_ZONA_MESA').val('');
  }
  

            
//Metodos para limpiar el formulario
const reset=()=>{
    $('#NUM_MESA').val('');
    $('#ZONA_MESA').val('');
}

//llamado a funciones
 list();
 save();
});