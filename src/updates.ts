import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import prisma from "../utils/prisma.js";

// Marquer un livre comme indisponible ( emprunt é)
async function marquerIndisponible(id: number) {
  return prisma.livre.update({
    where: { id },
    data: { disponible: false },
  });
}

// Corriger l’ann ée d’un livre
async function corrigerAnnee(id: number, nouvelleAnnee: number) {
  return prisma.livre.update({
    where: { id },
    data: { annee: nouvelleAnnee },
  });
}

console.log(await marquerIndisponible(1));
console.log(await corrigerAnnee(2, 2024));
await prisma.$disconnect();
