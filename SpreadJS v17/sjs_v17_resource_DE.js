var custom_resource = {
  "Common": {
    "Exp_InvalidDateFormat": "Ungültiges Datumsformatmuster",
    "Exp_InvalidExponentFormat": "ungültiges Exponentenformat",
    "Exp_InvalidSemicolons": "ungültiges Format: zu viele Semikolons",
    "Exp_InvalidNumberGroupSize": "NumberGroupSize muss zwischen 1 und 9 liegen, mit Ausnahme des letzten Elements, das Null sein kann.",
    "Exp_BadFormatSpecifier": "Ungültiger Formatbezeichner",
    "Exp_InvalidNumberFormat": "Ungültiges Zahlenformatmuster",
    "Exp_InvalidCast": "InvalidCastException",
    "Exp_Separator": "numberDecimalSeparator, listSeparator und arrayListSeparator sollten sich in den Kulturinformationen unterscheiden.",
    "Exp_TokenIsNull": "Token ist null",
    "Exp_InvalidBackslash": "das ‚\\\\‘ kann nicht ausgewertet werden",
    "Exp_FormatIllegal": "Das Format ist ungültig.",
    "Exp_ValueIsNull": "Wert ist null",
    "Exp_DuplicatedDescriptor": "Der Typ des Deskriptors wurde hinzugefügt.",
    "Exp_TokenIllegal": "Token ist illegal.",
    "Exp_ValueIllegal": "Wert ist illegal."
  },
  "CalcEngine": {
    "Exp_InvalidCast": "Ausnahme wegen ungültiger Besetzung",
    "Exp_FormulaInvalidChar": "Die Formel enthält ein ungültiges Zeichen: ‚{0}‘ am Index auf {1}",
    "Exp_FormulaInvalid": "Ungültige Formel",
    "Exp_InvalidFunctionName": "Ungültiger Funktionsname",
    "Exp_InvalidOverrideFunction": "Eingebaute Funktion kann nicht überschrieben werden",
    "Exp_InvalidArray": "Ungültiges Array",
    "Exp_OverrideNotAllowed": "Versuch, die Funktion zu überschreiben, obwohl das Überschreiben nicht zulässig ist",
    "Exp_NoSyntax": "Keine Syntax '{0}', die der Syntax '{1}' entspricht.",
    "Exp_IsValid": "'{0}' ist ungültig.",
    "Exp_InvalidParameters": "Ungültiger Funktionsparameter bei {0}.",
    "Exp_InvalidArrayColumns": "Die Länge der Array-Spalten ist bei {0} nicht gleich.",
    "Exp_ExprIsNull": "Das Argument ‚expr‘ ist null",
    "Exp_InvalidOperation": "Ausnahme wegen ungültiger Operation",
    "Exp_ArgumentNull": "Argument Null-Ausnahme",
    "Exp_CriteriaIsNull": "Kriterien sind null",
    "Exp_Format": "Format",
    "Exp_ArrayFormulaPart": "Ein Teil eines Arrays kann nicht geändert werden.",
    "Exp_NotSupported": "Nicht unterstützte Ausnahme",
    "Exp_DuplicatedChar": "Duplizierter Charakter",
    "Exp_ArgumentOutOfRangeException": "Argument außerhalb des gültigen Bereichs – Ausnahme",
    "Exp_ArgumentException": "Argumentausnahme",
    "Fbx_Summary": "Zusammenfassung",
    "Fbx_TableName_Description": "Tabellenname für ",
    "Fbx_TableSheetName_Description": "TableSheet-Name für ",
    "Fbx_CustomName_Description": "Benutzerdefinierter Name für "
  },
  "DataManager": {
    "zve": {
      "WINDOW": {
        "description": "(Tabellenblattspezifisch) Bestimmt die Zeilen als Fenster durch Partitionierung und Sortierung, um die Fensterfunktion anzuwenden.",
        "parameters": [
          {
            "name": "Fensterfunktion"
          },
          {
            "name": "partition_by",
            "optional": "WAHR"
          },
          {
            "name": "sortieren nach",
            "optional": "WAHR"
          },
          {
            "name": "Rahmenzeilen\\\\Bereich\\\\Gruppen",
            "optional": "WAHR"
          }
        ]
      },
      "WINDOWDEF": {
        "description": "(Tabellenblattspezifisch) Definieren Sie eine Abkürzung, die eine Wiederverwendung durch die WINDOW-Funktion ermöglicht.",
        "parameters": [
          {
            "name": "partition_by",
            "optional": "WAHR"
          },
          {
            "name": "sortieren nach",
            "optional": "WAHR"
          },
          {
            "name": "Rahmenzeilen\\\\Bereich\\\\Gruppen",
            "optional": "WAHR"
          }
        ]
      },
      "PARTITIONBY": {
        "description": "(TableSheet-spezifisch) Teilt die Zeilen in Partitionen auf.",
        "parameters": [
          {
            "name": "Feldfunktion",
            "optional": "FALSCH",
            "repeatable": "WAHR"
          }
        ]
      },
      "ORDERBY": {
        "description": "(TableSheet-spezifisch) Definiert die logische Reihenfolge in jeder Partition.",
        "parameters": [
          {
            "name": "Feldfunktion",
            "optional": "FALSCH",
            "repeatable": "WAHR"
          }
        ]
      },
      "ORDERASC": {
        "description": "(Tabellenblattspezifisch) Gibt die aufsteigende Reihenfolge für das angegebene Feld an.",
        "parameters": [
          {
            "name": "Feldfunktion"
          }
        ]
      },
      "ORDERDESC": {
        "description": "(Tabellenblattspezifisch) Gibt die absteigende Reihenfolge für das angegebene Feld an.",
        "parameters": [
          {
            "name": "Feldfunktion"
          }
        ]
      },
      "FRAMEROWS": {
        "description": "(Tabellenblattspezifisch) Begrenzen Sie den Zeilensatz des Fensters, indem Sie die Anfangs- oder Endzeilen gegenüber der aktuellen Zeile angeben.",
        "parameters": [
          {
            "name": "Anfangsfunktion",
            "optional": "FALSCH",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "-1",
                "description": "Gibt die obere Grenze der Partition an."
              },
              {
                "value": "[@]",
                "description": "Zeigt die aktuelle Zeile oder den aktuellen Wert an."
              },
              {
                "value": "[@-N]",
                "description": "Gibt bei aufsteigender Sortierung die n-te Stelle vor der aktuellen an."
              },
              {
                "value": "[@+n]",
                "description": "Gibt bei absteigender Sortierung die n-te Stelle vor der aktuellen an."
              }
            ]
          },
          {
            "name": "Endfunktion",
            "optional": "WAHR",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "-1",
                "description": "Zeigt den unteren Teil der Trennwand an."
              },
              {
                "value": "[@]",
                "description": "Zeigt die aktuelle Zeile oder den aktuellen Wert an."
              },
              {
                "value": "[@+n]",
                "description": "Gibt die n-te Stelle nach der aktuellen an, sofern die Reihenfolge aufsteigend ist."
              },
              {
                "value": "[@-N]",
                "description": "Gibt die n-te Stelle hinter der aktuellen an, wenn die Reihenfolge absteigend ist."
              }
            ]
          },
          {
            "name": "Ausschlussmodus",
            "optional": "WAHR",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "0",
                "description": "Dies ist der Standardfall, es werden keine Zeilen ausgeschlossen."
              },
              {
                "value": "1",
                "description": "Die aktuelle Zeile wird ausgeschlossen, die anderen Peers der aktuellen Zeile bleiben bestehen."
              },
              {
                "value": "2",
                "description": "Die aktuelle Zeile und die Peers sind alle ausgeschlossen."
              },
              {
                "value": "3",
                "description": "Die aktuelle Zeile bleibt bestehen, die anderen Peers werden ausgeschlossen."
              }
            ]
          }
        ]
      },
      "FRAMERANGE": {
        "description": "(Tabellenblattspezifisch) Begrenzen Sie den Zeilensatz des Fensters, indem Sie den Anfangs- oder Endbereich in Bezug auf den Wert in der aktuellen Zeile angeben.",
        "parameters": [
          {
            "name": "Anfangsfunktion",
            "optional": "FALSCH",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "-1",
                "description": "Gibt die obere Grenze der Partition an."
              },
              {
                "value": "[@]",
                "description": "Zeigt die aktuelle Zeile oder den aktuellen Wert an."
              },
              {
                "value": "[@-N]",
                "description": "Gibt bei aufsteigender Sortierung die n-te Stelle vor der aktuellen an."
              },
              {
                "value": "[@+n]",
                "description": "Gibt bei absteigender Sortierung die n-te Stelle vor der aktuellen an."
              }
            ]
          },
          {
            "name": "Endfunktion",
            "optional": "WAHR",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "-1",
                "description": "Zeigt den unteren Teil der Trennwand an."
              },
              {
                "value": "[@]",
                "description": "Zeigt die aktuelle Zeile oder den aktuellen Wert an."
              },
              {
                "value": "[@+n]",
                "description": "Gibt die n-te Stelle nach der aktuellen an, sofern die Reihenfolge aufsteigend ist."
              },
              {
                "value": "[@-N]",
                "description": "Gibt die n-te Stelle hinter der aktuellen an, wenn die Reihenfolge absteigend ist."
              }
            ]
          },
          {
            "name": "Ausschlussmodus",
            "optional": "WAHR",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "0",
                "description": "Dies ist der Standardfall, es werden keine Zeilen ausgeschlossen."
              },
              {
                "value": "1",
                "description": "Die aktuelle Zeile wird ausgeschlossen, die anderen Peers der aktuellen Zeile bleiben bestehen."
              },
              {
                "value": "2",
                "description": "Die aktuelle Zeile und die Peers sind alle ausgeschlossen."
              },
              {
                "value": "3",
                "description": "Die aktuelle Zeile bleibt bestehen, die anderen Peers werden ausgeschlossen."
              }
            ]
          }
        ]
      },
      "FRAMEGROUPS": {
        "description": "(Tabellenblattspezifisch) Begrenzen Sie den Zeilensatz des Fensters, indem Sie den Anfangs- oder Endbereich in Bezug auf die Zählgruppen relativ zur aktuellen Gruppe angeben.",
        "parameters": [
          {
            "name": "Anfangsfunktion",
            "optional": "FALSCH",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "-1",
                "description": "Gibt die obere Grenze der Partition an."
              },
              {
                "value": "[@]",
                "description": "Zeigt die aktuelle Zeile oder den aktuellen Wert an."
              },
              {
                "value": "[@-N]",
                "description": "Gibt bei aufsteigender Sortierung die n-te Stelle vor der aktuellen an."
              },
              {
                "value": "[@+n]",
                "description": "Gibt bei absteigender Sortierung die n-te Stelle vor der aktuellen an."
              }
            ]
          },
          {
            "name": "Endfunktion",
            "optional": "WAHR",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "-1",
                "description": "Zeigt den unteren Teil der Trennwand an."
              },
              {
                "value": "[@]",
                "description": "Zeigt die aktuelle Zeile oder den aktuellen Wert an."
              },
              {
                "value": "[@+n]",
                "description": "Gibt die n-te Stelle nach der aktuellen an, sofern die Reihenfolge aufsteigend ist."
              },
              {
                "value": "[@-N]",
                "description": "Gibt die n-te Stelle hinter der aktuellen an, wenn die Reihenfolge absteigend ist."
              }
            ]
          },
          {
            "name": "Ausschlussmodus",
            "optional": "WAHR",
            "repeatable": "FALSCH",
            "enum": [
              {
                "value": "0",
                "description": "Dies ist der Standardfall, es werden keine Zeilen ausgeschlossen."
              },
              {
                "value": "1",
                "description": "Die aktuelle Zeile wird ausgeschlossen, die anderen Peers der aktuellen Zeile bleiben bestehen."
              },
              {
                "value": "2",
                "description": "Die aktuelle Zeile und die Peers sind alle ausgeschlossen."
              },
              {
                "value": "3",
                "description": "Die aktuelle Zeile bleibt bestehen, die anderen Peers werden ausgeschlossen."
              }
            ]
          }
        ]
      },
      "CUMEDIST": {
        "description": "(Tabellenblattspezifisch) Die kumulative Verteilung eines Wertes innerhalb einer Wertegruppe."
      },
      "W_PERCENTRANK": {
        "description": "(TableSheet-spezifisch) Berechnet den Prozentsatz des relativen Rangs einer Zeile innerhalb einer Zeilenpartition."
      },
      "ROWNUMBER": {
        "description": "(TableSheet-spezifisch) Gibt die Nummer der aktuellen Zeile innerhalb ihrer Partition zurück."
      },
      "W_RANK": {
        "description": "(TableSheet-spezifisch) Gibt den Rang jeder Zeile innerhalb der Partition eines Ergebnissatzes zurück."
      },
      "DENSERANK": {
        "description": "(TableSheet-spezifisch) Gibt den Rang der aktuellen Zeile innerhalb ihrer Partition ohne Lücken zurück."
      },
      "LEAD": {
        "description": "(TableSheet-spezifisch) Bietet Zugriff auf den Wert einer Zeile an einem bestimmten physischen Offset, der auf die aktuelle Zeile folgt.",
        "parameters": [
          {
            "name": "Wertfunktion"
          },
          {
            "name": "Ausgleich",
            "optional": "WAHR"
          },
          {
            "name": "Standardwert",
            "optional": "WAHR"
          }
        ]
      },
      "LAG": {
        "description": "(Tabellenblattspezifisch) Bietet Zugriff auf den Wert einer Zeile an einem bestimmten physischen Offset vor der aktuellen Zeile.",
        "parameters": [
          {
            "name": "Wertfunktion"
          },
          {
            "name": "Ausgleich",
            "optional": "WAHR"
          },
          {
            "name": "Standardwert",
            "optional": "WAHR"
          }
        ]
      },
      "NTILE": {
        "description": "(Tabellenblattspezifisch) Teilt eine Partition in N Buckets auf und weist jeder Zeile ihre Bucket-Nummer zu.",
        "parameters": [
          {
            "name": "N"
          }
        ]
      },
      "FIRSTVALUE": {
        "description": "(TableSheet-spezifisch) Zugriff auf den Wert aus der ersten Zeile innerhalb des Fensterrahmens.",
        "parameters": [
          {
            "name": "Wertfunktion"
          }
        ]
      },
      "LASTVALUE": {
        "description": "(TableSheet-spezifisch) Zugriff auf den Wert aus der letzten Zeile innerhalb des Fensterrahmens.",
        "parameters": [
          {
            "name": "Wertfunktion"
          }
        ]
      },
      "NTHVALUE": {
        "description": "(TableSheet-spezifisch) Zugriff auf den Wert aus der n-ten Zeile innerhalb des Fensterrahmens.",
        "parameters": [
          {
            "name": "Wertfunktion"
          },
          {
            "name": "N"
          }
        ]
      },
      "CALCULATE": {
        "description": "(TableSheet Grouping Specific) Erweitern Sie den Gruppenkontext für die Formel.",
        "parameters": [
          {
            "name": "Formel"
          },
          {
            "name": "Filter_entfernen_Funktion"
          }
        ]
      },
      "REMOVEFILTERS": {
        "description": "(TableSheet Grouping Specific) Wählen Sie den Kontext der oberen Gruppenebene aus.",
        "parameters": [
          {
            "name": "Gruppenfeldfunktion",
            "optional": "WAHR",
            "repeatable": "WAHR"
          }
        ]
      },
      "CHILDREN": {
        "description": "(Tabellenblatthierarchiespezifisch) Ruft den Wert der untergeordneten Elemente ab, die einen bestimmten Abstand vom übergeordneten Element haben.",
        "parameters": [
          {
            "name": "Level-Offset"
          },
          {
            "name": "Feldfunktion"
          }
        ]
      },
      "ONLYCHILDREN": {
        "description": "(Spezifisch für Tabellenblatthierarchie) Ruft den Wert der untergeordneten Elemente ab, die nicht die übergeordneten Elemente sind.",
        "parameters": [
          {
            "name": "Feldfunktion"
          }
        ]
      },
      "PARENT": {
        "description": "(Spezifisch für Tabellenblatthierarchie) Ruft den Wert des übergeordneten Elements ab, das einen bestimmten Abstand zum aktuellen hat.",
        "parameters": [
          {
            "name": "Level-Offset"
          },
          {
            "name": "Feldfunktion"
          }
        ]
      },
      "LEVEL": {
        "description": "(TableSheet-Hierarchiespezifisch) Ruft die Ebene des aktuellen ab."
      },
      "LEVELROWNUMBER": {
        "description": "(Spezifisch für Tabellenblatthierarchie) Ruft die Zeilennummer des aktuellen unter seinem übergeordneten Element ab."
      }
    }
  },
  "Sheets": {
    "Exp_NotSupported": "Nicht unterstützte Ausnahme",
    "Exp_PasteExtentIsNull": "pasteExtent ist null",
    "Exp_InvalidPastedArea": "Der eingefügte Bereich sollte die gleiche Größe haben wie der Kopier- bzw. Ausschneidebereich.",
    "Exp_MultipleSelections": "Diese Aktion funktioniert nicht bei Mehrfachauswahl.",
    "Exp_ChangePartOfArray": "Ein Teil eines Arrays kann nicht geändert werden.",
    "Exp_InvalidAndSpace": "Ungültige {0}: {1} (muss zwischen {2} und {3} liegen).",
    "Exp_SrcIsNull": "Das Argument ‚src‘ ist null",
    "Exp_DestIsNull": "Das Argument ‚dest‘ ist null",
    "Exp_InvalidCustomFunction": "ungültige benutzerdefinierte Funktion",
    "Exp_InvalidCustomName": "ungültiger benutzerdefinierter Name",
    "Exp_CustomNameBothInUse": "In Zellformeln wird sowohl auf den aktuellen Namen als auch auf den neuen Namen verwiesen.",
    "Exp_IndexOutOfRange": "Index liegt außerhalb des gültigen Bereichs!",
    "Exp_InvalidRange": "Ungültiger Bereich",
    "Exp_NotAFunction": "Keine Funktion",
    "Exp_ArgumentOutOfRange": "ArgumentAußerhalb Des Bereichs",
    "Exp_PasteSourceCellsLocked": "Die Zellen des Quellblatts sind gesperrt.",
    "Exp_InvalidCopyPasteSize": "Die Kopier- und Einfügebereiche haben nicht die gleiche Größe.",
    "Exp_PasteDestinationCellsLocked": "Die Zelle, die Sie ändern möchten, ist geschützt und daher schreibgeschützt.",
    "Exp_PasteChangeMergeCell": "Ein Teil einer verbundenen Zelle kann nicht geändert werden.",
    "Tip_Row": "Reihe: ",
    "Tip_Column": "Spalte: ",
    "Tip_Column_Offset": "Versatz: ",
    "Tip_Height": "Höhe: {0} Pixel",
    "Tip_Width": "Breite: {0} Pixel",
    "NewTab": "Neu...",
    "Exp_EmptyNamedStyle": "Der Name des benannten Stils darf nicht leer oder null sein",
    "Exp_SheetNameInvalid": "Der Blattname darf nicht leer sein oder diese Zeichen enthalten: *, :, [, ], ?, \\\\, /",
    "Exp_SheetNameConflict": "Dieser Name ist bereits vergeben. Versuchen Sie es mit einem anderen.",
    "Exp_ArrayFormulaSpan": "Array-Formeln sind in verbundenen Zellen ungültig.",
    "Exp_DestSheetIsNull": "Zielblatt ist null",
    "Exp_SheetIsNull": "Blatt ist null.",
    "Exp_OverlappingSpans": "Dieser Vorgang führt zu überlappenden Spannen.",
    "NeedCanvasSupport": "Um SpreadJS auszuführen, benötigen Sie einen Browser, der HTML5 Canvas vollständig unterstützt.",
    "ARIA_Resize": "Größe ändern",
    "ARIA_First": "Erste",
    "ARIA_PreviousArrow": "vorheriger Pfeil",
    "ARIA_NextArrow": "nächster Pfeil",
    "ARIA_Last": "zuletzt",
    "ARIA_PreviousButton": "Zurück-Schaltfläche",
    "ARIA_NextButton": "Weiter-Button",
    "ARIA_SheetTab": "Registerkarte für Tabellenblatt",
    "ARIA_NewSheet": "neues Blatt",
    "ARIA_Blank": "leer",
    "ARIA_Scrollbar_Left_Button": "Scrollbar-Linkstaste",
    "ARIA_Scrollbar_Top_Button": "Scrollbar-Schaltfläche oben",
    "ARIA_Scrollbar_Thumb_Button": "Scrollbar-Daumentaste",
    "ARIA_Scrollbar_Right_Button": "Bildlaufleiste mit rechter Taste",
    "ARIA_Scrollbar_Bottom_Button": "Bildlaufleisten-Schaltfläche unten",
    "ARIA_Scrollbar_TRACK_Button": "Scrollbar-Spur-Schaltfläche",
    "ARIA_Cell": "Zelle",
    "ARIA_HasValue": "hat den Wert {0}",
    "ARIA_HasFormula": "hat Formel {0}",
    "ARIA_HasCheckbox": "hat Kontrollkästchen {0}",
    "ARIA_HasButton": "hat Schaltfläche {0}",
    "ARIA_HasHyperlink": "hat Hyperlink {0}",
    "ARIA_HasComment": "hat Kommentar {0}",
    "ARIA_RowHeader": "Zeilenüberschrift",
    "ARIA_ColumnHeader": "Spaltenüberschrift",
    "SHEET_NAME": "Blatt",
    "REPORT_SUMMARY": "Summe",
    "Exp_InsertCopiedCutCells": "Diese Auswahl ist ungültig. Der Kopier-/Einfügebereich muss die gleiche Größe haben.",
    "Exp_InsertCopiedCutCellsOnSpanTable": "Das funktioniert nicht, weil dadurch Zellen in einer Tabelle auf Ihrem Arbeitsblatt verschoben werden oder die Verbindung einiger verbundener Zellen aufgehoben wird.",
    "Exp_InsertCopiedCutCellsNoRange": "Es können keine neuen Zellen eingefügt werden, da es nicht leere Zellen gibt, die über das Arbeitsblatt hinausgehen würden.",
    "Exp_InsertCopiedCutCellsOverlap": "Diese Auswahl ist ungültig. Stellen Sie sicher, dass sich die Kopier- und Einfügebereiche nicht überlappen, es sei denn, sie haben dieselbe Größe und Form.",
    "Exp_InsertCopiedCutCellsAffectTable": "Sie können die Zellen innerhalb einer Tabelle nicht auf diese Weise neu anordnen, da dies andere Tabellenzellen auf unerwartete Weise beeinflussen könnte.",
    "Exp_InvalidSortArrayFormulaInRange": "Der aktuelle Bereich kann nicht sortiert werden, da eine Array-Formel vorhanden ist.",
    "Exp_InvalidSortSpanInRange": "Der aktuelle Bereich kann nicht sortiert werden, da eine Spanne vorhanden ist.",
    "Exp_InvalidSortPartTableOrMultiTableInRange": "Der aktuelle Bereich kann nicht sortiert werden, da Teiltabelle vorhanden ist oder mehr als eine Tabelle vorhanden ist.",
    "Exp_InvalidOperationInProtect": "Die Zelle oder das Diagramm, das Sie ändern möchten, befindet sich auf einem geschützten Blatt. Um eine Änderung vorzunehmen, heben Sie den Blattschutz auf.",
    "EXP_IO": "Ausnahme beim Lesen und Schreiben von Dateien.",
    "EXP_FILE_FORMAT": "Falsches Dateiformat.",
    "EXP_NO_PASSWORD": "Die Excel-Datei kann nicht geöffnet werden, da die Arbeitsmappe/das Arbeitsblatt kennwortgeschützt ist.",
    "EXP_INVALID_PASSWORD": "Das angegebene Passwort ist falsch.",
    "NORMAL": "Normal",
    "GENERAL": "Allgemein",
    "EXP_UNSUPPORT_CRYPTO_ALGORITHM": "Nicht unterstützte kryptografische Algorithmen",
    "Exp_InvalidOperationSizeLimitExceeded": "Die Dateigröße überschreitet die festgelegte Maximalgröße.",
    "STEP": {
      "start": "Laden starten {0}",
      "loadFileData": "Lade die zu verteilenden Daten von {0}",
      "loadSheetData": "Lade die Daten von {0}",
      "startCalc": "reCalc starten",
      "loadSheetFormula": "Lade die Formel von {0}",
      "parseFile": "{0} Inhalt analysieren"
    },
    "pasteSpecialOptionDialog": {
      "title": "Inhalte einfügen",
      "paste": "Paste",
      "pasteOptions": {
        "all": "Alle",
        "formulas": "Formeln",
        "values": "Werte",
        "formats": "Formate",
        "comments": "Kommentare",
        "validation": "Validierung",
        "usingSourceTheme": "Alle verwenden das Quelldesign",
        "noBorders": "Alles außer Grenzen",
        "columnWidth": "Spaltenbreiten",
        "formulasAndNumberFormats": "Formeln und Zahlenformate",
        "valueAndNumberFormats": "Werte- und Zahlenformate"
      },
      "operation": "Betrieb",
      "operationOptions": {
        "none": "Keiner",
        "add": "Hinzufügen",
        "subtract": "Subtrahieren",
        "multiply": "Multiplizieren",
        "divide": "Teilen"
      },
      "skipBlanks": "Leerzeichen überspringen",
      "transpose": "Transponieren",
      "pasteLink": "Link einfügen"
    },
    "ok": "OK",
    "cancel": "Stornieren",
    "ls9": [
      "",
      "4164642d6f6e7320456e61626c65643a207b307d"
    ],
    "ls10": [
      "",
      "4164642d6f6e73204e6f7420456e61626c65643a207b307d"
    ],
    "ls11": [
      "",
      "2c20"
    ]
  },
  "Bindings": {
    "Exp_NotSupportedDataSource": "Die Datenquelle wird nicht unterstützt!"
  },
  "Outlines": {
    "Exp_InvalidIndex": "Ungültiger Index",
    "Exp_InvalidCount": "Ungültige Anzahl",
    "Exp_InvalidLevel": "Ungültiges Level",
    "Exp_GroupInfoIsNull": "groupInfo ist null",
    "Exp_GROUP_PROTECTED": "Sie können diesen Befehl nicht auf einem geschützten Blatt verwenden. Um diesen Befehl zu verwenden, müssen Sie zuerst den Blattschutz aufheben."
  },
  "ConditionalFormatting": {
    "Exp_RuleIsNull": "Das Argument ‚Regel‘ ist null",
    "Exp_NotSupported": "Nicht unterstützte Ausnahme"
  },
  "Touch": {
    "ToolStrip_PasteText": "Paste",
    "ToolStrip_CutText": "Schneiden",
    "ToolStrip_CopyText": "Kopie",
    "ToolStrip_AutoFillText": "Automatisch ausfüllen"
  },
  "FloatingObjects": {
    "Exp_FloatingObjectHasSameNameError": "Das aktuelle Arbeitsblatt enthält bereits ein schwebendes Objekt mit demselben Namen.",
    "Exp_FloatingObjectNameEmptyError": "Floating-Objekt muss Namen haben"
  },
  "CellTypes": {
    "OK": "OK",
    "Cancel": "Stornieren",
    "Calendar_ShortWeeks_1": "MON",
    "Calendar_ShortWeeks_2": "DI",
    "Calendar_ShortWeeks_3": "HEIRATEN",
    "Calendar_ShortWeeks_4": "DO",
    "Calendar_ShortWeeks_5": "FR",
    "Calendar_ShortWeeks_6": "SATZ",
    "Calendar_ShortWeeks_7": "SONNE",
    "Calendar_Weeks_1": "Montag",
    "Calendar_Weeks_2": "Dienstag",
    "Calendar_Weeks_3": "Mittwoch",
    "Calendar_Weeks_4": "Donnerstag",
    "Calendar_Weeks_5": "Freitag",
    "Calendar_Weeks_6": "Samstag",
    "Calendar_Weeks_7": "Sonntag",
    "Calendar_ShortMonths_1": "JAN",
    "Calendar_ShortMonths_2": "FEB",
    "Calendar_ShortMonths_3": "BESCHÄDIGEN",
    "Calendar_ShortMonths_4": "APR",
    "Calendar_ShortMonths_5": "MAI",
    "Calendar_ShortMonths_6": "JUNI",
    "Calendar_ShortMonths_7": "JUL",
    "Calendar_ShortMonths_8": "AUG",
    "Calendar_ShortMonths_9": "SEP",
    "Calendar_ShortMonths_10": "Übriges",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DEZ",
    "Calendar_Months_1": "JANUAR",
    "Calendar_Months_2": "FEBRUAR",
    "Calendar_Months_3": "MARSCH",
    "Calendar_Months_4": "APRIL",
    "Calendar_Months_5": "MAI",
    "Calendar_Months_6": "JUNI",
    "Calendar_Months_7": "JULI",
    "Calendar_Months_8": "AUGUST",
    "Calendar_Months_9": "SEPTEMBER",
    "Calendar_Months_10": "OKTOBER",
    "Calendar_Months_11": "NOVEMBER",
    "Calendar_Months_12": "DEZEMBER",
    "Calendar_Time_AM": "BIN",
    "Calendar_Time_PM": "PM",
    "Calendar_EraName_1": "M",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_Today": "Heute",
    "Calendar_BuiltIn_Today": "Heute",
    "Calendar_BuiltIn_Yesterday": "Gestern",
    "Calendar_BuiltIn_Last7Days": "Letzte 7 Tage",
    "Calendar_BuiltIn_ThisMonth": "Diesen Monat",
    "Calendar_BuiltIn_LastMonth": "Letzter Monat",
    "Calendar_LastMonth": "Zum vorherigen Monat gehen",
    "Calendar_NextMonth": "Zum nächsten Monat gehen",
    "Calendar_LastYear": "Zum Vorjahr gehen",
    "Calendar_NextYear": "Weiter zum nächsten Jahr",
    "Calendar_LastTenYear": "Zu den letzten zehn Jahren gehen",
    "Calendar_NextTenYear": "Auf in die nächsten zehn Jahre",
    "Quarter_Format_1": "Frage 1",
    "Quarter_Format_2": "Frage 2",
    "Quarter_Format_3": "Frage 3",
    "Quarter_Format_4": "Frage 4",
    "ThemeColor": "Themenfarben",
    "StandardColor": "Standardfarben",
    "Calculator_DivideByZeroInfo": "Durch Null dividieren ist nicht möglich.",
    "Calculator_InvalidInputInfo": "Ungültige Eingabe.",
    "Calculator_SqrtParameterException": "Ungültige Eingabe für Funktion.",
    "Calculator_OverFlowInfo": "Bei einer Rechenoperation ist ein Überlauf aufgetreten.",
    "MultiColumn_InvalidDataSource": "Ungültige Datenquelle. Die Formel sollte ein Array zurückgeben.",
    "DataObject_MeetLock": "Daten können nicht eingefügt werden, da eine gesperrte Zelle im Weg ist.",
    "DataObject_MeetSpan": "Daten können nicht eingefügt werden, da eine verbundene Zelle im Weg ist.",
    "DataObject_MeetTable": "Daten können nicht eingefügt werden, da eine Tabelle im Weg ist.",
    "FileUpload_Title": "+ Hochladen"
  },
  "Filter": {
    "Exp_InvalidColumnIndex": "Ungültiger Spaltenindex.",
    "SortAscending": "Aufsteigend sortieren",
    "SortDescending": "Absteigend sortieren",
    "OK": "OK",
    "Cancel": "Stornieren",
    "Search": "Suchen",
    "CheckAll": "Alles ankreuzen",
    "UncheckAll": "Alle abwählen",
    "Blanks": "(Leerzeichen)",
    "Exp_FilterItemIsNull": "FilterItem ist null.",
    "Show": "Zeigen",
    "ShowRows": "Zeilen anzeigen, in denen:",
    "And": "Und",
    "Or": "Oder",
    "SortColor": "Nach Farbe sortieren",
    "FilterColor": "Nach Farbe filtern",
    "FilterCellTitle": "Nach Zellenfarbe filtern",
    "FilterFontTitle": "Nach Schriftfarbe filtern",
    "SortCellTitle": "Nach Zellenfarbe sortieren",
    "SortFontTitle": "Nach Schriftfarbe sortieren",
    "FontColor": "Weitere Schriftfarben …",
    "CellColor": "Weitere Zellfarben …",
    "NoFill": "Keine Füllung",
    "Automatic": "Automatisch",
    "Clear": "Filter löschen von {0}",
    "TextFilter": "Textfilter",
    "DateFilter": "Datumsfilter",
    "NumberFilter": "Zahlenfilter",
    "Custom": "Benutzerdefinierter Filter …",
    "Equal": "Gleich…",
    "NotEqual": "Ist nicht gleich …",
    "GreaterThan": "Größer als ...",
    "GreaterOrEquals": "Größer als oder gleich …",
    "LessThan": "Weniger als …",
    "LessThanOrEquals": "Kleiner als oder gleich …",
    "Between": "Zwischen...",
    "Top10": "Top 10...",
    "AboveAverage": "Überdurchschnittlich",
    "BelowAverage": "Unterdurchschnittlich",
    "Begin": "Beginnt mit …",
    "End": "Endet mit …",
    "Contain": "Enthält…",
    "NotContain": "Enthält nicht …",
    "Before": "Vor...",
    "After": "Nach...",
    "Tomorrow": "Morgen",
    "Today": "Heute",
    "Yesterday": "Gestern",
    "NextWeek": "Nächste Woche",
    "ThisWeek": "Diese Woche",
    "LastWeek": "Letzte Woche",
    "NextMonth": "Nächsten Monat",
    "ThisMonth": "Diesen Monat",
    "LastMonth": "Letzter Monat",
    "NextQuarter": "Nächstes Quartal",
    "ThisQuarter": "Dieses Quartal",
    "LastQuarter": "Letztes Viertel",
    "NextYear": "Nächstes Jahr",
    "ThisYear": "Dieses Jahr",
    "LastYear": "Letztes Jahr",
    "YearToDate": "Der bisherige Jahresverlauf",
    "AllDates": "Alle Daten im Zeitraum",
    "Top10Filter": "Top 10 Autofilter",
    "CustomTitle": "Benutzerdefinierter AutoFilter",
    "ColorTitle": "Verfügbare Zellfarben",
    "top": "Spitze",
    "bottom": "unten",
    "SortCell": "Wählen Sie eine Zellenfarbe zum Sortieren aus:",
    "SortFont": "Wählen Sie eine Schriftfarbe zum Sortieren aus:",
    "FilterCell": "Wählen Sie eine Zellenfarbe zum Filtern aus:",
    "FilterFont": "Wählen Sie eine Schriftfarbe zum Filtern aus:",
    "Selected": "Ausgewählt:",
    "IsEquals": "gleich",
    "NotEquals": "ist nicht gleich",
    "IsGreaterThan": "ist größer als",
    "IsGreaterOrEqual": "ist größer als oder gleich",
    "IsLess": "ist kleiner als",
    "LessOrEqual": "ist kleiner oder gleich",
    "IsBeginWith": "beginnt mit",
    "NotBeginWith": "beginnt nicht mit",
    "IsEndWith": "endet mit",
    "NotEndWith": "endet nicht mit",
    "IsContain": "enthält",
    "NotContains": "enthält nicht",
    "IsAfter": "ist nach",
    "AfterOrEqual": "ist nach oder gleich",
    "IsBefore": "ist vor",
    "BeforeOrEqual": "ist vor oder gleich",
    "Q1": "Viertel 1",
    "Q2": "Viertel 2",
    "Q3": "Viertel 3",
    "Q4": "Viertel 4",
    "Jan": "Januar",
    "Feb": "Februar",
    "Mar": "Marsch",
    "Apr": "April",
    "May": "Mai",
    "Jun": "Juni",
    "Jul": "Juli",
    "Aug": "August",
    "Sep": "September",
    "Oct": "Oktober",
    "Nov": "November",
    "Dec": "Dezember",
    "Explain1": "Verwenden Sie ?\", um ein beliebiges einzelnes Zeichen darzustellen.",
    "Explain2": "Verwenden Sie *, um eine beliebige Zeichenfolge darzustellen.",
    "Year": "",
    "Day": "",
    "add_current_filter": "Aktuelle Auswahl zum Filter hinzufügen",
    "invalidCondition": "Fehler in der Parsezeile"
  },
  "Tables": {
    "Exp_DragDropShiftTableCell": "Dieser Vorgang ist nicht zulässig. Der Vorgang versucht, Zellen in einer Tabelle auf Ihrem Arbeitsblatt zu verschieben.",
    "Exp_DragDropChangePartOfTable": "Vorgang kann nicht abgeschlossen werden: Sie versuchen, einen Teil einer Tabellenzeile oder -spalte auf eine nicht zulässige Weise zu ändern.",
    "Exp_TableEmptyNameError": "Der Tabellenname darf nicht leer sein.",
    "Exp_TableNameInvalid": "Der Tabellenname ist ungültig.",
    "Exp_TableInvalidRow": "Ungültiger Zeilenindex oder ungültige Zeilenanzahl.",
    "Exp_TableInvalidColumn": "Ungültiger Spaltenindex oder ungültige Spaltenanzahl.",
    "Exp_TableIntersectError": "Die Tabellen dürfen nicht verschnitten werden.",
    "Exp_TableHasSameNameError": "Das aktuelle Arbeitsblatt existiert bereits in einer Tabelle mit demselben Namen.",
    "Exp_TableRangeHasFilterError": "Der aktuelle Tabellenbereich enthält einen Filterbereich.",
    "Exp_TableDataSourceNullError": "Die Datenquelle der Tabelle darf nicht null sein.",
    "Exp_TableMoveOutOfRange": "Die Tabelle kann nicht aus dem Blatt verschoben werden.",
    "Exp_TableResizeOutOfRange": "Die ungültige Zeilenanzahl, Spaltenanzahl und die Tabellengröße können nicht außerhalb des Blattes geändert werden.",
    "Exp_ArrayFormulaTable": "Mehrzellige Array-Formeln sind in Tabellen nicht zulässig.",
    "Exp_TableResizeInvalidRange": "Die Überschriften müssen in der gleichen Zeile bleiben und der resultierende Tabellenbereich muss den ursprünglichen Tabellenbereich überlappen.",
    "Exp_TableResizeToSpan": "Vorgang kann nicht abgeschlossen werden: Eine Tabelle kann sich nicht mit einer anderen Tabelle oder verbundenen Zellen überlappen.",
    "Exp_TableResizeWithFilter": "Zellen in einem gefilterten Bereich oder einer gefilterten Tabelle können nicht verschoben werden.",
    "Exp_TableResizeWithHidden": "Die Größe einer Tabelle, die an eine ausgeblendete Zeile oder Spalte angrenzt, kann nicht geändert werden.",
    "Exp_TableResizeToTable": "Vorgang kann nicht abgeschlossen werden: Vorgänge, die Zellen sowohl innerhalb als auch außerhalb eines Tabellenbereichs umfassen, sowie Vorgänge, die Zellen betreffen, die sich über mehrere Tabellen erstrecken, sind nicht zulässig.",
    "Exp_RowParamOutOfRange": "Die Parameterzeile liegt außerhalb des Datenbereichs der Tabelle.",
    "Exp_ColParamOutOfRange": "Die Parameterspalte liegt außerhalb des Datenbereichs der Tabelle.",
    "Exp_TableDeleteCountInvalid": "Der zu löschende Parameter count führt zu einer leeren Tabelle.",
    "Exp_TableAddRowIntersectSpan": "Das funktioniert nicht, weil dadurch Zellen in einem Bereich Ihres Arbeitsblatts verschoben würden.",
    "Exp_TableAddRowIntersectTable": "Das funktioniert nicht, weil dadurch Zellen in einer Tabelle auf Ihrem Arbeitsblatt verschoben würden.",
    "Exp_TableAddRowNoEnoughRoom": "Kann keine neuen Zellen einfügen, da dadurch nicht leere Zellen an das Ende des Arbeitsblatts verschoben würden. Diese Zellen erscheinen möglicherweise leer, haben aber leere Werte, eine Formatierung oder eine Formel. Löschen Sie genügend Zeilen oder Spalten, um Platz für das zu schaffen, was Sie einfügen möchten, und versuchen Sie es dann erneut.",
    "Table_Total": "Gesamt",
    "Table_None": "Keiner",
    "Table_Average": "Durchschnitt",
    "Table_Count": "Zählen",
    "Table_Count_Numbers": "Zahlen zählen",
    "Table_Max": "Max",
    "Table_Min": "Mindestens",
    "Table_Sum": "Summe",
    "Table_StdDev": "StdAbw",
    "Table_Var": "Var"
  },
  "Fill": {
    "CopyCells": "Zellen kopieren",
    "FillSeries": "Serie füllen",
    "FillFormattingOnly": "Nur Formatierung ausfüllen",
    "FillWithoutFormatting": "Füllen ohne Formatierung",
    "Exp_NumberOnly": "Funktioniert nur für Zahlen",
    "Exp_RangeContainsMergedCell": "Der Bereich sollte keine verbundenen Zellen enthalten.",
    "Exp_TargetContainsMergedCells": "Der Zielbereich sollte keine verbundenen Zellen haben.",
    "Exp_MergedCellsIdentical": "Dieser Vorgang erfordert, dass die zusammengefügten Zellen die gleiche Größe haben.",
    "Exp_FillRangeContainsMergedCell": "Bereich, der eine verbundene Zelle enthält, kann nicht gefüllt werden.",
    "Exp_FillCellsReadOnly": "Die Zellen, die Sie füllen möchten, sind geschützt und daher schreibgeschützt.",
    "Exp_ChangeMergedCell": "Ein Teil der zusammengeführten Zelle kann nicht geändert werden.",
    "Exp_ColumnReadOnly": "Die Spalte, die Sie ändern möchten, ist geschützt und daher schreibgeschützt.",
    "Exp_RowReadOnly": "Die Zeile, die Sie ändern möchten, ist geschützt und daher schreibgeschützt.",
    "Exp_CellReadOnly": "Die Zelle, die Sie ändern möchten, ist geschützt und daher schreibgeschützt.",
    "Exp_RangeIsNull": "Bereich ist null",
    "Exp_ChangePartOfArray": "Ein Teil eines Arrays kann nicht geändert werden."
  },
  "GanttSheet": {
    "GANTT_MONTH": "Monat",
    "GANTT_WEEK": "Woche",
    "GANTT_DAY": "Tag",
    "GANTT_HOUR": "Stunde",
    "GANTT_MINUTE": "Minute",
    "GANTT_NEW_TASK": "<Neue Aufgabe>",
    "GANTT_NEW_SUMMARY_TASK": "<Neue Sammelaufgabe>",
    "GANTT_NEW_MILESTONE": "<Neuer Meilenstein>",
    "GANTT_TASK_NUMBER": "Aufgabennummer",
    "GANTT_TASK_NAME": "Aufgabenname",
    "GANTT_MILESTONE": "Meilenstein",
    "GANTT_MODE": "Modus",
    "GANTT_DURATION": "Dauer",
    "GANTT_START": "Start",
    "GANTT_FINISH": "Beenden",
    "GANTT_START_DISPLAYED": "StartDisplayed",
    "GANTT_FINISH_DISPLAYED": "FertigAngezeigt",
    "GANTT_PREDECESSORS": "Vorgänger",
    "GANTT_SUCCESSORS": "Nachfolger",
    "GANTT_COMPLETE": "% Vollständig",
    "GANTT_COMPLETE_CHANGE": "Komplett durch",
    "GANTT_TASK_SCHEDULE_MODE_MANUALLY": "Handbuch",
    "GANTT_TASK_SCHEDULE_MODE_AUTO": "Auto",
    "GANTT_INVALID_OPERATION": "ungültigeOperation",
    "GANTT_INVALID_LEVEL": "ungültigerLevel",
    "GANTT_INVALID_ID": "ungültige ID",
    "GANTT_INVALID_ROW_INDEX": "ungültiger Zeilenindex",
    "GANTT_INVALID_INDEX": "ungültigerIndex",
    "GANTT_INVALID_COUNT": "ungültigeAnzahl",
    "GANTT_INVALID_TASK": "ungültigeAufgabe",
    "GANTT_INVALID_DEPENDENCY": "ungültige Abhängigkeit",
    "GANTT_INVALID_UNIT": "ungültigeEinheit",
    "GANTT_INVALID_WORK_DAYS": "ungültigeArbeitstage",
    "GANTT_INVALID_TASK_ID": "ungültigeTaskId",
    "GANTT_INVALID_TASK_PARENT_ID": "ungültigeTaskParentId",
    "GANTT_INVALID_TASK_LEVEL": "ungültigerTaskLevel",
    "GANTT_INVALID_FIELD": "ungültigesFeld",
    "GANTT_INVALID_ASCENDING_STATES": "ungültige aufsteigende Zustände",
    "GANTT_VALUE_INVALID": "Wert ungültig",
    "GANTT_VALUE_READONLY": "WertNurLesen",
    "DEFAULT_DATE_TIME_FORMAT": "jj-mm-tt h:mm",
    "GANTT_ACTION_TASK": "Aufgabe",
    "GANTT_ACTION_TASK_COLON": "Aufgabe:",
    "GANTT_ACTION_START": "Start:",
    "GANTT_ACTION_FINISH": "Beenden:",
    "GANTT_ACTION_TASK_START": "Aufgabenstart:",
    "GANTT_ACTION_TASK_FINISH": "Aufgabe beendet:",
    "GANTT_ACTION_START_LINK": "Start",
    "GANTT_ACTION_FINISH_LINK": "Beenden",
    "GANTT_ACTION_FROM_OF": "Von {0} von:",
    "GANTT_ACTION_TO_OF": "An {0} von:",
    "GANTT_ACTION_START_ONLY": "Nur starten",
    "GANTT_ACTION_FINISH_ONLY": "Nur beenden",
    "GANTT_ACTION_DURATION": "Dauer:",
    "GANTT_ACTION_COMPLETE_THROUGH": "Abgeschlossen durch:",
    "GANTT_ACTION_LINE_TIP_TITLE": "Link von {0} zu {1}",
    "GANTT_TASK_BAR_TASK_LINK": "Aufgabenlink:",
    "GANTT_TASK_BAR_FROM": "Aus:",
    "GANTT_TASK_BAR_TO": "Zu:",
    "GANTT_TASK_BAR_FS": "Ende-zu-Start (FS)",
    "GANTT_TASK_BAR_FF": "Ende-zu-Ende (FF)",
    "GANTT_TASK_BAR_SF": "Von Anfang bis Ende (SF)",
    "GANTT_TASK_BAR_SS": "Start-zu-Start (SS)",
    "GANTT_TASK_BAR_UNNAMED": "Unbenannt",
    "GANTT_TASK_BAR_COMPLETE_THROUGH": "Abgeschlossen durch:",
    "GANTT_TASK_BAR_COMPLETE": "% Vollständig:",
    "GANTT_CALENDAR_STANDARD": "Standard",
    "GANTT_CALENDAR_NIGHT_SHIFT": "Nachtschicht",
    "GANTT_CALENDAR_24HOURS": "24 Stunden",
    "GANTT_CALENDAR_MINUTE": "Minute",
    "GANTT_CALENDAR_MINUTE_NAMES": [
      "M",
      "min",
      "Minute"
    ],
    "GANTT_CALENDAR_HOUR": "Stunde",
    "GANTT_CALENDAR_HOUR_NAMES": [
      "H",
      "hr",
      "Stunde"
    ],
    "GANTT_CALENDAR_DAY": "Tag",
    "GANTT_CALENDAR_DAY_NAMES": [
      "D",
      "dy",
      "Tag"
    ],
    "GANTT_CALENDAR_WEEK": "Woche",
    "GANTT_CALENDAR_WEEK_NAMES": [
      "w",
      "wk",
      "Woche"
    ],
    "GANTT_CALENDAR_MONTH": "Monat",
    "GANTT_CALENDAR_MONTH_NAMES": [
      "mo",
      "mon",
      "Monat"
    ],
    "GANTT_CALENDAR_UNIT_LABELS": [
      "min",
      "hr",
      "Tag",
      "wk",
      "mon",
      "Jahr"
    ],
    "GANTT_CALENDAR_UNIT_LABELS_PLURALS": [
      "Minuten",
      "Stunden",
      "Tage",
      "Woche",
      "Mond",
      "Jahre"
    ],
    "wmk1": "47616e74745368656574",
    "wmk2": "47616e74745368656574"
  },
  "OutlineColumn": {
    "Exp_GROUP_PROTECTED": "Sie können diesen Befehl nicht auf einem geschützten Blatt verwenden. Um diesen Befehl zu verwenden, müssen Sie zuerst den Blattschutz aufheben."
  },
  "StatusBar": {
    "cellMode": "Zellenmodus",
    "cellModeReady": "Bereit",
    "cellModeEnter": "Eingeben",
    "cellModeEdit": "Bearbeiten",
    "inCalculation": "Berechnung: {0}",
    "iterateCalculation": "Iter wird berechnet: {0}",
    "formulaAverage": "Durchschnitt",
    "formulaCount": "Zählen",
    "formulaNumericalCount": "Numerische Zählung",
    "formulaMin": "Mindestens",
    "formulaMax": "Max",
    "formulaSum": "Summe",
    "zoomSlider": "Zoom-Schieberegler",
    "zoom": "Zoom",
    "toolTipCellMode": "Im {0}-Modus",
    "toolTipFormulaAverage": "Durchschnitt der ausgewählten Zellen",
    "toolTipFormulaCount": "Anzahl der ausgewählten Zellen, die Daten enthalten",
    "toolTipFormulaNumericalCount": "Anzahl der ausgewählten Zellen, die numerische Daten enthalten",
    "toolTipFormulaMin": "Mindestwert in Auswahl",
    "toolTipFormulaMax": "Maximaler Wert in Auswahl",
    "toolTipFormulaSum": "Summe der ausgewählten Zellen",
    "toolTipZoomOut": "Herauszoomen",
    "toolTipZoomIn": "Vergrößern",
    "toolTipSlider": "Zoom",
    "toolTipZoomPanel": "Zoomstufe",
    "progressItem": "Fortschritt"
  },
  "AutoMerge": {
    "Exp_RangeIsIntersected": "Der Bereich darf sich nicht mit bestehenden Bereichen überschneiden."
  },
  "NameBox": {
    "invalidName": "Sie müssen eine gültige Referenz eingeben, zu der Sie wechseln möchten, oder einen gültigen Namen für die Auswahl eingeben.",
    "nameBox": "Namensfeld"
  },
  "InputMask": {
    "errorMsg": {
      "invalidPattern": "Ungültiges Muster",
      "duplicatedDateTimePattern": "Doppeltes Datums-/Uhrzeitmuster",
      "emptyPattern": "Leeres Muster",
      "unknownPattern": "Fehler beim Parsen unbekannter Muster",
      "invalidOptionalPattern": "Fehler beim Parsen des optionalen Musters",
      "invalidGroupPattern": "Fehler beim Parsen des Gruppenmusters",
      "errorQuantifierPattern": "Position des Fehlerquantifizierers",
      "invalidQuantifierPattern": "Fehler beim Parsen von Quantifizierermustern",
      "noEntry": "Es kann keine Einschränkung eingegeben werden"
    },
    "hourFormatSingleDesignator": [
      "A",
      "P"
    ],
    "hourFormatDesignator": [
      "BIN",
      "PM"
    ]
  },
  "Print": {
    "Exp_InvalidSheetIndex": "Ungültiger Blattindex."
  },
  "PDF": {
    "Exp_FileIOError": "Ausnahme beim Lesen und Schreiben von Dateien.",
    "Exp_FontError": "Kein unterstütztes Schriftformat oder Standard-PDF-Schriftart."
  },
  "Shapes": {
    "Exp_InvalidConnectionSite": "Ungültige Verbindungssite.",
    "Exp_DuplicatedName": "Doppelter Name.",
    "Exp_EmptyName": "Leerer Name.",
    "Exp_InvalidRange": "Ungültiger Bereich"
  },
  "Charts": {
    "period": "Zeitraum",
    "movingAverage": "Gleitender Durchschnitt",
    "exponential": "Exponentiell",
    "linear": "Linear",
    "logarithmic": "Logarithmisch",
    "polynomial": "Polynom",
    "power": "Leistung",
    "unsupportedChartType": "Nicht unterstützter Diagrammtyp",
    "SERIES": "Serie",
    "VALUE": "Wert: ",
    "POINT": "Punkt ",
    "SIZE": "Größe: ",
    "INCREASE": "Zunahme",
    "DECREASE": "Verringern",
    "TOTAL": "Gesamt",
    "ChartTitle": "Diagrammtitel",
    "Branch": "Zweig",
    "AxisTitle": "Achsentitel"
  },
  "Slicer": {
    "Blank": "(leer)",
    "Exp_SlicerNameInvalid": "Der Slicer-Name ist ungültig.",
    "Exp_SlicerNameExist": "Der Slicer-Name wird bereits verwendet. Bitte geben Sie einen eindeutigen Namen ein.",
    "SlicerNameInFormula": "Schneidemaschine"
  },
  "formulaEditor": {
    "NO_MATH_PARENTHESES": "Keine Übereinstimmungsklammern",
    "MISS_RIGHT_PARENTHESES": "')' wird erwartet.",
    "MISS_LET_FUNCTION_BODY": "Fehlender Hauptteil des LET-Ausdrucks.",
    "UNKNOWN_NAME": "Unbekannter Name",
    "UNKNOWN_SHEET": "Unbekanntes Blatt \\\"$1\\",
    "NO_MATCHED_ARGUMENTS": "1-Dollar-Argumente erwartet, aber 2 Dollar bekommen",
    "INVALID_IDENTIFIER_ARGUMENT": "Dieses Argument muss ein zu bindender Bezeichner sein.",
    "DUPLICATE_IDENTIFIER": "Doppelter Bezeichner $1",
    "INVALID_EXPRESSION": "Ungültiger AUSDRUCK",
    "INVALID_FORMULA": "Ungültige Formel",
    "FORMULA": "Formel"
  },
  "PivotEngine": {
    "dateResource": {
      "Jan": "Jan",
      "Feb": "Februar",
      "Mar": "Beschädigen",
      "Apr": "Apr",
      "May": "Mai",
      "Jun": "Jun",
      "Jul": "Jul",
      "Aug": "August",
      "Sep": "September",
      "Oct": "Okt",
      "Nov": "November",
      "Dec": "Dezember",
      "Qtr1": "Quartal 1",
      "Qtr2": "Viertel 2",
      "Qtr3": "Viertel 3",
      "Qtr4": "Viertel 4",
      "Seconds": "Sekunden",
      "Minutes": "Minuten",
      "Hours": "Std",
      "Days": "Tage",
      "Months": "Monate",
      "Quarters": "Viertel",
      "Years": "Jahre",
      "SECOND_GROUP_ITEMS": [
        ":00",
        ":01",
        ":02",
        ":03",
        ":04",
        ":05",
        ":06",
        ":07",
        ":08",
        ":09",
        ":10",
        ":11",
        ":12",
        ":13",
        ":14",
        ":15",
        ":16",
        ":17",
        ":18",
        ":19",
        ":20",
        ":21",
        ":22",
        ":23",
        ":24",
        ":25",
        ":26",
        ":27",
        ":28",
        ":29",
        ":30",
        ":31",
        ":32",
        ":33",
        ":34",
        ":35",
        ":36",
        ":37",
        ":38",
        ":39",
        ":40",
        ":41",
        ":42",
        ":43",
        ":44",
        ":45",
        ":46",
        ":47",
        ":48",
        ":49",
        ":50",
        ":51",
        ":52",
        ":53",
        ":54",
        ":55",
        ":56",
        ":57",
        ":58",
        ":59"
      ],
      "MINUTE_GROUP_ITEMS": [
        ":00",
        ":01",
        ":02",
        ":03",
        ":04",
        ":05",
        ":06",
        ":07",
        ":08",
        ":09",
        ":10",
        ":11",
        ":12",
        ":13",
        ":14",
        ":15",
        ":16",
        ":17",
        ":18",
        ":19",
        ":20",
        ":21",
        ":22",
        ":23",
        ":24",
        ":25",
        ":26",
        ":27",
        ":28",
        ":29",
        ":30",
        ":31",
        ":32",
        ":33",
        ":34",
        ":35",
        ":36",
        ":37",
        ":38",
        ":39",
        ":40",
        ":41",
        ":42",
        ":43",
        ":44",
        ":45",
        ":46",
        ":47",
        ":48",
        ":49",
        ":50",
        ":51",
        ":52",
        ":53",
        ":54",
        ":55",
        ":56",
        ":57",
        ":58",
        ":59"
      ],
      "HOUR_GROUP_ITEMS": [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
      ]
    },
    "Exp_NoItemParseError": "Ein Elementname kann nicht gefunden werden. Überprüfen Sie, ob Sie den Namen richtig eingegeben haben und das Element im PivotTable-Bericht vorhanden ist.",
    "Exp_UnsupportedCalcItemType": "Verweise, Namen und Arrays werden in PivotTable-Formeln nicht unterstützt.",
    "blank": "(leer)"
  },
  "PivotTables": {
    "RepeatName": "Name wiederholen",
    "NotExist": "Existiert nicht",
    "SubtotalType_Prefix_0": "Durchschnitt von ",
    "SubtotalType_Prefix_1": "Anzahl von ",
    "SubtotalType_Prefix_2": "AnzahlAnzahl von ",
    "SubtotalType_Prefix_3": "Max von ",
    "SubtotalType_Prefix_4": "Min von ",
    "SubtotalType_Prefix_5": "Produkt von ",
    "SubtotalType_Prefix_6": "StdAbw von ",
    "SubtotalType_Prefix_7": "StdAbw von ",
    "SubtotalType_Prefix_8": "Summe von ",
    "SubtotalType_Prefix_9": "Var von ",
    "SubtotalType_Prefix_10": "Varp von ",
    "ColumnLabels": "Spaltenbeschriftungen",
    "Total": "{0} Gesamt{1}",
    "All": "Alle",
    "MultipleItems": "Mehrere Artikel",
    "RowLabels": "Zeilenbeschriftungen",
    "GrandTotal": "Gesamtsumme",
    "Values": "Werte",
    "PivotPanel_Title": "PivotTable-Felder",
    "PivotPanel_ReportText": "Wählen Sie die Felder aus, die dem Bericht hinzugefügt werden sollen",
    "PivotPanel_SearchPlaceholder": "Suchen",
    "PivotPanel_FieldAreaText": "Ziehen Sie die Felder zwischen den folgenden Bereichen:",
    "PivotPanel_FiltersItemsTitle": "Filter",
    "PivotPanel_RowsItemsTitle": "Reihen",
    "PivotPanel_ColumnsItemsTitle": "Spalten",
    "PivotPanel_ValuesItemsTitle": "Werte",
    "PivotPanel_DeferUpdateText": "Layout-Update verschieben",
    "EmptyPivotTable_PromptMessage1": "Klicken Sie in diesen Bereich, um mit dem PivotTable-Bericht zu arbeiten",
    "EmptyPivotTable_PromptMessage2": "Aktivieren Sie die PivotTable-Feldliste, um mit der PivotTable zu arbeiten",
    "PivotPanel_Update": "Aktualisieren",
    "PivotPanel_DropDownList_Up": "Nach oben",
    "PivotPanel_DropDownList_Down": "Nach unten verschieben",
    "PivotPanel_DropDownList_Beginning": "Zum Anfang gehen",
    "PivotPanel_DropDownList_End": "Zum Ende verschieben",
    "PivotPanel_DropDownList_ReportFilter": "Zum Berichtsfilter verschieben",
    "PivotPanel_DropDownList_Row": "Zu Zeilenbeschriftungen verschieben",
    "PivotPanel_DropDownList_Col": "Zu Spaltenbeschriftungen verschieben",
    "PivotPanel_DropDownList_Values": "Zu den Werten übergehen",
    "PivotPanel_DropDownList_Remove": "Feld entfernen",
    "PivotPanel_DropDownList_Set": "Feldeinstellungen...",
    "PivotPanel_DropDownList_ValueSet": "Wertefeldeinstellungen …",
    "PivotPanel_Fields_MoveTo_ReportField": "Zum Berichtsfilter hinzufügen",
    "PivotPanel_Fields_MoveTo_RowLabel": "Zu Zeilenbeschriftungen hinzufügen",
    "PivotPanel_Fields_MoveTo_ColLabel": "Zu Spaltenbeschriftungen hinzufügen",
    "PivotPanel_Fields_MoveTo_Value": "Werte hinzufügen",
    "PivotPanel_LabelOrValue_ClearFilter": "Filter löschen",
    "PivotPanel_ValueFilterOrLabel_Equals": "Gleich…",
    "PivotPanel_ValueFilterOrLabel_NotEqual": "Ist nicht gleich …",
    "PivotPanel_ValueFilterOrLabel_GreaterThan": "Größer als ...",
    "PivotPanel_ValueFilterOrLabel_GreaterOrTo": "Größer als oder gleich …",
    "PivotPanel_ValueFilterOrLabel_LessThan": "Weniger als …",
    "PivotPanel_ValueFilterOrLabel_LessOrTo": "Kleiner als oder gleich …",
    "PivotPanel_ValueFilterOrLabel_Between": "Zwischen...",
    "PivotPanel_ValueFilterOrLabel_NotBetween": "Nicht zwischen …",
    "PivotPanel_ValueFilter_Top10": "Top 10...",
    "PivotPanel_ValueFilterOrLabel_IsBeginWith": "Beginnt mit …",
    "PivotPanel_ValueFilterOrLabel_NotBegin": "Beginnt nicht mit …",
    "PivotPanel_ValueFilterOrLabel_End": "Endet mit …",
    "PivotPanel_ValueFilterOrLabel_NotEndWith": "Endet nicht mit …",
    "PivotPanel_ValueFilterOrLabel_Contain": "Enthält…",
    "PivotPanel_ValueFilterOrLabel_NotContain": "Enthält nicht …",
    "ValueFilterOrLabel_Equals": "gleich",
    "ValueFilterOrLabel_NotEqual": "ist nicht gleich",
    "ValueFilterOrLabel_GreaterThan": "größer als",
    "ValueFilterOrLabel_GreaterOrTo": "größer als oder gleich",
    "ValueFilterOrLabel_LessThan": "weniger als",
    "ValueFilterOrLabel_LessOrTo": "kleiner als oder gleich",
    "ValueFilterOrLabel_Between": "zwischen",
    "ValueFilterOrLabel_NotBetween": "nicht zwischen",
    "ValueFilterOrLabelSelect_GreaterThan": "ist größer als",
    "ValueFilterOrLabelSelect_GreaterOrTo": "ist größer als oder gleich",
    "ValueFilterOrLabelSelect_LessThan": "ist kleiner als",
    "ValueFilterOrLabelSelect_LessOrTo": "ist kleiner oder gleich",
    "ValueFilterOrLabelSelect_Between": "ist zwischen",
    "ValueFilterOrLabelSelect_NotBetween": "ist nicht zwischen",
    "ValueFilterOrLabel_IsBeginWith": "beginnt mit",
    "ValueFilterOrLabel_NotBegin": "beginnt nicht mit",
    "ValueFilterOrLabel_End": "endet mit",
    "ValueFilterOrLabel_NotEndWith": "endet nicht mit",
    "ValueFilterOrLabel_Contain": "enthält",
    "ValueFilterOrLabel_NotContain": "enthält nicht",
    "PivotPanel_ValueFilterOrLabel_Before": "Vor...",
    "PivotPanel_ValueFilterOrLabel_After": "Nach...",
    "PivotPanel_ValueFilterOrLabel_Tomorrow": "Morgen",
    "PivotPanel_ValueFilterOrLabel_Today": "Heute",
    "PivotPanel_ValueFilterOrLabel_Yesterday": "Gestern",
    "PivotPanel_ValueFilterOrLabel_NextWeek": "Nächste Woche",
    "PivotPanel_ValueFilterOrLabel_ThisWeek": "Diese Woche",
    "PivotPanel_ValueFilterOrLabel_LastWeek": "Letzte Woche",
    "PivotPanel_ValueFilterOrLabel_NextMonth": "Nächsten Monat",
    "PivotPanel_ValueFilterOrLabel_ThisMonth": "Diesen Monat",
    "PivotPanel_ValueFilterOrLabel_LastMonth": "Letzter Monat",
    "PivotPanel_ValueFilterOrLabel_NextQuarter": "Nächstes Quartal",
    "PivotPanel_ValueFilterOrLabel_ThisQuarter": "Dieses Quartal",
    "PivotPanel_ValueFilterOrLabel_LastQuarter": "Letztes Viertel",
    "PivotPanel_ValueFilterOrLabel_NextYear": "Nächstes Jahr",
    "PivotPanel_ValueFilterOrLabel_ThisYear": "Dieses Jahr",
    "PivotPanel_ValueFilterOrLabel_LastYear": "Letztes Jahr",
    "PivotPanel_ValueFilterOrLabel_YearToDate": "Der bisherige Jahresverlauf",
    "PivotPanel_ValueFilterOrLabel_MonthToDate": "Diesen Monat",
    "PivotPanel_ValueFilterOrLabel_QuarterToDate": "Bisheriges Quartal",
    "PivotPanel_ValueFilterOrLabel_ParallelYearToDate": "Paralleles Jahr bis heute",
    "PivotPanel_ValueFilterOrLabel_ParallelMonthToDate": "Bisher paralleler Monat",
    "PivotPanel_ValueFilterOrLabel_ParallelQuarterToDate": "Bisher paralleles Quartal",
    "PivotPanel_ValueFilterOrLabel_AllDates": "Alle Daten im Zeitraum",
    "PivotPanel_ValueFilterOrLabel_Custom": "Benutzerdefinierter Filter …",
    "PivotPanel_Sort_A_Z": "Sortieren von A bis Z",
    "PivotPanel_Sort_Z_A": "Sortieren von Z bis A",
    "PivotPanel_Sort_Smallest_Largest": "Vom Kleinsten zum Größten sortieren",
    "PivotPanel_Sort_Largest_Smallest": "Vom Größten zum Kleinsten sortieren",
    "PivotPanel_Sort_More": "Weitere Sortieroptionen …",
    "PivotPanel_Filter_Clear": "Filter löschen von {0}",
    "PivotPanel_Filter_Label": "Beschriftungsfilter",
    "PivotPanel_Filter_Value": "Wertefilter",
    "PivotPanel_Date_Filter": "Datumsfilter",
    "Ok": "OK",
    "Cancel": "Stornieren",
    "NumberFormat": "Zahlenformat",
    "LabelFormat": "Etikettenformat",
    "Number": "Nummer",
    "FormatCells": "Zellen formatieren",
    "Sample": "Probe",
    "Type": "Typ",
    "CustomFormats": [
      "Allgemein",
      "0",
      "0,00",
      "#,##0",
      "#,##0,00",
      "#,##0;(#,##0)",
      "#,##0;[Rot](#,##0)",
      "#,##0,00;(#,##0,00)",
      "#,##0,00;[Rot](#,##0,00)",
      "$#,##0;($#,##0)",
      "$#,##0;[Rot]($#,##0)",
      "$#,##0,00;($#,##0,00)",
      "$#,##0,00;[Rot]($#,##0,00)",
      "0 %",
      "0,00 %",
      "0,00E+00",
      "##0.0E+0",
      "# ?/?",
      "# ??/??",
      "m/t/jjjj",
      "t-mmm-jj",
      "d-mmm",
      "mmm-jj",
      "h:mm AM/PM",
      "h:mm:ss AM/PM",
      "hh:mm",
      "hh:mm:ss",
      "m/t/jjjj hh:mm",
      "mm:ss",
      "mm:ss.0",
      "@",
      "[h]:mm:ss",
      "$ #,##0;$ (#,##0);$ \\\"-\\\";@",
      " #,##0; (#,##0); \\\"-\\\";@",
      "$ #,##0.00;$ (#,##0.00);$ \\\"-\\\"??;@",
      " #,##0.00; (#,##0.00); \\\"-\\\"??;@",
      "hh:mm:ss",
      "00000",
      "# ???/???",
      "000-00-0000",
      "ttt, mmmm tt, jjjj",
      "m/d;@",
      "[<=9999999]###-####;(###) ###-####",
      "# ?/8"
    ],
    "Select_Field": "Feld auswählen",
    "PivotPanel_Filter_SelectAll": "Alles auswählen",
    "PivotPanel_Filter_NoSelectAll": "Alle abwählen",
    "PivotPanel_Filter_Search": "suchen",
    "Label_Title": "Beschriftungsfilter",
    "Label_Show": "Artikel anzeigen, für die das Etikett gilt",
    "Use_Single_Character": "Verwenden Sie ?\", um ein beliebiges einzelnes Zeichen darzustellen.",
    "Use_Series_Characters": "Verwenden Sie * zur Darstellung beliebiger Zeichenreihen",
    "Value_Show": "Artikel anzeigen, für die",
    "Value_Title": "Wertefilter",
    "Top_Ten_Filter": "Top 10 Filter ",
    "TopTenShow": "zeigen",
    "Sort_Field_Dialog_Title": "Sortieren",
    "Sort_Field_Dialog_Sort_Options": "Sortieroptionen",
    "Sort_Field_Dialog_Summary": "Zusammenfassung",
    "Sort_Field_Dialog_Ascending_Sort": "Aufsteigend (A bis Z) nach:",
    "Sort_Field_Dialog_Descending_Sort": "Absteigend (Z nach A) nach:",
    "Sort_Field_Dialog_More_Options": "Weitere Optionen …",
    "Sort_Field_More_Dialog_Title": "Weitere Sortieroptionen",
    "Sort_Field_More_Dialog_Sort_By": "Sortieren nach",
    "Sort_Field_More_Dialog_Values_In_Selected_Area": "Werte im ausgewählten {{AREA}}",
    "Sort_Value_Dialog_Title": "Nach Wert sortieren",
    "Sort_Value_Dialog_Sort_Direction": "Sortierrichtung",
    "Sort_Value_Dialog_Asc": "Vom Kleinsten zum Größten",
    "Sort_Value_Dialog_Desc": "Vom Größten zum Kleinsten",
    "Sort_Value_Dialog_Top_To_Bottom": "Von oben nach unten",
    "Sort_Value_Dialog_Left_To_Right": "Von links nach rechts",
    "Custom_Sort_Summary": "Benutzerdefinierte Sortierung",
    "Sort_Order_ASC": "aufsteigende Reihenfolge",
    "Sort_Order_DESC": "absteigende Reihenfolge",
    "Sort_In_Row": "Reihe",
    "Sort_In_Column": "Spalte",
    "Sort_Summary_Pattern": "Sortieren Sie {{FIELD_NAME}} in {{ORDER}}",
    "Sort_Value_Summary_Pattern": "Sortieren Sie {{FIELD_NAME}} nach {{SELECTED_FIELD_NAME}} in {{ORDER}}",
    "Sort_More_Summary_Pattern": "Sortieren Sie {{FIELD_NAME}} nach {{SELECTED_FIELD_NAME}} in {{ORDER}} unter Verwendung der Werte in dieser {{ROW_COLUMN}}:\\r\\n",
    "Invalid_Sort_Range": "Die Sortierreferenz ist ungültig. Stellen Sie sicher, dass sie sich innerhalb der Daten befindet, die Sie sortieren möchten, und dass das erste Sortierfeld nicht identisch oder leer ist.",
    "Invalid_Field_Sort_By": "Es kann nicht ermittelt werden, nach welchem ​​PivotTable-Feld sortiert werden soll.",
    "Top": "Spitze",
    "Bottom": "Unten",
    "Top_Item": "Artikel",
    "Top_Percent": "Prozent",
    "Top_Sum": "Summe",
    "ByJoiner": "von",
    "AndJoiner": "Und",
    "Q1": "Viertel 1",
    "Q2": "Viertel 2",
    "Q3": "Viertel 3",
    "Q4": "Viertel 4",
    "Jan": "Januar",
    "Feb": "Februar",
    "Mar": "Marsch",
    "Apr": "April",
    "May": "Mai",
    "Jun": "Juni",
    "Jul": "Juli",
    "Aug": "August",
    "Sep": "September",
    "Oct": "Oktober",
    "Nov": "November",
    "Dec": "Dezember",
    "IsBefore": "ist vor",
    "IsBeforeOrEqual": "ist vor oder gleich",
    "IsAfter": "ist nach",
    "IsAfterOrEqual": "ist nach oder gleich",
    "IsBetween": "ist zwischen",
    "IsNotBetween": "ist nicht zwischen",
    "DateFilterTitle": "Datumsfilter",
    "DateShow": "Artikel anzeigen, für die das Datum gilt",
    "WholeDays": "Ganze Tage",
    "FieldSetting": "Feldeinstellungen",
    "ValueSetting": "Wertefeldeinstellungen",
    "SourceName": "Quellenname:",
    "CustomName": "Benutzerdefinierter Name:",
    "SummarizeValue": "Werte zusammenfassen nach",
    "ShowValueAs": "Wert anzeigen als",
    "CalculationForDialog": "Berechnung: ",
    "BaseFieldForDialog": "Basisfeld: ",
    "BaseItemForDialog": "Basisartikel: ",
    "BaseItemNext": "(nächste)",
    "BaseItemPrevious": "(vorherige)",
    "SummarizeValueField": "Wertefeld zusammenfassen nach",
    "ShowValueAsField": "Wert anzeigen als",
    "ChooseType": "Wählen Sie die Berechnungsart aus, die Sie zum Zusammenfassen der Daten aus dem ausgewählten Feld verwenden möchten",
    "Sum": "Summe",
    "Count": "Zählen",
    "Average": "Durchschnitt",
    "Max": "Max",
    "Min": "Mindestens",
    "Product": "Produkt",
    "CountNumbers": "Zahlen zählen",
    "StdDev": "StdAbw",
    "StdDevp": "StdDevp",
    "Var": "Var",
    "Varp": "Varp",
    "sigmaValue": "∑ Werte",
    "sigmaValueTemp": "Werte",
    "DateFormatError": "Das ist kein gültiges Datum",
    "noCalculation": "Keine Berechnung",
    "percentGrandTotal": "% der Gesamtsumme",
    "percentColumnTotal": "% der Spaltensumme",
    "percentRowTotal": "% der Zeilensumme",
    "percentEllipsis": "% Von ...",
    "percentParentRowTotal": "% der Summe der übergeordneten Zeilen",
    "percentParentColumnTotal": "% der Summe der übergeordneten Spalte",
    "percentParentTotal": "% der übergeordneten Gesamtsumme …",
    "difference": "Unterschied zu ...",
    "percentDifference": "% Unterschied zu …",
    "runningTotal": "Laufende Summe in …",
    "percentRunningTotal": "% Laufende Summe in …",
    "rankSmallestLargest": "Rangfolge vom Kleinsten zum Größten …",
    "rankLargestSmallest": "Rangfolge vom Größten zum Kleinsten …",
    "index": "Index",
    "showValueAsDialog": [
      "",
      "",
      "",
      "",
      "% Von ",
      "",
      "",
      "% des übergeordneten Gesamtwerts",
      "Unterschied zu ",
      "% Unterschied von ",
      "Laufende Summe in ",
      "% Laufende Summe in ",
      "Rangfolge vom Kleinsten zum Größten",
      "Rangfolge vom Größten zum Kleinsten",
      ""
    ],
    "baseField": "Basisfeld:",
    "baseItem": "Basisartikel:",
    "grouping": "Gruppierung",
    "auto": "Auto",
    "startingAt": "Beginnt bei:",
    "endingAt": "Endet um:",
    "groupBy": "Von:",
    "seconds": "Sekunden",
    "minutes": "Minuten",
    "hours": "Std",
    "days": "Tage",
    "months": "Monate",
    "quarters": "Viertel",
    "years": "Jahre",
    "numberOfDays": "Anzahl Tage",
    "NoHaveSpread": "Arbeitsmappenausnahme",
    "SourceError": "Quelldatenausnahme, PivotTable-Bericht kann nicht erstellt werden",
    "SourceNotIsTableNameOrFormula": "Quelldaten sind nicht Tabellenname und Formel",
    "SourceDataOnlyOne": "Dieser Befehl erfordert mindestens zwei Zeilen Quelldaten. Sie können den Befehl nicht auf eine Auswahl in nur einer Zeile anwenden.",
    "FieldAreaLimited": "Das Feld, das Sie verschieben, kann nicht in diesem Bereich des Berichts platziert werden.",
    "Views": "Ansichten",
    "Group": "Gruppe",
    "param_error": "der Parameter ist null oder nicht definiert",
    "EmptyValueFieldError": "Sie benötigen mindestens ein Feld im Bereich \"Werte\", um einen Wertefilter anzuwenden.",
    "DefaultPivotTableViewName": "Pivotansicht",
    "toolTipContent_Row": "Reihe: ",
    "toolTipContent_Column": "Spalte: ",
    "toolTipContent_Value": "Wert: ",
    "toolTipContent_NoValue": "Kein Wert",
    "deferLayoutUpdate": "Layout-Update verschieben",
    "getStringLabelFilterItemText": "",
    "getDateLabelFilterItemText": "",
    "getValueFilterItemText": "",
    "PivotTableErrorMessage_ShowDetail": "Details für diese Auswahl können nicht angezeigt oder ausgeblendet werden",
    "PivotTableErrorMessage_MakeChange": "Wir können diese Änderung für die ausgewählten Zellen nicht vornehmen, da sie eine PivotTable betrifft. Verwenden Sie die Feldliste, um den Bericht zu ändern. Wenn Sie versuchen, Zellen einzufügen oder zu löschen, verschieben Sie die PivotTable und versuchen Sie es erneut.",
    "PivotTableErrorMessage_ExistData": "In {} sind bereits Daten vorhanden. Möchten Sie diese ersetzen?",
    "PivotTableErrorMessage_EditWhenDefer": "Der PivotTable-Bericht kann nicht bearbeitet werden, wenn das Kontrollkästchen \"Layoutaktualisierung verschieben\" aktiviert ist. Um den Bericht zu bearbeiten, deaktivieren Sie das Kontrollkästchen \"Layoutaktualisierung verschieben\" unten in der PivotTable-Feldliste.",
    "PivotTableErrorMessage_DuplicatedFieldName": "Der PivotTable-Feldname ist bereits vorhanden.",
    "PivotTableErrorMessage_EmptyFieldName": "In einem PivotTable-Bericht kann kein Nullwert als Element- oder Feldname eingegeben werden.",
    "PivotTableErrorMessage_Protect": "Dieser Befehl kann nicht ausgeführt werden, wenn ein geschütztes Blatt einen anderen PivotTable-Bericht enthält, der auf denselben Quelldaten basiert. Um den Schutz des Blatts mit dem anderen Bericht aufzuheben, klicken Sie auf die Blattregisterkarte und dann auf Blattschutz aufheben (Registerkarte Überprüfen, Gruppe Änderungen). Versuchen Sie den Befehl dann erneut.",
    "PivotTableErrorMessage_EmptySourceFieldName": "Der PivotTable-Feldname ist ungültig. Um einen PivotTable-Bericht zu erstellen, müssen Sie Daten verwenden, die als Liste mit beschrifteten Spalten organisiert sind. Wenn Sie den Namen eines PivotTable-Felds ändern, müssen Sie einen neuen Namen für das Feld eingeben.",
    "PivotTableErrorMessage_Overlap": "Ein PivotTable-Bericht kann sich nicht mit einem anderen PivotTable-Bericht überschneiden.",
    "PivotTableErrorMessage_InvalidChange": "Wir können diesen Teil der PivotTable nicht ändern.",
    "PivotTableErrorMessage_InvalidGroup": "Diese Auswahl kann nicht gruppiert werden.",
    "PivotTableErrorMessage_InvalidReference": "Referenz ist ungültig.",
    "PivotTableForAccessibility": "PivotTable: \\r\\nPivotTable-Name: ",
    "PivotTableCalcItemHasTowCacheField": "Wenn ein oder mehrere Felder in der PivotTable berechnete Elemente haben, können keine Felder zweimal oder mehrmals im Datenbereich oder gleichzeitig im Datenbereich und einem anderen Bereich verwendet werden. Wenn Sie versuchen, ein Feld hinzuzufügen, entfernen Sie die berechneten Elemente und fügen Sie das Feld erneut hinzu. Wenn Sie versuchen, ein berechnetes Element hinzuzufügen, ändern Sie den PivotTable-Bericht so, dass kein Feld mehr als einmal verwendet wird, und fügen Sie dann das berechnete Element hinzu.",
    "PivotTableHasNumberOrDateGroup": "Dieses PivotTable-Berichtsfeld ist gruppiert. Sie können einem gruppierten Feld kein berechnetes Element hinzufügen. Um die Gruppierung des Felds aufzuheben, stellen Sie sicher, dass es sich im Zeilen- oder Spaltenbereich befindet, wählen Sie eines der Elemente des gruppierten Felds aus, klicken Sie auf der Registerkarte \"Analysieren\" in der Gruppe \"Gruppieren\" auf die Schaltfläche \"Gruppierung aufheben\" und fügen Sie dann das berechnete Element ein. Nach dem Einfügen können Sie die Elemente des Felds erneut gruppieren.",
    "PivotTableSubtotalType": "Durchschnittswerte, Standardabweichungen und Varianzen werden nicht unterstützt, wenn ein PivotTable-Bericht berechnete Elemente enthält.",
    "PivotTableHasSameItemName": "Berechnetes Element oder Feld konnte nicht erstellt werden, da ein anderes Element oder Feld mit demselben Namen vorhanden ist.",
    "PivotTableCalcItemHasMultipleDataField": "Mehrere Datenfelder desselben Felds werden nicht unterstützt, wenn ein PivotTable-Bericht berechnete Elemente enthält.",
    "PivotTableMoveCalcItemFieldToReport": "Dieses Feld kann nicht in den Berichtsfilter eingefügt werden, da es berechnete Elemente enthält. Um dieses Feld in den Berichtsfilter einzufügen, löschen Sie zuerst die berechneten Elemente.",
    "PivotTableErrorFormula": "Ein Elementname kann nicht gefunden werden. Überprüfen Sie, ob Sie den Namen richtig eingegeben haben und das Element im PivotTable-Bericht vorhanden ist.",
    "SlicerNameInFormula": "Schneidemaschine",
    "search": "Suchen",
    "AddSearchResult": "Aktuelle Auswahl zum Filter hinzufügen",
    "Layout": "Layout",
    "showNoData": "Elemente ohne Daten anzeigen",
    "showSubtotalTop": "Zwischensummen oben in jeder Gruppe anzeigen",
    "TIMELINE_PLACE_HOLDER": "{TL}",
    "ALL_DATES_IN": "Alle Termine in ",
    "ALL_PERIODS": "Alle Zeiträume",
    "INVALID_DATE_SELECTION": "Ungültige Datumsauswahl!",
    "QUARTER_MAP": [
      "",
      "Frage 1",
      "Frage 2",
      "Frage 3",
      "Frage 4"
    ],
    "DateNotEqual": "Nicht {TL}",
    "DateNewerThan": "Nach {TL}",
    "DateNewerThanOrEqual": "Nach oder am {TL}",
    "DateOlderThan": "Vor {TL}",
    "DateOlderThanOrEqual": "Vor oder am {TL}",
    "DateNotBetween": "Nicht zwischen {TL}",
    "AllDatesIn_Quarter1": "Alle Termine im 1. Quartal",
    "AllDatesIn_Quarter2": "Alle Termine im 2. Quartal",
    "AllDatesIn_Quarter3": "Alle Termine im 3. Quartal",
    "AllDatesIn_Quarter4": "Alle Termine im 4. Quartal",
    "AllDatesIn_January": "Alle Termine im Januar",
    "AllDatesIn_February": "Alle Termine im Februar",
    "AllDatesIn_March": "Alle Termine im März",
    "AllDatesIn_April": "Alle Termine im April",
    "AllDatesIn_May": "Alle Termine im Mai",
    "AllDatesIn_June": "Alle Termine im Juni",
    "AllDatesIn_July": "Alle Termine im Juli",
    "AllDatesIn_August": "Alle Termine im August",
    "AllDatesIn_September": "Alle Termine im September",
    "AllDatesIn_October": "Alle Termine im Oktober",
    "AllDatesIn_November": "Alle Termine im November",
    "AllDatesIn_December": "Alle Termine im Dezember",
    "TIME_LEVEL_YEARS": "JAHRE",
    "TIME_LEVEL_QUARTERS": "VIERTEL",
    "TIME_LEVEL_MONTHS": "MONATE",
    "TIME_LEVEL_DAYS": "TAGE",
    "PivotTableErrorMessage_ExistTable": "Ein PivotTable-Bericht kann sich nicht mit einer Tabelle überlappen.",
    "VALUE_MUST_NUMBER": "Der Wert muss eine Zahl sein.",
    "ENTRY_NUMBER": "Ihre Eingabe kann nicht verwendet werden. Möglicherweise ist eine Ganzzahl oder Dezimalzahl erforderlich.",
    "POSITIVE_INTEGER": "Zahl muss größer als Null sein."
  },
  "TableSheet": {
    "EXP_TooManyPinRecords": "Unterstützt nur weniger als 10 PIN-Datensätze.",
    "GroupPanelTip": "Hierher ziehen, um Zeilengruppen festzulegen",
    "GroupPanelFieldsHeader": "Felder",
    "GroupPanelGroupsHeader": "Gruppen",
    "GroupPanelItemRemove": "Entfernen",
    "GroupPanelItemAddCalculation": "Zusammenfassungsfeld hinzufügen",
    "GroupPanelDropDownCalcField": "Feld",
    "GroupPanelSummaryLabelFormula": "Formel",
    "GroupPanelSummaryLabelCaption": "Untertitel",
    "GroupPanelSummaryLabelSlice": "Scheibe",
    "GroupPanelSummaryLabelRelateTo": "Beziehen auf",
    "GroupPanelSummaryLabelPosition": "Position",
    "GroupPanelSummaryLabelPositionHeader": "Kopfzeile",
    "GroupPanelSummaryLabelPositionFooter": "Fußzeile",
    "GroupPanelItemRemoveAll": "Alle entfernen",
    "GroupPanelAddCalculateColumn": "Berechnete Spalte hinzufügen",
    "TextColon": ":",
    "StatusBarRowCount": "Zeilenanzahl",
    "StatusBarToolTipRowCount": "Anzahl der ausgewählten Zeilen",
    "CrossColumnCrossHeader": "Kreuzen",
    "CrossColumnDetailFormatter": "Formatierer",
    "CrossColumnDetailName": "Name",
    "CrossColumnDetailValue": "Wert",
    "CrossColumnDetailValuePlaceHolder": "Element hierher ziehen, um Wert festzulegen",
    "CrossColumnDetailOver": "Über",
    "CrossColumnDetailCaption": "Untertitel",
    "CrossColumnDetailValueHeader": "Übergreifende Werteüberschrift anzeigen",
    "CrossColumnDetailFilter": "Filter",
    "CrossColumnDetailAttributes": "Attribute",
    "CrossColumnDetailList": "Liste",
    "Exp_InvalidOperationInProtectForTableSheet": "Der Bereich, den Sie ändern möchten, ist gesperrt.",
    "defineColumn": "Spalte definieren",
    "cancel": "Stornieren",
    "submit": "Einreichen",
    "defineColumnValue": "Wert",
    "defineColumnCaption": "Untertitel",
    "defineColumnType": "Typ",
    "defineColumnFormatting": "Formatierung",
    "defineColumnConfiguration": "Konfiguration",
    "defineColumnDefaultValue": "Standard",
    "defineColumnOthers": "Andere",
    "defineColumnFormula": "Formel",
    "defineColumnNone": "Keiner",
    "defineColumnAll": "Alle",
    "defineColumnNoResults": "Keine Ergebnisse",
    "defineColumnRequired": "Es ist erforderlich",
    "defineColumnExisted": "Es hat existiert",
    "columnTypeNumber": "Nummer",
    "columnTypeText": "Text",
    "columnTypeFormula": "Formel",
    "columnTypeCheckbox": "Kontrollkästchen",
    "columnTypeDate": "Datum",
    "columnTypeCurrency": "Währung",
    "columnTypePercent": "Prozent",
    "columnTypePhone": "Telefon",
    "columnTypeEmail": "E-Mail",
    "columnTypeURL": "URL",
    "columnTypeLookup": "Nachschlagen",
    "columnTypeCreatedTime": "Erstellungszeit",
    "columnTypeModifiedTime": "Geänderte Zeit",
    "columnTypeAttachment": "Anhang",
    "columnTypeSelect": "Wählen",
    "columnTypeBarcode": "Strichcode",
    "columnTypeNumberFormattingSample": "Probe",
    "columnTypeNumberFormattingDecimalPlaces": "Nachkommastellen",
    "columnTypeNumberFormattingThousandSeparator": "1000-Trennzeichen (,) verwenden",
    "columnTypeNumberFormattingNegativeNumbers": "Negative Zahlen",
    "columnTypeNumberFormattingSymbol": "Symbol",
    "columnTypeNumberFormatting": {
      "negativeNumbers": [],
      "numberCategoryFormats": [
        "0",
        "0;[Rot]0",
        "0_);(0)",
        "0_);[Rot](0)",
        "#,##0",
        "#,##0;[Rot]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rot](#,##0)"
      ],
      "japanEmperorReignDateFormat": [
        "[$-411]ge.md;@",
        "[$-411]ggge\\\"年\\\"m\\\"月\\\"d\\\"日\\\";@"
      ],
      "japanEmperorReignFirstYearDateFormat": [
        "[$-411]ge.md;@",
        "[$-ja-JP-x-gannen]ggge\\\"年\\\"m\\\"月\\\"d\\\"日\\\";@"
      ],
      "accountingSymbol": [
        [
          "Keiner",
          "",
          ""
        ],
        [
          "$",
          "$",
          "en-US"
        ],
        [
          "¥ (Chinesisch)",
          "¥",
          "zh-cn"
        ],
        [
          "¥ (Japanisch)",
          "¥",
          "ja-jp"
        ],
        [
          "₩ (Koreanisch)",
          "₩",
          "ko kr"
        ]
      ],
      "percentageFormats": [
        "0 %"
      ],
      "currencyFormatWithoutSymbol": [
        "#,##0",
        "#,##0;[Rot]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rot](#,##0)"
      ],
      "commonFormats": {
        "Number": {
          "format": "0,00",
          "label": "Nummer"
        },
        "Currency": {
          "format": "[$$-409]#,##0,00",
          "label": "Währung"
        },
        "Accounting": {
          "format": "_(\\\"$\\\"* #,##0.00_);_(\\\"$\\\"* (#,##0.00);_(\\\"$\\\"* \\\"-\\\"??_) ;_(@_)",
          "label": "Buchhaltung"
        },
        "ShortDate": {
          "format": "m/t/jjjj",
          "label": "Kurzes Date"
        },
        "LongDate": {
          "format": "[$-409]ttt, mmmm tt, jjjj",
          "label": "Langes Date"
        },
        "Time": {
          "format": "[$-409]h:mm:ss AM/PM",
          "label": "Zeit"
        },
        "Percentage": {
          "format": "0,00 %",
          "label": "Prozentsatz"
        },
        "Fraction": {
          "format": "# ?/?",
          "label": "Fraktion"
        },
        "Scientific": {
          "format": "0,00E+00",
          "label": "Wissenschaftlich"
        },
        "Text": {
          "format": "@",
          "label": "Text"
        },
        "Comma": {
          "format": "_(* #,##0.00_);_(* (#,##0.00);_(* \\\"-\\\"??_);_(@_)",
          "label": "Komma"
        }
      }
    },
    "columnTypeLookupTables": "Lookup-Tabelle auswählen",
    "columnTypeLookupFields": "Das Feld zum Nachschlagen",
    "columnTypeLookupIndexes": "Die Rekordzahl",
    "columnTypeFormattingCategory": "Kategorie",
    "columnTypeMask": {
      "pattern": "Muster",
      "placeholder": "Platzhalter",
      "excludeLiteral": "Literal ausschließen",
      "excludePlaceholder": "Platzhalter ausschließen"
    },
    "columnTypeAllEditableFields": "Alle editierbaren Felder",
    "columnTypeDateTimePicker": "Datum/Uhrzeit-Auswahl",
    "columnTypeDateStartDay": "Starttag",
    "columnTypeDateMonday": "Montag",
    "columnTypeDateTuesday": "Dienstag",
    "columnTypeDateWednesday": "Mittwoch",
    "columnTypeDateThursday": "Donnerstag",
    "columnTypeDateFriday": "Freitag",
    "columnTypeDateSaturday": "Samstag",
    "columnTypeDateSunday": "Sonntag",
    "columnTypeDateCalendarPage": "Kalenderseite",
    "columnTypeDateDay": "Tag",
    "columnTypeDateYear": "Jahr",
    "columnTypeDateMonth": "Monat",
    "columnTypeDateShowTime": "Show Time",
    "columnTypeDateShowDateRange": "Datumsbereich anzeigen",
    "columnTypeDateShowBuiltInDateRange": "ShowBuiltInDateRange",
    "columnTypeDateType": "Typ",
    "columnTypeDateLocale": "Gebietsschema (Standort)",
    "columnTypeCalendar": "Kalendertyp",
    "columnTypeShowEraFirstYear": "Verwenden Sie Gannen, um das 1. Jahr anzuzeigen",
    "columnTypeCalendarType": {
      "western": "Western",
      "JER": "Herrschaft des japanischen Kaisers"
    },
    "columnTypeAttachmentMarginGroup": "Marge",
    "columnTypeAttachmentLeft": "Links",
    "columnTypeAttachmentTop": "Spitze",
    "columnTypeAttachmentRight": "Rechts",
    "columnTypeAttachmentBottom": "Unten",
    "columnTypeAttachmentMaxSize": "Größenbeschränkung",
    "columnTypeAttachmentAccept": "Dateityp",
    "columnTypeAttachmentAcceptValueTypes": {
      "txt": "txt",
      "all": "alle",
      "pdf": "pdf",
      "image": "jpg,png,gif",
      "excel": "docx, xlsx, pptx"
    },
    "columnTypeAttachmentIsPreviewEnabled": "Vorschau",
    "columnTypeAttachmentIsClearEnabled": "Klar",
    "columnTypeAttachmentIsDownloadEnabled": "Herunterladen",
    "columnTypeAttachmentSizeUnit": "KB",
    "columnTypeCheckboxTitle": "CheckBox-Zellentyp",
    "columnTypeCheckboxTextGroup": "Text",
    "columnTypeCheckboxTrue": "WAHR",
    "columnTypeCheckboxIndeterminate": "Unbestimmt",
    "columnTypeCheckboxFalse": "FALSCH",
    "columnTypeCheckboxAlign": "Ausrichten",
    "columnTypeCheckboxOther": "Andere",
    "columnTypeCheckboxCaption": "Untertitel",
    "columnTypeCheckboxIsThreeState": "IstDreiZustand",
    "columnTypeCheckboxBoxSize": "Kartongröße",
    "columnTypeCheckboxAuto": "Auto",
    "columnTypeCheckboxTextAlign": {
      "top": "Spitze",
      "bottom": "Unten",
      "left": "Links",
      "right": "Rechts"
    },
    "columnTypeBarcodeLabel": {
      "showLabel": "Beschriftung anzeigen",
      "barcodeType": "Barcode-Typ",
      "color": "Farbe",
      "errorCorrectionLevel": "Fehlerkorrekturstufe",
      "backgroundColor": "Hintergrundfarbe",
      "version": "Version",
      "model": "Modell",
      "mask": "Maske",
      "connection": "Verbindung",
      "charCode": "Zeichencode",
      "connectionNo": "Verbindungsnr.",
      "charset": "Zeichensatz",
      "quietZoneLeft": "Ruhezone links",
      "quietZoneRight": "Ruhezone rechts",
      "quietZoneTop": "Ruhezone Top",
      "quietZoneBottom": "Ruhezone unten",
      "labelPosition": "Etikettenposition",
      "addOn": "Hinzufügen Auf",
      "addOnLabelPosition": "AddOn-Etikettenposition",
      "fontFamily": "Schriftfamilie",
      "fontStyle": "Schriftstil",
      "fontWeight": "Schriftstärke",
      "fontTextDecoration": "Schriftart TextDecoration",
      "fontTextAlign": "Schriftart TextAlign",
      "fontSize": "Schriftgröße",
      "fileIdentifier": "Dateikennung",
      "structureNumber": "Strukturnummer",
      "structureAppend": "Struktur anhängen",
      "ecc00_140Symbol": "Ecc000_140 Symbolgröße",
      "ecc200EncodingMode": "Ecc200 Endcodierungsmodus",
      "ecc200SymbolSize": "Ecc200 Symbolgröße",
      "eccMode": "ECC-Modus",
      "compact": "Kompakt",
      "columns": "Spalten",
      "rows": "Reihen",
      "groupNo": "GruppenNr",
      "grouping": "Gruppierung",
      "codeSet": "Codesatz",
      "fullASCII": "Vollständiges ASCII",
      "checkDigit": "Prüfziffer",
      "nwRatio": "Breite und schmale Balken-Verhältnis",
      "labelWithStartAndStopCharacter": "Beschriftung mit Start- und Stoppzeichen"
    },
    "columnTypeComboBoxEditorValueTypes": "EditorWertTyp",
    "columnTypeComboBoxItems": "Artikel",
    "columnTypeComboBoxItemProperties": "Artikeleigenschaften",
    "columnTypeComboBoxText": "Text",
    "columnTypeComboBoxValue": "Wert",
    "columnTypeComboBoxAdd": "Hinzufügen",
    "columnTypeComboBoxRemove": "Entfernen",
    "columnTypeComboBoxEditorValueType": {
      "text": "Text",
      "index": "Index",
      "value": "Wert"
    },
    "columnTypeComboBoxEditable": "Editierbar",
    "columnTypeComboBoxItemHeight": "Artikelhöhe",
    "columnTypeUrlLabel": {
      "linkColor": "Linkfarbe",
      "visitedLinkColor": "Farbe besuchter Links"
    }
  },
  "ReportSheet": {
    "ContainsInvalidCells": "Berichtsblatt enthält ungültige Zellen ({0}), bitte prüfen.",
    "toolTipTableName": "Tisch: ",
    "toolTipColumnName": "Spalte: ",
    "toolTipFormula": "Formel: ",
    "toolTipCellType": "Typ: ",
    "listCellType": "Liste",
    "groupCellType": "Gruppe",
    "summaryCellType": "Zusammenfassung",
    "summarySumTip": "(Summe)",
    "summaryAvgTip": "(Durchschnitt)",
    "summaryMaxTip": "(Max)",
    "summaryMinTip": "(Min)",
    "summaryCountTip": "(Zählen)",
    "summaryNoneTip": "(Keiner)",
    "configDataSetting": "Bitte Dateneinstellungen konfigurieren.",
    "Exp_InvalidParameterName": "ungültiger Parametername",
    "wmk1": "5265706f72745368656574",
    "wmk2": "5265706f72745368656574"
  },
  "IO": {
    "EXP_IO": "Ausnahme beim Lesen und Schreiben von Dateien.",
    "EXP_FILE_FORMAT": "Falsches Dateiformat.",
    "GET_PARTIAL_VALUES_ERROR_MSG": "Fehlerdatei",
    "EXP_WRONG_PASSWORD": "Das von Ihnen angegebene Passwort ist nicht korrekt.",
    "EXP_EMPTY_PASSWORD": "Die Excel-Datei kann nicht geöffnet werden, da die Arbeitsmappe kennwortgeschützt ist."
  },
  "Functions": {
    "ABS": {
      "description": "Diese Funktion berechnet den Absolutwert des angegebenen Wertes.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ACCRINT": {
      "description": "Diese Funktion berechnet die aufgelaufenen Zinsen für ein Wertpapier, das periodische Zinsen zahlt.",
      "parameters": [
        {
          "name": "Ausgabe"
        },
        {
          "name": "erstes_interesse"
        },
        {
          "name": "Siedlung"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Par"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "ACCRINTM": {
      "description": "Diese Funktion berechnet die aufgelaufenen Zinsen bei Fälligkeit für ein Wertpapier, das periodische Zinsen zahlt.",
      "parameters": [
        {
          "name": "Ausgabe"
        },
        {
          "name": "Siedlung"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Par"
        },
        {
          "name": "Basis",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "ACOS": {
      "description": "Diese Funktion berechnet den Arkuskosinus, also den Winkel, dessen Kosinus dem angegebenen Wert entspricht.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ACOSH": {
      "description": "Diese Funktion berechnet den inversen hyperbolischen Kosinus des angegebenen Wertes.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ADDRESS": {
      "description": "Diese Funktion verwendet die Zeilen- und Spaltennummern, um eine Zelladresse im Text zu erstellen.",
      "parameters": [
        {
          "name": "Zeilennummer"
        },
        {
          "name": "Spaltennummer"
        },
        {
          "name": "abs_num",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "a1style",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Blatttext",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "AGGREGATE": {
      "description": "Diese Funktion aggregiert eine Liste von Zahlen mithilfe einer angegebenen integrierten Funktion.",
      "parameters": [
        {
          "name": "Funktionsnummer"
        },
        {
          "name": "Optionen"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": "WAHR"
        }
      ]
    },
    "AMORDEGRC": {
      "description": "Diese Funktion gibt die Abschreibung für einen Abrechnungszeitraum unter Berücksichtigung der anteiligen Abschreibung zurück und wendet bei der Berechnung einen Abschreibungskoeffizienten an, der auf der Nutzungsdauer des Anlagevermögens basiert.",
      "parameters": [
        {
          "name": "kosten"
        },
        {
          "name": "Kaufdatum"
        },
        {
          "name": "erster_Zeitraum"
        },
        {
          "name": "retten"
        },
        {
          "name": "Zeitraum"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "AMORLINC": {
      "description": "Mit dieser Funktion können Sie die Abschreibungen für einen Abrechnungszeitraum unter Berücksichtigung anteiliger Abschreibungen berechnen.",
      "parameters": [
        {
          "name": "kosten"
        },
        {
          "name": "Kaufdatum"
        },
        {
          "name": "erster_Zeitraum"
        },
        {
          "name": "retten"
        },
        {
          "name": "Zeitraum"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "AND": {
      "description": "Überprüft, ob alle Argumente True sind, und gibt True zurück, wenn alle Argumente True sind.",
      "parameters": [
        {
          "name": "logisch1"
        },
        {
          "name": "logisch2"
        }
      ]
    },
    "ASIN": {
      "description": "Diese Funktion berechnet den Arkussinus, also den Winkel, dessen Sinus dem angegebenen Wert entspricht.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ASINH": {
      "description": "Diese Funktion berechnet den Arcus Hyperbolicus einer Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ATAN": {
      "description": "Diese Funktion berechnet den Arkustangens, also den Winkel, dessen Tangens dem angegebenen Wert entspricht.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ATAN2": {
      "description": "Diese Funktion berechnet den Arkustangens der angegebenen x- und y-Koordinaten.",
      "parameters": [
        {
          "name": "x_num"
        },
        {
          "name": "j_zahl"
        }
      ]
    },
    "ATANH": {
      "description": "Diese Funktion berechnet den Arcus Hyperbolicus einer Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "AVEDEV": {
      "description": "Diese Funktion berechnet den Durchschnitt der absoluten Abweichungen der angegebenen Werte von ihrem Mittelwert.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "AVERAGE": {
      "description": "Diese Funktion berechnet den Durchschnitt der angegebenen numerischen Werte.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "AVERAGEA": {
      "description": "Diese Funktion berechnet den Durchschnitt der angegebenen Werte, einschließlich Text- oder logischer Werte sowie numerischer Werte.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "AVERAGEIF": {
      "description": "Diese Funktion berechnet den Durchschnitt der angegebenen numerischen Werte, sofern diese die angegebenen Kriterien erfüllen.",
      "parameters": [
        {
          "name": "Reichweite"
        },
        {
          "name": "Kriterien"
        },
        {
          "name": "durchschnittlicher Bereich",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "AVERAGEIFS": {
      "description": "Diese Funktion berechnet den Durchschnitt aller Zellen, die mehrere angegebene Kriterien erfüllen.",
      "parameters": [
        {
          "name": "durchschnittlicher Bereich"
        },
        {
          "name": "Kriterienbereich1"
        },
        {
          "name": "Kriterien1"
        },
        {
          "name": "Kriterienbereich2",
          "repeatable": "WAHR"
        },
        {
          "name": "Kriterien2",
          "repeatable": "WAHR"
        }
      ]
    },
    "BESSELI": {
      "description": "Diese Funktion berechnet die modifizierte Bessel-Funktion erster Art, ausgewertet für rein imaginäre Argumente.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Befehl"
        }
      ]
    },
    "BESSELJ": {
      "description": "Diese Funktion berechnet die Bessel-Funktion der ersten Art.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Befehl"
        }
      ]
    },
    "BESSELK": {
      "description": "Diese Funktion berechnet die modifizierte Bessel-Funktion zweiter Art, ausgewertet für rein imaginäre Argumente.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Befehl"
        }
      ]
    },
    "BESSELY": {
      "description": "Diese Funktion berechnet die Bessel-Funktion zweiter Art.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Befehl"
        }
      ]
    },
    "BETADIST": {
      "description": "Diese Funktion berechnet die kumulative Beta-Verteilungsfunktion.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "untere",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "obere",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "BETAINV": {
      "description": "Diese Funktion berechnet die Inverse der kumulativen Beta-Verteilungsfunktion.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "untere",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "obere",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "BIN2DEC": {
      "description": "Diese Funktion wandelt eine Binärzahl in eine Dezimalzahl um",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "BIN2HEX": {
      "description": "Diese Funktion wandelt eine Binärzahl in eine Hexadezimalzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "BIN2OCT": {
      "description": "Diese Funktion wandelt eine Binärzahl in eine Oktalzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "BINOMDIST": {
      "description": "Diese Funktion berechnet die Wahrscheinlichkeit der Binomialverteilung einzelner Terme.",
      "parameters": [
        {
          "name": "Anzahl_en"
        },
        {
          "name": "Versuche"
        },
        {
          "name": "Wahrscheinlichkeiten"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "CEILING": {
      "description": "Diese Funktion rundet eine Zahl auf das nächste Vielfache eines angegebenen Wertes auf.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Bedeutung"
        }
      ]
    },
    "CHAR": {
      "description": "Diese Funktion gibt das durch eine Zahl angegebene Zeichen zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "CHIDIST": {
      "description": "Diese Funktion berechnet die einseitige Wahrscheinlichkeit der Chi-Quadrat-Verteilung.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "CHIINV": {
      "description": "Diese Funktion berechnet die Umkehrung der einseitigen Wahrscheinlichkeit der Chi-Quadrat-Verteilung.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "CHITEST": {
      "description": "Diese Funktion berechnet den Test auf Unabhängigkeit von der Chi-Quadrat-Verteilung.",
      "parameters": [
        {
          "name": "tatsächliche Reichweite"
        },
        {
          "name": "erwarteter_Bereich"
        }
      ]
    },
    "CHOOSE": {
      "description": "Diese Funktion gibt einen Wert aus einer Werteliste zurück.",
      "parameters": [
        {
          "name": "index_num"
        },
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "CLEAN": {
      "description": "Diese Funktion entfernt alle nicht druckbaren Zeichen aus dem Text.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "CODE": {
      "description": "Diese Funktion gibt einen numerischen Code zurück, der das erste Zeichen in einer Textzeichenfolge darstellt. Der zurückgegebene Code entspricht dem Windows-Zeichensatz (ANSI).",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "COLUMN": {
      "description": "Diese Funktion gibt die Spaltennummer einer Referenz zurück.",
      "parameters": [
        {
          "name": "Referenz"
        }
      ]
    },
    "COLUMNS": {
      "description": "Diese Funktion gibt die Anzahl der Spalten in einem Array zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        }
      ]
    },
    "COMBIN": {
      "description": "Diese Funktion berechnet die Anzahl der möglichen Kombinationen für eine bestimmte Anzahl von Elementen.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "gewählte_Nummer"
        }
      ]
    },
    "COMPLEX": {
      "description": "Diese Funktion wandelt reelle und imaginäre Koeffizienten in eine komplexe Zahl um.",
      "parameters": [
        {
          "name": "reale Zahl"
        },
        {
          "name": "Bildnummer"
        },
        {
          "name": "Suffix"
        }
      ]
    },
    "CONCATENATE": {
      "description": "Diese Funktion fasst mehrere Textzeichenfolgen oder Zahlen zu einer einzigen Textzeichenfolge zusammen.",
      "parameters": [
        {
          "name": "Text 1"
        },
        {
          "name": "text2",
          "repeatable": "WAHR"
        }
      ]
    },
    "CONFIDENCE": {
      "description": "Diese Funktion gibt das Konfidenzintervall für einen Populationsmittelwert zurück.",
      "parameters": [
        {
          "name": "Alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "Größe"
        }
      ]
    },
    "CONVERT": {
      "description": "Diese Funktion konvertiert eine Zahl von einem Maßsystem in das Äquivalent in einem anderen Maßsystem.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "von_Einheit"
        },
        {
          "name": "zu_Einheit"
        }
      ]
    },
    "CORREL": {
      "description": "Diese Funktion gibt den Korrelationskoeffizienten der beiden Datensätze zurück.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        }
      ]
    },
    "COS": {
      "description": "Diese Funktion gibt den Kosinus des angegebenen Winkels zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "COSH": {
      "description": "Diese Funktion gibt den hyperbolischen Kosinus des angegebenen Wertes zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "COUNT": {
      "description": "Diese Funktion gibt die Anzahl der Zellen zurück, die Zahlen enthalten.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "COUNTA": {
      "description": "Diese Funktion gibt die Anzahl der Zellen zurück, die Zahlen, Text oder logische Werte enthalten.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "COUNTBLANK": {
      "description": "Diese Funktion gibt die Anzahl der leeren (oder leeren) Zellen in einem Zellbereich auf einem Blatt zurück.",
      "parameters": [
        {
          "name": "Zellbereich"
        }
      ]
    },
    "COUNTIF": {
      "description": "Diese Funktion gibt die Anzahl der Zellen zurück, die eine bestimmte Bedingung erfüllen",
      "parameters": [
        {
          "name": "Zellbereich"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "COUNTIFS": {
      "description": "Diese Funktion gibt die Anzahl der Zellen zurück, die mehrere Bedingungen erfüllen.",
      "parameters": [
        {
          "name": "Kriterienbereich1"
        },
        {
          "name": "Kriterien1"
        },
        {
          "name": "Kriterienbereich2",
          "repeatable": "WAHR"
        },
        {
          "name": "Kriterien2",
          "repeatable": "WAHR"
        }
      ]
    },
    "COUPDAYBS": {
      "description": "Diese Funktion berechnet die Anzahl der Tage vom Beginn der Couponperiode bis zum Abrechnungstag.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "COUPDAYS": {
      "description": "Diese Funktion gibt die Anzahl der Tage in der Kuponperiode zurück, die das Abrechnungsdatum enthält.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "COUPDAYSNC": {
      "description": "Diese Funktion berechnet die Anzahl der Tage vom Abrechnungsdatum bis zum nächsten Kupontermin.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "COUPNCD": {
      "description": "Diese Funktion gibt eine Datumsnummer des nächsten Kupondatums nach dem Abrechnungsdatum zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "COUPNUM": {
      "description": "Diese Funktion gibt die Anzahl der zwischen dem Abrechnungsdatum und dem Fälligkeitsdatum fälligen Coupons zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "COUPPCD": {
      "description": "Diese Funktion gibt eine Datumsnummer des vorherigen Kupondatums vor dem Abrechnungsdatum zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "COVAR": {
      "description": "Diese Funktion gibt die Kovarianz zurück, also den Durchschnitt der Produkte der Abweichungen für jedes Datenpunktpaar in zwei Zahlensätzen.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        }
      ]
    },
    "CRITBINOM": {
      "description": "Diese Funktion gibt das Kriterium Binomial zurück, also den kleinsten Wert, für den die kumulative Binomialverteilung größer oder gleich einem Kriteriumswert ist.",
      "parameters": [
        {
          "name": "Versuche"
        },
        {
          "name": "Wahrscheinlichkeiten"
        },
        {
          "name": "Alpha"
        }
      ]
    },
    "CUMIPMT": {
      "description": "Diese Funktion gibt die kumulierten Zinsen zurück, die zwischen dem Anfangs- und dem Endzeitraum für ein Darlehen gezahlt wurden.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "Startzeitraum"
        },
        {
          "name": "Ende_Zeitraum"
        },
        {
          "name": "Zahlungsart"
        }
      ]
    },
    "CUMPRINC": {
      "description": "Diese Funktion gibt den kumulierten Kapitalbetrag zurück, der zwischen dem Start- und dem Endzeitraum für ein Darlehen gezahlt wurde.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "Startzeitraum"
        },
        {
          "name": "Ende_Zeitraum"
        },
        {
          "name": "Zahlungsart"
        }
      ]
    },
    "DATE": {
      "description": "Diese Funktion gibt das DateTime-Objekt für ein bestimmtes Datum zurück, angegeben durch Jahr, Monat und Tag.",
      "parameters": [
        {
          "name": "Jahr"
        },
        {
          "name": "Monat"
        },
        {
          "name": "Tag"
        }
      ]
    },
    "DATEDIF": {
      "description": "Diese Funktion gibt die Anzahl der Tage, Monate oder Jahre zwischen zwei Daten zurück.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Enddatum"
        },
        {
          "name": "Einheit"
        }
      ]
    },
    "DATEVALUE": {
      "description": "Diese Funktion gibt ein DateTime-Objekt des angegebenen Datums zurück.",
      "parameters": [
        {
          "name": "Datumstext"
        }
      ]
    },
    "DAVERAGE": {
      "description": "Diese Funktion berechnet den Durchschnitt der Werte in einer Spalte einer Liste oder Datenbank, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DAY": {
      "description": "Diese Funktion gibt die Tagesnummer des Monats (Ganzzahl 1 bis 31) zurück, die dem angegebenen Datum entspricht.",
      "parameters": [
        {
          "name": "Datum"
        }
      ]
    },
    "DAYS360": {
      "description": "Diese Funktion gibt die Anzahl der Tage zwischen zwei Daten basierend auf einem 360-Tage-Jahr zurück.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Enddatum"
        },
        {
          "name": "Verfahren",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "DB": {
      "description": "Diese Funktion berechnet die Abschreibung eines Vermögenswerts für einen angegebenen Zeitraum mit der degressiven Festwertmethode.",
      "parameters": [
        {
          "name": "kosten"
        },
        {
          "name": "retten"
        },
        {
          "name": "Leben"
        },
        {
          "name": "Zeitraum"
        },
        {
          "name": "Monat"
        }
      ]
    },
    "DCOUNT": {
      "description": "Diese Funktion zählt die Zellen, die Zahlen in einer Spalte einer Liste oder Datenbank enthalten, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DCOUNTA": {
      "description": "Diese Funktion zählt die nicht leeren Zellen in einer Spalte einer Liste oder Datenbank, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DDB": {
      "description": "Diese Funktion berechnet die Abschreibung eines Vermögenswerts für einen angegebenen Zeitraum mit der Methode der doppelten degressiven Abschreibung oder einer anderen von Ihnen angegebenen Methode.",
      "parameters": [
        {
          "name": "kosten"
        },
        {
          "name": "retten"
        },
        {
          "name": "Leben"
        },
        {
          "name": "Zeitraum"
        },
        {
          "name": "Faktor"
        }
      ]
    },
    "DEC2BIN": {
      "description": "Diese Funktion wandelt eine Dezimalzahl in eine Binärzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "DEC2HEX": {
      "description": "Diese Funktion wandelt eine Dezimalzahl in eine Hexadezimalzahl um",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "DEC2OCT": {
      "description": "Diese Funktion wandelt eine Dezimalzahl in eine Oktalzahl um",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "DEGREES": {
      "description": "Diese Funktion konvertiert den angegebenen Wert von Radiant in Grad.",
      "parameters": [
        {
          "name": "Winkel"
        }
      ]
    },
    "DELTA": {
      "description": "Diese Funktion ermittelt, ob zwei Werte gleich sind. Gibt 1 zurück, wenn sie gleich sind, andernfalls 0.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2"
        }
      ]
    },
    "DEVSQ": {
      "description": "Diese Funktion berechnet die Summe der Quadrate der Abweichungen von Datenpunkten (oder einer Reihe von Datenpunkten) von ihrem Stichprobenmittelwert.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "DGET": {
      "description": "Diese Funktion extrahiert einen einzelnen Wert aus einer Spalte einer Liste oder Datenbank, der den angegebenen Bedingungen entspricht.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DISC": {
      "description": "Diese Funktion berechnet den Diskontierungssatz für ein Wertpapier.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Preis"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "DMAX": {
      "description": "Diese Funktion gibt die größte Zahl in einer Spalte einer Liste oder Datenbank zurück, die den angegebenen Bedingungen entspricht.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DMIN": {
      "description": "Diese Funktion gibt die kleinste Zahl in einer Spalte einer Liste oder Datenbank zurück, die den angegebenen Bedingungen entspricht.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DOLLAR": {
      "description": "Diese Funktion konvertiert eine Zahl im Währungsformat in Text, wobei die Dezimalstellen auf die angegebene Stelle gerundet werden.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Dezimalstellen",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "DOLLARDE": {
      "description": "Diese Funktion wandelt einen Dollarpreis in Bruchteile in einen Dollarpreis in Dezimalzahlen um.",
      "parameters": [
        {
          "name": "Bruchteil eines Dollars"
        },
        {
          "name": "Fraktion"
        }
      ]
    },
    "DOLLARFR": {
      "description": "Diese Funktion wandelt einen Dollarpreis als Dezimalzahl in einen Dollarpreis als Bruchzahl um.",
      "parameters": [
        {
          "name": "Dezimaldollar"
        },
        {
          "name": "Fraktion"
        }
      ]
    },
    "DPRODUCT": {
      "description": "Diese Funktion multipliziert die Werte in einer Spalte einer Liste oder Datenbank, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DSTDEV": {
      "description": "Diese Funktion schätzt die Standardabweichung einer Population basierend auf einer Stichprobe, indem sie die Zahlen in einer Spalte einer Liste oder Datenbank verwendet, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DSTDEVP": {
      "description": "Diese Funktion berechnet die Standardabweichung einer Population basierend auf der gesamten Population unter Verwendung der Zahlen in einer Spalte einer Liste oder Datenbank, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DSUM": {
      "description": "Diese Funktion addiert die Zahlen in einer Spalte einer Liste oder Datenbank, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DURATION": {
      "description": "Diese Funktion gibt die Macaulay-Dauer für einen angenommenen Nennwert von 100 $ zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Coupon"
        },
        {
          "name": "Ertrag"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "DVAR": {
      "description": "Diese Funktion schätzt die Varianz einer Population basierend auf einer Stichprobe, indem sie die Zahlen in einer Spalte einer Liste oder Datenbank verwendet, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "DVARP": {
      "description": "Diese Funktion berechnet die Varianz einer Population basierend auf der gesamten Population, indem sie die Zahlen in einer Spalte einer Liste oder Datenbank verwendet, die den angegebenen Bedingungen entsprechen.",
      "parameters": [
        {
          "name": "Datenbank"
        },
        {
          "name": "Feld"
        },
        {
          "name": "Kriterien"
        }
      ]
    },
    "EDATE": {
      "description": "Diese Funktion berechnet das Datum, das die angegebene Anzahl von Monaten vor oder nach einem bestimmten Datum liegt.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Monate"
        }
      ]
    },
    "EFFECT": {
      "description": "Diese Funktion berechnet den effektiven Jahreszinssatz bei vorgegebenem nominalen Jahreszinssatz und der Anzahl der Zinsperioden pro Jahr.",
      "parameters": [
        {
          "name": "Nominalzins"
        },
        {
          "name": "npery"
        }
      ]
    },
    "EOMONTH": {
      "description": "Diese Funktion berechnet das Datum für den letzten Tag des Monats (Monatsende), der die angegebene Anzahl von Monaten vor oder nach dem Startdatum liegt.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Monate"
        }
      ]
    },
    "ERF": {
      "description": "Diese Funktion berechnet die zwischen einer Unter- und einer Obergrenze integrierte Fehlerfunktion.",
      "parameters": [
        {
          "name": "untere Grenze"
        },
        {
          "name": "Obergrenze"
        }
      ]
    },
    "ERFC": {
      "description": "Diese Funktion berechnet die komplementäre Fehlerfunktion, integriert zwischen einer Untergrenze und Unendlich.",
      "parameters": [
        {
          "name": "Untergrenze"
        }
      ]
    },
    "ERROR.TYPE": {
      "description": "Diese Funktion gibt eine Zahl zurück, die einem der Fehlerwerte entspricht.",
      "parameters": [
        {
          "name": "Fehlerwert"
        }
      ]
    },
    "EURO": {
      "description": "Diese Funktion gibt den Gegenwert von einem Euro basierend auf dem ISO-Währungscode zurück.",
      "parameters": [
        {
          "name": "Code"
        }
      ]
    },
    "EUROCONVERT": {
      "description": "Diese Funktion konvertiert Währungen von einer Euro-Mitgliedswährung (einschließlich Euro) in eine andere Euro-Mitgliedswährung (einschließlich Euro).",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Quelle"
        },
        {
          "name": "Ziel"
        },
        {
          "name": "volle_Präzision"
        },
        {
          "name": "Triangulationspräzision"
        }
      ]
    },
    "EVEN": {
      "description": "Diese Funktion rundet den angegebenen Wert auf die nächste gerade Ganzzahl auf.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "EXACT": {
      "description": "Diese Funktion gibt \"true\" zurück, wenn die beiden Zeichenfolgen gleich sind, andernfalls \"false\".",
      "parameters": [
        {
          "name": "Text 1"
        },
        {
          "name": "text2"
        }
      ]
    },
    "EXP": {
      "description": "Diese Funktion gibt e hoch dem angegebenen Wert zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "EXPONDIST": {
      "description": "Diese Funktion gibt die Exponentialverteilung oder die Wahrscheinlichkeitsdichte zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Lambda"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "FACT": {
      "description": "Diese Funktion berechnet die Fakultät der angegebenen Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "FACTDOUBLE": {
      "description": "Diese Funktion berechnet die doppelte Fakultät der angegebenen Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "FALSE": {
      "description": "Diese Funktion gibt den Wert für logisch FALSCH zurück."
    },
    "FDIST": {
      "description": "Diese Funktion berechnet die F-Wahrscheinlichkeitsverteilung, um den Grad der Divergenz zwischen zwei Datensätzen zu ermitteln.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Freiheitsgrad1"
        },
        {
          "name": "Freiheitsgrad2"
        }
      ]
    },
    "FIND": {
      "description": "Diese Funktion findet einen Textwert innerhalb eines anderen und gibt die Position des Textwerts im gesuchten Text zurück.",
      "parameters": [
        {
          "name": "Text finden"
        },
        {
          "name": "innerhalb_text"
        },
        {
          "name": "Startnummer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "FINV": {
      "description": "Diese Funktion gibt die Umkehrung der F-Wahrscheinlichkeitsverteilung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad1"
        },
        {
          "name": "Freiheitsgrad2"
        }
      ]
    },
    "FISHER": {
      "description": "Diese Funktion gibt die Fisher-Transformation für einen angegebenen Wert zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "FISHERINV": {
      "description": "Diese Funktion gibt die Umkehrung der Fisher-Transformation für einen angegebenen Wert zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "FIXED": {
      "description": "Diese Funktion rundet eine Zahl auf die angegebene Anzahl Dezimalstellen, formatiert die Zahl im Dezimalformat mit einem Punkt und Kommas (sofern angegeben) und gibt das Ergebnis als Text zurück.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Dezimalstellen",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "keine_Kommas",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "FLOOR": {
      "description": "Diese Funktion rundet eine Zahl auf das nächste Vielfache eines angegebenen Wertes ab.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Bedeutung"
        }
      ]
    },
    "FORECAST": {
      "description": "Diese Funktion berechnet einen zukünftigen Wert anhand vorhandener Werte.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Juhuu"
        },
        {
          "name": "Xarray"
        }
      ]
    },
    "FREQUENCY": {
      "description": "Diese Funktion berechnet, wie oft Werte innerhalb eines Wertebereichs vorkommen. Diese Funktion gibt eine vertikale Zahlenreihe zurück.",
      "parameters": [
        {
          "name": "Datenarray"
        },
        {
          "name": "bins_array"
        }
      ]
    },
    "FTEST": {
      "description": "Diese Funktion gibt das Ergebnis eines F-Tests zurück, der die einseitige Wahrscheinlichkeit zurückgibt, dass die Varianzen in zwei Arrays nicht signifikant unterschiedlich sind.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        }
      ]
    },
    "FV": {
      "description": "Diese Funktion gibt den zukünftigen Wert einer Investition basierend auf einem Barwert, regelmäßigen Zahlungen und einem angegebenen Zinssatz zurück.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "Nummer"
        },
        {
          "name": "Zahlung"
        },
        {
          "name": "pval"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "FVSCHEDULE": {
      "description": "Diese Funktion gibt den zukünftigen Wert eines Anfangskapitals nach Anwendung einer Reihe von Zinseszinssätzen zurück. Berechnen Sie den zukünftigen Wert einer Investition mit einem variablen oder anpassbaren Zinssatz.",
      "parameters": [
        {
          "name": "Rektor"
        },
        {
          "name": "Zeitplan"
        }
      ]
    },
    "GAMMADIST": {
      "description": "Diese Funktion gibt die Gammaverteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "GAMMAINV": {
      "description": "Diese Funktion gibt die Umkehrung der kumulativen Gammaverteilung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        }
      ]
    },
    "GAMMALN": {
      "description": "Diese Funktion gibt den natürlichen Logarithmus der Gammafunktion G(x) zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "GCD": {
      "description": "Diese Funktion gibt den größten gemeinsamen Teiler zweier Zahlen zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2"
        }
      ]
    },
    "GEOMEAN": {
      "description": "Diese Funktion gibt den geometrischen Mittelwert einer Reihe positiver Daten zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "GESTEP": {
      "description": "Diese Funktion, größer oder gleich Schritt, gibt einen Hinweis zurück, ob eine Zahl einem Schwellenwert entspricht.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Schritt"
        }
      ]
    },
    "GROWTH": {
      "description": "Diese Funktion berechnet das prognostizierte exponentielle Wachstum. Diese Funktion gibt die Y-Werte für eine Reihe neuer X-Werte zurück, die unter Verwendung vorhandener X- und Y-Werte angegeben werden.",
      "parameters": [
        {
          "name": "j"
        },
        {
          "name": "X"
        },
        {
          "name": "neux"
        },
        {
          "name": "Konstante"
        }
      ]
    },
    "HARMEAN": {
      "description": "Diese Funktion gibt den harmonischen Mittelwert eines Datensatzes zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "HEX2BIN": {
      "description": "Diese Funktion wandelt eine Hexadezimalzahl in eine Binärzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "HEX2DEC": {
      "description": "Diese Funktion wandelt eine Hexadezimalzahl in eine Dezimalzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "HEX2OCT": {
      "description": "Diese Funktion wandelt eine Hexadezimalzahl in eine Oktalzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "HLOOKUP": {
      "description": "Diese Funktion sucht nach einem Wert in der obersten Zeile und gibt dann aus einer angegebenen Zeile einen Wert in derselben Spalte zurück.",
      "parameters": [
        {
          "name": "Suchwert"
        },
        {
          "name": "Tabellen-Array"
        },
        {
          "name": "Zeilenindexnummer"
        },
        {
          "name": "Bereichssuche",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "WAHR",
              "description": "Ungefähre Übereinstimmung"
            },
            {
              "value": "FALSCH",
              "description": "Genaue Übereinstimmung"
            }
          ]
        }
      ]
    },
    "HOUR": {
      "description": "Diese Funktion gibt die Stunde zurück, die einer angegebenen Zeit entspricht.",
      "parameters": [
        {
          "name": "Zeit"
        }
      ]
    },
    "HYPGEOMDIST": {
      "description": "Diese Funktion gibt die hypergeometrische Verteilung zurück.",
      "parameters": [
        {
          "name": "Proben"
        },
        {
          "name": "Anzahl_Beispiel"
        },
        {
          "name": "Bevölkerung"
        },
        {
          "name": "Nummer_Pop"
        }
      ]
    },
    "IF": {
      "description": "Diese Funktion führt einen Vergleich durch und gibt basierend auf diesem Vergleich einen von zwei bereitgestellten Werten zurück.",
      "parameters": [
        {
          "name": "logischer_Test"
        },
        {
          "name": "Wert_wenn_wahr"
        },
        {
          "name": "Wert_wenn_falsch"
        }
      ]
    },
    "IFERROR": {
      "description": "Diese Funktion wertet eine Formel aus und gibt im Fehlerfall den von Ihnen angegebenen Wert bzw. das Formelergebnis zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Wert_bei_Fehler"
        }
      ]
    },
    "IMABS": {
      "description": "Diese Funktion gibt den Absolutwert oder Modul einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMAGINARY": {
      "description": "Diese Funktion gibt den Imaginärkoeffizienten einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMARGUMENT": {
      "description": "Diese Funktion gibt das Argument Theta zurück, einen in Radiant ausgedrückten Winkel.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMCONJUGATE": {
      "description": "Diese Funktion gibt die komplex Konjugierte einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMCOS": {
      "description": "Diese Funktion gibt den Kosinus einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMDIV": {
      "description": "Diese Funktion gibt den Quotienten zweier komplexer Zahlen zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        },
        {
          "name": "Komplexdenom"
        }
      ]
    },
    "IMEXP": {
      "description": "Diese Funktion gibt die Exponentialfunktion einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMLN": {
      "description": "Diese Funktion gibt den natürlichen Logarithmus einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMLOG2": {
      "description": "Diese Funktion gibt den Logarithmus zur Basis 2 einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMLOG10": {
      "description": "Diese Funktion gibt den dekadischen Logarithmus einer komplexen Zahl zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMPOWER": {
      "description": "Diese Funktion gibt eine komplexe Zahl potenziert mit einer Potenz zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        },
        {
          "name": "powernum"
        }
      ]
    },
    "IMPRODUCT": {
      "description": "Diese Funktion gibt das Produkt von bis zu 29 komplexen Zahlen im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnummer1"
        },
        {
          "name": "Komplexnummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "IMREAL": {
      "description": "Diese Funktion gibt den reellen Koeffizienten einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMSIN": {
      "description": "Diese Funktion gibt den Sinus einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMSQRT": {
      "description": "Diese Funktion gibt die Quadratwurzel einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMSUB": {
      "description": "Diese Funktion gibt die Differenz zweier komplexer Zahlen im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnummer1"
        },
        {
          "name": "Komplexnummer2"
        }
      ]
    },
    "IMSUM": {
      "description": "Diese Funktion gibt die Summe zweier oder mehrerer komplexer Zahlen im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnummer1"
        },
        {
          "name": "Komplexnummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "INDEX": {
      "description": "Diese Funktion gibt einen Wert oder den Verweis auf einen Wert innerhalb eines Arrays oder Bereichs zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Zeilennummer"
        },
        {
          "name": "Spaltennummer"
        },
        {
          "name": "Bereichsnummer"
        }
      ]
    },
    "INDIRECT": {
      "description": "Diese Funktion gibt die durch eine Textzeichenfolge angegebene Referenz zurück. Referenzen werden sofort ausgewertet, um ihren Inhalt anzuzeigen.",
      "parameters": [
        {
          "name": "Referenztext"
        },
        {
          "name": "a1_stil",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "INT": {
      "description": "Diese Funktion rundet eine angegebene Zahl auf die nächste Ganzzahl ab.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "INTERCEPT": {
      "description": "Diese Funktion gibt die Koordinaten eines Punktes zurück, an dem eine Linie die y-Achse schneidet, indem sie vorhandene x- und y-Werte verwendet.",
      "parameters": [
        {
          "name": "abhängig"
        },
        {
          "name": "unabhängig"
        }
      ]
    },
    "INTRATE": {
      "description": "Diese Funktion berechnet den Zinssatz für ein vollständig investiertes Wertpapier.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Investition"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "IPMT": {
      "description": "Diese Funktion berechnet die Zinszahlung für ein Darlehen.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "pro"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "IRR": {
      "description": "Diese Funktion gibt den internen Zinsfuß für eine Reihe von Cashflows zurück, die durch die Zahlen in einem Array dargestellt werden.",
      "parameters": [
        {
          "name": "Arrayvals"
        },
        {
          "name": "schätzen"
        }
      ]
    },
    "ISBLANK": {
      "description": "Diese Funktion prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle leer ist.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISERR": {
      "description": "Die Funktion ‚Ist ein anderer Fehler als ‚Nicht verfügbar‘‘ prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle einen anderen Fehler als ‚Nicht verfügbar‘ (#N/A) aufweist.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISERROR": {
      "description": "Die Funktion ‚Ist ein Fehler jeglicher Art‘ prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle einen Fehler jeglicher Art aufweist.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISEVEN": {
      "description": "Diese Funktion, Ist Zahl gerade, prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle gerade ist.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISLOGICAL": {
      "description": "Diese Funktion prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle ein logischer (Boolescher) Wert ist.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISNA": {
      "description": "Die Funktion ‚Ist nicht verfügbar‘ prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle den Fehlerwert ‚Nicht verfügbar‘ (#N/A) hat.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISNONTEXT": {
      "description": "Diese Funktion prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle einen anderen Datentyp als Text hat.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISNUMBER": {
      "description": "Diese Funktion prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle numerische Daten enthält.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISODD": {
      "description": "Die Funktion ‚Ist Zahl ungerade‘ prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle numerische Daten enthält.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISPMT": {
      "description": "Mit dieser Funktion können Sie die Zinsen berechnen, die während einer bestimmten Laufzeit einer Geldanlage gezahlt werden.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "pro"
        },
        {
          "name": "nper"
        },
        {
          "name": "pv"
        }
      ]
    },
    "ISREF": {
      "description": "Diese Funktion, Ist Referenz, prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle eine Referenz auf eine andere Zelle ist.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "ISTEXT": {
      "description": "Diese Funktion prüft, ob ein Wert, ein Ausdruck oder der Inhalt einer referenzierten Zelle Textdaten enthält.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "KURT": {
      "description": "Diese Funktion gibt die Kurtosis eines Datensatzes zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2"
        },
        {
          "name": "Nummer 3"
        },
        {
          "name": "Nummer 4",
          "repeatable": "WAHR"
        }
      ]
    },
    "LARGE": {
      "description": "Diese Funktion gibt den n-größten Wert in einem Datensatz zurück, wobei n angegeben ist.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "N"
        }
      ]
    },
    "LCM": {
      "description": "Diese Funktion gibt das kleinste gemeinsame Vielfache zweier Zahlen zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2"
        }
      ]
    },
    "LEFT": {
      "description": "Diese Funktion gibt die angegebenen äußersten linken Zeichen aus einem Textwert zurück, und zwar basierend auf der Anzahl der von Ihnen angegebenen Zeichen.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Anzahl Zeichen"
        }
      ]
    },
    "LEN": {
      "description": "Diese Funktion gibt die Länge der Anzahl der Zeichen in einer Textzeichenfolge zurück.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "LINEST": {
      "description": "Diese Funktion berechnet die Statistik für eine Zeile.",
      "parameters": [
        {
          "name": "j"
        },
        {
          "name": "X"
        },
        {
          "name": "Konstante"
        },
        {
          "name": "Statistiken"
        }
      ]
    },
    "LN": {
      "description": "Diese Funktion gibt den natürlichen Logarithmus der angegebenen Zahl zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "LOG": {
      "description": "Diese Funktion gibt den Logarithmus zur Basis Y einer Zahl X zurück.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Base"
        }
      ]
    },
    "LOG10": {
      "description": "Diese Funktion gibt den Logarithmus zur Basis 10 der angegebenen Zahl zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "LOGEST": {
      "description": "Diese Funktion berechnet eine Exponentialkurve, die zu den Daten passt, und gibt ein Wertearray zurück, das die Kurve beschreibt.",
      "parameters": [
        {
          "name": "j"
        },
        {
          "name": "X"
        },
        {
          "name": "Konstante"
        },
        {
          "name": "Statistiken"
        }
      ]
    },
    "LOGINV": {
      "description": "Diese Funktion gibt die Umkehrung der lognormalen kumulativen Verteilungsfunktion von x zurück, wobei LN(x) normal verteilt ist mit dem angegebenen Mittelwert und der angegebenen Standardabweichung.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "LOGNORMDIST": {
      "description": "Diese Funktion gibt die kumulative natürliche Log-Normalverteilung von x zurück, wobei LN(x) normalverteilt ist mit dem angegebenen Mittelwert und der angegebenen Standardabweichung. Analysieren Sie mit dieser Funktion logarithmisch transformierte Daten.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "LOOKUP": {
      "description": "Diese Funktion sucht nach einem Wert und gibt einen Wert vom gleichen Ort in einem zweiten Bereich zurück.",
      "parameters": [
        {
          "name": "Suchwert"
        },
        {
          "name": "Nachschlagevektor"
        },
        {
          "name": "Ergebnisvektor"
        }
      ]
    },
    "LOWER": {
      "description": "Diese Funktion wandelt Text in Kleinbuchstaben um.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "MATCH": {
      "description": "Diese Funktion gibt die relative Position eines angegebenen Elements in einem Bereich zurück.",
      "parameters": [
        {
          "name": "Suchwert"
        },
        {
          "name": "Sucharray"
        },
        {
          "name": "Übereinstimmungstyp"
        }
      ]
    },
    "XMATCH": {
      "description": "Diese Funktion gibt die relative Position eines Elements in einem Array zurück. Standardmäßig ist eine genaue Übereinstimmung erforderlich.",
      "parameters": [
        {
          "name": "Suchwert"
        },
        {
          "name": "Sucharray"
        },
        {
          "name": "Match-Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "0",
              "description": "Genaue Übereinstimmung (Standard)"
            },
            {
              "value": "-1",
              "description": "Genaue Übereinstimmung oder nächstkleineres Element"
            },
            {
              "value": "1",
              "description": "Genaue Übereinstimmung oder nächstgrößeres Element"
            },
            {
              "value": "2",
              "description": "Eine Platzhalterübereinstimmung, bei der *, ? und ~ eine besondere Bedeutung haben."
            }
          ]
        },
        {
          "name": "Suchmodus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "1",
              "description": "Suche von Anfang bis Ende (Standard)"
            },
            {
              "value": "-1",
              "description": "Suche von vorn nach hinten (umgekehrte Suche)"
            },
            {
              "value": "2",
              "description": "Führen Sie eine binäre Suche durch, die darauf basiert, dass lookup_array in aufsteigender Reihenfolge sortiert ist. Wenn es nicht sortiert ist, werden ungültige Ergebnisse zurückgegeben."
            },
            {
              "value": "-2",
              "description": "Führen Sie eine binäre Suche durch, die darauf basiert, dass das Lookup-Array in absteigender Reihenfolge sortiert ist. Wenn es nicht sortiert ist, werden ungültige Ergebnisse zurückgegeben."
            }
          ]
        }
      ]
    },
    "XLOOKUP": {
      "description": "Diese Funktion durchsucht einen Bereich oder ein Array nach einer Übereinstimmung und gibt das entsprechende Element aus einem zweiten Bereich oder Array zurück. Standardmäßig wird eine genaue Übereinstimmung verwendet.",
      "parameters": [
        {
          "name": "Suchwert"
        },
        {
          "name": "Sucharray"
        },
        {
          "name": "Rückgabearray"
        },
        {
          "name": "wenn_nicht_gefunden",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Match-Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "0",
              "description": "Genaue Übereinstimmung (Standard)"
            },
            {
              "value": "-1",
              "description": "Genaue Übereinstimmung oder nächstkleineres Element"
            },
            {
              "value": "1",
              "description": "Genaue Übereinstimmung oder nächstgrößeres Element"
            },
            {
              "value": "2",
              "description": "Eine Platzhalterübereinstimmung, bei der *, ? und ~ eine besondere Bedeutung haben."
            }
          ]
        },
        {
          "name": "Suchmodus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "1",
              "description": "Suche von Anfang bis Ende (Standard)"
            },
            {
              "value": "-1",
              "description": "Suche von vorn nach hinten (umgekehrte Suche)"
            },
            {
              "value": "2",
              "description": "Führen Sie eine binäre Suche durch, die darauf basiert, dass lookup_array in aufsteigender Reihenfolge sortiert ist. Wenn es nicht sortiert ist, werden ungültige Ergebnisse zurückgegeben."
            },
            {
              "value": "-2",
              "description": "Führen Sie eine binäre Suche durch, die darauf basiert, dass das Lookup-Array in absteigender Reihenfolge sortiert ist. Wenn es nicht sortiert ist, werden ungültige Ergebnisse zurückgegeben."
            }
          ]
        }
      ]
    },
    "MAX": {
      "description": "Diese Funktion gibt den Maximalwert, den größten Wert, aller Werte in den Argumenten zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "MAXA": {
      "description": "Diese Funktion gibt den größten Wert in einer Liste von Argumenten zurück, einschließlich Text und logischen Werten.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "MDETERM": {
      "description": "Diese Funktion gibt die Matrixdeterminante eines Arrays zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        }
      ]
    },
    "MDURATION": {
      "description": "Diese Funktion berechnet die modifizierte Macaulay-Duration eines Wertpapiers mit einem angenommenen Nennwert von 100 US-Dollar.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Coupon"
        },
        {
          "name": "Ertrag"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "MEDIAN": {
      "description": "Diese Funktion gibt den Median zurück, also die Zahl in der Mitte der bereitgestellten Zahlenmenge. Das heißt, die Hälfte der Zahlen hat Werte, die größer als der Median sind, und die andere Hälfte hat Werte, die kleiner als der Median sind.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "MID": {
      "description": "Diese Funktion gibt die angeforderte Anzahl von Zeichen aus einer Textzeichenfolge zurück, beginnend an der von Ihnen angegebenen Position und basierend auf der von Ihnen angegebenen Zeichenanzahl.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Startnummer"
        },
        {
          "name": "Anzahl Zeichen"
        }
      ]
    },
    "MIN": {
      "description": "Diese Funktion gibt den Minimalwert, den kleinsten Wert, aller Werte in den Argumenten zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "MINA": {
      "description": "Diese Funktion gibt den Mindestwert in einer Liste von Argumenten zurück, einschließlich Text und logischen Werten.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "MINUTE": {
      "description": "Diese Funktion gibt die Minute zurück, die einer angegebenen Zeit entspricht.",
      "parameters": [
        {
          "name": "Zeit"
        }
      ]
    },
    "MINVERSE": {
      "description": "Diese Funktion gibt die inverse Matrix für die in einem Array gespeicherte Matrix zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        }
      ]
    },
    "MIRR": {
      "description": "Diese Funktion gibt den modifizierten internen Zinsfuß für eine Reihe periodischer Cashflows zurück.",
      "parameters": [
        {
          "name": "Werte"
        },
        {
          "name": "Finanzierungszins"
        },
        {
          "name": "Reinvestitionsrate"
        }
      ]
    },
    "MMULT": {
      "description": "Diese Funktion gibt das Matrixprodukt für zwei Arrays zurück.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        }
      ]
    },
    "MOD": {
      "description": "Diese Funktion gibt den Rest einer Divisionsoperation zurück.",
      "parameters": [
        {
          "name": "Dividende"
        },
        {
          "name": "Divisor"
        }
      ]
    },
    "MODE": {
      "description": "Diese Funktion gibt den am häufigsten vorkommenden Wert in einem Datensatz zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "MONTH": {
      "description": "Diese Funktion gibt den Monat zurück, der dem angegebenen Datumswert entspricht.",
      "parameters": [
        {
          "name": "Datum"
        }
      ]
    },
    "MROUND": {
      "description": "Diese Funktion gibt eine auf das gewünschte Vielfache gerundete Zahl zurück.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "mehrere"
        }
      ]
    },
    "MULTINOMIAL": {
      "description": "Diese Funktion berechnet das Verhältnis der Fakultät einer Wertesumme zum Produkt der Fakultäten.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "MUNIT": {
      "description": "Die Funktion gibt die Einheitenmatrix für die angegebene Dimension zurück.",
      "parameters": [
        {
          "name": "Dimension"
        }
      ]
    },
    "N": {
      "description": "Diese Funktion gibt einen in eine Zahl umgewandelten Wert zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "NA": {
      "description": "Diese Funktion gibt den Fehlerwert #N/A zurück, der nicht verfügbar bedeutet."
    },
    "SHEET": {
      "description": "Gibt die Blattnummer des Referenzblattes zurück.",
      "parameters": [
        {
          "name": "Wert",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SHEETS": {
      "description": "Gibt die Anzahl der Blätter in einer Referenz zurück.",
      "parameters": [
        {
          "name": "Referenz",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "NEGBINOMDIST": {
      "description": "Diese Funktion gibt die negative Binomialverteilung zurück.",
      "parameters": [
        {
          "name": "Nummer_f"
        },
        {
          "name": "Anzahl_en"
        },
        {
          "name": "Wahrscheinlichkeiten"
        }
      ]
    },
    "NETWORKDAYS": {
      "description": "Diese Funktion gibt die Gesamtzahl der vollständigen Arbeitstage zwischen dem Start- und Enddatum zurück.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Enddatum"
        },
        {
          "name": "Feiertage",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "NOMINAL": {
      "description": "Diese Funktion gibt den nominalen Jahreszinssatz für einen gegebenen effektiven Zinssatz und eine gegebene Anzahl von Zinsperioden pro Jahr zurück.",
      "parameters": [
        {
          "name": "Effektrate"
        },
        {
          "name": "npery"
        }
      ]
    },
    "NORMDIST": {
      "description": "Diese Funktion gibt die normale kumulative Verteilung für den angegebenen Mittelwert und die angegebene Standardabweichung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "NORMINV": {
      "description": "Diese Funktion gibt die Umkehrung der normalen kumulativen Verteilung für den gegebenen Mittelwert und die gegebene Standardabweichung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORMSDIST": {
      "description": "Diese Funktion gibt die standardmäßige normale kumulative Verteilungsfunktion zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "NORMSINV": {
      "description": "Diese Funktion gibt die Umkehrung der standardmäßigen normalen kumulativen Verteilung zurück. Die Verteilung hat einen Mittelwert von Null und eine Standardabweichung von Eins.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        }
      ]
    },
    "NOT": {
      "description": "Diese Funktion kehrt den logischen Wert ihres Arguments um.",
      "parameters": [
        {
          "name": "logisch"
        }
      ]
    },
    "NOW": {
      "description": "Diese Funktion gibt das aktuelle Datum und die Uhrzeit zurück."
    },
    "NPER": {
      "description": "Diese Funktion gibt die Anzahl der Perioden für eine Investition basierend auf einem Barwert, einem zukünftigen Wert, periodischen Zahlungen und einem angegebenen Zinssatz zurück.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "Zahlung"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "NPV": {
      "description": "Diese Funktion berechnet den Nettogegenwartswert einer Investition unter Verwendung eines Abzinsungssatzes und einer Reihe zukünftiger Zahlungen und Einnahmen.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "OBJECT": {
      "description": "Diese Funktion konvertiert die Eigenschafts-/Ausdruckssequenz in ein Objekt.",
      "parameters": [
        {
          "name": "Eigenschaft1",
          "repeatable": "WAHR"
        },
        {
          "name": "Ausdruck1",
          "repeatable": "WAHR"
        }
      ]
    },
    "OCT2BIN": {
      "description": "Diese Funktion wandelt eine Oktalzahl in eine Binärzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "OCT2DEC": {
      "description": "Diese Funktion wandelt eine Oktalzahl in eine Dezimalzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "OCT2HEX": {
      "description": "Diese Funktion wandelt eine Oktalzahl in eine Hexadezimalzahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Orte"
        }
      ]
    },
    "ODD": {
      "description": "Diese Funktion rundet den angegebenen Wert auf die nächste ungerade Ganzzahl auf.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ODDFPRICE": {
      "description": "Diese Funktion berechnet den Preis pro 100 $ Nennwert eines Wertpapiers mit einer ungeraden ersten Periode.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Ausgabe"
        },
        {
          "name": "erster_Gutschein"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Ertrag"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "ODDFYIELD": {
      "description": "Diese Funktion berechnet die Rendite eines Wertpapiers mit ungerader erster Periode.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Ausgabe"
        },
        {
          "name": "erster_Gutschein"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Preis"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "ODDLPRICE": {
      "description": "Diese Funktion berechnet den Preis pro 100 US-Dollar Nennwert eines Wertpapiers mit einer ungeraden letzten Kuponperiode.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "letztes_interesse"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Ertrag"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "ODDLYIELD": {
      "description": "Diese Funktion berechnet die Rendite eines Wertpapiers mit ungerader letzter Periode.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "letztes_interesse"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Preis"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "OFFSET": {
      "description": "Diese Funktion gibt einen Verweis auf einen Bereich zurück. Der Bereich ist eine angegebene Anzahl von Zeilen und Spalten aus einer Zelle oder einem Zellbereich. Die Funktion gibt eine einzelne Zelle oder einen Zellbereich zurück.",
      "parameters": [
        {
          "name": "Referenz"
        },
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten"
        },
        {
          "name": "Höhe",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Breite",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "OR": {
      "description": "Diese Funktion berechnet ein logisches ODER. Sie gibt WAHR zurück, wenn eines ihrer Argumente wahr ist; andernfalls gibt sie FALSCH zurück, wenn alle Argumente falsch sind.",
      "parameters": [
        {
          "name": "logisch1"
        },
        {
          "name": "logisch2",
          "repeatable": "WAHR"
        }
      ]
    },
    "PEARSON": {
      "description": "Diese Funktion gibt den Pearson-Produkt-Moment-Korrelationskoeffizienten zurück, einen dimensionslosen Index zwischen -1,0 und einschließlich 1,0, der die lineare Beziehung zweier Datensätze angibt.",
      "parameters": [
        {
          "name": "array_ind"
        },
        {
          "name": "Array_Dep"
        }
      ]
    },
    "PERCENTILE": {
      "description": "Diese Funktion gibt das n-te Perzentil der Werte in einem Bereich zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "N"
        }
      ]
    },
    "PERCENTRANK": {
      "description": "Diese Funktion gibt den Rang eines Wertes in einem Datensatz als Prozentsatz des Datensatzes zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "X"
        },
        {
          "name": "Bedeutung"
        }
      ]
    },
    "PERMUT": {
      "description": "Diese Funktion gibt die Anzahl der möglichen Permutationen für eine angegebene Anzahl von Elementen zurück.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "gewählte_Nummer"
        }
      ]
    },
    "PI": {
      "description": "Diese Funktion gibt PI als 3,1415926536 zurück."
    },
    "PMT": {
      "description": "Diese Funktion gibt den Zahlungsbetrag für ein Darlehen bei aktuellem Wert, festgelegtem Zinssatz und Anzahl der Laufzeiten zurück.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "POISSON": {
      "description": "Diese Funktion gibt die Poisson-Verteilung zurück.",
      "parameters": [
        {
          "name": "nereignisse"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "POWER": {
      "description": "Diese Funktion potenziert die angegebene Zahl mit der angegebenen Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Leistung"
        }
      ]
    },
    "PPMT": {
      "description": "Diese Funktion gibt den Tilgungsbetrag eines Darlehens bei aktuellem Wert, festgelegtem Zinssatz und Anzahl der Laufzeiten zurück.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "pro"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "PRICE": {
      "description": "Diese Funktion berechnet den Preis pro 100 US-Dollar Nennwert eines Wertpapiers mit periodischem Zinssatz.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Ertrag"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "PRICEDISC": {
      "description": "Diese Funktion gibt den Preis pro 100 $ Nennwert eines diskontierten Wertpapiers zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Rabatt"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "PRICEMAT": {
      "description": "Diese Funktion gibt den Preis bei Fälligkeit pro 100 US-Dollar Nennwert eines verzinslichen Wertpapiers zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Ausgabe"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Ertrag"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "PROB": {
      "description": "Diese Funktion gibt die Wahrscheinlichkeit zurück, dass Werte in einem Bereich zwischen zwei Grenzen liegen.",
      "parameters": [
        {
          "name": "x_Bereich"
        },
        {
          "name": "wahrscheinlicher_Bereich"
        },
        {
          "name": "untere Grenze"
        },
        {
          "name": "Obergrenze"
        }
      ]
    },
    "PRODUCT": {
      "description": "Diese Funktion multipliziert alle Argumente und gibt das Produkt zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "PROPER": {
      "description": "Diese Funktion schreibt den ersten Buchstaben jedes Wortes einer Textzeichenfolge groß.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "PROPERTY": {
      "description": "Diese Funktion gibt den Wert des Eigenschaftspfads im Objekt zurück.",
      "parameters": [
        {
          "name": "Datenausdruck"
        },
        {
          "name": "Eigenschaftspfad"
        }
      ]
    },
    "PV": {
      "description": "Diese Funktion gibt den Barwert einer Investition basierend auf dem Zinssatz, der Anzahl und Höhe der regelmäßigen Zahlungen und dem zukünftigen Wert zurück. Der Barwert ist der Gesamtbetrag, den eine Reihe zukünftiger Zahlungen jetzt wert ist.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "Nummer"
        },
        {
          "name": "Zahlung"
        },
        {
          "name": "fval"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "QUARTILE": {
      "description": "Diese Funktion gibt zurück, in welchem ​​Quartil (welches Viertel oder 25 Prozent) eines Datensatzes sich ein Wert befindet.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Quart"
        }
      ]
    },
    "QUOTIENT": {
      "description": "Diese Funktion gibt den ganzzahligen Teil einer Division zurück. Verwenden Sie sie, um den Rest einer Division zu ignorieren.",
      "parameters": [
        {
          "name": "Zähler"
        },
        {
          "name": "Nenner"
        }
      ]
    },
    "RADIANS": {
      "description": "Diese Funktion wandelt die angegebene Zahl von Grad in Bogenmaß um.",
      "parameters": [
        {
          "name": "Winkel"
        }
      ]
    },
    "RAND": {
      "description": "Diese Funktion gibt eine gleichmäßig verteilte Zufallszahl zwischen 0 und 1 zurück."
    },
    "RANDBETWEEN": {
      "description": "Diese Funktion gibt eine Zufallszahl zwischen den von Ihnen angegebenen Zahlen zurück.",
      "parameters": [
        {
          "name": "unten"
        },
        {
          "name": "Spitze"
        }
      ]
    },
    "RANGEBLOCKSPARKLINE": {
      "description": "Diese Funktion gibt eine Bereichsvorlage zurück.",
      "parameters": [
        {
          "name": "Vorlagenbereich"
        },
        {
          "name": "Datenausdruck"
        }
      ]
    },
    "RANK": {
      "description": "Diese Funktion gibt den Rang einer Zahl in einer Zahlenmenge zurück. Wenn Sie die Menge sortieren würden, wäre der Rang der Zahl ihre Position in der Liste.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Schiedsrichter"
        },
        {
          "name": "Befehl",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "RATE": {
      "description": "Diese Funktion gibt den Zinssatz pro Periode einer Annuität zurück.",
      "parameters": [
        {
          "name": "nper"
        },
        {
          "name": "pmt"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        },
        {
          "name": "Typ"
        },
        {
          "name": "erraten"
        }
      ]
    },
    "RECEIVED": {
      "description": "Diese Funktion gibt den bei Fälligkeit erhaltenen Betrag für ein vollständig investiertes Wertpapier zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Investition"
        },
        {
          "name": "Rabatt"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "REPLACE": {
      "description": "Diese Funktion ersetzt einen Teil einer Textzeichenfolge durch eine andere Textzeichenfolge, basierend auf der von Ihnen angegebenen Zeichenanzahl.",
      "parameters": [
        {
          "name": "alter_text"
        },
        {
          "name": "Startnummer"
        },
        {
          "name": "Anzahl Zeichen"
        },
        {
          "name": "neuer_Text"
        }
      ]
    },
    "REPT": {
      "description": "Diese Funktion wiederholt Text eine bestimmte Anzahl Mal.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Anzahl_Mal"
        }
      ]
    },
    "RIGHT": {
      "description": "Diese Funktion gibt die angegebenen Zeichen ganz rechts aus einem Textwert zurück, und zwar basierend auf der Anzahl der von Ihnen angegebenen Zeichen.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Anzahl Zeichen"
        }
      ]
    },
    "ROMAN": {
      "description": "Diese Funktion wandelt eine arabische Zahl in ein Textäquivalent einer römischen Zahl um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "bilden"
        }
      ]
    },
    "ROUND": {
      "description": "Diese Funktion rundet den angegebenen Wert unter Verwendung der angegebenen Anzahl von Dezimalstellen auf die nächste Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Anzahl_Ziffern"
        }
      ]
    },
    "ROUNDDOWN": {
      "description": "Diese Funktion rundet die angegebene Zahl unter Verwendung der angegebenen Anzahl Dezimalstellen auf die nächste Zahl ab.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Anzahl_Ziffern"
        }
      ]
    },
    "ROUNDUP": {
      "description": "Diese Funktion rundet die angegebene Zahl auf die nächste Zahl auf und verwendet dabei die angegebene Anzahl Dezimalstellen.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Anzahl_Ziffern"
        }
      ]
    },
    "ROW": {
      "description": "Diese Funktion gibt die Nummer einer Zeile aus einer Referenz zurück.",
      "parameters": [
        {
          "name": "Referenz"
        }
      ]
    },
    "ROWS": {
      "description": "Diese Funktion gibt die Anzahl der Zeilen in einem Array zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        }
      ]
    },
    "RSQ": {
      "description": "Diese Funktion gibt das Quadrat des Pearson-Produkt-Moment-Korrelationskoeffizienten (R-Quadrat) durch Datenpunkte mit bekannten y- und bekannten x-Werten zurück.",
      "parameters": [
        {
          "name": "Array_Dep"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SEARCH": {
      "description": "Diese Funktion findet eine Textzeichenfolge in einer anderen Textzeichenfolge und gibt den Index der Startposition des gefundenen Textes zurück.",
      "parameters": [
        {
          "name": "Text finden"
        },
        {
          "name": "innerhalb_text"
        },
        {
          "name": "Startnummer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SECOND": {
      "description": "Diese Funktion gibt den Sekundenwert (0 bis 59) für eine angegebene Zeit zurück.",
      "parameters": [
        {
          "name": "Zeit"
        }
      ]
    },
    "SERIESSUM": {
      "description": "Diese Funktion gibt die Summe einer Potenzreihe zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "N"
        },
        {
          "name": "M"
        },
        {
          "name": "Koeffizienten"
        }
      ]
    },
    "SIGN": {
      "description": "Diese Funktion gibt das Vorzeichen einer Zahl oder eines Ausdrucks zurück.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "SIN": {
      "description": "Diese Funktion gibt den Sinus des angegebenen Winkels zurück.",
      "parameters": [
        {
          "name": "Winkel"
        }
      ]
    },
    "SINH": {
      "description": "Diese Funktion gibt den Hyperbolischen Sinus der angegebenen Zahl zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "SKEW": {
      "description": "Diese Funktion gibt die Schiefe einer Verteilung zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "SLN": {
      "description": "Diese Funktion gibt die lineare Abschreibung eines Vermögenswerts für einen Zeitraum zurück.",
      "parameters": [
        {
          "name": "kosten"
        },
        {
          "name": "retten"
        },
        {
          "name": "Leben"
        }
      ]
    },
    "SLOPE": {
      "description": "Diese Funktion berechnet die Steigung einer linearen Regression.",
      "parameters": [
        {
          "name": "Array_Dep"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SMALL": {
      "description": "Diese Funktion gibt den n-ten kleinsten Wert in einem Datensatz zurück, wobei n angegeben ist.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "N"
        }
      ]
    },
    "SQRT": {
      "description": "Diese Funktion gibt die positive Quadratwurzel der angegebenen Zahl zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "SQRTPI": {
      "description": "Diese Funktion gibt die positive Quadratwurzel eines Vielfachen von Pi (p) zurück.",
      "parameters": [
        {
          "name": "mehrere"
        }
      ]
    },
    "STANDARDIZE": {
      "description": "Diese Funktion gibt einen normalisierten Wert aus einer Verteilung zurück, die durch Mittelwert und Standardabweichung charakterisiert ist.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "STDEVA": {
      "description": "Diese Funktion gibt die Standardabweichung für eine Reihe von Zahlen, Texten oder logischen Werten zurück.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "STDEVP": {
      "description": "Diese Funktion gibt die Standardabweichung für eine gesamte angegebene Population (numerischer Werte) zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "STDEVPA": {
      "description": "Diese Funktion gibt die Standardabweichung für eine gesamte angegebene Population zurück, einschließlich Text- oder logischer Werte sowie numerischer Werte.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "STEYX": {
      "description": "Diese Funktion gibt den Standardfehler des vorhergesagten y-Wertes für jedes x zurück. Der Standardfehler ist ein Maß für die Fehlermenge bei der Vorhersage von y für einen x-Wert.",
      "parameters": [
        {
          "name": "Array_Dep"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SUBSTITUTE": {
      "description": "Diese Funktion ersetzt bestimmte Zeichen in einer vorhandenen Zeichenfolge durch eine neue Zeichenfolge.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "alter_text"
        },
        {
          "name": "neuer_Text"
        },
        {
          "name": "Instanznummer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SUBTOTAL": {
      "description": "Diese Funktion berechnet eine Zwischensumme einer Liste von Zahlen unter Verwendung einer angegebenen integrierten Funktion.",
      "parameters": [
        {
          "name": "Funktionsnummer"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": "WAHR"
        }
      ]
    },
    "SUM": {
      "description": "Diese Funktion gibt die Summe der Zellen oder den Zellbereich zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "SUMIF": {
      "description": "Diese Funktion addiert die Zellen anhand eines vorgegebenen Kriteriums.",
      "parameters": [
        {
          "name": "Reichweite"
        },
        {
          "name": "Kriterien"
        },
        {
          "name": "Summe_Bereich"
        }
      ]
    },
    "SUMIFS": {
      "description": "Diese Funktion addiert die Zellen in einem Bereich anhand mehrerer Kriterien.",
      "parameters": [
        {
          "name": "Summe_Bereich"
        },
        {
          "name": "Kriterienbereich1"
        },
        {
          "name": "Kriterien1"
        },
        {
          "name": "Kriterienbereich2",
          "repeatable": "WAHR"
        },
        {
          "name": "Kriterien2",
          "repeatable": "WAHR"
        }
      ]
    },
    "SUMPRODUCT": {
      "description": "Diese Funktion gibt die Summe der Produkte von Zellen zurück. Multipliziert entsprechende Komponenten in den angegebenen Arrays und gibt die Summe dieser Produkte zurück.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2",
          "repeatable": "WAHR"
        }
      ]
    },
    "SUMSQ": {
      "description": "Diese Funktion gibt die Summe der Quadrate der Argumente zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "SUMX2MY2": {
      "description": "Diese Funktion gibt die Summe der Differenz der Quadrate der entsprechenden Werte in zwei Arrays zurück.",
      "parameters": [
        {
          "name": "Array_x"
        },
        {
          "name": "Array_y\" (Anordnung y)"
        }
      ]
    },
    "SUMX2PY2": {
      "description": "Diese Funktion gibt die Summe der Summe der Quadrate der entsprechenden Werte in zwei Arrays zurück.",
      "parameters": [
        {
          "name": "Array_x"
        },
        {
          "name": "Array_y\" (Anordnung y)"
        }
      ]
    },
    "SUMXMY2": {
      "description": "Diese Funktion gibt die Summe der Quadrate der Differenzen entsprechender Werte in zwei Arrays zurück.",
      "parameters": [
        {
          "name": "Array_x"
        },
        {
          "name": "Array_y\" (Anordnung y)"
        }
      ]
    },
    "SYD": {
      "description": "Diese Funktion gibt die Summe der Jahresabschreibungsziffern eines Vermögenswerts für einen angegebenen Zeitraum zurück.",
      "parameters": [
        {
          "name": "kosten"
        },
        {
          "name": "retten"
        },
        {
          "name": "Leben"
        },
        {
          "name": "Zeitraum"
        }
      ]
    },
    "T": {
      "description": "Diese Funktion gibt den Text in einer angegebenen Zelle zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "TAN": {
      "description": "Diese Funktion gibt den Tangens des angegebenen Winkels zurück.",
      "parameters": [
        {
          "name": "Winkel"
        }
      ]
    },
    "TANH": {
      "description": "Diese Funktion gibt den hyperbolischen Tangens der angegebenen Zahl zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "TBILLEQ": {
      "description": "Diese Funktion gibt die entsprechende Rendite für einen Schatzwechsel (oder T-Bill) zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Rabatt"
        }
      ]
    },
    "TBILLPRICE": {
      "description": "Diese Funktion gibt den Preis pro 100 US-Dollar Nennwert für eine Schatzanweisung (oder T-Bill) zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Rabatt"
        }
      ]
    },
    "TBILLYIELD": {
      "description": "Diese Funktion gibt die Rendite für einen Schatzwechsel (oder T-Bill) zurück.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Preiswerter"
        }
      ]
    },
    "TDIST": {
      "description": "Diese Funktion gibt die Wahrscheinlichkeit für die t-Verteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Freiheitsgrad"
        },
        {
          "name": "Schwänze"
        }
      ]
    },
    "TEXT": {
      "description": "Diese Funktion formatiert eine Zahl und wandelt sie in Text um.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "format_text"
        }
      ]
    },
    "TIME": {
      "description": "Diese Funktion gibt das TimeSpan-Objekt für eine angegebene Zeit zurück.",
      "parameters": [
        {
          "name": "Stunde"
        },
        {
          "name": "Minute"
        },
        {
          "name": "zweite"
        }
      ]
    },
    "TIMEVALUE": {
      "description": "Diese Funktion gibt das TimeSpan-Objekt der durch eine Textzeichenfolge dargestellten Zeit zurück.",
      "parameters": [
        {
          "name": "Zeittext"
        }
      ]
    },
    "TINV": {
      "description": "Diese Funktion gibt den t-Wert der studentischen t-Verteilung als Funktion der Wahrscheinlichkeit und der Freiheitsgrade zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "TODAY": {
      "description": "Diese Funktion gibt das Datum und die Uhrzeit des aktuellen Datums zurück."
    },
    "TRANSPOSE": {
      "description": "Diese Funktion gibt einen vertikalen Zellbereich als horizontalen Bereich oder einen horizontalen Zellbereich als vertikalen Bereich zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        }
      ]
    },
    "TREND": {
      "description": "Diese Funktion gibt Werte entlang eines linearen Trends zurück. Diese Funktion passt eine gerade Linie an die bekannten x- und y-Werte des Arrays an. Trend gibt die y-Werte entlang dieser Linie für das Array der angegebenen neuen x-Werte zurück.",
      "parameters": [
        {
          "name": "j"
        },
        {
          "name": "X"
        },
        {
          "name": "neux"
        },
        {
          "name": "Konstante"
        }
      ]
    },
    "TRIM": {
      "description": "Diese Funktion entfernt zusätzliche Leerzeichen aus einer Zeichenfolge und lässt einzelne Leerzeichen zwischen den Wörtern.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "TRIMMEAN": {
      "description": "Diese Funktion gibt den Mittelwert einer Teilmenge von Daten zurück, ausgenommen die oberen und unteren Daten.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Prozent"
        }
      ]
    },
    "TRUE": {
      "description": "Diese Funktion gibt den Wert für logisch WAHR zurück."
    },
    "TRUNC": {
      "description": "Diese Funktion entfernt den angegebenen Dezimalteil der angegebenen Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Anzahl_Ziffern"
        }
      ]
    },
    "TTEST": {
      "description": "Diese Funktion gibt die mit einem T-Test verbundene Wahrscheinlichkeit zurück.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        },
        {
          "name": "Schwänze"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "TYPE": {
      "description": "Diese Funktion gibt den Werttyp zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "UPPER": {
      "description": "Diese Funktion wandelt Text in Großbuchstaben um.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "VALUE": {
      "description": "Diese Funktion wandelt eine Textzeichenfolge, die eine Zahl ist, in einen numerischen Wert um.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "VAR": {
      "description": "Diese Funktion gibt die Varianz basierend auf einer Stichprobe einer Population zurück, die nur numerische Werte verwendet.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "VARA": {
      "description": "Diese Funktion gibt die Varianz basierend auf einer Stichprobe einer Population zurück, die numerische, logische oder Textwerte enthält.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "VARP": {
      "description": "Diese Funktion gibt die Varianz basierend auf der gesamten Population zurück und verwendet nur numerische Werte.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "VARPA": {
      "description": "Diese Funktion gibt die Varianz basierend auf der gesamten Population zurück, die numerische, logische oder Textwerte enthält.",
      "parameters": [
        {
          "name": "Wert1"
        },
        {
          "name": "Wert2",
          "repeatable": "WAHR"
        }
      ]
    },
    "VDB": {
      "description": "Diese Funktion gibt die Abschreibung eines Vermögenswerts für einen beliebigen von Ihnen angegebenen Zeitraum unter Verwendung der Methode des variablen degressiven Abschreibungsbetrags zurück.",
      "parameters": [
        {
          "name": "kosten"
        },
        {
          "name": "retten"
        },
        {
          "name": "Leben"
        },
        {
          "name": "Startzeitraum"
        },
        {
          "name": "Ende_Zeitraum"
        },
        {
          "name": "Faktor"
        },
        {
          "name": "kein_Schalter"
        }
      ]
    },
    "VLOOKUP": {
      "description": "Diese Funktion sucht nach einem Wert in der Spalte ganz links und gibt einen Wert in derselben Zeile aus einer von Ihnen angegebenen Spalte zurück.",
      "parameters": [
        {
          "name": "Suchwert"
        },
        {
          "name": "Tabellen-Array"
        },
        {
          "name": "Spaltenindexnummer"
        },
        {
          "name": "Bereichssuche",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "WAHR",
              "description": "Ungefähre Übereinstimmung"
            },
            {
              "value": "FALSCH",
              "description": "Genaue Übereinstimmung"
            }
          ]
        }
      ]
    },
    "WEEKDAY": {
      "description": "Diese Funktion gibt die Zahl zurück, die dem Wochentag für ein bestimmtes Datum entspricht.",
      "parameters": [
        {
          "name": "Datum"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "WEEKNUM": {
      "description": "Diese Funktion gibt eine Zahl zurück, die die Woche des Jahres numerisch angibt.",
      "parameters": [
        {
          "name": "Datum"
        },
        {
          "name": "Wochentyp"
        }
      ]
    },
    "DATEPART": {
      "description": "Diese Funktion formatiert ein Datum und wandelt es in Text um.",
      "parameters": [
        {
          "name": "Datum"
        },
        {
          "name": "format_text"
        },
        {
          "name": "Wochentyp",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "WEIBULL": {
      "description": "Diese Funktion gibt die zweiparametrige Weibull-Verteilung zurück, die häufig in der Zuverlässigkeitsanalyse verwendet wird.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "WORKDAY": {
      "description": "Diese Funktion gibt die Anzahl der Arbeitstage vor oder nach dem Startdatum zurück.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Tage"
        },
        {
          "name": "Feiertage",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "XIRR": {
      "description": "Diese Funktion berechnet den internen Zinsfuß für einen Zeitplan für Cashflows, die möglicherweise nicht periodisch sind.",
      "parameters": [
        {
          "name": "Werte"
        },
        {
          "name": "Datteln"
        },
        {
          "name": "erraten"
        }
      ]
    },
    "XNPV": {
      "description": "Diese Funktion berechnet den Nettogegenwartswert für einen Zeitplan für Cashflows, die möglicherweise nicht periodisch sind.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "Werte"
        },
        {
          "name": "Datteln"
        }
      ]
    },
    "YEAR": {
      "description": "Diese Funktion gibt das Jahr als Ganzzahl für ein angegebenes Datum zurück.",
      "parameters": [
        {
          "name": "Datum"
        }
      ]
    },
    "YEARFRAC": {
      "description": "Diese Funktion gibt den Bruchteil des Jahres zurück, der durch die Anzahl der ganzen Tage zwischen dem Start- und Enddatum dargestellt wird.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Enddatum"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "YIELD": {
      "description": "Diese Funktion berechnet die Rendite eines Wertpapiers, das regelmäßig Zinsen zahlt.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Preis"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Frequenz"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "YIELDDISC": {
      "description": "Diese Funktion berechnet die jährliche Rendite für ein diskontiertes Wertpapier.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Preis"
        },
        {
          "name": "Rückzahlung"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "YIELDMAT": {
      "description": "Diese Funktion berechnet die jährliche Rendite eines Wertpapiers, das bei Fälligkeit Zinsen zahlt.",
      "parameters": [
        {
          "name": "Siedlung"
        },
        {
          "name": "Reife"
        },
        {
          "name": "Ausgabe"
        },
        {
          "name": "Rate"
        },
        {
          "name": "Preis"
        },
        {
          "name": "Basis"
        }
      ]
    },
    "ZTEST": {
      "description": "Diese Funktion gibt den Signifikanzwert eines Z-Tests zurück. Der Z-Test generiert einen Standardwert für x in Bezug auf den Datensatz und gibt die zweiseitige Wahrscheinlichkeit für die Normalverteilung zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "X"
        },
        {
          "name": "Sigma",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "HBARSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Hbar-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbschema"
        },
        {
          "name": "Achse sichtbar"
        },
        {
          "name": "Balkenhöhe"
        }
      ]
    },
    "VBARSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Vbar-Sparkline verwendet wird",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbschema"
        },
        {
          "name": "Achse sichtbar"
        },
        {
          "name": "Balkenbreite"
        }
      ]
    },
    "VARISPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Varianz-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Varianz"
        },
        {
          "name": "Referenz"
        },
        {
          "name": "Mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "markieren"
        },
        {
          "name": "Tickunit"
        },
        {
          "name": "Legende"
        },
        {
          "name": "Farbpositiv"
        },
        {
          "name": "FarbeNegativ"
        },
        {
          "name": "Vertikale"
        }
      ]
    },
    "LOLLIPOPVARISPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer absoluten oder relativen Lollipop-Varianz-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "geplanterWert"
        },
        {
          "name": "tatsächlicherWert"
        },
        {
          "name": "Index"
        },
        {
          "name": "Absolute"
        },
        {
          "name": "Referenz"
        },
        {
          "name": "Mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "Tickunit"
        },
        {
          "name": "Legende"
        },
        {
          "name": "Farbpositiv"
        },
        {
          "name": "FarbeNegativ"
        },
        {
          "name": "LollipopHeaderFarbe"
        },
        {
          "name": "Vertikale"
        }
      ]
    },
    "PIESPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Kreis-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Bereich|Prozentsatz"
        },
        {
          "name": "Farbe",
          "repeatable": "WAHR"
        }
      ]
    },
    "AREASPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Flächen-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Punkte"
        },
        {
          "name": "Mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "Zeile1"
        },
        {
          "name": "Zeile2"
        },
        {
          "name": "Farbpositiv"
        },
        {
          "name": "FarbeNegativ"
        }
      ]
    },
    "SCATTERSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Scatter-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Punkte1"
        },
        {
          "name": "Punkte2"
        },
        {
          "name": "Luder"
        },
        {
          "name": "maxX"
        },
        {
          "name": "minY"
        },
        {
          "name": "maxY"
        },
        {
          "name": "hLinie"
        },
        {
          "name": "vLine"
        },
        {
          "name": "xMinZone"
        },
        {
          "name": "xMaxZone"
        },
        {
          "name": "yMinZone"
        },
        {
          "name": "yMaxZone"
        },
        {
          "name": "Tags"
        },
        {
          "name": "Zeichensymbol"
        },
        {
          "name": "Linien zeichnen"
        },
        {
          "name": "Farbe1"
        },
        {
          "name": "Farbe2"
        },
        {
          "name": "Bindestrich"
        }
      ]
    },
    "LINESPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Linien-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Daten"
        },
        {
          "name": "Datenorientierung"
        },
        {
          "name": "Datumsachsendaten"
        },
        {
          "name": "Datumsachsenausrichtung"
        },
        {
          "name": "Einstellung"
        }
      ]
    },
    "COLUMNSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Spalten-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Daten"
        },
        {
          "name": "Datenorientierung"
        },
        {
          "name": "Datumsachsendaten"
        },
        {
          "name": "Datumsachsenausrichtung"
        },
        {
          "name": "Einstellung"
        }
      ]
    },
    "WINLOSSSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Gewinn-/Verlust-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Daten"
        },
        {
          "name": "Datenorientierung"
        },
        {
          "name": "Datumsachsendaten"
        },
        {
          "name": "Datumsachsenausrichtung"
        },
        {
          "name": "Einstellung"
        }
      ]
    },
    "BULLETSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Bullet-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "messen"
        },
        {
          "name": "Ziel"
        },
        {
          "name": "maxi"
        },
        {
          "name": "Gut"
        },
        {
          "name": "schlecht"
        },
        {
          "name": "Vorhersage"
        },
        {
          "name": "Tickunit"
        },
        {
          "name": "Farbschema"
        },
        {
          "name": "Vertikale"
        },
        {
          "name": "Farbe messen"
        },
        {
          "name": "Zielfarbe"
        },
        {
          "name": "maxiColor"
        },
        {
          "name": "guteFarbe"
        },
        {
          "name": "schlechte Farbe"
        },
        {
          "name": "Prognosefarbe"
        },
        {
          "name": "MessungÜberMaxiErlauben"
        },
        {
          "name": "Balkengröße"
        }
      ]
    },
    "SPREADSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Spread-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Punkte"
        },
        {
          "name": "Durchschnitt anzeigen"
        },
        {
          "name": "SkalaStart"
        },
        {
          "name": "SkalaEnde"
        },
        {
          "name": "Stil"
        },
        {
          "name": "Farbschema"
        },
        {
          "name": "Vertikale"
        }
      ]
    },
    "STACKEDSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer gestapelten Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Punkte"
        },
        {
          "name": "Farbbereich"
        },
        {
          "name": "Beschriftungsbereich"
        },
        {
          "name": "maximal"
        },
        {
          "name": "ZielRot"
        },
        {
          "name": "ZielGrün"
        },
        {
          "name": "ZielBlau"
        },
        {
          "name": "tragetYellow"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hervorhebungsposition"
        },
        {
          "name": "Vertikale"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Textgröße"
        }
      ]
    },
    "BOXPLOTSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung eines Boxplot-Sparklines verwendet wird.",
      "parameters": [
        {
          "name": "Punkte"
        },
        {
          "name": "BoxPlot-Klasse"
        },
        {
          "name": "Durchschnitt anzeigen"
        },
        {
          "name": "SkalaStart"
        },
        {
          "name": "SkalaEnde"
        },
        {
          "name": "akzeptablerStart"
        },
        {
          "name": "akzeptablesEnde"
        },
        {
          "name": "Farbschema"
        },
        {
          "name": "Stil"
        },
        {
          "name": "Vertikale"
        }
      ]
    },
    "CASCADESPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer kaskadierenden Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Punktebereich"
        },
        {
          "name": "PunktIndex"
        },
        {
          "name": "Etikettenbereich"
        },
        {
          "name": "Minimum"
        },
        {
          "name": "maximal"
        },
        {
          "name": "Farbpositiv"
        },
        {
          "name": "FarbeNegativ"
        },
        {
          "name": "Vertikale"
        },
        {
          "name": "Artikeltypbereich"
        },
        {
          "name": "FarbeTotal"
        }
      ]
    },
    "PARETOSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Pareto-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Punkte"
        },
        {
          "name": "PunktIndex"
        },
        {
          "name": "Farbbereich"
        },
        {
          "name": "Ziel"
        },
        {
          "name": "Ziel2"
        },
        {
          "name": "Hervorhebungsposition"
        },
        {
          "name": "Etikett"
        },
        {
          "name": "Vertikale"
        },
        {
          "name": "Zielfarbe"
        },
        {
          "name": "Ziel2Farbe"
        },
        {
          "name": "Beschriftungsfarbe"
        },
        {
          "name": "Balkengröße"
        }
      ]
    },
    "MONTHSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Monats-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Jahr"
        },
        {
          "name": "Monat"
        },
        {
          "name": "Datenbereich"
        },
        {
          "name": "leereFarbe"
        },
        {
          "name": "Startfarbe"
        },
        {
          "name": "Mittelfarbe"
        },
        {
          "name": "EndeFarbe"
        }
      ]
    },
    "YEARSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer Jahres-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Jahr"
        },
        {
          "name": "Datenbereich"
        },
        {
          "name": "leereFarbe"
        },
        {
          "name": "Startfarbe"
        },
        {
          "name": "Mittelfarbe"
        },
        {
          "name": "EndeFarbe"
        }
      ]
    },
    "GAUGEKPISPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung einer KPI-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Zielwert"
        },
        {
          "name": "aktuellerWert"
        },
        {
          "name": "Mindestwert"
        },
        {
          "name": "maxWert"
        },
        {
          "name": "Beschriftung anzeigen",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "ZielWertBezeichnung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "aktuellesWertlabel",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Mindestwertbezeichnung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "maxWertBezeichnung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "SchriftartenArray",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "minWinkel",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "maxWinkel",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Radiusverhältnis",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Messgerättyp",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Farbbereich",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "HISTOGRAMSPARKLINE": {
      "description": "Diese Funktion gibt einen Datensatz zurück, der zur Darstellung eines Histogramm-Sparkline verwendet wird.",
      "parameters": [
        {
          "name": "Datumsbereich"
        },
        {
          "name": "kontinuierlich"
        },
        {
          "name": "Farbetikett"
        },
        {
          "name": "Skala"
        },
        {
          "name": "Balkenbreite"
        },
        {
          "name": "Balkenfarbe"
        },
        {
          "name": "Schriftartbezeichnung"
        },
        {
          "name": "Beschriftungsfarbe"
        },
        {
          "name": "Kantenfarbe"
        }
      ]
    },
    "CEILING.PRECISE": {
      "description": "Diese Funktion rundet eine Zahl auf die nächste Ganzzahl oder auf das nächste Vielfache eines angegebenen Wertes auf.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Bedeutung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "COVARIANCE.S": {
      "description": "Diese Funktion gibt die Stichprobenkovarianz zurück, also den Durchschnitt der Produkte der Abweichungen für jedes Datenpunktpaar in zwei Zahlensätzen.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        }
      ]
    },
    "FLOOR.PRECISE": {
      "description": "Diese Funktion rundet eine Zahl auf die nächste Ganzzahl oder auf das nächste Vielfache eines angegebenen Wertes ab.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Bedeutung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "PERCENTILE.EXC": {
      "description": "Diese Funktion gibt das n-te Perzentil der Werte in einem Bereich zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.EXC": {
      "description": "Diese Funktion gibt zurück, in welchem ​​Quartil (welches Viertel oder 25 Prozent) eines Datensatzes sich ein Wert befindet.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Quart"
        }
      ]
    },
    "RANK.AVG": {
      "description": "Diese Funktion gibt den Rang einer Zahl in einer Zahlenmenge zurück. Wenn einige Werte den gleichen Rang haben, wird der Durchschnittsrang zurückgegeben.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Schiedsrichter"
        },
        {
          "name": "Befehl",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "MODE.MULT": {
      "description": "Diese Funktion gibt das am häufigsten vorkommende vertikale Array oder den am häufigsten vorkommenden Wert in einem Datensatz zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "STDEV.P": {
      "description": "Diese Funktion gibt die Standardabweichung für eine gesamte angegebene Population (numerischer Werte) zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "VAR.P": {
      "description": "Diese Funktion gibt die Varianz basierend auf der gesamten Population zurück und verwendet nur numerische Werte.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "COVARIANCE.P": {
      "description": "Diese Funktion gibt die Kovarianz zurück, also den Durchschnitt der Produkte der Abweichungen für jedes Datenpunktpaar in zwei Zahlensätzen.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        }
      ]
    },
    "MODE.SNGL": {
      "description": "Diese Funktion gibt den am häufigsten vorkommenden Wert in einem Datensatz zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "PERCENTILE.INC": {
      "description": "Diese Funktion gibt das n-te Perzentil der Werte in einem Bereich zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.INC": {
      "description": "Diese Funktion gibt zurück, in welchem ​​Quartil (welches Viertel oder 25 Prozent) eines Datensatzes sich ein Wert befindet.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Quart"
        }
      ]
    },
    "RANK.EQ": {
      "description": "Diese Funktion gibt den Rang einer Zahl in einer Zahlenmenge zurück. Wenn Sie die Menge sortieren würden, wäre der Rang der Zahl ihre Position in der Liste.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Schiedsrichter"
        },
        {
          "name": "Befehl",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "STDEV": {
      "description": "Diese Funktion gibt die Standardabweichung zurück, die auf Basis einer Stichprobe geschätzt wird.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "STDEV.S": {
      "description": "Diese Funktion gibt die Standardabweichung zurück, die auf Basis einer Stichprobe geschätzt wird.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "VAR.S": {
      "description": "Diese Funktion gibt die Varianz basierend auf einer Stichprobe einer Population zurück, die nur numerische Werte verwendet.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "BETA.INV": {
      "description": "Diese Funktion berechnet die Inverse der kumulativen Beta-Verteilungsfunktion.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "untere",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "obere",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "BINOM.DIST": {
      "description": "Diese Funktion berechnet die Wahrscheinlichkeit der Binomialverteilung einzelner Terme.",
      "parameters": [
        {
          "name": "Anzahl_en"
        },
        {
          "name": "Versuche"
        },
        {
          "name": "Wahrscheinlichkeiten"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "BINOM.INV": {
      "description": "Diese Funktion gibt das Kriterium Binomial zurück, also den kleinsten Wert, für den die kumulative Binomialverteilung größer oder gleich einem Kriteriumswert ist.",
      "parameters": [
        {
          "name": "Versuche"
        },
        {
          "name": "Wahrscheinlichkeiten"
        },
        {
          "name": "Alpha"
        }
      ]
    },
    "CHISQ.DIST.RT": {
      "description": "Diese Funktion berechnet die einseitige Wahrscheinlichkeit der Chi-Quadrat-Verteilung.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "CHISQ.INV.RT": {
      "description": "Diese Funktion berechnet den Kehrwert der einseitigen Wahrscheinlichkeit der Chi-Quadrat-Verteilung.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "CHISQ.TEST": {
      "description": "Diese Funktion berechnet den Test auf Unabhängigkeit von der Chi-Quadrat-Verteilung.",
      "parameters": [
        {
          "name": "tatsächliche Reichweite"
        },
        {
          "name": "erwarteter_Bereich"
        }
      ]
    },
    "CONFIDENCE.NORM": {
      "description": "Diese Funktion gibt das Konfidenzintervall für einen Populationsmittelwert zurück.",
      "parameters": [
        {
          "name": "Alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "Größe"
        }
      ]
    },
    "EXPON.DIST": {
      "description": "Diese Funktion gibt die Exponentialverteilung oder die Wahrscheinlichkeitsdichte zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Lambda"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "F.DIST.RT": {
      "description": "Diese Funktion berechnet die F-Wahrscheinlichkeitsverteilung, um den Grad der Divergenz zwischen zwei Datensätzen zu ermitteln.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Freiheitsgrad1"
        },
        {
          "name": "Freiheitsgrad2"
        }
      ]
    },
    "F.INV.RT": {
      "description": "Diese Funktion gibt die Umkehrung der F-Wahrscheinlichkeitsverteilung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad1"
        },
        {
          "name": "Freiheitsgrad2"
        }
      ]
    },
    "F.TEST": {
      "description": "Diese Funktion gibt das Ergebnis eines F-Tests zurück, der die einseitige Wahrscheinlichkeit zurückgibt, dass die Varianzen in zwei Arrays nicht signifikant unterschiedlich sind.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        }
      ]
    },
    "GAMMA.DIST": {
      "description": "Diese Funktion gibt die Gammaverteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "GAMMA.INV": {
      "description": "Diese Funktion gibt die Umkehrung der kumulativen Gammaverteilung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        }
      ]
    },
    "LOGNORM.INV": {
      "description": "Diese Funktion gibt die Umkehrung der lognormalen kumulativen Verteilungsfunktion von x zurück, wobei LN(x) normal verteilt ist mit dem angegebenen Mittelwert und der angegebenen Standardabweichung.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORM.DIST": {
      "description": "Diese Funktion gibt die normale kumulative Verteilung für den angegebenen Mittelwert und die angegebene Standardabweichung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "NORM.INV": {
      "description": "Diese Funktion gibt die Umkehrung der normalen kumulativen Verteilung für den gegebenen Mittelwert und die gegebene Standardabweichung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORM.S.INV": {
      "description": "Diese Funktion gibt die Umkehrung der standardmäßigen normalen kumulativen Verteilung zurück. Die Verteilung hat einen Mittelwert von Null und eine Standardabweichung von Eins.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        }
      ]
    },
    "PERCENTRANK.INC": {
      "description": "Diese Funktion gibt den Rang eines Wertes in einem Datensatz als Prozentsatz des Datensatzes zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "N"
        },
        {
          "name": "Bedeutung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "POISSON.DIST": {
      "description": "Diese Funktion gibt die Poisson-Verteilung zurück.",
      "parameters": [
        {
          "name": "nereignisse"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "T.INV.2T": {
      "description": "Diese Funktion gibt den t-Wert der studentischen t-Verteilung als Funktion der Wahrscheinlichkeit und der Freiheitsgrade zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "T.TEST": {
      "description": "Diese Funktion gibt die mit einem T-Test verbundene Wahrscheinlichkeit zurück.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2"
        },
        {
          "name": "Schwänze"
        },
        {
          "name": "Typ"
        }
      ]
    },
    "WEIBULL.DIST": {
      "description": "Diese Funktion gibt die zweiparametrige Weibull-Verteilung zurück, die häufig in der Zuverlässigkeitsanalyse verwendet wird.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "Z.TEST": {
      "description": "Diese Funktion gibt den Signifikanzwert eines Z-Tests zurück. Der Z-Test generiert einen Standardwert für x in Bezug auf den Datensatz und gibt die zweiseitige Wahrscheinlichkeit für die Normalverteilung zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "X"
        },
        {
          "name": "Sigma",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "T.DIST.RT": {
      "description": "Diese Funktion gibt die rechtsseitige t-Verteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "T.DIST.2T": {
      "description": "Diese Funktion gibt die zweiseitige t-Verteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "ISO.CEILING": {
      "description": "Diese Funktion gibt eine Zahl bis zur nächsten Ganzzahl oder zum nächsten Vielfachen der Signifikanz zurück, unabhängig vom Vorzeichen der Signifikanz.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Bedeutung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "BETA.DIST": {
      "description": "Diese Funktion gibt die Beta-Verteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Alpha"
        },
        {
          "name": "Beta"
        },
        {
          "name": "kumulativ"
        },
        {
          "name": "untere"
        },
        {
          "name": "obere"
        }
      ]
    },
    "GAMMALN.PRECISE": {
      "description": "Diese Funktion gibt den natürlichen Logarithmus der Gammafunktion zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "ERF.PRECISE": {
      "description": "Diese Funktion gibt die Fehlerfunktion zurück.",
      "parameters": [
        {
          "name": "Untergrenze"
        }
      ]
    },
    "ERFC.PRECISE": {
      "description": "Diese Funktion gibt die komplementäre ERF-Funktion zurück.",
      "parameters": [
        {
          "name": "Untergrenze"
        }
      ]
    },
    "PERCENTRANK.EXC": {
      "description": "Diese Funktion gibt den Prozentrang (0..1, exklusiv) eines Wertes in einem Datensatz zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "X"
        },
        {
          "name": "Bedeutung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "HYPGEOM.DIST": {
      "description": "Diese Funktion gibt die hypergeometrische Verteilung zurück.",
      "parameters": [
        {
          "name": "Proben"
        },
        {
          "name": "Anzahl_Beispiel"
        },
        {
          "name": "Bevölkerung"
        },
        {
          "name": "Nummer_Pop"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "LOGNORM.DIST": {
      "description": "Diese Funktion gibt die logarithmische Normalverteilung von x zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "bedeuten"
        },
        {
          "name": "Standardabweichung"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "NEGBINOM.DIST": {
      "description": "Diese Funktion gibt die negative Binomialverteilung zurück.",
      "parameters": [
        {
          "name": "Nummer_f"
        },
        {
          "name": "Anzahl_en"
        },
        {
          "name": "Wahrscheinlichkeiten"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "NORM.S.DIST": {
      "description": "Diese Funktion gibt die Standardnormalverteilung zurück.",
      "parameters": [
        {
          "name": "z"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "T.DIST": {
      "description": "Diese Funktion gibt die t-Verteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Freiheitsgrad"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "F.DIST": {
      "description": "Diese Funktion gibt die F-Wahrscheinlichkeitsverteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Freiheitsgrad1"
        },
        {
          "name": "Freiheitsgrad2"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "CHISQ.DIST": {
      "description": "Diese Funktion gibt die Chi-Quadrat-Verteilung zurück.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Freiheitsgrad"
        },
        {
          "name": "kumulativ"
        }
      ]
    },
    "F.INV": {
      "description": "Diese Funktion gibt die Umkehrung der F-Wahrscheinlichkeitsverteilung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad1"
        },
        {
          "name": "Freiheitsgrad2"
        }
      ]
    },
    "T.INV": {
      "description": "Diese Funktion gibt die linksseitige Inverse der t-Verteilung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "CHISQ.INV": {
      "description": "Diese Funktion gibt die Umkehrung der linksseitigen Wahrscheinlichkeit der Chi-Quadrat-Verteilung zurück.",
      "parameters": [
        {
          "name": "Wahrscheinlichkeit"
        },
        {
          "name": "Freiheitsgrad"
        }
      ]
    },
    "CONFIDENCE.T": {
      "description": "Diese Funktion gibt das Konfidenzintervall für eine Student-t-Verteilung zurück.",
      "parameters": [
        {
          "name": "Alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "Größe"
        }
      ]
    },
    "NETWORKDAYS.INTL": {
      "description": "Diese Funktion gibt die Anzahl der Arbeitstage zwischen zwei Daten zurück und verwendet dabei Argumente zur Angabe von Feiertagen und Wochenenden.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Enddatum"
        },
        {
          "name": "Wochenende",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Feiertage",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "WORKDAY.INTL": {
      "description": "Diese Funktion gibt die Seriennummer des Datums vor oder nach einer Anzahl von Werktagen mit benutzerdefinierten Wochenendparametern zurück. Diese Parameter geben Wochenendtage und Feiertage an.",
      "parameters": [
        {
          "name": "Startdatum"
        },
        {
          "name": "Tage"
        },
        {
          "name": "Wochenende",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Feiertage",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "REFRESH": {
      "description": "Diese Funktion entscheidet, wie die Formel neu berechnet wird. Sie können das Argument \"evaluateMode\" verwenden, um die Formel anhand des geänderten Referenzwerts neu zu berechnen, einmalig auszuwerten, neu zu berechnen oder in Intervallen.",
      "parameters": [
        {
          "name": "Formel"
        },
        {
          "name": "Auswertungsmodus"
        },
        {
          "name": "Intervall"
        }
      ]
    },
    "DAYS": {
      "description": "Diese Funktion gibt die Anzahl der Tage zwischen zwei Daten zurück.",
      "parameters": [
        {
          "name": "Enddatum"
        },
        {
          "name": "Startdatum"
        }
      ]
    },
    "ISOWEEKNUM": {
      "description": "Diese Funktion gibt die Nummer der ISO-Woche des Jahres für ein bestimmtes Datum zurück.",
      "parameters": [
        {
          "name": "Datum"
        }
      ]
    },
    "BITAND": {
      "description": "Diese Funktion gibt ein bitweises \\\"UND\\\" zweier Zahlen zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2"
        }
      ]
    },
    "BITLSHIFT": {
      "description": "Diese Funktion gibt ein bitweises \"ODER\" zweier Zahlen zurück.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Verschiebungsbetrag"
        }
      ]
    },
    "BITOR": {
      "description": "Diese Funktion gibt ein bitweises \"ODER\" zweier Zahlen zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2"
        }
      ]
    },
    "BITRSHIFT": {
      "description": "Diese Funktion gibt ein bitweises \"ODER\" zweier Zahlen zurück.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Verschiebungsbetrag"
        }
      ]
    },
    "BITXOR": {
      "description": "Diese Funktion gibt ein bitweises \\\"XOR\\\" zweier Zahlen zurück.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2"
        }
      ]
    },
    "IMCOSH": {
      "description": "Diese Funktion gibt den hyperbolischen Cosinus einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMCOT": {
      "description": "Diese Funktion gibt den Kotangens einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMCSC": {
      "description": "Diese Funktion gibt den Kosekans einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMCSCH": {
      "description": "Diese Funktion gibt den hyperbolischen Kosekans einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMSEC": {
      "description": "Diese Funktion gibt den Sekans einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMSECH": {
      "description": "Diese Funktion gibt den Sekans Hyperbolicus einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMSINH": {
      "description": "Diese Funktion gibt den hyperbolischen Sinus einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "IMTAN": {
      "description": "Diese Funktion gibt den Tangens einer komplexen Zahl im Textformat x+yi oder x+yj zurück.",
      "parameters": [
        {
          "name": "Komplexnum"
        }
      ]
    },
    "PDURATION": {
      "description": "Diese Funktion gibt die Anzahl der Perioden zurück, die eine Investition benötigt, um einen bestimmten Wert zu erreichen.",
      "parameters": [
        {
          "name": "Rate"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        }
      ]
    },
    "RRI": {
      "description": "Diese Funktion gibt einen äquivalenten Zinssatz für das Wachstum einer Investition zurück.",
      "parameters": [
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        }
      ]
    },
    "ISFORMULA": {
      "description": "Mit dieser Funktion wird geprüft, ob eine referenzierte Zelle eine Formel enthält.",
      "parameters": [
        {
          "name": "Zellreferenz"
        }
      ]
    },
    "IFNA": {
      "description": "Diese Funktion gibt den von Ihnen angegebenen Wert zurück, wenn die Formel den Fehlerwert #N/A zurückgibt, andernfalls das Ergebnis der Formel.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Wert_wenn_nicht vorhanden"
        }
      ]
    },
    "IFS": {
      "description": "Diese Funktion prüft, ob eine oder mehrere Bedingungen erfüllt sind und gibt einen Wert zurück, der der ersten WAHREN Bedingung entspricht.",
      "parameters": [
        {
          "name": "logischer_test1"
        },
        {
          "name": "Wert_wenn_true1"
        },
        {
          "name": "logischer_test2",
          "repeatable": "WAHR"
        },
        {
          "name": "Wert_wenn_wahr2",
          "repeatable": "WAHR"
        }
      ]
    },
    "SWITCH": {
      "description": "Diese Funktion wertet einen Wert (den sogenannten Ausdruck) anhand einer Werteliste aus und gibt das Ergebnis zurück, das dem ersten übereinstimmenden Wert entspricht. Wenn keine Übereinstimmung vorliegt, kann ein optionaler Standardwert zurückgegeben werden.",
      "parameters": [
        {
          "name": "Ausdruck"
        },
        {
          "name": "Wert1"
        },
        {
          "name": "Ergebnis1"
        },
        {
          "name": "Standard_oder_Wert2",
          "repeatable": "WAHR",
          "optional": "WAHR"
        },
        {
          "name": "Ergebnis2",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "XOR": {
      "description": "Diese Funktion gibt ein logisches Exklusiv-Oder aller Argumente zurück.",
      "parameters": [
        {
          "name": "logisch",
          "repeatable": "WAHR"
        }
      ]
    },
    "AREAS": {
      "description": "Diese Funktion gibt die Anzahl der Bereiche in einer Referenz zurück.",
      "parameters": [
        {
          "name": "Referenz"
        }
      ]
    },
    "FORMULATEXT": {
      "description": "Diese Funktion gibt eine Formel als Zeichenfolge zurück.",
      "parameters": [
        {
          "name": "Referenz"
        }
      ]
    },
    "HYPERLINK": {
      "description": "Diese Funktion erstellt eine Verknüpfung oder einen Sprung, der ein auf einem Netzwerkserver, einem Intranet oder dem Internet gespeichertes Dokument öffnet.",
      "parameters": [
        {
          "name": "Link-Standort"
        },
        {
          "name": "freundlicher_Name"
        }
      ]
    },
    "ACOT": {
      "description": "Diese Funktion berechnet den Arcustangens einer Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ACOTH": {
      "description": "Diese Funktion berechnet den inversen Arkustangens Hyperbolicus einer Zahl.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "ARABIC": {
      "description": "Diese Funktion wandelt einen römischen Zifferntext in ein arabisches Ziffernäquivalent um.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "BASE": {
      "description": "Diese Funktion wandelt eine Zahl in eine Textdarstellung mit der angegebenen Basis um.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Radix"
        },
        {
          "name": "Mindestlänge",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "CEILING.MATH": {
      "description": "Diese Funktion rundet eine Zahl auf die nächste Ganzzahl oder das nächste Vielfache der Signifikanz auf.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Bedeutung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "COMBINA": {
      "description": "Diese Funktion berechnet die Anzahl der möglichen Kombinationen mit Wiederholungen für eine angegebene Anzahl von Elementen.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "gewählte_Nummer"
        }
      ]
    },
    "COT": {
      "description": "Diese Funktion gibt den Kotangens des angegebenen Winkels zurück.",
      "parameters": [
        {
          "name": "Winkel"
        }
      ]
    },
    "COTH": {
      "description": "Diese Funktion gibt den hyperbolischen Kotangens der angegebenen Zahl zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "CSC": {
      "description": "Diese Funktion gibt den Kosekans des angegebenen Winkels zurück.",
      "parameters": [
        {
          "name": "Winkel"
        }
      ]
    },
    "CSCH": {
      "description": "Diese Funktion gibt den hyperbolischen Kosekans der angegebenen Zahl zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "DECIMAL": {
      "description": "Diese Funktion wandelt die Textdarstellung einer Zahl in einer gegebenen Basis in eine Dezimalzahl um.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Radix"
        }
      ]
    },
    "FLOOR.MATH": {
      "description": "Diese Funktion rundet eine Zahl auf die nächste Ganzzahl oder das nächste Vielfache der Signifikanz ab.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "Bedeutung",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SEC": {
      "description": "Diese Funktion gibt den Sekans des angegebenen Winkels zurück.",
      "parameters": [
        {
          "name": "Winkel"
        }
      ]
    },
    "SECH": {
      "description": "Diese Funktion gibt den Sekans Hyperbolicus des angegebenen Wertes zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "BINOM.DIST.RANGE": {
      "description": "Diese Funktion berechnet die Wahrscheinlichkeit eines Versuchsergebnisses mithilfe einer Binomialverteilung.",
      "parameters": [
        {
          "name": "Versuche"
        },
        {
          "name": "Wahrscheinlichkeiten"
        },
        {
          "name": "Anzahl_en"
        },
        {
          "name": "Nummer_s2",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "GAMMA": {
      "description": "Diese Funktion gibt den Gammafunktionswert zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "MAXIFS": {
      "description": "Diese Funktion gibt den Maximalwert unter den Zellen zurück, die durch einen bestimmten Satz von Bedingungen oder Kriterien angegeben sind.",
      "parameters": [
        {
          "name": "max_Bereich"
        },
        {
          "name": "Kriterienbereich1"
        },
        {
          "name": "Kriterien1"
        },
        {
          "name": "Kriterienbereich2",
          "repeatable": "WAHR"
        },
        {
          "name": "Kriterien2",
          "repeatable": "WAHR"
        }
      ]
    },
    "GAUSS": {
      "description": "Diese Funktion berechnet die Wahrscheinlichkeit, dass ein Mitglied einer Standardnormalbevölkerung zwischen dem Mittelwert und den z-Standardabweichungen vom Mittelwert liegt.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "MINIFS": {
      "description": "Diese Funktion gibt den Mindestwert unter den Zellen zurück, die durch einen bestimmten Satz von Bedingungen oder Kriterien angegeben sind.",
      "parameters": [
        {
          "name": "Mindestbereich"
        },
        {
          "name": "Kriterienbereich1"
        },
        {
          "name": "Kriterien1"
        },
        {
          "name": "Kriterienbereich2",
          "repeatable": "WAHR"
        },
        {
          "name": "Kriterien2",
          "repeatable": "WAHR"
        }
      ]
    },
    "PERMUTATIONA": {
      "description": "Diese Funktion gibt die Anzahl der Permutationen für eine gegebene Anzahl von Objekten zurück, die aus der Gesamtzahl der Objekte ausgewählt werden können.",
      "parameters": [
        {
          "name": "Nummer"
        },
        {
          "name": "gewählte_Nummer"
        }
      ]
    },
    "PHI": {
      "description": "Diese Funktion gibt den Wert der Dichtefunktion für eine Standardnormalverteilung zurück.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "SKEW.P": {
      "description": "Diese Funktion gibt die Schiefe einer Verteilungsbasis auf einer Population zurück: eine Charakterisierung des Asymmetriegrades einer Verteilung um ihren Mittelwert.",
      "parameters": [
        {
          "name": "Nummer1"
        },
        {
          "name": "Nummer2",
          "repeatable": "WAHR"
        }
      ]
    },
    "BAHTTEXT": {
      "description": "Diese Funktion konvertiert eine Zahl in einen thailändischen Text und fügt das Suffix \\\"Baht\\\" hinzu.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "CONCAT": {
      "description": "Diese Funktion kombiniert mehrere Textzeichenfolgen oder Zahlen zu einer Textzeichenfolge. Die Funktion bleibt aus Kompatibilitätsgründen mit der Funktion \\\"CONCATENATE\\\" verfügbar.",
      "parameters": [
        {
          "name": "Text 1"
        },
        {
          "name": "text2",
          "repeatable": "WAHR"
        }
      ]
    },
    "FINDB": {
      "description": "Diese Funktion findet einen Textwert innerhalb eines anderen und gibt die Position des Textwerts im gesuchten Text zurück. Wenn DBCS als Standardsprache festgelegt ist, zählt sie jedes Doppelbyte-Zeichen als 2.",
      "parameters": [
        {
          "name": "Text finden"
        },
        {
          "name": "innerhalb_text"
        },
        {
          "name": "Startnummer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "LEFTB": {
      "description": "Diese Funktion gibt die angegebenen äußersten linken Zeichen aus einem Textwert zurück, und zwar basierend auf der von Ihnen angegebenen Byte-Anzahl.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Anzahl Bytes"
        }
      ]
    },
    "LENB": {
      "description": "Diese Funktion gibt die Länge der Anzahl Bytes in einer Textzeichenfolge zurück.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "MIDB": {
      "description": "Diese Funktion gibt die angeforderte Anzahl von Zeichen aus einer Textzeichenfolge zurück, beginnend an der von Ihnen angegebenen Position und basierend auf der von Ihnen angegebenen Anzahl von Bytes.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Startnummer"
        },
        {
          "name": "Anzahl Bytes"
        }
      ]
    },
    "REPLACEB": {
      "description": "Diese Funktion ersetzt einen Teil einer Textzeichenfolge durch eine andere Textzeichenfolge, basierend auf der von Ihnen angegebenen Byteanzahl.",
      "parameters": [
        {
          "name": "alter_text"
        },
        {
          "name": "Startbyte"
        },
        {
          "name": "Anzahl Bytes"
        },
        {
          "name": "neuer_Text"
        }
      ]
    },
    "RIGHTB": {
      "description": "Diese Funktion gibt die angegebenen Zeichen ganz rechts aus einem Textwert zurück, und zwar basierend auf der von Ihnen angegebenen Byte-Anzahl.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Anzahl Bytes"
        }
      ]
    },
    "SEARCHB": {
      "description": "Diese Funktion findet eine Textzeichenfolge in einer anderen Textzeichenfolge und gibt den Index der Startposition des gefundenen Textes zurück und zählt jedes Doppelbyte-Zeichen als 2, wenn DBCS als Standardsprache festgelegt ist.",
      "parameters": [
        {
          "name": "Text finden"
        },
        {
          "name": "innerhalb_text"
        },
        {
          "name": "Startnummer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "TEXTJOIN": {
      "description": "Diese Funktion kombiniert mehrere Bereiche und/oder Zeichenfolgen zu einem Text, und der Text enthält zwischen den einzelnen Textwerten ein von Ihnen angegebenes Trennzeichen.",
      "parameters": [
        {
          "name": "Trennzeichen"
        },
        {
          "name": "ignore_empty"
        },
        {
          "name": "Text 1"
        },
        {
          "name": "text2",
          "repeatable": "WAHR"
        }
      ]
    },
    "UNICHAR": {
      "description": "Diese Funktion gibt das Unicode-Zeichen einer gegebenen numerischen Referenz zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "UNICODE": {
      "description": "Diese Funktion gibt die Zahl zurück, die dem ersten Zeichen des Textes entspricht.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "ENCODEURL": {
      "description": "Diese Funktion gibt eine URL-codierte Zeichenfolge zurück.",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "BC_QRCODE": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines QRCodes zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Fehlerkorrekturebene"
        },
        {
          "name": "Modell"
        },
        {
          "name": "Version"
        },
        {
          "name": "Maske"
        },
        {
          "name": "Verbindung"
        },
        {
          "name": "VerbindungsNr"
        },
        {
          "name": "Zeichencode"
        },
        {
          "name": "Zeichensatz"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_EAN13": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines EAN13 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "hinzufügen Auf"
        },
        {
          "name": "addOnLabelPosition"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_EAN8": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines EAN8 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_CODABAR": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines CODABAR zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "prüfziffer"
        },
        {
          "name": "nwVerhältnis"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_CODE39": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines CODE39 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "Beschriftung mit Start- und Stoppzeichen"
        },
        {
          "name": "prüfziffer"
        },
        {
          "name": "nwVerhältnis"
        },
        {
          "name": "vollständigASCII"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_CODE93": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines CODE93 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "prüfziffer"
        },
        {
          "name": "vollständigASCII"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_CODE128": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines CODE128 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "Codesatz"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_GS1_128": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines GS1_128 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_CODE49": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines CODE49 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Beschriftung anzeigen"
        },
        {
          "name": "Beschriftungsposition"
        },
        {
          "name": "Gruppierung"
        },
        {
          "name": "Gruppennummer"
        },
        {
          "name": "Schriftfamilie"
        },
        {
          "name": "Schriftart"
        },
        {
          "name": "Schriftstärke"
        },
        {
          "name": "Textdekoration"
        },
        {
          "name": "Textausrichtung"
        },
        {
          "name": "Schriftgröße"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_PDF417": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung eines PDF417 zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "Fehlerkorrekturebene"
        },
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten"
        },
        {
          "name": "kompakt"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "BC_DATAMATRIX": {
      "description": "Diese Funktion gibt einen Datensatz zur Darstellung einer DATAMATRIX zurück.",
      "parameters": [
        {
          "name": "Wert"
        },
        {
          "name": "Farbe"
        },
        {
          "name": "Hintergrundfarbe"
        },
        {
          "name": "eccMode"
        },
        {
          "name": "ecc200SymbolSize"
        },
        {
          "name": "ecc200EncodingMode"
        },
        {
          "name": "ecc00_140SymbolGröße"
        },
        {
          "name": "strukturierterAnhang"
        },
        {
          "name": "Strukturnummer"
        },
        {
          "name": "Dateikennung"
        },
        {
          "name": "ruhigeZoneLinks"
        },
        {
          "name": "ruhigeZoneRechts"
        },
        {
          "name": "ruhigeZoneTop"
        },
        {
          "name": "ruhigeZoneUnten"
        }
      ]
    },
    "FILTER": {
      "description": "Diese Funktion filtert einen Bereich oder ein Array.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "enthalten"
        },
        {
          "name": "wenn_leer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "RANDARRAY": {
      "description": "Diese Funktion gibt ein Array von Zufallszahlen zurück.",
      "parameters": [
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten"
        },
        {
          "name": "min"
        },
        {
          "name": "max"
        },
        {
          "name": "ganze_Zahl"
        }
      ]
    },
    "SEQUENCE": {
      "description": "Diese Funktion gibt eine Zahlenfolge zurück.",
      "parameters": [
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten"
        },
        {
          "name": "Start"
        },
        {
          "name": "Schritt"
        }
      ]
    },
    "SINGLE": {
      "description": "Diese Funktion gibt einen einzelnen Wert zurück, wenn ein Wert, ein Bereich oder ein Array angegeben wird.",
      "parameters": [
        {
          "name": "Wert"
        }
      ]
    },
    "SORT": {
      "description": "Diese Funktion sortiert einen Bereich oder ein Array.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Sortierungsindex"
        },
        {
          "name": "Sortierreihenfolge"
        },
        {
          "name": "von_col"
        }
      ]
    },
    "SORTBY": {
      "description": "Diese Funktion sortiert einen Bereich oder ein Array basierend auf den Werten in einem entsprechenden Bereich oder Array.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "von_array1"
        },
        {
          "name": "Sortierreihenfolge1"
        },
        {
          "name": "von_array2",
          "repeatable": "WAHR"
        },
        {
          "name": "Sortierreihenfolge2",
          "repeatable": "WAHR"
        }
      ]
    },
    "UNIQUE": {
      "description": "Diese Funktion gibt die eindeutigen Werte aus einem Bereich oder Array zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "von_col",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "genau_einmal",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "QUERY": {
      "description": "Diese Funktion gibt Daten aus Datenmanagertabellen in einem Arbeitsblatt zurück.",
      "parameters": [
        {
          "name": "TabelleUndZeilen"
        },
        {
          "name": "Spalten"
        },
        {
          "name": "Rückgabeobjekt"
        }
      ]
    },
    "LET": {
      "description": "Diese Funktion weist Berechnungsergebnissen Namen zu. Nützlich zum Speichern von Zwischenberechnungen und -werten durch Definieren von Namen innerhalb einer Formel. Diese Namen gelten nur im Rahmen der LET-Funktion.",
      "parameters": [
        {
          "name": "Name1"
        },
        {
          "name": "Name_Wert1"
        },
        {
          "name": "Name2",
          "repeatable": "WAHR"
        },
        {
          "name": "Name_Wert2",
          "repeatable": "WAHR"
        },
        {
          "name": "Berechnung"
        }
      ]
    },
    "IMAGE": {
      "description": "Diese Funktion gibt eine URL oder eine Base64-Zeichenfolge ein, um ein Bild in der Zelle anzuzeigen.",
      "parameters": [
        {
          "name": "Quelle"
        },
        {
          "name": "[alt_text]"
        },
        {
          "name": "[Größe]"
        },
        {
          "name": "[Höhe]"
        },
        {
          "name": "[Breite]"
        },
        {
          "name": "[ClipY]"
        },
        {
          "name": "[clipX]"
        },
        {
          "name": "[Cliphöhe]"
        },
        {
          "name": "[Clipbreite]"
        },
        {
          "name": "[vAusrichten]"
        },
        {
          "name": "[hAusrichten]"
        }
      ]
    },
    "GETPIVOTDATA": {
      "description": "Diese Funktion extrahiert in einer PivotTable gespeicherte Daten",
      "parameters": [
        {
          "name": "Datenfeld"
        },
        {
          "name": "Pivottabelle"
        },
        {
          "name": "Feld1, Element1",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "WEBSERVICE": {
      "description": "Diese Funktion gibt Daten von einem Webdienst zurück",
      "parameters": [
        {
          "name": "URL"
        }
      ]
    },
    "FILTERJSON": {
      "description": "Diese Funktion analysiert einen JSON-String in einen Skalarwert, ein Objekt oder ein Array von Objekten.",
      "parameters": [
        {
          "name": "json_zeichenfolge"
        }
      ]
    },
    "ASC": {
      "description": "Die ASC-Funktion ändert Zeichen mit voller Breite (Doppelbyte) in Zeichen mit halber Breite (Einzelbyte). Verwendung mit Doppelbyte-Zeichensätzen (DBCS).",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "DBCS": {
      "description": "Die DBCS-Funktion konvertiert Buchstaben halber Breite (Einzelbyte) innerhalb einer Zeichenfolge in Zeichen voller Breite (Doppelbyte).",
      "parameters": [
        {
          "name": "Text"
        }
      ]
    },
    "LAMBDA": {
      "description": "Erzeugt einen Funktionswert, der innerhalb von Formeln aufgerufen werden kann.",
      "parameters": [
        {
          "name": "Parameter_oder_Berechnung"
        },
        {
          "name": "Parameter_oder_Berechnung",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "MAP": {
      "description": "Gibt ein Array zurück, das gebildet wird, indem jeder Wert im Array bzw. den Arrays durch Anwenden eines LAMBDA zum Erstellen eines neuen Werts einem neuen Wert zugeordnet wird.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Lambda_oder_Array",
          "repeatable": "WAHR"
        }
      ]
    },
    "REDUCE": {
      "description": "Reduziert ein Array auf einen akkumulierten Wert, indem auf jeden Wert ein LAMBDA angewendet und der Gesamtwert im Akkumulator zurückgegeben wird.",
      "parameters": [
        {
          "name": "Init_Wert"
        },
        {
          "name": "Anordnung"
        },
        {
          "name": "Funktion"
        }
      ]
    },
    "SCAN": {
      "description": "Durchsucht ein Array, indem auf jeden Wert ein LAMBDA angewendet wird, und gibt ein Array zurück, das alle Zwischenwerte enthält.",
      "parameters": [
        {
          "name": "Init_Wert",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Anordnung"
        },
        {
          "name": "Funktion"
        }
      ]
    },
    "MAKEARRAY": {
      "description": "Gibt durch Anwenden eines LAMBDA ein berechnetes Array mit einer angegebenen Zeilen- und Spaltengröße zurück.",
      "parameters": [
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten"
        },
        {
          "name": "Funktion"
        }
      ]
    },
    "BYCOL": {
      "description": "Wendet auf jede Spalte ein LAMBDA an und gibt ein Array der Ergebnisse zurück. Wenn das ursprüngliche Array beispielsweise 3 Spalten mal 2 Zeilen umfasst, umfasst das zurückgegebene Array 3 Spalten mal 1 Zeile.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Funktion"
        }
      ]
    },
    "BYROW": {
      "description": "Wendet auf jede Zeile ein LAMBDA an und gibt ein Array der Ergebnisse zurück. Wenn das ursprüngliche Array beispielsweise 3 Spalten mal 2 Zeilen umfasst, umfasst das zurückgegebene Array 1 Spalte mal 2 Zeilen.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Funktion"
        }
      ]
    },
    "ISOMITTED": {
      "description": "Überprüft, ob der Wert in einem LAMBDA fehlt und gibt TRUE oder FALSE zurück.",
      "parameters": [
        {
          "name": "Argument"
        }
      ]
    },
    "TEXTBEFORE": {
      "description": "Gibt Text zurück, der vor einem bestimmten Zeichen oder einer bestimmten Zeichenfolge vorkommt.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Trennzeichen"
        },
        {
          "name": "Instanznummer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Match-Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "0",
              "description": "Groß-/Kleinschreibung beachten"
            },
            {
              "value": "1",
              "description": "Groß-/Kleinschreibung nicht beachten"
            }
          ]
        },
        {
          "name": "Match_Ende",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "wenn_nicht_gefunden",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "TEXTAFTER": {
      "description": "Gibt Text zurück, der nach dem angegebenen Zeichen oder der angegebenen Zeichenfolge auftritt.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Trennzeichen"
        },
        {
          "name": "Instanznummer",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Match-Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "0",
              "description": "Groß-/Kleinschreibung beachten"
            },
            {
              "value": "1",
              "description": "Groß-/Kleinschreibung nicht beachten"
            }
          ]
        },
        {
          "name": "Match_Ende",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "wenn_nicht_gefunden",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "TEXTSPLIT": {
      "description": "Teilt Textzeichenfolgen mithilfe von Spalten- und Zeilentrennzeichen auf.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "Spaltentrennzeichen"
        },
        {
          "name": "Zeilentrennzeichen",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "ignore_empty",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Match-Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "0",
              "description": "Groß-/Kleinschreibung beachten"
            },
            {
              "value": "1",
              "description": "Groß-/Kleinschreibung nicht beachten"
            }
          ]
        },
        {
          "name": "pad_mit",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SJS.REGEXEXTRACT": {
      "description": "Extrahiert passende Teilzeichenfolgen gemäß einem regulären Ausdruck.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "regulärer_Ausdruck"
        },
        {
          "name": "Modifikatoren",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SJS.REGEXMATCH": {
      "description": "Ob ein Textstück mit einem regulären Ausdruck übereinstimmt.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "regulärer_Ausdruck"
        },
        {
          "name": "Modifikatoren",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SJS.REGEXREPLACE": {
      "description": "Ersetzt einen Teil einer Textzeichenfolge mithilfe regulärer Ausdrücke durch eine andere Textzeichenfolge.",
      "parameters": [
        {
          "name": "Text"
        },
        {
          "name": "regulärer_Ausdruck"
        },
        {
          "name": "Ersatz"
        },
        {
          "name": "Modifikatoren",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "VSTACK": {
      "description": "Fügt Arrays vertikal und der Reihe nach an, um ein größeres Array zurückzugeben.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "HSTACK": {
      "description": "Fügt Arrays horizontal und der Reihe nach an, um ein größeres Array zurückzugeben.",
      "parameters": [
        {
          "name": "Array1"
        },
        {
          "name": "Array2",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "TOROW": {
      "description": "Gibt das Array in einer einzelnen Zeile zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "ignorieren",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "nach_Spalte_scannen",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "TOCOL": {
      "description": "Gibt das Array in einer einzelnen Spalte zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "ignorieren",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "nach_Spalte_scannen",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "WRAPROWS": {
      "description": "Umschließt die bereitgestellte Zeile oder Spalte mit Werten nach einer angegebenen Anzahl von Elementen zeilenweise, um ein neues Array zu bilden.",
      "parameters": [
        {
          "name": "Vektor"
        },
        {
          "name": "Anzahl der Wraps"
        },
        {
          "name": "pad_mit",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "WRAPCOLS": {
      "description": "Umschließt die angegebene Zeile oder Spalte mit Werten nach einer angegebenen Anzahl von Elementen spaltenweise, um ein neues Array zu bilden.",
      "parameters": [
        {
          "name": "Vektor"
        },
        {
          "name": "Anzahl der Wraps"
        },
        {
          "name": "pad_mit",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "TAKE": {
      "description": "Gibt eine angegebene Anzahl zusammenhängender Zeilen oder Spalten vom Anfang oder Ende eines Arrays zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "DROP": {
      "description": "Schließt eine angegebene Anzahl von Zeilen oder Spalten vom Anfang oder Ende eines Arrays aus.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "EXPAND": {
      "description": "Erweitert oder füllt ein Array auf die angegebene Zeilen- und Spaltengröße auf.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Reihen"
        },
        {
          "name": "Spalten",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "pad_mit",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "CHOOSEROWS": {
      "description": "Gibt die angegebenen Zeilen aus einem Array zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Zeile_Nummer1"
        },
        {
          "name": "Zeile_Nummer2",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "CHOOSECOLS": {
      "description": "Gibt die angegebenen Spalten aus einem Array zurück.",
      "parameters": [
        {
          "name": "Anordnung"
        },
        {
          "name": "Spaltennummer1"
        },
        {
          "name": "Spaltennummer2",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "SJS.UUID": {
      "description": "Gibt die zufällige UUID zurück.",
      "parameters": [
        {
          "name": "Nummer"
        }
      ]
    },
    "SJS.ENDWITH": {
      "description": "Gibt zurück, ob str1 mit str2 endet.",
      "parameters": [
        {
          "name": "innerhalb_text"
        },
        {
          "name": "Text finden"
        },
        {
          "name": "Match-Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "0",
              "description": "Groß-/Kleinschreibung beachten"
            },
            {
              "value": "1",
              "description": "Groß-/Kleinschreibung nicht beachten"
            }
          ]
        }
      ]
    },
    "SJS.STARTWITH": {
      "description": "Gibt zurück, ob die Zeichenfolge str1 mit str2 beginnt.",
      "parameters": [
        {
          "name": "innerhalb_text"
        },
        {
          "name": "Text finden"
        },
        {
          "name": "Match-Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR",
          "enum": [
            {
              "value": "0",
              "description": "Groß-/Kleinschreibung beachten"
            },
            {
              "value": "1",
              "description": "Groß-/Kleinschreibung nicht beachten"
            }
          ]
        }
      ]
    },
    "R.INDEX": {
      "description": "(ReportSheet-spezifisch) Gibt den Index der angegebenen Zelle in der übergeordneten gemessenen Erweiterung zurück.",
      "parameters": [
        {
          "name": "Referenz"
        },
        {
          "name": "Kontextreferenz",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "R.RANK": {
      "description": "(ReportSheet-spezifisch) Gibt den Rang der angegebenen Zelle im übergeordneten Knoten zurück.",
      "parameters": [
        {
          "name": "Referenz"
        },
        {
          "name": "Kontextreferenz",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Befehl",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Rang_Modus",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "SJS.FISCALYEAR": {
      "description": "Steuerjahr zurückgeben.",
      "parameters": [
        {
          "name": "Datum"
        },
        {
          "name": "Startmonat",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "R.R": {
      "description": "(ReportSheet-spezifisch) Relativer Offset entsprechend der angegebenen Zelle.",
      "parameters": [
        {
          "name": "Referenz"
        },
        {
          "name": "Ausgleich"
        }
      ]
    },
    "R.A": {
      "description": "(ReportSheet-spezifisch) Absoluter Offset basierend auf der angegebenen Zelle.",
      "parameters": [
        {
          "name": "Referenz"
        },
        {
          "name": "Ausgleich"
        }
      ]
    },
    "R.V": {
      "description": "(ReportSheet-spezifisch) Gibt die Daten der Zellbasis am angegebenen Offset oder Kontext zurück.",
      "parameters": [
        {
          "name": "Referenz"
        },
        {
          "name": "Offset | Kontextreferenz | \\\"AktuelleSeite\\",
          "repeatable": "WAHR",
          "optional": "WAHR"
        }
      ]
    },
    "R.CURRENTPAGE": {
      "description": "(ReportSheet Specific) Gibt die aktuelle Seitenzahl des Berichts zurück."
    },
    "R.PAGESCOUNT": {
      "description": "(ReportSheet-spezifisch) Gibt die Gesamtzahl der aktuellen Berichte zurück."
    },
    "R.PROPORTION": {
      "description": "(ReportSheet-spezifisch) Gibt den Prozentsatz der angegebenen Zelle in ihrem übergeordneten Knoten zurück.",
      "parameters": [
        {
          "name": "Wertreferenz"
        },
        {
          "name": "Kontextreferenz1",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Kontextreferenz2",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "R.CUMULATIVE": {
      "description": "(ReportSheet-spezifisch) Gibt den kumulierten Wert der aktuellen Zelle zurück.",
      "parameters": [
        {
          "name": "Wertreferenz"
        },
        {
          "name": "Kontextreferenz1",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Kontextreferenz2",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "R.MOM": {
      "description": "(ReportSheet-spezifisch) Gibt die Ringdaten der Zielzelle zurück.",
      "parameters": [
        {
          "name": "Wertreferenz"
        },
        {
          "name": "Kontextreferenz1",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        },
        {
          "name": "Kontextreferenz2",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    },
    "R.YOY": {
      "description": "(ReportSheet-spezifisch) Gibt die Jahresdaten der Zielzelle zurück.",
      "parameters": [
        {
          "name": "Wertreferenz"
        },
        {
          "name": "Kontextreferenz1"
        },
        {
          "name": "Kontextreferenz2",
          "repeatable": "FALSCH",
          "optional": "WAHR"
        }
      ]
    }
  },
  "TableFunctions": {
    "All": {
      "name": "#Alle",
      "description": "Gibt den gesamten Inhalt der Tabelle oder angegebene Tabellenspalten einschließlich Spaltenüberschriften, Daten und Zeilengesamtzahl zurück."
    },
    "Data": {
      "name": "#Daten",
      "description": "Gibt die Datenzellen der Tabelle oder angegebene Tabellenspalten zurück."
    },
    "Headers": {
      "name": "#Kopfzeilen",
      "description": "Gibt die Spaltenüberschriften für die Tabelle oder angegebene Tabellenspalten zurück."
    },
    "Totals": {
      "name": "#Summen",
      "description": "Gibt die Gesamtzahl der Zeilen für die Tabelle oder angegebene Tabellenspalten zurück."
    },
    "thisRow": {
      "name": "#Diese Zeile",
      "description": "Diese Reihe."
    }
  }
}

exports.data = custom_resource;