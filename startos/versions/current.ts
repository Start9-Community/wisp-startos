import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.14:0',
  releaseNotes: {
    en_US:
      'Updates wisp to v0.5.14. Queries are now bounded in how many stored entries they may scan, so a selective filter matching fewer events than its limit no longer walks the entire database. This fixes severe CPU and major page-fault load on large databases. The new query_scan_multiplier setting (default 20, 0 to disable) controls the bound. Carries forward every prior fix.',
    es_ES:
      'Actualiza wisp a v0.5.14. Las consultas ahora tienen un límite de cuántas entradas almacenadas pueden recorrer, de modo que un filtro selectivo que coincide con menos eventos que su límite ya no recorre toda la base de datos. Esto corrige una carga severa de CPU y de fallos de página en bases de datos grandes. El nuevo ajuste query_scan_multiplier (predeterminado 20, 0 para desactivar) controla el límite. Mantiene todas las correcciones anteriores.',
    de_DE:
      'Aktualisiert wisp auf v0.5.14. Abfragen sind jetzt darin begrenzt, wie viele gespeicherte Einträge sie durchsuchen dürfen, sodass ein selektiver Filter, der weniger Ereignisse als sein Limit trifft, nicht mehr die gesamte Datenbank durchläuft. Das behebt schwere CPU- und Seitenfehler-Last bei großen Datenbanken. Die neue Einstellung query_scan_multiplier (Standard 20, 0 zum Deaktivieren) steuert die Begrenzung. Enthält weiterhin alle bisherigen Korrekturen.',
    pl_PL:
      'Aktualizuje wisp do v0.5.14. Zapytania mają teraz ograniczenie liczby przeszukiwanych wpisów, więc selektywny filtr pasujący do mniejszej liczby zdarzeń niż jego limit nie przechodzi już przez całą bazę danych. Naprawia to bardzo wysokie obciążenie procesora i błędy stron przy dużych bazach danych. Nowe ustawienie query_scan_multiplier (domyślnie 20, 0 wyłącza) kontroluje to ograniczenie. Zachowuje wszystkie wcześniejsze poprawki.',
    fr_FR:
      'Met à jour wisp vers v0.5.14. Les requêtes sont désormais limitées dans le nombre d\'entrées stockées qu\'elles peuvent parcourir, de sorte qu\'un filtre sélectif correspondant à moins d\'événements que sa limite ne parcourt plus toute la base de données. Cela corrige une charge CPU et des défauts de page sévères sur les grandes bases de données. Le nouveau paramètre query_scan_multiplier (par défaut 20, 0 pour désactiver) contrôle cette limite. Conserve tous les correctifs précédents.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
