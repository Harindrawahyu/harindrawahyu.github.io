const form = document.getElementById('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent default form submission
                const formData = new FormData(form);
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        Swal.fire('Success!', 'Your message has been sent.', 'success');
                        form.reset();
                    } else {
                        Swal.fire('Oops!', 'Something went wrong. Please try again.', 'error');
                    }
                }).catch(error => {
                    Swal.fire('Oops!', 'Something went wrong. Please try again.', 'error');
                });
            });