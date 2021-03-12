/*

    ** Buscando e contando dados em arrays **

    Basead no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e
        * devolver os livros desse autor.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Programação de Computadores",
        books: [
            {
                title: "Liderança em Design",
                author: "Victor Zanini"
            },
            {
                title: "APIs REST v1.0",
                author: "Alexandre Saudate"
            },
            {
                title: "APIs REST v1.1",
                author: "Alexandre Saudate"
            },
            {
                title: "APIs REST v1.2",
                author: "Alexandre Saudate"
            },
            {
                title: "APIs REST v1.3",
                author: "Alexandre Saudate"
            },
            {
                title: "Aprendendo pré-processadores CSS",
                author: "Natan Souza"
            },
            {
                title: "Web Design Responsivo",
                author: "Tárcio Zemel"
            },
            {
                title: "Construindo APIs REST com Node.js",
                author: "Caio Ribeiro Pereira"
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
    },
];

const CountCategoryAndBooksInto = () => {
    console.log(`Você possui ${booksByCategory.length} categoria(s) disponíveis.`);
    
    for (iCurrentCategory in booksByCategory) {
        console.log(`Há ${booksByCategory[iCurrentCategory].books.length} livros, na categora: ${booksByCategory[iCurrentCategory].category}`);
    }
}

const CountAuthors = () => {
    let aAuthors = new Array();

    for (stCategory of booksByCategory) {
        for (stBooks of stCategory.books) {

            if (!aAuthors.includes(stBooks.author)){
                aAuthors.push(stBooks.author);
            }
        }
    }

    console.log(`Você possui ${aAuthors.length} autor(es) cadastrado(s)`);
}

const getListBooksByAuthor = (sName = "Augusto Cury") => {
    let aAuthors = new Array();
    let aBooksFinded = new Array();

    console.log(`Procurando livros do autor: ${sName}`)

    for (stCategory of booksByCategory) {
        for (stBooks of stCategory.books) {

            if (stBooks.author === sName) {
                aBooksFinded.push(stBooks.title);
            }
        }
    }

    if (aBooksFinded.length == 0) {
        console.log(" -> Nenhum resultado encontrado para este autor.");
    }
    else {
        for (let iCurrentItem = 0; iCurrentItem < aBooksFinded.length; iCurrentItem++) {
            console.log(` -> Disponível: ${aBooksFinded[iCurrentItem]}`);
        }
    }
}

const getInfoAllBooks = () => {
    let iCountCategory = 0;

    iCountCategory = booksByCategory.length;
    console.log(`# Você possui ${iCountCategory} categoria(s) disponíveis. #`);
    
    for (iCurrentCategory in booksByCategory) {
        console.log(`Conteúdo da categoria: ${booksByCategory[iCurrentCategory].category}`);

        for (iCurrentBook in booksByCategory[iCurrentCategory].books) {
            console.log(` -> ${booksByCategory[iCurrentCategory].books[iCurrentBook].title}`);
        }
    }
} 

// getInfoAllBooks();

// * Contar o número de categorias e o número de livros em cada categoria
CountCategoryAndBooksInto();

// * contar o número de autores
CountAuthors();

// * Mostrar livros do autor Augusto Cury
getListBooksByAuthor();
getListBooksByAuthor("Victor Zanini");
getListBooksByAuthor("Alexandre Saudate");