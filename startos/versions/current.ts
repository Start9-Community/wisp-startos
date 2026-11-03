import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.1:3',
  releaseNotes: {
    en_US:
      'Sets the trusted proxy to the StartOS proxy address (10.0.3.1), so the relay no longer logs a warning on every start that it trusts forwarded client addresses from any peer. A trusted proxy you already set is kept. No data migration is needed.',
    es_ES:
      'Establece como proxy de confianza la dirección del proxy de StartOS (10.0.3.1), de modo que el relé ya no registra en cada inicio una advertencia de que confía en las direcciones de cliente reenviadas por cualquier equipo. Se conserva el proxy de confianza que ya hayas configurado. No se necesita migrar datos.',
    de_DE:
      'Setzt den vertrauenswürdigen Proxy auf die Adresse des StartOS-Proxys (10.0.3.1), sodass das Relay nicht mehr bei jedem Start warnt, dass es weitergeleiteten Client-Adressen von jedem beliebigen Gegenüber vertraut. Ein bereits eingestellter vertrauenswürdiger Proxy bleibt erhalten. Eine Datenmigration ist nicht erforderlich.',
    pl_PL:
      'Ustawia zaufane proxy na adres proxy StartOS (10.0.3.1), dzięki czemu przekaźnik nie zapisuje już przy każdym uruchomieniu ostrzeżenia, że ufa przekazywanym adresom klientów od dowolnego nadawcy. Wcześniej ustawione zaufane proxy zostaje zachowane. Migracja danych nie jest potrzebna.',
    fr_FR:
      'Définit le proxy de confiance sur l’adresse du proxy StartOS (10.0.3.1), afin que le relais ne journalise plus à chaque démarrage un avertissement indiquant qu’il fait confiance aux adresses client transmises par n’importe quel pair. Un proxy de confiance déjà configuré est conservé. Aucune migration de données n’est nécessaire.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
