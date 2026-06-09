import prisma from "../utils/prisma.js";

// Emprunter un livre
async function emprunterLivre(livreId: number, parQui: string) {
  // 1) Créer l’emprunt
  const emprunt = await prisma.emprunt.create({
    data: { livreId, empruntePar: parQui },
  });

  // 2) Marquer le livre comme indisponible
  await prisma.livre.update({
    where: { id: livreId },
    data: { disponible: false },
  });
  return emprunt;
}

// Lister tous les emprunts AVEC les infos du livre

async function listerEmprunts() {
  return prisma.emprunt.findMany({
    include: { livre: true },
  });
}

// Retourner un livre ( rendre l’emprunt )
async function rendreLivre(empruntId: number) {
  const emprunt = await prisma.emprunt.delete({
    where: { id: empruntId },
  });
  await prisma.livre.update({
    where: { id: emprunt.livreId },
    data: { disponible: true },
  });
  return emprunt;
}

await emprunterLivre(5, "Gilles Ouellet");
await listerEmprunts();
await rendreLivre(1);
await prisma.$disconnect();
