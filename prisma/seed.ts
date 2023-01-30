import prisma from "../src/db/database.js"

async function main() {
    await prisma.films.createMany({
        data: [
            {
                "movie": "A Origem",
                "gender": "Melhor Filme"
            },
            {
                "movie": "Interstellar",
                "gender": "Drama"
            },
            {
                "movie": "O jogo da imitação",
                "gender": "Drama"
            },
        ]
    })
}

main()
    .then(() => {
        console.log("Movies created")
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
