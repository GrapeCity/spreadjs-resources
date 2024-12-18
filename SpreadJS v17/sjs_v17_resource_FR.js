var custom_resource = {
  "Common": {
    "Exp_InvalidDateFormat": "Modèle de format de date non valide",
    "Exp_InvalidExponentFormat": "format d'exposant invalide",
    "Exp_InvalidSemicolons": "format invalide : trop de points-virgules",
    "Exp_InvalidNumberGroupSize": "NumberGroupSize doit être compris entre 1 et 9, à l'exception du dernier élément, qui peut être zéro.",
    "Exp_BadFormatSpecifier": "Mauvais spécificateur de format",
    "Exp_InvalidNumberFormat": "Modèle de format de nombre non valide",
    "Exp_InvalidCast": "InvalidCastException",
    "Exp_Separator": "numberDecimalSeparator, listSeparator et arrayListSeparator doivent être différents dans les informations de culture.",
    "Exp_TokenIsNull": "le jeton est nul",
    "Exp_InvalidBackslash": "le '\\\\' ne peut pas être évalué",
    "Exp_FormatIllegal": "Le format est illégal\".",
    "Exp_ValueIsNull": "la valeur est nulle",
    "Exp_DuplicatedDescriptor": "Le type de descripteur a été ajouté.",
    "Exp_TokenIllegal": "Le jeton est illégal.",
    "Exp_ValueIllegal": "la valeur est illégale."
  },
  "CalcEngine": {
    "Exp_InvalidCast": "Exception de casting non valide",
    "Exp_FormulaInvalidChar": "La formule contient un caractère non valide : '{0}' à l'index sur {1}",
    "Exp_FormulaInvalid": "Formule invalide",
    "Exp_InvalidFunctionName": "Nom de fonction non valide",
    "Exp_InvalidOverrideFunction": "Impossible de remplacer la fonction intégrée",
    "Exp_InvalidArray": "Tableau non valide",
    "Exp_OverrideNotAllowed": "Tentative de remplacement d'une fonction alors que le remplacement n'est pas autorisé",
    "Exp_NoSyntax": "Aucune syntaxe \"{0}\" ne correspond à la syntaxe \"{1}\".",
    "Exp_IsValid": "'{0}' n'est pas valide.",
    "Exp_InvalidParameters": "Paramètre de fonction non valide à {0}.",
    "Exp_InvalidArrayColumns": "La longueur des colonnes du tableau n'est pas égale à {0}.",
    "Exp_ExprIsNull": "L'argument 'expr' est nul",
    "Exp_InvalidOperation": "Exception d'opération non valide",
    "Exp_ArgumentNull": "Exception d'argument nul",
    "Exp_CriteriaIsNull": "Le critère est nul",
    "Exp_Format": "Format",
    "Exp_ArrayFormulaPart": "Impossible de modifier une partie d'un tableau.",
    "Exp_NotSupported": "Exception non prise en charge",
    "Exp_DuplicatedChar": "Caractère dupliqué",
    "Exp_ArgumentOutOfRangeException": "Exception d'argument hors de portée",
    "Exp_ArgumentException": "Exception d'argument",
    "Fbx_Summary": "Résumé",
    "Fbx_TableName_Description": "Nom de la table pour ",
    "Fbx_TableSheetName_Description": "Nom de la feuille de table pour ",
    "Fbx_CustomName_Description": "Nom personnalisé pour "
  },
  "DataManager": {
    "zve": {
      "WINDOW": {
        "description": "(Spécifique à TableSheet) Détermine les lignes comme fenêtre en partitionnant et en ordonnant pour appliquer la fonction de fenêtre.",
        "parameters": [
          {
            "name": "fonction_fenêtre"
          },
          {
            "name": "partition_by",
            "optional": "vrai"
          },
          {
            "name": "commander par",
            "optional": "vrai"
          },
          {
            "name": "frame_rows\\\\range\\\\groups",
            "optional": "vrai"
          }
        ]
      },
      "WINDOWDEF": {
        "description": "(Spécifique à TableSheet) Définissez un raccourci qui permet d'être réutilisé par la fonction WINDOW.",
        "parameters": [
          {
            "name": "partition_by",
            "optional": "vrai"
          },
          {
            "name": "commander par",
            "optional": "vrai"
          },
          {
            "name": "frame_rows\\\\range\\\\groups",
            "optional": "vrai"
          }
        ]
      },
      "PARTITIONBY": {
        "description": "(Spécifique à TableSheet) Divise les lignes en partitions.",
        "parameters": [
          {
            "name": "fonction_champ",
            "optional": "FAUX",
            "repeatable": "vrai"
          }
        ]
      },
      "ORDERBY": {
        "description": "(Spécifique à TableSheet) Définit l'ordre logique dans chaque partition.",
        "parameters": [
          {
            "name": "fonction_champ",
            "optional": "FAUX",
            "repeatable": "vrai"
          }
        ]
      },
      "ORDERASC": {
        "description": "(Spécifique à TableSheet) Spécifie l'ordre croissant pour le champ spécifié.",
        "parameters": [
          {
            "name": "fonction_champ"
          }
        ]
      },
      "ORDERDESC": {
        "description": "(Spécifique à TableSheet) Spécifie l'ordre décroissant pour le champ spécifié.",
        "parameters": [
          {
            "name": "fonction_champ"
          }
        ]
      },
      "FRAMEROWS": {
        "description": "(Spécifique à TableSheet) Limitez l'ensemble de lignes de la fenêtre en spécifiant les lignes de début ou de fin par rapport à la ligne actuelle.",
        "parameters": [
          {
            "name": "fonction_de_début",
            "optional": "FAUX",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "-1",
                "description": "Indique la limite supérieure de la partition."
              },
              {
                "value": "[@]",
                "description": "Indique la ligne ou la valeur actuelle."
              },
              {
                "value": "[@-n]",
                "description": "Indique le n précédant le courant, si l'ordre est croissant."
              },
              {
                "value": "[@+n]",
                "description": "Indique le n précédant le courant, si l'ordre est décroissant."
              }
            ]
          },
          {
            "name": "fonction de fin",
            "optional": "vrai",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "-1",
                "description": "Indique le suivi inférieur de la partition."
              },
              {
                "value": "[@]",
                "description": "Indique la ligne ou la valeur actuelle."
              },
              {
                "value": "[@+n]",
                "description": "Indique le n suivant du courant, si l'ordre est croissant."
              },
              {
                "value": "[@-n]",
                "description": "Indique les n suivants du courant, si l'ordre est décroissant."
              }
            ]
          },
          {
            "name": "mode_exclusion",
            "optional": "vrai",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "0",
                "description": "Il s'agit du cas par défaut, aucune ligne n'est exclue."
              },
              {
                "value": "1",
                "description": "La ligne actuelle est exclue, les autres pairs de la ligne actuelle restent."
              },
              {
                "value": "2",
                "description": "La ligne actuelle et les pairs sont tous exclus."
              },
              {
                "value": "3",
                "description": "La ligne actuelle reste, les autres pairs sont exclus."
              }
            ]
          }
        ]
      },
      "FRAMERANGE": {
        "description": "(Spécifique à TableSheet) Limitez l'ensemble de lignes de la fenêtre en spécifiant la plage de début ou de fin par rapport à la valeur de la ligne actuelle.",
        "parameters": [
          {
            "name": "fonction_de_début",
            "optional": "FAUX",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "-1",
                "description": "Indique la limite supérieure de la partition."
              },
              {
                "value": "[@]",
                "description": "Indique la ligne ou la valeur actuelle."
              },
              {
                "value": "[@-n]",
                "description": "Indique le n précédant le courant, si l'ordre est croissant."
              },
              {
                "value": "[@+n]",
                "description": "Indique le n précédant le courant, si l'ordre est décroissant."
              }
            ]
          },
          {
            "name": "fonction de fin",
            "optional": "vrai",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "-1",
                "description": "Indique le suivi inférieur de la partition."
              },
              {
                "value": "[@]",
                "description": "Indique la ligne ou la valeur actuelle."
              },
              {
                "value": "[@+n]",
                "description": "Indique le n suivant du courant, si l'ordre est croissant."
              },
              {
                "value": "[@-n]",
                "description": "Indique les n suivants du courant, si l'ordre est décroissant."
              }
            ]
          },
          {
            "name": "mode_exclusion",
            "optional": "vrai",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "0",
                "description": "Il s'agit du cas par défaut, aucune ligne n'est exclue."
              },
              {
                "value": "1",
                "description": "La ligne actuelle est exclue, les autres pairs de la ligne actuelle restent."
              },
              {
                "value": "2",
                "description": "La ligne actuelle et les pairs sont tous exclus."
              },
              {
                "value": "3",
                "description": "La ligne actuelle reste, les autres pairs sont exclus."
              }
            ]
          }
        ]
      },
      "FRAMEGROUPS": {
        "description": "(Spécifique à TableSheet) Limitez l'ensemble de lignes de la fenêtre en spécifiant la plage de début ou de fin par rapport aux \"groupes\" de comptage relatifs au groupe actuel.",
        "parameters": [
          {
            "name": "fonction_de_début",
            "optional": "FAUX",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "-1",
                "description": "Indique la limite supérieure de la partition."
              },
              {
                "value": "[@]",
                "description": "Indique la ligne ou la valeur actuelle."
              },
              {
                "value": "[@-n]",
                "description": "Indique le n précédant le courant, si l'ordre est croissant."
              },
              {
                "value": "[@+n]",
                "description": "Indique le n précédant le courant, si l'ordre est décroissant."
              }
            ]
          },
          {
            "name": "fonction de fin",
            "optional": "vrai",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "-1",
                "description": "Indique le suivi inférieur de la partition."
              },
              {
                "value": "[@]",
                "description": "Indique la ligne ou la valeur actuelle."
              },
              {
                "value": "[@+n]",
                "description": "Indique le n suivant du courant, si l'ordre est croissant."
              },
              {
                "value": "[@-n]",
                "description": "Indique les n suivants du courant, si l'ordre est décroissant."
              }
            ]
          },
          {
            "name": "mode_exclusion",
            "optional": "vrai",
            "repeatable": "FAUX",
            "enum": [
              {
                "value": "0",
                "description": "Il s'agit du cas par défaut, aucune ligne n'est exclue."
              },
              {
                "value": "1",
                "description": "La ligne actuelle est exclue, les autres pairs de la ligne actuelle restent."
              },
              {
                "value": "2",
                "description": "La ligne actuelle et les pairs sont tous exclus."
              },
              {
                "value": "3",
                "description": "La ligne actuelle reste, les autres pairs sont exclus."
              }
            ]
          }
        ]
      },
      "CUMEDIST": {
        "description": "(Spécifique à TableSheet) La distribution cumulative d'une valeur au sein d'un groupe de valeurs."
      },
      "W_PERCENTRANK": {
        "description": "(Spécifique à TableSheet) Calcule le pourcentage du rang relatif d'une ligne dans une partition de lignes."
      },
      "ROWNUMBER": {
        "description": "(Spécifique à TableSheet) Renvoie le numéro de la ligne actuelle dans sa partition."
      },
      "W_RANK": {
        "description": "(Spécifique à TableSheet) Renvoie le rang de chaque ligne dans la partition d'un ensemble de résultats."
      },
      "DENSERANK": {
        "description": "(Spécifique à TableSheet) Renvoie le rang de la ligne actuelle dans sa partition, sans espaces."
      },
      "LEAD": {
        "description": "(Spécifique à TableSheet) Fournit l'accès à la valeur d'une ligne à un décalage physique donné qui suit la ligne actuelle.",
        "parameters": [
          {
            "name": "valeur_fonction"
          },
          {
            "name": "compenser",
            "optional": "vrai"
          },
          {
            "name": "valeur par défaut",
            "optional": "vrai"
          }
        ]
      },
      "LAG": {
        "description": "(Spécifique à TableSheet) Fournit l'accès à la valeur d'une ligne à un décalage physique donné avant la ligne actuelle.",
        "parameters": [
          {
            "name": "valeur_fonction"
          },
          {
            "name": "compenser",
            "optional": "vrai"
          },
          {
            "name": "valeur par défaut",
            "optional": "vrai"
          }
        ]
      },
      "NTILE": {
        "description": "(Spécifique à TableSheet) Divise une partition en N compartiments, attribue à chaque ligne son numéro de compartiment.",
        "parameters": [
          {
            "name": "n"
          }
        ]
      },
      "FIRSTVALUE": {
        "description": "(Spécifique à TableSheet) Accès à la valeur de la première ligne dans le cadre de la fenêtre.",
        "parameters": [
          {
            "name": "valeur_fonction"
          }
        ]
      },
      "LASTVALUE": {
        "description": "(Spécifique à TableSheet) Accès à la valeur de la dernière ligne dans le cadre de la fenêtre.",
        "parameters": [
          {
            "name": "valeur_fonction"
          }
        ]
      },
      "NTHVALUE": {
        "description": "(Spécifique à TableSheet) Accès à la valeur de la n-ième ligne dans le cadre de la fenêtre.",
        "parameters": [
          {
            "name": "valeur_fonction"
          },
          {
            "name": "n"
          }
        ]
      },
      "CALCULATE": {
        "description": "(Groupement spécifique de TableSheet) Développez le contexte de groupe pour la formule.",
        "parameters": [
          {
            "name": "formule"
          },
          {
            "name": "fonction de suppression des filtres"
          }
        ]
      },
      "REMOVEFILTERS": {
        "description": "(Groupement spécifique de TableSheet) Sélectionnez le contexte du niveau de groupe supérieur.",
        "parameters": [
          {
            "name": "fonction_champ_groupe",
            "optional": "vrai",
            "repeatable": "vrai"
          }
        ]
      },
      "CHILDREN": {
        "description": "(TableSheet Hierarchy Specific) Récupère la valeur des enfants qui ont un certain décalage par rapport au parent.",
        "parameters": [
          {
            "name": "décalage_de_niveau"
          },
          {
            "name": "fonction_champ"
          }
        ]
      },
      "ONLYCHILDREN": {
        "description": "(TableSheet Hierarchy Specific) Récupère la valeur des enfants qui ne sont pas parents.",
        "parameters": [
          {
            "name": "fonction_champ"
          }
        ]
      },
      "PARENT": {
        "description": "(TableSheet Hierarchy Specific) Récupère la valeur du parent qui est un certain décalage par rapport à la valeur actuelle.",
        "parameters": [
          {
            "name": "décalage_de_niveau"
          },
          {
            "name": "fonction_champ"
          }
        ]
      },
      "LEVEL": {
        "description": "(TableSheet Hierarchy Specific) Récupère le niveau actuel."
      },
      "LEVELROWNUMBER": {
        "description": "(TableSheet Hierarchy Specific) Récupère le numéro de ligne de la ligne actuelle sous son parent."
      }
    }
  },
  "Sheets": {
    "Exp_NotSupported": "Exception non prise en charge",
    "Exp_PasteExtentIsNull": "pasteExtent est nul",
    "Exp_InvalidPastedArea": "La zone collée doit avoir la même taille que la zone copiée ou coupée.",
    "Exp_MultipleSelections": "Cette action ne fonctionnera pas sur les sélections multiples.",
    "Exp_ChangePartOfArray": "Impossible de modifier une partie d'un tableau.",
    "Exp_InvalidAndSpace": "{0} non valide : {1} (doit être compris entre {2} et {3}).",
    "Exp_SrcIsNull": "L'argument 'src' est nul",
    "Exp_DestIsNull": "L'argument 'dest' est nul",
    "Exp_InvalidCustomFunction": "Fonction personnalisée non valide",
    "Exp_InvalidCustomName": "nom personnalisé non valide",
    "Exp_CustomNameBothInUse": "Le nom actuel et le nouveau nom sont référencés dans les formules de cellule",
    "Exp_IndexOutOfRange": "L'index est hors de portée !",
    "Exp_InvalidRange": "Plage non valide",
    "Exp_NotAFunction": "Pas une fonction",
    "Exp_ArgumentOutOfRange": "Argument hors de portée",
    "Exp_PasteSourceCellsLocked": "Les cellules de la feuille source sont verrouillées.",
    "Exp_InvalidCopyPasteSize": "Les zones de copier et de coller n'ont pas la même taille.",
    "Exp_PasteDestinationCellsLocked": "La cellule que vous essayez de modifier est protégée et donc en lecture seule.",
    "Exp_PasteChangeMergeCell": "Impossible de modifier une partie d'une cellule fusionnée.",
    "Tip_Row": "Rangée: ",
    "Tip_Column": "Colonne: ",
    "Tip_Column_Offset": "Compenser: ",
    "Tip_Height": "Hauteur : {0} pixels",
    "Tip_Width": "Largeur : {0} pixels",
    "NewTab": "Nouveau...",
    "Exp_EmptyNamedStyle": "Le nom du style nommé ne peut pas être vide ou nul",
    "Exp_SheetNameInvalid": "Le nom de la feuille ne peut pas être vide ou contenir ces caractères : *, :, [, ], ?, \\\\, /",
    "Exp_SheetNameConflict": "Ce nom est déjà pris. Essayez-en un autre.",
    "Exp_ArrayFormulaSpan": "Les formules matricielles ne sont pas valides dans les cellules fusionnées.",
    "Exp_DestSheetIsNull": "destSheet est nul",
    "Exp_SheetIsNull": "la feuille est nulle.",
    "Exp_OverlappingSpans": "Cette opération entraînera un chevauchement des portées.",
    "NeedCanvasSupport": "Vous avez besoin d'un navigateur qui prend entièrement en charge HTML5 Canvas pour exécuter SpreadJS",
    "ARIA_Resize": "redimensionner",
    "ARIA_First": "d'abord",
    "ARIA_PreviousArrow": "flèche précédente",
    "ARIA_NextArrow": "flèche suivante",
    "ARIA_Last": "dernier",
    "ARIA_PreviousButton": "bouton précédent",
    "ARIA_NextButton": "bouton suivant",
    "ARIA_SheetTab": "onglet feuille",
    "ARIA_NewSheet": "nouvelle feuille",
    "ARIA_Blank": "vide",
    "ARIA_Scrollbar_Left_Button": "bouton gauche de la barre de défilement",
    "ARIA_Scrollbar_Top_Button": "bouton supérieur de la barre de défilement",
    "ARIA_Scrollbar_Thumb_Button": "bouton de défilement du pouce",
    "ARIA_Scrollbar_Right_Button": "bouton droit de la barre de défilement",
    "ARIA_Scrollbar_Bottom_Button": "bouton inférieur de la barre de défilement",
    "ARIA_Scrollbar_TRACK_Button": "bouton de suivi de la barre de défilement",
    "ARIA_Cell": "cellule",
    "ARIA_HasValue": "a une valeur de {0}",
    "ARIA_HasFormula": "a pour formule {0}",
    "ARIA_HasCheckbox": "a la case à cocher {0}",
    "ARIA_HasButton": "a le bouton {0}",
    "ARIA_HasHyperlink": "a un lien hypertexte {0}",
    "ARIA_HasComment": "a le commentaire {0}",
    "ARIA_RowHeader": "en-tête de ligne",
    "ARIA_ColumnHeader": "en-tête de colonne",
    "SHEET_NAME": "Feuille",
    "REPORT_SUMMARY": "Somme",
    "Exp_InsertCopiedCutCells": "Cette sélection n'est pas valide. La zone de copier/coller doit avoir la même taille",
    "Exp_InsertCopiedCutCellsOnSpanTable": "Cela ne fonctionnera pas car cela déplacerait des cellules dans un tableau de votre feuille de calcul ou entraînerait la fusion de certaines cellules fusionnées.",
    "Exp_InsertCopiedCutCellsNoRange": "De nouvelles cellules ne peuvent pas être insérées car il existe des cellules non vides qui s'étendraient au-delà de la feuille de calcul.",
    "Exp_InsertCopiedCutCellsOverlap": "Cette sélection n'est pas valide. Assurez-vous que les zones de copier-coller ne se chevauchent pas, sauf si elles ont la même taille et la même forme.",
    "Exp_InsertCopiedCutCellsAffectTable": "Vous ne pouvez pas réorganiser les cellules d'un tableau de cette façon, car cela pourrait affecter d'autres cellules du tableau de manière inattendue.",
    "Exp_InvalidSortArrayFormulaInRange": "Impossible de trier la plage actuelle car la formule matricielle existe.",
    "Exp_InvalidSortSpanInRange": "Impossible de trier la plage actuelle car la plage existe.",
    "Exp_InvalidSortPartTableOrMultiTableInRange": "Impossible de trier la plage actuelle en tant que table partielle ou il existe plusieurs tables.",
    "Exp_InvalidOperationInProtect": "La cellule ou le graphique que vous essayez de modifier se trouve sur une feuille protégée. Pour effectuer une modification, supprimez la protection de la feuille.",
    "EXP_IO": "Exception de lecture et d’écriture de fichier.",
    "EXP_FILE_FORMAT": "Format de fichier incorrect.",
    "EXP_NO_PASSWORD": "Le fichier Excel ne peut pas être ouvert car le classeur/la feuille de calcul est protégé par un mot de passe.",
    "EXP_INVALID_PASSWORD": "Le mot de passe spécifié est incorrect.",
    "NORMAL": "Normale",
    "GENERAL": "Général",
    "EXP_UNSUPPORT_CRYPTO_ALGORITHM": "Algorithmes cryptographiques non pris en charge",
    "Exp_InvalidOperationSizeLimitExceeded": "La taille du fichier dépasse la limite définie, la taille maximale.",
    "STEP": {
      "start": "démarrer le chargement {0}",
      "loadFileData": "charger les données de {0} à diffuser",
      "loadSheetData": "charger les données de {0}",
      "startCalc": "démarrer reCalc",
      "loadSheetFormula": "charger la formule de {0}",
      "parseFile": "analyser le contenu de {0}"
    },
    "pasteSpecialOptionDialog": {
      "title": "Collage spécial",
      "paste": "Coller",
      "pasteOptions": {
        "all": "Tous",
        "formulas": "Formules",
        "values": "Valeurs",
        "formats": "Formats",
        "comments": "Commentaires",
        "validation": "Validation",
        "usingSourceTheme": "Tous utilisent le thème Source",
        "noBorders": "Tout sauf les frontières",
        "columnWidth": "Largeurs de colonnes",
        "formulasAndNumberFormats": "«Formules et formats de nombres»",
        "valueAndNumberFormats": "Formats de valeur et de nombre"
      },
      "operation": "Opération",
      "operationOptions": {
        "none": "Aucun",
        "add": "Ajouter",
        "subtract": "Soustraire",
        "multiply": "Multiplier",
        "divide": "Diviser"
      },
      "skipBlanks": "Sauter les espaces vides",
      "transpose": "Transposer",
      "pasteLink": "Coller le lien"
    },
    "ok": "D'ACCORD",
    "cancel": "Annuler",
    "ls9": [
      " ",
      "4164642d6f6e7320456e61626c65643a207b307d"
    ],
    "ls10": [
      " ",
      "4164642d6f6e73204e6f7420456e61626c65643a207b307d"
    ],
    "ls11": [
      " ",
      "2c20"
    ]
  },
  "Bindings": {
    "Exp_NotSupportedDataSource": "La source de données n'est pas prise en charge !"
  },
  "Outlines": {
    "Exp_InvalidIndex": "Index invalide",
    "Exp_InvalidCount": "Compte invalide",
    "Exp_InvalidLevel": "Niveau invalide",
    "Exp_GroupInfoIsNull": "groupInfo est nul",
    "Exp_GROUP_PROTECTED": "Vous ne pouvez pas utiliser cette commande sur une feuille protégée. Pour utiliser cette commande, vous devez d'abord déprotéger la feuille."
  },
  "ConditionalFormatting": {
    "Exp_RuleIsNull": "L'argument 'règle' est nul",
    "Exp_NotSupported": "Exception non prise en charge"
  },
  "Touch": {
    "ToolStrip_PasteText": "Coller",
    "ToolStrip_CutText": "Couper",
    "ToolStrip_CopyText": "Copie",
    "ToolStrip_AutoFillText": "Remplissage automatique"
  },
  "FloatingObjects": {
    "Exp_FloatingObjectHasSameNameError": "La feuille de calcul actuelle contient déjà un objet flottant portant le même nom.",
    "Exp_FloatingObjectNameEmptyError": "L'objet flottant doit avoir un nom"
  },
  "CellTypes": {
    "OK": "D'ACCORD",
    "Cancel": "Annuler",
    "Calendar_ShortWeeks_1": "LUN",
    "Calendar_ShortWeeks_2": "MAR",
    "Calendar_ShortWeeks_3": "ÉPOUSER",
    "Calendar_ShortWeeks_4": "JEU",
    "Calendar_ShortWeeks_5": "VEN",
    "Calendar_ShortWeeks_6": "ASSIS",
    "Calendar_ShortWeeks_7": "SOLEIL",
    "Calendar_Weeks_1": "Lundi",
    "Calendar_Weeks_2": "Mardi",
    "Calendar_Weeks_3": "Mercredi",
    "Calendar_Weeks_4": "Jeudi",
    "Calendar_Weeks_5": "Vendredi",
    "Calendar_Weeks_6": "Samedi",
    "Calendar_Weeks_7": "Dimanche",
    "Calendar_ShortMonths_1": "JAN",
    "Calendar_ShortMonths_2": "FÉV",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "AVR",
    "Calendar_ShortMonths_5": "PEUT",
    "Calendar_ShortMonths_6": "JUIN",
    "Calendar_ShortMonths_7": "JUILLET",
    "Calendar_ShortMonths_8": "AOÛT",
    "Calendar_ShortMonths_9": "SEP",
    "Calendar_ShortMonths_10": "OCTOBRE",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DÉC",
    "Calendar_Months_1": "JANVIER",
    "Calendar_Months_2": "FÉVRIER",
    "Calendar_Months_3": "MARS",
    "Calendar_Months_4": "AVRIL",
    "Calendar_Months_5": "PEUT",
    "Calendar_Months_6": "JUIN",
    "Calendar_Months_7": "JUILLET",
    "Calendar_Months_8": "AOÛT",
    "Calendar_Months_9": "SEPTEMBRE",
    "Calendar_Months_10": "OCTOBRE",
    "Calendar_Months_11": "NOVEMBRE",
    "Calendar_Months_12": "DÉCEMBRE",
    "Calendar_Time_AM": "SUIS",
    "Calendar_Time_PM": "PM",
    "Calendar_EraName_1": "M",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_Today": "Aujourd'hui",
    "Calendar_BuiltIn_Today": "Aujourd'hui",
    "Calendar_BuiltIn_Yesterday": "Hier",
    "Calendar_BuiltIn_Last7Days": "Les 7 derniers jours",
    "Calendar_BuiltIn_ThisMonth": "Ce mois-ci",
    "Calendar_BuiltIn_LastMonth": "Mois dernier",
    "Calendar_LastMonth": "Aller au mois précédent",
    "Calendar_NextMonth": "Aller au mois prochain",
    "Calendar_LastYear": "Aller à l’année précédente",
    "Calendar_NextYear": "Aller à l’année prochaine",
    "Calendar_LastTenYear": "Retour aux dix années précédentes",
    "Calendar_NextTenYear": "Aller vers les dix prochaines années",
    "Quarter_Format_1": "T1",
    "Quarter_Format_2": "T2",
    "Quarter_Format_3": "T3",
    "Quarter_Format_4": "T4",
    "ThemeColor": "Couleurs du thème",
    "StandardColor": "Couleurs standards",
    "Calculator_DivideByZeroInfo": "Impossible de diviser par zéro.",
    "Calculator_InvalidInputInfo": "Entrée non valide",
    "Calculator_SqrtParameterException": "Entrée non valide pour la fonction.",
    "Calculator_OverFlowInfo": "L'opération arithmétique a entraîné un débordement.",
    "MultiColumn_InvalidDataSource": "Source de données non valide. La formule doit renvoyer un tableau.",
    "DataObject_MeetLock": "Impossible d'insérer des données car une cellule verrouillée gêne.",
    "DataObject_MeetSpan": "Impossible d'insérer des données car une cellule fusionnée gêne.",
    "DataObject_MeetTable": "Impossible d'insérer des données car une table gêne.",
    "FileUpload_Title": "+ Télécharger"
  },
  "Filter": {
    "Exp_InvalidColumnIndex": "Index de colonne non valide\".",
    "SortAscending": "Trier par ordre croissant",
    "SortDescending": "Trier par ordre décroissant",
    "OK": "D'ACCORD",
    "Cancel": "Annuler",
    "Search": "Recherche",
    "CheckAll": "Cocher tout",
    "UncheckAll": "Décocher tout",
    "Blanks": "(Blancs)",
    "Exp_FilterItemIsNull": "FilterItem est nul.",
    "Show": "Montrer",
    "ShowRows": "Afficher les lignes où :",
    "And": "Et",
    "Or": "Ou",
    "SortColor": "Trier par couleur",
    "FilterColor": "Filtrer par couleur",
    "FilterCellTitle": "Filtrer par couleur de cellule",
    "FilterFontTitle": "Filtrer par couleur de police",
    "SortCellTitle": "Trier par couleur de cellule",
    "SortFontTitle": "Trier par couleur de police",
    "FontColor": "Plus de couleurs de police...",
    "CellColor": "Plus de couleurs de cellules …",
    "NoFill": "Pas de remplissage",
    "Automatic": "Automatique",
    "Clear": "Effacer le filtre de {0}",
    "TextFilter": "Filtres de texte",
    "DateFilter": "Filtres de date",
    "NumberFilter": "Filtres numériques",
    "Custom": "Filtre personnalisé",
    "Equal": "Égal à...",
    "NotEqual": "N'équivaut pas à...",
    "GreaterThan": "Plus grand que...",
    "GreaterOrEquals": "Supérieur ou égal à …",
    "LessThan": "Moins que...",
    "LessThanOrEquals": "Inférieur ou égal à",
    "Between": "Entre...",
    "Top10": "Top 10...",
    "AboveAverage": "Au-dessus de la moyenne",
    "BelowAverage": "En dessous de la moyenne",
    "Begin": "Commence par...",
    "End": "Se termine par...",
    "Contain": "Contient...",
    "NotContain": "Ne contient pas...",
    "Before": "Avant...",
    "After": "Après...",
    "Tomorrow": "Demain",
    "Today": "Aujourd'hui",
    "Yesterday": "Hier",
    "NextWeek": "La semaine prochaine",
    "ThisWeek": "Cette semaine",
    "LastWeek": "La semaine dernière",
    "NextMonth": "Mois prochain",
    "ThisMonth": "Ce mois-ci",
    "LastMonth": "Mois dernier",
    "NextQuarter": "Le prochain trimestre",
    "ThisQuarter": "Ce trimestre",
    "LastQuarter": "Dernier trimestre",
    "NextYear": "L'année prochaine",
    "ThisYear": "Cette année",
    "LastYear": "L'année dernière",
    "YearToDate": "Année à ce jour",
    "AllDates": "Toutes les dates de la période",
    "Top10Filter": "Top 10 des filtres automatiques",
    "CustomTitle": "Filtre automatique personnalisé",
    "ColorTitle": "Couleurs de cellules disponibles",
    "top": "haut",
    "bottom": "bas",
    "SortCell": "Sélectionnez une couleur de cellule pour trier :",
    "SortFont": "Sélectionnez une couleur de police pour trier par :",
    "FilterCell": "Sélectionnez une couleur de cellule pour filtrer par :",
    "FilterFont": "Sélectionnez une couleur de police pour filtrer par :",
    "Selected": "Choisi:",
    "IsEquals": "égal",
    "NotEquals": "n'est pas égal à",
    "IsGreaterThan": "est supérieur à",
    "IsGreaterOrEqual": "est supérieur ou égal à",
    "IsLess": "est inférieur à",
    "LessOrEqual": "est inférieur ou égal à",
    "IsBeginWith": "commence par",
    "NotBeginWith": "ne commence pas par",
    "IsEndWith": "se termine par",
    "NotEndWith": "ne se termine pas avec",
    "IsContain": "contient",
    "NotContains": "ne contient pas",
    "IsAfter": "est après",
    "AfterOrEqual": "est postérieur ou égal à",
    "IsBefore": "est avant",
    "BeforeOrEqual": "est antérieur ou égal à",
    "Q1": "Premier trimestre",
    "Q2": "2e trimestre",
    "Q3": "3e trimestre",
    "Q4": "Quatrième trimestre",
    "Jan": "Janvier",
    "Feb": "Février",
    "Mar": "Mars",
    "Apr": "Avril",
    "May": "Peut",
    "Jun": "Juin",
    "Jul": "Juillet",
    "Aug": "Août",
    "Sep": "Septembre",
    "Oct": "Octobre",
    "Nov": "Novembre",
    "Dec": "Décembre",
    "Explain1": "Utilisez ? pour représenter n'importe quel caractère unique",
    "Explain2": "Utilisez * pour représenter n'importe quelle série de caractères",
    "Year": " ",
    "Day": " ",
    "add_current_filter": "Ajouter la sélection actuelle au filtre",
    "invalidCondition": "Erreur dans la ligne d'analyse"
  },
  "Tables": {
    "Exp_DragDropShiftTableCell": "Cette opération n'est pas autorisée. L'opération tente de décaler des cellules dans un tableau de votre feuille de calcul.",
    "Exp_DragDropChangePartOfTable": "Impossible de terminer l'opération : vous essayez de modifier une partie d'une ligne ou d'une colonne d'un tableau d'une manière qui n'est pas autorisée.",
    "Exp_TableEmptyNameError": "Le nom de la table ne peut pas être vide.",
    "Exp_TableNameInvalid": "Le nom de la table n'est pas valide.",
    "Exp_TableInvalidRow": "Index de ligne ou nombre de lignes non valide.",
    "Exp_TableInvalidColumn": "Index de colonne ou nombre de colonnes non valide.",
    "Exp_TableIntersectError": "Les tables ne peuvent pas être intersectées.",
    "Exp_TableHasSameNameError": "La feuille de calcul actuelle existe déjà dans une table portant le même nom.",
    "Exp_TableRangeHasFilterError": "La plage de table actuelle contient une plage de filtres.",
    "Exp_TableDataSourceNullError": "La source de données de la table ne peut pas être nulle.",
    "Exp_TableMoveOutOfRange": "Le tableau ne peut pas être déplacé hors de la feuille.",
    "Exp_TableResizeOutOfRange": "Le nombre de lignes, le nombre de colonnes et le tableau non valides ne peuvent pas être redimensionnés en dehors de la feuille.",
    "Exp_ArrayFormulaTable": "Les formules de tableau multicellulaire ne sont pas autorisées dans les tableaux.",
    "Exp_TableResizeInvalidRange": "Les en-têtes doivent rester sur la même ligne et la plage de tableau résultante doit chevaucher la plage de tableau d'origine.",
    "Exp_TableResizeToSpan": "Impossible de terminer l'opération : un tableau ne peut pas chevaucher un tableau ou des cellules fusionnées.",
    "Exp_TableResizeWithFilter": "Impossible de décaler les cellules dans une plage ou un tableau filtré.",
    "Exp_TableResizeWithHidden": "Impossible de redimensionner un tableau adjacent à une ligne ou une colonne masquée.",
    "Exp_TableResizeToTable": "Impossible de terminer l'opération : les opérations qui incluent des cellules à l'intérieur et à l'extérieur d'une plage de tableau, et les opérations qui affectent des cellules qui chevauchent plusieurs tableaux ne sont pas autorisées.",
    "Exp_RowParamOutOfRange": "La ligne de paramètres est hors de la plage de données de la table.",
    "Exp_ColParamOutOfRange": "Le paramètre col est hors de la plage de données de la table.",
    "Exp_TableDeleteCountInvalid": "Le nombre de paramètres à supprimer entraînera une table vide.",
    "Exp_TableAddRowIntersectSpan": "Cela ne fonctionnera pas car cela déplacerait des cellules dans une plage de votre feuille de calcul.",
    "Exp_TableAddRowIntersectTable": "Cela ne fonctionnera pas car cela déplacerait les cellules d'un tableau sur votre feuille de calcul.",
    "Exp_TableAddRowNoEnoughRoom": "Impossible d'insérer de nouvelles cellules, car cela déplacerait des cellules non vides à la fin de la feuille de calcul. Ces cellules peuvent sembler vides mais contenir des valeurs vides, une mise en forme ou une formule. Supprimez suffisamment de lignes ou de colonnes pour faire de la place pour ce que vous souhaitez insérer, puis réessayez.",
    "Table_Total": "Total",
    "Table_None": "Aucun",
    "Table_Average": "Moyenne",
    "Table_Count": "Compter",
    "Table_Count_Numbers": "Compter les nombres",
    "Table_Max": "Max",
    "Table_Min": "Min",
    "Table_Sum": "Somme",
    "Table_StdDev": "Écart-type",
    "Table_Var": "Var"
  },
  "Fill": {
    "CopyCells": "Copier les cellules",
    "FillSeries": "Série de remplissage",
    "FillFormattingOnly": "Remplir uniquement la mise en forme",
    "FillWithoutFormatting": "Remplir sans formater",
    "Exp_NumberOnly": "Fonctionne uniquement pour les numéros",
    "Exp_RangeContainsMergedCell": "La plage ne doit pas avoir de cellules fusionnées.",
    "Exp_TargetContainsMergedCells": "La plage cible ne doit pas avoir de cellules fusionnées.",
    "Exp_MergedCellsIdentical": "Cette opération nécessite que les cellules fusionnées soient de taille identique.",
    "Exp_FillRangeContainsMergedCell": "Impossible de remplir la plage qui contient une cellule fusionnée.",
    "Exp_FillCellsReadOnly": "Les cellules que vous essayez de remplir sont protégées et donc en lecture seule.",
    "Exp_ChangeMergedCell": "Impossible de modifier une partie de la cellule fusionnée.",
    "Exp_ColumnReadOnly": "La colonne que vous essayez de modifier est protégée et donc en lecture seule.",
    "Exp_RowReadOnly": "La ligne que vous essayez de modifier est protégée et donc en lecture seule.",
    "Exp_CellReadOnly": "La cellule que vous essayez de modifier est protégée et donc en lecture seule.",
    "Exp_RangeIsNull": "la plage est nulle",
    "Exp_ChangePartOfArray": "Impossible de modifier une partie d'un tableau."
  },
  "GanttSheet": {
    "GANTT_MONTH": "Mois",
    "GANTT_WEEK": "Semaine",
    "GANTT_DAY": "Jour",
    "GANTT_HOUR": "Heure",
    "GANTT_MINUTE": "Minute",
    "GANTT_NEW_TASK": "<Nouvelle tâche>",
    "GANTT_NEW_SUMMARY_TASK": "<Nouvelle tâche récapitulative>",
    "GANTT_NEW_MILESTONE": "< Nouvelle étape >",
    "GANTT_TASK_NUMBER": "Numéro de tâche",
    "GANTT_TASK_NAME": "Nom de la tâche",
    "GANTT_MILESTONE": "Jalon",
    "GANTT_MODE": "Mode",
    "GANTT_DURATION": "Durée",
    "GANTT_START": "Commencer",
    "GANTT_FINISH": "Finition",
    "GANTT_START_DISPLAYED": "DémarrerAffiché",
    "GANTT_FINISH_DISPLAYED": "Terminé",
    "GANTT_PREDECESSORS": "Prédécesseurs",
    "GANTT_SUCCESSORS": "Successeurs",
    "GANTT_COMPLETE": "% Complet",
    "GANTT_COMPLETE_CHANGE": "Complet à travers",
    "GANTT_TASK_SCHEDULE_MODE_MANUALLY": "Manuel",
    "GANTT_TASK_SCHEDULE_MODE_AUTO": "Auto",
    "GANTT_INVALID_OPERATION": "Opération invalide",
    "GANTT_INVALID_LEVEL": "niveau invalide",
    "GANTT_INVALID_ID": "invalidId",
    "GANTT_INVALID_ROW_INDEX": "Index de ligne invalide",
    "GANTT_INVALID_INDEX": "index invalide",
    "GANTT_INVALID_COUNT": "nombre invalide",
    "GANTT_INVALID_TASK": "Tâche invalide",
    "GANTT_INVALID_DEPENDENCY": "Dépendance invalide",
    "GANTT_INVALID_UNIT": "unité invalide",
    "GANTT_INVALID_WORK_DAYS": "jours de travail non valides",
    "GANTT_INVALID_TASK_ID": "invalidTaskId",
    "GANTT_INVALID_TASK_PARENT_ID": "invalidTaskParentId",
    "GANTT_INVALID_TASK_LEVEL": "invalidTaskLevel",
    "GANTT_INVALID_FIELD": "champ invalide",
    "GANTT_INVALID_ASCENDING_STATES": "États ascendants invalides",
    "GANTT_VALUE_INVALID": "valeur non valide",
    "GANTT_VALUE_READONLY": "valeur en lecture seule",
    "DEFAULT_DATE_TIME_FORMAT": "aa-mm-jj h:mm",
    "GANTT_ACTION_TASK": "Tâche",
    "GANTT_ACTION_TASK_COLON": "Tâche:",
    "GANTT_ACTION_START": "Commencer:",
    "GANTT_ACTION_FINISH": "Finition:",
    "GANTT_ACTION_TASK_START": "Début de la tâche :",
    "GANTT_ACTION_TASK_FINISH": "Fin de la tâche :",
    "GANTT_ACTION_START_LINK": "Commencer",
    "GANTT_ACTION_FINISH_LINK": "Finition",
    "GANTT_ACTION_FROM_OF": "De {0} de :",
    "GANTT_ACTION_TO_OF": "À {0} de :",
    "GANTT_ACTION_START_ONLY": "Démarrer seulement",
    "GANTT_ACTION_FINISH_ONLY": "FinishOnly",
    "GANTT_ACTION_DURATION": "Durée:",
    "GANTT_ACTION_COMPLETE_THROUGH": "CompleteThrough :",
    "GANTT_ACTION_LINE_TIP_TITLE": "Lien {0} vers {1}",
    "GANTT_TASK_BAR_TASK_LINK": "Lien de la tâche :",
    "GANTT_TASK_BAR_FROM": "Depuis:",
    "GANTT_TASK_BAR_TO": "À:",
    "GANTT_TASK_BAR_FS": "De la fin au début (FS)",
    "GANTT_TASK_BAR_FF": "De bout en bout (FF)",
    "GANTT_TASK_BAR_SF": "Du début à la fin (SF)",
    "GANTT_TASK_BAR_SS": "Début à début (SS)",
    "GANTT_TASK_BAR_UNNAMED": "Anonyme",
    "GANTT_TASK_BAR_COMPLETE_THROUGH": "Complet jusqu'à :",
    "GANTT_TASK_BAR_COMPLETE": "% Complet:",
    "GANTT_CALENDAR_STANDARD": "Standard",
    "GANTT_CALENDAR_NIGHT_SHIFT": "Équipe de nuit",
    "GANTT_CALENDAR_24HOURS": "24 heures",
    "GANTT_CALENDAR_MINUTE": "Minute",
    "GANTT_CALENDAR_MINUTE_NAMES": [
      "m",
      "min",
      "minute"
    ],
    "GANTT_CALENDAR_HOUR": "Heure",
    "GANTT_CALENDAR_HOUR_NAMES": [
      "h",
      "heure",
      "heure"
    ],
    "GANTT_CALENDAR_DAY": "Jour",
    "GANTT_CALENDAR_DAY_NAMES": [
      "d",
      "mourir",
      "jour"
    ],
    "GANTT_CALENDAR_WEEK": "Semaine",
    "GANTT_CALENDAR_WEEK_NAMES": [
      "w",
      "semaine",
      "semaine"
    ],
    "GANTT_CALENDAR_MONTH": "Mois",
    "GANTT_CALENDAR_MONTH_NAMES": [
      "moi",
      "lun",
      "mois"
    ],
    "GANTT_CALENDAR_UNIT_LABELS": [
      "min",
      "heure",
      "jour",
      "semaine",
      "lun",
      "an"
    ],
    "GANTT_CALENDAR_UNIT_LABELS_PLURALS": [
      "minutes",
      "heures",
      "jours",
      "semaines",
      "mons",
      "ans"
    ],
    "wmk1": "47616e74745368656574",
    "wmk2": "47616e74745368656574"
  },
  "OutlineColumn": {
    "Exp_GROUP_PROTECTED": "Vous ne pouvez pas utiliser cette commande sur une feuille protégée. Pour utiliser cette commande, vous devez d'abord déprotéger la feuille."
  },
  "StatusBar": {
    "cellMode": "Mode cellulaire",
    "cellModeReady": "Prêt",
    "cellModeEnter": "Entrer",
    "cellModeEdit": "Modifier",
    "inCalculation": "Calcul : {0}",
    "iterateCalculation": "Calcul de l'itérateur : {0}",
    "formulaAverage": "Moyenne",
    "formulaCount": "Compter",
    "formulaNumericalCount": "Compte numérique",
    "formulaMin": "Min",
    "formulaMax": "Max",
    "formulaSum": "Somme",
    "zoomSlider": "Curseur de zoom",
    "zoom": "Zoom",
    "toolTipCellMode": "En mode {0}",
    "toolTipFormulaAverage": "Moyenne des cellules sélectionnées",
    "toolTipFormulaCount": "Nombre de cellules sélectionnées contenant des données",
    "toolTipFormulaNumericalCount": "Nombre de cellules sélectionnées contenant des données numériques",
    "toolTipFormulaMin": "Valeur minimale dans la sélection",
    "toolTipFormulaMax": "Valeur maximale dans la sélection",
    "toolTipFormulaSum": "Somme des cellules sélectionnées",
    "toolTipZoomOut": "Zoom arrière",
    "toolTipZoomIn": "Zoom avant",
    "toolTipSlider": "Zoom",
    "toolTipZoomPanel": "Niveau de zoom",
    "progressItem": "Progrès"
  },
  "AutoMerge": {
    "Exp_RangeIsIntersected": "La gamme ne doit pas croiser les gammes existantes."
  },
  "NameBox": {
    "invalidName": "Vous devez saisir une référence valide à laquelle vous souhaitez accéder ou saisir un nom valide pour la sélection.",
    "nameBox": "Boîte à noms"
  },
  "InputMask": {
    "errorMsg": {
      "invalidPattern": "Modèle non valide",
      "duplicatedDateTimePattern": "Modèle de date et d'heure dupliqué",
      "emptyPattern": "Modèle vide",
      "unknownPattern": "Échec de l'analyse d'un modèle inconnu",
      "invalidOptionalPattern": "Échec de l'analyse du modèle facultatif",
      "invalidGroupPattern": "Échec de l'analyse du modèle de groupe",
      "errorQuantifierPattern": "Position du quantificateur d'erreur",
      "invalidQuantifierPattern": "Échec de l'analyse du modèle de quantificateur",
      "noEntry": "Aucune restriction ne peut être entrée"
    },
    "hourFormatSingleDesignator": [
      "UN",
      "P"
    ],
    "hourFormatDesignator": [
      "SUIS",
      "PM"
    ]
  },
  "Print": {
    "Exp_InvalidSheetIndex": "Index de feuille non valide\"."
  },
  "PDF": {
    "Exp_FileIOError": "Exception de lecture et d’écriture de fichier.",
    "Exp_FontError": "Ce format de police n'est pas pris en charge ni la police PDF standard."
  },
  "Shapes": {
    "Exp_InvalidConnectionSite": "Site de connexion non valide.",
    "Exp_DuplicatedName": "Nom dupliqué.",
    "Exp_EmptyName": "Nom vide.",
    "Exp_InvalidRange": "Plage non valide"
  },
  "Charts": {
    "period": "période",
    "movingAverage": "Moyenne mobile",
    "exponential": "Exponentiel",
    "linear": "Linéaire",
    "logarithmic": "Logarithmique",
    "polynomial": "Polynôme",
    "power": "Pouvoir",
    "unsupportedChartType": "Type de graphique non pris en charge",
    "SERIES": "Série",
    "VALUE": "Valeur: ",
    "POINT": "Indiquer ",
    "SIZE": "Taille: ",
    "INCREASE": "Augmenter",
    "DECREASE": "Diminuer",
    "TOTAL": "Total",
    "ChartTitle": "Titre du graphique",
    "Branch": "Bifurquer",
    "AxisTitle": "Titre de l'axe"
  },
  "Slicer": {
    "Blank": "(vide)",
    "Exp_SlicerNameInvalid": "Le nom du slicer n'est pas valide.",
    "Exp_SlicerNameExist": "Le nom du slicer est déjà utilisé ; veuillez saisir un nom unique.",
    "SlicerNameInFormula": "Trancheuse"
  },
  "formulaEditor": {
    "NO_MATH_PARENTHESES": "Aucune correspondance entre parenthèses",
    "MISS_RIGHT_PARENTHESES": "')' est attendu.",
    "MISS_LET_FUNCTION_BODY": "Corps manquant de l'expression LET.",
    "UNKNOWN_NAME": "Nom inconnu",
    "UNKNOWN_SHEET": "Feuille inconnue \\\"$1\\",
    "NO_MATCHED_ARGUMENTS": "Je m'attendais à des arguments à 1 $, mais j'en ai obtenu 2 $",
    "INVALID_IDENTIFIER_ARGUMENT": "Cet argument doit être un identifiant à lier.",
    "DUPLICATE_IDENTIFIER": "Identifiant en double $1",
    "INVALID_EXPRESSION": "EXPRESSION invalide",
    "INVALID_FORMULA": "Formule invalide",
    "FORMULA": "Formule"
  },
  "PivotEngine": {
    "dateResource": {
      "Jan": "Jan",
      "Feb": "Fév",
      "Mar": "Mar",
      "Apr": "Avr",
      "May": "Peut",
      "Jun": "Juin",
      "Jul": "Juillet",
      "Aug": "Août",
      "Sep": "Sep",
      "Oct": "Octobre",
      "Nov": "Nov",
      "Dec": "Déc",
      "Qtr1": "Qtr1",
      "Qtr2": "Qtr2",
      "Qtr3": "Qtr3",
      "Qtr4": "Qtr4",
      "Seconds": "Secondes",
      "Minutes": "Minutes",
      "Hours": "Heures",
      "Days": "Jours",
      "Months": "Mois",
      "Quarters": "Quartiers",
      "Years": "Années",
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
    "Exp_NoItemParseError": "Un nom d'élément est introuvable. Vérifiez que vous avez correctement saisi le nom et que l'élément est présent dans le rapport de tableau croisé dynamique.",
    "Exp_UnsupportedCalcItemType": "Les références, les noms et les tableaux ne sont pas pris en charge dans les formules de tableau croisé dynamique.",
    "blank": "(vide)"
  },
  "PivotTables": {
    "RepeatName": "Répéter le nom",
    "NotExist": "N'existe pas",
    "SubtotalType_Prefix_0": "Moyenne de ",
    "SubtotalType_Prefix_1": "Comte de",
    "SubtotalType_Prefix_2": "CountNums de",
    "SubtotalType_Prefix_3": "Max de",
    "SubtotalType_Prefix_4": "Min de",
    "SubtotalType_Prefix_5": "Produit de",
    "SubtotalType_Prefix_6": "Écart type de",
    "SubtotalType_Prefix_7": "StdDevp de",
    "SubtotalType_Prefix_8": "Somme de",
    "SubtotalType_Prefix_9": "Var de ",
    "SubtotalType_Prefix_10": "Varp de",
    "ColumnLabels": "Étiquettes de colonnes",
    "Total": "{0} Total{1}",
    "All": "Tous",
    "MultipleItems": "Plusieurs articles",
    "RowLabels": "Étiquettes de ligne",
    "GrandTotal": "Total",
    "Values": "Valeurs",
    "PivotPanel_Title": "Champs de tableau croisé dynamique",
    "PivotPanel_ReportText": "Choisir les champs à ajouter au rapport",
    "PivotPanel_SearchPlaceholder": "Recherche",
    "PivotPanel_FieldAreaText": "Faites glisser les champs entre les zones ci-dessous :",
    "PivotPanel_FiltersItemsTitle": "Filtres",
    "PivotPanel_RowsItemsTitle": "Lignes",
    "PivotPanel_ColumnsItemsTitle": "Colonnes",
    "PivotPanel_ValuesItemsTitle": "Valeurs",
    "PivotPanel_DeferUpdateText": "Différer la mise à jour de la mise en page",
    "EmptyPivotTable_PromptMessage1": "Cliquez dans cette zone pour travailler avec le rapport de tableau croisé dynamique",
    "EmptyPivotTable_PromptMessage2": "Activez la liste des champs du tableau croisé dynamique pour travailler avec le tableau croisé dynamique",
    "PivotPanel_Update": "Mise à jour",
    "PivotPanel_DropDownList_Up": "Monter",
    "PivotPanel_DropDownList_Down": "Descendre",
    "PivotPanel_DropDownList_Beginning": "Passer au début",
    "PivotPanel_DropDownList_End": "Déplacer vers la fin",
    "PivotPanel_DropDownList_ReportFilter": "Déplacer vers le filtre de rapport",
    "PivotPanel_DropDownList_Row": "Déplacer vers les étiquettes de ligne",
    "PivotPanel_DropDownList_Col": "Déplacer vers les étiquettes de colonne",
    "PivotPanel_DropDownList_Values": "Passer aux valeurs",
    "PivotPanel_DropDownList_Remove": "Supprimer le champ",
    "PivotPanel_DropDownList_Set": "Paramètres de champ …",
    "PivotPanel_DropDownList_ValueSet": "Paramètres du champ de valeur",
    "PivotPanel_Fields_MoveTo_ReportField": "Ajouter au filtre de rapport",
    "PivotPanel_Fields_MoveTo_RowLabel": "Ajouter aux étiquettes de ligne",
    "PivotPanel_Fields_MoveTo_ColLabel": "Ajouter aux étiquettes de colonne",
    "PivotPanel_Fields_MoveTo_Value": "Ajouter des valeurs",
    "PivotPanel_LabelOrValue_ClearFilter": "Effacer le filtre",
    "PivotPanel_ValueFilterOrLabel_Equals": "Égal à...",
    "PivotPanel_ValueFilterOrLabel_NotEqual": "N'équivaut pas à...",
    "PivotPanel_ValueFilterOrLabel_GreaterThan": "Plus grand que...",
    "PivotPanel_ValueFilterOrLabel_GreaterOrTo": "Supérieur ou égal à …",
    "PivotPanel_ValueFilterOrLabel_LessThan": "Moins que...",
    "PivotPanel_ValueFilterOrLabel_LessOrTo": "Inférieur ou égal à",
    "PivotPanel_ValueFilterOrLabel_Between": "Entre...",
    "PivotPanel_ValueFilterOrLabel_NotBetween": "Pas entre...",
    "PivotPanel_ValueFilter_Top10": "Top 10...",
    "PivotPanel_ValueFilterOrLabel_IsBeginWith": "Commence par...",
    "PivotPanel_ValueFilterOrLabel_NotBegin": "Ne commence pas par...",
    "PivotPanel_ValueFilterOrLabel_End": "Se termine par...",
    "PivotPanel_ValueFilterOrLabel_NotEndWith": "Ne s'arrête pas avec...",
    "PivotPanel_ValueFilterOrLabel_Contain": "Contient...",
    "PivotPanel_ValueFilterOrLabel_NotContain": "Ne contient pas...",
    "ValueFilterOrLabel_Equals": "égal",
    "ValueFilterOrLabel_NotEqual": "n'est pas égal à",
    "ValueFilterOrLabel_GreaterThan": "plus grand que",
    "ValueFilterOrLabel_GreaterOrTo": "supérieur ou égal à",
    "ValueFilterOrLabel_LessThan": "moins que",
    "ValueFilterOrLabel_LessOrTo": "inférieur ou égal à",
    "ValueFilterOrLabel_Between": "entre",
    "ValueFilterOrLabel_NotBetween": "pas entre",
    "ValueFilterOrLabelSelect_GreaterThan": "est supérieur à",
    "ValueFilterOrLabelSelect_GreaterOrTo": "est supérieur ou égal à",
    "ValueFilterOrLabelSelect_LessThan": "est inférieur à",
    "ValueFilterOrLabelSelect_LessOrTo": "est inférieur ou égal à",
    "ValueFilterOrLabelSelect_Between": "est entre",
    "ValueFilterOrLabelSelect_NotBetween": "n'est pas entre",
    "ValueFilterOrLabel_IsBeginWith": "commence par",
    "ValueFilterOrLabel_NotBegin": "ne commence pas par",
    "ValueFilterOrLabel_End": "se termine par",
    "ValueFilterOrLabel_NotEndWith": "ne se termine pas avec",
    "ValueFilterOrLabel_Contain": "contient",
    "ValueFilterOrLabel_NotContain": "ne contient pas",
    "PivotPanel_ValueFilterOrLabel_Before": "Avant...",
    "PivotPanel_ValueFilterOrLabel_After": "Après...",
    "PivotPanel_ValueFilterOrLabel_Tomorrow": "Demain",
    "PivotPanel_ValueFilterOrLabel_Today": "Aujourd'hui",
    "PivotPanel_ValueFilterOrLabel_Yesterday": "Hier",
    "PivotPanel_ValueFilterOrLabel_NextWeek": "La semaine prochaine",
    "PivotPanel_ValueFilterOrLabel_ThisWeek": "Cette semaine",
    "PivotPanel_ValueFilterOrLabel_LastWeek": "La semaine dernière",
    "PivotPanel_ValueFilterOrLabel_NextMonth": "Mois prochain",
    "PivotPanel_ValueFilterOrLabel_ThisMonth": "Ce mois-ci",
    "PivotPanel_ValueFilterOrLabel_LastMonth": "Mois dernier",
    "PivotPanel_ValueFilterOrLabel_NextQuarter": "Le prochain trimestre",
    "PivotPanel_ValueFilterOrLabel_ThisQuarter": "Ce trimestre",
    "PivotPanel_ValueFilterOrLabel_LastQuarter": "Dernier trimestre",
    "PivotPanel_ValueFilterOrLabel_NextYear": "L'année prochaine",
    "PivotPanel_ValueFilterOrLabel_ThisYear": "Cette année",
    "PivotPanel_ValueFilterOrLabel_LastYear": "L'année dernière",
    "PivotPanel_ValueFilterOrLabel_YearToDate": "Année à ce jour",
    "PivotPanel_ValueFilterOrLabel_MonthToDate": "Le mois courant",
    "PivotPanel_ValueFilterOrLabel_QuarterToDate": "Trimestre à ce jour",
    "PivotPanel_ValueFilterOrLabel_ParallelYearToDate": "Année parallèle à ce jour",
    "PivotPanel_ValueFilterOrLabel_ParallelMonthToDate": "Mois parallèle à ce jour",
    "PivotPanel_ValueFilterOrLabel_ParallelQuarterToDate": "Trimestre parallèle à ce jour",
    "PivotPanel_ValueFilterOrLabel_AllDates": "Toutes les dates de la période",
    "PivotPanel_ValueFilterOrLabel_Custom": "Filtre personnalisé",
    "PivotPanel_Sort_A_Z": "Trier de A à Z",
    "PivotPanel_Sort_Z_A": "Trier de Z à A",
    "PivotPanel_Sort_Smallest_Largest": "Trier du plus petit au plus grand",
    "PivotPanel_Sort_Largest_Smallest": "Trier du plus grand au plus petit",
    "PivotPanel_Sort_More": "Plus d'options de tri\"...",
    "PivotPanel_Filter_Clear": "Effacer le filtre de {0}",
    "PivotPanel_Filter_Label": "Filtres d'étiquettes",
    "PivotPanel_Filter_Value": "Filtres de valeur",
    "PivotPanel_Date_Filter": "Filtres de date",
    "Ok": "D'ACCORD",
    "Cancel": "Annuler",
    "NumberFormat": "Format numérique",
    "LabelFormat": "Format d'étiquette",
    "Number": "Nombre",
    "FormatCells": "Format des cellules",
    "Sample": "Échantillon",
    "Type": "Taper",
    "CustomFormats": [
      "Général",
      "0",
      "0,00",
      "#,##0",
      "#,##0,00",
      "#,##0;(#,##0)",
      "#,##0;[Rouge](#,##0)",
      "#,##0,00;(#,##0,00)",
      "#,##0.00;[Rouge](#,##0.00)",
      "$#,##0;($#,##0)",
      "$#,##0;[Rouge]($#,##0)",
      "$#,##0,00;($#,##0,00)",
      "$#,##0,00;[Rouge]($#,##0,00)",
      "0%",
      "0,00%",
      "0,00E+00",
      "##0.0E+0",
      "# ?/?",
      "# ??/??",
      "j/m/aaaa",
      "j-mmm-aa",
      "d-mmm",
      "mmm-aaa",
      "h:mm AM/PM",
      "h:mm:ss AM/PM",
      "hh:mm",
      "hh:mm:ss",
      "j/m/aaaa hh:mm",
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
      "jjj, mmmm jj, aaaa",
      "Maryland;@",
      "[<=9999999]###-####;(###) ###-####",
      "# ?/8"
    ],
    "Select_Field": "Sélectionner un champ",
    "PivotPanel_Filter_SelectAll": "Cocher tout",
    "PivotPanel_Filter_NoSelectAll": "Décocher tout",
    "PivotPanel_Filter_Search": "recherche",
    "Label_Title": "Filtre d'étiquette",
    "Label_Show": "Afficher les éléments pour lesquels l'étiquette",
    "Use_Single_Character": "Utilisez ? pour représenter n'importe quel caractère unique",
    "Use_Series_Characters": "Utilisez * pour représenter n’importe quel caractère de la série",
    "Value_Show": "Afficher les éléments pour lesquels",
    "Value_Title": "Filtre de valeur",
    "Top_Ten_Filter": "Top 10 des filtres",
    "TopTenShow": "montrer",
    "Sort_Field_Dialog_Title": "Trier",
    "Sort_Field_Dialog_Sort_Options": "Options de tri",
    "Sort_Field_Dialog_Summary": "Résumé",
    "Sort_Field_Dialog_Ascending_Sort": "Croissant (A à Z) par :",
    "Sort_Field_Dialog_Descending_Sort": "Descendant (Z à A) par :",
    "Sort_Field_Dialog_More_Options": "Plus d'options...",
    "Sort_Field_More_Dialog_Title": "Plus d'options de tri",
    "Sort_Field_More_Dialog_Sort_By": "Trier par",
    "Sort_Field_More_Dialog_Values_In_Selected_Area": "Valeurs dans la zone {{AREA}} sélectionnée",
    "Sort_Value_Dialog_Title": "Trier par valeur",
    "Sort_Value_Dialog_Sort_Direction": "Sens de tri",
    "Sort_Value_Dialog_Asc": "Du plus petit au plus grand",
    "Sort_Value_Dialog_Desc": "Du plus grand au plus petit",
    "Sort_Value_Dialog_Top_To_Bottom": "De haut en bas",
    "Sort_Value_Dialog_Left_To_Right": "De gauche à droite",
    "Custom_Sort_Summary": "Tri personnalisé",
    "Sort_Order_ASC": "ordre croissant",
    "Sort_Order_DESC": "ordre décroissant",
    "Sort_In_Row": "rangée",
    "Sort_In_Column": "colonne",
    "Sort_Summary_Pattern": "Trier {{FIELD_NAME}} dans {{ORDER}}",
    "Sort_Value_Summary_Pattern": "Trier {{FIELD_NAME}} par {{SELECTED_FIELD_NAME}} dans {{ORDER}}",
    "Sort_More_Summary_Pattern": "Trier {{FIELD_NAME}} par {{SELECTED_FIELD_NAME}} dans {{ORDER}} en utilisant les valeurs de cette {{ROW_COLUMN}} :\\r\\n",
    "Invalid_Sort_Range": "La référence de tri n'est pas valide. Assurez-vous qu'elle se trouve dans les données que vous souhaitez trier et que la première case Trier par n'est pas identique ou vide.",
    "Invalid_Field_Sort_By": "Impossible de déterminer le champ du tableau croisé dynamique sur lequel effectuer le tri.",
    "Top": "Haut",
    "Bottom": "Bas",
    "Top_Item": "Articles",
    "Top_Percent": "Pour cent",
    "Top_Sum": "Somme",
    "ByJoiner": "par",
    "AndJoiner": "et",
    "Q1": "Premier trimestre",
    "Q2": "2e trimestre",
    "Q3": "3e trimestre",
    "Q4": "Quatrième trimestre",
    "Jan": "Janvier",
    "Feb": "Février",
    "Mar": "Mars",
    "Apr": "Avril",
    "May": "Peut",
    "Jun": "Juin",
    "Jul": "Juillet",
    "Aug": "Août",
    "Sep": "Septembre",
    "Oct": "Octobre",
    "Nov": "Novembre",
    "Dec": "Décembre",
    "IsBefore": "est avant",
    "IsBeforeOrEqual": "est antérieur ou égal à",
    "IsAfter": "est après",
    "IsAfterOrEqual": "est postérieur ou égal à",
    "IsBetween": "est entre",
    "IsNotBetween": "n'est pas entre",
    "DateFilterTitle": "Filtre de date",
    "DateShow": "Afficher les éléments pour lesquels la date",
    "WholeDays": "Des journées entières",
    "FieldSetting": "Paramètres de champ",
    "ValueSetting": "Paramètres du champ de valeur",
    "SourceName": "Nom de la source :",
    "CustomName": "Nom personnalisé :",
    "SummarizeValue": "Résumer les valeurs par",
    "ShowValueAs": "Afficher la valeur comme",
    "CalculationForDialog": "Calcul: ",
    "BaseFieldForDialog": "Champ de base :",
    "BaseItemForDialog": "Article de base :",
    "BaseItemNext": "(suivant)",
    "BaseItemPrevious": "(précédent)",
    "SummarizeValueField": "Résumer les valeurs du champ par",
    "ShowValueAsField": "Afficher la valeur comme",
    "ChooseType": "Choisissez le type de calcul que vous souhaitez utiliser pour résumer les données du champ sélectionné",
    "Sum": "Somme",
    "Count": "Compter",
    "Average": "Moyenne",
    "Max": "Max",
    "Min": "Min",
    "Product": "Produit",
    "CountNumbers": "Compter les nombres",
    "StdDev": "Écart-type",
    "StdDevp": "StdDevp",
    "Var": "Var",
    "Varp": "Varp",
    "sigmaValue": "∑ Valeurs",
    "sigmaValueTemp": "Valeurs",
    "DateFormatError": "Ce n'est pas une date valide",
    "noCalculation": "Pas de calcul",
    "percentGrandTotal": "% du total général",
    "percentColumnTotal": "% du total de la colonne",
    "percentRowTotal": "% du total de la ligne",
    "percentEllipsis": "% De ...",
    "percentParentRowTotal": "% du total de la ligne parent",
    "percentParentColumnTotal": "% du total de la colonne parent",
    "percentParentTotal": "% du total des parents...",
    "difference": "Différence avec...",
    "percentDifference": "% Différence par rapport à...",
    "runningTotal": "Total cumulé en ...",
    "percentRunningTotal": "% Total cumulé en ...",
    "rankSmallestLargest": "Classez-les du plus petit au plus grand …",
    "rankLargestSmallest": "Classement du plus grand au plus petit …",
    "index": "Indice",
    "showValueAsDialog": [
      " ",
      " ",
      " ",
      " ",
      "% De ",
      " ",
      " ",
      "% du total des parents",
      "Différence avec",
      "% Différence par rapport à",
      "Total cumulé en",
      "% Total cumulé en ",
      "Classement du plus petit au plus grand",
      "Classement du plus grand au plus petit",
      " "
    ],
    "baseField": "Champ de base :",
    "baseItem": "Article de base :",
    "grouping": "Regroupement",
    "auto": "Auto",
    "startingAt": "À partir de :",
    "endingAt": "Se terminant à :",
    "groupBy": "Par:",
    "seconds": "Secondes",
    "minutes": "Minutes",
    "hours": "Heures",
    "days": "Jours",
    "months": "Mois",
    "quarters": "Quartiers",
    "years": "Années",
    "numberOfDays": "Nombre de jours",
    "NoHaveSpread": "Exception de classeur",
    "SourceError": "Exception de données source, impossible de créer un rapport de tableau croisé dynamique",
    "SourceNotIsTableNameOrFormula": "Les données sources ne sont pas le nom de la table ni la formule",
    "SourceDataOnlyOne": "Cette commande nécessite au moins deux lignes de données source. Vous ne pouvez pas utiliser la commande sur une sélection sur une seule ligne",
    "FieldAreaLimited": "Le champ que vous déplacez ne peut pas être placé dans cette zone du rapport.",
    "Views": "Vues",
    "Group": "Groupe",
    "param_error": "le paramètre est nul ou indéfini",
    "EmptyValueFieldError": "Vous avez besoin d'au moins un champ dans la zone Valeurs pour appliquer un filtre de valeur",
    "DefaultPivotTableViewName": "Vue Pivot",
    "toolTipContent_Row": "Rangée: ",
    "toolTipContent_Column": "Colonne: ",
    "toolTipContent_Value": "Valeur: ",
    "toolTipContent_NoValue": "Aucune valeur",
    "deferLayoutUpdate": "Différer la mise à jour de la mise en page",
    "getStringLabelFilterItemText": "",
    "getDateLabelFilterItemText": "",
    "getValueFilterItemText": "",
    "PivotTableErrorMessage_ShowDetail": "Impossible d'afficher ou de masquer les détails de cette sélection",
    "PivotTableErrorMessage_MakeChange": "Nous ne pouvons pas effectuer cette modification pour les cellules sélectionnées, car cela affecterait un tableau croisé dynamique. Utilisez la liste de champs pour modifier le rapport. Si vous essayez d'insérer ou de supprimer des cellules, déplacez le tableau croisé dynamique et réessayez.",
    "PivotTableErrorMessage_ExistData": "Il y a déjà des données dans {}. Voulez-vous les remplacer ?",
    "PivotTableErrorMessage_EditWhenDefer": "Le rapport de tableau croisé dynamique ne peut pas être modifié si la case à cocher Différer la mise à jour de la mise en page est sélectionnée. Pour modifier le rapport, décochez la case Différer la mise à jour de la mise en page au bas de la liste des champs du tableau croisé dynamique.",
    "PivotTableErrorMessage_DuplicatedFieldName": "Le nom du champ du tableau croisé dynamique existe déjà.",
    "PivotTableErrorMessage_EmptyFieldName": "Impossible de saisir une valeur nulle comme nom d'élément ou de champ dans un rapport de tableau croisé dynamique.",
    "PivotTableErrorMessage_Protect": "Cette commande ne peut pas être exécutée tant qu'une feuille protégée contient un autre rapport de tableau croisé dynamique basé sur les mêmes données sources. Pour supprimer la protection de la feuille contenant l'autre rapport, cliquez sur l'onglet de la feuille, puis sur Supprimer la protection de la feuille (onglet Révision, groupe Modifications). Réessayez ensuite la commande.",
    "PivotTableErrorMessage_EmptySourceFieldName": "Le nom du champ de tableau croisé dynamique n'est pas valide. Pour créer un rapport de tableau croisé dynamique, vous devez utiliser des données organisées sous forme de liste avec des colonnes étiquetées. Si vous modifiez le nom d'un champ de tableau croisé dynamique, vous devez saisir un nouveau nom pour le champ.",
    "PivotTableErrorMessage_Overlap": "Un rapport de tableau croisé dynamique ne peut pas chevaucher un autre rapport de tableau croisé dynamique.",
    "PivotTableErrorMessage_InvalidChange": "Nous ne pouvons pas modifier cette partie du tableau croisé dynamique.",
    "PivotTableErrorMessage_InvalidGroup": "Impossible de regrouper cette sélection.",
    "PivotTableErrorMessage_InvalidReference": "La référence n'est pas valide.",
    "PivotTableForAccessibility": "Tableau croisé dynamique : \\r\\nNom du tableau croisé dynamique :",
    "PivotTableCalcItemHasTowCacheField": "Si un ou plusieurs champs du tableau croisé dynamique contiennent des éléments calculés, aucun champ ne peut être utilisé deux fois ou plus dans la zone de données, ou dans la zone de données et une autre zone en même temps. Si vous essayez d'ajouter un champ, supprimez les éléments calculés et ajoutez à nouveau le champ. Si vous essayez d'ajouter un élément calculé, modifiez le rapport de tableau croisé dynamique de sorte qu'aucun champ ne soit utilisé plus d'une fois, puis ajoutez l'élément calculé.",
    "PivotTableHasNumberOrDateGroup": "Ce champ de rapport de tableau croisé dynamique est groupé. Vous ne pouvez pas ajouter d'élément calculé à un champ groupé. Pour dissocier le champ, assurez-vous qu'il se trouve dans la zone de ligne ou de colonne, sélectionnez l'un des éléments du champ groupé, cliquez sur le bouton Dissocier dans le groupe Groupe de l'onglet Analyser, puis insérez l'élément calculé. Une fois inséré, vous pouvez regrouper à nouveau les éléments du champ.",
    "PivotTableSubtotalType": "Les moyennes, les écarts types et les variances ne sont pas pris en charge lorsqu'un rapport de tableau croisé dynamique contient des éléments calculés.",
    "PivotTableHasSameItemName": "L'élément ou le champ calculé n'a pas pu être créé car un autre élément ou champ du même nom existe.",
    "PivotTableCalcItemHasMultipleDataField": "Plusieurs champs de données du même champ ne sont pas pris en charge lorsqu'un rapport de tableau croisé dynamique contient des éléments calculés.",
    "PivotTableMoveCalcItemFieldToReport": "Ce champ ne peut pas être placé dans le filtre de rapport car il contient des éléments calculés. Pour placer ce champ dans le filtre de rapport, supprimez d'abord les éléments calculés.",
    "PivotTableErrorFormula": "Un nom d'élément est introuvable. Vérifiez que vous avez correctement saisi le nom et que l'élément est présent dans le rapport de tableau croisé dynamique.",
    "SlicerNameInFormula": "Trancheuse",
    "search": "Recherche",
    "AddSearchResult": "Ajouter la sélection actuelle au filtre",
    "Layout": "Mise en page",
    "showNoData": "Afficher les éléments sans données",
    "showSubtotalTop": "Afficher les sous-totaux en haut de chaque groupe",
    "TIMELINE_PLACE_HOLDER": "{TL}",
    "ALL_DATES_IN": "Toutes les dates en ",
    "ALL_PERIODS": "Toutes les périodes",
    "INVALID_DATE_SELECTION": "Sélection de date non valide !",
    "QUARTER_MAP": [
      " ",
      "T1",
      "T2",
      "T3",
      "T4"
    ],
    "DateNotEqual": "Pas {TL}",
    "DateNewerThan": "Après {TL}",
    "DateNewerThanOrEqual": "Après ou le {TL}",
    "DateOlderThan": "Avant {TL}",
    "DateOlderThanOrEqual": "Avant ou le{TL}",
    "DateNotBetween": "Pas entre {TL}",
    "AllDatesIn_Quarter1": "Toutes les dates du premier trimestre",
    "AllDatesIn_Quarter2": "Toutes les dates au 2e trimestre",
    "AllDatesIn_Quarter3": "Toutes les dates au 3ème trimestre",
    "AllDatesIn_Quarter4": "Toutes les dates au 4e trimestre",
    "AllDatesIn_January": "Toutes les dates en janvier",
    "AllDatesIn_February": "Toutes les dates en février",
    "AllDatesIn_March": "Toutes les dates en mars",
    "AllDatesIn_April": "Toutes les dates en avril",
    "AllDatesIn_May": "Toutes les dates en mai",
    "AllDatesIn_June": "Toutes les dates en juin",
    "AllDatesIn_July": "Toutes les dates en juillet",
    "AllDatesIn_August": "Toutes les dates en août",
    "AllDatesIn_September": "Toutes les dates en septembre",
    "AllDatesIn_October": "Toutes les dates en octobre",
    "AllDatesIn_November": "Toutes les dates en novembre",
    "AllDatesIn_December": "Toutes les dates en décembre",
    "TIME_LEVEL_YEARS": "ANNÉES",
    "TIME_LEVEL_QUARTERS": "QUARTIERS",
    "TIME_LEVEL_MONTHS": "MOIS",
    "TIME_LEVEL_DAYS": "JOURS",
    "PivotTableErrorMessage_ExistTable": "Un rapport de tableau croisé dynamique ne peut pas chevaucher une table.",
    "VALUE_MUST_NUMBER": "La valeur doit être un nombre.",
    "ENTRY_NUMBER": "Votre entrée ne peut pas être utilisée, un nombre entier ou décimal peut être requis.",
    "POSITIVE_INTEGER": "Le nombre doit être supérieur à zéro."
  },
  "TableSheet": {
    "EXP_TooManyPinRecords": "Ne prend en charge que les enregistrements de moins de 10 broches.",
    "GroupPanelTip": "Faites glisser ici pour définir les groupes de lignes",
    "GroupPanelFieldsHeader": "Les champs",
    "GroupPanelGroupsHeader": "Groupes",
    "GroupPanelItemRemove": "Retirer",
    "GroupPanelItemAddCalculation": "Ajouter un champ de résumé",
    "GroupPanelDropDownCalcField": "Champ",
    "GroupPanelSummaryLabelFormula": "Formule",
    "GroupPanelSummaryLabelCaption": "Légende",
    "GroupPanelSummaryLabelSlice": "Tranche",
    "GroupPanelSummaryLabelRelateTo": "Se rapporter à",
    "GroupPanelSummaryLabelPosition": "Position",
    "GroupPanelSummaryLabelPositionHeader": "En-tête",
    "GroupPanelSummaryLabelPositionFooter": "Pied de page",
    "GroupPanelItemRemoveAll": "Supprimer tout",
    "GroupPanelAddCalculateColumn": "Ajouter une colonne calculée",
    "TextColon": ":",
    "StatusBarRowCount": "Nombre de lignes",
    "StatusBarToolTipRowCount": "Nombre de lignes sélectionnées",
    "CrossColumnCrossHeader": "Croix",
    "CrossColumnDetailFormatter": "Formateur",
    "CrossColumnDetailName": "Nom",
    "CrossColumnDetailValue": "Valeur",
    "CrossColumnDetailValuePlaceHolder": "Faites glisser l'élément ici pour définir la valeur",
    "CrossColumnDetailOver": "Sur",
    "CrossColumnDetailCaption": "Légende",
    "CrossColumnDetailValueHeader": "Afficher l'en-tête de valeur croisée",
    "CrossColumnDetailFilter": "Filtre",
    "CrossColumnDetailAttributes": "Attributs",
    "CrossColumnDetailList": "Liste",
    "Exp_InvalidOperationInProtectForTableSheet": "La plage que vous essayez de modifier est verrouillée.",
    "defineColumn": "Définir la colonne",
    "cancel": "Annuler",
    "submit": "Soumettre",
    "defineColumnValue": "Valeur",
    "defineColumnCaption": "Légende",
    "defineColumnType": "Taper",
    "defineColumnFormatting": "Formatage",
    "defineColumnConfiguration": "Configuration",
    "defineColumnDefaultValue": "Défaut",
    "defineColumnOthers": "Autres",
    "defineColumnFormula": "Formule",
    "defineColumnNone": "Aucun",
    "defineColumnAll": "Tous",
    "defineColumnNoResults": "Aucun résultat",
    "defineColumnRequired": "C'est obligatoire",
    "defineColumnExisted": "Ça a existé",
    "columnTypeNumber": "Nombre",
    "columnTypeText": "Texte",
    "columnTypeFormula": "Formule",
    "columnTypeCheckbox": "Case à cocher",
    "columnTypeDate": "Date",
    "columnTypeCurrency": "Devise",
    "columnTypePercent": "Pour cent",
    "columnTypePhone": "Téléphone",
    "columnTypeEmail": "E-mail",
    "columnTypeURL": "URL",
    "columnTypeLookup": "Chercher",
    "columnTypeCreatedTime": "Temps de création",
    "columnTypeModifiedTime": "Heure modifiée",
    "columnTypeAttachment": "Pièce jointe",
    "columnTypeSelect": "Sélectionner",
    "columnTypeBarcode": "Code à barres",
    "columnTypeNumberFormattingSample": "Échantillon",
    "columnTypeNumberFormattingDecimalPlaces": "Décimales",
    "columnTypeNumberFormattingThousandSeparator": "Utilisez le séparateur 1000 (,)",
    "columnTypeNumberFormattingNegativeNumbers": "Nombres négatifs",
    "columnTypeNumberFormattingSymbol": "Symbole",
    "columnTypeNumberFormatting": {
      "negativeNumbers": [],
      "numberCategoryFormats": [
        "0",
        "0;[Rouge]0",
        "0_);(0)",
        "0_);[Rouge](0)",
        "#,##0",
        "#,##0;[Rouge]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rouge](#,##0)"
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
          "Aucun",
          " ",
          " "
        ],
        [
          "$",
          "$",
          "en-US"
        ],
        [
          "¥(chinois)",
          "¥",
          "zh-cn"
        ],
        [
          "¥(japonais)",
          "¥",
          "ja-jp"
        ],
        [
          "₩(coréen)",
          "₩",
          "ko-kr"
        ]
      ],
      "percentageFormats": [
        "0%"
      ],
      "currencyFormatWithoutSymbol": [
        "#,##0",
        "#,##0;[Rouge]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rouge](#,##0)"
      ],
      "commonFormats": {
        "Number": {
          "format": "0,00",
          "label": "Nombre"
        },
        "Currency": {
          "format": "[$$-409]#,##0,00",
          "label": "Devise"
        },
        "Accounting": {
          "format": "_(\\\"$\\\"* #,##0.00_);_(\\\"$\\\"* (#,##0.00);_(\\\"$\\\"* \\\"-\\\"??_) ;_(@_)",
          "label": "Comptabilité"
        },
        "ShortDate": {
          "format": "j/m/aaaa",
          "label": "Rendez-vous court"
        },
        "LongDate": {
          "format": "[$-409]jjj, mmmm jj, aaaa",
          "label": "Longue date"
        },
        "Time": {
          "format": "[$-409]h:mm:ss AM/PM",
          "label": "Temps"
        },
        "Percentage": {
          "format": "0,00%",
          "label": "Pourcentage"
        },
        "Fraction": {
          "format": "# ?/?",
          "label": "Fraction"
        },
        "Scientific": {
          "format": "0,00E+00",
          "label": "Scientifique"
        },
        "Text": {
          "format": "@",
          "label": "Texte"
        },
        "Comma": {
          "format": "_(* #,##0.00_);_(* (#,##0.00);_(* \\\"-\\\"??_);_(@_)",
          "label": "Virgule"
        }
      }
    },
    "columnTypeLookupTables": "Sélectionner la table de recherche",
    "columnTypeLookupFields": "Le champ à regarder vers le haut",
    "columnTypeLookupIndexes": "Le nombre record",
    "columnTypeFormattingCategory": "Catégorie",
    "columnTypeMask": {
      "pattern": "Modèle",
      "placeholder": "Espace réservé",
      "excludeLiteral": "Exclure le littéral",
      "excludePlaceholder": "Exclure l'espace réservé"
    },
    "columnTypeAllEditableFields": "Tous les champs modifiables",
    "columnTypeDateTimePicker": "Sélecteur de date et d'heure",
    "columnTypeDateStartDay": "Jour de départ",
    "columnTypeDateMonday": "Lundi",
    "columnTypeDateTuesday": "Mardi",
    "columnTypeDateWednesday": "Mercredi",
    "columnTypeDateThursday": "Jeudi",
    "columnTypeDateFriday": "Vendredi",
    "columnTypeDateSaturday": "Samedi",
    "columnTypeDateSunday": "Dimanche",
    "columnTypeDateCalendarPage": "Page Calendrier",
    "columnTypeDateDay": "Jour",
    "columnTypeDateYear": "Année",
    "columnTypeDateMonth": "Mois",
    "columnTypeDateShowTime": "Afficher l'heure",
    "columnTypeDateShowDateRange": "Afficher la plage de dates",
    "columnTypeDateShowBuiltInDateRange": "Afficher la plage de dates intégrée",
    "columnTypeDateType": "Taper",
    "columnTypeDateLocale": "lieu (localité)",
    "columnTypeCalendar": "Type de calendrier",
    "columnTypeShowEraFirstYear": "Utilisez Gannen pour afficher la 1ère année",
    "columnTypeCalendarType": {
      "western": "Occidental",
      "JER": "Le règne de l'empereur japonais"
    },
    "columnTypeAttachmentMarginGroup": "Marge",
    "columnTypeAttachmentLeft": "Gauche",
    "columnTypeAttachmentTop": "Haut",
    "columnTypeAttachmentRight": "Droite",
    "columnTypeAttachmentBottom": "Bas",
    "columnTypeAttachmentMaxSize": "Limite de taille",
    "columnTypeAttachmentAccept": "Type de fichier",
    "columnTypeAttachmentAcceptValueTypes": {
      "txt": "SMS",
      "all": "tous",
      "pdf": "pdf",
      "image": "jpg, png, gif",
      "excel": "docx,xlsx,pptx"
    },
    "columnTypeAttachmentIsPreviewEnabled": "Aperçu",
    "columnTypeAttachmentIsClearEnabled": "Clair",
    "columnTypeAttachmentIsDownloadEnabled": "Télécharger",
    "columnTypeAttachmentSizeUnit": "KB",
    "columnTypeCheckboxTitle": "Type de cellule de case à cocher",
    "columnTypeCheckboxTextGroup": "Texte",
    "columnTypeCheckboxTrue": "Vrai",
    "columnTypeCheckboxIndeterminate": "Indéterminé",
    "columnTypeCheckboxFalse": "FAUX",
    "columnTypeCheckboxAlign": "Aligner",
    "columnTypeCheckboxOther": "Autre",
    "columnTypeCheckboxCaption": "Légende",
    "columnTypeCheckboxIsThreeState": "Est-Trois-États",
    "columnTypeCheckboxBoxSize": "Taille de la boîte",
    "columnTypeCheckboxAuto": "Auto",
    "columnTypeCheckboxTextAlign": {
      "top": "Haut",
      "bottom": "Bas",
      "left": "Gauche",
      "right": "Droite"
    },
    "columnTypeBarcodeLabel": {
      "showLabel": "Afficher l'étiquette",
      "barcodeType": "Type de code à barres",
      "color": "Couleur",
      "errorCorrectionLevel": "Niveau de correction d'erreur",
      "backgroundColor": "Couleur d'arrière-plan",
      "version": "Version",
      "model": "Modèle",
      "mask": "Masque",
      "connection": "Connexion",
      "charCode": "Code de caractère",
      "connectionNo": "Numéro de connexion",
      "charset": "Jeu de caractères",
      "quietZoneLeft": "Zone de silence à gauche",
      "quietZoneRight": "Zone de silence à droite",
      "quietZoneTop": "Zone de silence supérieure",
      "quietZoneBottom": "Zone de silence en bas",
      "labelPosition": "Position de l'étiquette",
      "addOn": "Ajouter sur",
      "addOnLabelPosition": "Position de l'étiquette complémentaire",
      "fontFamily": "Famille de polices",
      "fontStyle": "Style de police",
      "fontWeight": "Poids de la police",
      "fontTextDecoration": "Police TexteDécoration",
      "fontTextAlign": "Police TextAlign",
      "fontSize": "Taille de la police",
      "fileIdentifier": "Identifiant de fichier",
      "structureNumber": "Numéro de structure",
      "structureAppend": "Structure Append",
      "ecc00_140Symbol": "Taille du symbole Ecc000_140",
      "ecc200EncodingMode": "Mode de codage final Ecc200",
      "ecc200SymbolSize": "Taille du symbole Ecc200",
      "eccMode": "Mode Ecc",
      "compact": "Compact",
      "columns": "Colonnes",
      "rows": "Lignes",
      "groupNo": "GroupeNo",
      "grouping": "Regroupement",
      "codeSet": "Ensemble de codes",
      "fullASCII": "ASCII complet",
      "checkDigit": "Chiffre de contrôle",
      "nwRatio": "Rapport entre les barres larges et étroites",
      "labelWithStartAndStopCharacter": "Étiquette avec caractère de début et de fin"
    },
    "columnTypeComboBoxEditorValueTypes": "EditorValueType",
    "columnTypeComboBoxItems": "Articles",
    "columnTypeComboBoxItemProperties": "Propriétés de l'élément",
    "columnTypeComboBoxText": "Texte",
    "columnTypeComboBoxValue": "Valeur",
    "columnTypeComboBoxAdd": "Ajouter",
    "columnTypeComboBoxRemove": "Retirer",
    "columnTypeComboBoxEditorValueType": {
      "text": "Texte",
      "index": "Indice",
      "value": "Valeur"
    },
    "columnTypeComboBoxEditable": "Modifiable",
    "columnTypeComboBoxItemHeight": "Hauteur des objets",
    "columnTypeUrlLabel": {
      "linkColor": "Couleur du lien",
      "visitedLinkColor": "Couleur du lien visité"
    }
  },
  "ReportSheet": {
    "ContainsInvalidCells": "La feuille de rapport contient des cellules non valides ({0}), veuillez vérifier.",
    "toolTipTableName": "Tableau: ",
    "toolTipColumnName": "Colonne: ",
    "toolTipFormula": "Formule: ",
    "toolTipCellType": "Taper: ",
    "listCellType": "Liste",
    "groupCellType": "Groupe",
    "summaryCellType": "Résumé",
    "summarySumTip": "(Somme)",
    "summaryAvgTip": "(Moyenne)",
    "summaryMaxTip": "(Max)",
    "summaryMinTip": "(Min)",
    "summaryCountTip": "(Compter)",
    "summaryNoneTip": "(Aucun)",
    "configDataSetting": "Veuillez configurer les paramètres de données.",
    "Exp_InvalidParameterName": "nom de paramètre non valide",
    "wmk1": "5265706f72745368656574",
    "wmk2": "5265706f72745368656574"
  },
  "IO": {
    "EXP_IO": "Exception de lecture et d’écriture de fichier.",
    "EXP_FILE_FORMAT": "Format de fichier incorrect.",
    "GET_PARTIAL_VALUES_ERROR_MSG": "fichier d'erreur",
    "EXP_WRONG_PASSWORD": "Le mot de passe que vous avez fourni n'est pas correct.",
    "EXP_EMPTY_PASSWORD": "Le fichier Excel ne peut pas être ouvert car le classeur est protégé par un mot de passe."
  },
  "Functions": {
    "ABS": {
      "description": "Cette fonction calcule la valeur absolue de la valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ACCRINT": {
      "description": "Cette fonction calcule les intérêts courus pour un titre qui paie des intérêts périodiques.",
      "parameters": [
        {
          "name": "problème"
        },
        {
          "name": "premier intérêt"
        },
        {
          "name": "règlement"
        },
        {
          "name": "taux"
        },
        {
          "name": "par"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "ACCRINTM": {
      "description": "Cette fonction calcule les intérêts courus à l'échéance pour un titre qui verse des intérêts périodiques.",
      "parameters": [
        {
          "name": "problème"
        },
        {
          "name": "règlement"
        },
        {
          "name": "taux"
        },
        {
          "name": "par"
        },
        {
          "name": "base",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "ACOS": {
      "description": "Cette fonction calcule l'arc cosinus, c'est-à-dire l'angle dont le cosinus est la valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ACOSH": {
      "description": "Cette fonction calcule le cosinus hyperbolique inverse de la valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ADDRESS": {
      "description": "Cette fonction utilise les numéros de ligne et de colonne pour créer une adresse de cellule dans le texte.",
      "parameters": [
        {
          "name": "numéro_de_ligne"
        },
        {
          "name": "numéro_colonne"
        },
        {
          "name": "abs_num",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "a1style",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "feuille_texte",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "AGGREGATE": {
      "description": "Cette fonction regroupe une liste de nombres à l'aide d'une fonction intégrée spécifiée.",
      "parameters": [
        {
          "name": "numéro_de_fonction"
        },
        {
          "name": "options"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": "vrai"
        }
      ]
    },
    "AMORDEGRC": {
      "description": "Cette fonction renvoie l'amortissement d'une période comptable, en prenant en compte l'amortissement au prorata, et applique un coefficient d'amortissement dans le calcul en fonction de la durée de vie des actifs.",
      "parameters": [
        {
          "name": "coût"
        },
        {
          "name": "date_d'achat"
        },
        {
          "name": "première_période"
        },
        {
          "name": "sauver"
        },
        {
          "name": "période"
        },
        {
          "name": "taux"
        },
        {
          "name": "base"
        }
      ]
    },
    "AMORLINC": {
      "description": "Cette fonction calcule l'amortissement pour une période comptable, en tenant compte de l'amortissement au prorata.",
      "parameters": [
        {
          "name": "coût"
        },
        {
          "name": "date_d'achat"
        },
        {
          "name": "première_période"
        },
        {
          "name": "sauver"
        },
        {
          "name": "période"
        },
        {
          "name": "taux"
        },
        {
          "name": "base"
        }
      ]
    },
    "AND": {
      "description": "Vérifie si tous les arguments sont vrais et renvoie Vrai si tous les arguments sont vrais.",
      "parameters": [
        {
          "name": "logique1"
        },
        {
          "name": "logique2"
        }
      ]
    },
    "ASIN": {
      "description": "Cette fonction calcule l'arc sinus, c'est-à-dire l'angle dont le sinus est la valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ASINH": {
      "description": "Cette fonction calcule le sinus hyperbolique inverse d'un nombre.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ATAN": {
      "description": "Cette fonction calcule l'arc tangente, c'est-à-dire l'angle dont la tangente est la valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ATAN2": {
      "description": "Cette fonction calcule l'arc tangente des coordonnées x et y spécifiées.",
      "parameters": [
        {
          "name": "x_num"
        },
        {
          "name": "y_num"
        }
      ]
    },
    "ATANH": {
      "description": "Cette fonction calcule la tangente hyperbolique inverse d'un nombre.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "AVEDEV": {
      "description": "Cette fonction calcule la moyenne des écarts absolus des valeurs spécifiées par rapport à leur moyenne.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "AVERAGE": {
      "description": "Cette fonction calcule la moyenne des valeurs numériques spécifiées.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "AVERAGEA": {
      "description": "Cette fonction calcule la moyenne des valeurs spécifiées, y compris les valeurs textuelles ou logiques ainsi que les valeurs numériques.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "AVERAGEIF": {
      "description": "Cette fonction calcule la moyenne des valeurs numériques spécifiées à condition qu'elles répondent aux critères spécifiés.",
      "parameters": [
        {
          "name": "gamme"
        },
        {
          "name": "critères"
        },
        {
          "name": "plage_moyenne",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "AVERAGEIFS": {
      "description": "Cette fonction calcule la moyenne de toutes les cellules qui répondent à plusieurs critères spécifiés.",
      "parameters": [
        {
          "name": "plage_moyenne"
        },
        {
          "name": "critère_plage1"
        },
        {
          "name": "critère1"
        },
        {
          "name": "critères_plage2",
          "repeatable": "vrai"
        },
        {
          "name": "critère2",
          "repeatable": "vrai"
        }
      ]
    },
    "BESSELI": {
      "description": "Cette fonction calcule la fonction de Bessel modifiée de première espèce évaluée pour des arguments purement imaginaires.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "commande"
        }
      ]
    },
    "BESSELJ": {
      "description": "Cette fonction calcule la fonction de Bessel de première espèce.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "commande"
        }
      ]
    },
    "BESSELK": {
      "description": "Cette fonction calcule la fonction de Bessel modifiée du second type évaluée pour des arguments purement imaginaires.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "commande"
        }
      ]
    },
    "BESSELY": {
      "description": "Cette fonction calcule la fonction de Bessel de deuxième espèce.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "commande"
        }
      ]
    },
    "BETADIST": {
      "description": "Cette fonction calcule la fonction de distribution bêta cumulative.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "inférieur",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "supérieur",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "BETAINV": {
      "description": "Cette fonction calcule l'inverse de la fonction de distribution bêta cumulative.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "inférieur",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "supérieur",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "BIN2DEC": {
      "description": "Cette fonction convertit un nombre binaire en nombre décimal",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "BIN2HEX": {
      "description": "Cette fonction convertit un nombre binaire en un nombre hexadécimal.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "BIN2OCT": {
      "description": "Cette fonction convertit un nombre binaire en un nombre octal.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "BINOMDIST": {
      "description": "Cette fonction calcule la probabilité de distribution binomiale à terme individuel.",
      "parameters": [
        {
          "name": "Nombres"
        },
        {
          "name": "procès"
        },
        {
          "name": "probabilités"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "CEILING": {
      "description": "Cette fonction arrondit un nombre au multiple le plus proche d'une valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "importance"
        }
      ]
    },
    "CHAR": {
      "description": "Cette fonction renvoie le caractère spécifié par un nombre.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "CHIDIST": {
      "description": "Cette fonction calcule la probabilité unilatérale de la distribution du chi carré.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "CHIINV": {
      "description": "Cette fonction calcule l'inverse de la probabilité unilatérale de la distribution du chi carré",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "CHITEST": {
      "description": "Cette fonction calcule le test d'indépendance de la distribution du chi carré.",
      "parameters": [
        {
          "name": "plage_actuelle"
        },
        {
          "name": "plage_attendue"
        }
      ]
    },
    "CHOOSE": {
      "description": "Cette fonction renvoie une valeur à partir d'une liste de valeurs.",
      "parameters": [
        {
          "name": "index_num"
        },
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "CLEAN": {
      "description": "Cette fonction supprime tous les caractères non imprimables du texte.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "CODE": {
      "description": "Cette fonction renvoie un code numérique pour représenter le premier caractère d'une chaîne de texte. Le code renvoyé correspond au jeu de caractères Windows (ANSI).",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "COLUMN": {
      "description": "Cette fonction renvoie le numéro de colonne d'une référence.",
      "parameters": [
        {
          "name": "référence"
        }
      ]
    },
    "COLUMNS": {
      "description": "Cette fonction renvoie le nombre de colonnes dans un tableau.",
      "parameters": [
        {
          "name": "tableau"
        }
      ]
    },
    "COMBIN": {
      "description": "Cette fonction calcule le nombre de combinaisons possibles pour un nombre spécifié d'éléments.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "numéro_choisi"
        }
      ]
    },
    "COMPLEX": {
      "description": "Cette fonction convertit les coefficients réels et imaginaires en un nombre complexe.",
      "parameters": [
        {
          "name": "numéro_réel"
        },
        {
          "name": "image_num"
        },
        {
          "name": "suffixe"
        }
      ]
    },
    "CONCATENATE": {
      "description": "Cette fonction combine plusieurs chaînes de texte ou nombres en une seule chaîne de texte.",
      "parameters": [
        {
          "name": "texte 1"
        },
        {
          "name": "texte2",
          "repeatable": "vrai"
        }
      ]
    },
    "CONFIDENCE": {
      "description": "Cette fonction renvoie un intervalle de confiance pour une moyenne de population.",
      "parameters": [
        {
          "name": "alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "taille"
        }
      ]
    },
    "CONVERT": {
      "description": "Cette fonction convertit un nombre d'un système de mesure en son équivalent dans un autre système de mesure.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "de_l'unité"
        },
        {
          "name": "à_l'unité"
        }
      ]
    },
    "CORREL": {
      "description": "Cette fonction renvoie le coefficient de corrélation des deux ensembles de données.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        }
      ]
    },
    "COS": {
      "description": "Cette fonction renvoie le cosinus de l'angle spécifié.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "COSH": {
      "description": "Cette fonction renvoie le cosinus hyperbolique de la valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "COUNT": {
      "description": "Cette fonction renvoie le nombre de cellules contenant des nombres.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "COUNTA": {
      "description": "Cette fonction renvoie le nombre de cellules contenant des nombres, du texte ou des valeurs logiques.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "COUNTBLANK": {
      "description": "Cette fonction renvoie le nombre de cellules vides (ou vierges) dans une plage de cellules d'une feuille.",
      "parameters": [
        {
          "name": "gamme de cellules"
        }
      ]
    },
    "COUNTIF": {
      "description": "Cette fonction renvoie le nombre de cellules qui répondent à une certaine condition",
      "parameters": [
        {
          "name": "gamme de cellules"
        },
        {
          "name": "critères"
        }
      ]
    },
    "COUNTIFS": {
      "description": "Cette fonction renvoie le nombre de cellules qui remplissent plusieurs conditions.",
      "parameters": [
        {
          "name": "critère_plage1"
        },
        {
          "name": "critère1"
        },
        {
          "name": "critères_plage2",
          "repeatable": "vrai"
        },
        {
          "name": "critère2",
          "repeatable": "vrai"
        }
      ]
    },
    "COUPDAYBS": {
      "description": "Cette fonction calcule le nombre de jours entre le début de la période du coupon et la date de règlement.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYS": {
      "description": "Cette fonction renvoie le nombre de jours dans la période du coupon qui contient la date de règlement.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYSNC": {
      "description": "Cette fonction calcule le nombre de jours entre la date de règlement et la date du prochain coupon.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNCD": {
      "description": "Cette fonction renvoie un numéro de date de la prochaine date de coupon après la date de règlement.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNUM": {
      "description": "Cette fonction renvoie le nombre de coupons dus entre la date de règlement et la date d'échéance.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPPCD": {
      "description": "Cette fonction renvoie un numéro de date de la date du coupon précédent avant la date de règlement.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "COVAR": {
      "description": "Cette fonction renvoie la covariance, qui est la moyenne des produits des écarts pour chaque paire de points de données dans deux ensembles de nombres.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        }
      ]
    },
    "CRITBINOM": {
      "description": "Cette fonction renvoie le critère binomial, la plus petite valeur pour laquelle la distribution binomiale cumulative est supérieure ou égale à une valeur de critère.",
      "parameters": [
        {
          "name": "procès"
        },
        {
          "name": "probabilités"
        },
        {
          "name": "alpha"
        }
      ]
    },
    "CUMIPMT": {
      "description": "Cette fonction renvoie les intérêts cumulés payés sur un prêt entre les périodes de début et de fin.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "début_période"
        },
        {
          "name": "fin_période"
        },
        {
          "name": "type de paiement"
        }
      ]
    },
    "CUMPRINC": {
      "description": "Cette fonction renvoie le capital cumulé payé sur un prêt entre les périodes de début et de fin.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "début_période"
        },
        {
          "name": "fin_période"
        },
        {
          "name": "type de paiement"
        }
      ]
    },
    "DATE": {
      "description": "Cette fonction renvoie l'objet DateTime pour une date particulière, spécifiée par l'année, le mois et le jour.",
      "parameters": [
        {
          "name": "année"
        },
        {
          "name": "mois"
        },
        {
          "name": "jour"
        }
      ]
    },
    "DATEDIF": {
      "description": "Cette fonction renvoie le nombre de jours, de mois ou d'années entre deux dates.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "date_de_fin"
        },
        {
          "name": "unité"
        }
      ]
    },
    "DATEVALUE": {
      "description": "Cette fonction renvoie un objet DateTime de la date spécifiée.",
      "parameters": [
        {
          "name": "date_texte"
        }
      ]
    },
    "DAVERAGE": {
      "description": "Cette fonction calcule la moyenne des valeurs d'une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DAY": {
      "description": "Cette fonction renvoie le numéro du jour du mois (entier de 1 à 31) qui correspond à la date spécifiée.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "DAYS360": {
      "description": "Cette fonction renvoie le nombre de jours entre deux dates sur la base d'une année de 360 ​​jours.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "date_de_fin"
        },
        {
          "name": "méthode",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "DB": {
      "description": "Cette fonction calcule l'amortissement d'un actif pour une période donnée en utilisant la méthode du solde dégressif fixe",
      "parameters": [
        {
          "name": "coût"
        },
        {
          "name": "sauver"
        },
        {
          "name": "vie"
        },
        {
          "name": "période"
        },
        {
          "name": "mois"
        }
      ]
    },
    "DCOUNT": {
      "description": "Cette fonction compte les cellules qui contiennent des nombres dans une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DCOUNTA": {
      "description": "Cette fonction compte les cellules non vides dans une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DDB": {
      "description": "Cette fonction calcule l'amortissement d'un actif pour une période spécifiée en utilisant la méthode de l'amortissement dégressif à taux double ou une autre méthode que vous spécifiez.",
      "parameters": [
        {
          "name": "coût"
        },
        {
          "name": "sauver"
        },
        {
          "name": "vie"
        },
        {
          "name": "période"
        },
        {
          "name": "facteur"
        }
      ]
    },
    "DEC2BIN": {
      "description": "Cette fonction convertit un nombre décimal en nombre binaire.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "DEC2HEX": {
      "description": "Cette fonction convertit un nombre décimal en un nombre hexadécimal",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "DEC2OCT": {
      "description": "Cette fonction convertit un nombre décimal en un nombre octal",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "DEGREES": {
      "description": "Cette fonction convertit la valeur spécifiée de radians en degrés",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "DELTA": {
      "description": "Cette fonction identifie si deux valeurs sont égales. Renvoie 1 si elles sont égales ; renvoie 0 sinon.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2"
        }
      ]
    },
    "DEVSQ": {
      "description": "Cette fonction calcule la somme des carrés des écarts des points de données (ou d'un tableau de points de données) par rapport à leur moyenne d'échantillon.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "DGET": {
      "description": "Cette fonction extrait une valeur unique d'une colonne d'une liste ou d'une base de données qui correspond aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DISC": {
      "description": "Cette fonction calcule le taux d'actualisation d'un titre.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "prix"
        },
        {
          "name": "rachat"
        },
        {
          "name": "base"
        }
      ]
    },
    "DMAX": {
      "description": "Cette fonction renvoie le plus grand nombre dans une colonne d'une liste ou d'une base de données qui correspond aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DMIN": {
      "description": "Cette fonction renvoie le plus petit nombre dans une colonne d'une liste ou d'une base de données qui correspond aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DOLLAR": {
      "description": "Cette fonction convertit un nombre en texte en utilisant le format monétaire, avec les décimales arrondies à la position spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "décimales",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "DOLLARDE": {
      "description": "Cette fonction convertit un prix fractionnaire en dollars en un prix décimal en dollars.",
      "parameters": [
        {
          "name": "dollar fractionnaire"
        },
        {
          "name": "fraction"
        }
      ]
    },
    "DOLLARFR": {
      "description": "Cette fonction convertit un prix en dollars en nombre décimal en un prix en dollars fractionnaire.",
      "parameters": [
        {
          "name": "dollar_décimal"
        },
        {
          "name": "fraction"
        }
      ]
    },
    "DPRODUCT": {
      "description": "Cette fonction multiplie les valeurs d'une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DSTDEV": {
      "description": "Cette fonction estime l'écart type d'une population basée sur un échantillon en utilisant les nombres d'une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DSTDEVP": {
      "description": "Cette fonction calcule l'écart type d'une population en se basant sur l'ensemble de la population en utilisant les nombres d'une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DSUM": {
      "description": "Cette fonction ajoute les nombres d'une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DURATION": {
      "description": "Cette fonction renvoie la durée Macaulay pour une valeur nominale supposée de 100 $.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "coupon"
        },
        {
          "name": "rendement"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "DVAR": {
      "description": "Cette fonction estime la variance d'une population à partir d'un échantillon en utilisant les nombres d'une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "DVARP": {
      "description": "Cette fonction calcule la variance d'une population en fonction de la population entière en utilisant les nombres d'une colonne d'une liste ou d'une base de données qui correspondent aux conditions spécifiées.",
      "parameters": [
        {
          "name": "base de données"
        },
        {
          "name": "champ"
        },
        {
          "name": "critères"
        }
      ]
    },
    "EDATE": {
      "description": "Cette fonction calcule la date qui correspond au nombre de mois indiqué avant ou après une date spécifiée.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "mois"
        }
      ]
    },
    "EFFECT": {
      "description": "Cette fonction calcule le taux d'intérêt annuel effectif pour un taux d'intérêt annuel nominal donné et le nombre de périodes de composition par an.",
      "parameters": [
        {
          "name": "taux_nominal"
        },
        {
          "name": "npery"
        }
      ]
    },
    "EOMONTH": {
      "description": "Cette fonction calcule la date du dernier jour du mois (fin du mois) qui correspond au nombre de mois indiqué avant ou après la date de début.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "mois"
        }
      ]
    },
    "ERF": {
      "description": "Cette fonction calcule la fonction d'erreur intégrée entre une limite inférieure et une limite supérieure.",
      "parameters": [
        {
          "name": "limite_inférieure"
        },
        {
          "name": "limite_supérieure"
        }
      ]
    },
    "ERFC": {
      "description": "Cette fonction calcule la fonction d'erreur complémentaire intégrée entre une limite inférieure et l'infini.",
      "parameters": [
        {
          "name": "limite inférieure"
        }
      ]
    },
    "ERROR.TYPE": {
      "description": "Cette fonction renvoie un nombre correspondant à l'une des valeurs d'erreur.",
      "parameters": [
        {
          "name": "erreur_val"
        }
      ]
    },
    "EURO": {
      "description": "Cette fonction renvoie l'équivalent d'un euro en fonction du code de devise ISO.",
      "parameters": [
        {
          "name": "code"
        }
      ]
    },
    "EUROCONVERT": {
      "description": "Cette fonction convertit la devise d'un membre de la zone euro (y compris l'euro) vers une autre devise membre de la zone euro (y compris l'euro).",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "source"
        },
        {
          "name": "cible"
        },
        {
          "name": "pleine_précision"
        },
        {
          "name": "précision de la triangulation"
        }
      ]
    },
    "EVEN": {
      "description": "Cette fonction arrondit la valeur spécifiée à l'entier pair le plus proche.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "EXACT": {
      "description": "Cette fonction renvoie vrai si deux chaînes sont identiques ; sinon, faux.",
      "parameters": [
        {
          "name": "texte 1"
        },
        {
          "name": "texte2"
        }
      ]
    },
    "EXP": {
      "description": "Cette fonction renvoie e élevé à la puissance de la valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "EXPONDIST": {
      "description": "Cette fonction renvoie la distribution exponentielle ou la densité de probabilité.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "lambda"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "FACT": {
      "description": "Cette fonction calcule la factorielle du nombre spécifié.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "FACTDOUBLE": {
      "description": "Cette fonction calcule la factorielle double du nombre spécifié.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "FALSE": {
      "description": "Cette fonction renvoie la valeur pour FAUX logique."
    },
    "FDIST": {
      "description": "Cette fonction calcule la distribution de probabilité F, pour voir les degrés de diversité entre deux ensembles de données.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "deg_freedom1"
        },
        {
          "name": "deg_freedom2"
        }
      ]
    },
    "FIND": {
      "description": "Cette fonction recherche une valeur de texte dans une autre et renvoie la position de la valeur de texte dans le texte que vous avez recherché.",
      "parameters": [
        {
          "name": "trouver_texte"
        },
        {
          "name": "dans_le_texte"
        },
        {
          "name": "numéro_de_début",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "FINV": {
      "description": "Cette fonction renvoie l'inverse de la distribution de probabilité F.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_freedom1"
        },
        {
          "name": "deg_freedom2"
        }
      ]
    },
    "FISHER": {
      "description": "Cette fonction renvoie la transformation de Fisher pour une valeur spécifiée.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "FISHERINV": {
      "description": "Cette fonction renvoie l'inverse de la transformation de Fisher pour une valeur spécifiée.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "FIXED": {
      "description": "Cette fonction arrondit un nombre au nombre spécifié de décimales, formate le nombre au format décimal en utilisant un point et des virgules (si spécifié) et renvoie le résultat sous forme de texte.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "décimales",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "pas_de_virgules",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "FLOOR": {
      "description": "Cette fonction arrondit un nombre au multiple inférieur le plus proche d'une valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "importance"
        }
      ]
    },
    "FORECAST": {
      "description": "Cette fonction calcule une valeur future en utilisant des valeurs existantes.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "Yarray"
        },
        {
          "name": "Xarray"
        }
      ]
    },
    "FREQUENCY": {
      "description": "Cette fonction calcule la fréquence à laquelle des valeurs apparaissent dans une plage de valeurs. Cette fonction renvoie un tableau vertical de nombres.",
      "parameters": [
        {
          "name": "tableau_de_données"
        },
        {
          "name": "bins_array"
        }
      ]
    },
    "FTEST": {
      "description": "Cette fonction renvoie le résultat d'un test F, qui renvoie la probabilité unilatérale que les variances de deux tableaux ne soient pas significativement différentes.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        }
      ]
    },
    "FV": {
      "description": "Cette fonction renvoie la valeur future d'un investissement en fonction d'une valeur actuelle, de paiements périodiques et d'un taux d'intérêt spécifié.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "numéro"
        },
        {
          "name": "paiement"
        },
        {
          "name": "pval"
        },
        {
          "name": "taper"
        }
      ]
    },
    "FVSCHEDULE": {
      "description": "Cette fonction renvoie la valeur future d'un capital initial après application d'une série de taux d'intérêt composés. Calculez la valeur future d'un investissement à taux variable ou ajustable.",
      "parameters": [
        {
          "name": "principal"
        },
        {
          "name": "calendrier"
        }
      ]
    },
    "GAMMADIST": {
      "description": "Cette fonction renvoie la distribution gamma.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "GAMMAINV": {
      "description": "Cette fonction renvoie l'inverse de la distribution cumulative gamma.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        }
      ]
    },
    "GAMMALN": {
      "description": "Cette fonction renvoie le logarithme naturel de la fonction Gamma, G(x).",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "GCD": {
      "description": "Cette fonction renvoie le plus grand diviseur commun de deux nombres.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2"
        }
      ]
    },
    "GEOMEAN": {
      "description": "Cette fonction renvoie la moyenne géométrique d'un ensemble de données positives.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "GESTEP": {
      "description": "Cette fonction, supérieure ou égale à step, renvoie une indication indiquant si un nombre est égal à un seuil.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "étape"
        }
      ]
    },
    "GROWTH": {
      "description": "Cette fonction calcule la croissance exponentielle prévue. Cette fonction renvoie les valeurs y pour une série de nouvelles valeurs x spécifiées à l'aide des valeurs x et y existantes.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "nouveaux"
        },
        {
          "name": "constante"
        }
      ]
    },
    "HARMEAN": {
      "description": "Cette fonction renvoie la moyenne harmonique d'un ensemble de données.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "HEX2BIN": {
      "description": "Cette fonction convertit un nombre hexadécimal en nombre binaire.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "HEX2DEC": {
      "description": "Cette fonction convertit un nombre hexadécimal en nombre décimal.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "HEX2OCT": {
      "description": "Cette fonction convertit un nombre hexadécimal en un nombre octal.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "HLOOKUP": {
      "description": "Cette fonction recherche une valeur dans la ligne supérieure, puis renvoie une valeur dans la même colonne à partir d'une ligne spécifiée.",
      "parameters": [
        {
          "name": "valeur_recherchée"
        },
        {
          "name": "tableau_matrice"
        },
        {
          "name": "numéro_index_ligne"
        },
        {
          "name": "plage_recherche",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "VRAI",
              "description": "Correspondance approximative"
            },
            {
              "value": "FAUX",
              "description": "Correspondance exacte"
            }
          ]
        }
      ]
    },
    "HOUR": {
      "description": "Cette fonction renvoie l'heure qui correspond à une heure spécifiée.",
      "parameters": [
        {
          "name": "temps"
        }
      ]
    },
    "HYPGEOMDIST": {
      "description": "Cette fonction renvoie la distribution hypergéométrique.",
      "parameters": [
        {
          "name": "échantillons"
        },
        {
          "name": "nombre_échantillon"
        },
        {
          "name": "population_s"
        },
        {
          "name": "nombre_pop"
        }
      ]
    },
    "IF": {
      "description": "Cette fonction effectue une comparaison et renvoie l'une des deux valeurs fournies en fonction de cette comparaison.",
      "parameters": [
        {
          "name": "test_logique"
        },
        {
          "name": "valeur_si_vrai"
        },
        {
          "name": "valeur_si_faux"
        }
      ]
    },
    "IFERROR": {
      "description": "Cette fonction évalue une formule et renvoie une valeur que vous fournissez en cas d'erreur ou de résultat de la formule.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "valeur_si_erreur"
        }
      ]
    },
    "IMABS": {
      "description": "Cette fonction renvoie la valeur absolue ou le module d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMAGINARY": {
      "description": "Cette fonction renvoie le coefficient imaginaire d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMARGUMENT": {
      "description": "Cette fonction renvoie l'argument theta, qui est un angle exprimé en radians.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMCONJUGATE": {
      "description": "Cette fonction renvoie le conjugué complexe d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMCOS": {
      "description": "Cette fonction renvoie le cosinus d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMDIV": {
      "description": "Cette fonction renvoie le quotient de deux nombres complexes.",
      "parameters": [
        {
          "name": "complexe"
        },
        {
          "name": "denom complexe"
        }
      ]
    },
    "IMEXP": {
      "description": "Cette fonction renvoie l'exponentielle d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMLN": {
      "description": "Cette fonction renvoie le logarithme naturel d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMLOG2": {
      "description": "Cette fonction renvoie le logarithme en base 2 d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMLOG10": {
      "description": "Cette fonction renvoie le logarithme décimal d'un nombre complexe.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMPOWER": {
      "description": "Cette fonction renvoie un nombre complexe élevé à une puissance.",
      "parameters": [
        {
          "name": "complexe"
        },
        {
          "name": "powernum"
        }
      ]
    },
    "IMPRODUCT": {
      "description": "Cette fonction renvoie le produit de 29 nombres complexes maximum au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexnum1"
        },
        {
          "name": "complexnum2",
          "repeatable": "vrai"
        }
      ]
    },
    "IMREAL": {
      "description": "Cette fonction renvoie le coefficient réel d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMSIN": {
      "description": "Cette fonction renvoie le sinus d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMSQRT": {
      "description": "Cette fonction renvoie la racine carrée d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMSUB": {
      "description": "Cette fonction renvoie la différence de deux nombres complexes au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexnum1"
        },
        {
          "name": "complexnum2"
        }
      ]
    },
    "IMSUM": {
      "description": "Cette fonction renvoie la somme de deux ou plusieurs nombres complexes au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexnum1"
        },
        {
          "name": "complexnum2",
          "repeatable": "vrai"
        }
      ]
    },
    "INDEX": {
      "description": "Cette fonction renvoie une valeur ou la référence à une valeur à partir d'un tableau ou d'une plage.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "numéro_de_ligne"
        },
        {
          "name": "numéro_colonne"
        },
        {
          "name": "zone_num"
        }
      ]
    },
    "INDIRECT": {
      "description": "Cette fonction renvoie la référence spécifiée par une chaîne de texte. Les références sont immédiatement évaluées pour afficher leur contenu.",
      "parameters": [
        {
          "name": "ref_texte"
        },
        {
          "name": "a1_style",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "INT": {
      "description": "Cette fonction arrondit un nombre spécifié à l'entier inférieur le plus proche.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "INTERCEPT": {
      "description": "Cette fonction renvoie les coordonnées d'un point auquel une ligne coupe l'axe des y, en utilisant les valeurs x et y existantes.",
      "parameters": [
        {
          "name": "dépendant"
        },
        {
          "name": "indépendant"
        }
      ]
    },
    "INTRATE": {
      "description": "Cette fonction calcule le taux d'intérêt d'un titre entièrement investi.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "investissement"
        },
        {
          "name": "rachat"
        },
        {
          "name": "base"
        }
      ]
    },
    "IPMT": {
      "description": "Cette fonction calcule le paiement des intérêts d'un prêt.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "par"
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
          "name": "taper"
        }
      ]
    },
    "IRR": {
      "description": "Cette fonction renvoie le taux de rendement interne d'une série de flux de trésorerie représentés par les nombres d'un tableau.",
      "parameters": [
        {
          "name": "arrayvals"
        },
        {
          "name": "estimation"
        }
      ]
    },
    "ISBLANK": {
      "description": "Cette fonction teste si une valeur, une expression ou le contenu d'une cellule référencée est vide.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISERR": {
      "description": "Cette fonction, Est-ce une erreur autre que Non disponible, teste si une valeur, une expression ou le contenu d'une cellule référencée comporte une erreur autre que Non disponible (#N/A).",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISERROR": {
      "description": "Cette fonction, Is Error of Any Kind, teste si une valeur, une expression ou le contenu d'une cellule référencée comporte une erreur de quelque nature que ce soit.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISEVEN": {
      "description": "Cette fonction, Is Number Even, teste si une valeur, une expression ou le contenu d'une cellule référencée est pair.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISLOGICAL": {
      "description": "Cette fonction teste si une valeur, une expression ou le contenu d'une cellule référencée est une valeur logique (booléenne).",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISNA": {
      "description": "Cette fonction, N'est pas disponible, teste si une valeur, une expression ou le contenu d'une cellule référencée a la valeur d'erreur non disponible (#N/A).",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISNONTEXT": {
      "description": "Cette fonction teste si une valeur, une expression ou le contenu d'une cellule référencée a un type de données autre que du texte.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISNUMBER": {
      "description": "Cette fonction teste si une valeur, une expression ou le contenu d'une cellule référencée contient des données numériques.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISODD": {
      "description": "Cette fonction, Is Number Odd, teste si une valeur, une expression ou le contenu d'une cellule référencée contient des données numériques.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISPMT": {
      "description": "Cette fonction calcule les intérêts payés pendant une période spécifique d'un investissement.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "par"
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
      "description": "Cette fonction, Is Reference, teste si une valeur, une expression ou le contenu d'une cellule référencée est une référence à une autre cellule.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "ISTEXT": {
      "description": "Cette fonction teste si une valeur, une expression ou le contenu d'une cellule référencée contient des données textuelles.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "KURT": {
      "description": "Cette fonction renvoie la kurtosis d'un ensemble de données.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2"
        },
        {
          "name": "numéro 3"
        },
        {
          "name": "numéro4",
          "repeatable": "vrai"
        }
      ]
    },
    "LARGE": {
      "description": "Cette fonction renvoie la n-ième valeur la plus grande d'un ensemble de données, où n est spécifié.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "n"
        }
      ]
    },
    "LCM": {
      "description": "Cette fonction renvoie le plus petit multiple commun de deux nombres.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2"
        }
      ]
    },
    "LEFT": {
      "description": "Cette fonction renvoie les caractères les plus à gauche spécifiés à partir d'une valeur de texte, et en fonction du nombre de caractères que vous spécifiez.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "num_caractères"
        }
      ]
    },
    "LEN": {
      "description": "Cette fonction renvoie la longueur du nombre de caractères dans une chaîne de texte.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "LINEST": {
      "description": "Cette fonction calcule les statistiques d'une ligne.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "constante"
        },
        {
          "name": "statistiques"
        }
      ]
    },
    "LN": {
      "description": "Cette fonction renvoie le logarithme naturel du nombre spécifié.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "LOG": {
      "description": "Cette fonction renvoie le logarithme de base Y d'un nombre X.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "base"
        }
      ]
    },
    "LOG10": {
      "description": "Cette fonction renvoie le logarithme en base 10 du nombre donné.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "LOGEST": {
      "description": "Cette fonction calcule une courbe exponentielle qui s'adapte aux données et renvoie un tableau de valeurs qui décrit la courbe.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "constante"
        },
        {
          "name": "statistiques"
        }
      ]
    },
    "LOGINV": {
      "description": "Cette fonction renvoie l'inverse de la fonction de distribution cumulative log-normale de x, où LN(x) est normalement distribué avec la moyenne et l'écart type spécifiés.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "LOGNORMDIST": {
      "description": "Cette fonction renvoie la distribution normale logarithmique naturelle cumulative de x, où LN(x) est normalement distribué avec la moyenne et l'écart type spécifiés. Analysez les données qui ont été transformées logarithmiquement avec cette fonction.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "LOOKUP": {
      "description": "Cette fonction recherche une valeur et renvoie une valeur du même emplacement dans une deuxième zone.",
      "parameters": [
        {
          "name": "valeur_recherchée"
        },
        {
          "name": "vecteur_de_recherche"
        },
        {
          "name": "résultat_vecteur"
        }
      ]
    },
    "LOWER": {
      "description": "Cette fonction convertit le texte en lettres minuscules.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "MATCH": {
      "description": "Cette fonction renvoie la position relative d'un élément spécifié dans une plage.",
      "parameters": [
        {
          "name": "valeur_recherchée"
        },
        {
          "name": "tableau de recherche"
        },
        {
          "name": "type_de_correspondance"
        }
      ]
    },
    "XMATCH": {
      "description": "Cette fonction renvoie la position relative d'un élément dans un tableau. Par défaut, une correspondance exacte est requise.",
      "parameters": [
        {
          "name": "valeur_recherchée"
        },
        {
          "name": "tableau de recherche"
        },
        {
          "name": "mode_match",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "0",
              "description": "Correspondance exacte (par défaut)"
            },
            {
              "value": "-1",
              "description": "Correspondance exacte ou élément le plus petit suivant"
            },
            {
              "value": "1",
              "description": "Correspondance exacte ou élément le plus grand suivant"
            },
            {
              "value": "2",
              "description": "Une correspondance générique où *, ? et ~ ont une signification particulière."
            }
          ]
        },
        {
          "name": "mode_recherche",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "1",
              "description": "Rechercher du premier au dernier (par défaut)"
            },
            {
              "value": "-1",
              "description": "Recherche du dernier au premier (recherche inversée)"
            },
            {
              "value": "2",
              "description": "Effectuez une recherche binaire qui repose sur le tri du tableau de recherche par ordre croissant. S'il n'est pas trié, des résultats non valides seront renvoyés."
            },
            {
              "value": "-2",
              "description": "Effectuez une recherche binaire qui repose sur le tri du tableau de recherche par ordre décroissant. S'il n'est pas trié, des résultats non valides seront renvoyés."
            }
          ]
        }
      ]
    },
    "XLOOKUP": {
      "description": "Cette fonction recherche une correspondance dans une plage ou un tableau et renvoie l'élément correspondant à partir d'une deuxième plage ou d'un deuxième tableau. Par défaut, une correspondance exacte est utilisée.",
      "parameters": [
        {
          "name": "valeur_recherchée"
        },
        {
          "name": "tableau de recherche"
        },
        {
          "name": "retour_tableau"
        },
        {
          "name": "si_non_trouvé",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "mode_match",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "0",
              "description": "Correspondance exacte (par défaut)"
            },
            {
              "value": "-1",
              "description": "Correspondance exacte ou élément le plus petit suivant"
            },
            {
              "value": "1",
              "description": "Correspondance exacte ou élément le plus grand suivant"
            },
            {
              "value": "2",
              "description": "Une correspondance générique où *, ? et ~ ont une signification particulière."
            }
          ]
        },
        {
          "name": "mode_recherche",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "1",
              "description": "Rechercher du premier au dernier (par défaut)"
            },
            {
              "value": "-1",
              "description": "Recherche du dernier au premier (recherche inversée)"
            },
            {
              "value": "2",
              "description": "Effectuez une recherche binaire qui repose sur le tri du tableau de recherche par ordre croissant. S'il n'est pas trié, des résultats non valides seront renvoyés."
            },
            {
              "value": "-2",
              "description": "Effectuez une recherche binaire qui repose sur le tri du tableau de recherche par ordre décroissant. S'il n'est pas trié, des résultats non valides seront renvoyés."
            }
          ]
        }
      ]
    },
    "MAX": {
      "description": "Cette fonction renvoie la valeur maximale, la plus grande valeur, de toutes les valeurs des arguments.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "MAXA": {
      "description": "Cette fonction renvoie la plus grande valeur d'une liste d'arguments, y compris du texte et des valeurs logiques.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "MDETERM": {
      "description": "Cette fonction renvoie le déterminant matriciel d'un tableau.",
      "parameters": [
        {
          "name": "tableau"
        }
      ]
    },
    "MDURATION": {
      "description": "Cette fonction calcule la durée Macaulay modifiée d'un titre avec une valeur nominale supposée de 100 $.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "coupon"
        },
        {
          "name": "rendement"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "MEDIAN": {
      "description": "Cette fonction renvoie la médiane, le nombre au milieu de l'ensemble de nombres fourni ; c'est-à-dire que la moitié des nombres ont des valeurs supérieures à la médiane et l'autre moitié ont des valeurs inférieures à la médiane.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "MID": {
      "description": "Cette fonction renvoie le nombre de caractères demandé à partir d'une chaîne de texte commençant à la position que vous spécifiez et en fonction du nombre de caractères que vous spécifiez.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "numéro_de_début"
        },
        {
          "name": "num_caractères"
        }
      ]
    },
    "MIN": {
      "description": "Cette fonction renvoie la valeur minimale, la plus petite valeur, de toutes les valeurs des arguments.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "MINA": {
      "description": "Cette fonction renvoie la valeur minimale dans une liste d'arguments, y compris du texte et des valeurs logiques.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "MINUTE": {
      "description": "Cette fonction renvoie la minute correspondant à une heure spécifiée.",
      "parameters": [
        {
          "name": "temps"
        }
      ]
    },
    "MINVERSE": {
      "description": "Cette fonction renvoie la matrice inverse de la matrice stockée dans un tableau.",
      "parameters": [
        {
          "name": "tableau"
        }
      ]
    },
    "MIRR": {
      "description": "Cette fonction renvoie le taux de rendement interne modifié pour une série de flux de trésorerie périodiques.",
      "parameters": [
        {
          "name": "valeurs"
        },
        {
          "name": "taux_financier"
        },
        {
          "name": "taux_de_réinvestissement"
        }
      ]
    },
    "MMULT": {
      "description": "Cette fonction renvoie le produit matriciel de deux tableaux.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        }
      ]
    },
    "MOD": {
      "description": "Cette fonction renvoie le reste d'une opération de division.",
      "parameters": [
        {
          "name": "dividende"
        },
        {
          "name": "diviseur"
        }
      ]
    },
    "MODE": {
      "description": "Cette fonction renvoie la valeur la plus fréquente dans un ensemble de données.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "MONTH": {
      "description": "Cette fonction renvoie le mois correspondant à la valeur de date spécifiée.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "MROUND": {
      "description": "Cette fonction renvoie un nombre arrondi au multiple souhaité.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "multiple"
        }
      ]
    },
    "MULTINOMIAL": {
      "description": "Cette fonction calcule le rapport entre la factorielle d'une somme de valeurs et le produit de factorielles.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "MUNIT": {
      "description": "La fonction renvoie la matrice unitaire pour la dimension spécifiée.",
      "parameters": [
        {
          "name": "dimension"
        }
      ]
    },
    "N": {
      "description": "Cette fonction renvoie une valeur convertie en nombre.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "NA": {
      "description": "Cette fonction renvoie la valeur d'erreur #N/A qui signifie non disponible."
    },
    "SHEET": {
      "description": "Renvoie le numéro de feuille de référence.",
      "parameters": [
        {
          "name": "valeur",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SHEETS": {
      "description": "Renvoie le nombre de feuilles dans une référence.",
      "parameters": [
        {
          "name": "référence",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "NEGBINOMDIST": {
      "description": "Cette fonction renvoie la distribution binomiale négative.",
      "parameters": [
        {
          "name": "numéro_f"
        },
        {
          "name": "Nombres"
        },
        {
          "name": "probabilités"
        }
      ]
    },
    "NETWORKDAYS": {
      "description": "Cette fonction renvoie le nombre total de jours ouvrables complets entre les dates de début et de fin.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "date_de_fin"
        },
        {
          "name": "vacances",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "NOMINAL": {
      "description": "Cette fonction renvoie le taux d'intérêt annuel nominal pour un taux effectif donné et un nombre de périodes de composition par an.",
      "parameters": [
        {
          "name": "taux d'effet"
        },
        {
          "name": "npery"
        }
      ]
    },
    "NORMDIST": {
      "description": "Cette fonction renvoie la distribution cumulative normale pour la moyenne et l'écart type spécifiés.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "NORMINV": {
      "description": "Cette fonction renvoie l'inverse de la distribution cumulative normale pour la moyenne et l'écart type donnés.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORMSDIST": {
      "description": "Cette fonction renvoie la fonction de distribution cumulative normale standard.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "NORMSINV": {
      "description": "Cette fonction renvoie l'inverse de la distribution cumulative normale standard. La distribution a une moyenne de zéro et un écart type de un.",
      "parameters": [
        {
          "name": "probabilité"
        }
      ]
    },
    "NOT": {
      "description": "Cette fonction inverse la valeur logique de son argument.",
      "parameters": [
        {
          "name": "logique"
        }
      ]
    },
    "NOW": {
      "description": "Cette fonction renvoie la date et l'heure actuelles."
    },
    "NPER": {
      "description": "Cette fonction renvoie le nombre de périodes d'un investissement en fonction d'une valeur actuelle, d'une valeur future, de paiements périodiques et d'un taux d'intérêt spécifié.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "paiement"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        },
        {
          "name": "taper"
        }
      ]
    },
    "NPV": {
      "description": "Cette fonction calcule la valeur actuelle nette d'un investissement en utilisant un taux d'actualisation et une série de paiements et de revenus futurs.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "OBJECT": {
      "description": "Cette fonction convertit la séquence propriété/expression en objet.",
      "parameters": [
        {
          "name": "propriété1",
          "repeatable": "vrai"
        },
        {
          "name": "expression1",
          "repeatable": "vrai"
        }
      ]
    },
    "OCT2BIN": {
      "description": "Cette fonction convertit un nombre octal en nombre binaire.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "OCT2DEC": {
      "description": "Cette fonction convertit un nombre octal en nombre décimal.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "OCT2HEX": {
      "description": "Cette fonction convertit un nombre octal en un nombre hexadécimal.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "lieux"
        }
      ]
    },
    "ODD": {
      "description": "Cette fonction arrondit la valeur spécifiée à l'entier impair le plus proche.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ODDFPRICE": {
      "description": "Cette fonction calcule le prix par valeur nominale de 100 $ d'un titre avec une première période impaire.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "problème"
        },
        {
          "name": "premier_coupon"
        },
        {
          "name": "taux"
        },
        {
          "name": "rendement"
        },
        {
          "name": "rachat"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDFYIELD": {
      "description": "Cette fonction calcule le rendement d'un titre avec une première période impaire.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "problème"
        },
        {
          "name": "premier_coupon"
        },
        {
          "name": "taux"
        },
        {
          "name": "prix"
        },
        {
          "name": "rachat"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLPRICE": {
      "description": "Cette fonction calcule le prix par valeur nominale de 100 $ d'un titre avec une dernière période de coupon impaire.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "dernier intérêt"
        },
        {
          "name": "taux"
        },
        {
          "name": "rendement"
        },
        {
          "name": "rachat"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLYIELD": {
      "description": "Cette fonction calcule le rendement d'un titre avec une dernière période impaire.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "dernier intérêt"
        },
        {
          "name": "taux"
        },
        {
          "name": "prix"
        },
        {
          "name": "rachat"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "OFFSET": {
      "description": "Cette fonction renvoie une référence à une plage. La plage est un nombre spécifié de lignes et de colonnes d'une cellule ou d'une plage de cellules. La fonction renvoie une cellule unique ou une plage de cellules.",
      "parameters": [
        {
          "name": "référence"
        },
        {
          "name": "lignes"
        },
        {
          "name": "cols"
        },
        {
          "name": "hauteur",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "largeur",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "OR": {
      "description": "Cette fonction calcule un OU logique. Elle renvoie VRAI si l'un de ses arguments est vrai ; sinon, elle renvoie FAUX si tous les arguments sont faux.",
      "parameters": [
        {
          "name": "logique1"
        },
        {
          "name": "logique2",
          "repeatable": "vrai"
        }
      ]
    },
    "PEARSON": {
      "description": "Cette fonction renvoie le coefficient de corrélation du produit-moment de Pearson, un indice sans dimension compris entre -1,0 et 1,0 inclus indiquant la relation linéaire de deux ensembles de données.",
      "parameters": [
        {
          "name": "tableau_ind"
        },
        {
          "name": "tableau_dep"
        }
      ]
    },
    "PERCENTILE": {
      "description": "Cette fonction renvoie le n-ième percentile des valeurs d'une plage.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "n"
        }
      ]
    },
    "PERCENTRANK": {
      "description": "Cette fonction renvoie le rang d'une valeur dans un ensemble de données sous forme de pourcentage de l'ensemble de données.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "x"
        },
        {
          "name": "importance"
        }
      ]
    },
    "PERMUT": {
      "description": "Cette fonction renvoie le nombre de permutations possibles pour un nombre spécifié d'éléments.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "numéro_choisi"
        }
      ]
    },
    "PI": {
      "description": "Cette fonction renvoie PI sous la forme 3,1415926536."
    },
    "PMT": {
      "description": "Cette fonction renvoie le montant du paiement d'un prêt en fonction de la valeur actuelle, du taux d'intérêt spécifié et du nombre de conditions.",
      "parameters": [
        {
          "name": "taux"
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
          "name": "taper"
        }
      ]
    },
    "POISSON": {
      "description": "Cette fonction renvoie la distribution de Poisson.",
      "parameters": [
        {
          "name": "événements"
        },
        {
          "name": "signifier"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "POWER": {
      "description": "Cette fonction élève le nombre spécifié à la puissance spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "pouvoir"
        }
      ]
    },
    "PPMT": {
      "description": "Cette fonction renvoie le montant du paiement du principal d'un prêt étant donné la valeur actuelle, le taux d'intérêt spécifié et le nombre de conditions.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "par"
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
          "name": "taper"
        }
      ]
    },
    "PRICE": {
      "description": "Cette fonction calcule le prix par valeur nominale de 100 $ d'un titre à intérêt périodique",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "taux"
        },
        {
          "name": "rendement"
        },
        {
          "name": "rachat"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEDISC": {
      "description": "Cette fonction renvoie le prix par valeur nominale de 100 $ d'un titre à prix réduit.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "rabais"
        },
        {
          "name": "rachat"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEMAT": {
      "description": "Cette fonction renvoie le prix à l'échéance pour 100 $ de valeur nominale d'un titre qui rapporte des intérêts.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "problème"
        },
        {
          "name": "taux"
        },
        {
          "name": "rendement"
        },
        {
          "name": "base"
        }
      ]
    },
    "PROB": {
      "description": "Cette fonction renvoie la probabilité que les valeurs d'une plage soient comprises entre deux limites.",
      "parameters": [
        {
          "name": "plage_x"
        },
        {
          "name": "plage_probable"
        },
        {
          "name": "limite_inférieure"
        },
        {
          "name": "limite_supérieure"
        }
      ]
    },
    "PRODUCT": {
      "description": "Cette fonction multiplie tous les arguments et renvoie le produit.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "PROPER": {
      "description": "Cette fonction met en majuscule la première lettre de chaque mot d'une chaîne de texte.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "PROPERTY": {
      "description": "Cette fonction renvoie la valeur du chemin de propriété dans l'objet.",
      "parameters": [
        {
          "name": "expression_de_données"
        },
        {
          "name": "chemin_de_propriété"
        }
      ]
    },
    "PV": {
      "description": "Cette fonction renvoie la valeur actuelle d'un investissement en fonction du taux d'intérêt, du nombre et du montant des paiements périodiques et de la valeur future. La valeur actuelle est le montant total que vaut aujourd'hui une série de paiements futurs.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "numéro"
        },
        {
          "name": "paiement"
        },
        {
          "name": "fval"
        },
        {
          "name": "taper"
        }
      ]
    },
    "QUARTILE": {
      "description": "Cette fonction renvoie à quel quartile (quel quart ou 25 pour cent) d'un ensemble de données appartient une valeur.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "litre"
        }
      ]
    },
    "QUOTIENT": {
      "description": "Cette fonction renvoie la partie entière d'une division. Utilisez-la pour ignorer le reste d'une division.",
      "parameters": [
        {
          "name": "numérateur"
        },
        {
          "name": "dénominateur"
        }
      ]
    },
    "RADIANS": {
      "description": "Cette fonction convertit le nombre spécifié de degrés en radians.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "RAND": {
      "description": "Cette fonction renvoie un nombre aléatoire uniformément réparti entre 0 et 1."
    },
    "RANDBETWEEN": {
      "description": "Cette fonction renvoie un nombre aléatoire parmi les nombres que vous spécifiez.",
      "parameters": [
        {
          "name": "bas"
        },
        {
          "name": "haut"
        }
      ]
    },
    "RANGEBLOCKSPARKLINE": {
      "description": "Cette fonction renvoie un modèle de plage.",
      "parameters": [
        {
          "name": "plage_de_modèles"
        },
        {
          "name": "expression_de_données"
        }
      ]
    },
    "RANK": {
      "description": "Cette fonction renvoie le rang d'un nombre dans un ensemble de nombres. Si vous deviez trier l'ensemble, le rang du nombre serait sa position dans la liste.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "réf"
        },
        {
          "name": "commande",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "RATE": {
      "description": "Cette fonction renvoie le taux d'intérêt par période d'une rente.",
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
          "name": "taper"
        },
        {
          "name": "deviner"
        }
      ]
    },
    "RECEIVED": {
      "description": "Cette fonction renvoie le montant reçu à l'échéance pour un titre entièrement investi.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "investissement"
        },
        {
          "name": "rabais"
        },
        {
          "name": "base"
        }
      ]
    },
    "REPLACE": {
      "description": "Cette fonction remplace une partie d'une chaîne de texte par une chaîne de texte différente, en fonction du nombre de caractères que vous spécifiez.",
      "parameters": [
        {
          "name": "ancien_texte"
        },
        {
          "name": "numéro_de_début"
        },
        {
          "name": "num_caractères"
        },
        {
          "name": "nouveau_texte"
        }
      ]
    },
    "REPT": {
      "description": "Cette fonction répète le texte un nombre spécifié de fois.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "nombre_de_fois"
        }
      ]
    },
    "RIGHT": {
      "description": "Cette fonction renvoie les caractères les plus à droite spécifiés à partir d'une valeur de texte, et en fonction du nombre de caractères que vous spécifiez.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "num_caractères"
        }
      ]
    },
    "ROMAN": {
      "description": "Cette fonction convertit un chiffre arabe en un équivalent textuel en chiffre romain.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "formulaire"
        }
      ]
    },
    "ROUND": {
      "description": "Cette fonction arrondit la valeur spécifiée au nombre le plus proche, en utilisant le nombre spécifié de décimales.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "num_chiffres"
        }
      ]
    },
    "ROUNDDOWN": {
      "description": "Cette fonction arrondit le nombre spécifié au nombre inférieur le plus proche, en utilisant le nombre spécifié de décimales.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "num_chiffres"
        }
      ]
    },
    "ROUNDUP": {
      "description": "Cette fonction arrondit le nombre spécifié au nombre le plus proche, en utilisant le nombre spécifié de décimales.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "num_chiffres"
        }
      ]
    },
    "ROW": {
      "description": "Cette fonction renvoie le numéro d'une ligne à partir d'une référence.",
      "parameters": [
        {
          "name": "référence"
        }
      ]
    },
    "ROWS": {
      "description": "Cette fonction renvoie le nombre de lignes dans un tableau.",
      "parameters": [
        {
          "name": "tableau"
        }
      ]
    },
    "RSQ": {
      "description": "Cette fonction renvoie le carré du coefficient de corrélation du produit-moment de Pearson (R-carré) à travers des points de données dans des y connus et des x connus.",
      "parameters": [
        {
          "name": "tableau_dep"
        },
        {
          "name": "tableau_ind"
        }
      ]
    },
    "SEARCH": {
      "description": "Cette fonction recherche une chaîne de texte dans une autre chaîne de texte et renvoie l'index de la position de départ du texte trouvé.",
      "parameters": [
        {
          "name": "trouver_texte"
        },
        {
          "name": "dans_le_texte"
        },
        {
          "name": "numéro_de_début",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SECOND": {
      "description": "Cette fonction renvoie la valeur des secondes (0 à 59) pour une durée spécifiée.",
      "parameters": [
        {
          "name": "temps"
        }
      ]
    },
    "SERIESSUM": {
      "description": "Cette fonction renvoie la somme d'une série entière.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "n"
        },
        {
          "name": "m"
        },
        {
          "name": "coefficients"
        }
      ]
    },
    "SIGN": {
      "description": "Cette fonction renvoie le signe d'un nombre ou d'une expression.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "SIN": {
      "description": "Cette fonction renvoie le sinus de l'angle spécifié.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "SINH": {
      "description": "Cette fonction renvoie le sinus hyperbolique du nombre spécifié.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "SKEW": {
      "description": "Cette fonction renvoie l'asymétrie d'une distribution.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "SLN": {
      "description": "Cette fonction renvoie l'amortissement linéaire d'un actif pour une période.",
      "parameters": [
        {
          "name": "coût"
        },
        {
          "name": "sauver"
        },
        {
          "name": "vie"
        }
      ]
    },
    "SLOPE": {
      "description": "Cette fonction calcule la pente d'une régression linéaire.",
      "parameters": [
        {
          "name": "tableau_dep"
        },
        {
          "name": "tableau_ind"
        }
      ]
    },
    "SMALL": {
      "description": "Cette fonction renvoie la n-ième plus petite valeur d'un ensemble de données, où n est spécifié.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "n"
        }
      ]
    },
    "SQRT": {
      "description": "Cette fonction renvoie la racine carrée positive du nombre spécifié.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "SQRTPI": {
      "description": "Cette fonction renvoie la racine carrée positive d'un multiple de pi (p).",
      "parameters": [
        {
          "name": "multiple"
        }
      ]
    },
    "STANDARDIZE": {
      "description": "Cette fonction renvoie une valeur normalisée à partir d'une distribution caractérisée par une moyenne et un écart type.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "STDEVA": {
      "description": "Cette fonction renvoie l'écart type pour un ensemble de nombres, de texte ou de valeurs logiques.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "STDEVP": {
      "description": "Cette fonction renvoie l'écart type pour une population entière spécifiée (de valeurs numériques).",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "STDEVPA": {
      "description": "Cette fonction renvoie l'écart type pour l'ensemble d'une population spécifiée, y compris les valeurs textuelles ou logiques ainsi que les valeurs numériques.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "STEYX": {
      "description": "Cette fonction renvoie l'erreur standard de la valeur y prédite pour chaque x. L'erreur standard est une mesure de la quantité d'erreur dans la prédiction de y pour une valeur de x.",
      "parameters": [
        {
          "name": "tableau_dep"
        },
        {
          "name": "tableau_ind"
        }
      ]
    },
    "SUBSTITUTE": {
      "description": "Cette fonction remplace une nouvelle chaîne par des caractères spécifiés dans une chaîne existante.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "ancien_texte"
        },
        {
          "name": "nouveau_texte"
        },
        {
          "name": "numéro_instance",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SUBTOTAL": {
      "description": "Cette fonction calcule un sous-total d'une liste de nombres à l'aide d'une fonction intégrée spécifiée.",
      "parameters": [
        {
          "name": "numéro_de_fonction"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": "vrai"
        }
      ]
    },
    "SUM": {
      "description": "Cette fonction renvoie la somme des cellules ou la plage de cellules.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "SUMIF": {
      "description": "Cette fonction ajoute les cellules en utilisant un critère donné.",
      "parameters": [
        {
          "name": "gamme"
        },
        {
          "name": "critères"
        },
        {
          "name": "sum_range"
        }
      ]
    },
    "SUMIFS": {
      "description": "Cette fonction ajoute les cellules d'une plage en utilisant plusieurs critères.",
      "parameters": [
        {
          "name": "sum_range"
        },
        {
          "name": "critère_plage1"
        },
        {
          "name": "critère1"
        },
        {
          "name": "critères_plage2",
          "repeatable": "vrai"
        },
        {
          "name": "critère2",
          "repeatable": "vrai"
        }
      ]
    },
    "SUMPRODUCT": {
      "description": "Cette fonction renvoie la somme des produits des cellules. Elle multiplie les composants correspondants dans les tableaux donnés et renvoie la somme de ces produits.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2",
          "repeatable": "vrai"
        }
      ]
    },
    "SUMSQ": {
      "description": "Cette fonction renvoie la somme des carrés des arguments.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "SUMX2MY2": {
      "description": "Cette fonction renvoie la somme de la différence des carrés des valeurs correspondantes dans deux tableaux.",
      "parameters": [
        {
          "name": "tableau_x"
        },
        {
          "name": "tableau_y"
        }
      ]
    },
    "SUMX2PY2": {
      "description": "Cette fonction renvoie la somme de la somme des carrés des valeurs correspondantes dans deux tableaux.",
      "parameters": [
        {
          "name": "tableau_x"
        },
        {
          "name": "tableau_y"
        }
      ]
    },
    "SUMXMY2": {
      "description": "Cette fonction renvoie la somme du carré des différences de valeurs correspondantes dans deux tableaux.",
      "parameters": [
        {
          "name": "tableau_x"
        },
        {
          "name": "tableau_y"
        }
      ]
    },
    "SYD": {
      "description": "Cette fonction renvoie la somme des chiffres des années d'amortissement d'un actif pour une période spécifiée.",
      "parameters": [
        {
          "name": "coût"
        },
        {
          "name": "sauver"
        },
        {
          "name": "vie"
        },
        {
          "name": "période"
        }
      ]
    },
    "T": {
      "description": "Cette fonction renvoie le texte dans une cellule spécifiée.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "TAN": {
      "description": "Cette fonction renvoie la tangente de l'angle spécifié.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "TANH": {
      "description": "Cette fonction renvoie la tangente hyperbolique du nombre spécifié.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "TBILLEQ": {
      "description": "Cette fonction renvoie le rendement équivalent d'un bon du Trésor (ou T-bill)",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "rabais"
        }
      ]
    },
    "TBILLPRICE": {
      "description": "Cette fonction renvoie le prix par valeur nominale de 100 $ d'un bon du Trésor (ou T-bill).",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "rabais"
        }
      ]
    },
    "TBILLYIELD": {
      "description": "Cette fonction renvoie le rendement d'un bon du Trésor (ou T-bill).",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "prix par"
        }
      ]
    },
    "TDIST": {
      "description": "Cette fonction renvoie la probabilité de la distribution t.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_liberté"
        },
        {
          "name": "queues"
        }
      ]
    },
    "TEXT": {
      "description": "Cette fonction formate un nombre et le convertit en texte.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "format_texte"
        }
      ]
    },
    "TIME": {
      "description": "Cette fonction renvoie l'objet TimeSpan pour une durée spécifiée.",
      "parameters": [
        {
          "name": "heure"
        },
        {
          "name": "minute"
        },
        {
          "name": "deuxième"
        }
      ]
    },
    "TIMEVALUE": {
      "description": "Cette fonction renvoie l'objet TimeSpan de l'heure représentée par une chaîne de texte.",
      "parameters": [
        {
          "name": "heure_texte"
        }
      ]
    },
    "TINV": {
      "description": "Cette fonction renvoie la valeur t de la distribution t de Student en fonction de la probabilité et des degrés de liberté.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "TODAY": {
      "description": "Cette fonction renvoie la date et l'heure de la date actuelle."
    },
    "TRANSPOSE": {
      "description": "Cette fonction renvoie une plage verticale de cellules sous forme de plage horizontale ou une plage horizontale de cellules sous forme de plage verticale.",
      "parameters": [
        {
          "name": "tableau"
        }
      ]
    },
    "TREND": {
      "description": "Cette fonction renvoie des valeurs selon une tendance linéaire. Cette fonction ajuste une ligne droite aux valeurs x et y connues du tableau. Trend renvoie les valeurs y le long de cette ligne pour le tableau de nouvelles valeurs x spécifiées.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "nouveaux"
        },
        {
          "name": "constante"
        }
      ]
    },
    "TRIM": {
      "description": "Cette fonction supprime les espaces supplémentaires d'une chaîne et laisse des espaces simples entre les mots.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "TRIMMEAN": {
      "description": "Cette fonction renvoie la moyenne d'un sous-ensemble de données excluant les données supérieures et inférieures.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "pour cent"
        }
      ]
    },
    "TRUE": {
      "description": "Cette fonction renvoie la valeur logique VRAI."
    },
    "TRUNC": {
      "description": "Cette fonction supprime la partie fractionnaire spécifiée du nombre spécifié.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "num_chiffres"
        }
      ]
    },
    "TTEST": {
      "description": "Cette fonction renvoie la probabilité associée à un test t.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        },
        {
          "name": "queues"
        },
        {
          "name": "taper"
        }
      ]
    },
    "TYPE": {
      "description": "Cette fonction renvoie le type de valeur.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "UPPER": {
      "description": "Cette fonction convertit le texte en lettres majuscules.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "VALUE": {
      "description": "Cette fonction convertit une chaîne de texte qui est un nombre en une valeur numérique.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "VAR": {
      "description": "Cette fonction renvoie la variance basée sur un échantillon d'une population, qui utilise uniquement des valeurs numériques.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "VARA": {
      "description": "Cette fonction renvoie la variance basée sur un échantillon d'une population, qui comprend des valeurs numériques, logiques ou textuelles.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "VARP": {
      "description": "Cette fonction renvoie la variance basée sur l'ensemble de la population, qui utilise uniquement des valeurs numériques.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "VARPA": {
      "description": "Cette fonction renvoie la variance basée sur l'ensemble de la population, qui inclut des valeurs numériques, logiques ou textuelles.",
      "parameters": [
        {
          "name": "valeur1"
        },
        {
          "name": "valeur2",
          "repeatable": "vrai"
        }
      ]
    },
    "VDB": {
      "description": "Cette fonction renvoie l'amortissement d'un actif pour toute période que vous spécifiez à l'aide de la méthode du solde dégressif variable.",
      "parameters": [
        {
          "name": "coût"
        },
        {
          "name": "sauver"
        },
        {
          "name": "vie"
        },
        {
          "name": "début_période"
        },
        {
          "name": "fin_période"
        },
        {
          "name": "facteur"
        },
        {
          "name": "pas de commutateur"
        }
      ]
    },
    "VLOOKUP": {
      "description": "Cette fonction recherche une valeur dans la colonne la plus à gauche et renvoie une valeur dans la même ligne à partir d'une colonne que vous spécifiez.",
      "parameters": [
        {
          "name": "valeur_recherchée"
        },
        {
          "name": "tableau_matrice"
        },
        {
          "name": "numéro_index_col"
        },
        {
          "name": "plage_recherche",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "VRAI",
              "description": "Correspondance approximative"
            },
            {
              "value": "FAUX",
              "description": "Correspondance exacte"
            }
          ]
        }
      ]
    },
    "WEEKDAY": {
      "description": "Cette fonction renvoie le numéro correspondant au jour de la semaine pour une date spécifiée.",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "taper"
        }
      ]
    },
    "WEEKNUM": {
      "description": "Cette fonction renvoie un nombre qui indique numériquement la semaine de l'année.",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "type de semaine"
        }
      ]
    },
    "DATEPART": {
      "description": "Cette fonction formate une date et la convertit en texte.",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "format_texte"
        },
        {
          "name": "type de semaine",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "WEIBULL": {
      "description": "Cette fonction renvoie la distribution de Weibull à deux paramètres, souvent utilisée dans l'analyse de fiabilité.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "WORKDAY": {
      "description": "Cette fonction renvoie le nombre de jours ouvrables avant ou après la date de début.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "jours"
        },
        {
          "name": "vacances",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "XIRR": {
      "description": "Cette fonction calcule le taux de rendement interne d'un calendrier de flux de trésorerie qui peut ne pas être périodique.",
      "parameters": [
        {
          "name": "valeurs"
        },
        {
          "name": "dates"
        },
        {
          "name": "deviner"
        }
      ]
    },
    "XNPV": {
      "description": "Cette fonction calcule la valeur actuelle nette d'un calendrier de flux de trésorerie qui peut ne pas être périodique.",
      "parameters": [
        {
          "name": "taux"
        },
        {
          "name": "valeurs"
        },
        {
          "name": "dates"
        }
      ]
    },
    "YEAR": {
      "description": "Cette fonction renvoie l'année sous forme d'entier pour une date spécifiée.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "YEARFRAC": {
      "description": "Cette fonction renvoie la fraction de l'année représentée par le nombre de jours entiers entre les dates de début et de fin.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "date_de_fin"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELD": {
      "description": "Cette fonction calcule le rendement d'un titre qui verse des intérêts périodiques.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "taux"
        },
        {
          "name": "prix"
        },
        {
          "name": "rachat"
        },
        {
          "name": "fréquence"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDDISC": {
      "description": "Cette fonction calcule le rendement annuel d'un titre actualisé.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "prix"
        },
        {
          "name": "rachat"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDMAT": {
      "description": "Cette fonction calcule le rendement annuel d'un titre qui verse des intérêts à l'échéance.",
      "parameters": [
        {
          "name": "règlement"
        },
        {
          "name": "maturité"
        },
        {
          "name": "problème"
        },
        {
          "name": "taux"
        },
        {
          "name": "prix"
        },
        {
          "name": "base"
        }
      ]
    },
    "ZTEST": {
      "description": "Cette fonction renvoie la valeur de signification d'un test z. Le test z génère un score standard pour x par rapport à l'ensemble de données et renvoie la probabilité bilatérale pour la distribution normale.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "x"
        },
        {
          "name": "sigma",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "HBARSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline Hbar",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "Schéma de couleurs"
        },
        {
          "name": "axeVisible"
        },
        {
          "name": "hauteur de la barre"
        }
      ]
    },
    "VBARSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un sparkline Vbar",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "Schéma de couleurs"
        },
        {
          "name": "axeVisible"
        },
        {
          "name": "largeur de la barre"
        }
      ]
    },
    "VARISPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter une courbe de variance",
      "parameters": [
        {
          "name": "variance"
        },
        {
          "name": "référence"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "marque"
        },
        {
          "name": "unité de tique"
        },
        {
          "name": "légende"
        },
        {
          "name": "colorPositive"
        },
        {
          "name": "couleurNégative"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "LOLLIPOPVARISPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter une courbe de variance absolue ou relative de type \"sparkline",
      "parameters": [
        {
          "name": "ValeurPlanifiée"
        },
        {
          "name": "valeur réelle"
        },
        {
          "name": "indice"
        },
        {
          "name": "absolu"
        },
        {
          "name": "référence"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "unité de tique"
        },
        {
          "name": "légende"
        },
        {
          "name": "colorPositive"
        },
        {
          "name": "couleurNégative"
        },
        {
          "name": "lollipopHeaderColor"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "PIESPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique à secteurs sparkline",
      "parameters": [
        {
          "name": "plage|pourcentage"
        },
        {
          "name": "couleur",
          "repeatable": "vrai"
        }
      ]
    },
    "AREASPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter une zone sparkline",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "ligne1"
        },
        {
          "name": "ligne2"
        },
        {
          "name": "colorPositive"
        },
        {
          "name": "couleurNégative"
        }
      ]
    },
    "SCATTERSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline en nuage de points",
      "parameters": [
        {
          "name": "points1"
        },
        {
          "name": "points2"
        },
        {
          "name": "friponne"
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
          "name": "hLigne"
        },
        {
          "name": "vLigne"
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
          "name": "balises"
        },
        {
          "name": "dessiner un symbole"
        },
        {
          "name": "dessiner des lignes"
        },
        {
          "name": "couleur1"
        },
        {
          "name": "couleur2"
        },
        {
          "name": "tiret"
        }
      ]
    },
    "LINESPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter une ligne sparkline",
      "parameters": [
        {
          "name": "données"
        },
        {
          "name": "Orientation des données"
        },
        {
          "name": "dateAxisData"
        },
        {
          "name": "DateAxisOrientation"
        },
        {
          "name": "paramètre"
        }
      ]
    },
    "COLUMNSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline de colonne",
      "parameters": [
        {
          "name": "données"
        },
        {
          "name": "Orientation des données"
        },
        {
          "name": "dateAxisData"
        },
        {
          "name": "DateAxisOrientation"
        },
        {
          "name": "paramètre"
        }
      ]
    },
    "WINLOSSSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline de gains/pertes",
      "parameters": [
        {
          "name": "données"
        },
        {
          "name": "Orientation des données"
        },
        {
          "name": "dateAxisData"
        },
        {
          "name": "DateAxisOrientation"
        },
        {
          "name": "paramètre"
        }
      ]
    },
    "BULLETSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline à puces",
      "parameters": [
        {
          "name": "mesure"
        },
        {
          "name": "cible"
        },
        {
          "name": "maxi"
        },
        {
          "name": "bien"
        },
        {
          "name": "mauvais"
        },
        {
          "name": "prévision"
        },
        {
          "name": "unité de tique"
        },
        {
          "name": "Schéma de couleurs"
        },
        {
          "name": "verticale"
        },
        {
          "name": "mesurer la couleur"
        },
        {
          "name": "couleur cible"
        },
        {
          "name": "maxiColor"
        },
        {
          "name": "bonne couleur"
        },
        {
          "name": "mauvaise couleur"
        },
        {
          "name": "forecastColor"
        },
        {
          "name": "autoriserMeasureOverMaxi"
        },
        {
          "name": "barSize"
        }
      ]
    },
    "SPREADSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter une sparkline étalée",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "Montrer la moyenne"
        },
        {
          "name": "échelleDémarrage"
        },
        {
          "name": "Fin d'échelle"
        },
        {
          "name": "style"
        },
        {
          "name": "Schéma de couleurs"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "STACKEDSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline empilé",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "gamme de couleurs"
        },
        {
          "name": "ÉtiquetteRange"
        },
        {
          "name": "maximum"
        },
        {
          "name": "cibleRouge"
        },
        {
          "name": "cibleVerte"
        },
        {
          "name": "cibleBleu"
        },
        {
          "name": "TragetJaune"
        },
        {
          "name": "couleur"
        },
        {
          "name": "position de surbrillance"
        },
        {
          "name": "verticale"
        },
        {
          "name": "Orientation du texte"
        },
        {
          "name": "taille du texte"
        }
      ]
    },
    "BOXPLOTSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter une boîte à moustaches sparkline",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "Classe de tracé en boîte"
        },
        {
          "name": "Montrer la moyenne"
        },
        {
          "name": "échelleDémarrage"
        },
        {
          "name": "Fin d'échelle"
        },
        {
          "name": "Début acceptable"
        },
        {
          "name": "acceptableFin"
        },
        {
          "name": "Schéma de couleurs"
        },
        {
          "name": "style"
        },
        {
          "name": "verticale"
        }
      ]
    },
    "CASCADESPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline en cascade",
      "parameters": [
        {
          "name": "Plage de points"
        },
        {
          "name": "pointIndex"
        },
        {
          "name": "ÉtiquettesRange"
        },
        {
          "name": "minimum"
        },
        {
          "name": "maximum"
        },
        {
          "name": "colorPositive"
        },
        {
          "name": "couleurNégative"
        },
        {
          "name": "verticale"
        },
        {
          "name": "itemTypeRange"
        },
        {
          "name": "couleurTotal"
        }
      ]
    },
    "PARETOSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline de Pareto",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "pointIndex"
        },
        {
          "name": "gamme de couleurs"
        },
        {
          "name": "cible"
        },
        {
          "name": "cible2"
        },
        {
          "name": "position de surbrillance"
        },
        {
          "name": "étiquette"
        },
        {
          "name": "verticale"
        },
        {
          "name": "couleur cible"
        },
        {
          "name": "target2Color"
        },
        {
          "name": "étiquetteCouleur"
        },
        {
          "name": "barSize"
        }
      ]
    },
    "MONTHSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline mensuel",
      "parameters": [
        {
          "name": "année"
        },
        {
          "name": "mois"
        },
        {
          "name": "Plage de données"
        },
        {
          "name": "couleur vide"
        },
        {
          "name": "débutCouleur"
        },
        {
          "name": "couleur moyenne"
        },
        {
          "name": "finCouleur"
        }
      ]
    },
    "YEARSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline annuel",
      "parameters": [
        {
          "name": "année"
        },
        {
          "name": "Plage de données"
        },
        {
          "name": "couleur vide"
        },
        {
          "name": "débutCouleur"
        },
        {
          "name": "couleur moyenne"
        },
        {
          "name": "finCouleur"
        }
      ]
    },
    "GAUGEKPISPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter une ligne d'étincelles de KPI de jauge",
      "parameters": [
        {
          "name": "valeur cible"
        },
        {
          "name": "valeur actuelle"
        },
        {
          "name": "minValue"
        },
        {
          "name": "valeur max"
        },
        {
          "name": "montrer l'étiquette",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "targetValueLabel",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "Étiquette de valeur actuelle",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "minValueLabel",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "maxValueLabel",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "fontArray",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "Angle min",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "Angle max",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "rayonRatio",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "type de jauge",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "gamme de couleurs",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "HISTOGRAMSPARKLINE": {
      "description": "Cette fonction renvoie un ensemble de données utilisé pour représenter un graphique sparkline d'histogramme",
      "parameters": [
        {
          "name": "Plage de dates"
        },
        {
          "name": "continu"
        },
        {
          "name": "Étiquette de peinture"
        },
        {
          "name": "échelle"
        },
        {
          "name": "largeur de la barre"
        },
        {
          "name": "barColor"
        },
        {
          "name": "étiquetteFontStyle"
        },
        {
          "name": "étiquetteCouleur"
        },
        {
          "name": "couleur de bord"
        }
      ]
    },
    "CEILING.PRECISE": {
      "description": "Cette fonction arrondit un nombre à l'entier le plus proche ou au multiple le plus proche d'une valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "importance",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "COVARIANCE.S": {
      "description": "Cette fonction renvoie la covariance de l'échantillon, qui est la moyenne des produits des écarts pour chaque paire de points de données dans deux ensembles de nombres.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        }
      ]
    },
    "FLOOR.PRECISE": {
      "description": "Cette fonction arrondit un nombre à l'entier inférieur le plus proche ou au multiple le plus proche d'une valeur spécifiée.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "importance",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "PERCENTILE.EXC": {
      "description": "Cette fonction renvoie le n-ième percentile des valeurs d'une plage.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.EXC": {
      "description": "Cette fonction renvoie à quel quartile (quel quart ou 25 pour cent) d'un ensemble de données appartient une valeur.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "litre"
        }
      ]
    },
    "RANK.AVG": {
      "description": "Cette fonction renvoie le rang d'un nombre dans un ensemble de nombres. Si certaines valeurs ont le même rang, elle renverra le rang moyen.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "réf"
        },
        {
          "name": "commande",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "MODE.MULT": {
      "description": "Cette fonction renvoie le tableau vertical le plus fréquent ou la valeur la plus fréquente dans un ensemble de données.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "STDEV.P": {
      "description": "Cette fonction renvoie l'écart type pour une population entière spécifiée (de valeurs numériques).",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "VAR.P": {
      "description": "Cette fonction renvoie la variance basée sur l'ensemble de la population, qui utilise uniquement des valeurs numériques.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "COVARIANCE.P": {
      "description": "Cette fonction renvoie la covariance, qui est la moyenne des produits des écarts pour chaque paire de points de données dans deux ensembles de nombres.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        }
      ]
    },
    "MODE.SNGL": {
      "description": "Cette fonction renvoie la valeur la plus fréquente dans un ensemble de données.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "PERCENTILE.INC": {
      "description": "Cette fonction renvoie le n-ième percentile des valeurs d'une plage.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.INC": {
      "description": "Cette fonction renvoie à quel quartile (quel quart ou 25 pour cent) d'un ensemble de données appartient une valeur.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "litre"
        }
      ]
    },
    "RANK.EQ": {
      "description": "Cette fonction renvoie le rang d'un nombre dans un ensemble de nombres. Si vous deviez trier l'ensemble, le rang du nombre serait sa position dans la liste.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "réf"
        },
        {
          "name": "commande",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "STDEV": {
      "description": "Cette fonction renvoie un écart type estimé sur la base d'un échantillon.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "STDEV.S": {
      "description": "Cette fonction renvoie un écart type estimé sur la base d'un échantillon.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "VAR.S": {
      "description": "Cette fonction renvoie la variance basée sur un échantillon d'une population, qui utilise uniquement des valeurs numériques.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "BETA.INV": {
      "description": "Cette fonction calcule l'inverse de la fonction de distribution bêta cumulative.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "inférieur",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "supérieur",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "BINOM.DIST": {
      "description": "Cette fonction calcule la probabilité de distribution binomiale à terme individuel.",
      "parameters": [
        {
          "name": "Nombres"
        },
        {
          "name": "procès"
        },
        {
          "name": "probabilités"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "BINOM.INV": {
      "description": "Cette fonction renvoie le critère binomial, la plus petite valeur pour laquelle la distribution binomiale cumulative est supérieure ou égale à une valeur de critère.",
      "parameters": [
        {
          "name": "procès"
        },
        {
          "name": "probabilités"
        },
        {
          "name": "alpha"
        }
      ]
    },
    "CHISQ.DIST.RT": {
      "description": "Cette fonction calcule la probabilité unilatérale de la distribution du chi carré.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "CHISQ.INV.RT": {
      "description": "Cette fonction calcule l'inverse de la probabilité unilatérale de la distribution du chi carré.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "CHISQ.TEST": {
      "description": "Cette fonction calcule le test d'indépendance de la distribution du chi carré.",
      "parameters": [
        {
          "name": "plage_actuelle"
        },
        {
          "name": "plage_attendue"
        }
      ]
    },
    "CONFIDENCE.NORM": {
      "description": "Cette fonction renvoie un intervalle de confiance pour une moyenne de population.",
      "parameters": [
        {
          "name": "alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "taille"
        }
      ]
    },
    "EXPON.DIST": {
      "description": "Cette fonction renvoie la distribution exponentielle ou la densité de probabilité.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "lambda"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "F.DIST.RT": {
      "description": "Cette fonction calcule la distribution de probabilité F, pour voir les degrés de diversité entre deux ensembles de données.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "deg_freedom1"
        },
        {
          "name": "deg_freedom2"
        }
      ]
    },
    "F.INV.RT": {
      "description": "Cette fonction renvoie l'inverse de la distribution de probabilité F.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_freedom1"
        },
        {
          "name": "deg_freedom2"
        }
      ]
    },
    "F.TEST": {
      "description": "Cette fonction renvoie le résultat d'un test F, qui renvoie la probabilité unilatérale que les variances de deux tableaux ne soient pas significativement différentes.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        }
      ]
    },
    "GAMMA.DIST": {
      "description": "Cette fonction renvoie la distribution gamma.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "GAMMA.INV": {
      "description": "Cette fonction renvoie l'inverse de la distribution cumulative gamma.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        }
      ]
    },
    "LOGNORM.INV": {
      "description": "Cette fonction renvoie l'inverse de la fonction de distribution cumulative log-normale de x, où LN(x) est normalement distribué avec la moyenne et l'écart type spécifiés.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORM.DIST": {
      "description": "Cette fonction renvoie la distribution cumulative normale pour la moyenne et l'écart type spécifiés.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "NORM.INV": {
      "description": "Cette fonction renvoie l'inverse de la distribution cumulative normale pour la moyenne et l'écart type donnés.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "signifier"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORM.S.INV": {
      "description": "Cette fonction renvoie l'inverse de la distribution cumulative normale standard. La distribution a une moyenne de zéro et un écart type de un.",
      "parameters": [
        {
          "name": "probabilité"
        }
      ]
    },
    "PERCENTRANK.INC": {
      "description": "Cette fonction renvoie le rang d'une valeur dans un ensemble de données sous forme de pourcentage de l'ensemble de données.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "n"
        },
        {
          "name": "importance",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "POISSON.DIST": {
      "description": "Cette fonction renvoie la distribution de Poisson.",
      "parameters": [
        {
          "name": "événements"
        },
        {
          "name": "signifier"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "T.INV.2T": {
      "description": "Cette fonction renvoie la valeur t de la distribution t de Student en fonction de la probabilité et des degrés de liberté.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "T.TEST": {
      "description": "Cette fonction renvoie la probabilité associée à un test t.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2"
        },
        {
          "name": "queues"
        },
        {
          "name": "taper"
        }
      ]
    },
    "WEIBULL.DIST": {
      "description": "Cette fonction renvoie la distribution de Weibull à deux paramètres, souvent utilisée dans l'analyse de fiabilité.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "Z.TEST": {
      "description": "Cette fonction renvoie la valeur de signification d'un test z. Le test z génère un score standard pour x par rapport à l'ensemble de données et renvoie la probabilité bilatérale pour la distribution normale.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "x"
        },
        {
          "name": "sigma",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "T.DIST.RT": {
      "description": "Cette fonction renvoie la distribution t à queue droite.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "T.DIST.2T": {
      "description": "Cette fonction renvoie la distribution t à deux queues.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "ISO.CEILING": {
      "description": "Cette fonction renvoie un nombre jusqu'à l'entier le plus proche ou au multiple de signification le plus proche, quel que soit le signe de signification.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "importance",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "BETA.DIST": {
      "description": "Cette fonction renvoie la distribution bêta.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "bêta"
        },
        {
          "name": "cumulatif"
        },
        {
          "name": "inférieur"
        },
        {
          "name": "supérieur"
        }
      ]
    },
    "GAMMALN.PRECISE": {
      "description": "Cette fonction renvoie le logarithme naturel de la fonction gamma.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "ERF.PRECISE": {
      "description": "Cette fonction renvoie la fonction d'erreur.",
      "parameters": [
        {
          "name": "limite inférieure"
        }
      ]
    },
    "ERFC.PRECISE": {
      "description": "Cette fonction renvoie la fonction ERF complémentaire.",
      "parameters": [
        {
          "name": "limite inférieure"
        }
      ]
    },
    "PERCENTRANK.EXC": {
      "description": "Cette fonction renvoie le rang en pourcentage (0..1, exclusif) d'une valeur dans un ensemble de données.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "x"
        },
        {
          "name": "importance",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "HYPGEOM.DIST": {
      "description": "Cette fonction renvoie la distribution hypergéométrique.",
      "parameters": [
        {
          "name": "échantillons"
        },
        {
          "name": "nombre_échantillon"
        },
        {
          "name": "population_s"
        },
        {
          "name": "nombre_pop"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "LOGNORM.DIST": {
      "description": "Cette fonction renvoie la distribution log-normale de x.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "signifier"
        },
        {
          "name": "écart type"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "NEGBINOM.DIST": {
      "description": "Cette fonction renvoie la distribution binomiale négative.",
      "parameters": [
        {
          "name": "numéro_f"
        },
        {
          "name": "Nombres"
        },
        {
          "name": "probabilités"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "NORM.S.DIST": {
      "description": "Cette fonction renvoie la distribution normale standard.",
      "parameters": [
        {
          "name": "z"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "T.DIST": {
      "description": "Cette fonction renvoie la distribution t.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_liberté"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "F.DIST": {
      "description": "Cette fonction renvoie la distribution de probabilité F.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_freedom1"
        },
        {
          "name": "deg_freedom2"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "CHISQ.DIST": {
      "description": "Cette fonction renvoie la distribution du chi carré.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_liberté"
        },
        {
          "name": "cumulatif"
        }
      ]
    },
    "F.INV": {
      "description": "Cette fonction renvoie l'inverse de la distribution de probabilité F.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_freedom1"
        },
        {
          "name": "deg_freedom2"
        }
      ]
    },
    "T.INV": {
      "description": "Cette fonction renvoie l'inverse de la queue gauche de la distribution t.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "CHISQ.INV": {
      "description": "Cette fonction renvoie l'inverse de la probabilité à queue gauche de la distribution du chi carré.",
      "parameters": [
        {
          "name": "probabilité"
        },
        {
          "name": "deg_liberté"
        }
      ]
    },
    "CONFIDENCE.T": {
      "description": "Cette fonction renvoie l'intervalle de confiance pour une distribution t de Student.",
      "parameters": [
        {
          "name": "alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "taille"
        }
      ]
    },
    "NETWORKDAYS.INTL": {
      "description": "Cette fonction renvoie le nombre de jours ouvrables entre deux dates en utilisant des arguments pour indiquer les jours fériés et les week-ends.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "date_de_fin"
        },
        {
          "name": "fin de semaine",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "vacances",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "WORKDAY.INTL": {
      "description": "Cette fonction renvoie le numéro de série de la date avant ou après un certain nombre de jours ouvrables avec des paramètres de week-end personnalisés. Ces paramètres indiquent les jours de week-end et les jours fériés.",
      "parameters": [
        {
          "name": "date de début"
        },
        {
          "name": "jours"
        },
        {
          "name": "fin de semaine",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "vacances",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "REFRESH": {
      "description": "Cette fonction décide comment recalculer la formule. Vous pouvez utiliser l'argument assessmentMode pour spécifier le recalcul de la formule sur la valeur de référence modifiée, évaluer une fois, recalculer ou sur un intervalle.",
      "parameters": [
        {
          "name": "formule"
        },
        {
          "name": "Mode d'évaluation"
        },
        {
          "name": "intervalle"
        }
      ]
    },
    "DAYS": {
      "description": "Cette fonction renvoie le nombre de jours entre deux dates.",
      "parameters": [
        {
          "name": "date_de_fin"
        },
        {
          "name": "date de début"
        }
      ]
    },
    "ISOWEEKNUM": {
      "description": "Cette fonction renvoie le numéro de la semaine ISO de l'année pour une date donnée.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "BITAND": {
      "description": "Cette fonction renvoie un \\\"AND\\\" au niveau du bit de deux nombres.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2"
        }
      ]
    },
    "BITLSHIFT": {
      "description": "Cette fonction renvoie un \"OU\" au niveau du bit de deux nombres.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "shift_amount"
        }
      ]
    },
    "BITOR": {
      "description": "Cette fonction renvoie un \"OU\" au niveau du bit de deux nombres.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2"
        }
      ]
    },
    "BITRSHIFT": {
      "description": "Cette fonction renvoie un \"OU\" au niveau du bit de deux nombres.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "shift_amount"
        }
      ]
    },
    "BITXOR": {
      "description": "Cette fonction renvoie un \\\"XOR\\\" au niveau du bit de deux nombres.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2"
        }
      ]
    },
    "IMCOSH": {
      "description": "Cette fonction renvoie le cosinus hyperbolique d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMCOT": {
      "description": "Cette fonction renvoie la cotangente d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMCSC": {
      "description": "Cette fonction renvoie la cosécante d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMCSCH": {
      "description": "Cette fonction renvoie la cosécante hyperbolique d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMSEC": {
      "description": "Cette fonction renvoie la sécante d'un nombre complexe au format texte x+yi de x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMSECH": {
      "description": "Cette fonction renvoie la sécante hyperbolique d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMSINH": {
      "description": "Cette fonction renvoie le sinus hyperbolique d'un nombre complexe au format texte x+yi de x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "IMTAN": {
      "description": "Cette fonction renvoie la tangente d'un nombre complexe au format texte x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexe"
        }
      ]
    },
    "PDURATION": {
      "description": "Cette fonction renvoie le nombre de périodes nécessaires à un investissement pour atteindre une valeur spécifiée.",
      "parameters": [
        {
          "name": "taux"
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
      "description": "Cette fonction renvoie un taux d'intérêt équivalent pour la croissance d'un investissement.",
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
      "description": "Cette fonction teste si elle contient une formule d'une cellule référencée.",
      "parameters": [
        {
          "name": "Référence de cellule"
        }
      ]
    },
    "IFNA": {
      "description": "Cette fonction renvoie la valeur que vous spécifiez si la formule renvoie la valeur d'erreur #N/A, sinon renvoie le résultat de la formule.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "valeur_si_na"
        }
      ]
    },
    "IFS": {
      "description": "Cette fonction vérifie si une ou plusieurs conditions sont remplies et renvoie une valeur qui correspond à la première condition VRAI.",
      "parameters": [
        {
          "name": "test_logique1"
        },
        {
          "name": "valeur_si_vrai1"
        },
        {
          "name": "test_logique2",
          "repeatable": "vrai"
        },
        {
          "name": "valeur_si_vrai2",
          "repeatable": "vrai"
        }
      ]
    },
    "SWITCH": {
      "description": "Cette fonction évalue une valeur (appelée expression) par rapport à une liste de valeurs et renvoie le résultat correspondant à la première valeur correspondante. S'il n'y a pas de correspondance, une valeur par défaut facultative peut être renvoyée.",
      "parameters": [
        {
          "name": "expression"
        },
        {
          "name": "valeur1"
        },
        {
          "name": "résultat1"
        },
        {
          "name": "default_or_value2",
          "repeatable": "vrai",
          "optional": "vrai"
        },
        {
          "name": "résultat2",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "XOR": {
      "description": "Cette fonction renvoie un \"ou\" logique exclusif de tous les arguments.",
      "parameters": [
        {
          "name": "logique",
          "repeatable": "vrai"
        }
      ]
    },
    "AREAS": {
      "description": "Cette fonction renvoie le nombre de zones dans une référence.",
      "parameters": [
        {
          "name": "référence"
        }
      ]
    },
    "FORMULATEXT": {
      "description": "Cette fonction renvoie une formule sous forme de chaîne.",
      "parameters": [
        {
          "name": "référence"
        }
      ]
    },
    "HYPERLINK": {
      "description": "Cette fonction crée un raccourci ou un saut qui ouvre un document stocké sur un serveur réseau, un intranet ou Internet.",
      "parameters": [
        {
          "name": "lien_emplacement"
        },
        {
          "name": "nom_amical"
        }
      ]
    },
    "ACOT": {
      "description": "Cette fonction calcule l'arccotangente inverse d'un nombre.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ACOTH": {
      "description": "Cette fonction calcule l'arccotangente hyperbolique inverse d'un nombre.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "ARABIC": {
      "description": "Cette fonction convertit un texte en chiffres romains en un équivalent en chiffres arabes.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "BASE": {
      "description": "Cette fonction convertit un nombre en une représentation textuelle avec la base donnée.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "base"
        },
        {
          "name": "min_length",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "CEILING.MATH": {
      "description": "Cette fonction arrondit un nombre à l'entier le plus proche ou au multiple de signification le plus proche.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "importance",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "mode",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "COMBINA": {
      "description": "Cette fonction calcule le nombre de combinaisons possibles avec des répétitions pour un nombre spécifié d'éléments.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "numéro_choisi"
        }
      ]
    },
    "COT": {
      "description": "Cette fonction renvoie la cotangente de l'angle spécifié.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "COTH": {
      "description": "Cette fonction renvoie la cotangente hyperbolique du nombre spécifié.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "CSC": {
      "description": "Cette fonction renvoie la cosécante de l'angle spécifié.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "CSCH": {
      "description": "Cette fonction renvoie la cosécante hyperbolique du nombre spécifié.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "DECIMAL": {
      "description": "Cette fonction convertit une représentation textuelle d'un nombre dans une base donnée en un nombre décimal.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "base"
        }
      ]
    },
    "FLOOR.MATH": {
      "description": "Cette fonction arrondit un nombre à l'entier inférieur le plus proche ou au multiple de signification le plus proche.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "importance",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "mode",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SEC": {
      "description": "Cette fonction renvoie la sécante de l'angle spécifié.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "SECH": {
      "description": "Cette fonction renvoie la sécante hyperbolique de la valeur spécifiée.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "BINOM.DIST.RANGE": {
      "description": "Cette fonction calcule la probabilité d'un résultat d'essai en utilisant une distribution binomiale.",
      "parameters": [
        {
          "name": "procès"
        },
        {
          "name": "probabilités"
        },
        {
          "name": "Nombres"
        },
        {
          "name": "numéro_s2",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "GAMMA": {
      "description": "Cette fonction renvoie la valeur de la fonction gamma.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "MAXIFS": {
      "description": "Cette fonction renvoie la valeur maximale parmi les cellules spécifiées par un ensemble donné de conditions ou de critères.",
      "parameters": [
        {
          "name": "plage_max"
        },
        {
          "name": "critère_plage1"
        },
        {
          "name": "critère1"
        },
        {
          "name": "critères_plage2",
          "repeatable": "vrai"
        },
        {
          "name": "critère2",
          "repeatable": "vrai"
        }
      ]
    },
    "GAUSS": {
      "description": "Cette fonction calcule la probabilité qu'un membre d'une population normale standard se situe entre la moyenne et z écarts types par rapport à la moyenne.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "MINIFS": {
      "description": "Cette fonction renvoie la valeur minimale parmi les cellules spécifiées par un ensemble donné de conditions ou de critères.",
      "parameters": [
        {
          "name": "plage_min"
        },
        {
          "name": "critère_plage1"
        },
        {
          "name": "critère1"
        },
        {
          "name": "critères_plage2",
          "repeatable": "vrai"
        },
        {
          "name": "critère2",
          "repeatable": "vrai"
        }
      ]
    },
    "PERMUTATIONA": {
      "description": "Cette fonction renvoie le nombre de permutations pour un nombre donné d'objets qui peuvent être sélectionnés parmi le total des objets.",
      "parameters": [
        {
          "name": "nombre"
        },
        {
          "name": "numéro_choisi"
        }
      ]
    },
    "PHI": {
      "description": "Cette fonction renvoie la valeur de la fonction de densité pour une distribution normale standard.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "SKEW.P": {
      "description": "Cette fonction renvoie l'asymétrie d'une distribution basée sur une population : une caractérisation du degré d'asymétrie d'une distribution autour de sa moyenne.",
      "parameters": [
        {
          "name": "numéro 1"
        },
        {
          "name": "numéro2",
          "repeatable": "vrai"
        }
      ]
    },
    "BAHTTEXT": {
      "description": "Cette fonction convertit un nombre en texte thaï et ajoute un suffixe de \\\"Baht\\",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "CONCAT": {
      "description": "Cette fonction combine plusieurs chaînes de texte ou nombres en une seule chaîne de texte, la fonction restera disponible pour la compatibilité avec la fonction \\\"CONCATENATE\\\".",
      "parameters": [
        {
          "name": "texte 1"
        },
        {
          "name": "texte2",
          "repeatable": "vrai"
        }
      ]
    },
    "FINDB": {
      "description": "Cette fonction recherche une valeur de texte dans une autre et renvoie la position de la valeur de texte dans le texte que vous avez recherché, et compte chaque caractère à deux octets comme 2 lorsque DBCS est défini comme langue par défaut.",
      "parameters": [
        {
          "name": "trouver_texte"
        },
        {
          "name": "dans_le_texte"
        },
        {
          "name": "numéro_de_début",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "LEFTB": {
      "description": "Cette fonction renvoie les caractères les plus à gauche spécifiés à partir d'une valeur de texte, et en fonction du nombre d'octets que vous spécifiez.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "num_octets"
        }
      ]
    },
    "LENB": {
      "description": "Cette fonction renvoie la longueur du nombre d'octets dans une chaîne de texte.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "MIDB": {
      "description": "Cette fonction renvoie le nombre de caractères demandé à partir d'une chaîne de texte commençant à la position que vous spécifiez et en fonction du nombre d'octets que vous spécifiez.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "numéro_de_début"
        },
        {
          "name": "num_octets"
        }
      ]
    },
    "REPLACEB": {
      "description": "Cette fonction remplace une partie d'une chaîne de texte par une chaîne de texte différente, en fonction du nombre d'octets que vous spécifiez.",
      "parameters": [
        {
          "name": "ancien_texte"
        },
        {
          "name": "début_octet"
        },
        {
          "name": "num_octets"
        },
        {
          "name": "nouveau_texte"
        }
      ]
    },
    "RIGHTB": {
      "description": "Cette fonction renvoie les caractères les plus à droite spécifiés à partir d'une valeur de texte, et en fonction du nombre d'octets que vous spécifiez.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "num_octets"
        }
      ]
    },
    "SEARCHB": {
      "description": "Cette fonction recherche une chaîne de texte dans une autre chaîne de texte et renvoie l'index de la position de départ du texte trouvé, et compte chaque caractère à deux octets comme 2 lorsque DBCS est défini comme langue par défaut.",
      "parameters": [
        {
          "name": "trouver_texte"
        },
        {
          "name": "dans_le_texte"
        },
        {
          "name": "numéro_de_début",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "TEXTJOIN": {
      "description": "Cette fonction combine plusieurs plages et/ou chaînes en un seul texte, et le texte inclut un délimiteur que vous spécifiez entre chaque valeur de texte.",
      "parameters": [
        {
          "name": "délimiteur"
        },
        {
          "name": "ignore_empty"
        },
        {
          "name": "texte 1"
        },
        {
          "name": "texte2",
          "repeatable": "vrai"
        }
      ]
    },
    "UNICHAR": {
      "description": "Cette fonction renvoie le caractère Unicode d'une référence numérique donnée.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "UNICODE": {
      "description": "Cette fonction renvoie le numéro correspondant au premier caractère du texte.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "ENCODEURL": {
      "description": "Cette fonction renvoie une chaîne codée en URL.",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "BC_QRCODE": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un QRCode",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "Niveau de correction d'erreur"
        },
        {
          "name": "modèle"
        },
        {
          "name": "version"
        },
        {
          "name": "masque"
        },
        {
          "name": "connexion"
        },
        {
          "name": "connexionNon"
        },
        {
          "name": "charCode"
        },
        {
          "name": "jeu de caractères"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_EAN13": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un EAN13.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "Ajouter sur"
        },
        {
          "name": "addOnLabelPosition"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_EAN8": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un EAN8.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_CODABAR": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un CODABAR.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "chiffre de contrôle"
        },
        {
          "name": "nwRatio"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_CODE39": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un CODE39.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "étiquetteAvecCaractèreDébutEtArrêt"
        },
        {
          "name": "chiffre de contrôle"
        },
        {
          "name": "nwRatio"
        },
        {
          "name": "ASCII complet"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_CODE93": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un CODE93.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "chiffre de contrôle"
        },
        {
          "name": "ASCII complet"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_CODE128": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un CODE128.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "codeSet"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_GS1_128": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un GS1_128.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_CODE49": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un CODE49.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "montrer l'étiquette"
        },
        {
          "name": "étiquettePosition"
        },
        {
          "name": "regroupement"
        },
        {
          "name": "groupeNo"
        },
        {
          "name": "FontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "poids de la police"
        },
        {
          "name": "texteDécoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "taille de police"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_PDF417": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un PDF417.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "Niveau de correction d'erreur"
        },
        {
          "name": "lignes"
        },
        {
          "name": "colonnes"
        },
        {
          "name": "compact"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "BC_DATAMATRIX": {
      "description": "Cette fonction renvoie un ensemble de données pour représenter un DATAMATRIX.",
      "parameters": [
        {
          "name": "valeur"
        },
        {
          "name": "couleur"
        },
        {
          "name": "Couleur d'arrière-plan"
        },
        {
          "name": "eccMode"
        },
        {
          "name": "Taille du symbole ecc200"
        },
        {
          "name": "ecc200EncodingMode"
        },
        {
          "name": "ecc00_140 Taille du symbole"
        },
        {
          "name": "Append structuré"
        },
        {
          "name": "Numéro de structure"
        },
        {
          "name": "identifiant de fichier"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "QueetZoneTop"
        },
        {
          "name": "zone silencieuse en bas"
        }
      ]
    },
    "FILTER": {
      "description": "Cette fonction filtre une plage ou un tableau.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "inclure"
        },
        {
          "name": "si_vide",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "RANDARRAY": {
      "description": "Cette fonction renvoie un tableau de nombres aléatoires.",
      "parameters": [
        {
          "name": "lignes"
        },
        {
          "name": "colonnes"
        },
        {
          "name": "min"
        },
        {
          "name": "max"
        },
        {
          "name": "nombre_entier"
        }
      ]
    },
    "SEQUENCE": {
      "description": "Cette fonction renvoie une séquence de nombres.",
      "parameters": [
        {
          "name": "lignes"
        },
        {
          "name": "colonnes"
        },
        {
          "name": "commencer"
        },
        {
          "name": "étape"
        }
      ]
    },
    "SINGLE": {
      "description": "Cette fonction renvoie une valeur unique lorsqu'une valeur, une plage ou un tableau lui est donné.",
      "parameters": [
        {
          "name": "valeur"
        }
      ]
    },
    "SORT": {
      "description": "Cette fonction trie une plage ou un tableau.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "trier_index"
        },
        {
          "name": "ordre_de_tri"
        },
        {
          "name": "par_col"
        }
      ]
    },
    "SORTBY": {
      "description": "Cette fonction trie une plage ou un tableau en fonction des valeurs d'une plage ou d'un tableau correspondant.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "par_array1"
        },
        {
          "name": "ordre_de_tri1"
        },
        {
          "name": "par_array2",
          "repeatable": "vrai"
        },
        {
          "name": "sort_order2",
          "repeatable": "vrai"
        }
      ]
    },
    "UNIQUE": {
      "description": "Cette fonction renvoie les valeurs uniques d'une plage ou d'un tableau.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "par_col",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "exactement_une_fois",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "QUERY": {
      "description": "Cette fonction renvoie des données à partir des tables du gestionnaire de données dans une feuille de calcul.",
      "parameters": [
        {
          "name": "tableAndRows"
        },
        {
          "name": "colonnes"
        },
        {
          "name": "Objet de retour"
        }
      ]
    },
    "LET": {
      "description": "Cette fonction attribue des résultats de calcul à des noms. Utile pour stocker des calculs et des valeurs intermédiaires en définissant des noms à l'intérieur d'une formule. Ces noms ne s'appliquent que dans le cadre de la fonction LET.",
      "parameters": [
        {
          "name": "nom1"
        },
        {
          "name": "nom_valeur1"
        },
        {
          "name": "nom2",
          "repeatable": "vrai"
        },
        {
          "name": "nom_valeur2",
          "repeatable": "vrai"
        },
        {
          "name": "calcul"
        }
      ]
    },
    "IMAGE": {
      "description": "Cette fonction saisit une URL ou une chaîne base64 pour afficher une image dans une cellule",
      "parameters": [
        {
          "name": "source"
        },
        {
          "name": "[alt_text]"
        },
        {
          "name": "[dimensionnement]"
        },
        {
          "name": "[hauteur]"
        },
        {
          "name": "[largeur]"
        },
        {
          "name": "[clipY]"
        },
        {
          "name": "[clipX]"
        },
        {
          "name": "[hauteur du clip]"
        },
        {
          "name": "[largeur du clip]"
        },
        {
          "name": "[vAlign]"
        },
        {
          "name": "[hAlign]"
        }
      ]
    },
    "GETPIVOTDATA": {
      "description": "Cette fonction extrait les données stockées dans un tableau croisé dynamique",
      "parameters": [
        {
          "name": "champ_de_données"
        },
        {
          "name": "tableau croisé dynamique"
        },
        {
          "name": "champ1, élément1",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "WEBSERVICE": {
      "description": "Cette fonction renvoie des données à partir d'un service Web",
      "parameters": [
        {
          "name": "URL"
        }
      ]
    },
    "FILTERJSON": {
      "description": "Cette fonction analyse la chaîne JSON en une valeur scalaire, un objet ou un tableau d'objets.",
      "parameters": [
        {
          "name": "json_string"
        }
      ]
    },
    "ASC": {
      "description": "La fonction ASC transforme les caractères pleine largeur (double octet) en caractères demi-largeur (simple octet). À utiliser avec les jeux de caractères double octet (DBCS).",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "DBCS": {
      "description": "La fonction DBCS convertit les lettres demi-largeur (sur un octet) d'une chaîne de caractères en caractères pleine largeur (sur deux octets).",
      "parameters": [
        {
          "name": "texte"
        }
      ]
    },
    "LAMBDA": {
      "description": "Crée une valeur de fonction, qui peut être appelée dans des formules.",
      "parameters": [
        {
          "name": "paramètre_ou_calcul"
        },
        {
          "name": "paramètre_ou_calcul",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "MAP": {
      "description": "Renvoie un tableau formé en mappant chaque valeur du ou des tableaux à une nouvelle valeur en appliquant un LAMBDA pour créer une nouvelle valeur.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "lambda_ou_tableau",
          "repeatable": "vrai"
        }
      ]
    },
    "REDUCE": {
      "description": "Réduit un tableau à une valeur accumulée en appliquant un LAMBDA à chaque valeur et en renvoyant la valeur totale dans l'accumulateur.",
      "parameters": [
        {
          "name": "valeur_init"
        },
        {
          "name": "tableau"
        },
        {
          "name": "fonction"
        }
      ]
    },
    "SCAN": {
      "description": "Analyse un tableau en appliquant un LAMBDA à chaque valeur et renvoie un tableau contenant chaque valeur intermédiaire.",
      "parameters": [
        {
          "name": "valeur_init",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "tableau"
        },
        {
          "name": "fonction"
        }
      ]
    },
    "MAKEARRAY": {
      "description": "Renvoie un tableau calculé d'une taille de ligne et de colonne spécifiée, en appliquant un LAMBDA.",
      "parameters": [
        {
          "name": "lignes"
        },
        {
          "name": "cols"
        },
        {
          "name": "fonction"
        }
      ]
    },
    "BYCOL": {
      "description": "Applique une fonction LAMBDA à chaque colonne et renvoie un tableau des résultats. Par exemple, si le tableau d'origine contient 3 colonnes sur 2 lignes, le tableau renvoyé contient 3 colonnes sur 1 ligne.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "fonction"
        }
      ]
    },
    "BYROW": {
      "description": "Applique une fonction LAMBDA à chaque ligne et renvoie un tableau des résultats. Par exemple, si le tableau d'origine comporte 3 colonnes sur 2 lignes, le tableau renvoyé comporte 1 colonne sur 2 lignes.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "fonction"
        }
      ]
    },
    "ISOMITTED": {
      "description": "Vérifie si la valeur dans un LAMBDA est manquante et renvoie VRAI ou FAUX.",
      "parameters": [
        {
          "name": "argument"
        }
      ]
    },
    "TEXTBEFORE": {
      "description": "Renvoie le texte qui apparaît avant un caractère ou une chaîne donnée.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "délimiteur"
        },
        {
          "name": "numéro_instance",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "mode_match",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "0",
              "description": "Sensible aux majuscules et minuscules"
            },
            {
              "value": "1",
              "description": "Insensible à la casse"
            }
          ]
        },
        {
          "name": "fin_du_match",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "si_non_trouvé",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "TEXTAFTER": {
      "description": "Renvoie le texte qui apparaît après le caractère ou la chaîne donné.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "délimiteur"
        },
        {
          "name": "numéro_instance",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "mode_match",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "0",
              "description": "Sensible aux majuscules et minuscules"
            },
            {
              "value": "1",
              "description": "Insensible à la casse"
            }
          ]
        },
        {
          "name": "fin_du_match",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "si_non_trouvé",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "TEXTSPLIT": {
      "description": "Divise les chaînes de texte en utilisant des délimiteurs de colonnes et de lignes.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "col_delimiter"
        },
        {
          "name": "délimiteur_de_ligne",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "ignore_empty",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "mode_match",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "0",
              "description": "Sensible aux majuscules et minuscules"
            },
            {
              "value": "1",
              "description": "Insensible à la casse"
            }
          ]
        },
        {
          "name": "pad_avec",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SJS.REGEXEXTRACT": {
      "description": "Extrait les sous-chaînes correspondantes selon une expression régulière.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "expression_régulière"
        },
        {
          "name": "modificateurs",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SJS.REGEXMATCH": {
      "description": "Si un morceau de texte correspond à une expression régulière.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "expression_régulière"
        },
        {
          "name": "modificateurs",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SJS.REGEXREPLACE": {
      "description": "Remplace une partie d'une chaîne de texte par une chaîne de texte différente à l'aide d'expressions régulières.",
      "parameters": [
        {
          "name": "texte"
        },
        {
          "name": "expression_régulière"
        },
        {
          "name": "remplacement"
        },
        {
          "name": "modificateurs",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "VSTACK": {
      "description": "Ajoute des tableaux verticalement et en séquence pour renvoyer un tableau plus grand.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "HSTACK": {
      "description": "Ajoute des tableaux horizontalement et en séquence pour renvoyer un tableau plus grand.",
      "parameters": [
        {
          "name": "tableau1"
        },
        {
          "name": "tableau2",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "TOROW": {
      "description": "Renvoie le tableau sur une seule ligne.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "ignorer",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "scan_by_column",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "TOCOL": {
      "description": "Renvoie le tableau dans une seule colonne.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "ignorer",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "scan_by_column",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "WRAPROWS": {
      "description": "Encapsule la ligne ou la colonne de valeurs fournie par lignes après un nombre spécifié d'éléments pour former un nouveau tableau.",
      "parameters": [
        {
          "name": "vecteur"
        },
        {
          "name": "nombre_d'enveloppes"
        },
        {
          "name": "pad_avec",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "WRAPCOLS": {
      "description": "Encapsule la ligne ou la colonne de valeurs fournie par colonnes après un nombre spécifié d'éléments pour former un nouveau tableau.",
      "parameters": [
        {
          "name": "vecteur"
        },
        {
          "name": "nombre_d'enveloppes"
        },
        {
          "name": "pad_avec",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "TAKE": {
      "description": "Renvoie un nombre spécifié de lignes ou de colonnes contiguës à partir du début ou de la fin d'un tableau.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "lignes"
        },
        {
          "name": "colonnes",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "DROP": {
      "description": "Exclut un nombre spécifié de lignes ou de colonnes du début ou de la fin d'un tableau.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "lignes"
        },
        {
          "name": "colonnes",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "EXPAND": {
      "description": "Étend ou complète un tableau selon les dimensions de ligne et de colonne spécifiées.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "lignes"
        },
        {
          "name": "colonnes",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "pad_avec",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "CHOOSEROWS": {
      "description": "Renvoie les lignes spécifiées d'un tableau.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "row_num1"
        },
        {
          "name": "row_num2",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "CHOOSECOLS": {
      "description": "Renvoie les colonnes spécifiées à partir d'un tableau.",
      "parameters": [
        {
          "name": "tableau"
        },
        {
          "name": "numéro_colonne1"
        },
        {
          "name": "numéro_colonne2",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "SJS.UUID": {
      "description": "Renvoie l'UUID aléatoire.",
      "parameters": [
        {
          "name": "nombre"
        }
      ]
    },
    "SJS.ENDWITH": {
      "description": "Renvoie si str1 se termine par str2.",
      "parameters": [
        {
          "name": "dans_le_texte"
        },
        {
          "name": "trouver_texte"
        },
        {
          "name": "mode_match",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "0",
              "description": "Sensible aux majuscules et minuscules"
            },
            {
              "value": "1",
              "description": "Insensible à la casse"
            }
          ]
        }
      ]
    },
    "SJS.STARTWITH": {
      "description": "Renvoie si la chaîne str1 commence par str2.",
      "parameters": [
        {
          "name": "dans_le_texte"
        },
        {
          "name": "trouver_texte"
        },
        {
          "name": "mode_match",
          "repeatable": "FAUX",
          "optional": "vrai",
          "enum": [
            {
              "value": "0",
              "description": "Sensible aux majuscules et minuscules"
            },
            {
              "value": "1",
              "description": "Insensible à la casse"
            }
          ]
        }
      ]
    },
    "R.INDEX": {
      "description": "(ReportSheet Specific) Renvoie l'index de la cellule spécifiée dans l'extension mesurée parent.",
      "parameters": [
        {
          "name": "référence"
        },
        {
          "name": "référence_contextuelle",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "R.RANK": {
      "description": "(ReportSheet Specific) Renvoie le rang de la cellule spécifiée dans le nœud parent.",
      "parameters": [
        {
          "name": "référence"
        },
        {
          "name": "référence_contextuelle",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "commande",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "mode_de_rang",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "SJS.FISCALYEAR": {
      "description": "retourner l'année fiscale\".",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "mois_de_début",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "R.R": {
      "description": "(Spécifique à la feuille de rapport) Décalage relatif en fonction de la cellule spécifiée.",
      "parameters": [
        {
          "name": "référence"
        },
        {
          "name": "compenser"
        }
      ]
    },
    "R.A": {
      "description": "(Spécifique à ReportSheet) Décalage absolu basé sur la cellule spécifiée.",
      "parameters": [
        {
          "name": "référence"
        },
        {
          "name": "compenser"
        }
      ]
    },
    "R.V": {
      "description": "(ReportSheet Specific) Renvoie les données de la cellule basée sur le décalage ou le contexte spécifié.",
      "parameters": [
        {
          "name": "référence"
        },
        {
          "name": "décalage | référence_contextuelle | \\\"CurrentPage\\",
          "repeatable": "vrai",
          "optional": "vrai"
        }
      ]
    },
    "R.CURRENTPAGE": {
      "description": "(Spécifique à la feuille de rapport) Renvoie le numéro de page actuel du rapport."
    },
    "R.PAGESCOUNT": {
      "description": "(ReportSheet Specific) Renvoie le nombre total de rapports actuels."
    },
    "R.PROPORTION": {
      "description": "(ReportSheet Specific) Renvoie le pourcentage de la cellule spécifiée dans son nœud parent.",
      "parameters": [
        {
          "name": "valeur_référence"
        },
        {
          "name": "context_reference1",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "context_reference2",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "R.CUMULATIVE": {
      "description": "(Spécifique à ReportSheet) Renvoie la valeur accumulée de la cellule actuelle.",
      "parameters": [
        {
          "name": "valeur_référence"
        },
        {
          "name": "context_reference1",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "context_reference2",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "R.MOM": {
      "description": "(Spécifique à ReportSheet) Renvoie les données de l'anneau de la cellule cible.",
      "parameters": [
        {
          "name": "valeur_référence"
        },
        {
          "name": "context_reference1",
          "repeatable": "FAUX",
          "optional": "vrai"
        },
        {
          "name": "context_reference2",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    },
    "R.YOY": {
      "description": "(Spécifique à ReportSheet) Renvoie les données d'une année sur l'autre de la cellule cible.",
      "parameters": [
        {
          "name": "valeur_référence"
        },
        {
          "name": "context_reference1"
        },
        {
          "name": "context_reference2",
          "repeatable": "FAUX",
          "optional": "vrai"
        }
      ]
    }
  },
  "TableFunctions": {
    "All": {
      "name": "#Tous",
      "description": "Renvoie l'intégralité du contenu du tableau ou les colonnes spécifiées du tableau, y compris les en-têtes de colonne, les données et le nombre total de lignes."
    },
    "Data": {
      "name": "#Données",
      "description": "Renvoie les cellules de données du tableau ou les colonnes de tableau spécifiées."
    },
    "Headers": {
      "name": "#En-têtes",
      "description": "Renvoie les en-têtes des colonnes de la table ou les colonnes de la table spécifiées."
    },
    "Totals": {
      "name": "#Totaux",
      "description": "Renvoie le nombre total de lignes de la table ou des colonnes de la table spécifiées."
    },
    "thisRow": {
      "name": "#Cette ligne",
      "description": "Cette rangée."
    }
  }
}

exports.data = custom_resource;