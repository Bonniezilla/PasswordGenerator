var pessoa = {
    nome: ['Pedro', 'Peixoto'],
    idade: 17,
    sexo: 'Masculino',
    hobbies: ['Musica', 'Videogames'],
    bio: function() {
        alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + 
        ' anos de idade. Ele gosta de ' + this.hobbies[0] + ' e '
        + this.hobbies[1] + '.');
    },
    saudacao: function() {
        alert('Oi! Eu sou ' + this.nome[0] + '.')
    }
};

console.log(pessoa)