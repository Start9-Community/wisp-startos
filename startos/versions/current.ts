import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.1:2',
  releaseNotes: {
    en_US:
      'Enforces proxy trust so connection limits, event and query rate limits, and IP access lists use each client address instead of sharing the StartOS proxy address. Removes the 100,000 per-IP connection seed; unconfigured caps use the upstream default of ten. Existing configured caps, including the old seed, are preserved: use Limits to adjust them for your clients. No data migration is needed.',
    es_ES:
      'Activa de forma obligatoria la confianza en el proxy para que los límites de conexiones, de publicación y de consultas, y las listas de acceso por IP usen la dirección de cada cliente en lugar de compartir la del proxy de StartOS. Elimina el valor inicial de 100.000 conexiones por IP; sin un límite configurado se usa el valor predeterminado de diez. Se conservan los límites configurados, incluido el valor inicial anterior: usa Límites para ajustarlos a tus clientes. No se necesita migrar datos.',
    de_DE:
      'Erzwingt Proxy-Vertrauen, damit Verbindungslimits, Ereignis- und Abfrageratenlimits sowie IP-Zugriffslisten die jeweilige Client-Adresse statt der gemeinsamen StartOS-Proxy-Adresse verwenden. Entfernt den vorbelegten Wert von 100.000 Verbindungen pro IP; ohne konfiguriertes Limit gilt der Upstream-Standard von zehn. Bestehende Limits einschließlich des alten vorbelegten Werts bleiben erhalten: Über Limits lassen sie sich an die Clients anpassen. Eine Datenmigration ist nicht erforderlich.',
    pl_PL:
      'Wymusza zaufanie do proxy, aby limity połączeń, publikacji i zapytań oraz listy dostępu IP używały adresu każdego klienta zamiast wspólnego adresu proxy StartOS. Usuwa początkowy limit 100 000 połączeń na IP; bez skonfigurowanego limitu obowiązuje domyślna wartość dziesięciu. Skonfigurowane limity, w tym poprzednia wartość początkowa, pozostają zachowane: dostosuj je do klientów w akcji Limity. Migracja danych nie jest potrzebna.',
    fr_FR:
      'Impose la confiance dans le proxy pour que les limites de connexions, de publication et de requêtes ainsi que les listes d’accès IP utilisent l’adresse de chaque client au lieu de partager celle du proxy StartOS. Supprime la valeur initiale de 100 000 connexions par IP ; sans limite configurée, la valeur par défaut du projet de dix s’applique. Les limites configurées, y compris l’ancienne valeur initiale, sont conservées : utilisez Limites pour les adapter à vos clients. Aucune migration de données n’est nécessaire.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
