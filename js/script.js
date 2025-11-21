function mostrarPagina(paginaId) {
    document.querySelectorAll('.pagina').forEach(pagina => {
        pagina.classList.remove('ativa');
    });
    
    document.getElementById(paginaId).classList.add('ativa');
    
    if (paginaId === 'usuarios') {
        MostrarUsuarios();
    }
}

function removerDuplicados() {
    const input = document.getElementById('entrada-array').value;
    const array = input.split(',').map(item => item.trim());
    const arrayUnico = [...new Set(array)];
    
    document.getElementById('resultado').innerHTML = `
        <p><strong>Original:</strong> [${array.join(', ')}]</p>
        <p><strong>Sem duplicados:</strong> [${arrayUnico.join(', ')}]</p>
    `;
}

const usuarios = [
    { id: 1, nome: "João pedro", email: "joaopedro@gmail.com" },
    { id: 2, nome: "Bagli", email: "bagli@gmail.com"}
];

function MostrarUsuarios() {
    const container = document.getElementById('lista-usuarios');
    container.innerHTML = usuarios.map(usuario => `
        <div class="cartao-usuario">
            <h3>${usuario.nome}</h3>
            <p><strong>Email:</strong> ${usuario.email}</p>
        </div>
    `).join('');
}

function checkFormulario(event) {
    event.preventDefault();
    let correto = true;

    const nome = document.getElementById('nome').value;
    if (nome.length < 3) {
        document.getElementById('erro-nome').style.display = 'block';
        correto = false;
    } else {
        document.getElementById('erro-nome').style.display = 'none';
    }

    const email = document.getElementById('email').value;
    const emailForma = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailForma.test(email)) {
        document.getElementById('erro-email').style.display = 'block';
        correto = false;
    } else {
        document.getElementById('erro-email').style.display = 'none';
    }

    const senha = document.getElementById('senha').value;
    if (senha.length < 6) {
        document.getElementById('erro-senha').style.display = 'block';
        correto = false;
    } else {
        document.getElementById('erro-senha').style.display = 'none';
    }

    if (correto) {
        alert('Formulário foi enviado com sucesso!');
        event.target.reset();
    }
}

voltarUsuarios();