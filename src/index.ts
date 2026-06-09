import prisma from "../utils/prisma.js";

async function seed() {
  // TODO : ajouter au moins 5 livres
  const livre1 = await prisma.livre.create({
    data: {
      titre: "Le Petit Prince",
      auteur: "Antoine de Saint-Exupéry",
      annee: 1943,
      disponible: true,
    },
  });
  console.log("Créé :", livre1);

  // À COMPL ÉTER : 4 autres livres minimum
  const livre2a5 = await prisma.livre.createMany({
    data: [
      {
        titre: "Harry Potter",
        auteur: "JK Rowling",
        annee: 1997,
        disponible: false,
      },
      {
        titre: "Les Trois Mousquetaires",
        auteur: "Alexandre Dumas",
        annee: 1844,
        disponible: false,
      },
      {
        titre: "Les Belles-Soeurs",
        auteur: "Michel Tremblay",
        annee: 1965,
        disponible: true,
      },
      {
        titre: "Da Vinci Code",
        auteur: "Dan Brown",
        annee: 2003,
        disponible: true,
      },
    ],
  });
}

async function main() {
  await seed();
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
