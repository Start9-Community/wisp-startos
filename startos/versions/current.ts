import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.3:0',
  releaseNotes: {
    en_US:
      'Updates Wisp to v0.9.3. Fixes a crash that could abort the relay when it was stopped or restarted while handling messages; no acknowledged events were at risk. The relay also no longer logs a watchdog warning on every start about a setting you never changed. No data migration is needed.',
    es_ES:
      'Actualiza Wisp a v0.9.3. Corrige un fallo que podía abortar el relé al detenerlo o reiniciarlo mientras procesaba mensajes; ningún evento confirmado estuvo en riesgo. Además, el relé ya no registra en cada inicio una advertencia del watchdog sobre un ajuste que nunca cambiaste. No se necesita migrar datos.',
    de_DE:
      'Aktualisiert Wisp auf v0.9.3. Behebt einen Absturz, der das Relay beenden konnte, wenn es während der Verarbeitung von Nachrichten gestoppt oder neu gestartet wurde; bestätigte Events waren nie gefährdet. Außerdem protokolliert das Relay nicht mehr bei jedem Start eine Watchdog-Warnung zu einer Einstellung, die du nie geändert hast. Eine Datenmigration ist nicht erforderlich.',
    pl_PL:
      'Aktualizuje Wisp do v0.9.3. Naprawia awarię, która mogła przerwać działanie przekaźnika przy zatrzymaniu lub ponownym uruchomieniu w trakcie obsługi wiadomości; żadne potwierdzone zdarzenia nie były zagrożone. Przekaźnik nie zapisuje też już przy każdym uruchomieniu ostrzeżenia watchdoga o ustawieniu, którego nikt nie zmieniał. Migracja danych nie jest potrzebna.',
    fr_FR:
      'Met à jour Wisp vers v0.9.3. Corrige un plantage qui pouvait interrompre le relais lorsqu’il était arrêté ou redémarré pendant le traitement de messages ; aucun événement confirmé n’a été menacé. Le relais ne journalise plus non plus à chaque démarrage un avertissement du watchdog concernant un réglage que vous n’avez jamais modifié. Aucune migration de données n’est nécessaire.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
