import prisma from "../utils/prisma.js";

// 1) Tous les livres
async function getTousLesLivres() {
  return prisma.livre.findMany();
}

// 2) Seulement les livres disponibles
async function getLivresDisponibles() {
  return prisma.livre.findMany({
    where: { disponible: true },
  });
}

// 3) Un livre par son id
async function getLivreParId(id: number) {
  return prisma.livre.findUnique({
    where: { id },
  });
}

// 4) Recherche partielle par auteur
async function chercherParAuteur(motCle: string) {
  return prisma.livre.findMany({
    where: {
      auteur: { contains: motCle, mode: "insensitive" },
    },
  });
}

async function main() {
  console.log("\n--- Tous les livres ---");
  console.log(await getTousLesLivres());

  console.log("\n--- Livres disponibles ---");
  console.log(await getLivresDisponibles());

  console.log("\n--- Livre #1 ---");
  console.log(await getLivreParId(1));

  console.log("\n--- Recherche : ’saint’ ---");
  console.log(await chercherParAuteur("saint"));

  await prisma.$disconnect();
}

await main();
