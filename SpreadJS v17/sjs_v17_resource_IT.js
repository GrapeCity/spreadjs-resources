var custom_resource = {
  "Common": {
    "Exp_InvalidDateFormat": "Modello di formato data non valido",
    "Exp_InvalidExponentFormat": "formato esponente non valido",
    "Exp_InvalidSemicolons": "formato non valido: troppi punti e virgola",
    "Exp_InvalidNumberGroupSize": "NumberGroupSize deve essere compreso tra 1 e 9, ad eccezione dell'ultimo elemento, che può essere zero.",
    "Exp_BadFormatSpecifier": "Specificatore di formato non valido",
    "Exp_InvalidNumberFormat": "Modello di formato numerico non valido",
    "Exp_InvalidCast": "Eccezione CastInvalida",
    "Exp_Separator": "numberDecimalSeparator, listSeparator e arrayListSeparator dovrebbero essere diversi nelle informazioni sulla cultura.",
    "Exp_TokenIsNull": "il token è nullo",
    "Exp_InvalidBackslash": "il '\\\\' non può essere valutato",
    "Exp_FormatIllegal": "il formato è illegale.",
    "Exp_ValueIsNull": "il valore è nullo",
    "Exp_DuplicatedDescriptor": "È stato aggiunto il tipo di descrittore.",
    "Exp_TokenIllegal": "il token è illegale.",
    "Exp_ValueIllegal": "il valore è illegale."
  },
  "CalcEngine": {
    "Exp_InvalidCast": "Eccezione di cast non valida",
    "Exp_FormulaInvalidChar": "La formula contiene un carattere non valido: '{0}' all'indice su {1}",
    "Exp_FormulaInvalid": "Formula non valida",
    "Exp_InvalidFunctionName": "Nome funzione non valido",
    "Exp_InvalidOverrideFunction": "Impossibile sovrascrivere la funzione integrata",
    "Exp_InvalidArray": "Matrice non valida",
    "Exp_OverrideNotAllowed": "Tentativo di sovrascrivere la funzione mentre la sovrascrittura non è consentita",
    "Exp_NoSyntax": "Nessuna sintassi '{0}' per corrispondere alla sintassi '{1}'.",
    "Exp_IsValid": "'{0}' non è valido.",
    "Exp_InvalidParameters": "Parametro di funzione non valido in {0}.",
    "Exp_InvalidArrayColumns": "La lunghezza delle colonne dell'array non è uguale in {0}.",
    "Exp_ExprIsNull": "L'argomento 'expr' è nullo",
    "Exp_InvalidOperation": "Eccezione operazione non valida",
    "Exp_ArgumentNull": "Eccezione argomento nullo",
    "Exp_CriteriaIsNull": "Il criterio è nullo",
    "Exp_Format": "Formato",
    "Exp_ArrayFormulaPart": "Impossibile modificare parte di un array.",
    "Exp_NotSupported": "Eccezione non supportata",
    "Exp_DuplicatedChar": "Carattere duplicato",
    "Exp_ArgumentOutOfRangeException": "Eccezione argomento fuori intervallo",
    "Exp_ArgumentException": "Eccezione argomento",
    "Fbx_Summary": "Riepilogo",
    "Fbx_TableName_Description": "Nome della tabella per",
    "Fbx_TableSheetName_Description": "Nome del foglio di tabella per",
    "Fbx_CustomName_Description": "Nome personalizzato per"
  },
  "DataManager": {
    "zve": {
      "WINDOW": {
        "description": "(Specifico di TableSheet) Determina le righe come finestra mediante partizionamento e ordinamento per applicare la funzione finestra.",
        "parameters": [
          {
            "name": "funzione_finestra"
          },
          {
            "name": "partizione_per",
            "optional": "VERO"
          },
          {
            "name": "ordina_per",
            "optional": "VERO"
          },
          {
            "name": "frame_rows\\\\intervallo\\\\gruppi",
            "optional": "VERO"
          }
        ]
      },
      "WINDOWDEF": {
        "description": "(Specifico di TableSheet) Definisci una scorciatoia che consenta il riutilizzo da parte della funzione WINDOW.",
        "parameters": [
          {
            "name": "partizione_per",
            "optional": "VERO"
          },
          {
            "name": "ordina_per",
            "optional": "VERO"
          },
          {
            "name": "frame_rows\\\\intervallo\\\\gruppi",
            "optional": "VERO"
          }
        ]
      },
      "PARTITIONBY": {
        "description": "(Specifico di TableSheet) Divide le righe in partizioni.",
        "parameters": [
          {
            "name": "funzione_campo",
            "optional": "falso",
            "repeatable": "VERO"
          }
        ]
      },
      "ORDERBY": {
        "description": "(Specifico di TableSheet) Definisce l'ordine logico in ogni partizione.",
        "parameters": [
          {
            "name": "funzione_campo",
            "optional": "falso",
            "repeatable": "VERO"
          }
        ]
      },
      "ORDERASC": {
        "description": "(Specifico di TableSheet) Specifica l'ordine crescente per il campo specificato.",
        "parameters": [
          {
            "name": "funzione_campo"
          }
        ]
      },
      "ORDERDESC": {
        "description": "(Specifico di TableSheet) Specifica l'ordine decrescente per il campo specificato.",
        "parameters": [
          {
            "name": "funzione_campo"
          }
        ]
      },
      "FRAMEROWS": {
        "description": "(Specifico di TableSheet) Limita il set di righe della finestra specificando le righe iniziali o finali rispetto alla riga corrente.",
        "parameters": [
          {
            "name": "funzione_iniziale",
            "optional": "falso",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica il limite superiore della partizione."
              },
              {
                "value": "[@]",
                "description": "Indica la riga o il valore corrente."
              },
              {
                "value": "[@-N]",
                "description": "Indica l'n precedente del corrente, se l'ordine è crescente."
              },
              {
                "value": "[@+n]",
                "description": "Indica l'n precedente alla corrente, se l'ordine è decrescente."
              }
            ]
          },
          {
            "name": "funzione_finale",
            "optional": "VERO",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica il seguito inferiore della partizione."
              },
              {
                "value": "[@]",
                "description": "Indica la riga o il valore corrente."
              },
              {
                "value": "[@+n]",
                "description": "Indica l'n successivo della corrente, se l'ordine è ascendente."
              },
              {
                "value": "[@-N]",
                "description": "Indica l'n seguente della corrente, se l'ordine è decrescente."
              }
            ]
          },
          {
            "name": "modalità_escludi",
            "optional": "VERO",
            "repeatable": "falso",
            "enum": [
              {
                "value": "0",
                "description": "Questo è il caso predefinito, nessuna riga viene esclusa."
              },
              {
                "value": "1",
                "description": "La riga corrente viene esclusa, gli altri peer della riga corrente rimangono."
              },
              {
                "value": "2",
                "description": "La riga corrente e i peer sono tutti esclusi."
              },
              {
                "value": "3",
                "description": "La riga corrente rimane, gli altri peer sono esclusi."
              }
            ]
          }
        ]
      },
      "FRAMERANGE": {
        "description": "(Specifico di TableSheet) Limita il set di righe della finestra specificando l'intervallo iniziale o finale rispetto al valore nella riga corrente.",
        "parameters": [
          {
            "name": "funzione_iniziale",
            "optional": "falso",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica il limite superiore della partizione."
              },
              {
                "value": "[@]",
                "description": "Indica la riga o il valore corrente."
              },
              {
                "value": "[@-N]",
                "description": "Indica l'n precedente del corrente, se l'ordine è crescente."
              },
              {
                "value": "[@+n]",
                "description": "Indica l'n precedente alla corrente, se l'ordine è decrescente."
              }
            ]
          },
          {
            "name": "funzione_finale",
            "optional": "VERO",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica il seguito inferiore della partizione."
              },
              {
                "value": "[@]",
                "description": "Indica la riga o il valore corrente."
              },
              {
                "value": "[@+n]",
                "description": "Indica l'n successivo della corrente, se l'ordine è ascendente."
              },
              {
                "value": "[@-N]",
                "description": "Indica l'n seguente della corrente, se l'ordine è decrescente."
              }
            ]
          },
          {
            "name": "modalità_escludi",
            "optional": "VERO",
            "repeatable": "falso",
            "enum": [
              {
                "value": "0",
                "description": "Questo è il caso predefinito, nessuna riga viene esclusa."
              },
              {
                "value": "1",
                "description": "La riga corrente viene esclusa, gli altri peer della riga corrente rimangono."
              },
              {
                "value": "2",
                "description": "La riga corrente e i peer sono tutti esclusi."
              },
              {
                "value": "3",
                "description": "La riga corrente rimane, gli altri peer sono esclusi."
              }
            ]
          }
        ]
      },
      "FRAMEGROUPS": {
        "description": "(Specifico di TableSheet) Limita il set di righe della finestra specificando l'intervallo iniziale o finale rispetto al conteggio dei \\\"gruppi\\\" relativi al gruppo corrente.",
        "parameters": [
          {
            "name": "funzione_iniziale",
            "optional": "falso",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica il limite superiore della partizione."
              },
              {
                "value": "[@]",
                "description": "Indica la riga o il valore corrente."
              },
              {
                "value": "[@-N]",
                "description": "Indica l'n precedente del corrente, se l'ordine è crescente."
              },
              {
                "value": "[@+n]",
                "description": "Indica l'n precedente alla corrente, se l'ordine è decrescente."
              }
            ]
          },
          {
            "name": "funzione_finale",
            "optional": "VERO",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica il seguito inferiore della partizione."
              },
              {
                "value": "[@]",
                "description": "Indica la riga o il valore corrente."
              },
              {
                "value": "[@+n]",
                "description": "Indica l'n successivo della corrente, se l'ordine è ascendente."
              },
              {
                "value": "[@-N]",
                "description": "Indica l'n seguente della corrente, se l'ordine è decrescente."
              }
            ]
          },
          {
            "name": "modalità_escludi",
            "optional": "VERO",
            "repeatable": "falso",
            "enum": [
              {
                "value": "0",
                "description": "Questo è il caso predefinito, nessuna riga viene esclusa."
              },
              {
                "value": "1",
                "description": "La riga corrente viene esclusa, gli altri peer della riga corrente rimangono."
              },
              {
                "value": "2",
                "description": "La riga corrente e i peer sono tutti esclusi."
              },
              {
                "value": "3",
                "description": "La riga corrente rimane, gli altri peer sono esclusi."
              }
            ]
          }
        ]
      },
      "CUMEDIST": {
        "description": "(Specifico di TableSheet) La distribuzione cumulativa di un valore all'interno di un gruppo di valori."
      },
      "W_PERCENTRANK": {
        "description": "(Specifico di TableSheet) Calcola la percentuale del rango relativo di una riga all'interno di una partizione di righe."
      },
      "ROWNUMBER": {
        "description": "(Specifico di TableSheet) Restituisce il numero della riga corrente all'interno della sua partizione."
      },
      "W_RANK": {
        "description": "(Specifico di TableSheet) Restituisce il rango di ogni riga all'interno della partizione di un set di risultati."
      },
      "DENSERANK": {
        "description": "(Specifico di TableSheet) Restituisce il rango della riga corrente all'interno della sua partizione, senza spazi vuoti."
      },
      "LEAD": {
        "description": "(Specifico di TableSheet) Fornisce l'accesso al valore da una riga a un dato offset fisico che segue la riga corrente.",
        "parameters": [
          {
            "name": "funzione_valore"
          },
          {
            "name": "offset",
            "optional": "VERO"
          },
          {
            "name": "valore_predefinito",
            "optional": "VERO"
          }
        ]
      },
      "LAG": {
        "description": "(Specifico di TableSheet) Fornisce l'accesso al valore da una riga a un dato offset fisico precedente alla riga corrente.",
        "parameters": [
          {
            "name": "funzione_valore"
          },
          {
            "name": "offset",
            "optional": "VERO"
          },
          {
            "name": "valore_predefinito",
            "optional": "VERO"
          }
        ]
      },
      "NTILE": {
        "description": "(Specifico di TableSheet) Divide una partizione in N bucket, assegnando a ogni riga il suo numero di bucket.",
        "parameters": [
          {
            "name": "N"
          }
        ]
      },
      "FIRSTVALUE": {
        "description": "(Specifico di TableSheet) Accesso al valore dalla prima riga all'interno della cornice della finestra.",
        "parameters": [
          {
            "name": "funzione_valore"
          }
        ]
      },
      "LASTVALUE": {
        "description": "(Specifico di TableSheet) Accesso al valore dall'ultima riga all'interno della cornice della finestra.",
        "parameters": [
          {
            "name": "funzione_valore"
          }
        ]
      },
      "NTHVALUE": {
        "description": "(Specifico di TableSheet) Accesso al valore dalla riga n-esima all'interno della cornice della finestra.",
        "parameters": [
          {
            "name": "funzione_valore"
          },
          {
            "name": "N"
          }
        ]
      },
      "CALCULATE": {
        "description": "(Specifico del raggruppamento TableSheet) Espandi il contesto del gruppo per la formula.",
        "parameters": [
          {
            "name": "formula"
          },
          {
            "name": "funzione_rimuovi_filtri"
          }
        ]
      },
      "REMOVEFILTERS": {
        "description": "(Specifico del raggruppamento TableSheet) Seleziona il contesto del livello di gruppo superiore.",
        "parameters": [
          {
            "name": "funzione_campo_gruppo",
            "optional": "VERO",
            "repeatable": "VERO"
          }
        ]
      },
      "CHILDREN": {
        "description": "(Specifico della gerarchia di TableSheet) Recupera il valore dei figli che si trovano a un certo offset dal padre.",
        "parameters": [
          {
            "name": "offset_livello"
          },
          {
            "name": "funzione_campo"
          }
        ]
      },
      "ONLYCHILDREN": {
        "description": "(Specifico della gerarchia di TableSheet) Recupera il valore dei figli che non sono il padre.",
        "parameters": [
          {
            "name": "funzione_campo"
          }
        ]
      },
      "PARENT": {
        "description": "(Specifico della gerarchia di TableSheet) Recupera il valore del padre che si trova a un certo offset dal valore corrente.",
        "parameters": [
          {
            "name": "offset_livello"
          },
          {
            "name": "funzione_campo"
          }
        ]
      },
      "LEVEL": {
        "description": "(Specifico della gerarchia di TableSheet) Recupera il livello della corrente."
      },
      "LEVELROWNUMBER": {
        "description": "(Specifico della gerarchia TableSheet) Recupera il numero di riga dell'oggetto corrente sotto il suo padre."
      }
    }
  },
  "Sheets": {
    "Exp_NotSupported": "Eccezione non supportata",
    "Exp_PasteExtentIsNull": "pasteExtent è nullo",
    "Exp_InvalidPastedArea": "L'area incollata deve avere le stesse dimensioni dell'area copiata o tagliata.",
    "Exp_MultipleSelections": "Questa azione non funziona con selezioni multiple.",
    "Exp_ChangePartOfArray": "Impossibile modificare parte di un array.",
    "Exp_InvalidAndSpace": "{0} non valido: {1} (deve essere compreso tra {2} e {3}).",
    "Exp_SrcIsNull": "L'argomento 'src' è nullo",
    "Exp_DestIsNull": "L'argomento 'dest' è nullo",
    "Exp_InvalidCustomFunction": "funzione personalizzata non valida",
    "Exp_InvalidCustomName": "nome personalizzato non valido",
    "Exp_CustomNameBothInUse": "Sia il nome corrente che il nuovo nome sono referenziati nelle formule delle celle",
    "Exp_IndexOutOfRange": "L'indice è fuori portata!",
    "Exp_InvalidRange": "Intervallo non valido",
    "Exp_NotAFunction": "Non una funzione",
    "Exp_ArgumentOutOfRange": "ArgomentoFuoriIntervallo",
    "Exp_PasteSourceCellsLocked": "Le celle del foglio sorgente sono bloccate.",
    "Exp_InvalidCopyPasteSize": "Le aree copia e incolla non hanno le stesse dimensioni.",
    "Exp_PasteDestinationCellsLocked": "La cella che stai tentando di modificare è protetta e pertanto di sola lettura.",
    "Exp_PasteChangeMergeCell": "Impossibile modificare parte di una cella unita.",
    "Tip_Row": "Riga: ",
    "Tip_Column": "Colonna: ",
    "Tip_Column_Offset": "Spostamento: ",
    "Tip_Height": "Altezza: {0} pixel",
    "Tip_Width": "Larghezza: {0} pixel",
    "NewTab": "Nuovo...",
    "Exp_EmptyNamedStyle": "Il nome dello stile denominato non può essere vuoto o nullo",
    "Exp_SheetNameInvalid": "Il nome del foglio non può essere vuoto o contenere i seguenti caratteri: *, :, [, ], ?, \\\\, /",
    "Exp_SheetNameConflict": "Quel nome è già stato preso. Provane uno diverso.",
    "Exp_ArrayFormulaSpan": "Le formule di matrice non sono valide nelle celle unite.",
    "Exp_DestSheetIsNull": "destSheet è nullo",
    "Exp_SheetIsNull": "il foglio è nullo.",
    "Exp_OverlappingSpans": "Questa operazione causerà la sovrapposizione degli intervalli.",
    "NeedCanvasSupport": "Per eseguire SpreadJS è necessario un browser che supporti pienamente HTML5 Canvas",
    "ARIA_Resize": "ridimensionare",
    "ARIA_First": "Primo",
    "ARIA_PreviousArrow": "freccia precedente",
    "ARIA_NextArrow": "freccia successiva",
    "ARIA_Last": "scorso",
    "ARIA_PreviousButton": "pulsante precedente",
    "ARIA_NextButton": "pulsante successivo",
    "ARIA_SheetTab": "scheda foglio",
    "ARIA_NewSheet": "nuovo foglio",
    "ARIA_Blank": "vuoto",
    "ARIA_Scrollbar_Left_Button": "pulsante sinistro della barra di scorrimento",
    "ARIA_Scrollbar_Top_Button": "pulsante superiore della barra di scorrimento",
    "ARIA_Scrollbar_Thumb_Button": "pulsante del pollice della barra di scorrimento",
    "ARIA_Scrollbar_Right_Button": "pulsante destro della barra di scorrimento",
    "ARIA_Scrollbar_Bottom_Button": "pulsante inferiore della barra di scorrimento",
    "ARIA_Scrollbar_TRACK_Button": "pulsante traccia barra di scorrimento",
    "ARIA_Cell": "cella",
    "ARIA_HasValue": "ha valore {0}",
    "ARIA_HasFormula": "ha la formula {0}",
    "ARIA_HasCheckbox": "ha la casella di controllo {0}",
    "ARIA_HasButton": "ha il pulsante {0}",
    "ARIA_HasHyperlink": "ha collegamento ipertestuale {0}",
    "ARIA_HasComment": "ha un commento {0}",
    "ARIA_RowHeader": "intestazione di riga",
    "ARIA_ColumnHeader": "intestazione di colonna",
    "SHEET_NAME": "Foglio",
    "REPORT_SUMMARY": "Somma",
    "Exp_InsertCopiedCutCells": "Questa selezione non è valida. L'area copia/incolla deve avere le stesse dimensioni",
    "Exp_InsertCopiedCutCellsOnSpanTable": "Questo non funzionerà perché sposterebbe le celle in una tabella del foglio di lavoro o farebbe sì che alcune celle unite venissero disunite.",
    "Exp_InsertCopiedCutCellsNoRange": "Non è possibile inserire nuove celle perché ci sono celle non vuote che si estenderebbero oltre il foglio di lavoro.",
    "Exp_InsertCopiedCutCellsOverlap": "Questa selezione non è valida. Assicurati che le aree di copia e incolla non si sovrappongano, a meno che non siano della stessa dimensione e forma.",
    "Exp_InsertCopiedCutCellsAffectTable": "Non è possibile riorganizzare le celle all'interno di una tabella in questo modo, perché ciò potrebbe avere effetti inaspettati sulle altre celle della tabella.",
    "Exp_InvalidSortArrayFormulaInRange": "Impossibile ordinare l'intervallo corrente poiché esiste una formula di matrice.",
    "Exp_InvalidSortSpanInRange": "Impossibile ordinare l'intervallo corrente poiché esiste uno span.",
    "Exp_InvalidSortPartTableOrMultiTableInRange": "Impossibile ordinare l'intervallo corrente come tabella parziale oppure esistono più tabelle.",
    "Exp_InvalidOperationInProtect": "La cella o il grafico che stai cercando di modificare si trova su un foglio protetto. Per apportare una modifica, rimuovi la protezione dal foglio.",
    "EXP_IO": "Eccezione di lettura e scrittura del file.",
    "EXP_FILE_FORMAT": "Formato file non corretto.",
    "EXP_NO_PASSWORD": "Impossibile aprire il file Excel perché la cartella di lavoro/il foglio di lavoro è protetto da password.",
    "EXP_INVALID_PASSWORD": "La password specificata non è corretta.",
    "NORMAL": "Normale",
    "GENERAL": "Generale",
    "EXP_UNSUPPORT_CRYPTO_ALGORITHM": "Algoritmi crittografici non supportati",
    "Exp_InvalidOperationSizeLimitExceeded": "La dimensione del file supera il limite massimo impostato.",
    "STEP": {
      "start": "avvia caricamento {0}",
      "loadFileData": "carica i dati di {0} per diffonderli",
      "loadSheetData": "carica i dati di {0}",
      "startCalc": "avvia ricalcolo",
      "loadSheetFormula": "carica la formula di {0}",
      "parseFile": "analizzare il contenuto di {0}"
    },
    "pasteSpecialOptionDialog": {
      "title": "Incolla speciale",
      "paste": "Impasto",
      "pasteOptions": {
        "all": "Tutto",
        "formulas": "Formule",
        "values": "Valori",
        "formats": "Formati",
        "comments": "Commenti",
        "validation": "Convalida",
        "usingSourceTheme": "Tutti utilizzano il tema Source",
        "noBorders": "Tutti tranne i confini",
        "columnWidth": "Larghezze delle colonne",
        "formulasAndNumberFormats": "Formule e formati numerici",
        "valueAndNumberFormats": "Formati di valori e numeri"
      },
      "operation": "Operazione",
      "operationOptions": {
        "none": "Nessuno",
        "add": "Aggiungere",
        "subtract": "Sottrarre",
        "multiply": "Moltiplicare",
        "divide": "Dividere"
      },
      "skipBlanks": "Salta gli spazi vuoti",
      "transpose": "Trasporre",
      "pasteLink": "Incolla collegamento"
    },
    "ok": "OK",
    "cancel": "Cancellare",
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
    "Exp_NotSupportedDataSource": "L'origine dati non è supportata!"
  },
  "Outlines": {
    "Exp_InvalidIndex": "Indice non valido",
    "Exp_InvalidCount": "Conteggio non valido",
    "Exp_InvalidLevel": "Livello non valido",
    "Exp_GroupInfoIsNull": "groupInfo è nullo",
    "Exp_GROUP_PROTECTED": "Non puoi usare questo comando su un foglio protetto. Per usare questo comando, devi prima rimuovere la protezione dal foglio."
  },
  "ConditionalFormatting": {
    "Exp_RuleIsNull": "L'argomento 'regola' è nullo",
    "Exp_NotSupported": "Eccezione non supportata"
  },
  "Touch": {
    "ToolStrip_PasteText": "Impasto",
    "ToolStrip_CutText": "Taglio",
    "ToolStrip_CopyText": "Copia",
    "ToolStrip_AutoFillText": "Riempimento automatico"
  },
  "FloatingObjects": {
    "Exp_FloatingObjectHasSameNameError": "Il foglio di lavoro corrente contiene già un oggetto mobile con lo stesso nome.",
    "Exp_FloatingObjectNameEmptyError": "L'oggetto mobile deve avere un nome"
  },
  "CellTypes": {
    "OK": "OK",
    "Cancel": "Cancellare",
    "Calendar_ShortWeeks_1": "LUI",
    "Calendar_ShortWeeks_2": "MAR",
    "Calendar_ShortWeeks_3": "MER",
    "Calendar_ShortWeeks_4": "GIO",
    "Calendar_ShortWeeks_5": "VEN",
    "Calendar_ShortWeeks_6": "SAB",
    "Calendar_ShortWeeks_7": "SOLE",
    "Calendar_Weeks_1": "Lunedi",
    "Calendar_Weeks_2": "Martedì",
    "Calendar_Weeks_3": "Mercoledì",
    "Calendar_Weeks_4": "Giovedì",
    "Calendar_Weeks_5": "Venerdì",
    "Calendar_Weeks_6": "Sabato",
    "Calendar_Weeks_7": "Domenica",
    "Calendar_ShortMonths_1": "GENNAIO",
    "Calendar_ShortMonths_2": "FEBBRAIO",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "TAN",
    "Calendar_ShortMonths_5": "MAGGIO",
    "Calendar_ShortMonths_6": "GIU",
    "Calendar_ShortMonths_7": "LUGLIO",
    "Calendar_ShortMonths_8": "AGOSTO",
    "Calendar_ShortMonths_9": "SETTEMBRE",
    "Calendar_ShortMonths_10": "OTT",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DICEMBRE",
    "Calendar_Months_1": "GENNAIO",
    "Calendar_Months_2": "FEBBRAIO",
    "Calendar_Months_3": "MARZO",
    "Calendar_Months_4": "APRILE",
    "Calendar_Months_5": "MAGGIO",
    "Calendar_Months_6": "GIUGNO",
    "Calendar_Months_7": "LUGLIO",
    "Calendar_Months_8": "AGOSTO",
    "Calendar_Months_9": "SETTEMBRE",
    "Calendar_Months_10": "OTTOBRE",
    "Calendar_Months_11": "NOVEMBRE",
    "Calendar_Months_12": "DICEMBRE",
    "Calendar_Time_AM": "SONO",
    "Calendar_Time_PM": "Primo Ministro",
    "Calendar_EraName_1": "M",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_Today": "Oggi",
    "Calendar_BuiltIn_Today": "Oggi",
    "Calendar_BuiltIn_Yesterday": "Ieri",
    "Calendar_BuiltIn_Last7Days": "Ultimi 7 giorni",
    "Calendar_BuiltIn_ThisMonth": "Questo mese",
    "Calendar_BuiltIn_LastMonth": "Il mese scorso",
    "Calendar_LastMonth": "Vai al mese precedente",
    "Calendar_NextMonth": "Vai al mese prossimo",
    "Calendar_LastYear": "Vai all'anno precedente",
    "Calendar_NextYear": "Vai all'anno prossimo",
    "Calendar_LastTenYear": "Vai ai dieci anni precedenti",
    "Calendar_NextTenYear": "Vai ai prossimi dieci anni",
    "Quarter_Format_1": "Q1",
    "Quarter_Format_2": "Q2",
    "Quarter_Format_3": "Q3",
    "Quarter_Format_4": "Q4",
    "ThemeColor": "Colori del tema",
    "StandardColor": "Colori standard",
    "Calculator_DivideByZeroInfo": "Impossibile dividere per zero.",
    "Calculator_InvalidInputInfo": "Input non valido.",
    "Calculator_SqrtParameterException": "Input non valido per la funzione.",
    "Calculator_OverFlowInfo": "L'operazione aritmetica ha causato un overflow.",
    "MultiColumn_InvalidDataSource": "Origine dati non valida. La formula dovrebbe restituire un array.",
    "DataObject_MeetLock": "Impossibile inserire i dati perché c'è una cella bloccata.",
    "DataObject_MeetSpan": "Impossibile inserire i dati perché c'è una cella unita.",
    "DataObject_MeetTable": "Impossibile inserire i dati perché una tabella ostacola l'inserimento.",
    "FileUpload_Title": "+ Carica"
  },
  "Filter": {
    "Exp_InvalidColumnIndex": "Indice di colonna non valido.",
    "SortAscending": "Ordina in ordine crescente",
    "SortDescending": "Ordina in ordine decrescente",
    "OK": "OK",
    "Cancel": "Cancellare",
    "Search": "Ricerca",
    "CheckAll": "Seleziona tutto",
    "UncheckAll": "Deseleziona tutto",
    "Blanks": "(Spazi vuoti)",
    "Exp_FilterItemIsNull": "FilterItem è nullo.",
    "Show": "Spettacolo",
    "ShowRows": "Mostra righe in cui:",
    "And": "E",
    "Or": "O",
    "SortColor": "Ordina per colore",
    "FilterColor": "Filtra per colore",
    "FilterCellTitle": "Filtra per colore cella",
    "FilterFontTitle": "Filtra per colore del carattere",
    "SortCellTitle": "Ordina per colore cella",
    "SortFontTitle": "Ordina per colore del carattere",
    "FontColor": "Altri colori dei caratteri...",
    "CellColor": "Altri colori delle celle...",
    "NoFill": "Nessun riempimento",
    "Automatic": "Automatico",
    "Clear": "Cancella filtro da {0}",
    "TextFilter": "Filtri di testo",
    "DateFilter": "Filtri data",
    "NumberFilter": "Filtri numerici",
    "Custom": "Filtro personalizzato...",
    "Equal": "Uguale a...",
    "NotEqual": "Non è uguale a...",
    "GreaterThan": "Più grande di...",
    "GreaterOrEquals": "Maggiore o uguale a...",
    "LessThan": "Meno di...",
    "LessThanOrEquals": "Minore o uguale a...",
    "Between": "Fra...",
    "Top10": "I primi 10...",
    "AboveAverage": "Sopra la media",
    "BelowAverage": "Sotto la media",
    "Begin": "Inizia con...",
    "End": "Termina con...",
    "Contain": "Contiene...",
    "NotContain": "Non contiene...",
    "Before": "Prima...",
    "After": "Dopo...",
    "Tomorrow": "Domani",
    "Today": "Oggi",
    "Yesterday": "Ieri",
    "NextWeek": "La prossima settimana",
    "ThisWeek": "Questa settimana",
    "LastWeek": "La settimana scorsa",
    "NextMonth": "Il mese prossimo",
    "ThisMonth": "Questo mese",
    "LastMonth": "Il mese scorso",
    "NextQuarter": "Prossimo trimestre",
    "ThisQuarter": "Questo trimestre",
    "LastQuarter": "Ultimo trimestre",
    "NextYear": "L'anno prossimo",
    "ThisYear": "Quest'anno",
    "LastYear": "L'anno scorso",
    "YearToDate": "Da inizio anno",
    "AllDates": "Tutte le date nel periodo",
    "Top10Filter": "Top 10 Filtri automatici",
    "CustomTitle": "Filtro automatico personalizzato",
    "ColorTitle": "Colori delle celle disponibili",
    "top": "superiore",
    "bottom": "metter il fondo a",
    "SortCell": "Seleziona un colore della cella in base al quale ordinare:",
    "SortFont": "Seleziona un colore del carattere per ordinare:",
    "FilterCell": "Seleziona un colore della cella per filtrare:",
    "FilterFont": "Seleziona un colore del carattere per filtrare:",
    "Selected": "Selezionato:",
    "IsEquals": "uguale",
    "NotEquals": "non è uguale",
    "IsGreaterThan": "è maggiore di",
    "IsGreaterOrEqual": "è maggiore o uguale a",
    "IsLess": "è minore di",
    "LessOrEqual": "è minore o uguale a",
    "IsBeginWith": "inizia con",
    "NotBeginWith": "non inizia con",
    "IsEndWith": "finisce con",
    "NotEndWith": "non finisce con",
    "IsContain": "contiene",
    "NotContains": "non contiene",
    "IsAfter": "è dopo",
    "AfterOrEqual": "è dopo o uguale a",
    "IsBefore": "è prima",
    "BeforeOrEqual": "è prima o uguale a",
    "Q1": "Quarto 1",
    "Q2": "Quarto 2",
    "Q3": "Trimestre 3",
    "Q4": "Quarto quarto",
    "Jan": "Gennaio",
    "Feb": "Febbraio",
    "Mar": "Marzo",
    "Apr": "Aprile",
    "May": "Maggio",
    "Jun": "Giugno",
    "Jul": "Luglio",
    "Aug": "Agosto",
    "Sep": "Settembre",
    "Oct": "Ottobre",
    "Nov": "Novembre",
    "Dec": "Dicembre",
    "Explain1": "Usa ? per rappresentare qualsiasi singolo carattere",
    "Explain2": "Usa * per rappresentare qualsiasi serie di caratteri",
    "Year": "",
    "Day": "",
    "add_current_filter": "Aggiungi la selezione corrente al filtro",
    "invalidCondition": "Errore nella riga di analisi"
  },
  "Tables": {
    "Exp_DragDropShiftTableCell": "Questa operazione non è consentita. L'operazione sta tentando di spostare celle in una tabella sul tuo foglio di lavoro.",
    "Exp_DragDropChangePartOfTable": "Impossibile completare l'operazione: si sta tentando di modificare una parte di una riga o di una colonna della tabella in un modo non consentito.",
    "Exp_TableEmptyNameError": "Il nome della tabella non può essere vuoto.",
    "Exp_TableNameInvalid": "Il nome della tabella non è valido.",
    "Exp_TableInvalidRow": "Indice di riga o conteggio di riga non valido.",
    "Exp_TableInvalidColumn": "Indice di colonna o conteggio di colonne non valido.",
    "Exp_TableIntersectError": "Le tabelle non possono essere intersecate.",
    "Exp_TableHasSameNameError": "Il foglio di lavoro corrente esiste già in una tabella con lo stesso nome.",
    "Exp_TableRangeHasFilterError": "L'intervallo della tabella corrente contiene un intervallo di filtri.",
    "Exp_TableDataSourceNullError": "L'origine dati della tabella non può essere null.",
    "Exp_TableMoveOutOfRange": "La tabella non può essere spostata fuori dal foglio.",
    "Exp_TableResizeOutOfRange": "Il conteggio delle righe e delle colonne non validi e la tabella non possono essere ridimensionati e spostati dal foglio.",
    "Exp_ArrayFormulaTable": "le formule di matrice multi-cella non sono consentite nelle tabelle.",
    "Exp_TableResizeInvalidRange": "Le intestazioni devono rimanere nella stessa riga e l'intervallo della tabella risultante deve sovrapporsi all'intervallo della tabella originale.",
    "Exp_TableResizeToSpan": "Impossibile completare l'operazione: una tabella non può sovrapporsi a un'altra tabella o a celle unite.",
    "Exp_TableResizeWithFilter": "Impossibile spostare celle in un intervallo filtrato o in una tabella.",
    "Exp_TableResizeWithHidden": "Impossibile ridimensionare una tabella adiacente a una riga o colonna nascosta.",
    "Exp_TableResizeToTable": "Impossibile completare l'operazione: non sono consentite operazioni che includono celle sia all'interno che all'esterno di un intervallo di tabella e operazioni che interessano celle che si sovrappongono a più tabelle.",
    "Exp_RowParamOutOfRange": "La riga del parametro è fuori dall'intervallo dati della tabella.",
    "Exp_ColParamOutOfRange": "Il parametro col è fuori dall'intervallo dati della tabella.",
    "Exp_TableDeleteCountInvalid": "Il conteggio dei parametri da eliminare causerà la svuotamento della tabella.",
    "Exp_TableAddRowIntersectSpan": "Questo non funzionerà perché sposterebbe le celle in un intervallo sul foglio di lavoro.",
    "Exp_TableAddRowIntersectTable": "Questo non funzionerà perché sposterebbe le celle in una tabella del tuo foglio di lavoro.",
    "Exp_TableAddRowNoEnoughRoom": "Impossibile inserire nuove celle perché spingerebbe le celle non vuote alla fine del foglio di lavoro. Queste celle potrebbero sembrare vuote ma avere valori vuoti, qualche formattazione o una formula. Elimina abbastanza righe o colonne per fare spazio a ciò che vuoi inserire e poi riprova.",
    "Table_Total": "Totale",
    "Table_None": "Nessuno",
    "Table_Average": "Media",
    "Table_Count": "Contare",
    "Table_Count_Numbers": "Conta i numeri",
    "Table_Max": "Massimo",
    "Table_Min": "Minimo",
    "Table_Sum": "Somma",
    "Table_StdDev": "DevStd",
    "Table_Var": "Variazione"
  },
  "Fill": {
    "CopyCells": "Copia celle",
    "FillSeries": "Serie di riempimento",
    "FillFormattingOnly": "Riempi solo la formattazione",
    "FillWithoutFormatting": "Riempi senza formattazione",
    "Exp_NumberOnly": "Funziona solo per i numeri",
    "Exp_RangeContainsMergedCell": "L'intervallo non dovrebbe avere celle unite.",
    "Exp_TargetContainsMergedCells": "L'intervallo di destinazione non dovrebbe avere celle unite.",
    "Exp_MergedCellsIdentical": "Questa operazione richiede che le celle unite abbiano dimensioni identiche.",
    "Exp_FillRangeContainsMergedCell": "Impossibile riempire l'intervallo che contiene una cella unita.",
    "Exp_FillCellsReadOnly": "Le celle che stai tentando di riempire sono protette e pertanto di sola lettura.",
    "Exp_ChangeMergedCell": "Impossibile modificare parte della cella unita.",
    "Exp_ColumnReadOnly": "La colonna che stai tentando di modificare è protetta e pertanto di sola lettura.",
    "Exp_RowReadOnly": "La riga che stai tentando di modificare è protetta e pertanto di sola lettura.",
    "Exp_CellReadOnly": "La cella che stai tentando di modificare è protetta e pertanto di sola lettura.",
    "Exp_RangeIsNull": "l'intervallo è nullo",
    "Exp_ChangePartOfArray": "Impossibile modificare parte di un array."
  },
  "GanttSheet": {
    "GANTT_MONTH": "Mese",
    "GANTT_WEEK": "Settimana",
    "GANTT_DAY": "Giorno",
    "GANTT_HOUR": "Ora",
    "GANTT_MINUTE": "Minuto",
    "GANTT_NEW_TASK": "<Nuovo compito>",
    "GANTT_NEW_SUMMARY_TASK": "<Nuova attività di riepilogo>",
    "GANTT_NEW_MILESTONE": "<Nuova pietra miliare>",
    "GANTT_TASK_NUMBER": "Numero attività",
    "GANTT_TASK_NAME": "Nome attività",
    "GANTT_MILESTONE": "Pietra miliare",
    "GANTT_MODE": "Modalità",
    "GANTT_DURATION": "Durata",
    "GANTT_START": "Inizio",
    "GANTT_FINISH": "Fine",
    "GANTT_START_DISPLAYED": "InizioVisualizzato",
    "GANTT_FINISH_DISPLAYED": "FineVisualizzato",
    "GANTT_PREDECESSORS": "Predecessori",
    "GANTT_SUCCESSORS": "Successori",
    "GANTT_COMPLETE": "% Completato",
    "GANTT_COMPLETE_CHANGE": "Completa attraverso",
    "GANTT_TASK_SCHEDULE_MODE_MANUALLY": "Manuale",
    "GANTT_TASK_SCHEDULE_MODE_AUTO": "Auto",
    "GANTT_INVALID_OPERATION": "operazione non valida",
    "GANTT_INVALID_LEVEL": "livello non valido",
    "GANTT_INVALID_ID": "ID non valido",
    "GANTT_INVALID_ROW_INDEX": "indiceRigaNonValido",
    "GANTT_INVALID_INDEX": "indice non valido",
    "GANTT_INVALID_COUNT": "conteggio non valido",
    "GANTT_INVALID_TASK": "attività non valida",
    "GANTT_INVALID_DEPENDENCY": "dipendenza non valida",
    "GANTT_INVALID_UNIT": "unità non valida",
    "GANTT_INVALID_WORK_DAYS": "giornilavorativi non validi",
    "GANTT_INVALID_TASK_ID": "ID attività non valido",
    "GANTT_INVALID_TASK_PARENT_ID": "IDParenteTaskInvalido",
    "GANTT_INVALID_TASK_LEVEL": "livelloattività non valido",
    "GANTT_INVALID_FIELD": "campo non valido",
    "GANTT_INVALID_ASCENDING_STATES": "stati ascendenti non validi",
    "GANTT_VALUE_INVALID": "valore non valido",
    "GANTT_VALUE_READONLY": "valoreSola lettura",
    "DEFAULT_DATE_TIME_FORMAT": "aa-mm-gg h:mm",
    "GANTT_ACTION_TASK": "Compito",
    "GANTT_ACTION_TASK_COLON": "Compito:",
    "GANTT_ACTION_START": "Inizio:",
    "GANTT_ACTION_FINISH": "Fine:",
    "GANTT_ACTION_TASK_START": "Inizio attività:",
    "GANTT_ACTION_TASK_FINISH": "Completamento attività:",
    "GANTT_ACTION_START_LINK": "Inizio",
    "GANTT_ACTION_FINISH_LINK": "Fine",
    "GANTT_ACTION_FROM_OF": "Da {0} di:",
    "GANTT_ACTION_TO_OF": "A {0} di:",
    "GANTT_ACTION_START_ONLY": "SoloAvvio",
    "GANTT_ACTION_FINISH_ONLY": "SoloFinitura",
    "GANTT_ACTION_DURATION": "Durata:",
    "GANTT_ACTION_COMPLETE_THROUGH": "CompletaAttraverso:",
    "GANTT_ACTION_LINE_TIP_TITLE": "Collegamento {0} a {1}",
    "GANTT_TASK_BAR_TASK_LINK": "Collegamento attività:",
    "GANTT_TASK_BAR_FROM": "Da:",
    "GANTT_TASK_BAR_TO": "A:",
    "GANTT_TASK_BAR_FS": "Fine-Inizio (FS)",
    "GANTT_TASK_BAR_FF": "Fine-Fine (FF)",
    "GANTT_TASK_BAR_SF": "Dall'inizio alla fine (SF)",
    "GANTT_TASK_BAR_SS": "Inizio-inizio (SS)",
    "GANTT_TASK_BAR_UNNAMED": "Senza nome",
    "GANTT_TASK_BAR_COMPLETE_THROUGH": "Completa tramite:",
    "GANTT_TASK_BAR_COMPLETE": "% Completato:",
    "GANTT_CALENDAR_STANDARD": "Standard",
    "GANTT_CALENDAR_NIGHT_SHIFT": "Turno di notte",
    "GANTT_CALENDAR_24HOURS": "24 ore",
    "GANTT_CALENDAR_MINUTE": "Minuto",
    "GANTT_CALENDAR_MINUTE_NAMES": [
      "M",
      "minimo",
      "minuto"
    ],
    "GANTT_CALENDAR_HOUR": "Ora",
    "GANTT_CALENDAR_HOUR_NAMES": [
      "H",
      "ora",
      "ora"
    ],
    "GANTT_CALENDAR_DAY": "Giorno",
    "GANTT_CALENDAR_DAY_NAMES": [
      "D",
      "di",
      "giorno"
    ],
    "GANTT_CALENDAR_WEEK": "Settimana",
    "GANTT_CALENDAR_WEEK_NAMES": [
      "io",
      "settimana",
      "settimana"
    ],
    "GANTT_CALENDAR_MONTH": "Mese",
    "GANTT_CALENDAR_MONTH_NAMES": [
      "mio",
      "mio",
      "mese"
    ],
    "GANTT_CALENDAR_UNIT_LABELS": [
      "minimo",
      "ora",
      "giorno",
      "settimana",
      "mio",
      "anno"
    ],
    "GANTT_CALENDAR_UNIT_LABELS_PLURALS": [
      "minuti",
      "ore",
      "giorni",
      "settimane",
      "mostro",
      "anni"
    ],
    "wmk1": "47616e74745368656574",
    "wmk2": "47616e74745368656574"
  },
  "OutlineColumn": {
    "Exp_GROUP_PROTECTED": "Non puoi usare questo comando su un foglio protetto. Per usare questo comando, devi prima rimuovere la protezione dal foglio."
  },
  "StatusBar": {
    "cellMode": "Modalità cella",
    "cellModeReady": "Pronto",
    "cellModeEnter": "Entra",
    "cellModeEdit": "Modificare",
    "inCalculation": "Calcolo: {0}",
    "iterateCalculation": "Calcolo iter: {0}",
    "formulaAverage": "Media",
    "formulaCount": "Contare",
    "formulaNumericalCount": "Conteggio numerico",
    "formulaMin": "Minimo",
    "formulaMax": "Massimo",
    "formulaSum": "Somma",
    "zoomSlider": "Cursore dello zoom",
    "zoom": "Zoom",
    "toolTipCellMode": "In modalità {0}",
    "toolTipFormulaAverage": "Media delle celle selezionate",
    "toolTipFormulaCount": "Numero di celle selezionate contenenti dati",
    "toolTipFormulaNumericalCount": "Numero di celle selezionate che contengono dati numerici",
    "toolTipFormulaMin": "Valore minimo nella selezione",
    "toolTipFormulaMax": "Valore massimo nella selezione",
    "toolTipFormulaSum": "Somma delle celle selezionate",
    "toolTipZoomOut": "Riduci zoom",
    "toolTipZoomIn": "Ingrandisci",
    "toolTipSlider": "Zoom",
    "toolTipZoomPanel": "Livello di zoom",
    "progressItem": "Progressi"
  },
  "AutoMerge": {
    "Exp_RangeIsIntersected": "L'intervallo non deve intersecarsi con intervalli esistenti."
  },
  "NameBox": {
    "invalidName": "È necessario immettere un riferimento valido a cui si desidera accedere oppure digitare un nome valido per la selezione.",
    "nameBox": "Casella Nome"
  },
  "InputMask": {
    "errorMsg": {
      "invalidPattern": "Modello non valido",
      "duplicatedDateTimePattern": "Modello data/ora duplicato",
      "emptyPattern": "Modello vuoto",
      "unknownPattern": "Errore di analisi del modello sconosciuto",
      "invalidOptionalPattern": "Errore di analisi del modello facoltativo",
      "invalidGroupPattern": "Errore nel modello di analisi del gruppo",
      "errorQuantifierPattern": "Posizione del quantificatore di errore",
      "invalidQuantifierPattern": "Errore nel modello di quantificatore di analisi",
      "noEntry": "Non è possibile inserire alcuna restrizione"
    },
    "hourFormatSingleDesignator": [
      "UN",
      "P"
    ],
    "hourFormatDesignator": [
      "SONO",
      "Primo Ministro"
    ]
  },
  "Print": {
    "Exp_InvalidSheetIndex": "Indice del foglio non valido."
  },
  "PDF": {
    "Exp_FileIOError": "Eccezione di lettura e scrittura del file.",
    "Exp_FontError": "Non è un formato di font supportato o un font PDF standard."
  },
  "Shapes": {
    "Exp_InvalidConnectionSite": "Sito di connessione non valido.",
    "Exp_DuplicatedName": "Nome duplicato.",
    "Exp_EmptyName": "Nome vuoto.",
    "Exp_InvalidRange": "Intervallo non valido"
  },
  "Charts": {
    "period": "periodo",
    "movingAverage": "Media mobile",
    "exponential": "Esponenziale",
    "linear": "Lineare",
    "logarithmic": "Logaritmico",
    "polynomial": "Polinomio",
    "power": "Energia",
    "unsupportedChartType": "Tipo di grafico non supportato",
    "SERIES": "Serie",
    "VALUE": "Valore: ",
    "POINT": "Punto ",
    "SIZE": "Misurare: ",
    "INCREASE": "Aumento",
    "DECREASE": "Diminuire",
    "TOTAL": "Totale",
    "ChartTitle": "Titolo del grafico",
    "Branch": "Ramo",
    "AxisTitle": "Titolo dell'asse"
  },
  "Slicer": {
    "Blank": "(vuoto)",
    "Exp_SlicerNameInvalid": "Il nome dell'affettatrice non è valido.",
    "Exp_SlicerNameExist": "Il nome dell'affettatrice è già in uso. Inserisci un nome univoco.",
    "SlicerNameInFormula": "Affettatrice"
  },
  "formulaEditor": {
    "NO_MATH_PARENTHESES": "Nessuna corrispondenza tra parentesi",
    "MISS_RIGHT_PARENTHESES": "')' è previsto.",
    "MISS_LET_FUNCTION_BODY": "Corpo mancante dell'espressione LET.",
    "UNKNOWN_NAME": "Nome sconosciuto",
    "UNKNOWN_SHEET": "Foglio sconosciuto \\\"$1\\",
    "NO_MATCHED_ARGUMENTS": "Mi aspettavo argomenti da 1 dollaro, ma ne ho ottenuti 2",
    "INVALID_IDENTIFIER_ARGUMENT": "Questo argomento deve essere un identificatore da associare.",
    "DUPLICATE_IDENTIFIER": "Identificativo duplicato $1",
    "INVALID_EXPRESSION": "ESPRESSIONE non valida",
    "INVALID_FORMULA": "Formula non valida",
    "FORMULA": "Formula"
  },
  "PivotEngine": {
    "dateResource": {
      "Jan": "Gennaio",
      "Feb": "febbraio",
      "Mar": "Mar",
      "Apr": "Aprile",
      "May": "Maggio",
      "Jun": "Giugno",
      "Jul": "Luglio",
      "Aug": "Agosto",
      "Sep": "settembre",
      "Oct": "Ottobre",
      "Nov": "novembre",
      "Dec": "dicembre",
      "Qtr1": "Trimestre 1",
      "Qtr2": "Trimestre 2",
      "Qtr3": "Trimestre 3",
      "Qtr4": "Quarzo4",
      "Seconds": "Secondi",
      "Minutes": "Minuti",
      "Hours": "Ore",
      "Days": "Giorni",
      "Months": "Mesi",
      "Quarters": "Quartieri",
      "Years": "Anni",
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
    "Exp_NoItemParseError": "Impossibile trovare un nome di elemento. Controlla di aver digitato correttamente il nome e che l'elemento sia presente nel report della tabella pivot.",
    "Exp_UnsupportedCalcItemType": "Riferimenti, nomi e matrici non sono supportati nelle formule delle tabelle pivot.",
    "blank": "(vuoto)"
  },
  "PivotTables": {
    "RepeatName": "Ripeti nome",
    "NotExist": "Non esistere",
    "SubtotalType_Prefix_0": "Media di",
    "SubtotalType_Prefix_1": "Conte di",
    "SubtotalType_Prefix_2": "ContaNumeri di",
    "SubtotalType_Prefix_3": "Massimo di",
    "SubtotalType_Prefix_4": "Min di",
    "SubtotalType_Prefix_5": "Prodotto di",
    "SubtotalType_Prefix_6": "Dev.St. di",
    "SubtotalType_Prefix_7": "DevStd di",
    "SubtotalType_Prefix_8": "Somma di",
    "SubtotalType_Prefix_9": "Variazione di",
    "SubtotalType_Prefix_10": "Varp di",
    "ColumnLabels": "Etichette delle colonne",
    "Total": "{0} Totale{1}",
    "All": "Tutto",
    "MultipleItems": "Più elementi",
    "RowLabels": "Etichette di riga",
    "GrandTotal": "Somma totale",
    "Values": "Valori",
    "PivotPanel_Title": "Campi tabella pivot",
    "PivotPanel_ReportText": "Scegli i campi da aggiungere al report",
    "PivotPanel_SearchPlaceholder": "Ricerca",
    "PivotPanel_FieldAreaText": "Trascina i campi tra le aree sottostanti:",
    "PivotPanel_FiltersItemsTitle": "Filtri",
    "PivotPanel_RowsItemsTitle": "Righe",
    "PivotPanel_ColumnsItemsTitle": "Colonne",
    "PivotPanel_ValuesItemsTitle": "Valori",
    "PivotPanel_DeferUpdateText": "Rinvia aggiornamento layout",
    "EmptyPivotTable_PromptMessage1": "Fare clic in quest'area per lavorare con il report della tabella pivot",
    "EmptyPivotTable_PromptMessage2": "Attiva l'elenco dei campi della tabella pivot per lavorare con la tabella pivot",
    "PivotPanel_Update": "Aggiornamento",
    "PivotPanel_DropDownList_Up": "Spostarsi verso l'alto",
    "PivotPanel_DropDownList_Down": "Spostati verso il basso",
    "PivotPanel_DropDownList_Beginning": "Passa all'inizio",
    "PivotPanel_DropDownList_End": "Muoviti per finire",
    "PivotPanel_DropDownList_ReportFilter": "Sposta al filtro report",
    "PivotPanel_DropDownList_Row": "Sposta alle etichette di riga",
    "PivotPanel_DropDownList_Col": "Sposta alle etichette delle colonne",
    "PivotPanel_DropDownList_Values": "Passare ai valori",
    "PivotPanel_DropDownList_Remove": "Rimuovi campo",
    "PivotPanel_DropDownList_Set": "Impostazioni campo...",
    "PivotPanel_DropDownList_ValueSet": "Impostazioni campo valore...",
    "PivotPanel_Fields_MoveTo_ReportField": "Aggiungi al filtro del report",
    "PivotPanel_Fields_MoveTo_RowLabel": "Aggiungi alle etichette di riga",
    "PivotPanel_Fields_MoveTo_ColLabel": "Aggiungi alle etichette delle colonne",
    "PivotPanel_Fields_MoveTo_Value": "Aggiungere ai valori",
    "PivotPanel_LabelOrValue_ClearFilter": "Cancella filtro",
    "PivotPanel_ValueFilterOrLabel_Equals": "Uguale a...",
    "PivotPanel_ValueFilterOrLabel_NotEqual": "Non è uguale a...",
    "PivotPanel_ValueFilterOrLabel_GreaterThan": "Più grande di...",
    "PivotPanel_ValueFilterOrLabel_GreaterOrTo": "Maggiore o uguale a...",
    "PivotPanel_ValueFilterOrLabel_LessThan": "Meno di...",
    "PivotPanel_ValueFilterOrLabel_LessOrTo": "Minore o uguale a...",
    "PivotPanel_ValueFilterOrLabel_Between": "Fra...",
    "PivotPanel_ValueFilterOrLabel_NotBetween": "Non tra...",
    "PivotPanel_ValueFilter_Top10": "I primi 10...",
    "PivotPanel_ValueFilterOrLabel_IsBeginWith": "Inizia con...",
    "PivotPanel_ValueFilterOrLabel_NotBegin": "Non inizia con...",
    "PivotPanel_ValueFilterOrLabel_End": "Termina con...",
    "PivotPanel_ValueFilterOrLabel_NotEndWith": "Non finisce con...",
    "PivotPanel_ValueFilterOrLabel_Contain": "Contiene...",
    "PivotPanel_ValueFilterOrLabel_NotContain": "Non contiene...",
    "ValueFilterOrLabel_Equals": "uguale",
    "ValueFilterOrLabel_NotEqual": "non è uguale",
    "ValueFilterOrLabel_GreaterThan": "maggiore di",
    "ValueFilterOrLabel_GreaterOrTo": "maggiore o uguale a",
    "ValueFilterOrLabel_LessThan": "meno di",
    "ValueFilterOrLabel_LessOrTo": "minore o uguale a",
    "ValueFilterOrLabel_Between": "fra",
    "ValueFilterOrLabel_NotBetween": "non tra",
    "ValueFilterOrLabelSelect_GreaterThan": "è maggiore di",
    "ValueFilterOrLabelSelect_GreaterOrTo": "è maggiore o uguale a",
    "ValueFilterOrLabelSelect_LessThan": "è minore di",
    "ValueFilterOrLabelSelect_LessOrTo": "è minore o uguale a",
    "ValueFilterOrLabelSelect_Between": "è tra",
    "ValueFilterOrLabelSelect_NotBetween": "non è tra",
    "ValueFilterOrLabel_IsBeginWith": "inizia con",
    "ValueFilterOrLabel_NotBegin": "non inizia con",
    "ValueFilterOrLabel_End": "finisce con",
    "ValueFilterOrLabel_NotEndWith": "non finisce con",
    "ValueFilterOrLabel_Contain": "contiene",
    "ValueFilterOrLabel_NotContain": "non contiene",
    "PivotPanel_ValueFilterOrLabel_Before": "Prima...",
    "PivotPanel_ValueFilterOrLabel_After": "Dopo...",
    "PivotPanel_ValueFilterOrLabel_Tomorrow": "Domani",
    "PivotPanel_ValueFilterOrLabel_Today": "Oggi",
    "PivotPanel_ValueFilterOrLabel_Yesterday": "Ieri",
    "PivotPanel_ValueFilterOrLabel_NextWeek": "La prossima settimana",
    "PivotPanel_ValueFilterOrLabel_ThisWeek": "Questa settimana",
    "PivotPanel_ValueFilterOrLabel_LastWeek": "La settimana scorsa",
    "PivotPanel_ValueFilterOrLabel_NextMonth": "Il mese prossimo",
    "PivotPanel_ValueFilterOrLabel_ThisMonth": "Questo mese",
    "PivotPanel_ValueFilterOrLabel_LastMonth": "Il mese scorso",
    "PivotPanel_ValueFilterOrLabel_NextQuarter": "Prossimo trimestre",
    "PivotPanel_ValueFilterOrLabel_ThisQuarter": "Questo trimestre",
    "PivotPanel_ValueFilterOrLabel_LastQuarter": "Ultimo trimestre",
    "PivotPanel_ValueFilterOrLabel_NextYear": "L'anno prossimo",
    "PivotPanel_ValueFilterOrLabel_ThisYear": "Quest'anno",
    "PivotPanel_ValueFilterOrLabel_LastYear": "L'anno scorso",
    "PivotPanel_ValueFilterOrLabel_YearToDate": "Da inizio anno",
    "PivotPanel_ValueFilterOrLabel_MonthToDate": "Dall'inizio del mese a oggi",
    "PivotPanel_ValueFilterOrLabel_QuarterToDate": "Quartiere a oggi",
    "PivotPanel_ValueFilterOrLabel_ParallelYearToDate": "Anno parallelo a oggi",
    "PivotPanel_ValueFilterOrLabel_ParallelMonthToDate": "Mese parallelo a oggi",
    "PivotPanel_ValueFilterOrLabel_ParallelQuarterToDate": "Quartiere parallelo a oggi",
    "PivotPanel_ValueFilterOrLabel_AllDates": "Tutte le date nel periodo",
    "PivotPanel_ValueFilterOrLabel_Custom": "Filtro personalizzato...",
    "PivotPanel_Sort_A_Z": "Ordina dalla A alla Z",
    "PivotPanel_Sort_Z_A": "Ordina da Z ad A",
    "PivotPanel_Sort_Smallest_Largest": "Ordina dal più piccolo al più grande",
    "PivotPanel_Sort_Largest_Smallest": "Ordina dal più grande al più piccolo",
    "PivotPanel_Sort_More": "Altre opzioni di ordinamento...",
    "PivotPanel_Filter_Clear": "Cancella filtro da {0}",
    "PivotPanel_Filter_Label": "Filtri etichetta",
    "PivotPanel_Filter_Value": "Filtri valore",
    "PivotPanel_Date_Filter": "Filtri data",
    "Ok": "OK",
    "Cancel": "Cancellare",
    "NumberFormat": "Formato numerico",
    "LabelFormat": "Formato etichetta",
    "Number": "Numero",
    "FormatCells": "Formatta celle",
    "Sample": "Campione",
    "Type": "Tipo",
    "CustomFormats": [
      "Generale",
      "0",
      "0,00",
      "#,##0",
      "#,##0,00",
      "#,##0;(#,##0)",
      "#,##0;[Rosso](#,##0)",
      "#,##0,00;(#,##0,00)",
      "#,##0.00;[Rosso](#,##0.00)",
      "$#,##0;($#,##0)",
      "$#,##0;[Rosso]($#,##0)",
      "$#,##0,00;($#,##0,00)",
      "$#,##0.00;[Rosso]($#,##0.00)",
      "0%",
      "0,00%",
      "0,00E+00",
      "##0.0E+0",
      "# ?/?",
      "# ???/??",
      "g/m/aaaa",
      "g-mmm-aa",
      "m-mmm",
      "mmm-aaa",
      "h:mm AM/PM",
      "h:mm:ss AM/PM",
      "hh:mm",
      "hh:mm:ss",
      "m/g/aaaa hh:mm",
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
      "gggg, mmmm gg, aaaa",
      "m/d;@",
      "[<=9999999]###-####;(###) ###-####",
      "# ?/8"
    ],
    "Select_Field": "Seleziona campo",
    "PivotPanel_Filter_SelectAll": "Seleziona tutto",
    "PivotPanel_Filter_NoSelectAll": "Deseleziona tutto",
    "PivotPanel_Filter_Search": "ricerca",
    "Label_Title": "Filtro etichetta",
    "Label_Show": "Mostra gli elementi per cui è presente l'etichetta",
    "Use_Single_Character": "Usa ? per rappresentare qualsiasi singolo carattere",
    "Use_Series_Characters": "Usa * per rappresentare qualsiasi carattere della serie",
    "Value_Show": "Mostra elementi per cui",
    "Value_Title": "Filtro valore",
    "Top_Ten_Filter": "Filtro Top 10",
    "TopTenShow": "spettacolo",
    "Sort_Field_Dialog_Title": "Ordinare",
    "Sort_Field_Dialog_Sort_Options": "Opzioni di ordinamento",
    "Sort_Field_Dialog_Summary": "Riepilogo",
    "Sort_Field_Dialog_Ascending_Sort": "Crescente (dalla A alla Z) per:",
    "Sort_Field_Dialog_Descending_Sort": "Discendente (da Z ad A) di:",
    "Sort_Field_Dialog_More_Options": "Altre opzioni...",
    "Sort_Field_More_Dialog_Title": "Altre opzioni di ordinamento",
    "Sort_Field_More_Dialog_Sort_By": "Ordina per",
    "Sort_Field_More_Dialog_Values_In_Selected_Area": "Valori nell'{{AREA}} selezionata",
    "Sort_Value_Dialog_Title": "Ordina per valore",
    "Sort_Value_Dialog_Sort_Direction": "Direzione di ordinamento",
    "Sort_Value_Dialog_Asc": "Dal più piccolo al più grande",
    "Sort_Value_Dialog_Desc": "Dal più grande al più piccolo",
    "Sort_Value_Dialog_Top_To_Bottom": "Dall'alto verso il basso",
    "Sort_Value_Dialog_Left_To_Right": "Da sinistra a destra",
    "Custom_Sort_Summary": "Ordinamento personalizzato",
    "Sort_Order_ASC": "ordine ascendente",
    "Sort_Order_DESC": "ordine decrescente",
    "Sort_In_Row": "riga",
    "Sort_In_Column": "colonna",
    "Sort_Summary_Pattern": "Ordina {{FIELD_NAME}} in {{ORDER}}",
    "Sort_Value_Summary_Pattern": "Ordina {{FIELD_NAME}} per {{SELECTED_FIELD_NAME}} in {{ORDER}}",
    "Sort_More_Summary_Pattern": "Ordina {{FIELD_NAME}} per {{SELECTED_FIELD_NAME}} in {{ORDER}} utilizzando i valori in questa {{ROW_COLUMN}}:\\r\\n",
    "Invalid_Sort_Range": "Il riferimento di ordinamento non è valido. Assicurati che sia all'interno dei dati che vuoi ordinare e che la prima casella Ordina per non sia la stessa o vuota.",
    "Invalid_Field_Sort_By": "Impossibile determinare in base a quale campo della tabella pivot ordinare.",
    "Top": "Superiore",
    "Bottom": "Metter il fondo a",
    "Top_Item": "Elementi",
    "Top_Percent": "Percentuale",
    "Top_Sum": "Somma",
    "ByJoiner": "di",
    "AndJoiner": "E",
    "Q1": "Quarto 1",
    "Q2": "Quarto 2",
    "Q3": "Trimestre 3",
    "Q4": "Quarto quarto",
    "Jan": "Gennaio",
    "Feb": "Febbraio",
    "Mar": "Marzo",
    "Apr": "Aprile",
    "May": "Maggio",
    "Jun": "Giugno",
    "Jul": "Luglio",
    "Aug": "Agosto",
    "Sep": "Settembre",
    "Oct": "Ottobre",
    "Nov": "Novembre",
    "Dec": "Dicembre",
    "IsBefore": "è prima",
    "IsBeforeOrEqual": "è prima o uguale a",
    "IsAfter": "è dopo",
    "IsAfterOrEqual": "è dopo o uguale a",
    "IsBetween": "è tra",
    "IsNotBetween": "non è tra",
    "DateFilterTitle": "Filtro data",
    "DateShow": "Mostra gli elementi per i quali è indicata la data",
    "WholeDays": "Giorni interi",
    "FieldSetting": "Impostazioni campo",
    "ValueSetting": "Impostazioni campo valore",
    "SourceName": "Nome sorgente:",
    "CustomName": "Nome personalizzato:",
    "SummarizeValue": "Riassumere i valori per",
    "ShowValueAs": "Mostra valore come",
    "CalculationForDialog": "Calcolo: ",
    "BaseFieldForDialog": "Campo base: ",
    "BaseItemForDialog": "Articolo base: ",
    "BaseItemNext": "(Prossimo)",
    "BaseItemPrevious": "(precedente)",
    "SummarizeValueField": "Riassumi i valori del campo per",
    "ShowValueAsField": "Mostra valore come",
    "ChooseType": "Scegli il tipo di calcolo che vuoi utilizzare per riepilogare i dati dal campo selezionato",
    "Sum": "Somma",
    "Count": "Contare",
    "Average": "Media",
    "Max": "Massimo",
    "Min": "Minimo",
    "Product": "Prodotto",
    "CountNumbers": "Conta i numeri",
    "StdDev": "DevStd",
    "StdDevp": "DevStd",
    "Var": "Variazione",
    "Varp": "Varpa",
    "sigmaValue": "Valori ∑",
    "sigmaValueTemp": "Valori",
    "DateFormatError": "Questa non è una data valida",
    "noCalculation": "Nessun calcolo",
    "percentGrandTotal": "% del totale generale",
    "percentColumnTotal": "% del totale della colonna",
    "percentRowTotal": "% del totale delle righe",
    "percentEllipsis": "% Di ...",
    "percentParentRowTotal": "% del totale della riga padre",
    "percentParentColumnTotal": "% del totale della colonna padre",
    "percentParentTotal": "% del totale dei genitori ...",
    "difference": "Differenza da ...",
    "percentDifference": "% Differenza da ...",
    "runningTotal": "Totale parziale in ...",
    "percentRunningTotal": "% Totale parziale in ...",
    "rankSmallestLargest": "Dal più piccolo al più grande...",
    "rankLargestSmallest": "Dal più grande al più piccolo...",
    "index": "Indice",
    "showValueAsDialog": [
      "",
      "",
      "",
      "",
      "% Di ",
      "",
      "",
      "% del totale dei genitori",
      "Differenza da",
      "% Differenza da",
      "Totale corrente in",
      "% Totale corrente in ",
      "Classifica dal più piccolo al più grande",
      "Dal più grande al più piccolo",
      ""
    ],
    "baseField": "Campo base:",
    "baseItem": "Articolo base:",
    "grouping": "Raggruppamento",
    "auto": "Auto",
    "startingAt": "A partire da:",
    "endingAt": "Termina a:",
    "groupBy": "Di:",
    "seconds": "Secondi",
    "minutes": "Minuti",
    "hours": "Ore",
    "days": "Giorni",
    "months": "Mesi",
    "quarters": "Quartieri",
    "years": "Anni",
    "numberOfDays": "Numero di giorni",
    "NoHaveSpread": "eccezione cartella di lavoro",
    "SourceError": "Eccezione dati sorgente, impossibile creare report tabella pivot",
    "SourceNotIsTableNameOrFormula": "i dati di origine non sono il nome della tabella e la formula",
    "SourceDataOnlyOne": "Questo comando richiede almeno due righe di dati sorgente. Non puoi usare il comando su una selezione in una sola riga",
    "FieldAreaLimited": "Il campo che stai spostando non può essere inserito in quell'area del report.",
    "Views": "Viste",
    "Group": "Gruppo",
    "param_error": "il parametro è nullo o non definito",
    "EmptyValueFieldError": "Per applicare un filtro valore è necessario almeno un campo nell'area Valori",
    "DefaultPivotTableViewName": "Visualizzazione pivot",
    "toolTipContent_Row": "Riga: ",
    "toolTipContent_Column": "Colonna: ",
    "toolTipContent_Value": "Valore: ",
    "toolTipContent_NoValue": "Nessun valore",
    "deferLayoutUpdate": "Rinvia aggiornamento layout",
    "getStringLabelFilterItemText": "",
    "getDateLabelFilterItemText": "",
    "getValueFilterItemText": "",
    "PivotTableErrorMessage_ShowDetail": "Impossibile mostrare o nascondere i dettagli per questa selezione",
    "PivotTableErrorMessage_MakeChange": "Non possiamo apportare questa modifica alle celle selezionate perché influenzerà una tabella pivot. Utilizza l'elenco dei campi per modificare il report. Se stai tentando di inserire o eliminare celle, sposta la tabella pivot e riprova.",
    "PivotTableErrorMessage_ExistData": "Ci sono già dati in {}. Vuoi sostituirli?",
    "PivotTableErrorMessage_EditWhenDefer": "Il report della tabella pivot non può essere modificato con la casella di controllo Differisci aggiornamento layout selezionata. Per modificare il report, deseleziona la casella di controllo Differisci aggiornamento layout in fondo all'elenco dei campi della tabella pivot.",
    "PivotTableErrorMessage_DuplicatedFieldName": "Il nome del campo della tabella pivot esiste già.",
    "PivotTableErrorMessage_EmptyFieldName": "Impossibile immettere un valore nullo come nome di elemento o di campo in un report di tabella pivot.",
    "PivotTableErrorMessage_Protect": "Quel comando non può essere eseguito mentre un foglio protetto contiene un altro report di tabella pivot basato sugli stessi dati di origine. Per rimuovere la protezione dal foglio che contiene l'altro report, fai clic sulla scheda del foglio, quindi fai clic su Rimuovi protezione foglio (scheda Revisione, gruppo Modifiche). Quindi riprova il comando.",
    "PivotTableErrorMessage_EmptySourceFieldName": "Il nome del campo della tabella pivot non è valido. Per creare un report di tabella pivot, devi usare dati organizzati come un elenco con colonne etichettate. Se stai cambiando il nome di un campo della tabella pivot, devi digitare un nuovo nome per il campo.",
    "PivotTableErrorMessage_Overlap": "Un report di tabella pivot non può sovrapporsi a un altro report di tabella pivot.",
    "PivotTableErrorMessage_InvalidChange": "Non possiamo modificare questa parte della tabella pivot.",
    "PivotTableErrorMessage_InvalidGroup": "Impossibile raggruppare quella selezione.",
    "PivotTableErrorMessage_InvalidReference": "Il riferimento non è valido.",
    "PivotTableForAccessibility": "Tabella pivot: \\r\\nNome tabella pivot: ",
    "PivotTableCalcItemHasTowCacheField": "Se uno o più campi nella tabella pivot hanno elementi calcolati, nessun campo può essere utilizzato nell'area dati due o più volte, o nell'area dati e in un'altra area contemporaneamente. Se stai provando ad aggiungere un campo, rimuovi gli elementi calcolati e aggiungi di nuovo il campo. Se stai provando ad aggiungere un elemento calcolato, modifica il report della tabella pivot in modo che nessun campo venga utilizzato più di una volta e quindi aggiungi l'elemento calcolato.",
    "PivotTableHasNumberOrDateGroup": "Questo campo del report PivotTable è raggruppato. Non puoi aggiungere un elemento calcolato a un campo raggruppato. Per separare il campo, assicurati che sia nell'area riga o colonna, seleziona uno degli elementi del campo raggruppato, fai clic sul pulsante Separa nel gruppo Gruppo nella scheda Analizza, quindi inserisci l'elemento calcolato. Dopo l'inserimento, puoi raggruppare di nuovo gli elementi del campo.",
    "PivotTableSubtotalType": "Medie, deviazioni standard e varianze non sono supportate quando un report di tabella pivot contiene elementi calcolati.",
    "PivotTableHasSameItemName": "Impossibile creare l'elemento o il campo calcolato perché esiste un altro elemento o campo con lo stesso nome.",
    "PivotTableCalcItemHasMultipleDataField": "Non sono supportati più campi dati dello stesso campo quando un report di tabella pivot contiene elementi calcolati.",
    "PivotTableMoveCalcItemFieldToReport": "Questo campo non può essere inserito nel filtro del report perché contiene elementi calcolati. Per inserire questo campo nel filtro del report, eliminare prima gli elementi calcolati.",
    "PivotTableErrorFormula": "Impossibile trovare un nome di elemento. Controlla di aver digitato correttamente il nome e che l'elemento sia presente nel report della tabella pivot.",
    "SlicerNameInFormula": "Affettatrice",
    "search": "Ricerca",
    "AddSearchResult": "Aggiungi la selezione corrente al filtro",
    "Layout": "Disposizione",
    "showNoData": "Mostra elementi senza dati",
    "showSubtotalTop": "Visualizza i subtotali nella parte superiore di ogni gruppo",
    "TIMELINE_PLACE_HOLDER": "{TL}",
    "ALL_DATES_IN": "Tutte le date in",
    "ALL_PERIODS": "Tutti i periodi",
    "INVALID_DATE_SELECTION": "Selezione data non valida!",
    "QUARTER_MAP": [
      "",
      "Q1",
      "Q2",
      "Q3",
      "Q4"
    ],
    "DateNotEqual": "Non {TL}",
    "DateNewerThan": "Dopo {TL}",
    "DateNewerThanOrEqual": "Dopo o il {TL}",
    "DateOlderThan": "Prima di {TL}",
    "DateOlderThanOrEqual": "Prima o su{TL}",
    "DateNotBetween": "Non tra {TL}",
    "AllDatesIn_Quarter1": "Tutte le date nel Q1",
    "AllDatesIn_Quarter2": "Tutte le date nel Q2",
    "AllDatesIn_Quarter3": "Tutte le date nel Q3",
    "AllDatesIn_Quarter4": "Tutte le date nel Q4",
    "AllDatesIn_January": "Tutte le date di gennaio",
    "AllDatesIn_February": "Tutte le date di febbraio",
    "AllDatesIn_March": "Tutte le date di marzo",
    "AllDatesIn_April": "Tutte le date di aprile",
    "AllDatesIn_May": "Tutte le date di maggio",
    "AllDatesIn_June": "Tutte le date di giugno",
    "AllDatesIn_July": "Tutte le date di luglio",
    "AllDatesIn_August": "Tutte le date di agosto",
    "AllDatesIn_September": "Tutte le date di settembre",
    "AllDatesIn_October": "Tutte le date di ottobre",
    "AllDatesIn_November": "Tutte le date di novembre",
    "AllDatesIn_December": "Tutte le date di dicembre",
    "TIME_LEVEL_YEARS": "ANNI",
    "TIME_LEVEL_QUARTERS": "QUARTIERI",
    "TIME_LEVEL_MONTHS": "MESI",
    "TIME_LEVEL_DAYS": "GIORNI",
    "PivotTableErrorMessage_ExistTable": "Un rapporto di tabella pivot non può sovrapporsi a una tabella.",
    "VALUE_MUST_NUMBER": "Il valore deve essere un numero.",
    "ENTRY_NUMBER": "Impossibile utilizzare il valore inserito. Potrebbe essere richiesto un numero intero o decimale.",
    "POSITIVE_INTEGER": "Il numero deve essere maggiore di zero."
  },
  "TableSheet": {
    "EXP_TooManyPinRecords": "Supporta solo record con meno di 10 pin.",
    "GroupPanelTip": "Trascina qui per impostare i gruppi di righe",
    "GroupPanelFieldsHeader": "Campi",
    "GroupPanelGroupsHeader": "Gruppi",
    "GroupPanelItemRemove": "Rimuovere",
    "GroupPanelItemAddCalculation": "Aggiungi campo riepilogo",
    "GroupPanelDropDownCalcField": "Campo",
    "GroupPanelSummaryLabelFormula": "Formula",
    "GroupPanelSummaryLabelCaption": "Didascalia",
    "GroupPanelSummaryLabelSlice": "Fetta",
    "GroupPanelSummaryLabelRelateTo": "Relazionarsi con",
    "GroupPanelSummaryLabelPosition": "Posizione",
    "GroupPanelSummaryLabelPositionHeader": "Intestazione",
    "GroupPanelSummaryLabelPositionFooter": "Piè di pagina",
    "GroupPanelItemRemoveAll": "Rimuovi tutto",
    "GroupPanelAddCalculateColumn": "Aggiungi colonna calcolata",
    "TextColon": ":",
    "StatusBarRowCount": "Conteggio delle righe",
    "StatusBarToolTipRowCount": "Conteggio delle righe selezionate",
    "CrossColumnCrossHeader": "Attraverso",
    "CrossColumnDetailFormatter": "Formattatore",
    "CrossColumnDetailName": "Nome",
    "CrossColumnDetailValue": "Valore",
    "CrossColumnDetailValuePlaceHolder": "Trascina l'elemento qui per impostare il valore",
    "CrossColumnDetailOver": "Sopra",
    "CrossColumnDetailCaption": "Didascalia",
    "CrossColumnDetailValueHeader": "Mostra intestazione valore incrociato",
    "CrossColumnDetailFilter": "Filtro",
    "CrossColumnDetailAttributes": "Attributi",
    "CrossColumnDetailList": "Lista",
    "Exp_InvalidOperationInProtectForTableSheet": "L'intervallo che stai tentando di modificare è bloccato.",
    "defineColumn": "Definisci colonna",
    "cancel": "Cancellare",
    "submit": "Invia",
    "defineColumnValue": "Valore",
    "defineColumnCaption": "Didascalia",
    "defineColumnType": "Tipo",
    "defineColumnFormatting": "Formattazione",
    "defineColumnConfiguration": "Configurazione",
    "defineColumnDefaultValue": "Predefinito",
    "defineColumnOthers": "Altri",
    "defineColumnFormula": "Formula",
    "defineColumnNone": "Nessuno",
    "defineColumnAll": "Tutto",
    "defineColumnNoResults": "Nessun risultato",
    "defineColumnRequired": "È necessario",
    "defineColumnExisted": "Esisteva",
    "columnTypeNumber": "Numero",
    "columnTypeText": "Testo",
    "columnTypeFormula": "Formula",
    "columnTypeCheckbox": "Casella di controllo",
    "columnTypeDate": "Data",
    "columnTypeCurrency": "Valuta",
    "columnTypePercent": "Percentuale",
    "columnTypePhone": "Telefono",
    "columnTypeEmail": "E-mail",
    "columnTypeURL": "URL",
    "columnTypeLookup": "Cercare",
    "columnTypeCreatedTime": "OraCreata",
    "columnTypeModifiedTime": "ModificatoOra",
    "columnTypeAttachment": "Attaccamento",
    "columnTypeSelect": "Selezionare",
    "columnTypeBarcode": "Codice a barre",
    "columnTypeNumberFormattingSample": "Campione",
    "columnTypeNumberFormattingDecimalPlaces": "Cifre decimali",
    "columnTypeNumberFormattingThousandSeparator": "Usa il separatore 1000 (,)",
    "columnTypeNumberFormattingNegativeNumbers": "Numeri negativi",
    "columnTypeNumberFormattingSymbol": "Simbolo",
    "columnTypeNumberFormatting": {
      "negativeNumbers": [],
      "numberCategoryFormats": [
        "0",
        "0;[Rosso]0",
        "0_);(0)",
        "0_);[Rosso](0)",
        "#,##0",
        "#,##0;[Rosso]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rosso](#,##0)"
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
          "Nessuno",
          "",
          ""
        ],
        [
          "$",
          "$",
          "it-IT"
        ],
        [
          "¥(cinese)",
          "¥",
          "zh-cn"
        ],
        [
          "¥(giapponese)",
          "¥",
          "sì-jp"
        ],
        [
          "₩(coreano)",
          "₩",
          "ko-kr"
        ]
      ],
      "percentageFormats": [
        "0%"
      ],
      "currencyFormatWithoutSymbol": [
        "#,##0",
        "#,##0;[Rosso]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rosso](#,##0)"
      ],
      "commonFormats": {
        "Number": {
          "format": "0,00",
          "label": "Numero"
        },
        "Currency": {
          "format": "[$$-409]#,##0,00",
          "label": "Valuta"
        },
        "Accounting": {
          "format": "_(\\\"$\\\"* #,##0.00_);_(\\\"$\\\"* (#,##0.00);_(\\\"$\\\"* \\\"-\\\"??_) ;_(@_)",
          "label": "Contabilità"
        },
        "ShortDate": {
          "format": "g/m/aaaa",
          "label": "Data breve"
        },
        "LongDate": {
          "format": "[$-409]gggg, mmmm gg, aaaa",
          "label": "Data lunga"
        },
        "Time": {
          "format": "[$-409]h:mm:ss AM/PM",
          "label": "Tempo"
        },
        "Percentage": {
          "format": "0,00%",
          "label": "Percentuale"
        },
        "Fraction": {
          "format": "# ?/?",
          "label": "Frazione"
        },
        "Scientific": {
          "format": "0,00E+00",
          "label": "Scientifico"
        },
        "Text": {
          "format": "@",
          "label": "Testo"
        },
        "Comma": {
          "format": "_(* #,##0.00_);_(* (#,##0.00);_(* \\\"-\\\"??_);_(@_)",
          "label": "Virgola"
        }
      }
    },
    "columnTypeLookupTables": "Seleziona tabella di ricerca",
    "columnTypeLookupFields": "Il campo da guardare",
    "columnTypeLookupIndexes": "Il numero record",
    "columnTypeFormattingCategory": "Categoria",
    "columnTypeMask": {
      "pattern": "Modello",
      "placeholder": "Segnaposto",
      "excludeLiteral": "Escludi letterale",
      "excludePlaceholder": "Escludi segnaposto"
    },
    "columnTypeAllEditableFields": "Tutti i campi modificabili",
    "columnTypeDateTimePicker": "Selettore data/ora",
    "columnTypeDateStartDay": "Giorno di inizio",
    "columnTypeDateMonday": "Lunedi",
    "columnTypeDateTuesday": "Martedì",
    "columnTypeDateWednesday": "Mercoledì",
    "columnTypeDateThursday": "Giovedì",
    "columnTypeDateFriday": "Venerdì",
    "columnTypeDateSaturday": "Sabato",
    "columnTypeDateSunday": "Domenica",
    "columnTypeDateCalendarPage": "Pagina Calendario",
    "columnTypeDateDay": "Giorno",
    "columnTypeDateYear": "Anno",
    "columnTypeDateMonth": "Mese",
    "columnTypeDateShowTime": "Orario dello spettacolo",
    "columnTypeDateShowDateRange": "Mostra intervallo di date",
    "columnTypeDateShowBuiltInDateRange": "MostraintervalloDateInCostruito",
    "columnTypeDateType": "Tipo",
    "columnTypeDateLocale": "località (luogo)",
    "columnTypeCalendar": "Tipo di calendario",
    "columnTypeShowEraFirstYear": "Usa Gannen per visualizzare il 1° anno",
    "columnTypeCalendarType": {
      "western": "Occidentale",
      "JER": "Regno dell'imperatore giapponese"
    },
    "columnTypeAttachmentMarginGroup": "Margine",
    "columnTypeAttachmentLeft": "Sinistra",
    "columnTypeAttachmentTop": "Superiore",
    "columnTypeAttachmentRight": "Giusto",
    "columnTypeAttachmentBottom": "Metter il fondo a",
    "columnTypeAttachmentMaxSize": "Limite di dimensione",
    "columnTypeAttachmentAccept": "Tipo di file",
    "columnTypeAttachmentAcceptValueTypes": {
      "txt": "TXT",
      "all": "Tutto",
      "pdf": "pdf",
      "image": "jpg, png, gif",
      "excel": "docx, xlsx, pptx"
    },
    "columnTypeAttachmentIsPreviewEnabled": "Anteprima",
    "columnTypeAttachmentIsClearEnabled": "Chiaro",
    "columnTypeAttachmentIsDownloadEnabled": "Scaricamento",
    "columnTypeAttachmentSizeUnit": "KB",
    "columnTypeCheckboxTitle": "Tipo di cella CheckBox",
    "columnTypeCheckboxTextGroup": "Testo",
    "columnTypeCheckboxTrue": "VERO",
    "columnTypeCheckboxIndeterminate": "Indeterminato",
    "columnTypeCheckboxFalse": "Falso",
    "columnTypeCheckboxAlign": "Allineare",
    "columnTypeCheckboxOther": "Altro",
    "columnTypeCheckboxCaption": "Didascalia",
    "columnTypeCheckboxIsThreeState": "ÈTreStati",
    "columnTypeCheckboxBoxSize": "Dimensioni della scatola",
    "columnTypeCheckboxAuto": "Auto",
    "columnTypeCheckboxTextAlign": {
      "top": "Superiore",
      "bottom": "Metter il fondo a",
      "left": "Sinistra",
      "right": "Giusto"
    },
    "columnTypeBarcodeLabel": {
      "showLabel": "Mostra etichetta",
      "barcodeType": "Tipo di codice a barre",
      "color": "Colore",
      "errorCorrectionLevel": "Livello di correzione degli errori",
      "backgroundColor": "Colore di sfondo",
      "version": "Versione",
      "model": "Modello",
      "mask": "Maschera",
      "connection": "Connessione",
      "charCode": "CodiceCarattere",
      "connectionNo": "Numero di connessione",
      "charset": "Set di caratteri",
      "quietZoneLeft": "Zona tranquilla a sinistra",
      "quietZoneRight": "Zona tranquilla a destra",
      "quietZoneTop": "Zona tranquilla in alto",
      "quietZoneBottom": "Zona tranquilla in basso",
      "labelPosition": "Posizione etichetta",
      "addOn": "Aggiungi su",
      "addOnLabelPosition": "Posizione etichetta AddOn",
      "fontFamily": "Famiglia di caratteri",
      "fontStyle": "Stile del carattere",
      "fontWeight": "Spessore del carattere",
      "fontTextDecoration": "Decorazione del testo del font",
      "fontTextAlign": "Allineamento testo carattere",
      "fontSize": "Dimensione carattere",
      "fileIdentifier": "Identificatore file",
      "structureNumber": "Numero di struttura",
      "structureAppend": "Aggiungi struttura",
      "ecc00_140Symbol": "Dimensione simbolo Ecc000_140",
      "ecc200EncodingMode": "Modalità di codifica finale Ecc200",
      "ecc200SymbolSize": "Dimensione simbolo Ecc200",
      "eccMode": "Modalità Ecc",
      "compact": "Compatto",
      "columns": "Colonne",
      "rows": "Righe",
      "groupNo": "GruppoNo",
      "grouping": "Raggruppamento",
      "codeSet": "Set di codici",
      "fullASCII": "ASCII completo",
      "checkDigit": "Cifra di controllo",
      "nwRatio": "Rapporto barra larga e stretta",
      "labelWithStartAndStopCharacter": "Etichetta con carattere di inizio e fine"
    },
    "columnTypeComboBoxEditorValueTypes": "TipoValoreEditore",
    "columnTypeComboBoxItems": "Elementi",
    "columnTypeComboBoxItemProperties": "ProprietàElemento",
    "columnTypeComboBoxText": "Testo",
    "columnTypeComboBoxValue": "Valore",
    "columnTypeComboBoxAdd": "Aggiungere",
    "columnTypeComboBoxRemove": "Rimuovere",
    "columnTypeComboBoxEditorValueType": {
      "text": "Testo",
      "index": "Indice",
      "value": "Valore"
    },
    "columnTypeComboBoxEditable": "Modificabile",
    "columnTypeComboBoxItemHeight": "Altezza degli oggetti",
    "columnTypeUrlLabel": {
      "linkColor": "Colore collegamento",
      "visitedLinkColor": "Colore del collegamento visitato"
    }
  },
  "ReportSheet": {
    "ContainsInvalidCells": "Il foglio del report contiene celle non valide ({0}), controllare.",
    "toolTipTableName": "Tavolo: ",
    "toolTipColumnName": "Colonna: ",
    "toolTipFormula": "Formula: ",
    "toolTipCellType": "Tipo: ",
    "listCellType": "Lista",
    "groupCellType": "Gruppo",
    "summaryCellType": "Riepilogo",
    "summarySumTip": "(Somma)",
    "summaryAvgTip": "(Media)",
    "summaryMaxTip": "(Massimo)",
    "summaryMinTip": "(Min)",
    "summaryCountTip": "(Contare)",
    "summaryNoneTip": "(Nessuno)",
    "configDataSetting": "Si prega di configurare le impostazioni dei dati.",
    "Exp_InvalidParameterName": "nome parametro non valido",
    "wmk1": "5265706f72745368656574",
    "wmk2": "5265706f72745368656574"
  },
  "IO": {
    "EXP_IO": "Eccezione di lettura e scrittura del file.",
    "EXP_FILE_FORMAT": "Formato file non corretto.",
    "GET_PARTIAL_VALUES_ERROR_MSG": "file di errore",
    "EXP_WRONG_PASSWORD": "La password fornita non è corretta.",
    "EXP_EMPTY_PASSWORD": "Impossibile aprire il file Excel perché la cartella di lavoro è protetta da password."
  },
  "Functions": {
    "ABS": {
      "description": "Questa funzione calcola il valore assoluto del valore specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ACCRINT": {
      "description": "Questa funzione calcola l'interesse maturato per un titolo che paga interessi periodici.",
      "parameters": [
        {
          "name": "problema"
        },
        {
          "name": "primo_interesse"
        },
        {
          "name": "insediamento"
        },
        {
          "name": "valutare"
        },
        {
          "name": "par"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "ACCRINTM": {
      "description": "Questa funzione calcola l'interesse maturato alla scadenza per un titolo che paga interessi periodici.",
      "parameters": [
        {
          "name": "problema"
        },
        {
          "name": "insediamento"
        },
        {
          "name": "valutare"
        },
        {
          "name": "par"
        },
        {
          "name": "base",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "ACOS": {
      "description": "Questa funzione calcola l'arcocoseno, cioè l'angolo il cui coseno è il valore specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ACOSH": {
      "description": "Questa funzione calcola l'inverso del coseno iperbolico del valore specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ADDRESS": {
      "description": "Questa funzione utilizza i numeri di riga e di colonna per creare un indirizzo di cella nel testo.",
      "parameters": [
        {
          "name": "numero_riga"
        },
        {
          "name": "numero_colonna"
        },
        {
          "name": "numero_assoluto",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "stile a1",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "testo_foglio",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "AGGREGATE": {
      "description": "Questa funzione aggrega un elenco di numeri utilizzando una funzione incorporata specificata.",
      "parameters": [
        {
          "name": "numero_funzione"
        },
        {
          "name": "opzioni"
        },
        {
          "name": "rif1"
        },
        {
          "name": "rif2",
          "repeatable": "VERO"
        }
      ]
    },
    "AMORDEGRC": {
      "description": "Questa funzione restituisce l'ammortamento per un periodo contabile, tenendo conto dell'ammortamento proporzionale, e applica un coefficiente di ammortamento nel calcolo basato sulla durata delle attività.",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "data_acquisto"
        },
        {
          "name": "primo_periodo"
        },
        {
          "name": "salvare"
        },
        {
          "name": "periodo"
        },
        {
          "name": "valutare"
        },
        {
          "name": "base"
        }
      ]
    },
    "AMORLINC": {
      "description": "Questa funzione calcola l'ammortamento per un periodo contabile, tenendo conto dell'ammortamento proporzionale.",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "data_acquisto"
        },
        {
          "name": "primo_periodo"
        },
        {
          "name": "salvare"
        },
        {
          "name": "periodo"
        },
        {
          "name": "valutare"
        },
        {
          "name": "base"
        }
      ]
    },
    "AND": {
      "description": "Controlla se tutti gli argomenti sono Veri e restituisce Vero se tutti gli argomenti sono Veri.",
      "parameters": [
        {
          "name": "logico1"
        },
        {
          "name": "logico2"
        }
      ]
    },
    "ASIN": {
      "description": "Questa funzione calcola l'arcoseno, cioè l'angolo il cui seno è il valore specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ASINH": {
      "description": "Questa funzione calcola l'inverso del seno iperbolico di un numero.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ATAN": {
      "description": "Questa funzione calcola l'arcotangente, cioè l'angolo la cui tangente è il valore specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ATAN2": {
      "description": "Questa funzione calcola l'arcotangente delle coordinate x e y specificate.",
      "parameters": [
        {
          "name": "numero x"
        },
        {
          "name": "numero_y"
        }
      ]
    },
    "ATANH": {
      "description": "Questa funzione calcola la tangente iperbolica inversa di un numero.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "AVEDEV": {
      "description": "Questa funzione calcola la media delle deviazioni assolute dei valori specificati dalla loro media.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "AVERAGE": {
      "description": "Questa funzione calcola la media dei valori numerici specificati.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "AVERAGEA": {
      "description": "Questa funzione calcola la media dei valori specificati, inclusi valori di testo o logici, nonché valori numerici.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "AVERAGEIF": {
      "description": "Questa funzione calcola la media dei valori numerici specificati, a condizione che soddisfino i criteri specificati.",
      "parameters": [
        {
          "name": "allineare"
        },
        {
          "name": "criteri"
        },
        {
          "name": "intervallo_medio",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "AVERAGEIFS": {
      "description": "Questa funzione calcola la media di tutte le celle che soddisfano più criteri specificati.",
      "parameters": [
        {
          "name": "intervallo_medio"
        },
        {
          "name": "intervallo_criteri1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "criteri_intervallo2",
          "repeatable": "VERO"
        },
        {
          "name": "criteri2",
          "repeatable": "VERO"
        }
      ]
    },
    "BESSELI": {
      "description": "Questa funzione calcola la funzione di Bessel modificata del primo tipo valutata per argomenti puramente immaginari.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "ordine"
        }
      ]
    },
    "BESSELJ": {
      "description": "Questa funzione calcola la funzione di Bessel di prima specie.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "ordine"
        }
      ]
    },
    "BESSELK": {
      "description": "Questa funzione calcola la funzione di Bessel modificata di seconda specie valutata per argomenti puramente immaginari.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "ordine"
        }
      ]
    },
    "BESSELY": {
      "description": "Questa funzione calcola la funzione di Bessel di seconda specie.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "ordine"
        }
      ]
    },
    "BETADIST": {
      "description": "Questa funzione calcola la funzione di distribuzione beta cumulativa.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "inferiore",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "superiore",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "BETAINV": {
      "description": "Questa funzione calcola l'inverso della funzione di distribuzione beta cumulativa.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "inferiore",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "superiore",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "BIN2DEC": {
      "description": "Questa funzione converte un numero binario in un numero decimale",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "BIN2HEX": {
      "description": "Questa funzione converte un numero binario in un numero esadecimale.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "BIN2OCT": {
      "description": "Questa funzione converte un numero binario in un numero ottale.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "BINOMDIST": {
      "description": "Questa funzione calcola la probabilità della distribuzione binomiale del singolo termine.",
      "parameters": [
        {
          "name": "numeri"
        },
        {
          "name": "prove"
        },
        {
          "name": "probabilità"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "CEILING": {
      "description": "Questa funzione arrotonda un numero al multiplo più vicino di un valore specificato.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "significato"
        }
      ]
    },
    "CHAR": {
      "description": "Questa funzione restituisce il carattere specificato da un numero.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "CHIDIST": {
      "description": "Questa funzione calcola la probabilità unilaterale della distribuzione chi quadrato.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "CHIINV": {
      "description": "Questa funzione calcola l'inverso della probabilità unilaterale della distribuzione chi-quadrato",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "CHITEST": {
      "description": "Questa funzione calcola il test di indipendenza dalla distribuzione del chi quadrato.",
      "parameters": [
        {
          "name": "intervallo_effettivo"
        },
        {
          "name": "intervallo_previsto"
        }
      ]
    },
    "CHOOSE": {
      "description": "Questa funzione restituisce un valore da un elenco di valori.",
      "parameters": [
        {
          "name": "indice_num"
        },
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "CLEAN": {
      "description": "Questa funzione rimuove dal testo tutti i caratteri non stampabili.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "CODE": {
      "description": "Questa funzione restituisce un codice numerico per rappresentare il primo carattere in una stringa di testo. Il codice restituito corrisponde al set di caratteri di Windows (ANSI).",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "COLUMN": {
      "description": "Questa funzione restituisce il numero di colonna di un riferimento.",
      "parameters": [
        {
          "name": "riferimento"
        }
      ]
    },
    "COLUMNS": {
      "description": "Questa funzione restituisce il numero di colonne in un array.",
      "parameters": [
        {
          "name": "vettore"
        }
      ]
    },
    "COMBIN": {
      "description": "Questa funzione calcola il numero di possibili combinazioni per un numero specificato di elementi.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "numero_scelto"
        }
      ]
    },
    "COMPLEX": {
      "description": "Questa funzione converte i coefficienti reali e immaginari in un numero complesso.",
      "parameters": [
        {
          "name": "numero_reale"
        },
        {
          "name": "numero_immagine"
        },
        {
          "name": "suffisso"
        }
      ]
    },
    "CONCATENATE": {
      "description": "Questa funzione combina più stringhe di testo o numeri in un'unica stringa di testo.",
      "parameters": [
        {
          "name": "Testo 1"
        },
        {
          "name": "testo2",
          "repeatable": "VERO"
        }
      ]
    },
    "CONFIDENCE": {
      "description": "Questa funzione restituisce l'intervallo di confidenza per la media di una popolazione.",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "definizione_standard"
        },
        {
          "name": "misurare"
        }
      ]
    },
    "CONVERT": {
      "description": "Questa funzione converte un numero da un sistema di misura al suo equivalente in un altro sistema di misura.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "da_unità"
        },
        {
          "name": "all'unità"
        }
      ]
    },
    "CORREL": {
      "description": "Questa funzione restituisce il coefficiente di correlazione dei due set di dati.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        }
      ]
    },
    "COS": {
      "description": "Questa funzione restituisce il coseno dell'angolo specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "COSH": {
      "description": "Questa funzione restituisce il coseno iperbolico del valore specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "COUNT": {
      "description": "Questa funzione restituisce il numero di celle che contengono numeri.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "COUNTA": {
      "description": "Questa funzione restituisce il numero di celle che contengono numeri, testo o valori logici.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "COUNTBLANK": {
      "description": "Questa funzione restituisce il numero di celle vuote (o blank) in un intervallo di celle su un foglio.",
      "parameters": [
        {
          "name": "intervallo di celle"
        }
      ]
    },
    "COUNTIF": {
      "description": "Questa funzione restituisce il numero di celle che soddisfano una determinata condizione",
      "parameters": [
        {
          "name": "intervallo di celle"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "COUNTIFS": {
      "description": "Questa funzione restituisce il numero di celle che soddisfano più condizioni.",
      "parameters": [
        {
          "name": "intervallo_criteri1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "criteri_intervallo2",
          "repeatable": "VERO"
        },
        {
          "name": "criteri2",
          "repeatable": "VERO"
        }
      ]
    },
    "COUPDAYBS": {
      "description": "Questa funzione calcola il numero di giorni dall'inizio del periodo della cedola alla data di regolamento.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYS": {
      "description": "Questa funzione restituisce il numero di giorni nel periodo della cedola che contiene la data di regolamento.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYSNC": {
      "description": "Questa funzione calcola il numero di giorni che intercorrono tra la data di regolamento e la data della cedola successiva.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNCD": {
      "description": "Questa funzione restituisce un numero di data della cedola successiva alla data di regolamento.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNUM": {
      "description": "Questa funzione restituisce il numero di cedole in scadenza tra la data di regolamento e la data di scadenza.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPPCD": {
      "description": "Questa funzione restituisce un numero di data della cedola precedente alla data di regolamento.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "COVAR": {
      "description": "Questa funzione restituisce la covarianza, ovvero la media dei prodotti delle deviazioni per ciascuna coppia di punti dati in due serie di numeri.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        }
      ]
    },
    "CRITBINOM": {
      "description": "Questa funzione restituisce il criterio binomiale, il valore più piccolo per il quale la distribuzione binomiale cumulativa è maggiore o uguale a un valore criterio.",
      "parameters": [
        {
          "name": "prove"
        },
        {
          "name": "probabilità"
        },
        {
          "name": "alfa"
        }
      ]
    },
    "CUMIPMT": {
      "description": "Questa funzione restituisce l'interesse cumulativo pagato su un prestito tra il periodo iniziale e quello finale.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "non"
        },
        {
          "name": "valore"
        },
        {
          "name": "inizio_periodo"
        },
        {
          "name": "fine_periodo"
        },
        {
          "name": "tipo di pagamento"
        }
      ]
    },
    "CUMPRINC": {
      "description": "Questa funzione restituisce il capitale cumulativo pagato per un prestito tra il periodo iniziale e quello finale.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "non"
        },
        {
          "name": "valore"
        },
        {
          "name": "inizio_periodo"
        },
        {
          "name": "fine_periodo"
        },
        {
          "name": "tipo di pagamento"
        }
      ]
    },
    "DATE": {
      "description": "Questa funzione restituisce l'oggetto DateTime per una data particolare, specificata da anno, mese e giorno.",
      "parameters": [
        {
          "name": "anno"
        },
        {
          "name": "mese"
        },
        {
          "name": "giorno"
        }
      ]
    },
    "DATEDIF": {
      "description": "Questa funzione restituisce il numero di giorni, mesi o anni tra due date.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "data_di_fine"
        },
        {
          "name": "unità"
        }
      ]
    },
    "DATEVALUE": {
      "description": "Questa funzione restituisce un oggetto DateTime della data specificata.",
      "parameters": [
        {
          "name": "data_testo"
        }
      ]
    },
    "DAVERAGE": {
      "description": "Questa funzione calcola la media dei valori in una colonna di un elenco o di un database che corrispondono alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DAY": {
      "description": "Questa funzione restituisce il numero del giorno del mese (numero intero da 1 a 31) che corrisponde alla data specificata.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "DAYS360": {
      "description": "Questa funzione restituisce il numero di giorni tra due date in base a un anno di 360 giorni.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "data_di_fine"
        },
        {
          "name": "metodo",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "DB": {
      "description": "Questa funzione calcola l'ammortamento di un bene per un periodo specificato utilizzando il metodo del saldo fisso decrescente",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvare"
        },
        {
          "name": "vita"
        },
        {
          "name": "periodo"
        },
        {
          "name": "mese"
        }
      ]
    },
    "DCOUNT": {
      "description": "Questa funzione conta le celle che contengono numeri in una colonna di un elenco o di un database che corrispondono alle condizioni specificate",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DCOUNTA": {
      "description": "Questa funzione conta le celle non vuote in una colonna di un elenco o di un database che corrispondono alle condizioni specificate",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DDB": {
      "description": "Questa funzione calcola l'ammortamento di un bene per un periodo specificato utilizzando il metodo del doppio saldo decrescente o un altro metodo specificato.",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvare"
        },
        {
          "name": "vita"
        },
        {
          "name": "periodo"
        },
        {
          "name": "fattore"
        }
      ]
    },
    "DEC2BIN": {
      "description": "Questa funzione converte un numero decimale in un numero binario.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "DEC2HEX": {
      "description": "Questa funzione converte un numero decimale in un numero esadecimale",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "DEC2OCT": {
      "description": "Questa funzione converte un numero decimale in un numero ottale",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "DEGREES": {
      "description": "Questa funzione converte il valore specificato da radianti a gradi",
      "parameters": [
        {
          "name": "angolo"
        }
      ]
    },
    "DELTA": {
      "description": "Questa funzione identifica se due valori sono uguali. Restituisce 1 se sono uguali; restituisce 0 altrimenti.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2"
        }
      ]
    },
    "DEVSQ": {
      "description": "Questa funzione calcola la somma dei quadrati delle deviazioni dei punti dati (o di una matrice di punti dati) dalla loro media campionaria.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "DGET": {
      "description": "Questa funzione estrae un singolo valore da una colonna di un elenco o di un database che corrisponde alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DISC": {
      "description": "Questa funzione calcola il tasso di sconto per un titolo.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "prezzo"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "base"
        }
      ]
    },
    "DMAX": {
      "description": "Questa funzione restituisce il numero più grande in una colonna di un elenco o di un database che corrisponde alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DMIN": {
      "description": "Questa funzione restituisce il numero più piccolo in una colonna di un elenco o di un database che corrisponde alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DOLLAR": {
      "description": "Questa funzione converte un numero in testo utilizzando il formato valuta, con i decimali arrotondati alla cifra specificata.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "decimali",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "DOLLARDE": {
      "description": "Questa funzione converte una frazione di prezzo in dollari in un prezzo decimale in dollari.",
      "parameters": [
        {
          "name": "frazionario_dollaro"
        },
        {
          "name": "frazione"
        }
      ]
    },
    "DOLLARFR": {
      "description": "Questa funzione converte un prezzo in dollari in un numero decimale in una frazione di prezzo in dollari.",
      "parameters": [
        {
          "name": "decimale_dollaro"
        },
        {
          "name": "frazione"
        }
      ]
    },
    "DPRODUCT": {
      "description": "Questa funzione moltiplica i valori in una colonna di un elenco o di un database che corrispondono alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DSTDEV": {
      "description": "Questa funzione stima la deviazione standard di una popolazione in base a un campione utilizzando i numeri in una colonna di un elenco o di un database che corrispondono alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DSTDEVP": {
      "description": "Questa funzione calcola la deviazione standard di una popolazione in base all'intera popolazione, utilizzando i numeri in una colonna di un elenco o di un database che corrispondono alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DSUM": {
      "description": "Questa funzione aggiunge i numeri in una colonna di un elenco o di un database che corrispondono alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DURATION": {
      "description": "Questa funzione restituisce la durata di Macaulay per un valore nominale presunto di $ 100.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "buono"
        },
        {
          "name": "prodotto"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "DVAR": {
      "description": "Questa funzione stima la varianza di una popolazione in base a un campione utilizzando i numeri in una colonna di un elenco o di un database che corrispondono alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "DVARP": {
      "description": "Questa funzione calcola la varianza di una popolazione in base all'intera popolazione utilizzando i numeri in una colonna di un elenco o di un database che corrispondono alle condizioni specificate.",
      "parameters": [
        {
          "name": "banca dati"
        },
        {
          "name": "campo"
        },
        {
          "name": "criteri"
        }
      ]
    },
    "EDATE": {
      "description": "Questa funzione calcola la data che si trova il numero di mesi indicato prima o dopo una data specificata.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "mesi"
        }
      ]
    },
    "EFFECT": {
      "description": "Questa funzione calcola il tasso di interesse annuo effettivo per un dato tasso di interesse annuo nominale e il numero di periodi di capitalizzazione all'anno.",
      "parameters": [
        {
          "name": "tasso_nominale"
        },
        {
          "name": "periodo"
        }
      ]
    },
    "EOMONTH": {
      "description": "Questa funzione calcola la data per l'ultimo giorno del mese (fine mese) che corrisponde al numero di mesi indicato prima o dopo la data di inizio.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "mesi"
        }
      ]
    },
    "ERF": {
      "description": "Questa funzione calcola la funzione di errore integrata tra un limite inferiore e uno superiore.",
      "parameters": [
        {
          "name": "limite_inferiore"
        },
        {
          "name": "limite_superiore"
        }
      ]
    },
    "ERFC": {
      "description": "Questa funzione calcola la funzione di errore complementare integrata tra un limite inferiore e l'infinito.",
      "parameters": [
        {
          "name": "limite inferiore"
        }
      ]
    },
    "ERROR.TYPE": {
      "description": "Questa funzione restituisce un numero corrispondente a uno dei valori di errore.",
      "parameters": [
        {
          "name": "errore_val"
        }
      ]
    },
    "EURO": {
      "description": "Questa funzione restituisce l'equivalente di un euro in base al codice valuta ISO.",
      "parameters": [
        {
          "name": "codice"
        }
      ]
    },
    "EUROCONVERT": {
      "description": "Questa funzione converte la valuta da una valuta membro dell'euro (inclusi gli euro) a un'altra valuta membro dell'euro (inclusi gli euro).",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "fonte"
        },
        {
          "name": "bersaglio"
        },
        {
          "name": "precisione completa"
        },
        {
          "name": "precisione_triangolazione"
        }
      ]
    },
    "EVEN": {
      "description": "Questa funzione arrotonda il valore specificato al numero intero pari più vicino.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "EXACT": {
      "description": "Questa funzione restituisce true se due stringhe sono uguali; in caso contrario, false.",
      "parameters": [
        {
          "name": "Testo 1"
        },
        {
          "name": "testo2"
        }
      ]
    },
    "EXP": {
      "description": "Questa funzione restituisce e elevato alla potenza del valore specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "EXPONDIST": {
      "description": "Questa funzione restituisce la distribuzione esponenziale o la densità di probabilità.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "lambda"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "FACT": {
      "description": "Questa funzione calcola il fattoriale del numero specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "FACTDOUBLE": {
      "description": "Questa funzione calcola il fattoriale doppio del numero specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "FALSE": {
      "description": "Questa funzione restituisce il valore logico FALSE."
    },
    "FDIST": {
      "description": "Questa funzione calcola la distribuzione di probabilità F, per vedere i gradi di diversità tra due serie di dati.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "deg_libertà1"
        },
        {
          "name": "deg_libertà2"
        }
      ]
    },
    "FIND": {
      "description": "Questa funzione trova un valore di testo all'interno di un altro e restituisce la posizione del valore di testo nel testo cercato.",
      "parameters": [
        {
          "name": "trova_testo"
        },
        {
          "name": "nel_testo"
        },
        {
          "name": "numero_inizio",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "FINV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione di probabilità F.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "deg_libertà1"
        },
        {
          "name": "deg_libertà2"
        }
      ]
    },
    "FISHER": {
      "description": "Questa funzione restituisce la trasformazione di Fisher per un valore specificato.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "FISHERINV": {
      "description": "Questa funzione restituisce l'inverso della trasformazione di Fisher per un valore specificato.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "FIXED": {
      "description": "Questa funzione arrotonda un numero al numero specificato di cifre decimali, formatta il numero in formato decimale utilizzando un punto e virgole (se specificato) e restituisce il risultato come testo.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "decimali",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "senza_virgole",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "FLOOR": {
      "description": "Questa funzione arrotonda un numero per difetto al multiplo più vicino di un valore specificato.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "significato"
        }
      ]
    },
    "FORECAST": {
      "description": "Questa funzione calcola un valore futuro utilizzando valori esistenti.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "Mazzo"
        },
        {
          "name": "Matrice X"
        }
      ]
    },
    "FREQUENCY": {
      "description": "Questa funzione calcola la frequenza con cui i valori si verificano all'interno di un intervallo di valori. Questa funzione restituisce un array verticale di numeri.",
      "parameters": [
        {
          "name": "matrice_dati"
        },
        {
          "name": "matrice_contenitori"
        }
      ]
    },
    "FTEST": {
      "description": "Questa funzione restituisce il risultato di un test F, che restituisce la probabilità unilaterale che le varianze in due array non siano significativamente diverse.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        }
      ]
    },
    "FV": {
      "description": "Questa funzione restituisce il valore futuro di un investimento in base al valore attuale, ai pagamenti periodici e a un tasso di interesse specificato.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "numero"
        },
        {
          "name": "pagamento"
        },
        {
          "name": "valore"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "FVSCHEDULE": {
      "description": "Questa funzione restituisce il valore futuro di un capitale iniziale dopo aver applicato una serie di tassi di interesse composti. Calcola il valore futuro di un investimento con un tasso variabile o regolabile.",
      "parameters": [
        {
          "name": "principale"
        },
        {
          "name": "programma"
        }
      ]
    },
    "GAMMADIST": {
      "description": "Questa funzione restituisce la distribuzione gamma.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "GAMMAINV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione cumulativa gamma.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        }
      ]
    },
    "GAMMALN": {
      "description": "Questa funzione restituisce il logaritmo naturale della funzione Gamma, G(x).",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "GCD": {
      "description": "Questa funzione restituisce il massimo comun divisore di due numeri.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2"
        }
      ]
    },
    "GEOMEAN": {
      "description": "Questa funzione restituisce la media geometrica di un insieme di dati positivi.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "GESTEP": {
      "description": "Questa funzione, maggiore o uguale a step, restituisce un'indicazione se un numero è uguale a una soglia.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "fare un passo"
        }
      ]
    },
    "GROWTH": {
      "description": "Questa funzione calcola la crescita esponenziale prevista. Questa funzione restituisce i valori y per una serie di nuovi valori x specificati utilizzando i valori x e y esistenti.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "X"
        },
        {
          "name": "nuovox"
        },
        {
          "name": "costante"
        }
      ]
    },
    "HARMEAN": {
      "description": "Questa funzione restituisce la media armonica di un set di dati.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "HEX2BIN": {
      "description": "Questa funzione converte un numero esadecimale in un numero binario.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "HEX2DEC": {
      "description": "Questa funzione converte un numero esadecimale in un numero decimale.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "HEX2OCT": {
      "description": "Questa funzione converte un numero esadecimale in un numero ottale.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "HLOOKUP": {
      "description": "Questa funzione cerca un valore nella riga superiore e poi restituisce un valore nella stessa colonna da una riga specificata.",
      "parameters": [
        {
          "name": "valore_di_ricerca"
        },
        {
          "name": "matrice_tabella"
        },
        {
          "name": "indice_riga"
        },
        {
          "name": "intervallo_ricerca",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "VERO",
              "description": "Corrispondenza approssimativa"
            },
            {
              "value": "FALSO",
              "description": "Corrispondenza esatta"
            }
          ]
        }
      ]
    },
    "HOUR": {
      "description": "Questa funzione restituisce l'ora corrispondente a un orario specificato.",
      "parameters": [
        {
          "name": "tempo"
        }
      ]
    },
    "HYPGEOMDIST": {
      "description": "Questa funzione restituisce la distribuzione ipergeometrica.",
      "parameters": [
        {
          "name": "campione_s"
        },
        {
          "name": "numero_campione"
        },
        {
          "name": "popolazione"
        },
        {
          "name": "numero_pop"
        }
      ]
    },
    "IF": {
      "description": "Questa funzione esegue un confronto e restituisce uno dei due valori forniti in base a tale confronto.",
      "parameters": [
        {
          "name": "test_logico"
        },
        {
          "name": "valore_se_vero"
        },
        {
          "name": "valore_se_falso"
        }
      ]
    },
    "IFERROR": {
      "description": "Questa funzione valuta una formula e restituisce un valore specificato se si verifica un errore nel risultato della formula.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "valore_se_errore"
        }
      ]
    },
    "IMABS": {
      "description": "Questa funzione restituisce il valore assoluto o il modulo di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMAGINARY": {
      "description": "Questa funzione restituisce il coefficiente immaginario di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMARGUMENT": {
      "description": "Questa funzione restituisce l'argomento theta, che è un angolo espresso in radianti.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMCONJUGATE": {
      "description": "Questa funzione restituisce il coniugato complesso di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMCOS": {
      "description": "Questa funzione restituisce il coseno di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMDIV": {
      "description": "Questa funzione restituisce il quoziente di due numeri complessi.",
      "parameters": [
        {
          "name": "complesso"
        },
        {
          "name": "denominazione complessa"
        }
      ]
    },
    "IMEXP": {
      "description": "Questa funzione restituisce l'esponenziale di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMLN": {
      "description": "Questa funzione restituisce il logaritmo naturale di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMLOG2": {
      "description": "Questa funzione restituisce il logaritmo in base 2 di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMLOG10": {
      "description": "Questa funzione restituisce il logaritmo comune di un numero complesso.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMPOWER": {
      "description": "Questa funzione restituisce un numero complesso elevato a potenza.",
      "parameters": [
        {
          "name": "complesso"
        },
        {
          "name": "potenza"
        }
      ]
    },
    "IMPRODUCT": {
      "description": "Questa funzione restituisce il prodotto di un massimo di 29 numeri complessi nel formato di testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complessonum1"
        },
        {
          "name": "complessonum2",
          "repeatable": "VERO"
        }
      ]
    },
    "IMREAL": {
      "description": "Questa funzione restituisce il coefficiente reale di un numero complesso nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMSIN": {
      "description": "Questa funzione restituisce il seno di un numero complesso nel formato di testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMSQRT": {
      "description": "Questa funzione restituisce la radice quadrata di un numero complesso nel formato di testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMSUB": {
      "description": "Questa funzione restituisce la differenza di due numeri complessi nel formato di testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complessonum1"
        },
        {
          "name": "complessonum2"
        }
      ]
    },
    "IMSUM": {
      "description": "Questa funzione restituisce la somma di due o più numeri complessi nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complessonum1"
        },
        {
          "name": "complessonum2",
          "repeatable": "VERO"
        }
      ]
    },
    "INDEX": {
      "description": "Questa funzione restituisce un valore o il riferimento a un valore all'interno di un array o di un intervallo.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "numero_riga"
        },
        {
          "name": "numero_colonna"
        },
        {
          "name": "numero_area"
        }
      ]
    },
    "INDIRECT": {
      "description": "Questa funzione restituisce il riferimento specificato da una stringa di testo. I riferimenti vengono immediatamente valutati per visualizzarne il contenuto.",
      "parameters": [
        {
          "name": "testo_riferimento"
        },
        {
          "name": "stile_a1",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "INT": {
      "description": "Questa funzione arrotonda per difetto un numero specificato al numero intero più vicino.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "INTERCEPT": {
      "description": "Questa funzione restituisce le coordinate di un punto in cui una linea interseca l'asse y, utilizzando i valori x e y esistenti.",
      "parameters": [
        {
          "name": "dipendente"
        },
        {
          "name": "indipendente"
        }
      ]
    },
    "INTRATE": {
      "description": "Questa funzione calcola il tasso di interesse per un titolo completamente investito.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "investimento"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "base"
        }
      ]
    },
    "IPMT": {
      "description": "Questa funzione calcola il pagamento degli interessi su un prestito.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "per"
        },
        {
          "name": "non"
        },
        {
          "name": "valore"
        },
        {
          "name": "fval"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "IRR": {
      "description": "Questa funzione restituisce il tasso di rendimento interno per una serie di flussi di cassa rappresentati dai numeri in un array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "stima"
        }
      ]
    },
    "ISBLANK": {
      "description": "Questa funzione verifica se un valore, un'espressione o il contenuto di una cella referenziata è vuoto.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISERR": {
      "description": "Questa funzione, Errore diverso da Non disponibile, verifica se un valore, un'espressione o il contenuto di una cella referenziata contiene un errore diverso da Non disponibile (#N/D).",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISERROR": {
      "description": "Questa funzione, Is Error of Any Kind, verifica se un valore, un'espressione o il contenuto di una cella referenziata contiene un errore di qualche tipo.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISEVEN": {
      "description": "Questa funzione, Is Number Even, verifica se un valore, un'espressione o il contenuto di una cella referenziata è pari.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISLOGICAL": {
      "description": "Questa funzione verifica se un valore, un'espressione o il contenuto di una cella referenziata è un valore logico (booleano).",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISNA": {
      "description": "Questa funzione, Non disponibile, verifica se un valore, un'espressione o il contenuto di una cella referenziata presenta il valore di errore non disponibile (#N/A).",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISNONTEXT": {
      "description": "Questa funzione verifica se un valore, un'espressione o il contenuto di una cella referenziata contiene un tipo di dati diverso dal testo.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISNUMBER": {
      "description": "Questa funzione verifica se un valore, un'espressione o il contenuto di una cella referenziata contiene dati numerici.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISODD": {
      "description": "Questa funzione, Is Number Odd, verifica se un valore, un'espressione o il contenuto di una cella referenziata contiene dati numerici.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISPMT": {
      "description": "Questa funzione calcola l'interesse pagato durante un periodo specifico di un investimento.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "per"
        },
        {
          "name": "non"
        },
        {
          "name": "fotovoltaico"
        }
      ]
    },
    "ISREF": {
      "description": "Questa funzione, Is Reference, verifica se un valore, un'espressione o il contenuto di una cella referenziata è un riferimento a un'altra cella.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "ISTEXT": {
      "description": "Questa funzione verifica se un valore, un'espressione o il contenuto di una cella referenziata contiene dati di testo.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "KURT": {
      "description": "Questa funzione restituisce la curtosi di un set di dati.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2"
        },
        {
          "name": "numero3"
        },
        {
          "name": "numero4",
          "repeatable": "VERO"
        }
      ]
    },
    "LARGE": {
      "description": "Questa funzione restituisce il valore n-esimo più grande in un set di dati, dove n è specificato.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "N"
        }
      ]
    },
    "LCM": {
      "description": "Questa funzione restituisce il minimo comune multiplo di due numeri.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2"
        }
      ]
    },
    "LEFT": {
      "description": "Questa funzione restituisce i caratteri più a sinistra specificati da un valore di testo, in base al numero di caratteri specificato.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "num_caratteri"
        }
      ]
    },
    "LEN": {
      "description": "Questa funzione restituisce la lunghezza del numero di caratteri in una stringa di testo.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "LINEST": {
      "description": "Questa funzione calcola le statistiche per una linea.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "X"
        },
        {
          "name": "costante"
        },
        {
          "name": "statistiche"
        }
      ]
    },
    "LN": {
      "description": "Questa funzione restituisce il logaritmo naturale del numero specificato.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "LOG": {
      "description": "Questa funzione restituisce il logaritmo in base Y di un numero X.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "base"
        }
      ]
    },
    "LOG10": {
      "description": "Questa funzione restituisce il logaritmo in base 10 del numero specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "LOGEST": {
      "description": "Questa funzione calcola una curva esponenziale che si adatta ai dati e restituisce un array di valori che descrive la curva.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "X"
        },
        {
          "name": "costante"
        },
        {
          "name": "statistiche"
        }
      ]
    },
    "LOGINV": {
      "description": "Questa funzione restituisce l'inverso della funzione di distribuzione cumulativa lognormale di x, dove LN(x) è distribuita normalmente con la media e la deviazione standard specificate.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        }
      ]
    },
    "LOGNORMDIST": {
      "description": "Questa funzione restituisce la distribuzione normale logaritmica naturale cumulativa di x, dove LN(x) è distribuita normalmente con la media e la deviazione standard specificate. Analizza i dati che sono stati trasformati logaritmicamente con questa funzione.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        }
      ]
    },
    "LOOKUP": {
      "description": "Questa funzione cerca un valore e restituisce un valore dalla stessa posizione in una seconda area.",
      "parameters": [
        {
          "name": "valore_di_ricerca"
        },
        {
          "name": "vettore_di_ricerca"
        },
        {
          "name": "vettore_risultato"
        }
      ]
    },
    "LOWER": {
      "description": "Questa funzione converte il testo in lettere minuscole.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "MATCH": {
      "description": "Questa funzione restituisce la posizione relativa di un elemento specificato in un intervallo.",
      "parameters": [
        {
          "name": "valore_di_ricerca"
        },
        {
          "name": "cerca_array"
        },
        {
          "name": "tipo_corrispondenza"
        }
      ]
    },
    "XMATCH": {
      "description": "Questa funzione restituisce la posizione relativa di un elemento in un array. Per impostazione predefinita, è richiesta una corrispondenza esatta.",
      "parameters": [
        {
          "name": "valore_di_ricerca"
        },
        {
          "name": "cerca_array"
        },
        {
          "name": "modalità_partita",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "0",
              "description": "Corrispondenza esatta (predefinita)"
            },
            {
              "value": "-1",
              "description": "Corrispondenza esatta o articolo più piccolo successivo"
            },
            {
              "value": "1",
              "description": "Corrispondenza esatta o articolo più grande successivo"
            },
            {
              "value": "2",
              "description": "Una corrispondenza jolly in cui *, ? e ~ hanno un significato speciale."
            }
          ]
        },
        {
          "name": "modalità_di_ricerca",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "1",
              "description": "Cerca dal primo all'ultimo (predefinito)"
            },
            {
              "value": "-1",
              "description": "Cerca dall'ultimo al primo (ricerca inversa)"
            },
            {
              "value": "2",
              "description": "Esegui una ricerca binaria che si basa su lookup_array ordinato in ordine crescente. Se non ordinato, verranno restituiti risultati non validi. "
            },
            {
              "value": "-2",
              "description": "Esegui una ricerca binaria che si basa su lookup_array ordinato in ordine decrescente. Se non ordinato, verranno restituiti risultati non validi."
            }
          ]
        }
      ]
    },
    "XLOOKUP": {
      "description": "Questa funzione cerca una corrispondenza in un intervallo o in un array e restituisce l'elemento corrispondente da un secondo intervallo o array. Per impostazione predefinita, viene utilizzata una corrispondenza esatta.",
      "parameters": [
        {
          "name": "valore_di_ricerca"
        },
        {
          "name": "cerca_array"
        },
        {
          "name": "ritorna_array"
        },
        {
          "name": "se_non_trovato",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "modalità_partita",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "0",
              "description": "Corrispondenza esatta (predefinita)"
            },
            {
              "value": "-1",
              "description": "Corrispondenza esatta o articolo più piccolo successivo"
            },
            {
              "value": "1",
              "description": "Corrispondenza esatta o articolo più grande successivo"
            },
            {
              "value": "2",
              "description": "Una corrispondenza jolly in cui *, ? e ~ hanno un significato speciale."
            }
          ]
        },
        {
          "name": "modalità_di_ricerca",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "1",
              "description": "Cerca dal primo all'ultimo (predefinito)"
            },
            {
              "value": "-1",
              "description": "Cerca dall'ultimo al primo (ricerca inversa)"
            },
            {
              "value": "2",
              "description": "Esegui una ricerca binaria che si basa su lookup_array ordinato in ordine crescente. Se non ordinato, verranno restituiti risultati non validi. "
            },
            {
              "value": "-2",
              "description": "Esegui una ricerca binaria che si basa su lookup_array ordinato in ordine decrescente. Se non ordinato, verranno restituiti risultati non validi."
            }
          ]
        }
      ]
    },
    "MAX": {
      "description": "Questa funzione restituisce il valore massimo, il valore più grande, tra tutti i valori negli argomenti.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "MAXA": {
      "description": "Questa funzione restituisce il valore più grande in un elenco di argomenti, inclusi testo e valori logici.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "MDETERM": {
      "description": "Questa funzione restituisce il determinante della matrice di un array.",
      "parameters": [
        {
          "name": "vettore"
        }
      ]
    },
    "MDURATION": {
      "description": "Questa funzione calcola la durata Macaulay modificata di un titolo con un valore nominale presunto di $ 100.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "buono"
        },
        {
          "name": "prodotto"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "MEDIAN": {
      "description": "Questa funzione restituisce la mediana, il numero al centro dell'insieme di numeri fornito; vale a dire, metà dei numeri ha valori maggiori della mediana e metà ha valori minori della mediana.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "MID": {
      "description": "Questa funzione restituisce il numero richiesto di caratteri da una stringa di testo a partire dalla posizione specificata e in base al numero di caratteri specificato.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "numero_inizio"
        },
        {
          "name": "num_caratteri"
        }
      ]
    },
    "MIN": {
      "description": "Questa funzione restituisce il valore minimo, il valore più piccolo, di tutti i valori negli argomenti.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "MINA": {
      "description": "Questa funzione restituisce il valore minimo in un elenco di argomenti, inclusi testo e valori logici.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "MINUTE": {
      "description": "Questa funzione restituisce il minuto corrispondente a un orario specificato.",
      "parameters": [
        {
          "name": "tempo"
        }
      ]
    },
    "MINVERSE": {
      "description": "Questa funzione restituisce la matrice inversa della matrice memorizzata in un array.",
      "parameters": [
        {
          "name": "vettore"
        }
      ]
    },
    "MIRR": {
      "description": "Questa funzione restituisce il tasso di rendimento interno modificato per una serie di flussi di cassa periodici.",
      "parameters": [
        {
          "name": "valori"
        },
        {
          "name": "tasso_finanziario"
        },
        {
          "name": "tasso_di_reinvestimento"
        }
      ]
    },
    "MMULT": {
      "description": "Questa funzione restituisce il prodotto di matrici per due array.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        }
      ]
    },
    "MOD": {
      "description": "Questa funzione restituisce il resto di un'operazione di divisione.",
      "parameters": [
        {
          "name": "dividendo"
        },
        {
          "name": "divisore"
        }
      ]
    },
    "MODE": {
      "description": "Questa funzione restituisce il valore che ricorre più frequentemente in un set di dati.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "MONTH": {
      "description": "Questa funzione restituisce il mese corrispondente al valore di data specificato.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "MROUND": {
      "description": "Questa funzione restituisce un numero arrotondato al multiplo desiderato.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "multiplo"
        }
      ]
    },
    "MULTINOMIAL": {
      "description": "Questa funzione calcola il rapporto tra il fattoriale di una somma di valori e il prodotto dei fattoriali.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "MUNIT": {
      "description": "La funzione restituisce la matrice unitaria per la dimensione specificata.",
      "parameters": [
        {
          "name": "dimensione"
        }
      ]
    },
    "N": {
      "description": "Questa funzione restituisce un valore convertito in un numero.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "NA": {
      "description": "Questa funzione restituisce il valore di errore #N/A, ovvero non disponibile."
    },
    "SHEET": {
      "description": "Restituisce il numero del foglio di riferimento.",
      "parameters": [
        {
          "name": "valore",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SHEETS": {
      "description": "Restituisce il numero di fogli in un riferimento.",
      "parameters": [
        {
          "name": "riferimento",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "NEGBINOMDIST": {
      "description": "Questa funzione restituisce la distribuzione binomiale negativa.",
      "parameters": [
        {
          "name": "numero_f"
        },
        {
          "name": "numeri"
        },
        {
          "name": "probabilità"
        }
      ]
    },
    "NETWORKDAYS": {
      "description": "Questa funzione restituisce il numero totale di giorni lavorativi completi tra la data di inizio e quella di fine.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "data_di_fine"
        },
        {
          "name": "vacanze",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "NOMINAL": {
      "description": "Questa funzione restituisce il tasso di interesse annuo nominale per un dato tasso effettivo e numero di periodi di capitalizzazione all'anno.",
      "parameters": [
        {
          "name": "tasso_effetto"
        },
        {
          "name": "periodo"
        }
      ]
    },
    "NORMDIST": {
      "description": "Questa funzione restituisce la distribuzione cumulativa normale per la media e la deviazione standard specificate.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NORMINV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione cumulativa normale per la media e la deviazione standard specificate.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        }
      ]
    },
    "NORMSDIST": {
      "description": "Questa funzione restituisce la funzione di distribuzione cumulativa normale standard.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "NORMSINV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione cumulativa normale standard. La distribuzione ha una media di zero e una deviazione standard di uno.",
      "parameters": [
        {
          "name": "probabilità"
        }
      ]
    },
    "NOT": {
      "description": "Questa funzione inverte il valore logico del suo argomento.",
      "parameters": [
        {
          "name": "logico"
        }
      ]
    },
    "NOW": {
      "description": "Questa funzione restituisce la data e l'ora correnti."
    },
    "NPER": {
      "description": "Questa funzione restituisce il numero di periodi per un investimento in base al valore attuale, al valore futuro, ai pagamenti periodici e a un tasso di interesse specificato.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "pagamento"
        },
        {
          "name": "valore"
        },
        {
          "name": "fval"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "NPV": {
      "description": "Questa funzione calcola il valore attuale netto di un investimento utilizzando un tasso di sconto e una serie di pagamenti e redditi futuri.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "OBJECT": {
      "description": "Questa funzione converte la sequenza proprietà/espressione in un oggetto.",
      "parameters": [
        {
          "name": "proprietà1",
          "repeatable": "VERO"
        },
        {
          "name": "espressione1",
          "repeatable": "VERO"
        }
      ]
    },
    "OCT2BIN": {
      "description": "Questa funzione converte un numero ottale in un numero binario.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "OCT2DEC": {
      "description": "Questa funzione converte un numero ottale in un numero decimale.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "OCT2HEX": {
      "description": "Questa funzione converte un numero ottale in un numero esadecimale.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "luoghi"
        }
      ]
    },
    "ODD": {
      "description": "Questa funzione arrotonda il valore specificato al numero intero dispari più vicino.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ODDFPRICE": {
      "description": "Questa funzione calcola il prezzo per un valore nominale di 100 $ di un titolo con un primo periodo dispari.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "problema"
        },
        {
          "name": "primo_coupon"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prodotto"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDFYIELD": {
      "description": "Questa funzione calcola il rendimento di un titolo con un primo periodo dispari.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "problema"
        },
        {
          "name": "primo_coupon"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prezzo"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLPRICE": {
      "description": "Questa funzione calcola il prezzo per 100 $ di valore nominale di un titolo con un periodo di ultima cedola dispari.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "ultimo_interesse"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prodotto"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLYIELD": {
      "description": "Questa funzione calcola il rendimento di un titolo con un ultimo periodo dispari.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "ultimo_interesse"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prezzo"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "OFFSET": {
      "description": "Questa funzione restituisce un riferimento a un intervallo. L'intervallo è un numero specificato di righe e colonne da una cella o un intervallo di celle. La funzione restituisce una singola cella o un intervallo di celle.",
      "parameters": [
        {
          "name": "riferimento"
        },
        {
          "name": "righe"
        },
        {
          "name": "colonne"
        },
        {
          "name": "altezza",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "larghezza",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "OR": {
      "description": "Questa funzione calcola l'OR logico. Restituisce TRUE se uno qualsiasi dei suoi argomenti è vero; altrimenti, restituisce FALSE se tutti gli argomenti sono falsi.",
      "parameters": [
        {
          "name": "logico1"
        },
        {
          "name": "logico2",
          "repeatable": "VERO"
        }
      ]
    },
    "PEARSON": {
      "description": "Questa funzione restituisce il coefficiente di correlazione del prodotto-momento di Pearson, un indice adimensionale compreso tra -1,0 e 1,0 inclusi, indicativo della relazione lineare di due set di dati.",
      "parameters": [
        {
          "name": "array_ind"
        },
        {
          "name": "array_dip"
        }
      ]
    },
    "PERCENTILE": {
      "description": "Questa funzione restituisce l'n-esimo percentile dei valori in un intervallo.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "N"
        }
      ]
    },
    "PERCENTRANK": {
      "description": "Questa funzione restituisce il rango di un valore in un set di dati come percentuale del set di dati.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "X"
        },
        {
          "name": "significato"
        }
      ]
    },
    "PERMUT": {
      "description": "Questa funzione restituisce il numero di possibili permutazioni per un numero specificato di elementi.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "numero_scelto"
        }
      ]
    },
    "PI": {
      "description": "Questa funzione restituisce PI come 3,1415926536."
    },
    "PMT": {
      "description": "Questa funzione restituisce l'importo del pagamento per un prestito dato il valore attuale, il tasso di interesse specificato e il numero di termini.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "non"
        },
        {
          "name": "valore"
        },
        {
          "name": "fval"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "POISSON": {
      "description": "Questa funzione restituisce la distribuzione di Poisson.",
      "parameters": [
        {
          "name": "neventi"
        },
        {
          "name": "Significare"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "POWER": {
      "description": "Questa funzione eleva il numero specificato alla potenza specificata.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "energia"
        }
      ]
    },
    "PPMT": {
      "description": "Questa funzione restituisce l'importo del pagamento del capitale per un prestito, dati il ​​valore attuale, il tasso di interesse specificato e il numero di termini.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "per"
        },
        {
          "name": "non"
        },
        {
          "name": "valore"
        },
        {
          "name": "fval"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "PRICE": {
      "description": "Questa funzione calcola il prezzo per 100 $ di valore nominale di un titolo a interesse periodico",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prodotto"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEDISC": {
      "description": "Questa funzione restituisce il prezzo per un valore nominale di 100 $ di un titolo scontato.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "sconto"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEMAT": {
      "description": "Questa funzione restituisce il prezzo alla scadenza per un valore nominale di 100 $ di un titolo che paga interessi.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "problema"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prodotto"
        },
        {
          "name": "base"
        }
      ]
    },
    "PROB": {
      "description": "Questa funzione restituisce la probabilità che i valori in un intervallo siano compresi tra due limiti.",
      "parameters": [
        {
          "name": "intervallo x"
        },
        {
          "name": "intervallo_probabile"
        },
        {
          "name": "limite_inferiore"
        },
        {
          "name": "limite_superiore"
        }
      ]
    },
    "PRODUCT": {
      "description": "Questa funzione moltiplica tutti gli argomenti e restituisce il prodotto.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "PROPER": {
      "description": "Questa funzione trasforma in maiuscolo la prima lettera di ogni parola di una stringa di testo.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "PROPERTY": {
      "description": "Questa funzione restituisce il valore della proprietà path nell'oggetto.",
      "parameters": [
        {
          "name": "espressione_dati"
        },
        {
          "name": "percorso_proprietà"
        }
      ]
    },
    "PV": {
      "description": "Questa funzione restituisce il valore attuale di un investimento in base al tasso di interesse, al numero e all'importo dei pagamenti periodici e al valore futuro. Il valore attuale è l'importo totale che una serie di pagamenti futuri vale ora.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "numero"
        },
        {
          "name": "pagamento"
        },
        {
          "name": "fval"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "QUARTILE": {
      "description": "Questa funzione restituisce a quale quartile (a quale quarto o 25 percento) di un set di dati appartiene un valore.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "quarto"
        }
      ]
    },
    "QUOTIENT": {
      "description": "Questa funzione restituisce la parte intera di una divisione. Usala per ignorare il resto di una divisione.",
      "parameters": [
        {
          "name": "numeratore"
        },
        {
          "name": "denominatore"
        }
      ]
    },
    "RADIANS": {
      "description": "Questa funzione converte il numero specificato da gradi a radianti.",
      "parameters": [
        {
          "name": "angolo"
        }
      ]
    },
    "RAND": {
      "description": "Questa funzione restituisce un numero casuale distribuito uniformemente tra 0 e 1."
    },
    "RANDBETWEEN": {
      "description": "Questa funzione restituisce un numero casuale compreso tra i numeri specificati.",
      "parameters": [
        {
          "name": "metter il fondo a"
        },
        {
          "name": "superiore"
        }
      ]
    },
    "RANGEBLOCKSPARKLINE": {
      "description": "Questa funzione restituisce un rangetemplate.",
      "parameters": [
        {
          "name": "intervallo_template"
        },
        {
          "name": "espressione_dati"
        }
      ]
    },
    "RANK": {
      "description": "Questa funzione restituisce il rango di un numero in un set di numeri. Se si ordinasse il set, il rango del numero sarebbe la sua posizione nell'elenco.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "rif"
        },
        {
          "name": "ordine",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "RATE": {
      "description": "Questa funzione restituisce il tasso di interesse per periodo di una rendita.",
      "parameters": [
        {
          "name": "non"
        },
        {
          "name": "tempo"
        },
        {
          "name": "valore"
        },
        {
          "name": "fval"
        },
        {
          "name": "tipo"
        },
        {
          "name": "Indovinare"
        }
      ]
    },
    "RECEIVED": {
      "description": "Questa funzione restituisce l'importo ricevuto alla scadenza per un titolo completamente investito.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "investimento"
        },
        {
          "name": "sconto"
        },
        {
          "name": "base"
        }
      ]
    },
    "REPLACE": {
      "description": "Questa funzione sostituisce parte di una stringa di testo con una stringa di testo diversa, in base al numero di caratteri specificato.",
      "parameters": [
        {
          "name": "vecchio_testo"
        },
        {
          "name": "numero_inizio"
        },
        {
          "name": "num_caratteri"
        },
        {
          "name": "nuovo_testo"
        }
      ]
    },
    "REPT": {
      "description": "Questa funzione ripete il testo un numero specificato di volte.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "numero_volte"
        }
      ]
    },
    "RIGHT": {
      "description": "Questa funzione restituisce i caratteri più a destra specificati da un valore di testo, in base al numero di caratteri specificato.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "num_caratteri"
        }
      ]
    },
    "ROMAN": {
      "description": "Questa funzione converte un numero arabo nel suo equivalente testuale in numeri romani.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "modulo"
        }
      ]
    },
    "ROUND": {
      "description": "Questa funzione arrotonda il valore specificato al numero più vicino, utilizzando il numero specificato di cifre decimali.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "num_cifre"
        }
      ]
    },
    "ROUNDDOWN": {
      "description": "Questa funzione arrotonda per difetto il numero specificato al numero più vicino, utilizzando il numero specificato di cifre decimali.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "num_cifre"
        }
      ]
    },
    "ROUNDUP": {
      "description": "Questa funzione arrotonda il numero specificato al numero più vicino, utilizzando il numero specificato di cifre decimali.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "num_cifre"
        }
      ]
    },
    "ROW": {
      "description": "Questa funzione restituisce il numero di una riga da un riferimento.",
      "parameters": [
        {
          "name": "riferimento"
        }
      ]
    },
    "ROWS": {
      "description": "Questa funzione restituisce il numero di righe in un array.",
      "parameters": [
        {
          "name": "vettore"
        }
      ]
    },
    "RSQ": {
      "description": "Questa funzione restituisce il quadrato del coefficiente di correlazione del prodotto-momento di Pearson (R-quadrato) attraverso punti dati in y e x note.",
      "parameters": [
        {
          "name": "array_dip"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SEARCH": {
      "description": "Questa funzione trova una stringa di testo in un'altra stringa di testo e restituisce l'indice della posizione iniziale del testo trovato.",
      "parameters": [
        {
          "name": "trova_testo"
        },
        {
          "name": "nel_testo"
        },
        {
          "name": "numero_inizio",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SECOND": {
      "description": "Questa funzione restituisce il valore dei secondi (da 0 a 59) per un tempo specificato.",
      "parameters": [
        {
          "name": "tempo"
        }
      ]
    },
    "SERIESSUM": {
      "description": "Questa funzione restituisce la somma di una serie di potenze.",
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
          "name": "coefficienti"
        }
      ]
    },
    "SIGN": {
      "description": "Questa funzione restituisce il segno di un numero o di un'espressione.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "SIN": {
      "description": "Questa funzione restituisce il seno dell'angolo specificato.",
      "parameters": [
        {
          "name": "angolo"
        }
      ]
    },
    "SINH": {
      "description": "Questa funzione restituisce il seno iperbolico del numero specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "SKEW": {
      "description": "Questa funzione restituisce l'asimmetria di una distribuzione.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "SLN": {
      "description": "Questa funzione restituisce l'ammortamento lineare di un bene per un periodo.",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvare"
        },
        {
          "name": "vita"
        }
      ]
    },
    "SLOPE": {
      "description": "Questa funzione calcola la pendenza di una regressione lineare.",
      "parameters": [
        {
          "name": "array_dip"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SMALL": {
      "description": "Questa funzione restituisce il valore n-esimo più piccolo in un set di dati, dove n è specificato.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "N"
        }
      ]
    },
    "SQRT": {
      "description": "Questa funzione restituisce la radice quadrata positiva del numero specificato.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "SQRTPI": {
      "description": "Questa funzione restituisce la radice quadrata positiva di un multiplo di pi greco (p).",
      "parameters": [
        {
          "name": "multiplo"
        }
      ]
    },
    "STANDARDIZE": {
      "description": "Questa funzione restituisce un valore normalizzato da una distribuzione caratterizzata da media e deviazione standard.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        }
      ]
    },
    "STDEVA": {
      "description": "Questa funzione restituisce la deviazione standard per un insieme di numeri, testo o valori logici.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "STDEVP": {
      "description": "Questa funzione restituisce la deviazione standard per un'intera popolazione specificata (di valori numerici).",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "STDEVPA": {
      "description": "Questa funzione restituisce la deviazione standard per un'intera popolazione specificata, inclusi valori di testo o logici, nonché valori numerici.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "STEYX": {
      "description": "Questa funzione restituisce l'errore standard del valore y previsto per ogni x. L'errore standard è una misura della quantità di errore nella previsione di y per un valore di x.",
      "parameters": [
        {
          "name": "array_dip"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SUBSTITUTE": {
      "description": "Questa funzione sostituisce i caratteri specificati in una stringa esistente con una nuova stringa.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "vecchio_testo"
        },
        {
          "name": "nuovo_testo"
        },
        {
          "name": "numero_istanza",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SUBTOTAL": {
      "description": "Questa funzione calcola un subtotale di un elenco di numeri utilizzando una funzione incorporata specificata.",
      "parameters": [
        {
          "name": "numero_funzione"
        },
        {
          "name": "rif1"
        },
        {
          "name": "rif2",
          "repeatable": "VERO"
        }
      ]
    },
    "SUM": {
      "description": "Questa funzione restituisce la somma delle celle o di un intervallo di celle.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "SUMIF": {
      "description": "Questa funzione aggiunge le celle utilizzando un criterio specificato.",
      "parameters": [
        {
          "name": "allineare"
        },
        {
          "name": "criteri"
        },
        {
          "name": "somma_intervallo"
        }
      ]
    },
    "SUMIFS": {
      "description": "Questa funzione aggiunge le celle in un intervallo utilizzando più criteri.",
      "parameters": [
        {
          "name": "somma_intervallo"
        },
        {
          "name": "intervallo_criteri1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "criteri_intervallo2",
          "repeatable": "VERO"
        },
        {
          "name": "criteri2",
          "repeatable": "VERO"
        }
      ]
    },
    "SUMPRODUCT": {
      "description": "Questa funzione restituisce la somma dei prodotti delle celle. Moltiplica i componenti corrispondenti negli array specificati e restituisce la somma di tali prodotti.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2",
          "repeatable": "VERO"
        }
      ]
    },
    "SUMSQ": {
      "description": "Questa funzione restituisce la somma dei quadrati degli argomenti.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "SUMX2MY2": {
      "description": "Questa funzione restituisce la somma della differenza dei quadrati dei valori corrispondenti in due array.",
      "parameters": [
        {
          "name": "matrice_x"
        },
        {
          "name": "matrice_y"
        }
      ]
    },
    "SUMX2PY2": {
      "description": "Questa funzione restituisce la somma della somma dei quadrati dei valori corrispondenti in due array.",
      "parameters": [
        {
          "name": "matrice_x"
        },
        {
          "name": "matrice_y"
        }
      ]
    },
    "SUMXMY2": {
      "description": "Questa funzione restituisce la somma del quadrato delle differenze dei valori corrispondenti in due array.",
      "parameters": [
        {
          "name": "matrice_x"
        },
        {
          "name": "matrice_y"
        }
      ]
    },
    "SYD": {
      "description": "Questa funzione restituisce la somma delle cifre degli anni di ammortamento di un bene per un periodo specificato.",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvare"
        },
        {
          "name": "vita"
        },
        {
          "name": "periodo"
        }
      ]
    },
    "T": {
      "description": "Questa funzione restituisce il testo presente in una cella specificata.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "TAN": {
      "description": "Questa funzione restituisce la tangente dell'angolo specificato.",
      "parameters": [
        {
          "name": "angolo"
        }
      ]
    },
    "TANH": {
      "description": "Questa funzione restituisce la tangente iperbolica del numero specificato.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "TBILLEQ": {
      "description": "Questa funzione restituisce il rendimento equivalente di un buono del Tesoro (o T-bill)",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "sconto"
        }
      ]
    },
    "TBILLPRICE": {
      "description": "Questa funzione restituisce il prezzo per un valore nominale di 100 $ di un buono del Tesoro (o T-bill).",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "sconto"
        }
      ]
    },
    "TBILLYIELD": {
      "description": "Questa funzione restituisce il rendimento di un buono del Tesoro (o T-bill).",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "prezzo per"
        }
      ]
    },
    "TDIST": {
      "description": "Questa funzione restituisce la probabilità per la distribuzione t.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "libertà_deg"
        },
        {
          "name": "code"
        }
      ]
    },
    "TEXT": {
      "description": "Questa funzione formatta un numero e lo converte in testo.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "formato_testo"
        }
      ]
    },
    "TIME": {
      "description": "Questa funzione restituisce l'oggetto TimeSpan per un tempo specificato.",
      "parameters": [
        {
          "name": "ora"
        },
        {
          "name": "minuto"
        },
        {
          "name": "secondo"
        }
      ]
    },
    "TIMEVALUE": {
      "description": "Questa funzione restituisce l'oggetto TimeSpan dell'ora rappresentata da una stringa di testo.",
      "parameters": [
        {
          "name": "testo_tempo"
        }
      ]
    },
    "TINV": {
      "description": "Questa funzione restituisce il valore t della distribuzione t dello studente in funzione della probabilità e dei gradi di libertà.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "TODAY": {
      "description": "Questa funzione restituisce la data e l'ora della data corrente."
    },
    "TRANSPOSE": {
      "description": "Questa funzione restituisce un intervallo verticale di celle come intervallo orizzontale o un intervallo orizzontale di celle come intervallo verticale.",
      "parameters": [
        {
          "name": "vettore"
        }
      ]
    },
    "TREND": {
      "description": "Questa funzione restituisce valori lungo un andamento lineare. Questa funzione adatta una linea retta ai valori noti x e y degli array. Trend restituisce i valori y lungo quella linea per l'array dei nuovi valori x specificati.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "X"
        },
        {
          "name": "nuovox"
        },
        {
          "name": "costante"
        }
      ]
    },
    "TRIM": {
      "description": "Questa funzione rimuove gli spazi extra da una stringa e lascia spazi singoli tra le parole.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "TRIMMEAN": {
      "description": "Questa funzione restituisce la media di un sottoinsieme di dati escludendo i dati in alto e in basso.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "percento"
        }
      ]
    },
    "TRUE": {
      "description": "Questa funzione restituisce il valore logico VERO."
    },
    "TRUNC": {
      "description": "Questa funzione rimuove la parte frazionaria specificata del numero specificato.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "num_cifre"
        }
      ]
    },
    "TTEST": {
      "description": "Questa funzione restituisce la probabilità associata a un test t.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        },
        {
          "name": "code"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "TYPE": {
      "description": "Questa funzione restituisce il tipo di valore.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "UPPER": {
      "description": "Questa funzione converte il testo in lettere maiuscole.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "VALUE": {
      "description": "Questa funzione converte una stringa di testo che è un numero in un valore numerico.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "VAR": {
      "description": "Questa funzione restituisce la varianza in base a un campione di una popolazione, che utilizza solo valori numerici.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "VARA": {
      "description": "Questa funzione restituisce la varianza in base a un campione di una popolazione, che include valori numerici, logici o di testo.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "VARP": {
      "description": "Questa funzione restituisce la varianza basata sull'intera popolazione, che utilizza solo valori numerici.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "VARPA": {
      "description": "Questa funzione restituisce la varianza in base all'intera popolazione, che include valori numerici, logici o di testo.",
      "parameters": [
        {
          "name": "valore1"
        },
        {
          "name": "valore2",
          "repeatable": "VERO"
        }
      ]
    },
    "VDB": {
      "description": "Questa funzione restituisce l'ammortamento di un bene per qualsiasi periodo specificato utilizzando il metodo delle quote decrescenti variabili.",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvare"
        },
        {
          "name": "vita"
        },
        {
          "name": "inizio_periodo"
        },
        {
          "name": "fine_periodo"
        },
        {
          "name": "fattore"
        },
        {
          "name": "nessun_interruttore"
        }
      ]
    },
    "VLOOKUP": {
      "description": "Questa funzione cerca un valore nella colonna più a sinistra e restituisce un valore nella stessa riga da una colonna specificata.",
      "parameters": [
        {
          "name": "valore_di_ricerca"
        },
        {
          "name": "matrice_tabella"
        },
        {
          "name": "numero_indice_colonna"
        },
        {
          "name": "intervallo_ricerca",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "VERO",
              "description": "Corrispondenza approssimativa"
            },
            {
              "value": "FALSO",
              "description": "Corrispondenza esatta"
            }
          ]
        }
      ]
    },
    "WEEKDAY": {
      "description": "Questa funzione restituisce il numero corrispondente al giorno della settimana per una data specificata.",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "WEEKNUM": {
      "description": "Questa funzione restituisce un numero che indica numericamente la settimana dell'anno.",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "tipo di settimana"
        }
      ]
    },
    "DATEPART": {
      "description": "Questa funzione formatta una data e la converte in testo.",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "formato_testo"
        },
        {
          "name": "tipo di settimana",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "WEIBULL": {
      "description": "Questa funzione restituisce la distribuzione di Weibull a due parametri, spesso utilizzata nell'analisi dell'affidabilità.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "WORKDAY": {
      "description": "Questa funzione restituisce il numero di giorni lavorativi prima o dopo la data di inizio.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "giorni"
        },
        {
          "name": "vacanze",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "XIRR": {
      "description": "Questa funzione calcola il tasso interno di rendimento per un programma di flussi di cassa che potrebbe non essere periodico.",
      "parameters": [
        {
          "name": "valori"
        },
        {
          "name": "date"
        },
        {
          "name": "Indovinare"
        }
      ]
    },
    "XNPV": {
      "description": "Questa funzione calcola il valore attuale netto per una programmazione di flussi di cassa che potrebbe non essere periodica.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "valori"
        },
        {
          "name": "date"
        }
      ]
    },
    "YEAR": {
      "description": "Questa funzione restituisce l'anno come numero intero per una data specificata.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "YEARFRAC": {
      "description": "Questa funzione restituisce la frazione dell'anno rappresentata dal numero di giorni interi tra la data di inizio e quella di fine.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "data_di_fine"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELD": {
      "description": "Questa funzione calcola il rendimento di un titolo che paga interessi periodici.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prezzo"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "frequenza"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDDISC": {
      "description": "Questa funzione calcola il rendimento annuo di un titolo scontato.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "prezzo"
        },
        {
          "name": "redenzione"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDMAT": {
      "description": "Questa funzione calcola il rendimento annuo di un titolo che paga interessi alla scadenza.",
      "parameters": [
        {
          "name": "insediamento"
        },
        {
          "name": "scadenza"
        },
        {
          "name": "problema"
        },
        {
          "name": "valutare"
        },
        {
          "name": "prezzo"
        },
        {
          "name": "base"
        }
      ]
    },
    "ZTEST": {
      "description": "Questa funzione restituisce il valore di significatività di un test z. Il test z genera un punteggio standard per x rispetto al set di dati e restituisce la probabilità a due code per la distribuzione normale.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "X"
        },
        {
          "name": "sigma",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "HBARSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline Hbar",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "combinazione di colori"
        },
        {
          "name": "asseVisibile"
        },
        {
          "name": "altezzabarra"
        }
      ]
    },
    "VBARSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline Vbar",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "combinazione di colori"
        },
        {
          "name": "asseVisibile"
        },
        {
          "name": "larghezzabarra"
        }
      ]
    },
    "VARISPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline di varianza",
      "parameters": [
        {
          "name": "varianza"
        },
        {
          "name": "riferimento"
        },
        {
          "name": "piccolo"
        },
        {
          "name": "massimo"
        },
        {
          "name": "segno"
        },
        {
          "name": "unità di spunta"
        },
        {
          "name": "leggenda"
        },
        {
          "name": "colore positivo"
        },
        {
          "name": "coloreNegativo"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "LOLLIPOPVARISPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline di varianza lollipop assoluta o relativa",
      "parameters": [
        {
          "name": "valorepianificato"
        },
        {
          "name": "valoreeffettivo"
        },
        {
          "name": "indice"
        },
        {
          "name": "assoluto"
        },
        {
          "name": "riferimento"
        },
        {
          "name": "piccolo"
        },
        {
          "name": "massimo"
        },
        {
          "name": "unità di spunta"
        },
        {
          "name": "leggenda"
        },
        {
          "name": "colore positivo"
        },
        {
          "name": "coloreNegativo"
        },
        {
          "name": "coloreintestazionelecca-lecca"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "PIESPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare un grafico a torta sparkline",
      "parameters": [
        {
          "name": "intervallo|percentuale"
        },
        {
          "name": "colore",
          "repeatable": "VERO"
        }
      ]
    },
    "AREASPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline di area",
      "parameters": [
        {
          "name": "punti"
        },
        {
          "name": "piccolo"
        },
        {
          "name": "massimo"
        },
        {
          "name": "linea1"
        },
        {
          "name": "linea2"
        },
        {
          "name": "colore positivo"
        },
        {
          "name": "coloreNegativo"
        }
      ]
    },
    "SCATTERSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline sparso",
      "parameters": [
        {
          "name": "punti1"
        },
        {
          "name": "punti2"
        },
        {
          "name": "piccolo"
        },
        {
          "name": "massimoX"
        },
        {
          "name": "piccolo"
        },
        {
          "name": "massimo"
        },
        {
          "name": "linea h"
        },
        {
          "name": "LineaV"
        },
        {
          "name": "xMinZona"
        },
        {
          "name": "xZonaMax"
        },
        {
          "name": "yMinZona"
        },
        {
          "name": "yMaxZona"
        },
        {
          "name": "tag"
        },
        {
          "name": "disegnaSimbolo"
        },
        {
          "name": "disegnareLinee"
        },
        {
          "name": "colore1"
        },
        {
          "name": "colore2"
        },
        {
          "name": "trattino"
        }
      ]
    },
    "LINESPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline lineare",
      "parameters": [
        {
          "name": "dati"
        },
        {
          "name": "orientamento ai dati"
        },
        {
          "name": "dataAsseDati"
        },
        {
          "name": "orientamentoassedata"
        },
        {
          "name": "collocamento"
        }
      ]
    },
    "COLUMNSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline a colonna",
      "parameters": [
        {
          "name": "dati"
        },
        {
          "name": "orientamento ai dati"
        },
        {
          "name": "dataAsseDati"
        },
        {
          "name": "orientamentoassedata"
        },
        {
          "name": "collocamento"
        }
      ]
    },
    "WINLOSSSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline vincite/sconfitte",
      "parameters": [
        {
          "name": "dati"
        },
        {
          "name": "orientamento ai dati"
        },
        {
          "name": "dataAsseDati"
        },
        {
          "name": "orientamentoassedata"
        },
        {
          "name": "collocamento"
        }
      ]
    },
    "BULLETSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline a punti",
      "parameters": [
        {
          "name": "misura"
        },
        {
          "name": "bersaglio"
        },
        {
          "name": "massimo"
        },
        {
          "name": "Bene"
        },
        {
          "name": "Cattivo"
        },
        {
          "name": "previsione"
        },
        {
          "name": "unità di spunta"
        },
        {
          "name": "combinazione di colori"
        },
        {
          "name": "verticale"
        },
        {
          "name": "misuraColore"
        },
        {
          "name": "coloredestinazione"
        },
        {
          "name": "maxiColore"
        },
        {
          "name": "buoncolore"
        },
        {
          "name": "cattivo colore"
        },
        {
          "name": "coloreprevisione"
        },
        {
          "name": "consentiMisuraOltreIlMassimo"
        },
        {
          "name": "dimensionebarra"
        }
      ]
    },
    "SPREADSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline diffuso",
      "parameters": [
        {
          "name": "punti"
        },
        {
          "name": "mostraMedia"
        },
        {
          "name": "scalaInizio"
        },
        {
          "name": "finescala"
        },
        {
          "name": "stile"
        },
        {
          "name": "combinazione di colori"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "STACKEDSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline impilato",
      "parameters": [
        {
          "name": "punti"
        },
        {
          "name": "intervallo di colori"
        },
        {
          "name": "intervalloetichetta"
        },
        {
          "name": "massimo"
        },
        {
          "name": "bersaglioRosso"
        },
        {
          "name": "bersaglioVerde"
        },
        {
          "name": "bersaglioBlu"
        },
        {
          "name": "tragetGiallo"
        },
        {
          "name": "colore"
        },
        {
          "name": "evidenziaPosizione"
        },
        {
          "name": "verticale"
        },
        {
          "name": "orientamentotesto"
        },
        {
          "name": "dimensionetesto"
        }
      ]
    },
    "BOXPLOTSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline boxplot",
      "parameters": [
        {
          "name": "punti"
        },
        {
          "name": "classeboxplot"
        },
        {
          "name": "mostraMedia"
        },
        {
          "name": "scalaInizio"
        },
        {
          "name": "finescala"
        },
        {
          "name": "Inizioaccettabile"
        },
        {
          "name": "Fine accettabile"
        },
        {
          "name": "combinazione di colori"
        },
        {
          "name": "stile"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "CASCADESPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline a cascata",
      "parameters": [
        {
          "name": "intervallopunti"
        },
        {
          "name": "indicePunto"
        },
        {
          "name": "intervalloetichette"
        },
        {
          "name": "minimo"
        },
        {
          "name": "massimo"
        },
        {
          "name": "colore positivo"
        },
        {
          "name": "coloreNegativo"
        },
        {
          "name": "verticale"
        },
        {
          "name": "intervalloTipoArticolo"
        },
        {
          "name": "coloreTotale"
        }
      ]
    },
    "PARETOSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline di Pareto",
      "parameters": [
        {
          "name": "punti"
        },
        {
          "name": "indicePunto"
        },
        {
          "name": "intervallo di colori"
        },
        {
          "name": "bersaglio"
        },
        {
          "name": "obiettivo2"
        },
        {
          "name": "evidenziaPosizione"
        },
        {
          "name": "etichetta"
        },
        {
          "name": "verticale"
        },
        {
          "name": "coloredestinazione"
        },
        {
          "name": "target2Colore"
        },
        {
          "name": "coloreetichetta"
        },
        {
          "name": "dimensionebarra"
        }
      ]
    },
    "MONTHSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline mensile",
      "parameters": [
        {
          "name": "anno"
        },
        {
          "name": "mese"
        },
        {
          "name": "intervallo di dati"
        },
        {
          "name": "colorevuoto"
        },
        {
          "name": "coloreinizio"
        },
        {
          "name": "ColoreMedio"
        },
        {
          "name": "colorefinale"
        }
      ]
    },
    "YEARSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline annuale",
      "parameters": [
        {
          "name": "anno"
        },
        {
          "name": "intervallo di dati"
        },
        {
          "name": "colorevuoto"
        },
        {
          "name": "coloreinizio"
        },
        {
          "name": "ColoreMedio"
        },
        {
          "name": "colorefinale"
        }
      ]
    },
    "GAUGEKPISPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline KPI di un indicatore",
      "parameters": [
        {
          "name": "valoreobiettivo"
        },
        {
          "name": "valoreattuale"
        },
        {
          "name": "valore minimo"
        },
        {
          "name": "valore massimo"
        },
        {
          "name": "mostraEtichetta",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "etichettaValoreTarget",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "etichettaValoreAttuale",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "etichettaValoreMin",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "etichettavaloremassimo",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "carattereArray",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "minAngolo",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "angolo massimo",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "raggioRapporto",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "tipocalibro",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "intervallo di colori",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "HISTOGRAMSPARKLINE": {
      "description": "Questa funzione restituisce un set di dati utilizzato per rappresentare uno sparkline istogramma",
      "parameters": [
        {
          "name": "intervallo di date"
        },
        {
          "name": "continuo"
        },
        {
          "name": "etichettavernice"
        },
        {
          "name": "scala"
        },
        {
          "name": "larghezzabarra"
        },
        {
          "name": "barraColore"
        },
        {
          "name": "etichettaStileCarattere"
        },
        {
          "name": "coloreetichetta"
        },
        {
          "name": "colore bordo"
        }
      ]
    },
    "CEILING.PRECISE": {
      "description": "Questa funzione arrotonda un numero per eccesso al numero intero più vicino o al multiplo più vicino di un valore specificato.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "significato",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "COVARIANCE.S": {
      "description": "Questa funzione restituisce la covarianza del campione, ovvero la media dei prodotti delle deviazioni per ciascuna coppia di punti dati in due serie di numeri.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        }
      ]
    },
    "FLOOR.PRECISE": {
      "description": "Questa funzione arrotonda un numero per difetto all'intero più vicino o al multiplo più vicino di un valore specificato.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "significato",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "PERCENTILE.EXC": {
      "description": "Questa funzione restituisce l'n-esimo percentile dei valori in un intervallo.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "la"
        }
      ]
    },
    "QUARTILE.EXC": {
      "description": "Questa funzione restituisce a quale quartile (a quale quarto o 25 percento) di un set di dati appartiene un valore.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "quarto"
        }
      ]
    },
    "RANK.AVG": {
      "description": "Questa funzione restituisce il rango di un numero in un set di numeri. Se alcuni valori hanno lo stesso rango, restituirà il rango medio.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "rif"
        },
        {
          "name": "ordine",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "MODE.MULT": {
      "description": "Questa funzione restituisce l'array verticale più frequente o il valore più frequente in un set di dati.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "STDEV.P": {
      "description": "Questa funzione restituisce la deviazione standard per un'intera popolazione specificata (di valori numerici).",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "VAR.P": {
      "description": "Questa funzione restituisce la varianza basata sull'intera popolazione, che utilizza solo valori numerici.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "COVARIANCE.P": {
      "description": "Questa funzione restituisce la covarianza, ovvero la media dei prodotti delle deviazioni per ciascuna coppia di punti dati in due serie di numeri.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        }
      ]
    },
    "MODE.SNGL": {
      "description": "Questa funzione restituisce il valore che ricorre più frequentemente in un set di dati.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "PERCENTILE.INC": {
      "description": "Questa funzione restituisce l'n-esimo percentile dei valori in un intervallo.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "la"
        }
      ]
    },
    "QUARTILE.INC": {
      "description": "Questa funzione restituisce a quale quartile (a quale quarto o 25 percento) di un set di dati appartiene un valore.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "quarto"
        }
      ]
    },
    "RANK.EQ": {
      "description": "Questa funzione restituisce il rango di un numero in un set di numeri. Se si ordinasse il set, il rango del numero sarebbe la sua posizione nell'elenco.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "rif"
        },
        {
          "name": "ordine",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "STDEV": {
      "description": "Questa funzione restituisce una deviazione standard stimata in base a un campione.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "STDEV.S": {
      "description": "Questa funzione restituisce una deviazione standard stimata in base a un campione.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "VAR.S": {
      "description": "Questa funzione restituisce la varianza in base a un campione di una popolazione, che utilizza solo valori numerici.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "BETA.INV": {
      "description": "Questa funzione calcola l'inverso della funzione di distribuzione beta cumulativa.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "inferiore",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "superiore",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "BINOM.DIST": {
      "description": "Questa funzione calcola la probabilità della distribuzione binomiale del singolo termine.",
      "parameters": [
        {
          "name": "numeri"
        },
        {
          "name": "prove"
        },
        {
          "name": "probabilità"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "BINOM.INV": {
      "description": "Questa funzione restituisce il criterio binomiale, il valore più piccolo per il quale la distribuzione binomiale cumulativa è maggiore o uguale a un valore criterio.",
      "parameters": [
        {
          "name": "prove"
        },
        {
          "name": "probabilità"
        },
        {
          "name": "alfa"
        }
      ]
    },
    "CHISQ.DIST.RT": {
      "description": "Questa funzione calcola la probabilità unilaterale della distribuzione chi quadrato.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "CHISQ.INV.RT": {
      "description": "Questa funzione calcola l'inverso della probabilità unilaterale della distribuzione chi quadrato.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "CHISQ.TEST": {
      "description": "Questa funzione calcola il test di indipendenza dalla distribuzione del chi quadrato.",
      "parameters": [
        {
          "name": "intervallo_effettivo"
        },
        {
          "name": "intervallo_previsto"
        }
      ]
    },
    "CONFIDENCE.NORM": {
      "description": "Questa funzione restituisce l'intervallo di confidenza per la media di una popolazione.",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "definizione_standard"
        },
        {
          "name": "misurare"
        }
      ]
    },
    "EXPON.DIST": {
      "description": "Questa funzione restituisce la distribuzione esponenziale o la densità di probabilità.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "lambda"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "F.DIST.RT": {
      "description": "Questa funzione calcola la distribuzione di probabilità F, per vedere i gradi di diversità tra due serie di dati.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "deg_libertà1"
        },
        {
          "name": "deg_libertà2"
        }
      ]
    },
    "F.INV.RT": {
      "description": "Questa funzione restituisce l'inverso della distribuzione di probabilità F.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "deg_libertà1"
        },
        {
          "name": "deg_libertà2"
        }
      ]
    },
    "F.TEST": {
      "description": "Questa funzione restituisce il risultato di un test F, che restituisce la probabilità unilaterale che le varianze in due array non siano significativamente diverse.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        }
      ]
    },
    "GAMMA.DIST": {
      "description": "Questa funzione restituisce la distribuzione gamma.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "GAMMA.INV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione cumulativa gamma.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        }
      ]
    },
    "LOGNORM.INV": {
      "description": "Questa funzione restituisce l'inverso della funzione di distribuzione cumulativa lognormale di x, dove LN(x) è distribuita normalmente con la media e la deviazione standard specificate.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        }
      ]
    },
    "NORM.DIST": {
      "description": "Questa funzione restituisce la distribuzione cumulativa normale per la media e la deviazione standard specificate.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NORM.INV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione cumulativa normale per la media e la deviazione standard specificate.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "Significare"
        },
        {
          "name": "definizione_standard"
        }
      ]
    },
    "NORM.S.INV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione cumulativa normale standard. La distribuzione ha una media di zero e una deviazione standard di uno.",
      "parameters": [
        {
          "name": "probabilità"
        }
      ]
    },
    "PERCENTRANK.INC": {
      "description": "Questa funzione restituisce il rango di un valore in un set di dati come percentuale del set di dati.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "N"
        },
        {
          "name": "significato",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "POISSON.DIST": {
      "description": "Questa funzione restituisce la distribuzione di Poisson.",
      "parameters": [
        {
          "name": "neventi"
        },
        {
          "name": "Significare"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "T.INV.2T": {
      "description": "Questa funzione restituisce il valore t della distribuzione t dello studente in funzione della probabilità e dei gradi di libertà.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "T.TEST": {
      "description": "Questa funzione restituisce la probabilità associata a un test t.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2"
        },
        {
          "name": "code"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "WEIBULL.DIST": {
      "description": "Questa funzione restituisce la distribuzione di Weibull a due parametri, spesso utilizzata nell'analisi dell'affidabilità.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "Z.TEST": {
      "description": "Questa funzione restituisce il valore di significatività di un test z. Il test z genera un punteggio standard per x rispetto al set di dati e restituisce la probabilità a due code per la distribuzione normale.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "X"
        },
        {
          "name": "sigma",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "T.DIST.RT": {
      "description": "Questa funzione restituisce la distribuzione t con coda destra.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "T.DIST.2T": {
      "description": "Questa funzione restituisce la distribuzione t a due code.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "ISO.CEILING": {
      "description": "Questa funzione restituisce un numero fino all'intero più vicino o al multiplo più vicino di significatività, indipendentemente dal segno di significatività.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "significato",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "BETA.DIST": {
      "description": "Questa funzione restituisce la distribuzione beta.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulativo"
        },
        {
          "name": "inferiore"
        },
        {
          "name": "superiore"
        }
      ]
    },
    "GAMMALN.PRECISE": {
      "description": "Questa funzione restituisce il logaritmo naturale della funzione gamma.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "ERF.PRECISE": {
      "description": "Questa funzione restituisce la funzione di errore.",
      "parameters": [
        {
          "name": "limite inferiore"
        }
      ]
    },
    "ERFC.PRECISE": {
      "description": "Questa funzione restituisce la funzione ERF complementare.",
      "parameters": [
        {
          "name": "limite inferiore"
        }
      ]
    },
    "PERCENTRANK.EXC": {
      "description": "Questa funzione restituisce la percentuale di rango (0..1, escluso) di un valore in un set di dati.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "X"
        },
        {
          "name": "significato",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "HYPGEOM.DIST": {
      "description": "Questa funzione restituisce la distribuzione ipergeometrica.",
      "parameters": [
        {
          "name": "campione_s"
        },
        {
          "name": "numero_campione"
        },
        {
          "name": "popolazione"
        },
        {
          "name": "numero_pop"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "LOGNORM.DIST": {
      "description": "Questa funzione restituisce la distribuzione logaritmica normale di x.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "Significare"
        },
        {
          "name": "dev.st"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NEGBINOM.DIST": {
      "description": "Questa funzione restituisce la distribuzione binomiale negativa.",
      "parameters": [
        {
          "name": "numero_f"
        },
        {
          "name": "numeri"
        },
        {
          "name": "probabilità"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NORM.S.DIST": {
      "description": "Questa funzione restituisce la distribuzione normale standard.",
      "parameters": [
        {
          "name": "z"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "T.DIST": {
      "description": "Questa funzione restituisce la distribuzione t.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "libertà_deg"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "F.DIST": {
      "description": "Questa funzione restituisce la distribuzione di probabilità F.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "deg_libertà1"
        },
        {
          "name": "deg_libertà2"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "CHISQ.DIST": {
      "description": "Questa funzione restituisce la distribuzione del chi quadrato.",
      "parameters": [
        {
          "name": "X"
        },
        {
          "name": "libertà_deg"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "F.INV": {
      "description": "Questa funzione restituisce l'inverso della distribuzione di probabilità F.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "deg_libertà1"
        },
        {
          "name": "deg_libertà2"
        }
      ]
    },
    "T.INV": {
      "description": "Questa funzione restituisce l'inversa della coda sinistra della distribuzione t.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "CHISQ.INV": {
      "description": "Questa funzione restituisce l'inverso della probabilità della coda sinistra della distribuzione del chi quadrato.",
      "parameters": [
        {
          "name": "probabilità"
        },
        {
          "name": "libertà_deg"
        }
      ]
    },
    "CONFIDENCE.T": {
      "description": "Questa funzione restituisce l'intervallo di confidenza per una distribuzione t di Student.",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "definizione_standard"
        },
        {
          "name": "misurare"
        }
      ]
    },
    "NETWORKDAYS.INTL": {
      "description": "Questa funzione restituisce il numero di giorni lavorativi tra due date utilizzando argomenti per indicare i giorni festivi e i giorni del fine settimana.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "data_di_fine"
        },
        {
          "name": "fine settimana",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "vacanze",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "WORKDAY.INTL": {
      "description": "Questa funzione restituisce il numero seriale della data prima o dopo un certo numero di giorni lavorativi con parametri personalizzati per il fine settimana. Questi parametri indicano i giorni del fine settimana e le festività.",
      "parameters": [
        {
          "name": "data_di_inizio"
        },
        {
          "name": "giorni"
        },
        {
          "name": "fine settimana",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "vacanze",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "REFRESH": {
      "description": "Questa funzione decide come ricalcolare la formula. Può usare l'argomento estimateMode per specificare la formula da ricalcolare sul valore di riferimento modificato, valuta una volta, ricalcola o intervallo.",
      "parameters": [
        {
          "name": "formula"
        },
        {
          "name": "modalità di valutazione"
        },
        {
          "name": "intervallo"
        }
      ]
    },
    "DAYS": {
      "description": "Questa funzione restituisce il numero di giorni tra due date.",
      "parameters": [
        {
          "name": "data_di_fine"
        },
        {
          "name": "data_di_inizio"
        }
      ]
    },
    "ISOWEEKNUM": {
      "description": "Questa funzione restituisce il numero della settimana ISO dell'anno per una data specificata.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "BITAND": {
      "description": "Questa funzione restituisce un \\\"AND\\\" bit a bit di due numeri.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2"
        }
      ]
    },
    "BITLSHIFT": {
      "description": "Questa funzione restituisce un \\\"OR\\\" bit a bit di due numeri.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "spostamento_importo"
        }
      ]
    },
    "BITOR": {
      "description": "Questa funzione restituisce un \\\"OR\\\" bit a bit di due numeri.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2"
        }
      ]
    },
    "BITRSHIFT": {
      "description": "Questa funzione restituisce un \\\"OR\\\" bit a bit di due numeri.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "spostamento_importo"
        }
      ]
    },
    "BITXOR": {
      "description": "Questa funzione restituisce uno \\\"XOR\\\" bit a bit di due numeri.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2"
        }
      ]
    },
    "IMCOSH": {
      "description": "Questa funzione restituisce il coseno iperbolico di un numero complesso nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMCOT": {
      "description": "Questa funzione restituisce la cotangente di un numero complesso nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMCSC": {
      "description": "Questa funzione restituisce la cosecante di un numero complesso nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMCSCH": {
      "description": "Questa funzione restituisce la cosecante iperbolica di un numero complesso nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMSEC": {
      "description": "Questa funzione restituisce la secante di un numero complesso nel formato testo x+yi di x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMSECH": {
      "description": "Questa funzione restituisce la secante iperbolica di un numero complesso nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMSINH": {
      "description": "Questa funzione restituisce il seno iperbolico di un numero complesso nel formato testo x+yi di x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "IMTAN": {
      "description": "Questa funzione restituisce la tangente di un numero complesso nel formato testo x+yi o x+yj.",
      "parameters": [
        {
          "name": "complesso"
        }
      ]
    },
    "PDURATION": {
      "description": "Questa funzione restituisce il numero di periodi necessari affinché un investimento raggiunga un valore specificato.",
      "parameters": [
        {
          "name": "valutare"
        },
        {
          "name": "valore"
        },
        {
          "name": "fval"
        }
      ]
    },
    "RRI": {
      "description": "Questa funzione restituisce un tasso di interesse equivalente alla crescita di un investimento.",
      "parameters": [
        {
          "name": "non"
        },
        {
          "name": "valore"
        },
        {
          "name": "fval"
        }
      ]
    },
    "ISFORMULA": {
      "description": "Questa funzione verifica se contiene una formula di una cella referenziata.",
      "parameters": [
        {
          "name": "riferimento cellulare"
        }
      ]
    },
    "IFNA": {
      "description": "Questa funzione restituisce il valore specificato se la formula restituisce il valore di errore #N/D, altrimenti restituisce il risultato della formula.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "valore_se_non_attivo"
        }
      ]
    },
    "IFS": {
      "description": "Questa funzione verifica se una o più condizioni sono soddisfatte e restituisce un valore che corrisponde alla prima condizione TRUE.",
      "parameters": [
        {
          "name": "test_logico1"
        },
        {
          "name": "valore_se_vero1"
        },
        {
          "name": "test_logico2",
          "repeatable": "VERO"
        },
        {
          "name": "valore_se_vero2",
          "repeatable": "VERO"
        }
      ]
    },
    "SWITCH": {
      "description": "Questa funzione valuta un valore (chiamato espressione) rispetto a un elenco di valori e restituisce il risultato corrispondente al primo valore corrispondente. Se non c'è corrispondenza, può essere restituito un valore predefinito facoltativo.",
      "parameters": [
        {
          "name": "espressione"
        },
        {
          "name": "valore1"
        },
        {
          "name": "risultato1"
        },
        {
          "name": "predefinito_o_valore2",
          "repeatable": "VERO",
          "optional": "VERO"
        },
        {
          "name": "risultato2",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "XOR": {
      "description": "Questa funzione restituisce un OR logico esclusivo di tutti gli argomenti.",
      "parameters": [
        {
          "name": "logico",
          "repeatable": "VERO"
        }
      ]
    },
    "AREAS": {
      "description": "Questa funzione restituisce il numero di aree in un riferimento.",
      "parameters": [
        {
          "name": "riferimento"
        }
      ]
    },
    "FORMULATEXT": {
      "description": "Questa funzione restituisce una formula come stringa.",
      "parameters": [
        {
          "name": "riferimento"
        }
      ]
    },
    "HYPERLINK": {
      "description": "Questa funzione crea un collegamento o un salto che apre un documento archiviato su un server di rete, un'intranet o Internet.",
      "parameters": [
        {
          "name": "posizione_collegamento"
        },
        {
          "name": "nome_amichevole"
        }
      ]
    },
    "ACOT": {
      "description": "Questa funzione calcola l'arcocotangente inversa di un numero.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ACOTH": {
      "description": "Questa funzione calcola l'arcocotangente iperbolica inversa di un numero.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "ARABIC": {
      "description": "Questa funzione converte un testo in numeri romani nel suo equivalente in numeri arabi.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "BASE": {
      "description": "Questa funzione converte un numero in una rappresentazione testuale con la base specificata.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "base"
        },
        {
          "name": "lunghezza minima",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "CEILING.MATH": {
      "description": "Questa funzione arrotonda un numero per eccesso all'intero più vicino o al multiplo più vicino di importanza.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "significato",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "modalità",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "COMBINA": {
      "description": "Questa funzione calcola il numero di possibili combinazioni con ripetizioni per un numero specificato di elementi.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "numero_scelto"
        }
      ]
    },
    "COT": {
      "description": "Questa funzione restituisce la cotangente dell'angolo specificato.",
      "parameters": [
        {
          "name": "angolo"
        }
      ]
    },
    "COTH": {
      "description": "Questa funzione restituisce la cotangente iperbolica del numero specificato.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "CSC": {
      "description": "Questa funzione restituisce la cosecante dell'angolo specificato.",
      "parameters": [
        {
          "name": "angolo"
        }
      ]
    },
    "CSCH": {
      "description": "Questa funzione restituisce la cosecante iperbolica del numero specificato.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "DECIMAL": {
      "description": "Questa funzione converte la rappresentazione testuale di un numero in una data base in un numero decimale.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "base"
        }
      ]
    },
    "FLOOR.MATH": {
      "description": "Questa funzione arrotonda un numero per difetto all'intero più vicino o al multiplo più vicino di importanza.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "significato",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "modalità",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SEC": {
      "description": "Questa funzione restituisce la secante dell'angolo specificato.",
      "parameters": [
        {
          "name": "angolo"
        }
      ]
    },
    "SECH": {
      "description": "Questa funzione restituisce la secante iperbolica del valore specificato.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "BINOM.DIST.RANGE": {
      "description": "Questa funzione calcola la probabilità del risultato di una prova utilizzando una distribuzione binomiale.",
      "parameters": [
        {
          "name": "prove"
        },
        {
          "name": "probabilità"
        },
        {
          "name": "numeri"
        },
        {
          "name": "numero_s2",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "GAMMA": {
      "description": "Questa funzione restituisce il valore della funzione gamma.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "MAXIFS": {
      "description": "Questa funzione restituisce il valore massimo tra le celle specificate da un dato insieme di condizioni o criteri.",
      "parameters": [
        {
          "name": "intervallo_massimo"
        },
        {
          "name": "intervallo_criteri1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "criteri_intervallo2",
          "repeatable": "VERO"
        },
        {
          "name": "criteri2",
          "repeatable": "VERO"
        }
      ]
    },
    "GAUSS": {
      "description": "Questa funzione calcola la probabilità che un membro di una popolazione normale standard si trovi tra la media e z deviazioni standard dalla media.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "MINIFS": {
      "description": "Questa funzione restituisce il valore minimo tra le celle specificate da un dato insieme di condizioni o criteri.",
      "parameters": [
        {
          "name": "intervallo_minimo"
        },
        {
          "name": "intervallo_criteri1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "criteri_intervallo2",
          "repeatable": "VERO"
        },
        {
          "name": "criteri2",
          "repeatable": "VERO"
        }
      ]
    },
    "PERMUTATIONA": {
      "description": "Questa funzione restituisce il numero di permutazioni per un dato numero di oggetti che possono essere selezionati dal totale degli oggetti.",
      "parameters": [
        {
          "name": "numero"
        },
        {
          "name": "numero_scelto"
        }
      ]
    },
    "PHI": {
      "description": "Questa funzione restituisce il valore della funzione di densità per una distribuzione normale standard.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "SKEW.P": {
      "description": "Questa funzione restituisce l'asimmetria di una distribuzione in base a una popolazione: una caratterizzazione del grado di asimmetria di una distribuzione attorno alla sua media.",
      "parameters": [
        {
          "name": "numero1"
        },
        {
          "name": "numero2",
          "repeatable": "VERO"
        }
      ]
    },
    "BAHTTEXT": {
      "description": "Questa funzione converte un numero in testo tailandese e aggiunge il suffisso \\\"Baht\\",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "CONCAT": {
      "description": "Questa funzione combina più stringhe di testo o numeri in un'unica stringa di testo; la funzione rimarrà disponibile per compatibilità con la funzione \\\"CONCATENATE\\\".",
      "parameters": [
        {
          "name": "Testo 1"
        },
        {
          "name": "testo2",
          "repeatable": "VERO"
        }
      ]
    },
    "FINDB": {
      "description": "Questa funzione trova un valore di testo all'interno di un altro e restituisce la posizione del valore di testo nel testo cercato, contando ogni carattere a doppio byte come 2 quando si imposta DBCS come lingua predefinita.",
      "parameters": [
        {
          "name": "trova_testo"
        },
        {
          "name": "nel_testo"
        },
        {
          "name": "numero_inizio",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "LEFTB": {
      "description": "Questa funzione restituisce i caratteri più a sinistra specificati da un valore di testo, in base al numero di byte specificato.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "num_byte"
        }
      ]
    },
    "LENB": {
      "description": "Questa funzione restituisce la lunghezza del numero di byte in una stringa di testo.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "MIDB": {
      "description": "Questa funzione restituisce il numero richiesto di caratteri da una stringa di testo a partire dalla posizione specificata e in base al numero di byte specificato.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "numero_inizio"
        },
        {
          "name": "num_byte"
        }
      ]
    },
    "REPLACEB": {
      "description": "Questa funzione sostituisce parte di una stringa di testo con una stringa di testo diversa, in base al numero di byte specificato.",
      "parameters": [
        {
          "name": "vecchio_testo"
        },
        {
          "name": "byte_di_inizio"
        },
        {
          "name": "num_byte"
        },
        {
          "name": "nuovo_testo"
        }
      ]
    },
    "RIGHTB": {
      "description": "Questa funzione restituisce i caratteri più a destra specificati da un valore di testo, in base al numero di byte specificato.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "num_byte"
        }
      ]
    },
    "SEARCHB": {
      "description": "Questa funzione trova una stringa di testo in un'altra stringa di testo e restituisce l'indice della posizione iniziale del testo trovato, e conta ogni carattere a doppio byte come 2 quando si imposta DBCS come lingua predefinita.",
      "parameters": [
        {
          "name": "trova_testo"
        },
        {
          "name": "nel_testo"
        },
        {
          "name": "numero_inizio",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "TEXTJOIN": {
      "description": "Questa funzione combina più intervalli e/o stringhe in un unico testo, il quale include un delimitatore specificato dall'utente tra ogni valore di testo.",
      "parameters": [
        {
          "name": "delimitatore"
        },
        {
          "name": "ignora_vuoto"
        },
        {
          "name": "Testo 1"
        },
        {
          "name": "testo2",
          "repeatable": "VERO"
        }
      ]
    },
    "UNICHAR": {
      "description": "Questa funzione restituisce il carattere Unicode di un dato riferimento numerico.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "UNICODE": {
      "description": "Questa funzione restituisce il numero corrispondente al primo carattere del testo.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "ENCODEURL": {
      "description": "Questa funzione restituisce una stringa codificata in URL.",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "BC_QRCODE": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un QRCode",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "livellocorrezioneerrore"
        },
        {
          "name": "modello"
        },
        {
          "name": "versione"
        },
        {
          "name": "maschera"
        },
        {
          "name": "connessione"
        },
        {
          "name": "nessuna connessione"
        },
        {
          "name": "codiceCarattere"
        },
        {
          "name": "set di caratteri"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_EAN13": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un EAN13.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "Aggiungi su"
        },
        {
          "name": "aggiungiSuPosizioneEtichetta"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_EAN8": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un EAN8.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_CODABAR": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un CODABAR.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "cifra di controllo"
        },
        {
          "name": "rapportonw"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_CODE39": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un CODE39.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "etichettaConCarattereInizioEArresto"
        },
        {
          "name": "cifra di controllo"
        },
        {
          "name": "rapportonw"
        },
        {
          "name": "ASCII completo"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_CODE93": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un CODE93.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "cifra di controllo"
        },
        {
          "name": "ASCII completo"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_CODE128": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un CODE128.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "codiceSet"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_GS1_128": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un GS1_128.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_CODE49": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un CODE49.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "mostraEtichetta"
        },
        {
          "name": "posizioneetichetta"
        },
        {
          "name": "raggruppamento"
        },
        {
          "name": "gruppoNo"
        },
        {
          "name": "famigliacaratteri"
        },
        {
          "name": "stilecarattere"
        },
        {
          "name": "pesocarattere"
        },
        {
          "name": "decorazionetesto"
        },
        {
          "name": "Allinea testo"
        },
        {
          "name": "dimensione carattere"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_PDF417": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un PDF417.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "livellocorrezioneerrore"
        },
        {
          "name": "righe"
        },
        {
          "name": "colonne"
        },
        {
          "name": "compatto"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "BC_DATAMATRIX": {
      "description": "Questa funzione restituisce un set di dati per rappresentare un DATAMATRIX.",
      "parameters": [
        {
          "name": "valore"
        },
        {
          "name": "colore"
        },
        {
          "name": "colore di sfondo"
        },
        {
          "name": "modalità ecc"
        },
        {
          "name": "ecc200DimensioneSimbolo"
        },
        {
          "name": "ecc200ModalitàEncoding"
        },
        {
          "name": "ecc00_140DimensioneSimbolo"
        },
        {
          "name": "Aggiungistrutturato"
        },
        {
          "name": "numerostruttura"
        },
        {
          "name": "fileIdentificatore"
        },
        {
          "name": "zonasilenziosasinistra"
        },
        {
          "name": "zonasilenziosaDestra"
        },
        {
          "name": "zonasilenziosa"
        },
        {
          "name": "zonasilenziosain basso"
        }
      ]
    },
    "FILTER": {
      "description": "Questa funzione filtra un intervallo o un array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "includere"
        },
        {
          "name": "se_vuoto",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "RANDARRAY": {
      "description": "Questa funzione restituisce un array di numeri casuali.",
      "parameters": [
        {
          "name": "righe"
        },
        {
          "name": "colonne"
        },
        {
          "name": "minimo"
        },
        {
          "name": "massimo"
        },
        {
          "name": "numero_intero"
        }
      ]
    },
    "SEQUENCE": {
      "description": "Questa funzione restituisce una sequenza di numeri.",
      "parameters": [
        {
          "name": "righe"
        },
        {
          "name": "colonne"
        },
        {
          "name": "inizio"
        },
        {
          "name": "fare un passo"
        }
      ]
    },
    "SINGLE": {
      "description": "Questa funzione restituisce un singolo valore quando le viene fornito un valore, un intervallo o un array.",
      "parameters": [
        {
          "name": "valore"
        }
      ]
    },
    "SORT": {
      "description": "Questa funzione ordina un intervallo o un array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "ordinamento_indice"
        },
        {
          "name": "ordinamento"
        },
        {
          "name": "per_col"
        }
      ]
    },
    "SORTBY": {
      "description": "Questa funzione ordina un intervallo o un array in base ai valori presenti nell'intervallo o nell'array corrispondente.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "per_array1"
        },
        {
          "name": "ordinamento1"
        },
        {
          "name": "per_array2",
          "repeatable": "VERO"
        },
        {
          "name": "ordinamento2",
          "repeatable": "VERO"
        }
      ]
    },
    "UNIQUE": {
      "description": "Questa funzione restituisce i valori univoci da un intervallo o da un array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "per_col",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "esattamente_una_volta",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "QUERY": {
      "description": "Questa funzione restituisce dati dalle tabelle del gestore dati in un foglio di lavoro.",
      "parameters": [
        {
          "name": "tabellaERighe"
        },
        {
          "name": "colonne"
        },
        {
          "name": "ritornaOggetto"
        }
      ]
    },
    "LET": {
      "description": "Questa funzione assegna i risultati dei calcoli ai nomi. Utile per memorizzare calcoli e valori intermedi definendo nomi all'interno di una formula. Questi nomi si applicano solo nell'ambito della funzione LET.",
      "parameters": [
        {
          "name": "nome1"
        },
        {
          "name": "nome_valore1"
        },
        {
          "name": "nome2",
          "repeatable": "VERO"
        },
        {
          "name": "nome_valore2",
          "repeatable": "VERO"
        },
        {
          "name": "calcolo"
        }
      ]
    },
    "IMAGE": {
      "description": "Questa funzione inserisce un URL o una stringa base64 per mostrare un'immagine nella cella",
      "parameters": [
        {
          "name": "fonte"
        },
        {
          "name": "[testo_alt]"
        },
        {
          "name": "[dimensionamento]"
        },
        {
          "name": "[altezza]"
        },
        {
          "name": "[larghezza]"
        },
        {
          "name": "[clip]"
        },
        {
          "name": "[clipX]"
        },
        {
          "name": "[altezzaclip]"
        },
        {
          "name": "[larghezzaclip]"
        },
        {
          "name": "[vAllinea]"
        },
        {
          "name": "[hAllinea]"
        }
      ]
    },
    "GETPIVOTDATA": {
      "description": "Questa funzione estrae i dati memorizzati in una tabella pivot",
      "parameters": [
        {
          "name": "campo_dati"
        },
        {
          "name": "tabella_pivot"
        },
        {
          "name": "campo1, elemento1",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "WEBSERVICE": {
      "description": "Questa funzione restituisce dati da un servizio web",
      "parameters": [
        {
          "name": "indirizzo"
        }
      ]
    },
    "FILTERJSON": {
      "description": "Questa funzione analizza la stringa JSON in un valore scalare, un oggetto o un array di oggetti.",
      "parameters": [
        {
          "name": "stringa_json"
        }
      ]
    },
    "ASC": {
      "description": "La funzione ASC trasforma i caratteri a larghezza intera (doppio byte) in caratteri a mezza larghezza (singolo byte). Da utilizzare con i set di caratteri a doppio byte (DBCS).",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "DBCS": {
      "description": "La funzione DBCS converte le lettere a mezza larghezza (byte singolo) all'interno di una stringa di caratteri in caratteri a larghezza intera (byte doppio).",
      "parameters": [
        {
          "name": "testo"
        }
      ]
    },
    "LAMBDA": {
      "description": "Crea un valore di funzione, che può essere chiamato all'interno delle formule.",
      "parameters": [
        {
          "name": "parametro_o_calcolo"
        },
        {
          "name": "parametro_o_calcolo",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "MAP": {
      "description": "Restituisce un array formato mappando ogni valore nell'array a un nuovo valore applicando una LAMBDA per creare un nuovo valore.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "lambda_o_array",
          "repeatable": "VERO"
        }
      ]
    },
    "REDUCE": {
      "description": "Riduce un array a un valore accumulato applicando una LAMBDA a ciascun valore e restituendo il valore totale nell'accumulatore.",
      "parameters": [
        {
          "name": "valore_init"
        },
        {
          "name": "vettore"
        },
        {
          "name": "funzione"
        }
      ]
    },
    "SCAN": {
      "description": "Esegue la scansione di un array applicando una LAMBDA a ciascun valore e restituisce un array contenente ciascun valore intermedio.",
      "parameters": [
        {
          "name": "valore_init",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "vettore"
        },
        {
          "name": "funzione"
        }
      ]
    },
    "MAKEARRAY": {
      "description": "Restituisce un array calcolato di una dimensione di riga e colonna specificata, applicando una LAMBDA.",
      "parameters": [
        {
          "name": "righe"
        },
        {
          "name": "colonne"
        },
        {
          "name": "funzione"
        }
      ]
    },
    "BYCOL": {
      "description": "Applica una LAMBDA a ogni colonna e restituisce un array dei risultati. Ad esempio, se l'array originale è di 3 colonne per 2 righe, l'array restituito è di 3 colonne per 1 riga.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "funzione"
        }
      ]
    },
    "BYROW": {
      "description": "Applica una LAMBDA a ogni riga e restituisce un array dei risultati. Ad esempio, se l'array originale è di 3 colonne per 2 righe, l'array restituito è di 1 colonna per 2 righe.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "funzione"
        }
      ]
    },
    "ISOMITTED": {
      "description": "Controlla se il valore in una LAMBDA è mancante e restituisce TRUE o FALSE.",
      "parameters": [
        {
          "name": "discussione"
        }
      ]
    },
    "TEXTBEFORE": {
      "description": "Restituisce il testo che precede un dato carattere o una determinata stringa.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "delimitatore"
        },
        {
          "name": "numero_istanza",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "modalità_partita",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "0",
              "description": "Maiuscole e minuscole"
            },
            {
              "value": "1",
              "description": "Non sensibile alle maiuscole/minuscole"
            }
          ]
        },
        {
          "name": "fine_partita",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "se_non_trovato",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "TEXTAFTER": {
      "description": "Restituisce il testo che segue il carattere o la stringa specificati.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "delimitatore"
        },
        {
          "name": "numero_istanza",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "modalità_partita",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "0",
              "description": "Maiuscole e minuscole"
            },
            {
              "value": "1",
              "description": "Non sensibile alle maiuscole/minuscole"
            }
          ]
        },
        {
          "name": "fine_partita",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "se_non_trovato",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "TEXTSPLIT": {
      "description": "Suddivide le stringhe di testo utilizzando delimitatori di colonna e riga.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "delimitatore_col"
        },
        {
          "name": "delimitatore_riga",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "ignora_vuoto",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "modalità_partita",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "0",
              "description": "Maiuscole e minuscole"
            },
            {
              "value": "1",
              "description": "Non sensibile alle maiuscole/minuscole"
            }
          ]
        },
        {
          "name": "tappetino con",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SJS.REGEXEXTRACT": {
      "description": "Estrae le sottostringhe corrispondenti secondo un'espressione regolare.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "espressione_regolare"
        },
        {
          "name": "modificatori",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SJS.REGEXMATCH": {
      "description": "Se un pezzo di testo corrisponde a un'espressione regolare.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "espressione_regolare"
        },
        {
          "name": "modificatori",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SJS.REGEXREPLACE": {
      "description": "Sostituisce parte di una stringa di testo con una stringa di testo diversa utilizzando espressioni regolari.",
      "parameters": [
        {
          "name": "testo"
        },
        {
          "name": "espressione_regolare"
        },
        {
          "name": "sostituzione"
        },
        {
          "name": "modificatori",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "VSTACK": {
      "description": "Aggiunge array verticalmente e in sequenza per restituire un array più grande.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "HSTACK": {
      "description": "Aggiunge array orizzontalmente e in sequenza per restituire un array più grande.",
      "parameters": [
        {
          "name": "matrice1"
        },
        {
          "name": "matrice2",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "TOROW": {
      "description": "Restituisce l'array in una singola riga.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "ignorare",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "scansione_per_colonna",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "TOCOL": {
      "description": "Restituisce l'array in una singola colonna.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "ignorare",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "scansione_per_colonna",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "WRAPROWS": {
      "description": "Avvolge la riga o la colonna di valori fornita in righe dopo un numero specificato di elementi per formare un nuovo array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "conteggio_avvolgimenti"
        },
        {
          "name": "tappetino con",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "WRAPCOLS": {
      "description": "Avvolge la riga o la colonna di valori fornita in colonne dopo un numero specificato di elementi per formare un nuovo array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "conteggio_avvolgimenti"
        },
        {
          "name": "tappetino con",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "TAKE": {
      "description": "Restituisce un numero specificato di righe o colonne contigue dall'inizio o dalla fine di un array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "righe"
        },
        {
          "name": "colonne",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "DROP": {
      "description": "Esclude un numero specificato di righe o colonne dall'inizio o dalla fine di un array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "righe"
        },
        {
          "name": "colonne",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "EXPAND": {
      "description": "Espande o amplia un array fino alle dimensioni di riga e colonna specificate.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "righe"
        },
        {
          "name": "colonne",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "tappetino con",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "CHOOSEROWS": {
      "description": "Restituisce le righe specificate da un array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "riga_num1"
        },
        {
          "name": "riga_num2",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "CHOOSECOLS": {
      "description": "Restituisce le colonne specificate da un array.",
      "parameters": [
        {
          "name": "vettore"
        },
        {
          "name": "colonna_num1"
        },
        {
          "name": "colonna_num2",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "SJS.UUID": {
      "description": "Restituisce l'UUID casuale.",
      "parameters": [
        {
          "name": "numero"
        }
      ]
    },
    "SJS.ENDWITH": {
      "description": "Restituisce se str1 termina con str2.",
      "parameters": [
        {
          "name": "nel_testo"
        },
        {
          "name": "trova_testo"
        },
        {
          "name": "modalità_partita",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "0",
              "description": "Maiuscole e minuscole"
            },
            {
              "value": "1",
              "description": "Non sensibile alle maiuscole/minuscole"
            }
          ]
        }
      ]
    },
    "SJS.STARTWITH": {
      "description": "Restituisce se la stringa str1 inizia con str2.",
      "parameters": [
        {
          "name": "nel_testo"
        },
        {
          "name": "trova_testo"
        },
        {
          "name": "modalità_partita",
          "repeatable": "falso",
          "optional": "VERO",
          "enum": [
            {
              "value": "0",
              "description": "Maiuscole e minuscole"
            },
            {
              "value": "1",
              "description": "Non sensibile alle maiuscole/minuscole"
            }
          ]
        }
      ]
    },
    "R.INDEX": {
      "description": "(Specifico di ReportSheet) Restituisce l'indice della cella specificata nell'estensione misurata padre.",
      "parameters": [
        {
          "name": "riferimento"
        },
        {
          "name": "riferimento_contesto",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "R.RANK": {
      "description": "(Specifico di ReportSheet) Restituisce il rango della cella specificata nel nodo padre.",
      "parameters": [
        {
          "name": "riferimento"
        },
        {
          "name": "riferimento_contesto",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "ordine",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "modalità_rank",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "SJS.FISCALYEAR": {
      "description": "rendicontazione dell'anno fiscale.",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "mese_di_inizio",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "R.R": {
      "description": "(Specifico di ReportSheet) Offset relativo in base alla cella specificata.",
      "parameters": [
        {
          "name": "riferimento"
        },
        {
          "name": "offset"
        }
      ]
    },
    "R.A": {
      "description": "(Specifico di ReportSheet) Offset assoluto basato sulla cella specificata.",
      "parameters": [
        {
          "name": "riferimento"
        },
        {
          "name": "offset"
        }
      ]
    },
    "R.V": {
      "description": "(Specifico di ReportSheet) Restituisce i dati della base delle celle in base all'offset o al contesto specificato.",
      "parameters": [
        {
          "name": "riferimento"
        },
        {
          "name": "offset | riferimento_contesto | \\\"PaginaCorrente\\",
          "repeatable": "VERO",
          "optional": "VERO"
        }
      ]
    },
    "R.CURRENTPAGE": {
      "description": "(Specifico di ReportSheet) Restituisce il numero di pagina corrente del report."
    },
    "R.PAGESCOUNT": {
      "description": "(Specifico di ReportSheet) Restituisce il numero totale di report correnti."
    },
    "R.PROPORTION": {
      "description": "(Specifico di ReportSheet) Restituisce la percentuale della cella specificata nel suo nodo padre.",
      "parameters": [
        {
          "name": "valore_riferimento"
        },
        {
          "name": "riferimento_contesto1",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "riferimento_contesto2",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "R.CUMULATIVE": {
      "description": "(Specifico di ReportSheet) Restituisce il valore accumulato della cella corrente.",
      "parameters": [
        {
          "name": "valore_riferimento"
        },
        {
          "name": "riferimento_contesto1",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "riferimento_contesto2",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "R.MOM": {
      "description": "(Specifico di ReportSheet) Restituisce i dati dell'anello della cella di destinazione.",
      "parameters": [
        {
          "name": "valore_riferimento"
        },
        {
          "name": "riferimento_contesto1",
          "repeatable": "falso",
          "optional": "VERO"
        },
        {
          "name": "riferimento_contesto2",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    },
    "R.YOY": {
      "description": "(Specifico di ReportSheet) Restituisce i dati anno su anno della cella di destinazione.",
      "parameters": [
        {
          "name": "valore_riferimento"
        },
        {
          "name": "riferimento_contesto1"
        },
        {
          "name": "riferimento_contesto2",
          "repeatable": "falso",
          "optional": "VERO"
        }
      ]
    }
  },
  "TableFunctions": {
    "All": {
      "name": "#Tutto",
      "description": "Restituisce l'intero contenuto della tabella o delle colonne specificate della tabella, comprese le intestazioni delle colonne, i dati e le righe totali."
    },
    "Data": {
      "name": "#Dati",
      "description": "Restituisce le celle dati della tabella o le colonne della tabella specificate."
    },
    "Headers": {
      "name": "#Intestazioni",
      "description": "Restituisce le intestazioni delle colonne della tabella o delle colonne della tabella specificate."
    },
    "Totals": {
      "name": "#Totali",
      "description": "Restituisce il totale delle righe della tabella o delle colonne della tabella specificate."
    },
    "thisRow": {
      "name": "#Questa riga",
      "description": "Questa fila."
    }
  }
}

exports.data = custom_resource;