const btn = document.getElementById('btn');
btn.addEventListener('click', function () {

const name = document.getElementById('name').value; 
const email = document.getElementById('email').value; 
const pesan = document.getElementById('pesan').value;
          
    if( name == '' || email == '' || pesan == '') {
       
       Swal.fire(
          'Form kosong',
          'Harap isi form yg kosong',
          'warning'
        )  
                    
    } else {              
       
         Swal.fire(
        'Terima Kasih!',
        'Pesan anda telah diterima!',
        'success'
    )        
    }
});    
