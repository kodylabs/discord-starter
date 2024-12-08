module.exports = {
      apps: [
        {
          name: "kodyborg", // Nom de l'application pour PM2
          script: "bun",    // L'exécutable Bun
          args: "run start", // Les arguments pour Bun
          cwd: "/var/www/kodyborg", // Chemin de travail du bot
          watch: false, // Désactive le watch si PM2 gère le redémarrage
        },
      ],
    };
    