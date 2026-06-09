import prisma from "../utils/prisma.js";

// Supprimer un livre par id
async function supprimerLivre(id: number) {
  return prisma.livre.delete({
    where: { id },
  });
}

// Supprimer tous les livres anté rieurs à une année
async function supprimerAnciens(avantAnnee: number) {
  return prisma.livre.deleteMany({
    where: { annee: { lt: avantAnnee } },
  });
}

await supprimerLivre(3);
await prisma.$disconnect();
