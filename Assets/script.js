const emailCount = {};

        document.getElementById('testDriveForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const nombres = document.getElementById('nombres').value;
            const apellidos = document.getElementById('apellidos').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const estrato = document.getElementById('estrato').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const grupoSanguineo = document.getElementById('grupoSanguineo').value;
            const genero = document.getElementById('genero').value;
            const actividades = Array.from(document.getElementById('actividades').selectedOptions).map(option => option.value);
            const fechaTestDrive = document.getElementById('fechaTestDrive').value;
            const horaTestDrive = document.getElementById('horaTestDrive').value;

            if (!emailCount[email]) {
                emailCount[email] = 0;
            }
            emailCount[email]++;

            alert(`Nombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de Nacimiento: ${fechaNacimiento}\nGrupo Sanguíneo: ${grupoSanguineo}\nGénero: ${genero}\nActividades: ${actividades.join(', ')}\nFecha para el Test Drive: ${fechaTestDrive}\nHora para el Test Drive: ${horaTestDrive}\nNúmero de solicitudes: ${emailCount[email]}`);

            this.reset();
        });