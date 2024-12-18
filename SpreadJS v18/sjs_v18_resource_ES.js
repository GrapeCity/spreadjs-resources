var custom_resource = {
  "Common": {
    "Exp_InvalidDateFormat": "Patrón de formato de fecha no válido",
    "Exp_InvalidExponentFormat": "formato de exponente no válido",
    "Exp_InvalidSemicolons": "formato inválido: demasiados puntos y comas",
    "Exp_InvalidNumberGroupSize": "NumberGroupSize debe estar entre 1 y 9, excepto el último elemento, que puede ser cero\".",
    "Exp_BadFormatSpecifier": "Especificador de formato incorrecto",
    "Exp_InvalidNumberFormat": "Patrón de formato de número no válido",
    "Exp_InvalidCast": "Excepción de conversión no válida",
    "Exp_Separator": "numberDecimalSeparator, listSeparator y arrayListSeparator deberían ser diferentes en la información cultural\".",
    "Exp_TokenIsNull": "el token es nulo",
    "Exp_InvalidBackslash": "no se puede evaluar el '\\\\'",
    "Exp_FormatIllegal": "El formato es ilegal.",
    "Exp_ValueIsNull": "el valor es nulo",
    "Exp_DuplicatedDescriptor": "Se agregó el tipo de descriptor.",
    "Exp_TokenIllegal": "El token es ilegal.",
    "Exp_ValueIllegal": "el valor es ilegal."
  },
  "CalcEngine": {
    "Exp_InvalidCast": "Excepción de conversión no válida",
    "Exp_FormulaInvalidChar": "La fórmula contiene un carácter no válido: '{0}' en el índice {1}",
    "Exp_FormulaInvalid": "Fórmula no válida",
    "Exp_InvalidFunctionName": "Nombre de función no válido",
    "Exp_InvalidOverrideFunction": "No se puede anular la función incorporada",
    "Exp_InvalidArray": "Matriz no válida",
    "Exp_OverrideNotAllowed": "Intentar anular una función cuando la anulación no está permitida",
    "Exp_NoSyntax": "No hay sintaxis '{0}' que coincida con la sintaxis '{1}'.",
    "Exp_IsValid": "'{0}' no es válido.",
    "Exp_InvalidParameters": "Parámetro de función no válido en {0}.",
    "Exp_InvalidArrayColumns": "La longitud de las columnas de la matriz no es igual en {0}\".",
    "Exp_ExprIsNull": "El argumento 'expr' es nulo",
    "Exp_InvalidOperation": "Excepción de operación no válida",
    "Exp_ArgumentNull": "Excepción de argumento nulo",
    "Exp_CriteriaIsNull": "El criterio es nulo",
    "Exp_Format": "Formato",
    "Exp_ArrayFormulaPart": "No se puede cambiar parte de una matriz\".",
    "Exp_NotSupported": "Excepción no admitida",
    "Exp_DuplicatedChar": "Carácter duplicado",
    "Exp_ArgumentOutOfRangeException": "Excepción de argumento fuera de rango",
    "Exp_ArgumentException": "Excepción de argumento",
    "Aggregate_GrandTotal": "Gran total",
    "Aggregate_Total": "Total",
    "Fbx_Summary": "Resumen",
    "Fbx_TableName_Description": "Nombre de la tabla para ",
    "Fbx_TableSheetName_Description": "Nombre de la hoja de tabla para ",
    "Fbx_CustomName_Description": "Nombre personalizado para "
  },
  "DataManager": {
    "Zve": {
      "WINDOW": {
        "description": "(TableSheet específico) Determina las filas como la ventana mediante la partición y el orden para aplicar la función de ventana\".",
        "parameters": [
          {
            "name": "función_ventana"
          },
          {
            "name": "partición_por",
            "optional": "verdadero"
          },
          {
            "name": "ordenar_por",
            "optional": "verdadero"
          },
          {
            "name": "filas_de_marco\\\\rango\\\\grupos",
            "optional": "verdadero"
          }
        ]
      },
      "WINDOWDEF": {
        "description": "(TableSheet específico) Defina una abreviatura que permita ser reutilizada por la función VENTANA\".",
        "parameters": [
          {
            "name": "partición_por",
            "optional": "verdadero"
          },
          {
            "name": "ordenar_por",
            "optional": "verdadero"
          },
          {
            "name": "filas_de_marco\\\\rango\\\\grupos",
            "optional": "verdadero"
          }
        ]
      },
      "PARTITIONBY": {
        "description": "(TableSheet específico) Divide las filas en particiones\".",
        "parameters": [
          {
            "name": "función_de_campo",
            "optional": "FALSO",
            "repeatable": "verdadero"
          }
        ]
      },
      "ORDERBY": {
        "description": "(TableSheet específico) Define el orden lógico en cada partición\".",
        "parameters": [
          {
            "name": "función_de_campo",
            "optional": "FALSO",
            "repeatable": "verdadero"
          }
        ]
      },
      "ORDERASC": {
        "description": "(TableSheet Specific) Especifica el orden ascendente para el campo especificado\".",
        "parameters": [
          {
            "name": "función_de_campo"
          }
        ]
      },
      "ORDERDESC": {
        "description": "(TableSheet Specific) Especifica el orden descendente para el campo especificado\".",
        "parameters": [
          {
            "name": "función_de_campo"
          }
        ]
      },
      "FRAMEROWS": {
        "description": "(TableSheet específico) Limite el conjunto de filas de la ventana especificando las filas iniciales o finales con respecto a la fila actual\".",
        "parameters": [
          {
            "name": "función_de_inicio",
            "optional": "FALSO",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "-1",
                "description": "Indica el límite superior de la partición."
              },
              {
                "value": "[@]",
                "description": "Indica la fila o valor actual."
              },
              {
                "value": "[@-norte]",
                "description": "Indica la n precedente de la actual, si el orden es ascendente."
              },
              {
                "value": "[@+n]",
                "description": "Indica la n precedente de la actual, si el orden es descendente."
              }
            ]
          },
          {
            "name": "función_final",
            "optional": "verdadero",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "-1",
                "description": "Indica el seguimiento inferior de la partición."
              },
              {
                "value": "[@]",
                "description": "Indica la fila o valor actual."
              },
              {
                "value": "[@+n]",
                "description": "Indica el n siguiente del actual, si el orden es ascendente."
              },
              {
                "value": "[@-norte]",
                "description": "Indica el n siguiente del actual, si el orden es descendente."
              }
            ]
          },
          {
            "name": "modo de exclusión",
            "optional": "verdadero",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "0",
                "description": "Este es el caso predeterminado, no se excluye ninguna fila\"."
              },
              {
                "value": "1",
                "description": "Se excluye la fila actual, los demás pares de la fila actual permanecen\"."
              },
              {
                "value": "2",
                "description": "Se excluyen la fila actual y los pares\"."
              },
              {
                "value": "3",
                "description": "La fila actual permanece, los otros pares quedan excluidos\"."
              }
            ]
          }
        ]
      },
      "FRAMERANGE": {
        "description": "(TableSheet específico) Limite el conjunto de filas de la ventana especificando el rango inicial o final con respecto al valor de la fila actual\".",
        "parameters": [
          {
            "name": "función_de_inicio",
            "optional": "FALSO",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "-1",
                "description": "Indica el límite superior de la partición."
              },
              {
                "value": "[@]",
                "description": "Indica la fila o valor actual."
              },
              {
                "value": "[@-norte]",
                "description": "Indica la n precedente de la actual, si el orden es ascendente."
              },
              {
                "value": "[@+n]",
                "description": "Indica la n precedente de la actual, si el orden es descendente."
              }
            ]
          },
          {
            "name": "función_final",
            "optional": "verdadero",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "-1",
                "description": "Indica el seguimiento inferior de la partición."
              },
              {
                "value": "[@]",
                "description": "Indica la fila o valor actual."
              },
              {
                "value": "[@+n]",
                "description": "Indica el n siguiente del actual, si el orden es ascendente."
              },
              {
                "value": "[@-norte]",
                "description": "Indica el n siguiente del actual, si el orden es descendente."
              }
            ]
          },
          {
            "name": "modo de exclusión",
            "optional": "verdadero",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "0",
                "description": "Este es el caso predeterminado, no se excluye ninguna fila\"."
              },
              {
                "value": "1",
                "description": "Se excluye la fila actual, los demás pares de la fila actual permanecen\"."
              },
              {
                "value": "2",
                "description": "Se excluyen la fila actual y los pares\"."
              },
              {
                "value": "3",
                "description": "La fila actual permanece, los otros pares quedan excluidos\"."
              }
            ]
          }
        ]
      },
      "FRAMEGROUPS": {
        "description": "(TableSheet específico) Limite el conjunto de filas de la ventana mediante el rango inicial o final especificado con respecto a los \"grupos\" de conteo relativos al grupo actual\".",
        "parameters": [
          {
            "name": "función_de_inicio",
            "optional": "FALSO",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "-1",
                "description": "Indica el límite superior de la partición."
              },
              {
                "value": "[@]",
                "description": "Indica la fila o valor actual."
              },
              {
                "value": "[@-norte]",
                "description": "Indica la n precedente de la actual, si el orden es ascendente."
              },
              {
                "value": "[@+n]",
                "description": "Indica la n precedente de la actual, si el orden es descendente."
              }
            ]
          },
          {
            "name": "función_final",
            "optional": "verdadero",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "-1",
                "description": "Indica el seguimiento inferior de la partición."
              },
              {
                "value": "[@]",
                "description": "Indica la fila o valor actual."
              },
              {
                "value": "[@+n]",
                "description": "Indica el n siguiente del actual, si el orden es ascendente."
              },
              {
                "value": "[@-norte]",
                "description": "Indica el n siguiente del actual, si el orden es descendente."
              }
            ]
          },
          {
            "name": "modo de exclusión",
            "optional": "verdadero",
            "repeatable": "FALSO",
            "enum": [
              {
                "value": "0",
                "description": "Este es el caso predeterminado, no se excluye ninguna fila\"."
              },
              {
                "value": "1",
                "description": "Se excluye la fila actual, los demás pares de la fila actual permanecen\"."
              },
              {
                "value": "2",
                "description": "Se excluyen la fila actual y los pares\"."
              },
              {
                "value": "3",
                "description": "La fila actual permanece, los otros pares quedan excluidos\"."
              }
            ]
          }
        ]
      },
      "CUMEDIST": {
        "description": "(Hoja de tabla específica) La distribución acumulativa de un valor dentro de un grupo de valores\"."
      },
      "W_PERCENTRANK": {
        "description": "(TableSheet específico) Calcula el porcentaje del rango relativo de una fila dentro de una partición de filas\"."
      },
      "ROWNUMBER": {
        "description": "(TableSheet específico) Devuelve el número de la fila actual dentro de su partición\"."
      },
      "W_RANK": {
        "description": "(TableSheet específico) Devuelve el rango de cada fila dentro de la partición de un conjunto de resultados\"."
      },
      "DENSERANK": {
        "description": "(TableSheet específico) Devuelve el rango de la fila actual dentro de su partición, sin espacios\"."
      },
      "LEAD": {
        "description": "(TableSheet específico) Proporciona acceso al valor de una fila en un desplazamiento físico determinado que sigue a la fila actual\".",
        "parameters": [
          {
            "name": "función_valor"
          },
          {
            "name": "compensar",
            "optional": "verdadero"
          },
          {
            "name": "valor predeterminado",
            "optional": "verdadero"
          }
        ]
      },
      "LAG": {
        "description": "(TableSheet específico) Proporciona acceso al valor de una fila en un desplazamiento físico determinado anterior a la fila actual\".",
        "parameters": [
          {
            "name": "función_valor"
          },
          {
            "name": "compensar",
            "optional": "verdadero"
          },
          {
            "name": "valor predeterminado",
            "optional": "verdadero"
          }
        ]
      },
      "NTILE": {
        "description": "(TableSheet específico) Divide una partición en N segmentos y asigna a cada fila su número de segmento\".",
        "parameters": [
          {
            "name": "norte"
          }
        ]
      },
      "FIRSTVALUE": {
        "description": "(TableSheet específico) Acceso al valor de la primera fila dentro del marco de la ventana\".",
        "parameters": [
          {
            "name": "función_valor"
          }
        ]
      },
      "LASTVALUE": {
        "description": "(TableSheet específico) Acceso al valor de la última fila dentro del marco de la ventana\".",
        "parameters": [
          {
            "name": "función_valor"
          }
        ]
      },
      "NTHVALUE": {
        "description": "(Específico de TableSheet) Acceso al valor de la fila n-ésima dentro del marco de la ventana\".",
        "parameters": [
          {
            "name": "función_valor"
          },
          {
            "name": "norte"
          }
        ]
      },
      "CALCULATE": {
        "description": "(Agrupamiento de hojas de tabla específico) Expandir el contexto del grupo para la fórmula\".",
        "parameters": [
          {
            "name": "fórmula"
          },
          {
            "name": "función eliminar filtros"
          }
        ]
      },
      "REMOVEFILTERS": {
        "description": "(Agrupamiento de hojas de tabla específico) Seleccione el contexto del nivel de grupo superior\".",
        "parameters": [
          {
            "name": "función_campo_grupo",
            "optional": "verdadero",
            "repeatable": "verdadero"
          }
        ]
      },
      "CHILDREN": {
        "description": "(Jerarquía de TableSheet específica) Recupera el valor de los hijos que tienen un cierto desplazamiento con respecto al padre\".",
        "parameters": [
          {
            "name": "desplazamiento de nivel"
          },
          {
            "name": "función_de_campo"
          }
        ]
      },
      "ONLYCHILDREN": {
        "description": "(Jerarquía de TableSheet específica) Recupera el valor de los hijos que no son padres\".",
        "parameters": [
          {
            "name": "función_de_campo"
          }
        ]
      },
      "PARENT": {
        "description": "(Jerarquía de TableSheet específica) Recupera el valor del padre que tiene un cierto desplazamiento con respecto al actual\".",
        "parameters": [
          {
            "name": "desplazamiento de nivel"
          },
          {
            "name": "función_de_campo"
          }
        ]
      },
      "LEVEL": {
        "description": "(Jerarquía de TableSheet específica) Recupera el nivel de la corriente."
      },
      "LEVELROWNUMBER": {
        "description": "(Jerarquía de tabla específica) Recupera el número de fila de la tabla actual debajo de su padre\"."
      }
    }
  },
  "Sheets": {
    "Exp_NotSupported": "Excepción no admitida",
    "Exp_PasteExtentIsNull": "pasteExtent es nulo",
    "Exp_InvalidPastedArea": "El área pegada debe tener el mismo tamaño que el área copiada o cortada\".",
    "Exp_MultipleSelections": "Esta acción no funcionará en selecciones múltiples\".",
    "Exp_ChangePartOfArray": "No se puede cambiar parte de una matriz\".",
    "Exp_InvalidAndSpace": "{0} no válido: {1} (debe estar entre {2} y {3}).",
    "Exp_SrcIsNull": "El argumento 'src' es nulo",
    "Exp_DestIsNull": "El argumento 'dest' es nulo",
    "Exp_InvalidCustomFunction": "Función personalizada no válida",
    "Exp_InvalidCustomName": "nombre personalizado no válido",
    "Exp_CustomNameBothInUse": "Tanto el nombre actual como el nuevo nombre se referencian en las fórmulas de celda",
    "Exp_IndexOutOfRange": "¡El índice está fuera de rango!",
    "Exp_InvalidRange": "Rango no válido",
    "Exp_NotAFunction": "No es una función",
    "Exp_ArgumentOutOfRange": "Argumento fuera de rango",
    "Exp_PasteSourceCellsLocked": "Las celdas de la hoja de origen están bloqueadas\".",
    "Exp_InvalidCopyPasteSize": "Las áreas de copiar y pegar no tienen el mismo tamaño\".",
    "Exp_PasteDestinationCellsLocked": "La celda que estás intentando cambiar está protegida y, por lo tanto, es de sólo lectura\".",
    "Exp_PasteChangeMergeCell": "No se puede cambiar parte de una celda fusionada\".",
    "Tip_Row": "Fila: ",
    "Tip_Column": "Columna: ",
    "Tip_Column_Offset": "Compensar: ",
    "Tip_Height": "Altura: {0} píxeles",
    "Tip_Width": "Ancho: {0} píxeles",
    "NewTab": "Nuevo...",
    "Exp_EmptyNamedStyle": "El nombre del estilo nombrado no puede estar vacío o ser nulo",
    "Exp_SheetNameInvalid": "El nombre de la hoja no puede estar en blanco ni contener estos caracteres: *, :, [, ], ?, \\\\, /",
    "Exp_SheetNameConflict": "Ese nombre ya está tomado. Prueba con otro.",
    "Exp_ArrayFormulaSpan": "Las fórmulas de matriz no son válidas en celdas fusionadas\".",
    "Exp_DestSheetIsNull": "destSheet es nulo",
    "Exp_SheetIsNull": "la hoja es nula.",
    "Exp_OverlappingSpans": "Esta operación provocará superposiciones de tramos\".",
    "NeedCanvasSupport": "Necesita un navegador que admita HTML5 Canvas para ejecutar SpreadJS",
    "ARIA_Resize": "cambiar el tamaño",
    "ARIA_First": "primero",
    "ARIA_PreviousArrow": "flecha anterior",
    "ARIA_NextArrow": "siguiente flecha",
    "ARIA_Last": "último",
    "ARIA_PreviousButton": "botón anterior",
    "ARIA_NextButton": "botón siguiente",
    "ARIA_SheetTab": "pestaña de hoja",
    "ARIA_NewSheet": "hoja nueva",
    "ARIA_Blank": "blanco",
    "ARIA_Scrollbar_Left_Button": "botón izquierdo de la barra de desplazamiento",
    "ARIA_Scrollbar_Top_Button": "botón superior de la barra de desplazamiento",
    "ARIA_Scrollbar_Thumb_Button": "botón del pulgar de la barra de desplazamiento",
    "ARIA_Scrollbar_Right_Button": "botón derecho de la barra de desplazamiento",
    "ARIA_Scrollbar_Bottom_Button": "botón inferior de la barra de desplazamiento",
    "ARIA_Scrollbar_TRACK_Button": "botón de pista de la barra de desplazamiento",
    "ARIA_Cell": "celúla",
    "ARIA_HasValue": "tiene valor {0}",
    "ARIA_HasFormula": "tiene fórmula {0}",
    "ARIA_HasCheckbox": "tiene casilla de verificación {0}",
    "ARIA_HasButton": "tiene el botón {0}",
    "ARIA_HasHyperlink": "tiene hipervínculo {0}",
    "ARIA_HasComment": "tiene comentario {0}",
    "ARIA_RowHeader": "encabezado de fila",
    "ARIA_ColumnHeader": "encabezado de columna",
    "SHEET_NAME": "Hoja",
    "REPORT_SUMMARY": "Suma",
    "Exp_InsertCopiedCutCells": "Esta selección no es válida. El área de copiar/pegar debe tener el mismo tamaño",
    "Exp_InsertCopiedCutCellsOnSpanTable": "Esto no funcionará porque movería celdas en una tabla en su hoja de cálculo o provocaría que algunas celdas fusionadas se desvinculen\".",
    "Exp_InsertCopiedCutCellsNoRange": "No se pueden insertar nuevas celdas porque hay celdas no vacías que se extenderían más allá de la hoja de cálculo\".",
    "Exp_InsertCopiedCutCellsOverlap": "Esta selección no es válida. Asegúrese de que las áreas de copia y pegado no se superpongan a menos que tengan el mismo tamaño y forma\".",
    "Exp_InsertCopiedCutCellsAffectTable": "No se pueden reorganizar las celdas dentro de una tabla de esta manera, porque podría afectar a otras celdas de la tabla de forma inesperada\".",
    "Exp_InvalidSortArrayFormulaInRange": "No se puede ordenar el rango actual porque existe una fórmula de matriz\".",
    "Exp_InvalidSortSpanInRange": "No se puede ordenar el rango actual porque existe un intervalo\".",
    "Exp_InvalidSortPartTableOrMultiTableInRange": "No se puede ordenar el rango actual como parte de una tabla o existen más de una tabla\".",
    "Exp_InvalidOperationInProtect": "La celda o el gráfico que intenta modificar se encuentra en una hoja protegida. Para realizar un cambio, desproteja la hoja\".",
    "EXP_IO": "Excepción de lectura y escritura de archivo\".",
    "EXP_FILE_FORMAT": "Formato de archivo incorrecto.",
    "EXP_NO_PASSWORD": "No se puede abrir el archivo Excel porque el libro/la hoja de cálculo está protegido con contraseña\".",
    "EXP_INVALID_PASSWORD": "La contraseña especificada es incorrecta.",
    "NORMAL": "Normal",
    "GENERAL": "General",
    "EXP_UNSUPPORT_CRYPTO_ALGORITHM": "Algoritmos criptográficos no compatibles",
    "Exp_InvalidOperationSizeLimitExceeded": "El tamaño del archivo excede el límite máximo establecido\".",
    "STEP": {
      "start": "iniciar carga {0}",
      "loadFileData": "cargar los datos de {0} para difundirlos",
      "loadSheetData": "cargar los datos de {0}",
      "startCalc": "iniciar reCalc",
      "loadSheetFormula": "cargar la fórmula de {0}",
      "parseFile": "analizar contenido {0}"
    },
    "pasteSpecialOptionDialog": {
      "title": "Pasta especial",
      "paste": "Pasta",
      "pasteOptions": {
        "all": "Todo",
        "formulas": "Fórmulas",
        "values": "Valores",
        "formats": "Formatos",
        "comments": "Comentarios",
        "validation": "Validación",
        "usingSourceTheme": "Todos usan el tema Fuente",
        "noBorders": "Todo excepto las fronteras",
        "columnWidth": "Anchos de columna",
        "formulasAndNumberFormats": "Fórmulas y formatos numéricos",
        "valueAndNumberFormats": "Formatos de valores y números"
      },
      "operation": "Operación",
      "operationOptions": {
        "none": "Ninguno",
        "add": "Agregar",
        "subtract": "Sustraer",
        "multiply": "Multiplicar",
        "divide": "Dividir"
      },
      "skipBlanks": "Saltar espacios en blanco",
      "transpose": "Transponer",
      "pasteLink": "Pegar enlace"
    },
    "ok": "DE ACUERDO",
    "cancel": "Cancelar",
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
    "Exp_NotSupportedDataSource": "¡La fuente de datos no es compatible!"
  },
  "Outlines": {
    "Exp_InvalidIndex": "Índice no válido",
    "Exp_InvalidCount": "Recuento no válido",
    "Exp_InvalidLevel": "Nivel inválido",
    "Exp_GroupInfoIsNull": "groupInfo es nulo",
    "Exp_GROUP_PROTECTED": "No puede utilizar este comando en una hoja protegida. Para utilizar este comando, primero debe desproteger la hoja\"."
  },
  "ConditionalFormatting": {
    "Exp_RuleIsNull": "El argumento 'regla' es nulo",
    "Exp_NotSupported": "Excepción no admitida"
  },
  "Touch": {
    "ToolStrip_PasteText": "Pasta",
    "ToolStrip_CutText": "Cortar",
    "ToolStrip_CopyText": "Copiar",
    "ToolStrip_AutoFillText": "Autocompletar"
  },
  "FloatingObjects": {
    "Exp_FloatingObjectHasSameNameError": "La hoja de cálculo actual ya tiene un objeto flotante con el mismo nombre\".",
    "Exp_FloatingObjectNameEmptyError": "El objeto flotante debe tener un nombre"
  },
  "CellTypes": {
    "OK": "DE ACUERDO",
    "Cancel": "Cancelar",
    "Calendar_ShortWeeks_1": "LUN",
    "Calendar_ShortWeeks_2": "MAR",
    "Calendar_ShortWeeks_3": "CASARSE",
    "Calendar_ShortWeeks_4": "JUE",
    "Calendar_ShortWeeks_5": "VIE",
    "Calendar_ShortWeeks_6": "SE SENTÓ",
    "Calendar_ShortWeeks_7": "SOL",
    "Calendar_Weeks_1": "Lunes",
    "Calendar_Weeks_2": "Martes",
    "Calendar_Weeks_3": "Miércoles",
    "Calendar_Weeks_4": "Jueves",
    "Calendar_Weeks_5": "Viernes",
    "Calendar_Weeks_6": "Sábado",
    "Calendar_Weeks_7": "Domingo",
    "Calendar_ShortMonths_1": "ENE",
    "Calendar_ShortMonths_2": "FEB",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "ABR",
    "Calendar_ShortMonths_5": "PUEDE",
    "Calendar_ShortMonths_6": "JUN",
    "Calendar_ShortMonths_7": "JUL",
    "Calendar_ShortMonths_8": "AGO",
    "Calendar_ShortMonths_9": "SEP",
    "Calendar_ShortMonths_10": "OCT",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DIC",
    "Calendar_Months_1": "ENERO",
    "Calendar_Months_2": "FEBRERO",
    "Calendar_Months_3": "MARZO",
    "Calendar_Months_4": "ABRIL",
    "Calendar_Months_5": "PUEDE",
    "Calendar_Months_6": "JUNIO",
    "Calendar_Months_7": "JULIO",
    "Calendar_Months_8": "AGOSTO",
    "Calendar_Months_9": "SEPTIEMBRE",
    "Calendar_Months_10": "OCTUBRE",
    "Calendar_Months_11": "NOVIEMBRE",
    "Calendar_Months_12": "DICIEMBRE",
    "Calendar_Time_AM": "SOY",
    "Calendar_Time_PM": "P.M",
    "Calendar_EraName_1": "METRO",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_Today": "Hoy",
    "Calendar_BuiltIn_Today": "Hoy",
    "Calendar_BuiltIn_Yesterday": "Ayer",
    "Calendar_BuiltIn_Last7Days": "Los últimos 7 días",
    "Calendar_BuiltIn_ThisMonth": "Este mes",
    "Calendar_BuiltIn_LastMonth": "Mes pasado",
    "Calendar_LastMonth": "Ir al mes anterior",
    "Calendar_NextMonth": "Ir al próximo mes",
    "Calendar_LastYear": "Ir al año anterior",
    "Calendar_NextYear": "Ir al próximo año",
    "Calendar_LastTenYear": "Ir a los diez años anteriores",
    "Calendar_NextTenYear": "Ir a los próximos diez años",
    "Quarter_Format_1": "T1",
    "Quarter_Format_2": "T2",
    "Quarter_Format_3": "T3",
    "Quarter_Format_4": "T4",
    "ThemeColor": "Colores temáticos",
    "StandardColor": "Colores estándar",
    "Calculator_DivideByZeroInfo": "No se puede dividir por cero.",
    "Calculator_InvalidInputInfo": "Entrada no válida.",
    "Calculator_SqrtParameterException": "Entrada no válida para la función.",
    "Calculator_OverFlowInfo": "La operación aritmética resultó en un desbordamiento\".",
    "MultiColumn_InvalidDataSource": "Fuente de datos no válida. La fórmula debería devolver una matriz\".",
    "DataObject_MeetLock": "No se pueden insertar datos porque hay una celda bloqueada en el camino\".",
    "DataObject_MeetSpan": "No se pueden insertar datos porque hay una celda fusionada en el camino\".",
    "DataObject_MeetTable": "No se pueden insertar datos porque hay una tabla en el camino\".",
    "FileUpload_Title": "+ Subir"
  },
  "Filter": {
    "Exp_InvalidColumnIndex": "Índice de columna no válido\".",
    "SortAscending": "Ordenar ascendentemente",
    "SortDescending": "Ordenar descendentemente",
    "OK": "DE ACUERDO",
    "Cancel": "Cancelar",
    "Search": "Buscar",
    "CheckAll": "Marcar todo",
    "UncheckAll": "Desmarcar todo",
    "Blanks": "(Espacios en blanco)",
    "Exp_FilterItemIsNull": "FilterItem es nulo.",
    "Show": "Espectáculo",
    "ShowRows": "Mostrar filas donde:",
    "And": "Y",
    "Or": "O",
    "SortColor": "Ordenar por color",
    "FilterColor": "Filtrar por color",
    "FilterCellTitle": "Filtrar por color de celda",
    "FilterFontTitle": "Filtrar por color de fuente",
    "SortCellTitle": "Ordenar por color de celda",
    "SortFontTitle": "Ordenar por color de fuente",
    "FontColor": "Más colores de fuente...",
    "CellColor": "Más colores de celdas...",
    "NoFill": "Sin relleno",
    "Automatic": "Automático",
    "Clear": "Borrar filtro de {0}",
    "TextFilter": "Filtros de texto",
    "DateFilter": "Filtros de fecha",
    "NumberFilter": "Filtros de números",
    "Custom": "Filtro personalizado...",
    "Equal": "Es igual a...",
    "NotEqual": "No es igual a...",
    "GreaterThan": "Más que...",
    "GreaterOrEquals": "Mayor o igual a...",
    "LessThan": "Menos que...",
    "LessThanOrEquals": "Menor o igual a...",
    "Between": "Entre...",
    "Top10": "Los 10 mejores...",
    "AboveAverage": "Por encima del promedio",
    "BelowAverage": "Por debajo del promedio",
    "Begin": "Comienza con...",
    "End": "Termina con...",
    "Contain": "Contiene...",
    "NotContain": "No contiene...",
    "Before": "Antes...",
    "After": "Después...",
    "Tomorrow": "Mañana",
    "Today": "Hoy",
    "Yesterday": "Ayer",
    "NextWeek": "La próxima semana",
    "ThisWeek": "Esta semana",
    "LastWeek": "La semana pasada",
    "NextMonth": "Mes próximo",
    "ThisMonth": "Este mes",
    "LastMonth": "Mes pasado",
    "NextQuarter": "El próximo trimestre",
    "ThisQuarter": "Este trimestre",
    "LastQuarter": "El último cuarto",
    "NextYear": "Al año que viene",
    "ThisYear": "Este año",
    "LastYear": "El año pasado",
    "YearToDate": "El año hasta la fecha",
    "AllDates": "Todas las fechas del período",
    "Top10Filter": "Los 10 mejores filtros automáticos",
    "CustomTitle": "Filtro automático personalizado",
    "ColorTitle": "Colores de celda disponibles",
    "top": "arriba",
    "bottom": "abajo",
    "SortCell": "Seleccione un color de celda para ordenar por:",
    "SortFont": "Seleccione un color de fuente para ordenar por:",
    "FilterCell": "Seleccione un color de celda para filtrar por:",
    "FilterFont": "Seleccione un color de fuente para filtrar por:",
    "Selected": "Seleccionado:",
    "IsEquals": "es igual a",
    "NotEquals": "no es igual a",
    "IsGreaterThan": "es mayor que",
    "IsGreaterOrEqual": "es mayor o igual que",
    "IsLess": "es menor que",
    "LessOrEqual": "es menor o igual a",
    "IsBeginWith": "comienza con",
    "NotBeginWith": "no comienza con",
    "IsEndWith": "termina con",
    "NotEndWith": "no termina con",
    "IsContain": "contiene",
    "NotContains": "no contiene",
    "IsAfter": "es despues",
    "AfterOrEqual": "es posterior o igual a",
    "IsBefore": "es antes",
    "BeforeOrEqual": "es anterior o igual a",
    "Q1": "Primer trimestre",
    "Q2": "Cuarto 2",
    "Q3": "Cuarto 3",
    "Q4": "Cuarto trimestre",
    "Jan": "Enero",
    "Feb": "Febrero",
    "Mar": "Marzo",
    "Apr": "Abril",
    "May": "Puede",
    "Jun": "Junio",
    "Jul": "Julio",
    "Aug": "Agosto",
    "Sep": "Septiembre",
    "Oct": "Octubre",
    "Nov": "Noviembre",
    "Dec": "Diciembre",
    "Explain1": "Utilice ? para representar cualquier carácter individual",
    "Explain2": "Utilice * para representar cualquier serie de caracteres",
    "Year": "",
    "Day": "",
    "add_current_filter": "Añadir la selección actual al filtro",
    "invalidCondition": "Error en la línea de análisis"
  },
  "Tables": {
    "Exp_DragDropShiftTableCell": "Esta operación no está permitida. La operación intenta desplazar celdas en una tabla de su hoja de cálculo\".",
    "Exp_DragDropChangePartOfTable": "No se puede completar la operación: está intentando cambiar una parte de una fila o columna de una tabla de una manera no permitida\".",
    "Exp_TableEmptyNameError": "El nombre de la tabla no puede estar vacío.",
    "Exp_TableNameInvalid": "El nombre de la tabla no es válido.",
    "Exp_TableInvalidRow": "Índice de fila o recuento de filas no válido\".",
    "Exp_TableInvalidColumn": "Índice de columna o recuento de columnas no válido\".",
    "Exp_TableIntersectError": "Las mesas no se pueden cruzar.",
    "Exp_TableHasSameNameError": "La hoja de cálculo actual ya existe en una tabla con el mismo nombre\".",
    "Exp_TableRangeHasFilterError": "El rango de la tabla actual contiene un rango de filtro\".",
    "Exp_TableDataSourceNullError": "La fuente de datos de la tabla no puede ser nula\".",
    "Exp_TableMoveOutOfRange": "La tabla no se puede mover fuera de la hoja.",
    "Exp_TableResizeOutOfRange": "El recuento de filas, el recuento de columnas y la tabla no válidos no se pueden redimensionar fuera de la hoja\".",
    "Exp_ArrayFormulaTable": "No se permiten fórmulas de matriz de varias celdas en las tablas\".",
    "Exp_TableResizeInvalidRange": "Los encabezados deben permanecer en la misma fila y el rango de la tabla resultante debe superponerse al rango de la tabla original\".",
    "Exp_TableResizeToSpan": "No se puede completar la operación: una tabla no puede superponerse con otra tabla o celdas fusionadas\".",
    "Exp_TableResizeWithFilter": "No se pueden desplazar celdas en un rango o tabla filtrados\".",
    "Exp_TableResizeWithHidden": "No se puede cambiar el tamaño de una tabla que está adyacente a una fila o columna oculta\".",
    "Exp_TableResizeToTable": "No se puede completar la operación: no se permiten operaciones que incluyan celdas tanto dentro como fuera de un rango de tabla, ni operaciones que afecten celdas que se superpongan a varias tablas\".",
    "Exp_RowParamOutOfRange": "La fila de parámetros está fuera del rango de datos de la tabla\".",
    "Exp_ColParamOutOfRange": "El parámetro col está fuera del rango de datos de la tabla\".",
    "Exp_TableDeleteCountInvalid": "El número de parámetros a eliminar provocará que la tabla quede vacía\".",
    "Exp_TableAddRowIntersectSpan": "Esto no funcionará porque movería celdas en un lapso en su hoja de cálculo\".",
    "Exp_TableAddRowIntersectTable": "Esto no funcionará porque movería celdas en una tabla en su hoja de cálculo\".",
    "Exp_TableAddRowNoEnoughRoom": "No se pueden insertar celdas nuevas porque se desplazarían celdas no vacías al final de la hoja de cálculo. Estas celdas pueden aparecer vacías, pero tienen valores en blanco, algún formato o una fórmula. Elimine suficientes filas o columnas para hacer espacio para lo que desea insertar y vuelva a intentarlo\".",
    "Table_Total": "Total",
    "Table_None": "Ninguno",
    "Table_Average": "Promedio",
    "Table_Count": "Contar",
    "Table_Count_Numbers": "Contar números",
    "Table_Max": "Máximo",
    "Table_Min": "Mínimo",
    "Table_Sum": "Suma",
    "Table_StdDev": "Desviación estándar",
    "Table_Var": "Var"
  },
  "Fill": {
    "CopyCells": "Copiar celdas",
    "FillSeries": "Serie de relleno",
    "FillFormattingOnly": "Rellenar solo formato",
    "FillWithoutFormatting": "Rellenar sin formato",
    "Exp_NumberOnly": "Solo funciona para números",
    "Exp_RangeContainsMergedCell": "El rango no debería tener celdas fusionadas\".",
    "Exp_TargetContainsMergedCells": "El rango objetivo no debería tener celdas fusionadas\".",
    "Exp_MergedCellsIdentical": "Esta operación requiere que las celdas fusionadas tengan el mismo tamaño\".",
    "Exp_FillRangeContainsMergedCell": "No se puede rellenar el rango que contiene una celda fusionada\".",
    "Exp_FillCellsReadOnly": "Las celdas que estás intentando rellenar están protegidas y, por lo tanto, son de sólo lectura\".",
    "Exp_ChangeMergedCell": "No se puede cambiar parte de la celda fusionada\".",
    "Exp_ColumnReadOnly": "La columna que intenta cambiar está protegida y, por lo tanto, es de sólo lectura\".",
    "Exp_RowReadOnly": "La fila que intenta cambiar está protegida y, por lo tanto, es de solo lectura\".",
    "Exp_CellReadOnly": "La celda que estás intentando cambiar está protegida y, por lo tanto, es de sólo lectura\".",
    "Exp_RangeIsNull": "el rango es nulo",
    "Exp_ChangePartOfArray": "No se puede cambiar parte de una matriz\"."
  },
  "GanttSheet": {
    "GANTT_MONTH": "Mes",
    "GANTT_WEEK": "Semana",
    "GANTT_DAY": "Día",
    "GANTT_HOUR": "Hora",
    "GANTT_MINUTE": "Minuto",
    "GANTT_NEW_TASK": "<Nueva tarea>",
    "GANTT_NEW_SUMMARY_TASK": "<Nueva tarea de resumen>",
    "GANTT_NEW_MILESTONE": "<Nuevo hito>",
    "GANTT_TASK_NUMBER": "Número de tarea",
    "GANTT_TASK_NAME": "Nombre de la tarea",
    "GANTT_MILESTONE": "Hito",
    "GANTT_MODE": "Modo",
    "GANTT_DURATION": "Duración",
    "GANTT_START": "Comenzar",
    "GANTT_FINISH": "Finalizar",
    "GANTT_START_DISPLAYED": "Inicio de visualización",
    "GANTT_FINISH_DISPLAYED": "FinalizadoMostrado",
    "GANTT_PREDECESSORS": "Antecesores",
    "GANTT_SUCCESSORS": "Sucesores",
    "GANTT_COMPLETE": "% Completo",
    "GANTT_COMPLETE_CHANGE": "Completar hasta el final",
    "GANTT_TASK_SCHEDULE_MODE_MANUALLY": "Manual",
    "GANTT_TASK_SCHEDULE_MODE_AUTO": "Auto",
    "GANTT_INVALID_OPERATION": "Operación inválida",
    "GANTT_INVALID_LEVEL": "Nivel inválido",
    "GANTT_INVALID_ID": "ID inválido",
    "GANTT_INVALID_ROW_INDEX": "Índice de fila inválido",
    "GANTT_INVALID_INDEX": "índice inválido",
    "GANTT_INVALID_COUNT": "conteo inválido",
    "GANTT_INVALID_TASK": "Tarea inválida",
    "GANTT_INVALID_DEPENDENCY": "Dependencia inválida",
    "GANTT_INVALID_UNIT": "Unidad inválida",
    "GANTT_INVALID_WORK_DAYS": "DíasLaboralesInválidos",
    "GANTT_INVALID_TASK_ID": "ID de tarea no válida",
    "GANTT_INVALID_TASK_PARENT_ID": "ID de padre de tarea no válida",
    "GANTT_INVALID_TASK_LEVEL": "Nivel de tarea no válido",
    "GANTT_INVALID_FIELD": "Campo inválido",
    "GANTT_INVALID_ASCENDING_STATES": "estados ascendentes no válidos",
    "GANTT_VALUE_INVALID": "valor no válido",
    "GANTT_VALUE_READONLY": "valor de solo lectura",
    "DEFAULT_DATE_TIME_FORMAT": "aa-mm-dd h:mm",
    "GANTT_ACTION_TASK": "Tarea",
    "GANTT_ACTION_TASK_COLON": "Tarea:",
    "GANTT_ACTION_START": "Comenzar:",
    "GANTT_ACTION_FINISH": "Finalizar:",
    "GANTT_ACTION_TASK_START": "Inicio de la tarea:",
    "GANTT_ACTION_TASK_FINISH": "Tarea finalizada:",
    "GANTT_ACTION_START_LINK": "Comenzar",
    "GANTT_ACTION_FINISH_LINK": "Finalizar",
    "GANTT_ACTION_FROM_OF": "De {0} de:",
    "GANTT_ACTION_TO_OF": "Para {0} de:",
    "GANTT_ACTION_START_ONLY": "Solo inicio",
    "GANTT_ACTION_FINISH_ONLY": "Solo terminar",
    "GANTT_ACTION_DURATION": "Duración:",
    "GANTT_ACTION_COMPLETE_THROUGH": "Completar a través de:",
    "GANTT_ACTION_LINE_TIP_TITLE": "Enlace de {0} a {1}",
    "GANTT_TASK_BAR_TASK_LINK": "Enlace de tarea:",
    "GANTT_TASK_BAR_FROM": "De:",
    "GANTT_TASK_BAR_TO": "A:",
    "GANTT_TASK_BAR_FS": "De fin a comienzo (FS)",
    "GANTT_TASK_BAR_FF": "De fin a fin (FF)",
    "GANTT_TASK_BAR_SF": "De principio a fin (SF)",
    "GANTT_TASK_BAR_SS": "De inicio a inicio (SS)",
    "GANTT_TASK_BAR_UNNAMED": "Sin nombre",
    "GANTT_TASK_BAR_COMPLETE_THROUGH": "Completar hasta:",
    "GANTT_TASK_BAR_COMPLETE": "% Completo:",
    "GANTT_CALENDAR_STANDARD": "Estándar",
    "GANTT_CALENDAR_NIGHT_SHIFT": "Turno de noche",
    "GANTT_CALENDAR_24HOURS": "24 horas",
    "GANTT_CALENDAR_MINUTE": "Minuto",
    "GANTT_CALENDAR_MINUTE_NAMES": [
      "metro",
      "mínimo",
      "minuto"
    ],
    "GANTT_CALENDAR_HOUR": "Hora",
    "GANTT_CALENDAR_HOUR_NAMES": [
      "o",
      "hora",
      "hora"
    ],
    "GANTT_CALENDAR_DAY": "Día",
    "GANTT_CALENDAR_DAY_NAMES": [
      "d",
      "morir",
      "día"
    ],
    "GANTT_CALENDAR_WEEK": "Semana",
    "GANTT_CALENDAR_WEEK_NAMES": [
      "w",
      "semana",
      "semana"
    ],
    "GANTT_CALENDAR_MONTH": "Mes",
    "GANTT_CALENDAR_MONTH_NAMES": [
      "mes",
      "lun",
      "mes"
    ],
    "GANTT_CALENDAR_UNIT_LABELS": [
      "mínimo",
      "hora",
      "día",
      "semana",
      "lun",
      "año"
    ],
    "GANTT_CALENDAR_UNIT_LABELS_PLURALS": [
      "minutos",
      "horas",
      "días",
      "semanas",
      "Mons",
      "años"
    ],
    "wmk1": "47616e74745368656574",
    "wmk2": "47616e74745368656574"
  },
  "OutlineColumn": {
    "Exp_GROUP_PROTECTED": "No puede utilizar este comando en una hoja protegida. Para utilizar este comando, primero debe desproteger la hoja\"."
  },
  "StatusBar": {
    "cellMode": "Modo celular",
    "cellModeReady": "Listo",
    "cellModeEnter": "Ingresar",
    "cellModeEdit": "Editar",
    "inCalculation": "Calculando: {0}",
    "iterateCalculation": "Calculando iterador: {0}",
    "formulaAverage": "Promedio",
    "formulaCount": "Contar",
    "formulaNumericalCount": "Conteo numérico",
    "formulaMin": "Mínimo",
    "formulaMax": "Máximo",
    "formulaSum": "Suma",
    "zoomSlider": "Control deslizante de zoom",
    "zoom": "Zoom",
    "toolTipCellMode": "En modo {0}",
    "toolTipFormulaAverage": "Promedio de celdas seleccionadas",
    "toolTipFormulaCount": "Número de celdas seleccionadas que contienen datos",
    "toolTipFormulaNumericalCount": "Número de celdas seleccionadas que contienen datos numéricos",
    "toolTipFormulaMin": "“Valor mínimo en la selección”",
    "toolTipFormulaMax": "“Valor máximo en la selección”",
    "toolTipFormulaSum": "Suma de celdas seleccionadas",
    "toolTipZoomOut": "Alejar",
    "toolTipZoomIn": "Dar un golpe de zoom",
    "toolTipSlider": "Zoom",
    "toolTipZoomPanel": "Nivel de zoom",
    "progressItem": "Progreso"
  },
  "AutoMerge": {
    "Exp_RangeIsIntersected": "El rango no debe cruzarse con rangos existentes\"."
  },
  "NameBox": {
    "invalidName": "Debe ingresar una referencia válida a la que desee acceder o escribir un nombre válido para la selección\".",
    "nameBox": "Cuadro de nombre"
  },
  "Component": {
    "Calendar_BuiltIn_Last7Days": "Los últimos 7 días",
    "Calendar_BuiltIn_LastMonth": "Mes pasado",
    "Calendar_BuiltIn_ThisMonth": "Este mes",
    "Calendar_BuiltIn_Today": "Hoy",
    "Calendar_BuiltIn_Yesterday": "Ayer",
    "Calendar_EraName_1": "METRO",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_LastMonth": "Ir al mes anterior",
    "Calendar_LastTenYear": "Ir a los diez años anteriores",
    "Calendar_LastYear": "Ir al año anterior",
    "Calendar_Months_1": "ENERO",
    "Calendar_Months_10": "OCTUBRE",
    "Calendar_Months_11": "NOVIEMBRE",
    "Calendar_Months_12": "DICIEMBRE",
    "Calendar_Months_2": "FEBRERO",
    "Calendar_Months_3": "MARZO",
    "Calendar_Months_4": "ABRIL",
    "Calendar_Months_5": "PUEDE",
    "Calendar_Months_6": "JUNIO",
    "Calendar_Months_7": "JULIO",
    "Calendar_Months_8": "AGOSTO",
    "Calendar_Months_9": "SEPTIEMBRE",
    "Calendar_NextMonth": "Ir al próximo mes",
    "Calendar_NextTenYear": "Ir a los próximos diez años",
    "Calendar_NextYear": "Ir al próximo año",
    "Calendar_ShortMonths_1": "ENE",
    "Calendar_ShortMonths_10": "OCT",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DIC",
    "Calendar_ShortMonths_2": "FEB",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "ABR",
    "Calendar_ShortMonths_5": "PUEDE",
    "Calendar_ShortMonths_6": "JUN",
    "Calendar_ShortMonths_7": "JUL",
    "Calendar_ShortMonths_8": "AGO",
    "Calendar_ShortMonths_9": "SEP",
    "Calendar_ShortWeeks_1": "LUN",
    "Calendar_ShortWeeks_2": "MAR",
    "Calendar_ShortWeeks_3": "CASARSE",
    "Calendar_ShortWeeks_4": "JUE",
    "Calendar_ShortWeeks_5": "VIE",
    "Calendar_ShortWeeks_6": "SE SENTÓ",
    "Calendar_ShortWeeks_7": "SOL",
    "Calendar_Time_AM": "SOY",
    "Calendar_Time_PM": "P.M",
    "Calendar_Today": "Hoy",
    "Calendar_Weeks_1": "Lunes",
    "Calendar_Weeks_2": "Martes",
    "Calendar_Weeks_3": "Miércoles",
    "Calendar_Weeks_4": "Jueves",
    "Calendar_Weeks_5": "Viernes",
    "Calendar_Weeks_6": "Sábado",
    "Calendar_Weeks_7": "Domingo",
    "Cancel": "Cancelar",
    "Empty": "vacío",
    "NoColor": "Sin color",
    "OK": "DE ACUERDO"
  },
  "InputMask": {
    "errorMsg": {
      "invalidPattern": "Patrón no válido",
      "duplicatedDateTimePattern": "Patrón de fecha y hora duplicado",
      "emptyPattern": "Patrón vacío",
      "unknownPattern": "Error al analizar patrón desconocido",
      "invalidOptionalPattern": "Error al analizar patrón opcional",
      "invalidGroupPattern": "Error en el patrón de grupo de análisis",
      "errorQuantifierPattern": "Posición del cuantificador de errores",
      "invalidQuantifierPattern": "Fallo en el patrón del cuantificador de análisis",
      "noEntry": "No se puede introducir ninguna restricción"
    },
    "hourFormatSingleDesignator": [
      "A",
      "PAG"
    ],
    "hourFormatDesignator": [
      "SOY",
      "P.M"
    ]
  },
  "Print": {
    "Exp_InvalidSheetIndex": "Índice de hoja no válido."
  },
  "PDF": {
    "Exp_FileIOError": "Excepción de lectura y escritura de archivo\".",
    "Exp_FontError": "No es un formato de fuente compatible ni una fuente PDF estándar\"."
  },
  "Shapes": {
    "Exp_InvalidConnectionSite": "Sitio de conexión no válido.",
    "Exp_DuplicatedName": "Nombre duplicado.",
    "Exp_EmptyName": "Nombre vacío.",
    "Exp_InvalidRange": "Rango no válido"
  },
  "Charts": {
    "period": "período",
    "movingAverage": "Media móvil",
    "exponential": "Exponencial",
    "linear": "Lineal",
    "logarithmic": "Logarítmico",
    "polynomial": "Polinomio",
    "power": "Fuerza",
    "unsupportedChartType": "Tipo de gráfico no compatible",
    "SERIES": "Serie",
    "VALUE": "Valor: ",
    "POINT": "Punto ",
    "SIZE": "Tamaño: ",
    "INCREASE": "Aumentar",
    "DECREASE": "Disminuir",
    "TOTAL": "Total",
    "ChartTitle": "Título del gráfico",
    "Branch": "Rama",
    "AxisTitle": "Título del eje"
  },
  "Slicer": {
    "Blank": "(blanco)",
    "Exp_SlicerNameInvalid": "El nombre de la cortadora no es válido.",
    "Exp_SlicerNameExist": "El nombre de la segmentación de datos ya está en uso; ingrese un nombre único\".",
    "SlicerNameInFormula": "Cortador"
  },
  "formulaEditor": {
    "NO_MATH_PARENTHESES": "No hay paréntesis coincidentes",
    "MISS_RIGHT_PARENTHESES": "Se espera \"')\".",
    "MISS_LET_FUNCTION_BODY": "Falta el cuerpo de la expresión LET\".",
    "UNKNOWN_NAME": "Nombre desconocido",
    "UNKNOWN_SHEET": "Hoja desconocida \\\"$1\\",
    "NO_MATCHED_ARGUMENTS": "Esperaba argumentos de $1, pero obtuve $2",
    "INVALID_IDENTIFIER_ARGUMENT": "Este argumento debe ser un identificador a enlazar.",
    "DUPLICATE_IDENTIFIER": "Identificador duplicado $1",
    "INVALID_EXPRESSION": "EXPRESION inválida",
    "INVALID_FORMULA": "Fórmula no válida",
    "FORMULA": "Fórmula"
  },
  "PivotEngine": {
    "dateResource": {
      "Jan": "Ene",
      "Feb": "Feb",
      "Mar": "Mar",
      "Apr": "Abr",
      "May": "Puede",
      "Jun": "Jun",
      "Jul": "Jul",
      "Aug": "Ago",
      "Sep": "Sep",
      "Oct": "Oct",
      "Nov": "Nov",
      "Dec": "Dic",
      "Qtr1": "Trimestre 1",
      "Qtr2": "Segundo trimestre",
      "Qtr3": "Tercer trimestre",
      "Qtr4": "Cuarto trimestre",
      "Seconds": "Artículos de segunda clase",
      "Minutes": "Minutos",
      "Hours": "Horas",
      "Days": "Días",
      "Months": "Meses",
      "Quarters": "Cuarteles",
      "Years": "Años",
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
    "Exp_NoItemParseError": "No se puede encontrar el nombre de un elemento. Verifique que haya escrito el nombre correctamente y que el elemento esté presente en el informe de tabla dinámica\".",
    "Exp_UnsupportedCalcItemType": "Las fórmulas de tabla dinámica no admiten referencias, nombres ni matrices\".",
    "blank": "(blanco)"
  },
  "PivotTables": {
    "RepeatName": "Repetir nombre",
    "NotExist": "No existe",
    "SubtotalType_Prefix_0": "Promedio de",
    "SubtotalType_Prefix_1": "Conde de",
    "SubtotalType_Prefix_2": "CuentaNums de ",
    "SubtotalType_Prefix_3": "Máximo de",
    "SubtotalType_Prefix_4": "Min de ",
    "SubtotalType_Prefix_5": "Producto de",
    "SubtotalType_Prefix_6": "Desviación estándar de ",
    "SubtotalType_Prefix_7": "Desviación estándar de ",
    "SubtotalType_Prefix_8": "Suma de",
    "SubtotalType_Prefix_9": "Var de",
    "SubtotalType_Prefix_10": "Varp de",
    "ColumnLabels": "Etiquetas de columnas",
    "Total": "{0} Total{1}",
    "All": "Todo",
    "MultipleItems": "Varios elementos",
    "RowLabels": "Etiquetas de fila",
    "GrandTotal": "Gran total",
    "Values": "Valores",
    "PivotPanel_Title": "Campos de tabla dinámica",
    "PivotPanel_ReportText": "Seleccione los campos que desea agregar al informe",
    "PivotPanel_SearchPlaceholder": "Buscar",
    "PivotPanel_FieldAreaText": "Arrastre los campos entre las áreas siguientes:",
    "PivotPanel_FiltersItemsTitle": "Filtros",
    "PivotPanel_RowsItemsTitle": "Filas",
    "PivotPanel_ColumnsItemsTitle": "Columnas",
    "PivotPanel_ValuesItemsTitle": "Valores",
    "PivotPanel_DeferUpdateText": "Aplazar actualización de diseño",
    "EmptyPivotTable_PromptMessage1": "Haga clic en esta área para trabajar con el informe de tabla dinámica",
    "EmptyPivotTable_PromptMessage2": "Activar la lista de campos de la tabla dinámica para trabajar con la tabla dinámica",
    "PivotPanel_Update": "Actualizar",
    "PivotPanel_DropDownList_Up": "Subir",
    "PivotPanel_DropDownList_Down": "Mover hacia abajo",
    "PivotPanel_DropDownList_Beginning": "Pasar al principio",
    "PivotPanel_DropDownList_End": "Mover al final",
    "PivotPanel_DropDownList_ReportFilter": "Mover al filtro de informes",
    "PivotPanel_DropDownList_Row": "Mover a etiquetas de fila",
    "PivotPanel_DropDownList_Col": "Mover a etiquetas de columnas",
    "PivotPanel_DropDownList_Values": "Pasar a los valores",
    "PivotPanel_DropDownList_Remove": "Quitar campo",
    "PivotPanel_DropDownList_Set": "Configuración de campo...",
    "PivotPanel_DropDownList_ValueSet": "Configuración del campo de valor...",
    "PivotPanel_Fields_MoveTo_ReportField": "Añadir al filtro del informe",
    "PivotPanel_Fields_MoveTo_RowLabel": "Agregar a las etiquetas de fila",
    "PivotPanel_Fields_MoveTo_ColLabel": "Agregar a etiquetas de columnas",
    "PivotPanel_Fields_MoveTo_Value": "Añadir valores",
    "PivotPanel_LabelOrValue_ClearFilter": "Borrar filtro",
    "PivotPanel_ValueFilterOrLabel_Equals": "Es igual a...",
    "PivotPanel_ValueFilterOrLabel_NotEqual": "No es igual a...",
    "PivotPanel_ValueFilterOrLabel_GreaterThan": "Más que...",
    "PivotPanel_ValueFilterOrLabel_GreaterOrTo": "Mayor o igual a...",
    "PivotPanel_ValueFilterOrLabel_LessThan": "Menos que...",
    "PivotPanel_ValueFilterOrLabel_LessOrTo": "Menor o igual a...",
    "PivotPanel_ValueFilterOrLabel_Between": "Entre...",
    "PivotPanel_ValueFilterOrLabel_NotBetween": "No entre...",
    "PivotPanel_ValueFilter_Top10": "Los 10 mejores...",
    "PivotPanel_ValueFilterOrLabel_IsBeginWith": "Comienza con...",
    "PivotPanel_ValueFilterOrLabel_NotBegin": "No comienza con...",
    "PivotPanel_ValueFilterOrLabel_End": "Termina con...",
    "PivotPanel_ValueFilterOrLabel_NotEndWith": "No termina con...",
    "PivotPanel_ValueFilterOrLabel_Contain": "Contiene...",
    "PivotPanel_ValueFilterOrLabel_NotContain": "No contiene...",
    "ValueFilterOrLabel_Equals": "es igual a",
    "ValueFilterOrLabel_NotEqual": "no es igual a",
    "ValueFilterOrLabel_GreaterThan": "más que",
    "ValueFilterOrLabel_GreaterOrTo": "mayor que o igual a",
    "ValueFilterOrLabel_LessThan": "menos que",
    "ValueFilterOrLabel_LessOrTo": "menor o igual a",
    "ValueFilterOrLabel_Between": "entre",
    "ValueFilterOrLabel_NotBetween": "no entre",
    "ValueFilterOrLabelSelect_GreaterThan": "es mayor que",
    "ValueFilterOrLabelSelect_GreaterOrTo": "es mayor o igual que",
    "ValueFilterOrLabelSelect_LessThan": "es menor que",
    "ValueFilterOrLabelSelect_LessOrTo": "es menor o igual a",
    "ValueFilterOrLabelSelect_Between": "está entre",
    "ValueFilterOrLabelSelect_NotBetween": "no está entre",
    "ValueFilterOrLabel_IsBeginWith": "comienza con",
    "ValueFilterOrLabel_NotBegin": "no comienza con",
    "ValueFilterOrLabel_End": "termina con",
    "ValueFilterOrLabel_NotEndWith": "no termina con",
    "ValueFilterOrLabel_Contain": "contiene",
    "ValueFilterOrLabel_NotContain": "no contiene",
    "PivotPanel_ValueFilterOrLabel_Before": "Antes...",
    "PivotPanel_ValueFilterOrLabel_After": "Después...",
    "PivotPanel_ValueFilterOrLabel_Tomorrow": "Mañana",
    "PivotPanel_ValueFilterOrLabel_Today": "Hoy",
    "PivotPanel_ValueFilterOrLabel_Yesterday": "Ayer",
    "PivotPanel_ValueFilterOrLabel_NextWeek": "La próxima semana",
    "PivotPanel_ValueFilterOrLabel_ThisWeek": "Esta semana",
    "PivotPanel_ValueFilterOrLabel_LastWeek": "La semana pasada",
    "PivotPanel_ValueFilterOrLabel_NextMonth": "Mes próximo",
    "PivotPanel_ValueFilterOrLabel_ThisMonth": "Este mes",
    "PivotPanel_ValueFilterOrLabel_LastMonth": "Mes pasado",
    "PivotPanel_ValueFilterOrLabel_NextQuarter": "El próximo trimestre",
    "PivotPanel_ValueFilterOrLabel_ThisQuarter": "Este trimestre",
    "PivotPanel_ValueFilterOrLabel_LastQuarter": "El último cuarto",
    "PivotPanel_ValueFilterOrLabel_NextYear": "Al año que viene",
    "PivotPanel_ValueFilterOrLabel_ThisYear": "Este año",
    "PivotPanel_ValueFilterOrLabel_LastYear": "El año pasado",
    "PivotPanel_ValueFilterOrLabel_YearToDate": "El año hasta la fecha",
    "PivotPanel_ValueFilterOrLabel_MonthToDate": "Mes hasta la fecha",
    "PivotPanel_ValueFilterOrLabel_QuarterToDate": "Trimestre hasta la fecha",
    "PivotPanel_ValueFilterOrLabel_ParallelYearToDate": "Un año paralelo hasta la fecha",
    "PivotPanel_ValueFilterOrLabel_ParallelMonthToDate": "Mes paralelo hasta la fecha",
    "PivotPanel_ValueFilterOrLabel_ParallelQuarterToDate": "Trimestre paralelo hasta la fecha",
    "PivotPanel_ValueFilterOrLabel_AllDates": "Todas las fechas del período",
    "PivotPanel_ValueFilterOrLabel_Custom": "Filtro personalizado...",
    "PivotPanel_Sort_A_Z": "Ordenar de A a Z",
    "PivotPanel_Sort_Z_A": "Ordenar de Z a A",
    "PivotPanel_Sort_Smallest_Largest": "Ordenar del más pequeño al más grande",
    "PivotPanel_Sort_Largest_Smallest": "Ordenar de mayor a menor",
    "PivotPanel_Sort_More": "Más opciones de clasificación...",
    "PivotPanel_Filter_Clear": "Borrar filtro de {0}",
    "PivotPanel_Filter_Label": "Filtros de etiquetas",
    "PivotPanel_Filter_Value": "Filtros de valores",
    "PivotPanel_Date_Filter": "Filtros de fecha",
    "Ok": "DE ACUERDO",
    "Cancel": "Cancelar",
    "NumberFormat": "Formato de número",
    "LabelFormat": "Formato de etiqueta",
    "Number": "Número",
    "FormatCells": "Formato de celdas",
    "Sample": "Muestra",
    "Type": "Tipo",
    "CustomFormats": [
      "General",
      "0",
      "0,00",
      "#,##0",
      "#,##0.00",
      "#,##0;(#,##0)",
      "#,##0;[Rojo](#,##0)",
      "#,##0.00;(#,##0.00)",
      "#,##0.00;[Rojo](#,##0.00)",
      "$#,##0;($#,##0)",
      "$#,##0;[Rojo]($#,##0)",
      "$#,##0.00;($#,##0.00)",
      "$#,##0.00;[Rojo]($#,##0.00)",
      "0%",
      "0,00%",
      "0,00E+00",
      "##0.0E+0",
      "# ?/?",
      "# ??/??",
      "m/d/aaaa",
      "Mmmmmmm",
      "Mmmm",
      "mmm-aa",
      "h:mm AM/PM",
      "h:mm:ss AM/PM",
      "mmmm",
      "hh:mm:ss",
      "m/d/aaaa hh:mm",
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
      "dddd, mmmm dd, yyyy",
      "Maryland;@",
      "[<=9999999]###-####;(###) ###-####",
      "# ?/8"
    ],
    "Select_Field": "Seleccionar campo",
    "PivotPanel_Filter_SelectAll": "Marcar todo",
    "PivotPanel_Filter_NoSelectAll": "Desmarcar todo",
    "PivotPanel_Filter_Search": "buscar",
    "Label_Title": "Filtro de etiquetas",
    "Label_Show": "Mostrar elementos para los que aparece la etiqueta",
    "Use_Single_Character": "Utilice ? para representar cualquier carácter individual",
    "Use_Series_Characters": "Utilice * para representar cualquier personaje de la serie",
    "Value_Show": "Mostrar elementos para los cuales",
    "Value_Title": "Filtro de valor",
    "Top_Ten_Filter": "Los 10 mejores filtros",
    "TopTenShow": "espectáculo",
    "Sort_Field_Dialog_Title": "Clasificar",
    "Sort_Field_Dialog_Sort_Options": "Opciones de ordenación",
    "Sort_Field_Dialog_Summary": "Resumen",
    "Sort_Field_Dialog_Ascending_Sort": "Ascendente (A a Z) por:",
    "Sort_Field_Dialog_Descending_Sort": "Descendiendo (Z a A) por:",
    "Sort_Field_Dialog_More_Options": "Más opciones...",
    "Sort_Field_More_Dialog_Title": "Más opciones de clasificación",
    "Sort_Field_More_Dialog_Sort_By": "Ordenar por",
    "Sort_Field_More_Dialog_Values_In_Selected_Area": "Valores en {{AREA}} seleccionado",
    "Sort_Value_Dialog_Title": "Ordenar por valor",
    "Sort_Value_Dialog_Sort_Direction": "Dirección de ordenación",
    "Sort_Value_Dialog_Asc": "Del más pequeño al más grande",
    "Sort_Value_Dialog_Desc": "Del más grande al más pequeño",
    "Sort_Value_Dialog_Top_To_Bottom": "De arriba a abajo",
    "Sort_Value_Dialog_Left_To_Right": "De izquierda a derecha",
    "Custom_Sort_Summary": "Ordenación personalizada",
    "Sort_Order_ASC": "orden ascendente",
    "Sort_Order_DESC": "orden descendente",
    "Sort_In_Row": "fila",
    "Sort_In_Column": "columna",
    "Sort_Summary_Pattern": "Ordenar {{FIELD_NAME}} en {{ORDER}}",
    "Sort_Value_Summary_Pattern": "Ordenar {{FIELD_NAME}} por {{SELECTED_FIELD_NAME}} en {{ORDER}}",
    "Sort_More_Summary_Pattern": "Ordenar {{FIELD_NAME}} por {{SELECTED_FIELD_NAME}} en {{ORDER}} usando valores en esta {{ROW_COLUMN}}:\\r\\n",
    "Invalid_Sort_Range": "La referencia de ordenación no es válida. Asegúrese de que se encuentre dentro de los datos que desea ordenar y que el primer cuadro Ordenar por no sea el mismo o esté en blanco\".",
    "Invalid_Field_Sort_By": "No se puede determinar por qué campo de tabla dinámica ordenar\".",
    "Top": "Arriba",
    "Bottom": "Abajo",
    "Top_Item": "Elementos",
    "Top_Percent": "Por ciento",
    "Top_Sum": "Suma",
    "ByJoiner": "por",
    "AndJoiner": "y",
    "Q1": "Primer trimestre",
    "Q2": "Cuarto 2",
    "Q3": "Cuarto 3",
    "Q4": "Cuarto trimestre",
    "Jan": "Enero",
    "Feb": "Febrero",
    "Mar": "Marzo",
    "Apr": "Abril",
    "May": "Puede",
    "Jun": "Junio",
    "Jul": "Julio",
    "Aug": "Agosto",
    "Sep": "Septiembre",
    "Oct": "Octubre",
    "Nov": "Noviembre",
    "Dec": "Diciembre",
    "IsBefore": "es antes",
    "IsBeforeOrEqual": "es anterior o igual a",
    "IsAfter": "es despues",
    "IsAfterOrEqual": "es posterior o igual a",
    "IsBetween": "está entre",
    "IsNotBetween": "no está entre",
    "DateFilterTitle": "Filtro de fecha",
    "DateShow": "Mostrar elementos cuya fecha",
    "WholeDays": "Días enteros",
    "FieldSetting": "Configuración de campo",
    "ValueSetting": "Configuración del campo de valor",
    "SourceName": "Nombre de la fuente:",
    "CustomName": "Nombre personalizado:",
    "SummarizeValue": "Resumir valores por",
    "ShowValueAs": "Mostrar valor como",
    "CalculationForDialog": "Cálculo: ",
    "BaseFieldForDialog": "Campo base: ",
    "BaseItemForDialog": "Artículo base: ",
    "BaseItemNext": "(próximo)",
    "BaseItemPrevious": "(anterior)",
    "SummarizeValueField": "Resumir el campo de valores por",
    "ShowValueAsField": "Mostrar valor como",
    "ChooseType": "Elija el tipo de cálculo que desea utilizar para resumir los datos del campo seleccionado",
    "Sum": "Suma",
    "Count": "Contar",
    "Average": "Promedio",
    "Max": "Máximo",
    "Min": "Mínimo",
    "Product": "Producto",
    "CountNumbers": "Contar números",
    "StdDev": "Desviación estándar",
    "StdDevp": "Desvp estándar",
    "Var": "Var",
    "Varp": "Varpa",
    "sigmaValue": "Valores ∑",
    "sigmaValueTemp": "Valores",
    "DateFormatError": "Esta no es una fecha válida",
    "noCalculation": "Sin cálculo",
    "percentGrandTotal": "% del total general",
    "percentColumnTotal": "% del total de la columna",
    "percentRowTotal": "% del total de filas",
    "percentEllipsis": "% De ...",
    "percentParentRowTotal": "% del total de la fila principal",
    "percentParentColumnTotal": "% del total de la columna principal",
    "percentParentTotal": "% del total de los padres ...",
    "difference": "Diferencia de...",
    "percentDifference": "% Diferencia de ...",
    "runningTotal": "Total acumulado en ...",
    "percentRunningTotal": "% Total acumulado en ...",
    "rankSmallestLargest": "Clasificar del menor al mayor...",
    "rankLargestSmallest": "Clasificar del mayor al menor...",
    "index": "Índice",
    "showValueAsDialog": [
      "",
      "",
      "",
      "",
      "% De ",
      "",
      "",
      "% del total de los padres",
      "Diferencia de",
      "% de diferencia con respecto a",
      "Total acumulado en",
      "% Total acumulado en",
      "Clasificar del menor al mayor",
      "Clasificar del mayor al menor",
      ""
    ],
    "baseField": "Campo base:",
    "baseItem": "Artículo base:",
    "grouping": "Agrupamiento",
    "auto": "Auto",
    "startingAt": "A partir de:",
    "endingAt": "Terminando en:",
    "groupBy": "Por:",
    "seconds": "Artículos de segunda clase",
    "minutes": "Minutos",
    "hours": "Horas",
    "days": "Días",
    "months": "Meses",
    "quarters": "Cuarteles",
    "years": "Años",
    "numberOfDays": "Número de días",
    "NoHaveSpread": "excepción del libro de trabajo",
    "SourceError": "Excepción de datos de origen, no se puede crear un informe de tabla dinámica",
    "SourceNotIsTableNameOrFormula": "Los datos de origen no son el nombre de la tabla ni la fórmula",
    "SourceDataOnlyOne": "Este comando requiere al menos dos filas de datos de origen. No puede utilizar el comando en una selección de una sola fila",
    "FieldAreaLimited": "El campo que está moviendo no se puede colocar en esa área del informe\".",
    "Views": "Vistas",
    "Group": "Grupo",
    "param_error": "el parámetro es nulo o indefinido",
    "EmptyValueFieldError": "Necesita al menos un campo en el área Valores para poder aplicar un filtro de valores",
    "DefaultPivotTableViewName": "Vista dinámica",
    "toolTipContent_Row": "Fila: ",
    "toolTipContent_Column": "Columna: ",
    "toolTipContent_Value": "Valor: ",
    "toolTipContent_NoValue": "Sin valor",
    "deferLayoutUpdate": "Aplazar actualización de diseño",
    "getStringLabelFilterItemText": "",
    "getDateLabelFilterItemText": "",
    "getValueFilterItemText": "",
    "PivotTableErrorMessage_ShowDetail": "No se pueden mostrar ni ocultar los detalles de esta selección",
    "PivotTableErrorMessage_MakeChange": "No podemos realizar este cambio en las celdas seleccionadas porque afectará a una tabla dinámica. Utilice la lista de campos para cambiar el informe. Si está intentando insertar o eliminar celdas, mueva la tabla dinámica e inténtelo nuevamente\".",
    "PivotTableErrorMessage_ExistData": "Ya hay datos en {}. ¿Quieres reemplazarlos?",
    "PivotTableErrorMessage_EditWhenDefer": "El informe de tabla dinámica no se puede editar con la casilla de verificación Aplazar actualización de diseño seleccionada. Para editar el informe, desmarque la casilla de verificación Aplazar actualización de diseño en la parte inferior de la Lista de campos de la tabla dinámica\".",
    "PivotTableErrorMessage_DuplicatedFieldName": "El nombre del campo de tabla dinámica ya existe\".",
    "PivotTableErrorMessage_EmptyFieldName": "No se puede ingresar un valor nulo como nombre de elemento o campo en un informe de tabla dinámica\".",
    "PivotTableErrorMessage_Protect": "Ese comando no se puede ejecutar mientras una hoja protegida contenga otro informe de tabla dinámica basado en los mismos datos de origen. Para quitar la protección de la hoja que contiene el otro informe, haga clic en la pestaña de la hoja y, a continuación, haga clic en Desproteger hoja (pestaña Revisar, grupo Cambios). A continuación, vuelva a intentar ejecutar el comando\".",
    "PivotTableErrorMessage_EmptySourceFieldName": "El nombre del campo de la tabla dinámica no es válido. Para crear un informe de tabla dinámica, debe utilizar datos organizados como una lista con columnas etiquetadas. Si va a cambiar el nombre de un campo de la tabla dinámica, debe escribir un nuevo nombre para el campo\".",
    "PivotTableErrorMessage_Overlap": "Un informe de tabla dinámica no puede superponerse a otro informe de tabla dinámica\".",
    "PivotTableErrorMessage_InvalidChange": "No podemos cambiar esta parte de la tabla dinámica\".",
    "PivotTableErrorMessage_InvalidGroup": "No se puede agrupar esa selección\".",
    "PivotTableErrorMessage_InvalidReference": "La referencia no es válida.",
    "PivotTableForAccessibility": "Tabla dinámica: \\r\\nNombre de la tabla dinámica: ",
    "PivotTableCalcItemHasTowCacheField": "Si uno o más campos de la tabla dinámica tienen elementos calculados, no se pueden utilizar campos en el área de datos dos o más veces, o en el área de datos y en otra área al mismo tiempo. Si está intentando agregar un campo, elimine los elementos calculados y vuelva a agregar el campo. Si está intentando agregar un elemento calculado, cambie el informe de la tabla dinámica para que ningún campo se utilice más de una vez y luego agregue el elemento calculado\".",
    "PivotTableHasNumberOrDateGroup": "Este campo de informe de tabla dinámica está agrupado. No se puede agregar un elemento calculado a un campo agrupado. Para desagrupar el campo, asegúrese de que esté en el área de fila o columna, seleccione uno de los elementos del campo agrupado, haga clic en el botón Desagrupar en el grupo Agrupar de la pestaña Analizar y, a continuación, inserte el elemento calculado. Después de insertarlo, puede agrupar los elementos del campo nuevamente\".",
    "PivotTableSubtotalType": "No se admiten promedios, desviaciones estándar ni variaciones cuando un informe de tabla dinámica tiene elementos calculados\".",
    "PivotTableHasSameItemName": "No se pudo crear el elemento o campo calculado porque existe otro elemento o campo con el mismo nombre\".",
    "PivotTableCalcItemHasMultipleDataField": "No se admiten varios campos de datos del mismo campo cuando un informe de tabla dinámica tiene elementos calculados\".",
    "PivotTableMoveCalcItemFieldToReport": "Este campo no se puede colocar en el filtro del informe porque contiene elementos calculados. Para colocar este campo en el filtro del informe, primero elimine los elementos calculados\".",
    "PivotTableErrorFormula": "No se puede encontrar el nombre de un elemento. Verifique que haya escrito el nombre correctamente y que el elemento esté presente en el informe de tabla dinámica\".",
    "SlicerNameInFormula": "Cortador",
    "search": "Buscar",
    "AddSearchResult": "Añadir la selección actual al filtro",
    "Layout": "Disposición",
    "showNoData": "Mostrar elementos sin datos",
    "showSubtotalTop": "Mostrar subtotales en la parte superior de cada grupo",
    "TIMELINE_PLACE_HOLDER": "{TL}",
    "ALL_DATES_IN": "Todas las fechas en ",
    "ALL_PERIODS": "Todos los periodos",
    "INVALID_DATE_SELECTION": "¡Selección de fecha no válida!",
    "QUARTER_MAP": [
      "",
      "T1",
      "T2",
      "T3",
      "T4"
    ],
    "DateNotEqual": "No {TL}",
    "DateNewerThan": "Después de {TL}",
    "DateNewerThanOrEqual": "Después o en {TL}",
    "DateOlderThan": "Antes de {TL}",
    "DateOlderThanOrEqual": "Antes o en{TL}",
    "DateNotBetween": "No entre {TL}",
    "AllDatesIn_Quarter1": "Todas las fechas en el primer trimestre",
    "AllDatesIn_Quarter2": "Todas las fechas en el segundo trimestre",
    "AllDatesIn_Quarter3": "Todas las fechas en el tercer trimestre",
    "AllDatesIn_Quarter4": "Todas las fechas en el 4T",
    "AllDatesIn_January": "Todas las fechas en enero",
    "AllDatesIn_February": "Todas las fechas en febrero",
    "AllDatesIn_March": "Todas las fechas en marzo",
    "AllDatesIn_April": "Todas las fechas en abril",
    "AllDatesIn_May": "Todas las fechas en Mayo",
    "AllDatesIn_June": "Todas las fechas en junio",
    "AllDatesIn_July": "Todas las fechas en julio",
    "AllDatesIn_August": "Todas las fechas en agosto",
    "AllDatesIn_September": "Todas las fechas en septiembre",
    "AllDatesIn_October": "Todas las fechas en octubre",
    "AllDatesIn_November": "Todas las fechas en noviembre",
    "AllDatesIn_December": "Todas las fechas de diciembre",
    "TIME_LEVEL_YEARS": "AÑOS",
    "TIME_LEVEL_QUARTERS": "CUARTELES",
    "TIME_LEVEL_MONTHS": "MESES",
    "TIME_LEVEL_DAYS": "DÍAS",
    "PivotTableErrorMessage_ExistTable": "Un informe de tabla dinámica no puede superponerse a una tabla\".",
    "VALUE_MUST_NUMBER": "El valor debe ser un número.",
    "ENTRY_NUMBER": "Su entrada no puede utilizarse. Es posible que se requiera un número entero o decimal\".",
    "POSITIVE_INTEGER": "El número debe ser mayor que cero."
  },
  "TableSheet": {
    "EXP_TooManyPinRecords": "Solo se admiten menos de 10 registros PIN\".",
    "GroupPanelTip": "Arrastre aquí para establecer grupos de filas",
    "GroupPanelFieldsHeader": "Campos",
    "GroupPanelGroupsHeader": "Grupos",
    "GroupPanelItemRemove": "Eliminar",
    "GroupPanelItemAddCalculation": "Añadir campo de resumen",
    "GroupPanelDropDownCalcField": "Campo",
    "GroupPanelSummaryLabelFormula": "Fórmula",
    "GroupPanelSummaryLabelCaption": "Subtítulo",
    "GroupPanelSummaryLabelSlice": "Rebanada",
    "GroupPanelSummaryLabelRelateTo": "Relacionarse con",
    "GroupPanelSummaryLabelPosition": "Posición",
    "GroupPanelSummaryLabelPositionHeader": "Encabezamiento",
    "GroupPanelSummaryLabelPositionFooter": "Pie de página",
    "GroupPanelItemRemoveAll": "Eliminar todo",
    "GroupPanelAddCalculateColumn": "Agregar columna calculada",
    "TextColon": ": ",
    "StatusBarRowCount": "Recuento de filas",
    "StatusBarToolTipRowCount": "Recuento de filas seleccionadas",
    "CrossColumnCrossHeader": "Cruz",
    "CrossColumnDetailFormatter": "Formateador",
    "CrossColumnDetailName": "Nombre",
    "CrossColumnDetailValue": "Valor",
    "CrossColumnDetailValuePlaceHolder": "Arrastre el elemento aquí para establecer el valor",
    "CrossColumnDetailOver": "Encima",
    "CrossColumnDetailCaption": "Subtítulo",
    "CrossColumnDetailValueHeader": "Mostrar encabezado de valor cruzado",
    "CrossColumnDetailFilter": "Filtrar",
    "CrossColumnDetailAttributes": "Atributos",
    "CrossColumnDetailList": "Lista",
    "Exp_InvalidOperationInProtectForTableSheet": "El rango que estás intentando cambiar está bloqueado\".",
    "defineColumn": "Definir columna",
    "cancel": "Cancelar",
    "submit": "Entregar",
    "defineColumnValue": "Valor",
    "defineColumnCaption": "Subtítulo",
    "defineColumnType": "Tipo",
    "defineColumnFormatting": "Formato",
    "defineColumnConfiguration": "Configuración",
    "defineColumnDefaultValue": "Por defecto",
    "defineColumnOthers": "Otros",
    "defineColumnFormula": "Fórmula",
    "defineColumnNone": "Ninguno",
    "defineColumnAll": "Todo",
    "defineColumnNoResults": "No hay resultados",
    "defineColumnRequired": "Es necesario",
    "defineColumnExisted": "Ha existido",
    "columnTypeNumber": "Número",
    "columnTypeText": "Texto",
    "columnTypeFormula": "Fórmula",
    "columnTypeCheckbox": "Caja",
    "columnTypeDate": "Fecha",
    "columnTypeCurrency": "Divisa",
    "columnTypePercent": "Por ciento",
    "columnTypePhone": "Teléfono",
    "columnTypeEmail": "Correo electrónico",
    "columnTypeURL": "URL",
    "columnTypeLookup": "Buscar",
    "columnTypeCreatedTime": "Hora de creación",
    "columnTypeModifiedTime": "Hora de modificación",
    "columnTypeAttachment": "Adjunto",
    "columnTypeSelect": "Seleccionar",
    "columnTypeBarcode": "Código de barras",
    "columnTypeNumberFormattingSample": "Muestra",
    "columnTypeNumberFormattingDecimalPlaces": "Lugares decimales",
    "columnTypeNumberFormattingThousandSeparator": "Utilice el separador 1000(,)",
    "columnTypeNumberFormattingNegativeNumbers": "Números negativos",
    "columnTypeNumberFormattingSymbol": "Símbolo",
    "columnTypeNumberFormatting": {
      "negativeNumbers": [],
      "numberCategoryFormats": [
        "0",
        "0;[Rojo]0",
        "0_);(0)",
        "0_);[Rojo](0)",
        "#,##0",
        "#,##0;[Rojo]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rojo](#,##0)"
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
          "Ninguno",
          "",
          ""
        ],
        [
          "$",
          "$",
          "es-ES"
        ],
        [
          "¥(chino)",
          "¥",
          "zh-cn"
        ],
        [
          "¥(Japonés)",
          "¥",
          "Ja-jp"
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
        "#,##0;[Rojo]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Rojo](#,##0)"
      ],
      "commonFormats": {
        "Number": {
          "format": "0,00",
          "label": "Número"
        },
        "Currency": {
          "format": "[$$-409]#,##0.00",
          "label": "Divisa"
        },
        "Accounting": {
          "format": "_(\\\"$\\\"* #,##0.00_);_(\\\"$\\\"* (#,##0.00);_(\\\"$\\\"* \\\"-\\\"??_) ;_(@_)",
          "label": "Contabilidad"
        },
        "ShortDate": {
          "format": "m/d/aaaa",
          "label": "Cita corta"
        },
        "LongDate": {
          "format": "[$-409]dddd, mmmm dd, aaaa",
          "label": "Cita larga"
        },
        "Time": {
          "format": "[$-409]h:mm:ss AM/PM",
          "label": "Tiempo"
        },
        "Percentage": {
          "format": "0,00%",
          "label": "Porcentaje"
        },
        "Fraction": {
          "format": "# ?/?",
          "label": "Fracción"
        },
        "Scientific": {
          "format": "0,00E+00",
          "label": "Científico"
        },
        "Text": {
          "format": "@",
          "label": "Texto"
        },
        "Comma": {
          "format": "_(* #,##0.00_);_(* (#,##0.00);_(* \\\"-\\\"??_);_(@_)",
          "label": "Coma"
        }
      }
    },
    "columnTypeLookupTables": "Seleccionar tabla de búsqueda",
    "columnTypeLookupFields": "El campo a mirar hacia arriba",
    "columnTypeLookupIndexes": "El número récord",
    "columnTypeFormattingCategory": "Categoría",
    "columnTypeMask": {
      "pattern": "Patrón",
      "placeholder": "Marcador de posición",
      "excludeLiteral": "Excluir literal",
      "excludePlaceholder": "Excluir marcador de posición"
    },
    "columnTypeAllEditableFields": "Todos los campos editables",
    "columnTypeDateTimePicker": "Selector de fecha y hora",
    "columnTypeDateStartDay": "Día de inicio",
    "columnTypeDateMonday": "Lunes",
    "columnTypeDateTuesday": "Martes",
    "columnTypeDateWednesday": "Miércoles",
    "columnTypeDateThursday": "Jueves",
    "columnTypeDateFriday": "Viernes",
    "columnTypeDateSaturday": "Sábado",
    "columnTypeDateSunday": "Domingo",
    "columnTypeDateCalendarPage": "Página de calendario",
    "columnTypeDateDay": "Día",
    "columnTypeDateYear": "Año",
    "columnTypeDateMonth": "Mes",
    "columnTypeDateShowTime": "Tiempo de la funcion",
    "columnTypeDateShowDateRange": "Mostrar rango de fechas",
    "columnTypeDateShowBuiltInDateRange": "Mostrar rango de fechas incorporado",
    "columnTypeDateType": "Tipo",
    "columnTypeDateLocale": "localidad (ubicación)",
    "columnTypeCalendar": "Tipo de calendario",
    "columnTypeShowEraFirstYear": "Utilice Gannen para mostrar el primer año",
    "columnTypeCalendarType": {
      "western": "Occidental",
      "JER": "El reinado del emperador japonés"
    },
    "columnTypeAttachmentMarginGroup": "Margen",
    "columnTypeAttachmentLeft": "Izquierda",
    "columnTypeAttachmentTop": "Arriba",
    "columnTypeAttachmentRight": "Bien",
    "columnTypeAttachmentBottom": "Abajo",
    "columnTypeAttachmentMaxSize": "Límite de tamaño",
    "columnTypeAttachmentAccept": "Tipo de archivo",
    "columnTypeAttachmentAcceptValueTypes": {
      "txt": "TXT",
      "all": "todo",
      "pdf": "pdf",
      "image": "jpg,png,gif",
      "excel": "docx,xlsx,pptx"
    },
    "columnTypeAttachmentIsPreviewEnabled": "Avance",
    "columnTypeAttachmentIsClearEnabled": "Claro",
    "columnTypeAttachmentIsDownloadEnabled": "Descargar",
    "columnTypeAttachmentSizeUnit": "KB",
    "columnTypeCheckboxTitle": "Tipo de celda de casilla de verificación",
    "columnTypeCheckboxTextGroup": "Texto",
    "columnTypeCheckboxTrue": "Verdadero",
    "columnTypeCheckboxIndeterminate": "Indeterminado",
    "columnTypeCheckboxFalse": "FALSO",
    "columnTypeCheckboxAlign": "Alinear",
    "columnTypeCheckboxOther": "Otro",
    "columnTypeCheckboxCaption": "Subtítulo",
    "columnTypeCheckboxIsThreeState": "EsTresEstados",
    "columnTypeCheckboxBoxSize": "Tamaño de la caja",
    "columnTypeCheckboxAuto": "Auto",
    "columnTypeCheckboxTextAlign": {
      "top": "Arriba",
      "bottom": "Abajo",
      "left": "Izquierda",
      "right": "Bien"
    },
    "columnTypeBarcodeLabel": {
      "showLabel": "Mostrar etiqueta",
      "barcodeType": "Tipo de código de barras",
      "color": "Color",
      "errorCorrectionLevel": "Nivel de corrección de errores",
      "backgroundColor": "Color de fondo",
      "version": "Versión",
      "model": "Modelo",
      "mask": "Mascarilla",
      "connection": "Conexión",
      "charCode": "Código de caracteres",
      "connectionNo": "Conexión No",
      "charset": "Juego de caracteres",
      "quietZoneLeft": "Zona tranquila a la izquierda",
      "quietZoneRight": "Zona tranquila, ¿verdad?",
      "quietZoneTop": "Zona tranquila superior",
      "quietZoneBottom": "Zona tranquila inferior",
      "labelPosition": "Posición de la etiqueta",
      "addOn": "Añadir",
      "addOnLabelPosition": "Posición de etiqueta adicional",
      "fontFamily": "Familia de fuentes",
      "fontStyle": "Estilo de fuente",
      "fontWeight": "Peso de la fuente",
      "fontTextDecoration": "Texto de fuenteDecoración",
      "fontTextAlign": "Texto de fuente alineado",
      "fontSize": "Tamaño de fuente",
      "fileIdentifier": "Identificador de archivo",
      "structureNumber": "Número de estructura",
      "structureAppend": "Agregar estructura",
      "ecc00_140Symbol": "Tamaño del símbolo Ecc000_140",
      "ecc200EncodingMode": "Modo de codificación final Ecc200",
      "ecc200SymbolSize": "Tamaño del símbolo Ecc200",
      "eccMode": "Modo Ecc",
      "compact": "Compacto",
      "columns": "Columnas",
      "rows": "Filas",
      "groupNo": "Número de grupo",
      "grouping": "Agrupamiento",
      "codeSet": "Conjunto de códigos",
      "fullASCII": "ASCII completo",
      "checkDigit": "Dígito de control",
      "nwRatio": "Relación de barra ancha y estrecha",
      "labelWithStartAndStopCharacter": "Etiqueta con caracteres de inicio y fin"
    },
    "columnTypeComboBoxEditorValueTypes": "TipoValorEditor",
    "columnTypeComboBoxItems": "Elementos",
    "columnTypeComboBoxItemProperties": "Propiedades del artículo",
    "columnTypeComboBoxText": "Texto",
    "columnTypeComboBoxValue": "Valor",
    "columnTypeComboBoxAdd": "Agregar",
    "columnTypeComboBoxRemove": "Eliminar",
    "columnTypeComboBoxEditorValueType": {
      "text": "Texto",
      "index": "Índice",
      "value": "Valor"
    },
    "columnTypeComboBoxEditable": "Editable",
    "columnTypeComboBoxItemHeight": "Altura de los elementos",
    "columnTypeUrlLabel": {
      "linkColor": "Color del enlace",
      "visitedLinkColor": "Color del enlace visitado"
    }
  },
  "DataChart": {
    "AddGroup": "Añadir grupo",
    "AddRule": "Añadir regla",
    "AggregationAverage": "Promedio",
    "AggregationCount": "Contar",
    "AggregationDistinctCount": "Conde distinto",
    "AggregationFirstValue": "Primer valor",
    "AggregationMax": "Máximo",
    "AggregationMethod": "Método de agregación",
    "AggregationMin": "Mínimo",
    "AggregationSum": "Suma",
    "Alignment": "Alineación",
    "All": "Todo",
    "And": "Y",
    "Animation": "Animación",
    "AnimationAnimationMode": "Modo de animación",
    "AnimationDuration": "Duración (ms)",
    "AnimationEasing": "Alivio",
    "AnimationModeAll": "Todo",
    "AnimationModeGroup": "Grupo",
    "AnimationModePoint": "Punto",
    "AnimationStartDelay": "Retraso de inicio (ms)",
    "Appearance": "Apariencia",
    "Apply": "Aplicar",
    "Area": "Gráfico de área",
    "AutoCategoryWidth": "Ancho de categoría automático",
    "AutoDirection": "Auto",
    "AxisCrosses": "Cruces del Eje",
    "AxisDateMode": "Modo de fecha",
    "AxisLineColor": "Color de la línea del eje",
    "AxisLineType": "Tipo de línea de eje",
    "AxisLineWidth": "Ancho de línea del eje",
    "AxisMode": "Modo Eje",
    "AxisPosition": "Posición del eje",
    "AxisPositionBottom": "Abajo",
    "AxisPositionCrosses": "Cruces",
    "AxisPositionTop": "Arriba",
    "AxisScale": "Escala",
    "Axis_Type": "Tipo de eje",
    "Background": "Color de fondo",
    "Bar": "Gráfico de barras",
    "BindingMode": "Modo de enlace",
    "Bold": "Atrevido",
    "Bolder": "Más audaz",
    "Border": "Color del borde",
    "BorderType": "Tipo de borde",
    "BorderWidth": "Ancho del borde",
    "BottomWidth": "Ancho inferior",
    "Bubble": "Gráfico de burbujas",
    "CalibrationType": "Tipo de calibración",
    "Cancel": "Cancelar",
    "CanvasPadding": "Relleno de lona",
    "CartesianAxisMode": "Cartesiano",
    "CaseSensitive": "Distingue mayúsculas y minúsculas",
    "CategoryAxis": "Eje de categorías",
    "CategoryWidth": "Ancho de la categoría",
    "Cell": "Celúla",
    "CellBinding": "Unión celular",
    "CellBindingTip": "Sugerencia: ingrese al modo de vista previa para ver los datos reales del gráfico de datos de enlace de celdas\".",
    "Center": "Centro",
    "ChartStyle": "Estilo de gráfico",
    "ChartTitle": "Título del gráfico de datos",
    "ChartType": "Tipo de gráfico",
    "Clear": "Claro",
    "ColorPalette": "Paleta de colores",
    "Column": "Gráfico de columnas",
    "CommaSeparator": "Coma",
    "CompleteCalibrationType": "Completo",
    "ConnectLineColor": "Color de línea",
    "ConnectLineFirstLength": "Longitud de la primera línea",
    "ConnectLineSecondLength": "Longitud de la segunda línea",
    "ConnectLineVisible": "Línea de conexión visible",
    "ConnectLineWidth": "Ancho de línea",
    "ConstantAxisType": "Constante",
    "Contains": "Contiene",
    "CornerRadius": "Radio de esquina",
    "Custom": "Costumbre",
    "DashedLineType": "Discontinuado",
    "DataBinding": "Enlace de datos",
    "DataBindingActualValue": "Valor real",
    "DataBindingCategory": "Categoría",
    "DataBindingColor": "Color",
    "DataBindingColumnSlicer": "Cortador de columnas",
    "DataBindingDetail": "Detalle",
    "DataBindingLowerValue": "Valor más bajo",
    "DataBindingNoItems": "No hay artículos.",
    "DataBindingRowSlicer": "Cortador de filas",
    "DataBindingSize": "Tamaño",
    "DataBindingTargetValue": "Valor objetivo",
    "DataBindingTipLabel": "Etiqueta de punta",
    "DataBindingUpperValue": "Valor superior",
    "DataBindingValue": "Valor",
    "DataBindingXAxisValue": "Eje X",
    "DataBindingYAxisValue": "Eje Y",
    "DataLabelAround": "Alrededor",
    "DataLabelCategory": "Categoría",
    "DataLabelCategoryName": "Nombre de la categoría",
    "DataLabelDetails": "Detalles",
    "DataLabelDisplayMode": "Modo de visualización",
    "DataLabelDisplayUnit": "Unidad de visualización",
    "DataLabelLocation": "Ubicación",
    "DataLabelOnSlice": "En rebanada",
    "DataLabelSeries": "Serie",
    "DataLabelSeriesName": "Nombre de la serie",
    "DataLabelValue": "Valor",
    "DataLabels": "Etiquetas de datos",
    "DateScale": "Fecha",
    "DayDateMode": "Día",
    "Delete": "Borrar",
    "DiagonalDirection": "Diagonal",
    "DisplayModeAll": "Todo",
    "DisplayModeAuto": "Auto",
    "DisplayName": "Nombre para mostrar",
    "DisplayUnit": "Unidad de visualización",
    "DisplayUnitBillions": "Miles de millones",
    "DisplayUnitHundredMillions": "Cien millones",
    "DisplayUnitHundredThousands": "Cien miles",
    "DisplayUnitHundreds": "Cientos",
    "DisplayUnitMillions": "Millones",
    "DisplayUnitNone": "Ninguno",
    "DisplayUnitTenMillions": "Diez millones",
    "DisplayUnitTenThousands": "Diez mil",
    "DisplayUnitThousands": "Miles",
    "DisplayUnitTrillions": "Billones",
    "Donut": "Gráfico de donuts",
    "DragFieldsTip": "Arrastre los campos aquí para vincularlos\".",
    "EditColors": "Editar colores",
    "EndsWith": "Termina con",
    "EqualsTo": "Igual a",
    "ExcludeMatched": "Excluir coincidencias",
    "False": "FALSO",
    "Fill": "Color de relleno",
    "FilledRadar": "Gráfico de radar lleno",
    "Filter": "Filtrar",
    "FontColor": "Color de fuente",
    "FontFamily": "Familia de fuentes",
    "FontOpacity": "Opacidad de fuente",
    "FontOverflow": "Desbordamiento de fuente",
    "FontSize": "Tamaño de fuente",
    "FontStyle": "Estilo de fuente",
    "FontWeight": "Peso de la fuente",
    "Format": "Formato",
    "FormatCurrency": "Divisa",
    "FormatCustom": "Costumbre",
    "FormatGeneral": "General",
    "FormatNumber": "Número",
    "FormatPercentage": "Porcentaje",
    "Funnel": "Embudo",
    "Gauge": "Indicador",
    "General": "General",
    "GraphOpacity": "Opacidad del gráfico",
    "GreaterThan": "Más que",
    "GreaterThanOrEqualTo": "Mayor que o igual a",
    "HideCalibrationType": "Esconder",
    "HideOverlap": "Ocultar superposición",
    "High": "Alto",
    "HorizontalDirection": "Horizontal",
    "HourDateMode": "Hora",
    "HoverAnimation": "Mostrar animación al pasar el mouse",
    "InBackEasing": "Tranquilidad en la espalda",
    "InBounceEasing": "Facilidad de rebote",
    "InCircularEasing": "Facilidad en la circular",
    "InCubicEasing": " Facilidad en el cúbico ",
    "InElasticEasing": " Facilidad en elasticidad ",
    "InExponentialEasing": "Facilidad en lo exponencial",
    "InOutBackEasing": "Entra y sal con tranquilidad",
    "InOutBounceEasing": "Entrada y salida suaves y rebotan",
    "InOutCircularEasing": "Circular de entrada y salida fácil",
    "InOutCubicEasing": "Facilidad de entrada y salida cúbica",
    "InOutElasticEasing": "Elástico fácil de introducir y sacar",
    "InOutExponentialEasing": "Facilidad de entrada y salida exponencial",
    "InOutQuadraticEasing": "Facilidad de entrada y salida cuadrática",
    "InOutQuarticEasing": "Facilidad de entrada y salida cuartica",
    "InOutQuinticEasing": "Entrada y salida fáciles de Quintic",
    "InOutSinusoidalEasing": "Facilidad de entrada y salida sinusoidal",
    "InQuadraticEasing": "Facilidad en cuadrática",
    "InQuarticEasing": " Facilidad en cuartico ",
    "InQuinticEasing": " Facilidad en Quintic ",
    "InSinusoidalEasing": " Facilidad en sinusoidal ",
    "InnerRadius": "Radio interior",
    "Italic": "Itálico",
    "LabelAngle": "Ángulo de la etiqueta",
    "LabelOverflowSetting": "Configuración de desbordamiento de etiqueta",
    "LabelSeparator": "Separador de etiquetas",
    "Layout": "Disposición",
    "LayoutHeight": "Altura",
    "LayoutWidth": "Ancho",
    "Left": "Izquierda",
    "Legend": "Leyenda",
    "LegendAlignBottom": "Abajo",
    "LegendAlignCenter": "Centro",
    "LegendAlignLeft": "Izquierda",
    "LegendAlignMiddle": "Medio",
    "LegendAlignRight": "Bien",
    "LegendAlignTop": "Arriba",
    "LegendAutoSize": "Tamaño automático",
    "LegendHAlign": "Alineación H",
    "LegendHeight": "Altura(%)",
    "LegendPadding": "Relleno de leyenda",
    "LegendPosition": "Posición",
    "LegendPositionBottom": "Abajo",
    "LegendPositionLeft": "Izquierda",
    "LegendPositionRight": "Bien",
    "LegendPositionTop": "Arriba",
    "LegendVAlign": "Alineación en V",
    "LegendWidth": "Ancho(%)",
    "LessThan": "Menos que",
    "LessThanOrEqualTo": "Menor o igual a",
    "Lighter": "Encendedor",
    "Line": "Gráfico de líneas",
    "LineColor": "Color de línea",
    "LineStyle": "Estilo de línea",
    "LineStyleDefault": "Por defecto",
    "LineStyleSpline": "Ranura",
    "LineStyleStep": "Paso",
    "LineThickness": "Grosor de línea",
    "LineType": "Tipo de línea",
    "LinearEasing": "Lineal",
    "LinearScale": "Lineal",
    "LoadAnimation": "Mostrar animación de carga",
    "Low": "Bajo",
    "MajorGridLineColor": "Color de la línea principal de la cuadrícula",
    "MajorGridLineType": "Tipo de línea de cuadrícula principal",
    "MajorGridLineWidth": "Ancho de línea de cuadrícula principal",
    "MajorInterval": "Intervalo mayor",
    "MajorTickMarksColor": "Color de las principales marcas de graduación",
    "MajorTickMarksLength": "Longitud de las marcas de graduación principales",
    "MajorTickMarksType": "Tipo de marcas de graduación importantes",
    "MajorTickMarksWidth": "Ancho de las marcas de graduación principales",
    "MatchRules": "Reglas del partido",
    "MaxConnectLineLength": "Longitud máxima de línea",
    "MaxValue": "Valor máximo",
    "MaxWidth": "Ancho máximo",
    "Mid": "Medio",
    "MilliSecondDateMode": "Milisegundo",
    "MinValue": "Valor mínimo",
    "MinorGridLineColor": "Color de línea de cuadrícula menor",
    "MinorGridLineType": "Tipo de línea de cuadrícula menor",
    "MinorGridLineWidth": "Ancho de línea de cuadrícula menor",
    "MinorInterval": "Intervalo menor",
    "MinorTickMarksColor": "Pequeñas marcas de verificación de color",
    "MinorTickMarksLength": "Longitud de las marcas de graduación menores",
    "MinorTickMarksType": "Tipo de marcas de verificación menores",
    "MinorTickMarksWidth": "Ancho de las marcas de graduación menores",
    "MinuteDateMode": "Minuto",
    "MonthDateMode": "Mes",
    "MovingCalculation": "Cálculo en movimiento...",
    "NeckHeight": "Altura del cuello",
    "NewLineSeparator": "Nueva linea",
    "No": "No",
    "NoBindingTip": "Seleccione una tabla para vincular datos\".",
    "NoParameters": "sin parámetros.",
    "None": "Ninguno",
    "NoneEasing": "Ninguno",
    "Normal": "Normal",
    "NotEqualsTo": "No es igual a",
    "OK": "DE ACUERDO",
    "Or": "O",
    "OriginalValue": "Valor original",
    "OutBackEasing": "Sal con calma",
    "OutBounceEasing": "Rebote fácil",
    "OutCircularEasing": "Facilitar la circularidad",
    "OutCubicEasing": "Facilitar el cúbico",
    "OutElasticEasing": "Retire fácilmente el elástico",
    "OutExponentialEasing": "Facilitar la salida exponencial",
    "OutQuadraticEasing": "Facilitar la salida cuadrática",
    "OutQuarticEasing": "Facilitar el cuartico",
    "OutQuinticEasing": "Descansa tranquilamente en Quintic",
    "OutSinusoidalEasing": "Facilitar la salida sinusoidal",
    "OverflowClip": "Acortar",
    "OverflowEllipsis": "Elipsis",
    "OverflowWrap": "Envoltura",
    "PaletteColors": "Paleta de colores",
    "PercentStackedArea": "Gráfico de áreas apiladas porcentualmente",
    "PercentStackedBar": "Gráfico de barras apiladas de porcentaje",
    "PercentStackedColumn": "Gráfico de columnas apiladas de porcentaje",
    "PercentageAxisType": "Porcentaje",
    "PercentileCalculation": "Cálculo de percentiles...",
    "PeriodSeparator": "Período",
    "Pie": "Gráfico circular",
    "PolarCoordinatesBar": "Gráfico de barras en coordenadas polares",
    "PolarCoordinatesStackedBar": "Gráfico de barras apiladas en coordenadas polares",
    "PropertySetting": "Inspector",
    "QuickFunctions": "Funciones rápidas",
    "Radar": "Gráfico de radar",
    "RadialAxisMode": "Radial",
    "RadialStackedBar": "Gráfico de barras apiladas radiales",
    "Radius": "Radio",
    "RangeArea": "Gráfico de área de rango",
    "RangeBar": "Gráfico de barras de rango",
    "RangeColumn": "Gráfico de columnas de rango",
    "RankingCalculation": "Cálculo de clasificación...",
    "Remove": "Eliminar",
    "Rename": "Rebautizar...",
    "Reversed": "Invertida",
    "Right": "Bien",
    "Rose": "Gráfico de rosas",
    "Rule": "Regla",
    "RunningCalculation": "Cálculo en ejecución...",
    "Scatter": "Dispersión",
    "Search": "Buscar",
    "SearchField": "Campos de búsqueda...",
    "SearchPropertyByName": "Buscar nombre de propiedad aquí...",
    "SecondDateMode": "Segundo",
    "SelectStyle": "Mostrar estilo seleccionado",
    "SelectStyleAdorners": "Adornadores",
    "SelectStyleFill": "Color de relleno",
    "SelectStyleFillOpacity": "Opacidad de relleno",
    "SelectStyleStroke": "Color del borde",
    "SelectStyleStrokeLineType": "Tipo de borde",
    "SelectStyleStrokeOpacity": "Opacidad de la frontera",
    "SelectStyleStrokeWidth": "Ancho del borde",
    "SelectStyleTitle": "Seleccionar estilo",
    "SelectedTable": "Tabla seleccionada",
    "SemicolonSeparator": "Punto y coma",
    "SeriesGap": "Brecha de la serie",
    "ShowAxis": "Mostrar eje",
    "ShowAxisLine": "Mostrar línea de eje",
    "ShowDataLabel": "Mostrar etiqueta de datos",
    "ShowLegend": "Mostrar leyenda",
    "ShowMajorGridLines": "Mostrar líneas principales de la cuadrícula",
    "ShowMajorTickMarks": "Mostrar marcas de verificación importantes",
    "ShowMinorGridLines": "Mostrar líneas de cuadrícula menores",
    "ShowMinorTickMarks": "Mostrar pequeñas marcas de verificación",
    "ShowNullsAs": "Mostrar valores nulos como",
    "ShowNullsAsConnected": "Conectado",
    "ShowNullsAsGaps": "Brechas",
    "ShowNullsAsZeros": "Ceros",
    "ShowSizeLegend": "Mostrar leyenda de tamaño",
    "ShowSymbol": "Mostrar símbolo",
    "ShowTickLabels": "Mostrar etiquetas de garrapatas",
    "ShowTitle": "Mostrar título",
    "ShowTooltip": "Mostrar información sobre herramientas",
    "SolidLineType": "Sólido",
    "SortAggregate": "Agregar",
    "SortAsc": "Ascender",
    "SortBy": "Ordenar por",
    "SortDesc": "Bajar",
    "SortOrder": "Orden de clasificación",
    "SortSetting": "Clasificar...",
    "SpaceSeparator": "Espacio",
    "StackedArea": "Gráfico de áreas apiladas",
    "StackedBar": "Gráfico de barras apiladas",
    "StackedColumn": "Gráfico de columnas apiladas",
    "Standard": "Estándar",
    "StartAngle": "Ángulo de inicio",
    "StartsWith": "Empieza con",
    "Sunburst": "Gráfico de rayos de sol",
    "Sweep": "Barrer",
    "SwingEasing": "Balancearse",
    "SymbolFill": "Relleno de símbolo",
    "SymbolShape": "Forma del símbolo",
    "SymbolShapeBox": "Caja",
    "SymbolShapeDiamond": "Diamante",
    "SymbolShapeDot": "Punto",
    "SymbolShapePlus": "Más",
    "SymbolShapeTriangle": "Triángulo",
    "SymbolShapeX": "INCÓGNITA",
    "SymbolSize": "Tamaño del símbolo",
    "SymbolStroke": "Trazo de símbolo",
    "TableBinding": "Encuadernación de tablas",
    "TargetField": "Campo objetivo",
    "Theme": "Tema",
    "Title": "Título",
    "TitlePadding": "Relleno",
    "ToolTipLineThrough": "Línea a través",
    "ToolTipOverline": "Sobre línea",
    "ToolTipUnderline": "Subrayar",
    "Tooltip": "Información sobre herramientas",
    "TopWidth": "Ancho superior",
    "True": "Verdadero",
    "UnselectStyle": "Mostrar estilo deseleccionado",
    "UpdateAnimation": "Mostrar animación de actualización",
    "UseParameter": "Utilizar parámetro",
    "Value": "Valor",
    "ValueAsPercentage": "Valor como porcentaje",
    "ValueAxis": "Eje de valores",
    "VerticalDirection": "Vertical",
    "WeekDateMode": "Semana",
    "WrapLegend": "Leyenda de la rotulación de automóviles",
    "XAxis": "Eje X",
    "XPosition": "Posición X",
    "YAxis": "Eje Y",
    "YPosition": "Posición Y",
    "YearDateMode": "Año",
    "Yes": "Sí",
    "configDataChart": "Por favor configure DataChart.",
    "wmk1": "446174614368617274",
    "wmk2": "446174614368617274"
  },
  "ReportSheet": {
    "ContainsInvalidCells": "La hoja de informe contiene celdas no válidas ({0}), por favor verifique\".",
    "toolTipTableName": "Mesa: ",
    "toolTipColumnName": "Columna: ",
    "toolTipFormula": "Fórmula: ",
    "toolTipCellType": "Tipo: ",
    "listCellType": "Lista",
    "groupCellType": "Grupo",
    "summaryCellType": "Resumen",
    "summarySumTip": "(Suma)",
    "summaryAvgTip": "(Promedio)",
    "summaryMaxTip": "(Máximo)",
    "summaryMinTip": "(Mínimo)",
    "summaryCountTip": "(Contar)",
    "summaryNoneTip": "(Ninguno)",
    "configDataChart": "Por favor configure DataChart.",
    "Exp_InvalidParameterName": "nombre de parámetro no válido",
    "Exp_InvalidPasteRange": "No se pueden pegar ni mover datos en el rango del contenedor\".",
    "dropFieldsIntoRow": "Deje caer los campos aquí",
    "dropFieldsIntoColumn": "Soltar campos de columna aquí",
    "dropFieldsIntoValue": "Colocar campos de valor aquí",
    "wmk1": "5265706f72745368656574",
    "wmk2": "5265706f72745368656574"
  },
  "IO": {
    "EXP_IO": "Excepción de lectura y escritura de archivo\".",
    "EXP_FILE_FORMAT": "Formato de archivo incorrecto.",
    "GET_PARTIAL_VALUES_ERROR_MSG": "archivo de error",
    "EXP_WRONG_PASSWORD": "La contraseña proporcionada no es correcta.",
    "EXP_EMPTY_PASSWORD": "No se puede abrir el archivo Excel porque el libro está protegido con contraseña\"."
  },
  "Functions": {
    "ABS": {
      "description": "Esta función calcula el valor absoluto del valor especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ACCRINT": {
      "description": "Esta función calcula el interés acumulado de un valor que paga intereses periódicos\".",
      "parameters": [
        {
          "name": "asunto"
        },
        {
          "name": "primer_interés"
        },
        {
          "name": "asentamiento"
        },
        {
          "name": "tasa"
        },
        {
          "name": "par"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "ACCRINTM": {
      "description": "Esta función calcula el interés acumulado al vencimiento de un valor que paga intereses periódicos\".",
      "parameters": [
        {
          "name": "asunto"
        },
        {
          "name": "asentamiento"
        },
        {
          "name": "tasa"
        },
        {
          "name": "par"
        },
        {
          "name": "base",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "ACOS": {
      "description": "Esta función calcula el arcocoseno, es decir, el ángulo cuyo coseno es el valor especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ACOSH": {
      "description": "Esta función calcula el coseno hiperbólico inverso del valor especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ADDRESS": {
      "description": "Esta función utiliza los números de fila y columna para crear una dirección de celda en el texto\".",
      "parameters": [
        {
          "name": "num_fila"
        },
        {
          "name": "num_columna"
        },
        {
          "name": "numero_abs",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "estilo a1",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "texto_de_hoja",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "AGGREGATE": {
      "description": "Esta función agrega una lista de números utilizando una función incorporada específica\".",
      "parameters": [
        {
          "name": "función_num"
        },
        {
          "name": "opciones"
        },
        {
          "name": "Referencia 1"
        },
        {
          "name": "Referencia 2",
          "repeatable": "verdadero"
        }
      ]
    },
    "AMORDEGRC": {
      "description": "Esta función devuelve la depreciación de un período contable, tomando en consideración la depreciación prorrateada, y aplica un coeficiente de depreciación en el cálculo basado en la vida útil de los activos\".",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "fecha_de_compra"
        },
        {
          "name": "primer_periodo"
        },
        {
          "name": "salvar"
        },
        {
          "name": "período"
        },
        {
          "name": "tasa"
        },
        {
          "name": "base"
        }
      ]
    },
    "AMORLINC": {
      "description": "Esta función calcula la depreciación de un período contable, teniendo en cuenta la depreciación prorrateada\".",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "fecha_de_compra"
        },
        {
          "name": "primer_periodo"
        },
        {
          "name": "salvar"
        },
        {
          "name": "período"
        },
        {
          "name": "tasa"
        },
        {
          "name": "base"
        }
      ]
    },
    "AND": {
      "description": "Comprueba si todos los argumentos son Verdaderos y devuelve Verdadero si todos los argumentos son Verdaderos\".",
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
      "description": "Esta función calcula el arcoseno, es decir, el ángulo cuyo seno es el valor especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ASINH": {
      "description": "Esta función calcula el seno hiperbólico inverso de un número\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ATAN": {
      "description": "Esta función calcula la arcotangente, es decir, el ángulo cuya tangente es el valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ATAN2": {
      "description": "Esta función calcula la arcotangente de las coordenadas x e y especificadas\".",
      "parameters": [
        {
          "name": "x_numero"
        },
        {
          "name": "y_num"
        }
      ]
    },
    "ATANH": {
      "description": "Esta función calcula la tangente hiperbólica inversa de un número\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "AVEDEV": {
      "description": "Esta función calcula el promedio de las desviaciones absolutas de los valores especificados con respecto a su media\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "AVERAGE": {
      "description": "Esta función calcula el promedio de los valores numéricos especificados\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "AVERAGEA": {
      "description": "Esta función calcula el promedio de los valores especificados, incluidos valores de texto o lógicos, así como valores numéricos\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "AVERAGEIF": {
      "description": "Esta función calcula el promedio de los valores numéricos especificados siempre que cumplan los criterios especificados\".",
      "parameters": [
        {
          "name": "rango"
        },
        {
          "name": "criterios"
        },
        {
          "name": "rango promedio",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "AVERAGEIFS": {
      "description": "Esta función calcula el promedio de todas las celdas que cumplen múltiples criterios especificados\".",
      "parameters": [
        {
          "name": "rango promedio"
        },
        {
          "name": "rango_de_criterios1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "rango_de_criterios2",
          "repeatable": "verdadero"
        },
        {
          "name": "criterio2",
          "repeatable": "verdadero"
        }
      ]
    },
    "BESSELI": {
      "description": "Esta función calcula la función de Bessel modificada del primer tipo evaluada para argumentos puramente imaginarios\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "orden"
        }
      ]
    },
    "BESSELJ": {
      "description": "Esta función calcula la función de Bessel del primer tipo\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "orden"
        }
      ]
    },
    "BESSELK": {
      "description": "Esta función calcula la función de Bessel modificada del segundo tipo evaluada para argumentos puramente imaginarios\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "orden"
        }
      ]
    },
    "BESSELY": {
      "description": "Esta función calcula la función de Bessel del segundo tipo\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "orden"
        }
      ]
    },
    "BETADIST": {
      "description": "Esta función calcula la función de distribución beta acumulativa\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "más bajo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "superior",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "BETAINV": {
      "description": "Esta función calcula la inversa de la función de distribución beta acumulativa\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "más bajo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "superior",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "BIN2DEC": {
      "description": "Esta función convierte un número binario en un número decimal",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "BIN2HEX": {
      "description": "Esta función convierte un número binario en un número hexadecimal\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "BIN2OCT": {
      "description": "Esta función convierte un número binario en un número octal\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "BINOMDIST": {
      "description": "Esta función calcula la probabilidad de distribución binomial de términos individuales\".",
      "parameters": [
        {
          "name": "números"
        },
        {
          "name": "ensayos"
        },
        {
          "name": "probabilidad_s"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "CEILING": {
      "description": "Esta función redondea un número al múltiplo más cercano de un valor especificado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado"
        }
      ]
    },
    "CHAR": {
      "description": "Esta función devuelve el carácter especificado por un número\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "CHIDIST": {
      "description": "Esta función calcula la probabilidad unilateral de la distribución chi-cuadrado\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "CHIINV": {
      "description": "Esta función calcula la inversa de la probabilidad unilateral de la distribución chi-cuadrado",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "CHITEST": {
      "description": "Esta función calcula la prueba de independencia de la distribución de chi-cuadrado\".",
      "parameters": [
        {
          "name": "rango real"
        },
        {
          "name": "rango esperado"
        }
      ]
    },
    "CHOOSE": {
      "description": "Esta función devuelve un valor de una lista de valores\".",
      "parameters": [
        {
          "name": "número_índice"
        },
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "CLEAN": {
      "description": "Esta función elimina todos los caracteres no imprimibles del texto\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "CODE": {
      "description": "Esta función devuelve un código numérico para representar el primer carácter de una cadena de texto. El código devuelto corresponde al conjunto de caracteres de Windows (ANSI)\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "COLUMN": {
      "description": "Esta función devuelve el número de columna de una referencia\".",
      "parameters": [
        {
          "name": "referencia"
        }
      ]
    },
    "COLUMNS": {
      "description": "Esta función devuelve el número de columnas de una matriz\".",
      "parameters": [
        {
          "name": "formación"
        }
      ]
    },
    "COMBIN": {
      "description": "Esta función calcula el número de combinaciones posibles para un número específico de elementos\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_elegido"
        }
      ]
    },
    "COMPLEX": {
      "description": "Esta función convierte coeficientes reales e imaginarios en un número complejo\".",
      "parameters": [
        {
          "name": "num_real"
        },
        {
          "name": "numero_de_imagen"
        },
        {
          "name": "sufijo"
        }
      ]
    },
    "CONCATENATE": {
      "description": "Esta función combina varias cadenas de texto o números en una sola cadena de texto\".",
      "parameters": [
        {
          "name": "texto 1"
        },
        {
          "name": "texto2",
          "repeatable": "verdadero"
        }
      ]
    },
    "CONFIDENCE": {
      "description": "Esta función devuelve el intervalo de confianza para la media de una población\".",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "desarrollo_estándar"
        },
        {
          "name": "tamaño"
        }
      ]
    },
    "CONVERT": {
      "description": "Esta función convierte un número de un sistema de medición a su equivalente en otro sistema de medición\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "desde_la_unidad"
        },
        {
          "name": "a_la_unidad"
        }
      ]
    },
    "CORREL": {
      "description": "Esta función devuelve el coeficiente de correlación de los dos conjuntos de datos\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        }
      ]
    },
    "COS": {
      "description": "Esta función devuelve el coseno del ángulo especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "COSH": {
      "description": "Esta función devuelve el coseno hiperbólico del valor especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "COUNT": {
      "description": "Esta función devuelve el número de celdas que contienen números\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "COUNTA": {
      "description": "Esta función devuelve el número de celdas que contienen números, texto o valores lógicos\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "COUNTBLANK": {
      "description": "Esta función devuelve el número de celdas vacías (o en blanco) en un rango de celdas en una hoja\".",
      "parameters": [
        {
          "name": "rango de celdas"
        }
      ]
    },
    "COUNTIF": {
      "description": "Esta función devuelve el número de celdas que cumplen una determinada condición",
      "parameters": [
        {
          "name": "rango de celdas"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "COUNTIFS": {
      "description": "Esta función devuelve el número de celdas que cumplen múltiples condiciones\".",
      "parameters": [
        {
          "name": "rango_de_criterios1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "rango_de_criterios2",
          "repeatable": "verdadero"
        },
        {
          "name": "criterio2",
          "repeatable": "verdadero"
        }
      ]
    },
    "COUPDAYBS": {
      "description": "Esta función calcula el número de días desde el inicio del período del cupón hasta la fecha de liquidación\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYS": {
      "description": "Esta función devuelve el número de días del período del cupón que contiene la fecha de liquidación\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYSNC": {
      "description": "Esta función calcula el número de días desde la fecha de liquidación hasta la próxima fecha de cupón\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNCD": {
      "description": "Esta función devuelve un número de fecha de la próxima fecha de cupón después de la fecha de liquidación\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNUM": {
      "description": "Esta función devuelve el número de cupones vencidos entre la fecha de liquidación y la fecha de vencimiento\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPPCD": {
      "description": "Esta función devuelve un número de fecha de la fecha del cupón anterior a la fecha de liquidación\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "COVAR": {
      "description": "Esta función devuelve la covarianza, que es el promedio de los productos de las desviaciones para cada par de puntos de datos en dos conjuntos de números\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        }
      ]
    },
    "CRITBINOM": {
      "description": "Esta función devuelve el criterio binomial, el valor más pequeño para el cual la distribución binomial acumulada es mayor o igual que un valor de criterio\".",
      "parameters": [
        {
          "name": "ensayos"
        },
        {
          "name": "probabilidad_s"
        },
        {
          "name": "alfa"
        }
      ]
    },
    "CUMIPMT": {
      "description": "Esta función devuelve el interés acumulado pagado por un préstamo entre el período inicial y el final\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "nper"
        },
        {
          "name": "paval"
        },
        {
          "name": "periodo_de_inicio"
        },
        {
          "name": "fin del periodo"
        },
        {
          "name": "tipo de pago"
        }
      ]
    },
    "CUMPRINC": {
      "description": "Esta función devuelve el capital acumulado pagado por un préstamo entre los períodos inicial y final\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "nper"
        },
        {
          "name": "paval"
        },
        {
          "name": "periodo_de_inicio"
        },
        {
          "name": "fin del periodo"
        },
        {
          "name": "tipo de pago"
        }
      ]
    },
    "DATE": {
      "description": "Esta función devuelve el objeto DateTime para una fecha particular, especificada por año, mes y día\".",
      "parameters": [
        {
          "name": "año"
        },
        {
          "name": "mes"
        },
        {
          "name": "día"
        }
      ]
    },
    "DATEDIF": {
      "description": "Esta función devuelve el número de días, meses o años entre dos fechas\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "fecha_final"
        },
        {
          "name": "unidad"
        }
      ]
    },
    "DATEVALUE": {
      "description": "Esta función devuelve un objeto DateTime de la fecha especificada\".",
      "parameters": [
        {
          "name": "texto de fecha"
        }
      ]
    },
    "DAVERAGE": {
      "description": "Esta función calcula el promedio de valores en una columna de una lista o base de datos que coinciden con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DAY": {
      "description": "Esta función devuelve el número de día del mes (entero 1 a 31) que corresponde a la fecha especificada\".",
      "parameters": [
        {
          "name": "fecha"
        }
      ]
    },
    "DAYS360": {
      "description": "Esta función devuelve el número de días entre dos fechas basándose en un año de 360 ​​días\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "fecha_final"
        },
        {
          "name": "método",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "DB": {
      "description": "Esta función calcula la depreciación de un activo durante un período específico utilizando el método de saldo fijo decreciente",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvar"
        },
        {
          "name": "vida"
        },
        {
          "name": "período"
        },
        {
          "name": "mes"
        }
      ]
    },
    "DCOUNT": {
      "description": "Esta función cuenta las celdas que contienen números en una columna de una lista o base de datos que coinciden con las condiciones especificadas",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DCOUNTA": {
      "description": "Esta función cuenta las celdas que no están en blanco en una columna de una lista o base de datos que coinciden con las condiciones especificadas",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DDB": {
      "description": "Esta función calcula la depreciación de un activo para un período específico utilizando el método de saldo doblemente decreciente u otro método que usted especifique\".",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvar"
        },
        {
          "name": "vida"
        },
        {
          "name": "período"
        },
        {
          "name": "factor"
        }
      ]
    },
    "DEC2BIN": {
      "description": "Esta función convierte un número decimal en un número binario\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "DEC2HEX": {
      "description": "Esta función convierte un número decimal en un número hexadecimal",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "DEC2OCT": {
      "description": "Esta función convierte un número decimal en un número octal",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "DEGREES": {
      "description": "Esta función convierte el valor especificado de radianes a grados",
      "parameters": [
        {
          "name": "ángulo"
        }
      ]
    },
    "DELTA": {
      "description": "Esta función identifica si dos valores son iguales. Devuelve 1 si son iguales; devuelve 0 en caso contrario\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "DEVSQ": {
      "description": "Esta función calcula la suma de los cuadrados de las desviaciones de los puntos de datos (o de una matriz de puntos de datos) respecto de su media muestral\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "DGET": {
      "description": "Esta función extrae un único valor de una columna de una lista o base de datos que coincide con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DISC": {
      "description": "Esta función calcula la tasa de descuento de un valor\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "precio"
        },
        {
          "name": "redención"
        },
        {
          "name": "base"
        }
      ]
    },
    "DMAX": {
      "description": "Esta función devuelve el número más grande en una columna de una lista o base de datos que coincide con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DMIN": {
      "description": "Esta función devuelve el número más pequeño en una columna de una lista o base de datos que coincide con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DOLLAR": {
      "description": "Esta función convierte un número en texto usando formato de moneda, con los decimales redondeados al lugar especificado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "decimales",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "DOLLARDE": {
      "description": "Esta función convierte un precio fraccionario en dólares a un precio decimal en dólares\".",
      "parameters": [
        {
          "name": "dólar fraccional"
        },
        {
          "name": "fracción"
        }
      ]
    },
    "DOLLARFR": {
      "description": "Esta función convierte un precio en dólares en un número decimal a un precio en dólares en una fracción\".",
      "parameters": [
        {
          "name": "dólar decimal"
        },
        {
          "name": "fracción"
        }
      ]
    },
    "DPRODUCT": {
      "description": "Esta función multiplica los valores de una columna de una lista o base de datos que coinciden con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DSTDEV": {
      "description": "Esta función estima la desviación estándar de una población basándose en una muestra utilizando los números de una columna de una lista o base de datos que coinciden con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DSTDEVP": {
      "description": "Esta función calcula la desviación estándar de una población basándose en la población total utilizando los números de una columna de una lista o base de datos que coinciden con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DSUM": {
      "description": "Esta función agrega los números en una columna de una lista o base de datos que coinciden con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DURATION": {
      "description": "Esta función devuelve la duración de Macaulay para un valor nominal supuesto de $100\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "cupón"
        },
        {
          "name": "producir"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "DVAR": {
      "description": "Esta función estima la varianza de una población basándose en una muestra utilizando los números de una columna de una lista o base de datos que coinciden con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "DVARP": {
      "description": "Esta función calcula la varianza de una población basándose en la población total utilizando los números de una columna de una lista o base de datos que coinciden con las condiciones especificadas\".",
      "parameters": [
        {
          "name": "base de datos"
        },
        {
          "name": "campo"
        },
        {
          "name": "criterios"
        }
      ]
    },
    "EDATE": {
      "description": "Esta función calcula la fecha que es el número indicado de meses antes o después de una fecha especificada\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "meses"
        }
      ]
    },
    "EFFECT": {
      "description": "Esta función calcula la tasa de interés anual efectiva para una tasa de interés nominal anual dada y el número de períodos de capitalización por año\".",
      "parameters": [
        {
          "name": "tasa nominal"
        },
        {
          "name": "npería"
        }
      ]
    },
    "EOMONTH": {
      "description": "Esta función calcula la fecha del último día del mes (fin de mes) que es el número indicado de meses antes o después de la fecha de inicio\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "meses"
        }
      ]
    },
    "ERF": {
      "description": "Esta función calcula la función de error integrada entre un límite inferior y uno superior\".",
      "parameters": [
        {
          "name": "límite inferior"
        },
        {
          "name": "límite superior"
        }
      ]
    },
    "ERFC": {
      "description": "Esta función calcula la función de error complementaria integrada entre un límite inferior y el infinito\".",
      "parameters": [
        {
          "name": "límite inferior"
        }
      ]
    },
    "ERROR.TYPE": {
      "description": "Esta función devuelve un número correspondiente a uno de los valores de error\".",
      "parameters": [
        {
          "name": "error_val"
        }
      ]
    },
    "EURO": {
      "description": "Esta función devuelve el equivalente a un euro según el código de moneda ISO\".",
      "parameters": [
        {
          "name": "código"
        }
      ]
    },
    "EUROCONVERT": {
      "description": "Esta función convierte moneda de una moneda miembro del euro (incluidos euros) a otra moneda miembro del euro (incluidos euros)\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "fuente"
        },
        {
          "name": "objetivo"
        },
        {
          "name": "precisión total"
        },
        {
          "name": "precisión_de_triangulación"
        }
      ]
    },
    "EVEN": {
      "description": "Esta función redondea el valor especificado al entero par más cercano\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "EXACT": {
      "description": "Esta función devuelve verdadero si dos cadenas son iguales; de lo contrario, falso\".",
      "parameters": [
        {
          "name": "texto 1"
        },
        {
          "name": "texto2"
        }
      ]
    },
    "EXP": {
      "description": "Esta función devuelve e elevado a la potencia del valor especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "EXPONDIST": {
      "description": "Esta función devuelve la distribución exponencial o la densidad de probabilidad\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Lambda"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "FACT": {
      "description": "Esta función calcula el factorial del número especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "FACTDOUBLE": {
      "description": "Esta función calcula el factorial doble del número especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "FALSE": {
      "description": "Esta función devuelve el valor lógico FALSO\"."
    },
    "FDIST": {
      "description": "Esta función calcula la distribución de probabilidad F, para ver los grados de diversidad entre dos conjuntos de datos\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "grado_de_libertad1"
        },
        {
          "name": "grados_de_libertad2"
        }
      ]
    },
    "FIND": {
      "description": "Esta función encuentra un valor de texto dentro de otro y devuelve la posición del valor de texto en el texto buscado\".",
      "parameters": [
        {
          "name": "Buscar texto"
        },
        {
          "name": "dentro del texto"
        },
        {
          "name": "num_inicial",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "FINV": {
      "description": "Esta función devuelve la inversa de la distribución de probabilidad F\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grado_de_libertad1"
        },
        {
          "name": "grados_de_libertad2"
        }
      ]
    },
    "FISHER": {
      "description": "Esta función devuelve la transformación de Fisher para un valor especificado\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "FISHERINV": {
      "description": "Esta función devuelve la inversa de la transformación de Fisher para un valor especificado\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "FIXED": {
      "description": "Esta función redondea un número a la cantidad especificada de decimales, formatea el número en formato decimal utilizando un punto y comas (si así se especifica) y devuelve el resultado como texto\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "decimales",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "sin_comas",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "FLOOR": {
      "description": "Esta función redondea un número hacia abajo al múltiplo más cercano de un valor especificado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado"
        }
      ]
    },
    "FORECAST": {
      "description": "Esta función calcula un valor futuro utilizando valores existentes\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Yarray"
        },
        {
          "name": "Matriz X"
        }
      ]
    },
    "FREQUENCY": {
      "description": "Esta función calcula la frecuencia con la que se producen valores dentro de un rango de valores. Esta función devuelve una matriz vertical de números\".",
      "parameters": [
        {
          "name": "matriz de datos"
        },
        {
          "name": "matriz de contenedores"
        }
      ]
    },
    "FTEST": {
      "description": "Esta función devuelve el resultado de una prueba F, que devuelve la probabilidad unilateral de que las varianzas en dos matrices no sean significativamente diferentes\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        }
      ]
    },
    "FV": {
      "description": "Esta función devuelve el valor futuro de una inversión en función de un valor actual, pagos periódicos y una tasa de interés especificada\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "numero"
        },
        {
          "name": "pago"
        },
        {
          "name": "paval"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "FVSCHEDULE": {
      "description": "Esta función devuelve el valor futuro de un capital inicial después de aplicar una serie de tasas de interés compuestas. Calcula el valor futuro de una inversión con una tasa variable o ajustable.",
      "parameters": [
        {
          "name": "principal"
        },
        {
          "name": "cronograma"
        }
      ]
    },
    "GAMMADIST": {
      "description": "Esta función devuelve la distribución gamma\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "GAMMAINV": {
      "description": "Esta función devuelve la inversa de la distribución acumulativa gamma\".",
      "parameters": [
        {
          "name": "probabilidad"
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
      "description": "Esta función devuelve el logaritmo natural de la función Gamma, G(x)\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "GCD": {
      "description": "Esta función devuelve el máximo común divisor de dos números\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "GEOMEAN": {
      "description": "Esta función devuelve la media geométrica de un conjunto de datos positivos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "GESTEP": {
      "description": "Esta función, mayor o igual que paso, devuelve una indicación de si un número es igual a un umbral\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "paso"
        }
      ]
    },
    "GROWTH": {
      "description": "Esta función calcula el crecimiento exponencial previsto. Esta función devuelve los valores y de una serie de nuevos valores x que se especifican utilizando los valores x e y existentes\".",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "nuevox"
        },
        {
          "name": "constante"
        }
      ]
    },
    "HARMEAN": {
      "description": "Esta función devuelve la media armónica de un conjunto de datos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "HEX2BIN": {
      "description": "Esta función convierte un número hexadecimal en un número binario\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "HEX2DEC": {
      "description": "Esta función convierte un número hexadecimal en un número decimal\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "HEX2OCT": {
      "description": "Esta función convierte un número hexadecimal en un número octal\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "HLOOKUP": {
      "description": "Esta función busca un valor en la fila superior y luego devuelve un valor en la misma columna de una fila específica\".",
      "parameters": [
        {
          "name": "valor_buscado"
        },
        {
          "name": "matriz_de_tabla"
        },
        {
          "name": "num_índice_fila"
        },
        {
          "name": "búsqueda_de_rango",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "VERDADERO",
              "description": "Coincidencia aproximada"
            },
            {
              "value": "FALSO",
              "description": "Coincidencia exacta"
            }
          ]
        }
      ]
    },
    "HOUR": {
      "description": "Esta función devuelve la hora que corresponde a una hora especificada.",
      "parameters": [
        {
          "name": "tiempo"
        }
      ]
    },
    "HYPGEOMDIST": {
      "description": "Esta función devuelve la distribución hipergeométrica\".",
      "parameters": [
        {
          "name": "muestras"
        },
        {
          "name": "número_de_muestra"
        },
        {
          "name": "población_s"
        },
        {
          "name": "número_pop"
        }
      ]
    },
    "IF": {
      "description": "Esta función realiza una comparación y devuelve uno de los dos valores proporcionados en función de esa comparación\".",
      "parameters": [
        {
          "name": "prueba lógica"
        },
        {
          "name": "valor_si_es_verdadero"
        },
        {
          "name": "valor_si_es_falso"
        }
      ]
    },
    "IFERROR": {
      "description": "Esta función evalúa una fórmula y devuelve un valor que usted proporciona si hay un error o el resultado de la fórmula\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "valor_si_error"
        }
      ]
    },
    "IMABS": {
      "description": "Esta función devuelve el valor absoluto o módulo de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMAGINARY": {
      "description": "Esta función devuelve el coeficiente imaginario de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMARGUMENT": {
      "description": "Esta función devuelve el argumento theta, que es un ángulo expresado en radianes\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMCONJUGATE": {
      "description": "Esta función devuelve el conjugado complejo de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMCOS": {
      "description": "Esta función devuelve el coseno de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMDIV": {
      "description": "Esta función devuelve el cociente de dos números complejos\".",
      "parameters": [
        {
          "name": "número complejo"
        },
        {
          "name": "complejodenom"
        }
      ]
    },
    "IMEXP": {
      "description": "Esta función devuelve el exponencial de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMLN": {
      "description": "Esta función devuelve el logaritmo natural de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMLOG2": {
      "description": "Esta función devuelve el logaritmo en base 2 de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMLOG10": {
      "description": "Esta función devuelve el logaritmo común de un número complejo\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMPOWER": {
      "description": "Esta función devuelve un número complejo elevado a una potencia\".",
      "parameters": [
        {
          "name": "número complejo"
        },
        {
          "name": "número de potencia"
        }
      ]
    },
    "IMPRODUCT": {
      "description": "Esta función devuelve el producto de hasta 29 números complejos en el formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "complejonum1"
        },
        {
          "name": "complejonum2",
          "repeatable": "verdadero"
        }
      ]
    },
    "IMREAL": {
      "description": "Esta función devuelve el coeficiente real de un número complejo en el formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMSIN": {
      "description": "Esta función devuelve el seno de un número complejo en el formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMSQRT": {
      "description": "Esta función devuelve la raíz cuadrada de un número complejo en el formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMSUB": {
      "description": "Esta función devuelve la diferencia de dos números complejos en el formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "complejonum1"
        },
        {
          "name": "complejonum2"
        }
      ]
    },
    "IMSUM": {
      "description": "Esta función devuelve la suma de dos o más números complejos en el formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "complejonum1"
        },
        {
          "name": "complejonum2",
          "repeatable": "verdadero"
        }
      ]
    },
    "INDEX": {
      "description": "Esta función devuelve un valor o la referencia a un valor dentro de una matriz o rango\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "num_fila"
        },
        {
          "name": "num_columna"
        },
        {
          "name": "núm_área"
        }
      ]
    },
    "INDIRECT": {
      "description": "Esta función devuelve la referencia especificada por una cadena de texto. Las referencias se evalúan inmediatamente para mostrar su contenido\".",
      "parameters": [
        {
          "name": "texto de referencia"
        },
        {
          "name": "estilo a1",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "INT": {
      "description": "Esta función redondea un número específico al entero más cercano\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "INTERCEPT": {
      "description": "Esta función devuelve las coordenadas de un punto en el que una línea interseca el eje y, utilizando valores x e y existentes\".",
      "parameters": [
        {
          "name": "dependiente"
        },
        {
          "name": "independiente"
        }
      ]
    },
    "INTRATE": {
      "description": "Esta función calcula la tasa de interés de un valor totalmente invertido\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "inversión"
        },
        {
          "name": "redención"
        },
        {
          "name": "base"
        }
      ]
    },
    "IPMT": {
      "description": "Esta función calcula el pago de intereses de un préstamo.",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "por"
        },
        {
          "name": "nper"
        },
        {
          "name": "paval"
        },
        {
          "name": "vale"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "IRR": {
      "description": "Esta función devuelve la tasa interna de retorno de una serie de flujos de efectivo representados por los números de una matriz\".",
      "parameters": [
        {
          "name": "arrayvals"
        },
        {
          "name": "estimar"
        }
      ]
    },
    "ISBLANK": {
      "description": "Esta función prueba si un valor, una expresión o el contenido de una celda referenciada está vacío\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISERR": {
      "description": "Esta función, ¿Hay un error distinto de no disponible?, prueba si un valor, una expresión o el contenido de una celda referenciada tiene un error distinto de no disponible (#N/A)\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISERROR": {
      "description": "Esta función, Is Error of Any Kind, prueba si un valor, una expresión o el contenido de una celda referenciada tiene un error de cualquier tipo\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISEVEN": {
      "description": "Esta función, ¿El número es par?, prueba si un valor, una expresión o el contenido de una celda referenciada es par\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISLOGICAL": {
      "description": "Esta función prueba si un valor, una expresión o el contenido de una celda referenciada es un valor lógico (booleano)\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISNA": {
      "description": "Esta función, No disponible, prueba si un valor, una expresión o el contenido de una celda referenciada tiene el valor de error no disponible (#N/A)\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISNONTEXT": {
      "description": "Esta función prueba si un valor, una expresión o el contenido de una celda referenciada tiene algún tipo de datos distinto de texto\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISNUMBER": {
      "description": "Esta función prueba si un valor, una expresión o el contenido de una celda referenciada tiene datos numéricos\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISODD": {
      "description": "Esta función, ¿Es número impar?, prueba si un valor, una expresión o el contenido de una celda referenciada tiene datos numéricos\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISPMT": {
      "description": "Esta función calcula el interés pagado durante un período específico de una inversión\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "por"
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
      "description": "Esta función, Es referencia, prueba si un valor, una expresión o el contenido de una celda referenciada es una referencia a otra celda\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "ISTEXT": {
      "description": "Esta función prueba si un valor, una expresión o el contenido de una celda referenciada tiene datos de texto\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "KURT": {
      "description": "Esta función devuelve la curtosis de un conjunto de datos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2"
        },
        {
          "name": "número 3"
        },
        {
          "name": "número 4",
          "repeatable": "verdadero"
        }
      ]
    },
    "LARGE": {
      "description": "Esta función devuelve el n-ésimo valor más grande en un conjunto de datos, donde se especifica n\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "norte"
        }
      ]
    },
    "LCM": {
      "description": "Esta función devuelve el mínimo común múltiplo de dos números\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "LEFT": {
      "description": "Esta función devuelve los caracteres especificados más a la izquierda de un valor de texto y se basa en la cantidad de caracteres que especifique\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "num_caracteres"
        }
      ]
    },
    "LEN": {
      "description": "Esta función devuelve la longitud del número de caracteres en una cadena de texto\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "LINEST": {
      "description": "Esta función calcula las estadísticas de una línea\".",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "constante"
        },
        {
          "name": "estadísticas"
        }
      ]
    },
    "LN": {
      "description": "Esta función devuelve el logaritmo natural del número especificado\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "LOG": {
      "description": "Esta función devuelve el logaritmo base Y de un número X.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "base"
        }
      ]
    },
    "LOG10": {
      "description": "Esta función devuelve el logaritmo en base 10 del número dado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "LOGEST": {
      "description": "Esta función calcula una curva exponencial que se ajusta a los datos y devuelve una matriz de valores que describe la curva\".",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "constante"
        },
        {
          "name": "estadísticas"
        }
      ]
    },
    "LOGINV": {
      "description": "Esta función devuelve la inversa de la función de distribución acumulativa lognormal de x, donde LN(x) se distribuye normalmente con la media y la desviación estándar especificadas\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        }
      ]
    },
    "LOGNORMDIST": {
      "description": "Esta función devuelve la distribución normal logarítmica natural acumulada de x, donde LN(x) se distribuye normalmente con la media y la desviación estándar especificadas. Analice los datos que se han transformado logarítmicamente con esta función\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        }
      ]
    },
    "LOOKUP": {
      "description": "Esta función busca un valor y devuelve un valor de la misma ubicación en una segunda área\".",
      "parameters": [
        {
          "name": "valor_buscado"
        },
        {
          "name": "vector_de_búsqueda"
        },
        {
          "name": "vector_resultado"
        }
      ]
    },
    "LOWER": {
      "description": "Esta función convierte el texto a letras minúsculas\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "MATCH": {
      "description": "Esta función devuelve la posición relativa de un elemento especificado en un rango\".",
      "parameters": [
        {
          "name": "valor_buscado"
        },
        {
          "name": "matriz_de_búsqueda"
        },
        {
          "name": "tipo de coincidencia"
        }
      ]
    },
    "XMATCH": {
      "description": "Esta función devuelve la posición relativa de un elemento en una matriz. De manera predeterminada, se requiere una coincidencia exacta\".",
      "parameters": [
        {
          "name": "valor_buscado"
        },
        {
          "name": "matriz_de_búsqueda"
        },
        {
          "name": "modo de coincidencia",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "0",
              "description": "Coincidencia exacta (predeterminado)"
            },
            {
              "value": "-1",
              "description": "Coincidencia exacta o siguiente elemento más pequeño"
            },
            {
              "value": "1",
              "description": "Coincidencia exacta o siguiente elemento más grande"
            },
            {
              "value": "2",
              "description": "Una coincidencia de comodín donde *, ? y ~ tienen un significado especial\"."
            }
          ]
        },
        {
          "name": "modo de búsqueda",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "1",
              "description": "Buscar de primero a último (predeterminado)"
            },
            {
              "value": "-1",
              "description": "Buscar del último al primero (búsqueda inversa)"
            },
            {
              "value": "2",
              "description": "Realice una búsqueda binaria que se base en que lookup_array esté ordenado en orden ascendente. Si no está ordenado, se devolverán resultados no válidos\"."
            },
            {
              "value": "-2",
              "description": "Realice una búsqueda binaria que se base en que lookup_array se ordene en orden descendente. Si no se ordena, se devolverán resultados no válidos\"."
            }
          ]
        }
      ]
    },
    "XLOOKUP": {
      "description": "Esta función busca una coincidencia en un rango o una matriz y devuelve el elemento correspondiente de un segundo rango o matriz. De manera predeterminada, se utiliza una coincidencia exacta\".",
      "parameters": [
        {
          "name": "valor_buscado"
        },
        {
          "name": "matriz_de_búsqueda"
        },
        {
          "name": "matriz de retorno"
        },
        {
          "name": "si no se encuentra",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "modo de coincidencia",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "0",
              "description": "Coincidencia exacta (predeterminado)"
            },
            {
              "value": "-1",
              "description": "Coincidencia exacta o siguiente elemento más pequeño"
            },
            {
              "value": "1",
              "description": "Coincidencia exacta o siguiente elemento más grande"
            },
            {
              "value": "2",
              "description": "Una coincidencia de comodín donde *, ? y ~ tienen un significado especial\"."
            }
          ]
        },
        {
          "name": "modo de búsqueda",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "1",
              "description": "Buscar de primero a último (predeterminado)"
            },
            {
              "value": "-1",
              "description": "Buscar del último al primero (búsqueda inversa)"
            },
            {
              "value": "2",
              "description": "Realice una búsqueda binaria que se base en que lookup_array esté ordenado en orden ascendente. Si no está ordenado, se devolverán resultados no válidos\"."
            },
            {
              "value": "-2",
              "description": "Realice una búsqueda binaria que se base en que lookup_array se ordene en orden descendente. Si no se ordena, se devolverán resultados no válidos\"."
            }
          ]
        }
      ]
    },
    "MAX": {
      "description": "Esta función devuelve el valor máximo, el mayor valor, de todos los valores en los argumentos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "MAXA": {
      "description": "Esta función devuelve el valor más grande en una lista de argumentos, incluidos texto y valores lógicos\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "MDETERM": {
      "description": "Esta función devuelve el determinante matricial de una matriz\".",
      "parameters": [
        {
          "name": "formación"
        }
      ]
    },
    "MDURATION": {
      "description": "Esta función calcula la duración Macaulay modificada de un valor con un valor nominal supuesto de $100\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "cupón"
        },
        {
          "name": "producir"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "MEDIAN": {
      "description": "Esta función devuelve la mediana, el número en el medio del conjunto de números proporcionado; es decir, la mitad de los números tienen valores mayores que la mediana y la otra mitad tiene valores menores que la mediana\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "MID": {
      "description": "Esta función devuelve la cantidad solicitada de caracteres de una cadena de texto comenzando en la posición que usted especifique y en función de la cantidad de caracteres que especifique\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "num_inicial"
        },
        {
          "name": "num_caracteres"
        }
      ]
    },
    "MIN": {
      "description": "Esta función devuelve el valor mínimo, el valor más bajo, de todos los valores en los argumentos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "MINA": {
      "description": "Esta función devuelve el valor mínimo en una lista de argumentos, incluyendo texto y valores lógicos\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "MINUTE": {
      "description": "Esta función devuelve el minuto correspondiente a una hora especificada.",
      "parameters": [
        {
          "name": "tiempo"
        }
      ]
    },
    "MINVERSE": {
      "description": "Esta función devuelve la matriz inversa de la matriz almacenada en una matriz\".",
      "parameters": [
        {
          "name": "formación"
        }
      ]
    },
    "MIRR": {
      "description": "Esta función devuelve la tasa interna de retorno modificada para una serie de flujos de efectivo periódicos\".",
      "parameters": [
        {
          "name": "valores"
        },
        {
          "name": "tasa financiera"
        },
        {
          "name": "tasa de reinversión"
        }
      ]
    },
    "MMULT": {
      "description": "Esta función devuelve el producto matricial de dos matrices\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        }
      ]
    },
    "MOD": {
      "description": "Esta función devuelve el resto de una operación de división\".",
      "parameters": [
        {
          "name": "dividendo"
        },
        {
          "name": "divisor"
        }
      ]
    },
    "MODE": {
      "description": "Esta función devuelve el valor que aparece con mayor frecuencia en un conjunto de datos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "MONTH": {
      "description": "Esta función devuelve el mes correspondiente al valor de fecha especificado.",
      "parameters": [
        {
          "name": "fecha"
        }
      ]
    },
    "MROUND": {
      "description": "Esta función devuelve un número redondeado al múltiplo deseado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "múltiple"
        }
      ]
    },
    "MULTINOMIAL": {
      "description": "Esta función calcula la relación entre el factorial de una suma de valores y el producto de factoriales\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "MUNIT": {
      "description": "La función devuelve la matriz unitaria para la dimensión especificada\".",
      "parameters": [
        {
          "name": "dimensión"
        }
      ]
    },
    "N": {
      "description": "Esta función devuelve un valor convertido a un número.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "NA": {
      "description": "Esta función devuelve el valor de error #N/A que significa no disponible\"."
    },
    "SHEET": {
      "description": "Devuelve el número de hoja de la hoja de referencia.",
      "parameters": [
        {
          "name": "valor",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SHEETS": {
      "description": "Devuelve el número de hojas en una referencia.",
      "parameters": [
        {
          "name": "referencia",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "NEGBINOMDIST": {
      "description": "Esta función devuelve la distribución binomial negativa\".",
      "parameters": [
        {
          "name": "número_f"
        },
        {
          "name": "números"
        },
        {
          "name": "probabilidad_s"
        }
      ]
    },
    "NETWORKDAYS": {
      "description": "Esta función devuelve el número total de días laborables completos entre las fechas de inicio y finalización\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "fecha_final"
        },
        {
          "name": "vacaciones",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "NOMINAL": {
      "description": "Esta función devuelve la tasa de interés anual nominal para una tasa efectiva determinada y un número de períodos de capitalización por año\".",
      "parameters": [
        {
          "name": "tasa de efecto"
        },
        {
          "name": "npería"
        }
      ]
    },
    "NORMDIST": {
      "description": "Esta función devuelve la distribución acumulativa normal para la media y la desviación estándar especificadas\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "NORMINV": {
      "description": "Esta función devuelve la inversa de la distribución acumulativa normal para la media y la desviación estándar dadas\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        }
      ]
    },
    "NORMSDIST": {
      "description": "Esta función devuelve la función de distribución acumulativa normal estándar\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "NORMSINV": {
      "description": "Esta función devuelve la inversa de la distribución acumulativa normal estándar. La distribución tiene una media de cero y una desviación estándar de uno\".",
      "parameters": [
        {
          "name": "probabilidad"
        }
      ]
    },
    "NOT": {
      "description": "Esta función invierte el valor lógico de su argumento\".",
      "parameters": [
        {
          "name": "lógico"
        }
      ]
    },
    "NOW": {
      "description": "Esta función devuelve la fecha y hora actuales."
    },
    "NPER": {
      "description": "Esta función devuelve el número de períodos de una inversión en función de un valor presente, un valor futuro, pagos periódicos y una tasa de interés especificada\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "pago"
        },
        {
          "name": "paval"
        },
        {
          "name": "vale"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "NPV": {
      "description": "Esta función calcula el valor actual neto de una inversión utilizando una tasa de descuento y una serie de pagos e ingresos futuros\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "OBJECT": {
      "description": "Esta función convierte la secuencia de propiedad/expresión en un objeto\".",
      "parameters": [
        {
          "name": "propiedad1",
          "repeatable": "verdadero"
        },
        {
          "name": "expresión1",
          "repeatable": "verdadero"
        }
      ]
    },
    "OCT2BIN": {
      "description": "Esta función convierte un número octal en un número binario\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "OCT2DEC": {
      "description": "Esta función convierte un número octal en un número decimal\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "OCT2HEX": {
      "description": "Esta función convierte un número octal en un número hexadecimal\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "lugares"
        }
      ]
    },
    "ODD": {
      "description": "Esta función redondea el valor especificado al entero impar más cercano\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ODDFPRICE": {
      "description": "Esta función calcula el precio por cada $100 de valor nominal de un valor con un primer período impar\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "asunto"
        },
        {
          "name": "primer_cupón"
        },
        {
          "name": "tasa"
        },
        {
          "name": "producir"
        },
        {
          "name": "redención"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDFYIELD": {
      "description": "Esta función calcula el rendimiento de un valor con un primer periodo impar\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "asunto"
        },
        {
          "name": "primer_cupón"
        },
        {
          "name": "tasa"
        },
        {
          "name": "precio"
        },
        {
          "name": "redención"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLPRICE": {
      "description": "Esta función calcula el precio por cada $100 de valor nominal de un valor con un período de último cupón impar\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "último_interés"
        },
        {
          "name": "tasa"
        },
        {
          "name": "producir"
        },
        {
          "name": "redención"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLYIELD": {
      "description": "Esta función calcula el rendimiento de un valor con un último periodo impar.",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "último_interés"
        },
        {
          "name": "tasa"
        },
        {
          "name": "precio"
        },
        {
          "name": "redención"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "OFFSET": {
      "description": "Esta función devuelve una referencia a un rango. El rango es un número específico de filas y columnas de una celda o un rango de celdas. La función devuelve una sola celda o un rango de celdas\".",
      "parameters": [
        {
          "name": "referencia"
        },
        {
          "name": "filas"
        },
        {
          "name": "columpios"
        },
        {
          "name": "altura",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "ancho",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "OR": {
      "description": "Esta función calcula el operador OR lógico. Devuelve VERDADERO si alguno de sus argumentos es verdadero; de lo contrario, devuelve FALSO si todos los argumentos son falsos\".",
      "parameters": [
        {
          "name": "logico1"
        },
        {
          "name": "logico2",
          "repeatable": "verdadero"
        }
      ]
    },
    "PEARSON": {
      "description": "Esta función devuelve el coeficiente de correlación del momento del producto de Pearson, un índice adimensional entre -1,0 y 1,0 inclusive, indicativo de la relación lineal de dos conjuntos de datos\".",
      "parameters": [
        {
          "name": "matriz_ind"
        },
        {
          "name": "matriz_dep"
        }
      ]
    },
    "PERCENTILE": {
      "description": "Esta función devuelve el percentil n de valores en un rango\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "norte"
        }
      ]
    },
    "PERCENTRANK": {
      "description": "Esta función devuelve el rango de un valor en un conjunto de datos como un porcentaje del conjunto de datos\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "significado"
        }
      ]
    },
    "PERMUT": {
      "description": "Esta función devuelve el número de permutaciones posibles para un número específico de elementos\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_elegido"
        }
      ]
    },
    "PI": {
      "description": "Esta función devuelve PI como 3,1415926536\"."
    },
    "PMT": {
      "description": "Esta función devuelve el monto del pago de un préstamo dado el valor actual, la tasa de interés especificada y el número de plazos\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "nper"
        },
        {
          "name": "paval"
        },
        {
          "name": "vale"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "POISSON": {
      "description": "Esta función devuelve la distribución de Poisson\".",
      "parameters": [
        {
          "name": "eventos"
        },
        {
          "name": "significar"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "POWER": {
      "description": "Esta función eleva el número especificado a la potencia especificada\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "fuerza"
        }
      ]
    },
    "PPMT": {
      "description": "Esta función devuelve el monto del pago del capital de un préstamo dado el valor actual, la tasa de interés especificada y el número de plazos\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "por"
        },
        {
          "name": "nper"
        },
        {
          "name": "paval"
        },
        {
          "name": "vale"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "PRICE": {
      "description": "Esta función calcula el precio por cada $100 de valor nominal de un título de interés periódico",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "tasa"
        },
        {
          "name": "producir"
        },
        {
          "name": "redención"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEDISC": {
      "description": "Esta función devuelve el precio por cada $100 de valor nominal de un valor descontado\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "descuento"
        },
        {
          "name": "redención"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEMAT": {
      "description": "Esta función devuelve el precio al vencimiento por cada $100 de valor nominal de un título que paga intereses\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "asunto"
        },
        {
          "name": "tasa"
        },
        {
          "name": "producir"
        },
        {
          "name": "base"
        }
      ]
    },
    "PROB": {
      "description": "Esta función devuelve la probabilidad de que los valores de un rango estén entre dos límites\".",
      "parameters": [
        {
          "name": "rango x"
        },
        {
          "name": "rango de probabilidad"
        },
        {
          "name": "límite inferior"
        },
        {
          "name": "límite superior"
        }
      ]
    },
    "PRODUCT": {
      "description": "Esta función multiplica todos los argumentos y devuelve el producto\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "PROPER": {
      "description": "Esta función pone en mayúscula la primera letra de cada palabra de una cadena de texto\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "PROPERTY": {
      "description": "Esta función devuelve el valor de la ruta de la propiedad en el objeto\".",
      "parameters": [
        {
          "name": "expresión_de_datos"
        },
        {
          "name": "ruta_de_propiedad"
        }
      ]
    },
    "PV": {
      "description": "Esta función devuelve el valor actual de una inversión en función de la tasa de interés, el número y el importe de los pagos periódicos y el valor futuro. El valor actual es el importe total que vale ahora una serie de pagos futuros\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "numero"
        },
        {
          "name": "pago"
        },
        {
          "name": "vale"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "QUARTILE": {
      "description": "Esta función devuelve a qué cuartil (qué cuarto o 25 por ciento) de un conjunto de datos pertenece un valor\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "cuarto de galón"
        }
      ]
    },
    "QUOTIENT": {
      "description": "Esta función devuelve la parte entera de una división. Utilícela para ignorar el resto de una división\".",
      "parameters": [
        {
          "name": "numerador"
        },
        {
          "name": "denominador"
        }
      ]
    },
    "RADIANS": {
      "description": "Esta función convierte el número especificado de grados a radianes\".",
      "parameters": [
        {
          "name": "ángulo"
        }
      ]
    },
    "RAND": {
      "description": "Esta función devuelve un número aleatorio distribuido uniformemente entre 0 y 1\"."
    },
    "RANDBETWEEN": {
      "description": "Esta función devuelve un número aleatorio entre los números que especifique\".",
      "parameters": [
        {
          "name": "abajo"
        },
        {
          "name": "arriba"
        }
      ]
    },
    "RANGEBLOCKSPARKLINE": {
      "description": "Esta función devuelve una plantilla de rango\".",
      "parameters": [
        {
          "name": "rango_de_plantilla"
        },
        {
          "name": "expresión_de_datos"
        }
      ]
    },
    "RANK": {
      "description": "Esta función devuelve el rango de un número en un conjunto de números. Si tuviera que ordenar el conjunto, el rango del número sería su posición en la lista\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "árbitro"
        },
        {
          "name": "orden",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "RATE": {
      "description": "Esta función devuelve la tasa de interés por período de una anualidad\".",
      "parameters": [
        {
          "name": "nper"
        },
        {
          "name": "pago"
        },
        {
          "name": "paval"
        },
        {
          "name": "vale"
        },
        {
          "name": "tipo"
        },
        {
          "name": "adivinar"
        }
      ]
    },
    "RECEIVED": {
      "description": "Esta función devuelve el importe recibido al vencimiento por un valor totalmente invertido\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "inversión"
        },
        {
          "name": "descuento"
        },
        {
          "name": "base"
        }
      ]
    },
    "REPLACE": {
      "description": "Esta función reemplaza parte de una cadena de texto con una cadena de texto diferente, según la cantidad de caracteres que especifique\".",
      "parameters": [
        {
          "name": "texto antiguo"
        },
        {
          "name": "num_inicial"
        },
        {
          "name": "num_caracteres"
        },
        {
          "name": "nuevo_texto"
        }
      ]
    },
    "REPT": {
      "description": "Esta función repite el texto un número específico de veces\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "número_de_veces"
        }
      ]
    },
    "RIGHT": {
      "description": "Esta función devuelve los caracteres especificados más a la derecha de un valor de texto y en función del número de caracteres que especifique\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "num_caracteres"
        }
      ]
    },
    "ROMAN": {
      "description": "Esta función convierte un número arábigo en un texto equivalente en número romano\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "forma"
        }
      ]
    },
    "ROUND": {
      "description": "Esta función redondea el valor especificado al número más cercano, utilizando la cantidad especificada de decimales\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "num_digitos"
        }
      ]
    },
    "ROUNDDOWN": {
      "description": "Esta función redondea el número especificado al número más cercano, utilizando la cantidad especificada de decimales\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "num_digitos"
        }
      ]
    },
    "ROUNDUP": {
      "description": "Esta función redondea el número especificado al número más cercano, utilizando la cantidad especificada de decimales\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "num_digitos"
        }
      ]
    },
    "ROW": {
      "description": "Esta función devuelve el número de una fila a partir de una referencia\".",
      "parameters": [
        {
          "name": "referencia"
        }
      ]
    },
    "ROWS": {
      "description": "Esta función devuelve el número de filas en una matriz\".",
      "parameters": [
        {
          "name": "formación"
        }
      ]
    },
    "RSQ": {
      "description": "Esta función devuelve el cuadrado del coeficiente de correlación del momento del producto de Pearson (R-cuadrado) a través de puntos de datos en y conocidas y x conocidas\".",
      "parameters": [
        {
          "name": "matriz_dep"
        },
        {
          "name": "matriz_ind"
        }
      ]
    },
    "SEARCH": {
      "description": "Esta función encuentra una cadena de texto en otra cadena de texto y devuelve el índice de la posición inicial del texto encontrado\".",
      "parameters": [
        {
          "name": "Buscar texto"
        },
        {
          "name": "dentro del texto"
        },
        {
          "name": "num_inicial",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SECOND": {
      "description": "Esta función devuelve el valor de los segundos (0 a 59) para un tiempo especificado\".",
      "parameters": [
        {
          "name": "tiempo"
        }
      ]
    },
    "SERIESSUM": {
      "description": "Esta función devuelve la suma de una serie de potencias\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "norte"
        },
        {
          "name": "metro"
        },
        {
          "name": "coeficientes"
        }
      ]
    },
    "SIGN": {
      "description": "Esta función devuelve el signo de un número o expresión\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "SIN": {
      "description": "Esta función devuelve el seno del ángulo especificado\".",
      "parameters": [
        {
          "name": "ángulo"
        }
      ]
    },
    "SINH": {
      "description": "Esta función devuelve el seno hiperbólico del número especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "SKEW": {
      "description": "Esta función devuelve la asimetría de una distribución\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "SLN": {
      "description": "Esta función devuelve la depreciación lineal de un activo durante un período\".",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvar"
        },
        {
          "name": "vida"
        }
      ]
    },
    "SLOPE": {
      "description": "Esta función calcula la pendiente de una regresión lineal\".",
      "parameters": [
        {
          "name": "matriz_dep"
        },
        {
          "name": "matriz_ind"
        }
      ]
    },
    "SMALL": {
      "description": "Esta función devuelve el n-ésimo valor más pequeño en un conjunto de datos, donde se especifica n\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "norte"
        }
      ]
    },
    "SQRT": {
      "description": "Esta función devuelve la raíz cuadrada positiva del número especificado\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "SQRTPI": {
      "description": "Esta función devuelve la raíz cuadrada positiva de un múltiplo de pi (p)\".",
      "parameters": [
        {
          "name": "múltiple"
        }
      ]
    },
    "STANDARDIZE": {
      "description": "Esta función devuelve un valor normalizado de una distribución caracterizada por la media y la desviación estándar\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        }
      ]
    },
    "STDEVA": {
      "description": "Esta función devuelve la desviación estándar de un conjunto de números, texto o valores lógicos\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "STDEVP": {
      "description": "Esta función devuelve la desviación estándar para toda una población especificada (de valores numéricos)\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "STDEVPA": {
      "description": "Esta función devuelve la desviación estándar para toda una población especificada, incluidos valores de texto o lógicos, así como valores numéricos\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "STEYX": {
      "description": "Esta función devuelve el error estándar del valor y previsto para cada x. El error estándar es una medida de la cantidad de error en la predicción de y para un valor de x\".",
      "parameters": [
        {
          "name": "matriz_dep"
        },
        {
          "name": "matriz_ind"
        }
      ]
    },
    "SUBSTITUTE": {
      "description": "Esta función sustituye una nueva cadena por caracteres específicos en una cadena existente\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "texto antiguo"
        },
        {
          "name": "nuevo_texto"
        },
        {
          "name": "num_instancia",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SUBTOTAL": {
      "description": "Esta función calcula un subtotal de una lista de números utilizando una función incorporada especificada\".",
      "parameters": [
        {
          "name": "función_num"
        },
        {
          "name": "Referencia 1"
        },
        {
          "name": "Referencia 2",
          "repeatable": "verdadero"
        }
      ]
    },
    "SUM": {
      "description": "Esta función devuelve la suma de celdas o el rango de celdas\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "SUMIF": {
      "description": "Esta función agrega las celdas utilizando un criterio determinado\".",
      "parameters": [
        {
          "name": "rango"
        },
        {
          "name": "criterios"
        },
        {
          "name": "rango_suma"
        }
      ]
    },
    "SUMIFS": {
      "description": "Esta función agrega las celdas en un rango utilizando múltiples criterios\".",
      "parameters": [
        {
          "name": "rango_suma"
        },
        {
          "name": "rango_de_criterios1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "rango_de_criterios2",
          "repeatable": "verdadero"
        },
        {
          "name": "criterio2",
          "repeatable": "verdadero"
        }
      ]
    },
    "SUMPRODUCT": {
      "description": "Esta función devuelve la suma de los productos de las celdas. Multiplica los componentes correspondientes en las matrices dadas y devuelve la suma de esos productos\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2",
          "repeatable": "verdadero"
        }
      ]
    },
    "SUMSQ": {
      "description": "Esta función devuelve la suma de los cuadrados de los argumentos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "SUMX2MY2": {
      "description": "Esta función devuelve la suma de la diferencia de los cuadrados de los valores correspondientes en dos matrices\".",
      "parameters": [
        {
          "name": "matriz_x"
        },
        {
          "name": "matriz_y"
        }
      ]
    },
    "SUMX2PY2": {
      "description": "Esta función devuelve la suma de la suma de los cuadrados de los valores correspondientes en dos matrices\".",
      "parameters": [
        {
          "name": "matriz_x"
        },
        {
          "name": "matriz_y"
        }
      ]
    },
    "SUMXMY2": {
      "description": "Esta función devuelve la suma del cuadrado de las diferencias de los valores correspondientes en dos matrices\".",
      "parameters": [
        {
          "name": "matriz_x"
        },
        {
          "name": "matriz_y"
        }
      ]
    },
    "SYD": {
      "description": "Esta función devuelve la suma de los dígitos de los años de depreciación de un activo durante un período específico\".",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvar"
        },
        {
          "name": "vida"
        },
        {
          "name": "período"
        }
      ]
    },
    "T": {
      "description": "Esta función devuelve el texto en una celda especificada\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "TAN": {
      "description": "Esta función devuelve la tangente del ángulo especificado.",
      "parameters": [
        {
          "name": "ángulo"
        }
      ]
    },
    "TANH": {
      "description": "Esta función devuelve la tangente hiperbólica del número especificado\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "TBILLEQ": {
      "description": "Esta función devuelve el rendimiento equivalente de una letra del Tesoro (o T-bill)",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "descuento"
        }
      ]
    },
    "TBILLPRICE": {
      "description": "Esta función devuelve el precio por cada $100 de valor nominal de una letra del Tesoro (o T-bill)\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "descuento"
        }
      ]
    },
    "TBILLYIELD": {
      "description": "Esta función devuelve el rendimiento de una letra del Tesoro (o T-bill)\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "Preciosidad"
        }
      ]
    },
    "TDIST": {
      "description": "Esta función devuelve la probabilidad de la distribución t\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "grados de libertad"
        },
        {
          "name": "cruz"
        }
      ]
    },
    "TEXT": {
      "description": "Esta función formatea un número y lo convierte en texto\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "formato_texto"
        }
      ]
    },
    "TIME": {
      "description": "Esta función devuelve el objeto TimeSpan para un tiempo especificado\".",
      "parameters": [
        {
          "name": "hora"
        },
        {
          "name": "minuto"
        },
        {
          "name": "segundo"
        }
      ]
    },
    "TIMEVALUE": {
      "description": "Esta función devuelve el objeto TimeSpan del tiempo representado por una cadena de texto\".",
      "parameters": [
        {
          "name": "texto_de_tiempo"
        }
      ]
    },
    "TINV": {
      "description": "Esta función devuelve el valor t de la distribución t de Student en función de la probabilidad y los grados de libertad\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "TODAY": {
      "description": "Esta función devuelve la fecha y hora de la fecha actual."
    },
    "TRANSPOSE": {
      "description": "Esta función devuelve un rango vertical de celdas como un rango horizontal o un rango horizontal de celdas como un rango vertical\".",
      "parameters": [
        {
          "name": "formación"
        }
      ]
    },
    "TREND": {
      "description": "Esta función devuelve valores a lo largo de una tendencia lineal. Esta función ajusta una línea recta a los valores x e y conocidos de la matriz. La tendencia devuelve los valores y a lo largo de esa línea para la matriz de nuevos valores x especificados\".",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "nuevox"
        },
        {
          "name": "constante"
        }
      ]
    },
    "TRIM": {
      "description": "Esta función elimina espacios adicionales de una cadena y deja espacios simples entre las palabras\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "TRIMMEAN": {
      "description": "Esta función devuelve la media de un subconjunto de datos excluyendo los datos superiores e inferiores\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "por ciento"
        }
      ]
    },
    "TRUE": {
      "description": "Esta función devuelve el valor lógico VERDADERO\"."
    },
    "TRUNC": {
      "description": "Esta función elimina la parte fraccionaria especificada del número especificado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "num_digitos"
        }
      ]
    },
    "TTEST": {
      "description": "Esta función devuelve la probabilidad asociada con una prueba t\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        },
        {
          "name": "cruz"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "TYPE": {
      "description": "Esta función devuelve el tipo de valor\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "UPPER": {
      "description": "Esta función convierte el texto a letras mayúsculas\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "VALUE": {
      "description": "Esta función convierte una cadena de texto que es un número en un valor numérico\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "VAR": {
      "description": "Esta función devuelve la varianza basada en una muestra de una población, que utiliza solo valores numéricos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "VARA": {
      "description": "Esta función devuelve la varianza basada en una muestra de una población, que incluye valores numéricos, lógicos o de texto\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "VARP": {
      "description": "Esta función devuelve la varianza basada en toda la población, que utiliza solo valores numéricos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "VARPA": {
      "description": "Esta función devuelve la varianza basada en toda la población, que incluye valores numéricos, lógicos o de texto\".",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadero"
        }
      ]
    },
    "VDB": {
      "description": "Esta función devuelve la depreciación de un activo para cualquier período que especifique utilizando el método de saldo decreciente variable\".",
      "parameters": [
        {
          "name": "costo"
        },
        {
          "name": "salvar"
        },
        {
          "name": "vida"
        },
        {
          "name": "periodo_de_inicio"
        },
        {
          "name": "fin del periodo"
        },
        {
          "name": "factor"
        },
        {
          "name": "sin interruptor"
        }
      ]
    },
    "VLOOKUP": {
      "description": "Esta función busca un valor en la columna más a la izquierda y devuelve un valor en la misma fila de una columna que usted especifique\".",
      "parameters": [
        {
          "name": "valor_buscado"
        },
        {
          "name": "matriz_de_tabla"
        },
        {
          "name": "num_índice_col"
        },
        {
          "name": "búsqueda_de_rango",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "VERDADERO",
              "description": "Coincidencia aproximada"
            },
            {
              "value": "FALSO",
              "description": "Coincidencia exacta"
            }
          ]
        }
      ]
    },
    "WEEKDAY": {
      "description": "Esta función devuelve el número correspondiente al día de la semana para una fecha especificada.",
      "parameters": [
        {
          "name": "fecha"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "WEEKNUM": {
      "description": "Esta función devuelve un número que indica numéricamente la semana del año.",
      "parameters": [
        {
          "name": "fecha"
        },
        {
          "name": "tipo de semana"
        }
      ]
    },
    "DATEPART": {
      "description": "Esta función formatea una fecha y la convierte en texto\".",
      "parameters": [
        {
          "name": "fecha"
        },
        {
          "name": "formato_texto"
        },
        {
          "name": "tipo de semana",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "WEIBULL": {
      "description": "Esta función devuelve la distribución Weibull de dos parámetros, a menudo utilizada en el análisis de confiabilidad\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "WORKDAY": {
      "description": "Esta función devuelve el número de días laborables antes o después de la fecha de inicio\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "días"
        },
        {
          "name": "vacaciones",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "XIRR": {
      "description": "Esta función calcula la tasa interna de retorno para un cronograma de flujos de efectivo que puede no ser periódico\".",
      "parameters": [
        {
          "name": "valores"
        },
        {
          "name": "fechas"
        },
        {
          "name": "adivinar"
        }
      ]
    },
    "XNPV": {
      "description": "Esta función calcula el valor actual neto de un cronograma de flujos de efectivo que puede no ser periódico\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "valores"
        },
        {
          "name": "fechas"
        }
      ]
    },
    "YEAR": {
      "description": "Esta función devuelve el año como un entero para una fecha específica\".",
      "parameters": [
        {
          "name": "fecha"
        }
      ]
    },
    "YEARFRAC": {
      "description": "Esta función devuelve la fracción del año representada por el número de días completos entre las fechas de inicio y finalización\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "fecha_final"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELD": {
      "description": "Esta función calcula el rendimiento de un valor que paga intereses periódicos\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "tasa"
        },
        {
          "name": "precio"
        },
        {
          "name": "redención"
        },
        {
          "name": "frecuencia"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDDISC": {
      "description": "Esta función calcula el rendimiento anual de un valor descontado\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "precio"
        },
        {
          "name": "redención"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDMAT": {
      "description": "Esta función calcula el rendimiento anual de un valor que paga intereses al vencimiento\".",
      "parameters": [
        {
          "name": "asentamiento"
        },
        {
          "name": "madurez"
        },
        {
          "name": "asunto"
        },
        {
          "name": "tasa"
        },
        {
          "name": "precio"
        },
        {
          "name": "base"
        }
      ]
    },
    "ZTEST": {
      "description": "Esta función devuelve el valor de significancia de una prueba z. La prueba z genera una puntuación estándar para x con respecto al conjunto de datos y devuelve la probabilidad de dos colas para la distribución normal\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "sigma",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "HBARSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de barras Hbar",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Esquema de color"
        },
        {
          "name": "ejeVisible"
        },
        {
          "name": "altura de la barra"
        }
      ]
    },
    "VBARSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de barras Vbar",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Esquema de color"
        },
        {
          "name": "ejeVisible"
        },
        {
          "name": "Ancho de barra"
        }
      ]
    },
    "VARISPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de varianza",
      "parameters": [
        {
          "name": "diferencia"
        },
        {
          "name": "referencia"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "marca"
        },
        {
          "name": "unidad de tictac"
        },
        {
          "name": "leyenda"
        },
        {
          "name": "colorPositivo"
        },
        {
          "name": "colorNegativo"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "LOLLIPOPVARISPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de varianza absoluta o relativa",
      "parameters": [
        {
          "name": "valor planificado"
        },
        {
          "name": "valoractual"
        },
        {
          "name": "índice"
        },
        {
          "name": "absoluto"
        },
        {
          "name": "referencia"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "unidad de tictac"
        },
        {
          "name": "leyenda"
        },
        {
          "name": "colorPositivo"
        },
        {
          "name": "colorNegativo"
        },
        {
          "name": "color del encabezado de piruleta"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "PIESPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico circular",
      "parameters": [
        {
          "name": "rango|porcentaje"
        },
        {
          "name": "color",
          "repeatable": "verdadero"
        }
      ]
    },
    "AREASPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de área",
      "parameters": [
        {
          "name": "agujas"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "línea 1"
        },
        {
          "name": "línea2"
        },
        {
          "name": "colorPositivo"
        },
        {
          "name": "colorNegativo"
        }
      ]
    },
    "SCATTERSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de dispersión",
      "parameters": [
        {
          "name": "puntos1"
        },
        {
          "name": "puntos2"
        },
        {
          "name": "marta"
        },
        {
          "name": "máximo X"
        },
        {
          "name": "minY"
        },
        {
          "name": "máximoY"
        },
        {
          "name": "Línea h"
        },
        {
          "name": "vLínea"
        },
        {
          "name": "xZonaMin"
        },
        {
          "name": "Zona xMax"
        },
        {
          "name": "ZonaMínima"
        },
        {
          "name": "Zona yMax"
        },
        {
          "name": "etiquetas"
        },
        {
          "name": "dibujarSímbolo"
        },
        {
          "name": "dibujar líneas"
        },
        {
          "name": "color1"
        },
        {
          "name": "color2"
        },
        {
          "name": "estrellarse"
        }
      ]
    },
    "LINESPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de líneas",
      "parameters": [
        {
          "name": "datos"
        },
        {
          "name": "Orientación de datos"
        },
        {
          "name": "datos del eje de fecha"
        },
        {
          "name": "orientación del eje de fecha"
        },
        {
          "name": "configuración"
        }
      ]
    },
    "COLUMNSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de columnas",
      "parameters": [
        {
          "name": "datos"
        },
        {
          "name": "Orientación de datos"
        },
        {
          "name": "datos del eje de fecha"
        },
        {
          "name": "orientación del eje de fecha"
        },
        {
          "name": "configuración"
        }
      ]
    },
    "WINLOSSSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de ganancias/pérdidas",
      "parameters": [
        {
          "name": "datos"
        },
        {
          "name": "Orientación de datos"
        },
        {
          "name": "datos del eje de fecha"
        },
        {
          "name": "orientación del eje de fecha"
        },
        {
          "name": "configuración"
        }
      ]
    },
    "BULLETSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de viñetas",
      "parameters": [
        {
          "name": "medida"
        },
        {
          "name": "objetivo"
        },
        {
          "name": "maxi"
        },
        {
          "name": "bien"
        },
        {
          "name": "malo"
        },
        {
          "name": "pronóstico"
        },
        {
          "name": "unidad de tictac"
        },
        {
          "name": "Esquema de color"
        },
        {
          "name": "vertical"
        },
        {
          "name": "medirColor"
        },
        {
          "name": "colorobjetivo"
        },
        {
          "name": "máximo color"
        },
        {
          "name": "buen color"
        },
        {
          "name": "mal color"
        },
        {
          "name": "pronosticoColor"
        },
        {
          "name": "PermitirMedidaSobreMaxi"
        },
        {
          "name": "Tamaño de barra"
        }
      ]
    },
    "SPREADSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de barras de propagación",
      "parameters": [
        {
          "name": "agujas"
        },
        {
          "name": "mostrarPromedio"
        },
        {
          "name": "escalaInicio"
        },
        {
          "name": "escalaFin"
        },
        {
          "name": "estilo"
        },
        {
          "name": "Esquema de color"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "STACKEDSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de líneas apilado",
      "parameters": [
        {
          "name": "agujas"
        },
        {
          "name": "Rango de colores"
        },
        {
          "name": "rango de etiquetas"
        },
        {
          "name": "máximo"
        },
        {
          "name": "objetivo rojo"
        },
        {
          "name": "objetivo verde"
        },
        {
          "name": "objetivo azul"
        },
        {
          "name": "objetivoAmarillo"
        },
        {
          "name": "color"
        },
        {
          "name": "Posición destacada"
        },
        {
          "name": "vertical"
        },
        {
          "name": "Orientación del texto"
        },
        {
          "name": "Tamaño del texto"
        }
      ]
    },
    "BOXPLOTSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de caja",
      "parameters": [
        {
          "name": "agujas"
        },
        {
          "name": "Clase de diagrama de caja"
        },
        {
          "name": "mostrarPromedio"
        },
        {
          "name": "escalaInicio"
        },
        {
          "name": "escalaFin"
        },
        {
          "name": "Inicio aceptable"
        },
        {
          "name": "Final aceptable"
        },
        {
          "name": "Esquema de color"
        },
        {
          "name": "estilo"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "CASCADESPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos que se utiliza para representar un gráfico en cascada",
      "parameters": [
        {
          "name": "rango de puntos"
        },
        {
          "name": "índice de puntos"
        },
        {
          "name": "etiquetasRango"
        },
        {
          "name": "mínimo"
        },
        {
          "name": "máximo"
        },
        {
          "name": "colorPositivo"
        },
        {
          "name": "colorNegativo"
        },
        {
          "name": "vertical"
        },
        {
          "name": "rango de tipo de elemento"
        },
        {
          "name": "colorTotal"
        }
      ]
    },
    "PARETOSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de Pareto",
      "parameters": [
        {
          "name": "agujas"
        },
        {
          "name": "índice de puntos"
        },
        {
          "name": "Rango de colores"
        },
        {
          "name": "objetivo"
        },
        {
          "name": "objetivo2"
        },
        {
          "name": "Posición destacada"
        },
        {
          "name": "etiqueta"
        },
        {
          "name": "vertical"
        },
        {
          "name": "colorobjetivo"
        },
        {
          "name": "objetivo2color"
        },
        {
          "name": "color de etiqueta"
        },
        {
          "name": "Tamaño de barra"
        }
      ]
    },
    "MONTHSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de mes",
      "parameters": [
        {
          "name": "año"
        },
        {
          "name": "mes"
        },
        {
          "name": "rango de datos"
        },
        {
          "name": "color vacío"
        },
        {
          "name": "InicioColor"
        },
        {
          "name": "color medio"
        },
        {
          "name": "finColor"
        }
      ]
    },
    "YEARSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un minigráfico anual",
      "parameters": [
        {
          "name": "año"
        },
        {
          "name": "rango de datos"
        },
        {
          "name": "color vacío"
        },
        {
          "name": "InicioColor"
        },
        {
          "name": "color medio"
        },
        {
          "name": "finColor"
        }
      ]
    },
    "GAUGEKPISPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos que se utilizan para representar un indicador gráfico de KPI",
      "parameters": [
        {
          "name": "valorObjetivo"
        },
        {
          "name": "valorActual"
        },
        {
          "name": "valor mínimo"
        },
        {
          "name": "valormáximo"
        },
        {
          "name": "mostrar etiqueta",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "etiquetaValorObjetivo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "etiquetaValorActual",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "etiquetaValorMínimo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "etiquetaValorMáximo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "Array de fuentes",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "ángulo mínimo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "ángulo máximo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "RadioRatio",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "tipo de calibre",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "Rango de colores",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "HISTOGRAMSPARKLINE": {
      "description": "Esta función devuelve un conjunto de datos utilizados para representar un gráfico de histograma",
      "parameters": [
        {
          "name": "rango de fechas"
        },
        {
          "name": "continuo"
        },
        {
          "name": "Etiqueta de pintura"
        },
        {
          "name": "escala"
        },
        {
          "name": "Ancho de barra"
        },
        {
          "name": "barra de color"
        },
        {
          "name": "etiquetaFontStyle"
        },
        {
          "name": "color de etiqueta"
        },
        {
          "name": "color del borde"
        }
      ]
    },
    "CEILING.PRECISE": {
      "description": "Esta función redondea un número al entero más cercano o al múltiplo más cercano de un valor especificado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "COVARIANCE.S": {
      "description": "Esta función devuelve la covarianza de la muestra, que es el promedio de los productos de las desviaciones de cada par de puntos de datos en dos conjuntos de números\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        }
      ]
    },
    "FLOOR.PRECISE": {
      "description": "Esta función redondea un número hacia abajo al entero más cercano o al múltiplo más cercano de un valor especificado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "PERCENTILE.EXC": {
      "description": "Esta función devuelve el percentil n de valores en un rango\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.EXC": {
      "description": "Esta función devuelve a qué cuartil (qué cuarto o 25 por ciento) de un conjunto de datos pertenece un valor\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "cuarto de galón"
        }
      ]
    },
    "RANK.AVG": {
      "description": "Esta función devuelve el rango de un número en un conjunto de números. Si algunos valores tienen el mismo rango, devolverá el rango promedio\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "árbitro"
        },
        {
          "name": "orden",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "MODE.MULT": {
      "description": "Esta función devuelve la matriz vertical que aparece con mayor frecuencia o el valor que aparece con mayor frecuencia en un conjunto de datos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "STDEV.P": {
      "description": "Esta función devuelve la desviación estándar para toda una población especificada (de valores numéricos)\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "VAR.P": {
      "description": "Esta función devuelve la varianza basada en toda la población, que utiliza solo valores numéricos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "COVARIANCE.P": {
      "description": "Esta función devuelve la covarianza, que es el promedio de los productos de las desviaciones para cada par de puntos de datos en dos conjuntos de números\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        }
      ]
    },
    "MODE.SNGL": {
      "description": "Esta función devuelve el valor que aparece con mayor frecuencia en un conjunto de datos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "PERCENTILE.INC": {
      "description": "Esta función devuelve el percentil n de valores en un rango\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.INC": {
      "description": "Esta función devuelve a qué cuartil (qué cuarto o 25 por ciento) de un conjunto de datos pertenece un valor\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "cuarto de galón"
        }
      ]
    },
    "RANK.EQ": {
      "description": "Esta función devuelve el rango de un número en un conjunto de números. Si tuviera que ordenar el conjunto, el rango del número sería su posición en la lista\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "árbitro"
        },
        {
          "name": "orden",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "STDEV": {
      "description": "Esta función devuelve la desviación estándar estimada en función de una muestra\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "STDEV.S": {
      "description": "Esta función devuelve la desviación estándar estimada en función de una muestra\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "VAR.S": {
      "description": "Esta función devuelve la varianza basada en una muestra de una población, que utiliza solo valores numéricos\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "BETA.INV": {
      "description": "Esta función calcula la inversa de la función de distribución beta acumulativa\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "más bajo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "superior",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "BINOM.DIST": {
      "description": "Esta función calcula la probabilidad de distribución binomial de términos individuales\".",
      "parameters": [
        {
          "name": "números"
        },
        {
          "name": "ensayos"
        },
        {
          "name": "probabilidad_s"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "BINOM.INV": {
      "description": "Esta función devuelve el criterio binomial, el valor más pequeño para el cual la distribución binomial acumulada es mayor o igual que un valor de criterio\".",
      "parameters": [
        {
          "name": "ensayos"
        },
        {
          "name": "probabilidad_s"
        },
        {
          "name": "alfa"
        }
      ]
    },
    "CHISQ.DIST.RT": {
      "description": "Esta función calcula la probabilidad unilateral de la distribución chi-cuadrado\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "CHISQ.INV.RT": {
      "description": "Esta función calcula la inversa de la probabilidad unilateral de la distribución chi-cuadrado\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "CHISQ.TEST": {
      "description": "Esta función calcula la prueba de independencia de la distribución de chi-cuadrado\".",
      "parameters": [
        {
          "name": "rango real"
        },
        {
          "name": "rango esperado"
        }
      ]
    },
    "CONFIDENCE.NORM": {
      "description": "Esta función devuelve el intervalo de confianza para la media de una población\".",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "desarrollo_estándar"
        },
        {
          "name": "tamaño"
        }
      ]
    },
    "EXPON.DIST": {
      "description": "Esta función devuelve la distribución exponencial o la densidad de probabilidad\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Lambda"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "F.DIST.RT": {
      "description": "Esta función calcula la distribución de probabilidad F, para ver los grados de diversidad entre dos conjuntos de datos\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "grado_de_libertad1"
        },
        {
          "name": "grados_de_libertad2"
        }
      ]
    },
    "F.INV.RT": {
      "description": "Esta función devuelve la inversa de la distribución de probabilidad F\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grado_de_libertad1"
        },
        {
          "name": "grados_de_libertad2"
        }
      ]
    },
    "F.TEST": {
      "description": "Esta función devuelve el resultado de una prueba F, que devuelve la probabilidad unilateral de que las varianzas en dos matrices no sean significativamente diferentes\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        }
      ]
    },
    "GAMMA.DIST": {
      "description": "Esta función devuelve la distribución gamma\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "GAMMA.INV": {
      "description": "Esta función devuelve la inversa de la distribución acumulativa gamma\".",
      "parameters": [
        {
          "name": "probabilidad"
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
      "description": "Esta función devuelve la inversa de la función de distribución acumulativa lognormal de x, donde LN(x) se distribuye normalmente con la media y la desviación estándar especificadas\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        }
      ]
    },
    "NORM.DIST": {
      "description": "Esta función devuelve la distribución acumulativa normal para la media y la desviación estándar especificadas\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "NORM.INV": {
      "description": "Esta función devuelve la inversa de la distribución acumulativa normal para la media y la desviación estándar dadas\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "significar"
        },
        {
          "name": "desarrollo_estándar"
        }
      ]
    },
    "NORM.S.INV": {
      "description": "Esta función devuelve la inversa de la distribución acumulativa normal estándar. La distribución tiene una media de cero y una desviación estándar de uno\".",
      "parameters": [
        {
          "name": "probabilidad"
        }
      ]
    },
    "PERCENTRANK.INC": {
      "description": "Esta función devuelve el rango de un valor en un conjunto de datos como un porcentaje del conjunto de datos\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "norte"
        },
        {
          "name": "significado",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "POISSON.DIST": {
      "description": "Esta función devuelve la distribución de Poisson\".",
      "parameters": [
        {
          "name": "eventos"
        },
        {
          "name": "significar"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "T.INV.2T": {
      "description": "Esta función devuelve el valor t de la distribución t de Student en función de la probabilidad y los grados de libertad\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "T.TEST": {
      "description": "Esta función devuelve la probabilidad asociada con una prueba t\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        },
        {
          "name": "cruz"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "WEIBULL.DIST": {
      "description": "Esta función devuelve la distribución Weibull de dos parámetros, a menudo utilizada en el análisis de confiabilidad\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "Z.TEST": {
      "description": "Esta función devuelve el valor de significancia de una prueba z. La prueba z genera una puntuación estándar para x con respecto al conjunto de datos y devuelve la probabilidad de dos colas para la distribución normal\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "sigma",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "T.DIST.RT": {
      "description": "Esta función devuelve la distribución t de cola derecha\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "T.DIST.2T": {
      "description": "Esta función devuelve la distribución t de dos colas\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "ISO.CEILING": {
      "description": "Esta función devuelve un número hasta el entero más cercano o el múltiplo de significado más cercano, independientemente del signo de significado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "BETA.DIST": {
      "description": "Esta función devuelve la distribución beta\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "acumulativo"
        },
        {
          "name": "más bajo"
        },
        {
          "name": "superior"
        }
      ]
    },
    "GAMMALN.PRECISE": {
      "description": "Esta función devuelve el logaritmo natural de la función gamma\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "ERF.PRECISE": {
      "description": "Esta función devuelve la función de error\".",
      "parameters": [
        {
          "name": "límite inferior"
        }
      ]
    },
    "ERFC.PRECISE": {
      "description": "Esta función devuelve la función ERF complementaria\".",
      "parameters": [
        {
          "name": "límite inferior"
        }
      ]
    },
    "PERCENTRANK.EXC": {
      "description": "Esta función devuelve el rango porcentual (0..1, exclusivo) de un valor en un conjunto de datos\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "incógnita"
        },
        {
          "name": "significado",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "HYPGEOM.DIST": {
      "description": "Esta función devuelve la distribución hipergeométrica\".",
      "parameters": [
        {
          "name": "muestras"
        },
        {
          "name": "número_de_muestra"
        },
        {
          "name": "población_s"
        },
        {
          "name": "número_pop"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "LOGNORM.DIST": {
      "description": "Esta función devuelve la distribución logarítmica normal de x.",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "significar"
        },
        {
          "name": "desviación estándar"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "NEGBINOM.DIST": {
      "description": "Esta función devuelve la distribución binomial negativa\".",
      "parameters": [
        {
          "name": "número_f"
        },
        {
          "name": "números"
        },
        {
          "name": "probabilidad_s"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "NORM.S.DIST": {
      "description": "Esta función devuelve la distribución normal estándar\".",
      "parameters": [
        {
          "name": "z"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "T.DIST": {
      "description": "Esta función devuelve la distribución t\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "grados de libertad"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "F.DIST": {
      "description": "Esta función devuelve la distribución de probabilidad F\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "grado_de_libertad1"
        },
        {
          "name": "grados_de_libertad2"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "CHISQ.DIST": {
      "description": "Esta función devuelve la distribución de chi-cuadrado\".",
      "parameters": [
        {
          "name": "incógnita"
        },
        {
          "name": "grados de libertad"
        },
        {
          "name": "acumulativo"
        }
      ]
    },
    "F.INV": {
      "description": "Esta función devuelve la inversa de la distribución de probabilidad F\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grado_de_libertad1"
        },
        {
          "name": "grados_de_libertad2"
        }
      ]
    },
    "T.INV": {
      "description": "Esta función devuelve la inversa de cola izquierda de la distribución t\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "CHISQ.INV": {
      "description": "Esta función devuelve la inversa de la probabilidad de cola izquierda de la distribución de chi-cuadrado\".",
      "parameters": [
        {
          "name": "probabilidad"
        },
        {
          "name": "grados de libertad"
        }
      ]
    },
    "CONFIDENCE.T": {
      "description": "Esta función devuelve el intervalo de confianza para una distribución t de Student\".",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "desarrollo_estándar"
        },
        {
          "name": "tamaño"
        }
      ]
    },
    "NETWORKDAYS.INTL": {
      "description": "Esta función devuelve el número de días laborables entre dos fechas utilizando argumentos para indicar días festivos y fines de semana\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "fecha_final"
        },
        {
          "name": "fin de semana",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "vacaciones",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "WORKDAY.INTL": {
      "description": "Esta función devuelve el número de serie de la fecha anterior o posterior a una cantidad de días laborables con parámetros de fin de semana personalizados. Estos parámetros indican días de fin de semana y feriados\".",
      "parameters": [
        {
          "name": "fecha_de_inicio"
        },
        {
          "name": "días"
        },
        {
          "name": "fin de semana",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "vacaciones",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "REFRESH": {
      "description": "Esta función decide cómo volver a calcular la fórmula. Se puede usar el argumento evaluationMode para especificar que la fórmula se vuelva a calcular en función del valor de referencia modificado, se evalúe una vez, se vuelva a calcular o se realice un intervalo\".",
      "parameters": [
        {
          "name": "fórmula"
        },
        {
          "name": "modoEvaluar"
        },
        {
          "name": "intervalo"
        }
      ]
    },
    "DAYS": {
      "description": "Esta función devuelve el número de días entre dos fechas.",
      "parameters": [
        {
          "name": "fecha_final"
        },
        {
          "name": "fecha_de_inicio"
        }
      ]
    },
    "ISOWEEKNUM": {
      "description": "Esta función devuelve el número de la semana ISO del año para una fecha determinada\".",
      "parameters": [
        {
          "name": "fecha"
        }
      ]
    },
    "BITAND": {
      "description": "Esta función devuelve un \"AND\" bit a bit de dos números\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "BITLSHIFT": {
      "description": "Esta función devuelve un \"OR\" bit a bit de dos números\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "cantidad_desplazamiento"
        }
      ]
    },
    "BITOR": {
      "description": "Esta función devuelve un \"OR\" bit a bit de dos números\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "BITRSHIFT": {
      "description": "Esta función devuelve un \"OR\" bit a bit de dos números\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "cantidad_desplazamiento"
        }
      ]
    },
    "BITXOR": {
      "description": "Esta función devuelve un \"XOR\" bit a bit de dos números\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "IMCOSH": {
      "description": "Esta función devuelve el coseno hiperbólico de un número complejo en formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMCOT": {
      "description": "Esta función devuelve la cotangente de un número complejo en formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMCSC": {
      "description": "Esta función devuelve la cosecante de un número complejo en formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMCSCH": {
      "description": "Esta función devuelve la cosecante hiperbólica de un número complejo en formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMSEC": {
      "description": "Esta función devuelve la secante de un número complejo en formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMSECH": {
      "description": "Esta función devuelve la secante hiperbólica de un número complejo en formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMSINH": {
      "description": "Esta función devuelve el seno hiperbólico de un número complejo en formato de texto x+yi de x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "IMTAN": {
      "description": "Esta función devuelve la tangente de un número complejo en formato de texto x+yi o x+yj\".",
      "parameters": [
        {
          "name": "número complejo"
        }
      ]
    },
    "PDURATION": {
      "description": "Esta función devuelve el número de períodos que necesita una inversión para alcanzar un valor específico\".",
      "parameters": [
        {
          "name": "tasa"
        },
        {
          "name": "paval"
        },
        {
          "name": "vale"
        }
      ]
    },
    "RRI": {
      "description": "Esta función devuelve una tasa de interés equivalente para el crecimiento de una inversión\".",
      "parameters": [
        {
          "name": "nper"
        },
        {
          "name": "paval"
        },
        {
          "name": "vale"
        }
      ]
    },
    "ISFORMULA": {
      "description": "Esta función prueba si contiene una fórmula de una celda referenciada\".",
      "parameters": [
        {
          "name": "referencia de celda"
        }
      ]
    },
    "IFNA": {
      "description": "Esta función devuelve el valor que especifique si la fórmula devuelve el valor de error #N/A; de lo contrario, devuelve el resultado de la fórmula\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "valor_si_no"
        }
      ]
    },
    "IFS": {
      "description": "Esta función verifica si se cumplen una o más condiciones y devuelve un valor que corresponde a la primera condición VERDADERA\".",
      "parameters": [
        {
          "name": "prueba_lógica1"
        },
        {
          "name": "valor_si_es_verdadero1"
        },
        {
          "name": "prueba_lógica2",
          "repeatable": "verdadero"
        },
        {
          "name": "valor_si_es_verdadero2",
          "repeatable": "verdadero"
        }
      ]
    },
    "SWITCH": {
      "description": "Esta función evalúa un valor (llamado expresión) en una lista de valores y devuelve el resultado correspondiente al primer valor coincidente. Si no hay ninguna coincidencia, se puede devolver un valor predeterminado opcional\".",
      "parameters": [
        {
          "name": "expresión"
        },
        {
          "name": "valor1"
        },
        {
          "name": "resultado1"
        },
        {
          "name": "valor predeterminado o valor2",
          "repeatable": "verdadero",
          "optional": "verdadero"
        },
        {
          "name": "resultado2",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "XOR": {
      "description": "Esta función devuelve una operación lógica exclusiva o de todos los argumentos\".",
      "parameters": [
        {
          "name": "lógico",
          "repeatable": "verdadero"
        }
      ]
    },
    "AREAS": {
      "description": "Esta función devuelve el número de áreas en una referencia\".",
      "parameters": [
        {
          "name": "referencia"
        }
      ]
    },
    "FORMULATEXT": {
      "description": "Esta función devuelve una fórmula como una cadena\".",
      "parameters": [
        {
          "name": "referencia"
        }
      ]
    },
    "HYPERLINK": {
      "description": "Esta función crea un acceso directo o salto que abre un documento almacenado en un servidor de red, una intranet o Internet\".",
      "parameters": [
        {
          "name": "ubicación del enlace"
        },
        {
          "name": "nombre_amigable"
        }
      ]
    },
    "ACOT": {
      "description": "Esta función calcula la arcocotangente inversa de un número\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ACOTH": {
      "description": "Esta función calcula la arcocotangente hiperbólica inversa de un número\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ARABIC": {
      "description": "Esta función convierte un texto en números romanos en su equivalente en números arábigos\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "BASE": {
      "description": "Esta función convierte un número en una representación de texto con el radio (base) dado\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "base"
        },
        {
          "name": "longitud mínima",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "CEILING.MATH": {
      "description": "Esta función redondea un número al entero más cercano o al múltiplo significativo más cercano\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "modo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "COMBINA": {
      "description": "Esta función calcula el número de combinaciones posibles con repeticiones para un número específico de elementos\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_elegido"
        }
      ]
    },
    "COT": {
      "description": "Esta función devuelve la cotangente del ángulo especificado\".",
      "parameters": [
        {
          "name": "ángulo"
        }
      ]
    },
    "COTH": {
      "description": "Esta función devuelve la cotangente hiperbólica del número especificado\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "CSC": {
      "description": "Esta función devuelve la cosecante del ángulo especificado.",
      "parameters": [
        {
          "name": "ángulo"
        }
      ]
    },
    "CSCH": {
      "description": "Esta función devuelve la cosecante hiperbólica del número especificado\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "DECIMAL": {
      "description": "Esta función convierte una representación de texto de un número en una base dada en un número decimal\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "base"
        }
      ]
    },
    "FLOOR.MATH": {
      "description": "Esta función redondea un número hacia abajo hasta el entero más cercano o al múltiplo significativo más cercano\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "modo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SEC": {
      "description": "Esta función devuelve la secante del ángulo especificado.",
      "parameters": [
        {
          "name": "ángulo"
        }
      ]
    },
    "SECH": {
      "description": "Esta función devuelve la secante hiperbólica del valor especificado\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "BINOM.DIST.RANGE": {
      "description": "Esta función calcula la probabilidad de un resultado de prueba utilizando una distribución binomial\".",
      "parameters": [
        {
          "name": "ensayos"
        },
        {
          "name": "probabilidad_s"
        },
        {
          "name": "números"
        },
        {
          "name": "numero_s2",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "GAMMA": {
      "description": "Esta función devuelve el valor de la función gamma\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "MAXIFS": {
      "description": "Esta función devuelve el valor máximo entre las celdas especificadas por un conjunto dado de condiciones o criterios\".",
      "parameters": [
        {
          "name": "rango máximo"
        },
        {
          "name": "rango_de_criterios1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "rango_de_criterios2",
          "repeatable": "verdadero"
        },
        {
          "name": "criterio2",
          "repeatable": "verdadero"
        }
      ]
    },
    "GAUSS": {
      "description": "Esta función calcula la probabilidad de que un miembro de una población normal estándar se encuentre entre la media y z desviaciones estándar de la media\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "MINIFS": {
      "description": "Esta función devuelve el valor mínimo entre las celdas especificadas por un conjunto dado de condiciones o criterios\".",
      "parameters": [
        {
          "name": "rango mínimo"
        },
        {
          "name": "rango_de_criterios1"
        },
        {
          "name": "criterio1"
        },
        {
          "name": "rango_de_criterios2",
          "repeatable": "verdadero"
        },
        {
          "name": "criterio2",
          "repeatable": "verdadero"
        }
      ]
    },
    "PERMUTATIONA": {
      "description": "Esta función devuelve el número de permutaciones para un número determinado de objetos que se pueden seleccionar del total de objetos\".",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_elegido"
        }
      ]
    },
    "PHI": {
      "description": "Esta función devuelve el valor de la función de densidad para una distribución normal estándar\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "SKEW.P": {
      "description": "Esta función devuelve la asimetría de una distribución basada en una población: una caracterización del grado de asimetría de una distribución alrededor de su media\".",
      "parameters": [
        {
          "name": "número 1"
        },
        {
          "name": "número2",
          "repeatable": "verdadero"
        }
      ]
    },
    "BAHTTEXT": {
      "description": "Esta función convierte un número en texto tailandés y agrega un sufijo de \\\"Baht\\",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "CONCAT": {
      "description": "Esta función combina múltiples cadenas de texto o números en una sola cadena de texto, la función permanecerá disponible por compatibilidad con la función \\\"CONCATENAR\\\".",
      "parameters": [
        {
          "name": "texto 1"
        },
        {
          "name": "texto2",
          "repeatable": "verdadero"
        }
      ]
    },
    "FINDB": {
      "description": "Esta función encuentra un valor de texto dentro de otro y devuelve la posición del valor de texto en el texto buscado, y cuenta cada carácter de doble byte como 2 cuando se configura DBCS como el idioma predeterminado\".",
      "parameters": [
        {
          "name": "Buscar texto"
        },
        {
          "name": "dentro del texto"
        },
        {
          "name": "num_inicial",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "LEFTB": {
      "description": "Esta función devuelve los caracteres especificados más a la izquierda de un valor de texto y se basa en la cantidad de bytes que especifique\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "num_bytes"
        }
      ]
    },
    "LENB": {
      "description": "Esta función devuelve la longitud del número de bytes en una cadena de texto\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "MIDB": {
      "description": "Esta función devuelve la cantidad solicitada de caracteres de una cadena de texto comenzando en la posición que usted especifique y en función de la cantidad de bytes que especifique\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "num_inicial"
        },
        {
          "name": "num_bytes"
        }
      ]
    },
    "REPLACEB": {
      "description": "Esta función reemplaza parte de una cadena de texto con una cadena de texto diferente, según la cantidad de bytes que especifique\".",
      "parameters": [
        {
          "name": "texto antiguo"
        },
        {
          "name": "byte_de_inicio"
        },
        {
          "name": "num_bytes"
        },
        {
          "name": "nuevo_texto"
        }
      ]
    },
    "RIGHTB": {
      "description": "Esta función devuelve los caracteres especificados más a la derecha de un valor de texto y en función del número de bytes que especifique\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "num_bytes"
        }
      ]
    },
    "SEARCHB": {
      "description": "Esta función encuentra una cadena de texto en otra cadena de texto y devuelve el índice de la posición inicial del texto encontrado, y cuenta cada carácter de doble byte como 2 cuando se establece DBCS como el idioma predeterminado\".",
      "parameters": [
        {
          "name": "Buscar texto"
        },
        {
          "name": "dentro del texto"
        },
        {
          "name": "num_inicial",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "TEXTJOIN": {
      "description": "Esta función combina múltiples rangos y/o cadenas en un solo texto, y el texto incluye un delimitador que usted especifica entre cada valor de texto\".",
      "parameters": [
        {
          "name": "delimitador"
        },
        {
          "name": "ignorar_vacío"
        },
        {
          "name": "texto 1"
        },
        {
          "name": "texto2",
          "repeatable": "verdadero"
        }
      ]
    },
    "UNICHAR": {
      "description": "Esta función devuelve el carácter Unicode de una referencia numérica dada\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "UNICODE": {
      "description": "Esta función devuelve el número correspondiente al primer carácter del texto.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "ENCODEURL": {
      "description": "Esta función devuelve una cadena codificada en URL\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "BC_QRCODE": {
      "description": "Esta función devuelve un conjunto de datos para representar un código QR",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "Nivel de corrección de error"
        },
        {
          "name": "modelo"
        },
        {
          "name": "versión"
        },
        {
          "name": "mascarilla"
        },
        {
          "name": "conexión"
        },
        {
          "name": "ConexiónNo"
        },
        {
          "name": "código de caracteres"
        },
        {
          "name": "juego de caracteres"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_EAN13": {
      "description": "Esta función devuelve un conjunto de datos para representar un EAN13\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "Añadir"
        },
        {
          "name": "AñadirPosiciónEtiqueta"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_EAN8": {
      "description": "Esta función devuelve un conjunto de datos para representar un EAN8\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_CODABAR": {
      "description": "Esta función devuelve un conjunto de datos para representar un CODABAR\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "dígito de control"
        },
        {
          "name": "Relación nw"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_CODE39": {
      "description": "Esta función devuelve un conjunto de datos para representar un CODE39\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "etiqueta con carácter de inicio y fin"
        },
        {
          "name": "dígito de control"
        },
        {
          "name": "Relación nw"
        },
        {
          "name": "ASCII completo"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_CODE93": {
      "description": "Esta función devuelve un conjunto de datos para representar un CODE93\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "dígito de control"
        },
        {
          "name": "ASCII completo"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_CODE128": {
      "description": "Esta función devuelve un conjunto de datos para representar un CODE128\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "Conjunto de códigos"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_GS1_128": {
      "description": "Esta función devuelve un conjunto de datos para representar un GS1_128\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_CODE49": {
      "description": "Esta función devuelve un conjunto de datos para representar un CODE49\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "mostrar etiqueta"
        },
        {
          "name": "posición de etiqueta"
        },
        {
          "name": "agrupamiento"
        },
        {
          "name": "grupoNo"
        },
        {
          "name": "Familia de fuentes"
        },
        {
          "name": "Estilo de fuente"
        },
        {
          "name": "Peso de fuente"
        },
        {
          "name": "textoDecoración"
        },
        {
          "name": "Alinear texto"
        },
        {
          "name": "Tamaño de fuente"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_PDF417": {
      "description": "Esta función devuelve un conjunto de datos para representar un PDF417\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "Nivel de corrección de error"
        },
        {
          "name": "filas"
        },
        {
          "name": "columnas"
        },
        {
          "name": "compacto"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "BC_DATAMATRIX": {
      "description": "Esta función devuelve un conjunto de datos para representar una DATAMATRIX\".",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "color"
        },
        {
          "name": "color de fondo"
        },
        {
          "name": "Modo ecc"
        },
        {
          "name": "ecc200TamañoSímbolo"
        },
        {
          "name": "Modo de codificación ecc200"
        },
        {
          "name": "ecc00_140Tamaño del símbolo"
        },
        {
          "name": "Anexo estructurado"
        },
        {
          "name": "Número de estructura"
        },
        {
          "name": "identificador de archivo"
        },
        {
          "name": "ZonaTranquilaIzquierda"
        },
        {
          "name": "ZonaTranquilaDerecha"
        },
        {
          "name": "ZonaTranquila Superior"
        },
        {
          "name": "ZonaTranquilaInferior"
        }
      ]
    },
    "FILTER": {
      "description": "Esta función filtra un rango o matriz\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "incluir"
        },
        {
          "name": "si_esta_vacío",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "RANDARRAY": {
      "description": "Esta función devuelve una matriz de números aleatorios\".",
      "parameters": [
        {
          "name": "filas"
        },
        {
          "name": "columnas"
        },
        {
          "name": "mínimo"
        },
        {
          "name": "máximo"
        },
        {
          "name": "número entero"
        }
      ]
    },
    "SEQUENCE": {
      "description": "Esta función devuelve una secuencia de números\".",
      "parameters": [
        {
          "name": "filas"
        },
        {
          "name": "columnas"
        },
        {
          "name": "comenzar"
        },
        {
          "name": "paso"
        }
      ]
    },
    "SINGLE": {
      "description": "Esta función devuelve un único valor cuando se le da un valor, rango o matriz\".",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "SORT": {
      "description": "Esta función ordena un rango o matriz\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "índice de ordenación"
        },
        {
          "name": "orden de clasificación"
        },
        {
          "name": "por_col"
        }
      ]
    },
    "SORTBY": {
      "description": "Esta función ordena un rango o matriz en función de los valores en un rango o matriz correspondiente\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "por_array1"
        },
        {
          "name": "orden_de_clasificación1"
        },
        {
          "name": "por_array2",
          "repeatable": "verdadero"
        },
        {
          "name": "orden_de_clasificación2",
          "repeatable": "verdadero"
        }
      ]
    },
    "UNIQUE": {
      "description": "Esta función devuelve los valores únicos de un rango o matriz\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "por_col",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "exactamente_una vez",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "QUERY": {
      "description": "Esta función devuelve datos de las tablas del administrador de datos en una hoja de cálculo\".",
      "parameters": [
        {
          "name": "tablaYFilas"
        },
        {
          "name": "columnas"
        },
        {
          "name": "devolverObjeto"
        }
      ]
    },
    "LET": {
      "description": "Esta función asigna los resultados de los cálculos a nombres. Resulta útil para almacenar cálculos y valores intermedios definiendo nombres dentro de una fórmula. Estos nombres solo se aplican dentro del alcance de la función LET\".",
      "parameters": [
        {
          "name": "nombre1"
        },
        {
          "name": "nombre_valor1"
        },
        {
          "name": "nombre2",
          "repeatable": "verdadero"
        },
        {
          "name": "nombre_valor2",
          "repeatable": "verdadero"
        },
        {
          "name": "cálculo"
        }
      ]
    },
    "IMAGE": {
      "description": "Esta función ingresa una URL o una cadena base64 para mostrar una imagen en la celda",
      "parameters": [
        {
          "name": "fuente"
        },
        {
          "name": "[texto alternativo]"
        },
        {
          "name": "[apresto]"
        },
        {
          "name": "[altura]"
        },
        {
          "name": "[ancho]"
        },
        {
          "name": "[clipY]"
        },
        {
          "name": "[clip X]"
        },
        {
          "name": "[altura del clip]"
        },
        {
          "name": "[Ancho del clip]"
        },
        {
          "name": "[vAlign]"
        },
        {
          "name": "[hAlinear]"
        }
      ]
    },
    "GETPIVOTDATA": {
      "description": "Esta función extrae datos almacenados en una tabla dinámica",
      "parameters": [
        {
          "name": "campo_de_datos"
        },
        {
          "name": "tabla dinámica"
        },
        {
          "name": "campo1, elemento1",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "WEBSERVICE": {
      "description": "Esta función devuelve datos de un servicio web",
      "parameters": [
        {
          "name": "URL"
        }
      ]
    },
    "FILTERJSON": {
      "description": "Esta función analiza una cadena JSON en un valor escalar, un objeto o una matriz de objetos\".",
      "parameters": [
        {
          "name": "cadena_json"
        }
      ]
    },
    "ASC": {
      "description": "La función ASC cambia caracteres de ancho completo (doble byte) a caracteres de medio ancho (un solo byte). Se utiliza con conjuntos de caracteres de doble byte (DBCS)\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "DBCS": {
      "description": "La función DBCS convierte letras de medio ancho (de un solo byte) dentro de una cadena de caracteres en caracteres de ancho completo (de doble byte)\".",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "LAMBDA": {
      "description": "Crea un valor de función, que puede llamarse dentro de fórmulas\".",
      "parameters": [
        {
          "name": "parámetro_o_cálculo"
        },
        {
          "name": "parámetro_o_cálculo",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "MAP": {
      "description": "Devuelve una matriz formada al asignar cada valor de la(s) matriz(es) a un nuevo valor aplicando un LAMBDA para crear un nuevo valor\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "lambda_o_matriz",
          "repeatable": "verdadero"
        }
      ]
    },
    "REDUCE": {
      "description": "Reduce una matriz a un valor acumulado aplicando una LAMBDA a cada valor y devolviendo el valor total en el acumulador\".",
      "parameters": [
        {
          "name": "valor_inicio"
        },
        {
          "name": "formación"
        },
        {
          "name": "función"
        }
      ]
    },
    "SCAN": {
      "description": "Escanea una matriz aplicando una LAMBDA a cada valor y devuelve una matriz que tiene cada valor intermedio\".",
      "parameters": [
        {
          "name": "valor_inicio",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "formación"
        },
        {
          "name": "función"
        }
      ]
    },
    "MAKEARRAY": {
      "description": "Devuelve una matriz calculada de un tamaño de fila y columna especificado, aplicando una LAMBDA\".",
      "parameters": [
        {
          "name": "filas"
        },
        {
          "name": "columpios"
        },
        {
          "name": "función"
        }
      ]
    },
    "BYCOL": {
      "description": "Aplica una función LAMBDA a cada columna y devuelve una matriz de los resultados. Por ejemplo, si la matriz original tiene 3 columnas por 2 filas, la matriz devuelta tiene 3 columnas por 1 fila\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "función"
        }
      ]
    },
    "BYROW": {
      "description": "Aplica una función LAMBDA a cada fila y devuelve una matriz de resultados. Por ejemplo, si la matriz original tiene 3 columnas por 2 filas, la matriz devuelta tiene 1 columna por 2 filas\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "función"
        }
      ]
    },
    "PERCENTOF": {
      "description": "Devuelve el porcentaje de un subconjunto de un conjunto de datos dado\".",
      "parameters": [
        {
          "name": "subconjunto de datos"
        },
        {
          "name": "datos_todos"
        }
      ]
    },
    "GROUPBY": {
      "description": "Agregar valores por campos de fila\".",
      "parameters": [
        {
          "name": "campos_de_fila"
        },
        {
          "name": "valores"
        },
        {
          "name": "función"
        },
        {
          "name": "encabezados_de_campo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "profundidad_total",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "orden de clasificación",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "matriz de filtros",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "relación_de_campo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "PIVOTBY": {
      "description": "Agregar valores por filas y columnas\".",
      "parameters": [
        {
          "name": "campos_de_fila"
        },
        {
          "name": "campos_col"
        },
        {
          "name": "valores"
        },
        {
          "name": "función"
        },
        {
          "name": "encabezados_de_campo",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "profundidad_total_de_fila",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "orden de clasificación por filas",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "profundidad_total_col",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "orden de clasificación de columnas",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "matriz de filtros",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "relativo a",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "ISOMITTED": {
      "description": "Comprueba si falta el valor en un LAMBDA y devuelve VERDADERO o FALSO\".",
      "parameters": [
        {
          "name": "argumento"
        }
      ]
    },
    "TEXTBEFORE": {
      "description": "Devuelve el texto que aparece antes de un carácter o cadena determinados\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "delimitador"
        },
        {
          "name": "num_instancia",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "modo de coincidencia",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "0",
              "description": "Distingue mayúsculas y minúsculas"
            },
            {
              "value": "1",
              "description": "No distingue entre mayúsculas y minúsculas"
            }
          ]
        },
        {
          "name": "fin del partido",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "si no se encuentra",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "TEXTAFTER": {
      "description": "Devuelve el texto que aparece después del carácter o cadena indicados\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "delimitador"
        },
        {
          "name": "num_instancia",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "modo de coincidencia",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "0",
              "description": "Distingue mayúsculas y minúsculas"
            },
            {
              "value": "1",
              "description": "No distingue entre mayúsculas y minúsculas"
            }
          ]
        },
        {
          "name": "fin del partido",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "si no se encuentra",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "TEXTSPLIT": {
      "description": "Divide cadenas de texto utilizando delimitadores de columnas y filas\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "delimitador_col"
        },
        {
          "name": "delimitador_de_fila",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "ignorar_vacío",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "modo de coincidencia",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "0",
              "description": "Distingue mayúsculas y minúsculas"
            },
            {
              "value": "1",
              "description": "No distingue entre mayúsculas y minúsculas"
            }
          ]
        },
        {
          "name": "pad_con",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SJS.REGEXEXTRACT": {
      "description": "Extrae subcadenas coincidentes según una expresión regular\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "expresión_regular"
        },
        {
          "name": "modificadores",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SJS.REGEXMATCH": {
      "description": "Si un fragmento de texto coincide con una expresión regular\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "expresión_regular"
        },
        {
          "name": "modificadores",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SJS.REGEXREPLACE": {
      "description": "Reemplaza parte de una cadena de texto con una cadena de texto diferente utilizando expresiones regulares\".",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "expresión_regular"
        },
        {
          "name": "reemplazo"
        },
        {
          "name": "modificadores",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "VSTACK": {
      "description": "Agrega matrices verticalmente y en secuencia para devolver una matriz más grande\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "HSTACK": {
      "description": "Agrega matrices horizontalmente y en secuencia para devolver una matriz más grande\".",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "TOROW": {
      "description": "Devuelve la matriz en una sola fila\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "ignorar",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "escanear por columna",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "TOCOL": {
      "description": "Devuelve la matriz en una sola columna\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "ignorar",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "escanear por columna",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "WRAPROWS": {
      "description": "Envuelve la fila o columna de valores proporcionada por filas después de un número específico de elementos para formar una nueva matriz\".",
      "parameters": [
        {
          "name": "vector"
        },
        {
          "name": "número de envolturas"
        },
        {
          "name": "pad_con",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "WRAPCOLS": {
      "description": "Envuelve la fila o columna de valores proporcionada por columnas después de un número específico de elementos para formar una nueva matriz\".",
      "parameters": [
        {
          "name": "vector"
        },
        {
          "name": "número de envolturas"
        },
        {
          "name": "pad_con",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "TAKE": {
      "description": "Devuelve un número específico de filas o columnas contiguas desde el inicio o el final de una matriz\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "filas"
        },
        {
          "name": "columnas",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "DROP": {
      "description": "Excluye un número específico de filas o columnas del inicio o del final de una matriz\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "filas"
        },
        {
          "name": "columnas",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "EXPAND": {
      "description": "Expande o rellena una matriz a dimensiones de fila y columna especificadas\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "filas"
        },
        {
          "name": "columnas",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "pad_con",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "CHOOSEROWS": {
      "description": "Devuelve las filas especificadas de una matriz\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "fila_num1"
        },
        {
          "name": "fila_num2",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "CHOOSECOLS": {
      "description": "Devuelve las columnas especificadas de una matriz\".",
      "parameters": [
        {
          "name": "formación"
        },
        {
          "name": "col_num1"
        },
        {
          "name": "col_num2",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "SJS.UUID": {
      "description": "Devuelve el UUID aleatorio\".",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "SJS.ENDWITH": {
      "description": "Devuelve si str1 termina con str2.",
      "parameters": [
        {
          "name": "dentro del texto"
        },
        {
          "name": "Buscar texto"
        },
        {
          "name": "modo de coincidencia",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "0",
              "description": "Distingue mayúsculas y minúsculas"
            },
            {
              "value": "1",
              "description": "No distingue entre mayúsculas y minúsculas"
            }
          ]
        }
      ]
    },
    "SJS.STARTWITH": {
      "description": "Devuelve si la cadena str1 comienza con str2.",
      "parameters": [
        {
          "name": "dentro del texto"
        },
        {
          "name": "Buscar texto"
        },
        {
          "name": "modo de coincidencia",
          "repeatable": "FALSO",
          "optional": "verdadero",
          "enum": [
            {
              "value": "0",
              "description": "Distingue mayúsculas y minúsculas"
            },
            {
              "value": "1",
              "description": "No distingue entre mayúsculas y minúsculas"
            }
          ]
        }
      ]
    },
    "R.INDEX": {
      "description": "(ReportSheet Specific) Devuelve el índice de la celda especificada en la extensión medida principal\".",
      "parameters": [
        {
          "name": "referencia"
        },
        {
          "name": "referencia de contexto",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "R.RANK": {
      "description": "(ReportSheet Specific) Devuelve el rango de la celda especificada en el nodo principal\".",
      "parameters": [
        {
          "name": "referencia"
        },
        {
          "name": "referencia de contexto",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "orden",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "modo de rango",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "SJS.FISCALYEAR": {
      "description": "devolver el año fiscal.",
      "parameters": [
        {
          "name": "fecha"
        },
        {
          "name": "mes de inicio",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "R.R": {
      "description": "(Hoja de informe específica) Desplazamiento relativo según la celda especificada\".",
      "parameters": [
        {
          "name": "referencia"
        },
        {
          "name": "compensar"
        }
      ]
    },
    "R.A": {
      "description": "(Hoja de informe específica) Desplazamiento absoluto basado en la celda especificada\".",
      "parameters": [
        {
          "name": "referencia"
        },
        {
          "name": "compensar"
        }
      ]
    },
    "R.V": {
      "description": "(ReportSheet Specific) Devuelve los datos de la celda base en el desplazamiento o contexto especificado\".",
      "parameters": [
        {
          "name": "referencia"
        },
        {
          "name": "desplazamiento | referencia_contextual | \\\"PáginaActual\\",
          "repeatable": "verdadero",
          "optional": "verdadero"
        }
      ]
    },
    "R.CURRENTPAGE": {
      "description": "(ReportSheet Specific) Devuelve el número de página actual del informe\"."
    },
    "R.PAGESCOUNT": {
      "description": "(ReportSheet Specific) Devuelve el número total de informes actuales\"."
    },
    "R.PROPORTION": {
      "description": "(ReportSheet Specific) Devuelve el porcentaje de la celda especificada en su nodo padre\".",
      "parameters": [
        {
          "name": "valor_de_referencia"
        },
        {
          "name": "referencia_de_contexto1",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "referencia_de_contexto2",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "R.CUMULATIVE": {
      "description": "(Hoja de informe específica) Devuelve el valor acumulado de la celda actual\".",
      "parameters": [
        {
          "name": "valor_de_referencia"
        },
        {
          "name": "referencia_de_contexto1",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "referencia_de_contexto2",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "R.MOM": {
      "description": "(Hoja de informe específica) Devuelve los datos del anillo de la celda de destino\".",
      "parameters": [
        {
          "name": "valor_de_referencia"
        },
        {
          "name": "referencia_de_contexto1",
          "repeatable": "FALSO",
          "optional": "verdadero"
        },
        {
          "name": "referencia_de_contexto2",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    },
    "R.YOY": {
      "description": "(Hoja de informe específica) Devuelve los datos año tras año de la celda de destino\".",
      "parameters": [
        {
          "name": "valor_de_referencia"
        },
        {
          "name": "referencia_de_contexto1"
        },
        {
          "name": "referencia_de_contexto2",
          "repeatable": "FALSO",
          "optional": "verdadero"
        }
      ]
    }
  },
  "TableFunctions": {
    "All": {
      "name": "#Todo",
      "description": "Devuelve todo el contenido de la tabla o las columnas de la tabla especificadas, incluidos los encabezados de columna, los datos y el total de filas\"."
    },
    "Data": {
      "name": "#Datos",
      "description": "Devuelve las celdas de datos de la tabla o las columnas de la tabla especificada\"."
    },
    "Headers": {
      "name": "#Encabezados",
      "description": "Devuelve los encabezados de columnas de la tabla o las columnas de la tabla especificadas\"."
    },
    "Totals": {
      "name": "#Totales",
      "description": "Devuelve el total de filas de la tabla o de las columnas de la tabla especificada\"."
    },
    "thisRow": {
      "name": "#Esta Fila",
      "description": "Esta fila."
    }
  }
}

exports.data = custom_resource;