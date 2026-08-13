import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.1:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.6.1, a maintenance release for the connection lifecycle. Fixes two ways a remote peer could crash or wedge the relay just by opening and closing connections: a connection could be dropped from every internal tracking list, leaking its slot and its file descriptor and leaving a worker spinning at full CPU, and a connection could be reused while another thread still held its lock. A third fix covers a failed connection setup that ran its cleanup twice; that one needs the kernel to refuse a socket registration before it can happen. No settings change and no migration is needed.',
    es_ES:
      'Actualiza wisp a v0.6.1, una versión de mantenimiento centrada en el ciclo de vida de las conexiones. Corrige dos formas en las que un par remoto podía bloquear o colgar el relé simplemente abriendo y cerrando conexiones: una conexión podía quedar fuera de todas las listas internas de seguimiento, perdiendo su ranura y su descriptor de archivo y dejando a un trabajador girando al máximo de CPU, y una conexión podía reutilizarse mientras otro hilo aún mantenía su bloqueo. Una tercera corrección cubre un establecimiento de conexión fallido cuya limpieza se ejecutaba dos veces; esa necesita que el núcleo rechace el registro de un socket para poder ocurrir. No cambia ningún ajuste y no hace falta ninguna migración.',
    de_DE:
      'Aktualisiert wisp auf v0.6.1, eine Wartungsversion rund um den Verbindungslebenszyklus. Behebt zwei Wege, auf denen eine entfernte Gegenstelle das Relay allein durch das Öffnen und Schließen von Verbindungen zum Absturz bringen oder blockieren konnte: Eine Verbindung konnte aus allen internen Verwaltungslisten herausfallen, wobei ihr Platz und ihr Dateideskriptor verloren gingen und ein Worker mit voller CPU-Last weiterlief, und eine Verbindung konnte wiederverwendet werden, während ein anderer Thread noch ihre Sperre hielt. Eine dritte Korrektur betrifft einen fehlgeschlagenen Verbindungsaufbau, dessen Aufräumen zweimal lief; dafür muss der Kernel zuvor die Registrierung eines Sockets ablehnen. Keine Einstellung ändert sich und es ist keine Migration nötig.',
    pl_PL:
      'Aktualizuje wisp do v0.6.1, wydanie konserwacyjne dotyczące cyklu życia połączeń. Naprawia dwa sposoby, w jakie zdalny host mógł unieruchomić lub zawiesić przekaźnik samym otwieraniem i zamykaniem połączeń: połączenie mogło wypaść ze wszystkich wewnętrznych list śledzenia, tracąc swoje miejsce i deskryptor pliku oraz zostawiając wątek roboczy kręcący się przy pełnym obciążeniu procesora, a połączenie mogło zostać ponownie użyte, gdy inny wątek wciąż trzymał jego blokadę. Trzecia poprawka dotyczy nieudanego nawiązania połączenia, którego sprzątanie wykonywało się dwa razy; wymaga ona jednak, aby jądro odmówiło rejestracji gniazda. Żadne ustawienie się nie zmienia i nie jest potrzebna migracja.',
    fr_FR:
      "Met à jour wisp vers v0.6.1, une version de maintenance consacrée au cycle de vie des connexions. Corrige deux façons dont un pair distant pouvait faire planter ou bloquer le relais simplement en ouvrant et en fermant des connexions : une connexion pouvait disparaître de toutes les listes de suivi internes, perdant son emplacement et son descripteur de fichier et laissant un worker tourner à pleine charge processeur, et une connexion pouvait être réutilisée alors qu'un autre thread détenait encore son verrou. Un troisième correctif concerne un établissement de connexion en échec dont le nettoyage s'exécutait deux fois ; celui-ci nécessite que le noyau refuse l'enregistrement d'un socket. Aucun réglage ne change et aucune migration n'est nécessaire.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
