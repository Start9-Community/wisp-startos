import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.0:0',
  releaseNotes: {
    en_US: `Updates Wisp to v0.10.0. The relay now caps connections from one subnet (50 by default) and closes eligible idle connections when it is full to reduce connection floods. IP allow and block lists accept CIDR ranges. A filter with an empty list now matches nothing, as the Nostr protocol requires.

**Before updating:** Check the IP allowlist and blocklist in **Access Control**. Some previously accepted IPv6 prefixes, such as \`2001:db8::1:\`, are now ignored: a blocklist entry no longer blocks those clients, and an allowlist entry no longer admits them. If you use these entries, stop the relay before updating. After updating, replace them with explicit CIDR ranges for the networks you intend in **Access Control**, then start the relay.

[Full upstream release notes](https://github.com/privkeyio/wisp/blob/v0.10.0/CHANGELOG.md#0100---2026-11-22)`,
    es_ES: `Actualiza Wisp a v0.10.0. El relé ahora limita las conexiones desde una misma subred (50 por defecto) y cierra las conexiones inactivas que cumplen los criterios cuando está lleno para reducir las avalanchas de conexiones. Las listas de IP permitidas y bloqueadas aceptan rangos CIDR. Un filtro con una lista vacía ya no coincide con nada, como exige el protocolo Nostr.

**Antes de actualizar:** Revisa las listas de IP permitidas y bloqueadas en **Access Control**. Ahora se ignoran algunos prefijos IPv6 antes aceptados, como \`2001:db8::1:\`: una entrada de bloqueo deja de bloquear esos clientes y una entrada de permiso deja de admitirlos. Si usas estas entradas, detén el relé antes de actualizar. Tras actualizar, sustitúyelas por rangos CIDR explícitos de las redes que deseas en **Access Control** y después inicia el relé.

[Notas completas de la versión original](https://github.com/privkeyio/wisp/blob/v0.10.0/CHANGELOG.md#0100---2026-11-22)`,
    de_DE: `Aktualisiert Wisp auf v0.10.0. Das Relay begrenzt jetzt die Verbindungen aus einem Subnetz (standardmäßig 50) und schließt geeignete inaktive Verbindungen, wenn es voll ist, um Verbindungsfluten einzudämmen. Die IP-Erlaubnis- und Sperrlisten akzeptieren CIDR-Bereiche. Ein Filter mit einer leeren Liste trifft jetzt auf nichts zu, wie es das Nostr-Protokoll verlangt.

**Vor dem Update:** Prüfe die IP-Erlaubnis- und Sperrlisten unter **Access Control**. Einige zuvor akzeptierte IPv6-Präfixe, etwa \`2001:db8::1:\`, werden jetzt ignoriert: Ein Sperrlisteneintrag blockiert diese Clients nicht mehr, und ein Erlaubnislisteneintrag lässt sie nicht mehr zu. Wenn du solche Einträge verwendest, stoppe das Relay vor dem Update. Ersetze sie nach dem Update unter **Access Control** durch explizite CIDR-Bereiche für die gewünschten Netze und starte danach das Relay.

[Vollständige Upstream-Versionshinweise](https://github.com/privkeyio/wisp/blob/v0.10.0/CHANGELOG.md#0100---2026-11-22)`,
    pl_PL: `Aktualizuje Wisp do v0.10.0. Przekaźnik ogranicza teraz liczbę połączeń z jednej podsieci (domyślnie 50) i zamyka kwalifikujące się bezczynne połączenia, gdy jest pełny, aby ograniczyć zalew połączeń. Listy dozwolonych i zablokowanych adresów IP przyjmują zakresy CIDR. Filtr z pustą listą nie pasuje teraz do niczego, zgodnie z wymaganiami protokołu Nostr.

**Przed aktualizacją:** Sprawdź listy dozwolonych i zablokowanych adresów IP w **Access Control**. Niektóre wcześniej akceptowane prefiksy IPv6, takie jak \`2001:db8::1:\`, są teraz ignorowane: wpis blokujący nie blokuje już tych klientów, a wpis zezwalający już ich nie dopuszcza. Jeśli używasz takich wpisów, zatrzymaj przekaźnik przed aktualizacją. Po aktualizacji zastąp je w **Access Control** jawnymi zakresami CIDR dla zamierzonych sieci, a następnie uruchom przekaźnik.

[Pełne informacje o wydaniu upstream](https://github.com/privkeyio/wisp/blob/v0.10.0/CHANGELOG.md#0100---2026-11-22)`,
    fr_FR: `Met à jour Wisp vers v0.10.0. Le relais limite désormais les connexions provenant d’un même sous-réseau (50 par défaut) et ferme les connexions inactives éligibles lorsqu’il est plein pour limiter les afflux de connexions. Les listes d’adresses IP autorisées et bloquées acceptent les plages CIDR. Un filtre avec une liste vide ne correspond désormais à rien, comme l’exige le protocole Nostr.

**Avant la mise à jour :** Vérifiez les listes d’adresses IP autorisées et bloquées dans **Access Control**. Certains préfixes IPv6 auparavant acceptés, tels que \`2001:db8::1:\`, sont désormais ignorés : une entrée de blocage ne bloque plus ces clients et une entrée d’autorisation ne les admet plus. Si vous utilisez ces entrées, arrêtez le relais avant la mise à jour. Après celle-ci, remplacez-les dans **Access Control** par des plages CIDR explicites correspondant aux réseaux souhaités, puis démarrez le relais.

[Notes de version complètes du projet amont](https://github.com/privkeyio/wisp/blob/v0.10.0/CHANGELOG.md#0100---2026-11-22)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
