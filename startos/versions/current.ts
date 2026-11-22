import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.0:0',
  releaseNotes: {
    en_US:
      'Updates Wisp to v0.10.0. The relay now caps connections from one subnet (50 by default) and closes idle connections when it is full, so a flood of connections can no longer lock other clients out. IP allow and block lists accept CIDR ranges. A filter with an empty list now matches nothing, as the Nostr protocol requires. No data migration is needed.',
    es_ES:
      'Actualiza Wisp a v0.10.0. El relé ahora limita las conexiones desde una misma subred (50 por defecto) y cierra las conexiones inactivas cuando está lleno, de modo que una avalancha de conexiones ya no puede dejar fuera a otros clientes. Las listas de IP permitidas y bloqueadas aceptan rangos CIDR. Un filtro con una lista vacía ya no coincide con nada, como exige el protocolo Nostr. No se necesita migrar datos.',
    de_DE:
      'Aktualisiert Wisp auf v0.10.0. Das Relay begrenzt jetzt die Verbindungen aus einem Subnetz (standardmäßig 50) und schließt inaktive Verbindungen, wenn es voll ist, sodass eine Flut von Verbindungen andere Clients nicht mehr aussperren kann. Die IP-Erlaubnis- und Sperrlisten akzeptieren CIDR-Bereiche. Ein Filter mit einer leeren Liste trifft jetzt auf nichts zu, wie es das Nostr-Protokoll verlangt. Eine Datenmigration ist nicht erforderlich.',
    pl_PL:
      'Aktualizuje Wisp do v0.10.0. Przekaźnik ogranicza teraz liczbę połączeń z jednej podsieci (domyślnie 50) i zamyka bezczynne połączenia, gdy jest pełny, więc zalew połączeń nie może już odciąć innych klientów. Listy dozwolonych i zablokowanych adresów IP przyjmują zakresy CIDR. Filtr z pustą listą nie pasuje teraz do niczego, zgodnie z wymaganiami protokołu Nostr. Migracja danych nie jest potrzebna.',
    fr_FR:
      'Met à jour Wisp vers v0.10.0. Le relais limite désormais les connexions provenant d’un même sous-réseau (50 par défaut) et ferme les connexions inactives lorsqu’il est plein, afin qu’un afflux de connexions ne puisse plus bloquer les autres clients. Les listes d’adresses IP autorisées et bloquées acceptent les plages CIDR. Un filtre avec une liste vide ne correspond désormais à rien, comme l’exige le protocole Nostr. Aucune migration de données n’est nécessaire.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
