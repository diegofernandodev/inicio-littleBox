const userButton = document.getElementById('btn-gerente');
    const userOptions = document.getElementById('user-options');

    userButton.addEventListener('click', () => {
        // Cuando se hace clic en la foto de usuario, muestra o oculta las opciones.
        userOptions.classList.toggle('hidden');
    });