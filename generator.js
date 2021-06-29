function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateName = () => {
    var name1 = ['Miguel', 'Sophia', 'Alice', 'Arthur', 'Julia', 'Pedro', 'Isabella', 'Gabriel', 'Manuela', 'Bernardo', 'Laura', 'Lucas', 'Luiza', 'Matheus', 'Valentina', 'Rafael', 'Giovanna', 'Heitor', 'Maria Eduarda', 'Enzo', 'Helena', 'Guilherme', 'Beatriz', 'Nicolas', 'Maria Luiza', 'Lorenzo', 'Lara', 'Gustavo', 'Mariana', 'Felipe', 'Nicole', 'Samuel', 'Rafaela', 'João', 'Heloísa', 'Daniel', 'Isadora', 'Vitor', 'Lívia', 'Leonardo', 'Maria Clara', 'Henrique', 'Ana Clara', 'Theo', 'Lorena', 'Murilo', 'Gabriela', 'Eduardo', 'Yasmin', 'Pedro', 'Isabelly', 'Pietro', 'Sarah', 'Cauã', 'Ana Julia', 'Isaac', 'Letícia', 'Caio', 'Ana Luiza', 'Vinicius', 'Melissa', 'Benjamin', 'Marina', 'João', 'Clara', 'Lucca', 'Cecília', 'Miguel', 'Esther', 'Bryan', 'Emanuelly', 'Joaquim', 'Rebeca', 'Vitor', 'Ana Beatriz', 'Thiago', 'Lavínia', 'Antônio', 'Vitória', 'Lucas', 'Bianca', 'Francisco', 'Catarina', 'Gabriel', 'Larissa', 'Bruno', 'Maria Fernanda', 'Emanuel', 'Fernanda', 'Gabriel', 'Amanda', 'Luiz', 'Carolina', 'Rodrigo', 'Agatha', 'Otávio', 'Gabrielly'];
    return name1[getRandomInt(0, name1.length + 1)];
}

