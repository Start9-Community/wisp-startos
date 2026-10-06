import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.1:1',
  releaseNotes: {
    en_US: `Updates the package to start-sdk 3.0.3 and requires StartOS 0.4.0.2 or newer. Wisp remains at v0.6.1.

- Limits explains that Events Per Minute applies to each IP address.
- Spider Sync names the relays it syncs from when Source Relays is left empty.`,
    es_ES: `Actualiza el paquete a start-sdk 3.0.3 y requiere StartOS 0.4.0.2 o posterior. Wisp sigue en v0.6.1.

- Limits explica que Events Per Minute se aplica a cada dirección IP.
- Spider Sync indica los relays desde los que sincroniza cuando Source Relays se deja vacío.`,
    de_DE: `Aktualisiert das Paket auf start-sdk 3.0.3 und setzt StartOS 0.4.0.2 oder neuer voraus. Wisp bleibt bei v0.6.1.

- Limits erklärt, dass Events Per Minute für jede IP-Adresse gilt.
- Spider Sync nennt die Relays, von denen synchronisiert wird, wenn Source Relays leer bleibt.`,
    pl_PL: `Aktualizuje pakiet do start-sdk 3.0.3 i wymaga StartOS 0.4.0.2 lub nowszego. Wisp pozostaje w wersji v0.6.1.

- Limits wyjaśnia, że Events Per Minute dotyczy każdego adresu IP.
- Spider Sync podaje relaye, z których synchronizuje, gdy pole Source Relays pozostaje puste.`,
    fr_FR: `Met à jour le paquet vers start-sdk 3.0.3 et nécessite StartOS 0.4.0.2 ou ultérieur. Wisp reste en v0.6.1.

- Limits précise que Events Per Minute s'applique à chaque adresse IP.
- Spider Sync indique les relays depuis lesquels il synchronise quand Source Relays est laissé vide.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
