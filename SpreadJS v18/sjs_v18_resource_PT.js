var custom_resource = {
  "Common": {
    "Exp_InvalidDateFormat": "Padrão de formato de data inválido",
    "Exp_InvalidExponentFormat": "formato de expoente inválido",
    "Exp_InvalidSemicolons": "formato inválido: muitos pontos e vírgulas",
    "Exp_InvalidNumberGroupSize": "NumberGroupSize deve estar entre 1 e 9, exceto para o último elemento, que pode ser zero.",
    "Exp_BadFormatSpecifier": "Especificador de formato incorreto",
    "Exp_InvalidNumberFormat": "Padrão de formato de número inválido",
    "Exp_InvalidCast": "Exceção InválidaCast",
    "Exp_Separator": "numberDecimalSeparator, listSeparator e arrayListSeparator devem ser diferentes nas informações de cultura.",
    "Exp_TokenIsNull": "token é nulo",
    "Exp_InvalidBackslash": "o '\\\\' não pode ser avaliado",
    "Exp_FormatIllegal": "o formato é ilegal.",
    "Exp_ValueIsNull": "o valor é nulo",
    "Exp_DuplicatedDescriptor": "O tipo de descritor foi adicionado.",
    "Exp_TokenIllegal": "token é ilegal.",
    "Exp_ValueIllegal": "valor é ilegal."
  },
  "CalcEngine": {
    "Exp_InvalidCast": "Exceção de elenco inválida",
    "Exp_FormulaInvalidChar": "A fórmula contém um caractere inválido: '{0}' no índice em {1}",
    "Exp_FormulaInvalid": "Fórmula Inválida",
    "Exp_InvalidFunctionName": "Nome de função inválido",
    "Exp_InvalidOverrideFunction": "Não é possível substituir a função interna",
    "Exp_InvalidArray": "Matriz inválida",
    "Exp_OverrideNotAllowed": "Tentativa de substituir a função enquanto a substituição não é permitida",
    "Exp_NoSyntax": "Nenhuma sintaxe '{0}' para corresponder à sintaxe '{1}'.",
    "Exp_IsValid": "'{0}' é inválido.",
    "Exp_InvalidParameters": "Parâmetro de função inválido em {0}.",
    "Exp_InvalidArrayColumns": "O comprimento das colunas da matriz não são iguais em {0}.",
    "Exp_ExprIsNull": "O argumento 'expr' é nulo",
    "Exp_InvalidOperation": "Exceção de operação inválida",
    "Exp_ArgumentNull": "Exceção de argumento nulo",
    "Exp_CriteriaIsNull": "O critério é nulo",
    "Exp_Format": "Formatar",
    "Exp_ArrayFormulaPart": "Não é possível alterar parte de uma matriz.",
    "Exp_NotSupported": "Exceção não suportada",
    "Exp_DuplicatedChar": "Personagem Duplicado",
    "Exp_ArgumentOutOfRangeException": "Exceção de argumento fora do intervalo",
    "Exp_ArgumentException": "Exceção de argumento",
    "Aggregate_GrandTotal": "Total geral",
    "Aggregate_Total": "Total",
    "Fbx_Summary": "Resumo",
    "Fbx_TableName_Description": "Nome da tabela para ",
    "Fbx_TableSheetName_Description": "Nome da planilha para ",
    "Fbx_CustomName_Description": "Nome personalizado para"
  },
  "DataManager": {
    "Zve": {
      "WINDOW": {
        "description": "(TableSheet Specific) Determina as linhas como a janela, particionando e ordenando para aplicar a função de janela.",
        "parameters": [
          {
            "name": "função_janela"
          },
          {
            "name": "partição_por",
            "optional": "verdadeiro"
          },
          {
            "name": "ordenar_por",
            "optional": "verdadeiro"
          },
          {
            "name": "frame_rows\\\\intervalo\\\\grupos",
            "optional": "verdadeiro"
          }
        ]
      },
      "WINDOWDEF": {
        "description": "(Específico da TableSheet) Defina uma abreviação que permita ser reutilizada pela função WINDOW.",
        "parameters": [
          {
            "name": "partição_por",
            "optional": "verdadeiro"
          },
          {
            "name": "ordenar_por",
            "optional": "verdadeiro"
          },
          {
            "name": "frame_rows\\\\intervalo\\\\grupos",
            "optional": "verdadeiro"
          }
        ]
      },
      "PARTITIONBY": {
        "description": "(TableSheet Specific) Divide as linhas em partições.",
        "parameters": [
          {
            "name": "função_de_campo",
            "optional": "falso",
            "repeatable": "verdadeiro"
          }
        ]
      },
      "ORDERBY": {
        "description": "(TableSheet Specific) Define a ordem lógica em cada partição.",
        "parameters": [
          {
            "name": "função_de_campo",
            "optional": "falso",
            "repeatable": "verdadeiro"
          }
        ]
      },
      "ORDERASC": {
        "description": "(TableSheet Specific) Especifica a ordem crescente para o campo especificado.",
        "parameters": [
          {
            "name": "função_de_campo"
          }
        ]
      },
      "ORDERDESC": {
        "description": "(TableSheet Specific) Especifica a ordem decrescente para o campo especificado.",
        "parameters": [
          {
            "name": "função_de_campo"
          }
        ]
      },
      "FRAMEROWS": {
        "description": "(TableSheet Specific) Limita o conjunto de linhas da janela especificando as linhas iniciais ou finais em relação à linha atual.",
        "parameters": [
          {
            "name": "função_início",
            "optional": "falso",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica o limite superior da partição."
              },
              {
                "value": "[@]",
                "description": "Indica a linha ou valor atual."
              },
              {
                "value": "[@-n]",
                "description": "Indica o n precedente do atual, se a ordem for crescente."
              },
              {
                "value": "[@+n]",
                "description": "Indica o n precedente do atual, se a ordem for decrescente."
              }
            ]
          },
          {
            "name": "função_final",
            "optional": "verdadeiro",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica o seguimento inferior da partição."
              },
              {
                "value": "[@]",
                "description": "Indica a linha ou valor atual."
              },
              {
                "value": "[@+n]",
                "description": "Indica os n seguintes do atual, se a ordem for crescente."
              },
              {
                "value": "[@-n]",
                "description": "Indica o n seguinte do atual, se a ordem for decrescente."
              }
            ]
          },
          {
            "name": "modo_de_exclusão",
            "optional": "verdadeiro",
            "repeatable": "falso",
            "enum": [
              {
                "value": "0",
                "description": "Este é o caso padrão, nenhuma linha é excluída."
              },
              {
                "value": "1",
                "description": "A linha atual é excluída, os outros pares da linha atual permanecem."
              },
              {
                "value": "2",
                "description": "A linha atual e os pares são todos excluídos."
              },
              {
                "value": "3",
                "description": "A fileira atual permanece, os outros pares são excluídos."
              }
            ]
          }
        ]
      },
      "FRAMERANGE": {
        "description": "(TableSheet Specific) Limita o conjunto de linhas da janela especificando o intervalo inicial ou final em relação ao valor na linha atual.",
        "parameters": [
          {
            "name": "função_início",
            "optional": "falso",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica o limite superior da partição."
              },
              {
                "value": "[@]",
                "description": "Indica a linha ou valor atual."
              },
              {
                "value": "[@-n]",
                "description": "Indica o n precedente do atual, se a ordem for crescente."
              },
              {
                "value": "[@+n]",
                "description": "Indica o n precedente do atual, se a ordem for decrescente."
              }
            ]
          },
          {
            "name": "função_final",
            "optional": "verdadeiro",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica o seguimento inferior da partição."
              },
              {
                "value": "[@]",
                "description": "Indica a linha ou valor atual."
              },
              {
                "value": "[@+n]",
                "description": "Indica os n seguintes do atual, se a ordem for crescente."
              },
              {
                "value": "[@-n]",
                "description": "Indica o n seguinte do atual, se a ordem for decrescente."
              }
            ]
          },
          {
            "name": "modo_de_exclusão",
            "optional": "verdadeiro",
            "repeatable": "falso",
            "enum": [
              {
                "value": "0",
                "description": "Este é o caso padrão, nenhuma linha é excluída."
              },
              {
                "value": "1",
                "description": "A linha atual é excluída, os outros pares da linha atual permanecem."
              },
              {
                "value": "2",
                "description": "A linha atual e os pares são todos excluídos."
              },
              {
                "value": "3",
                "description": "A fileira atual permanece, os outros pares são excluídos."
              }
            ]
          }
        ]
      },
      "FRAMEGROUPS": {
        "description": "(Específico da planilha de tabela) Limita o conjunto de linhas da janela especificando o intervalo inicial ou final em relação aos \\\"grupos\\\" de contagem relativos ao grupo atual.",
        "parameters": [
          {
            "name": "função_início",
            "optional": "falso",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica o limite superior da partição."
              },
              {
                "value": "[@]",
                "description": "Indica a linha ou valor atual."
              },
              {
                "value": "[@-n]",
                "description": "Indica o n precedente do atual, se a ordem for crescente."
              },
              {
                "value": "[@+n]",
                "description": "Indica o n precedente do atual, se a ordem for decrescente."
              }
            ]
          },
          {
            "name": "função_final",
            "optional": "verdadeiro",
            "repeatable": "falso",
            "enum": [
              {
                "value": "-1",
                "description": "Indica o seguimento inferior da partição."
              },
              {
                "value": "[@]",
                "description": "Indica a linha ou valor atual."
              },
              {
                "value": "[@+n]",
                "description": "Indica os n seguintes do atual, se a ordem for crescente."
              },
              {
                "value": "[@-n]",
                "description": "Indica o n seguinte do atual, se a ordem for decrescente."
              }
            ]
          },
          {
            "name": "modo_de_exclusão",
            "optional": "verdadeiro",
            "repeatable": "falso",
            "enum": [
              {
                "value": "0",
                "description": "Este é o caso padrão, nenhuma linha é excluída."
              },
              {
                "value": "1",
                "description": "A linha atual é excluída, os outros pares da linha atual permanecem."
              },
              {
                "value": "2",
                "description": "A linha atual e os pares são todos excluídos."
              },
              {
                "value": "3",
                "description": "A fileira atual permanece, os outros pares são excluídos."
              }
            ]
          }
        ]
      },
      "CUMEDIST": {
        "description": "(Específico da TableSheet) A distribuição cumulativa de um valor dentro de um grupo de valores."
      },
      "W_PERCENTRANK": {
        "description": "(TableSheet Specific) Calcula a porcentagem da classificação relativa de uma linha dentro de uma partição de linhas."
      },
      "ROWNUMBER": {
        "description": "(TableSheet Specific) Retorna o número da linha atual dentro de sua partição."
      },
      "W_RANK": {
        "description": "(TableSheet Specific) Retorna a classificação de cada linha dentro da partição de um conjunto de resultados."
      },
      "DENSERANK": {
        "description": "(TableSheet Specific) Retorna a classificação da linha atual dentro de sua partição, sem lacunas."
      },
      "LEAD": {
        "description": "(TableSheet Specific) Fornece acesso ao valor de uma linha em um determinado deslocamento físico que segue a linha atual.",
        "parameters": [
          {
            "name": "função_valor"
          },
          {
            "name": "desvio",
            "optional": "verdadeiro"
          },
          {
            "name": "valor_padrão",
            "optional": "verdadeiro"
          }
        ]
      },
      "LAG": {
        "description": "(TableSheet Specific) Fornece acesso ao valor de uma linha em um determinado deslocamento físico anterior à linha atual.",
        "parameters": [
          {
            "name": "função_valor"
          },
          {
            "name": "desvio",
            "optional": "verdadeiro"
          },
          {
            "name": "valor_padrão",
            "optional": "verdadeiro"
          }
        ]
      },
      "NTILE": {
        "description": "(Específico da TableSheet) Divide uma partição em N buckets e atribui a cada linha seu número de bucket.",
        "parameters": [
          {
            "name": "não"
          }
        ]
      },
      "FIRSTVALUE": {
        "description": "(Específico de TableSheet) Acesso ao valor da primeira linha dentro do quadro da janela.",
        "parameters": [
          {
            "name": "função_valor"
          }
        ]
      },
      "LASTVALUE": {
        "description": "(Específico de TableSheet) Acesso ao valor da última linha dentro do quadro da janela.",
        "parameters": [
          {
            "name": "função_valor"
          }
        ]
      },
      "NTHVALUE": {
        "description": "(Específico da TableSheet) Acesso ao valor da n-ésima linha dentro do quadro da janela.",
        "parameters": [
          {
            "name": "função_valor"
          },
          {
            "name": "não"
          }
        ]
      },
      "CALCULATE": {
        "description": "(Específico do agrupamento de planilhas) Expanda o contexto do grupo para a fórmula.",
        "parameters": [
          {
            "name": "fórmula"
          },
          {
            "name": "função_remover_filtros"
          }
        ]
      },
      "REMOVEFILTERS": {
        "description": "(TableSheet Grouping Specific) Selecione o contexto do nível de grupo superior.",
        "parameters": [
          {
            "name": "função_de_campo_de_grupo",
            "optional": "verdadeiro",
            "repeatable": "verdadeiro"
          }
        ]
      },
      "CHILDREN": {
        "description": "(Hierarquia específica da planilha de tabela) Recupera o valor dos filhos que estão a um certo deslocamento do pai.",
        "parameters": [
          {
            "name": "deslocamento_de_nível"
          },
          {
            "name": "função_de_campo"
          }
        ]
      },
      "ONLYCHILDREN": {
        "description": "(Hierarquia específica da planilha de tabela) Recupera o valor dos filhos que não são pais.",
        "parameters": [
          {
            "name": "função_de_campo"
          }
        ]
      },
      "PARENT": {
        "description": "(Hierarquia específica da planilha de tabela) Recupera o valor do pai que está a um certo deslocamento do atual.",
        "parameters": [
          {
            "name": "deslocamento_de_nível"
          },
          {
            "name": "função_de_campo"
          }
        ]
      },
      "LEVEL": {
        "description": "(Hierarquia específica da planilha) Recupera o nível do atual."
      },
      "LEVELROWNUMBER": {
        "description": "(Hierarquia específica da planilha) Recupera o número da linha atual sob seu pai."
      }
    }
  },
  "Sheets": {
    "Exp_NotSupported": "Exceção não suportada",
    "Exp_PasteExtentIsNull": "pasteExtent é nulo",
    "Exp_InvalidPastedArea": "A área colada deve ter o mesmo tamanho que a área copiada ou recortada.",
    "Exp_MultipleSelections": "Esta ação não funcionará em seleções múltiplas.",
    "Exp_ChangePartOfArray": "Não é possível alterar parte de uma matriz.",
    "Exp_InvalidAndSpace": "Inválido {0}: {1} (deve estar entre {2} e {3}).",
    "Exp_SrcIsNull": "O argumento 'src' é nulo",
    "Exp_DestIsNull": "O argumento 'dest' é nulo",
    "Exp_InvalidCustomFunction": "função personalizada inválida",
    "Exp_InvalidCustomName": "nome personalizado inválido",
    "Exp_CustomNameBothInUse": "Tanto o nome atual quanto o novo nome são referenciados nas fórmulas das células",
    "Exp_IndexOutOfRange": "Índice está fora do intervalo!",
    "Exp_InvalidRange": "Intervalo inválido",
    "Exp_NotAFunction": "Não é uma função",
    "Exp_ArgumentOutOfRange": "ArgumentoForaDeIntervalo",
    "Exp_PasteSourceCellsLocked": "As células da planilha de origem estão bloqueadas.",
    "Exp_InvalidCopyPasteSize": "As áreas de copiar e colar não são do mesmo tamanho.",
    "Exp_PasteDestinationCellsLocked": "A célula que você está tentando alterar é protegida e, portanto, somente leitura.",
    "Exp_PasteChangeMergeCell": "Não é possível alterar parte de uma célula mesclada.",
    "Tip_Row": "Linha: ",
    "Tip_Column": "Coluna: ",
    "Tip_Column_Offset": "Desvio: ",
    "Tip_Height": "Altura: {0} pixels",
    "Tip_Width": "Largura: {0} pixels",
    "NewTab": "Novo...",
    "Exp_EmptyNamedStyle": "O nome do estilo nomeado não pode ser vazio ou nulo",
    "Exp_SheetNameInvalid": "O nome da planilha não pode ficar em branco ou conter estes caracteres: *, :, [, ], ?, \\\\, /",
    "Exp_SheetNameConflict": "Esse nome já foi escolhido. Tente outro.",
    "Exp_ArrayFormulaSpan": "Fórmulas de matriz não são válidas em células mescladas.",
    "Exp_DestSheetIsNull": "destSheet é nulo",
    "Exp_SheetIsNull": "a planilha é nula.",
    "Exp_OverlappingSpans": "Esta operação causará sobreposição de vãos.",
    "NeedCanvasSupport": "Você precisa de um navegador que suporte totalmente HTML5 Canvas para executar o SpreadJS",
    "ARIA_Resize": "redimensionar",
    "ARIA_First": "primeiro",
    "ARIA_PreviousArrow": "seta anterior",
    "ARIA_NextArrow": "próxima seta",
    "ARIA_Last": "durar",
    "ARIA_PreviousButton": "botão anterior",
    "ARIA_NextButton": "botão próximo",
    "ARIA_SheetTab": "aba de planilha",
    "ARIA_NewSheet": "nova folha",
    "ARIA_Blank": "em branco",
    "ARIA_Scrollbar_Left_Button": "botão esquerdo da barra de rolagem",
    "ARIA_Scrollbar_Top_Button": "botão superior da barra de rolagem",
    "ARIA_Scrollbar_Thumb_Button": "botão de polegar da barra de rolagem",
    "ARIA_Scrollbar_Right_Button": "botão direito da barra de rolagem",
    "ARIA_Scrollbar_Bottom_Button": "botão inferior da barra de rolagem",
    "ARIA_Scrollbar_TRACK_Button": "botão de trilha da barra de rolagem",
    "ARIA_Cell": "célula",
    "ARIA_HasValue": "tem valor {0}",
    "ARIA_HasFormula": "tem fórmula {0}",
    "ARIA_HasCheckbox": "tem caixa de seleção {0}",
    "ARIA_HasButton": "tem botão {0}",
    "ARIA_HasHyperlink": "tem hiperlink {0}",
    "ARIA_HasComment": "tem comentário {0}",
    "ARIA_RowHeader": "cabeçalho da linha",
    "ARIA_ColumnHeader": "cabeçalho da coluna",
    "SHEET_NAME": "Folha",
    "REPORT_SUMMARY": "Soma",
    "Exp_InsertCopiedCutCells": "Esta seleção não é válida. A área de copiar/colar deve ter o mesmo tamanho",
    "Exp_InsertCopiedCutCellsOnSpanTable": "Isso não funcionará porque moverá células em uma tabela na sua planilha ou fará com que algumas células mescladas sejam desfeitas.",
    "Exp_InsertCopiedCutCellsNoRange": "Novas células não podem ser inseridas porque há células não vazias que se estenderiam além da planilha.",
    "Exp_InsertCopiedCutCellsOverlap": "Esta seleção não é válida. Certifique-se de que as áreas de copiar e colar não se sobreponham, a menos que sejam do mesmo tamanho e formato.",
    "Exp_InsertCopiedCutCellsAffectTable": "Você não pode reorganizar células dentro de uma tabela dessa maneira, porque isso pode afetar outras células da tabela de uma maneira inesperada.",
    "Exp_InvalidSortArrayFormulaInRange": "Não é possível classificar o intervalo atual porque a fórmula de matriz existe.",
    "Exp_InvalidSortSpanInRange": "Não é possível classificar o intervalo atual, pois existe uma extensão.",
    "Exp_InvalidSortPartTableOrMultiTableInRange": "Não é possível classificar o intervalo atual como tabela parcial ou existe mais de uma tabela.",
    "Exp_InvalidOperationInProtect": "A célula ou gráfico que você está tentando alterar está em uma planilha protegida. Para fazer uma alteração, desproteja a planilha.",
    "EXP_IO": "Exceção de leitura e gravação de arquivo.",
    "EXP_FILE_FORMAT": "Formato de arquivo incorreto.",
    "EXP_NO_PASSWORD": "O arquivo Excel não pode ser aberto porque a pasta de trabalho/planilha está protegida por senha.",
    "EXP_INVALID_PASSWORD": "A senha especificada está incorreta.",
    "NORMAL": "Normal",
    "GENERAL": "Em geral",
    "EXP_UNSUPPORT_CRYPTO_ALGORITHM": "Algoritmos criptográficos não suportados",
    "Exp_InvalidOperationSizeLimitExceeded": "O tamanho do arquivo excede o limite definido, o tamanho máximo.",
    "STEP": {
      "start": "iniciar carregamento {0}",
      "loadFileData": "carregar dados de {0} para espalhar",
      "loadSheetData": "carregar dados de {0}",
      "startCalc": "iniciar reCalc",
      "loadSheetFormula": "carregar fórmula de {0}",
      "parseFile": "analisar {0} conteúdo"
    },
    "pasteSpecialOptionDialog": {
      "title": "Colar Especial",
      "paste": "Colar",
      "pasteOptions": {
        "all": "Todos",
        "formulas": "Fórmulas",
        "values": "Valores",
        "formats": "Formatos",
        "comments": "Comentários",
        "validation": "Validação",
        "usingSourceTheme": "Todos usando o tema Source",
        "noBorders": "Tudo exceto fronteiras",
        "columnWidth": "Larguras das colunas",
        "formulasAndNumberFormats": "Fórmulas e formatos numéricos",
        "valueAndNumberFormats": "Formatos de valores e números"
      },
      "operation": "Operação",
      "operationOptions": {
        "none": "Nenhum",
        "add": "Adicionar",
        "subtract": "Subtrair",
        "multiply": "Multiplicar",
        "divide": "Dividir"
      },
      "skipBlanks": "Ignorar espaços em branco",
      "transpose": "Transpor",
      "pasteLink": "Colar Link"
    },
    "ok": "OK",
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
    "Exp_NotSupportedDataSource": "A fonte de dados não é suportada!"
  },
  "Outlines": {
    "Exp_InvalidIndex": "Índice inválido",
    "Exp_InvalidCount": "Contagem inválida",
    "Exp_InvalidLevel": "Nível inválido",
    "Exp_GroupInfoIsNull": "groupInfo é nulo",
    "Exp_GROUP_PROTECTED": "Você não pode usar este comando em uma planilha protegida. Para usar este comando, você deve primeiro desproteger a planilha."
  },
  "ConditionalFormatting": {
    "Exp_RuleIsNull": "O argumento 'regra' é nulo",
    "Exp_NotSupported": "Exceção não suportada"
  },
  "Touch": {
    "ToolStrip_PasteText": "Colar",
    "ToolStrip_CutText": "Corte",
    "ToolStrip_CopyText": "Cópia",
    "ToolStrip_AutoFillText": "Preenchimento automático"
  },
  "FloatingObjects": {
    "Exp_FloatingObjectHasSameNameError": "A planilha atual já tem um objeto flutuante com o mesmo nome.",
    "Exp_FloatingObjectNameEmptyError": "Objeto flutuante deve ter nome"
  },
  "CellTypes": {
    "OK": "OK",
    "Cancel": "Cancelar",
    "Calendar_ShortWeeks_1": "SEG",
    "Calendar_ShortWeeks_2": "TER",
    "Calendar_ShortWeeks_3": "QUA",
    "Calendar_ShortWeeks_4": "QUI",
    "Calendar_ShortWeeks_5": "SEX",
    "Calendar_ShortWeeks_6": "SENTADO",
    "Calendar_ShortWeeks_7": "SOL",
    "Calendar_Weeks_1": "Segunda-feira",
    "Calendar_Weeks_2": "Terça-feira",
    "Calendar_Weeks_3": "Quarta-feira",
    "Calendar_Weeks_4": "Quinta-feira",
    "Calendar_Weeks_5": "Sexta-feira",
    "Calendar_Weeks_6": "Sábado",
    "Calendar_Weeks_7": "Domingo",
    "Calendar_ShortMonths_1": "JANEIRO",
    "Calendar_ShortMonths_2": "FEV",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "ABR",
    "Calendar_ShortMonths_5": "PODERIA",
    "Calendar_ShortMonths_6": "JUNHO",
    "Calendar_ShortMonths_7": "JULHO",
    "Calendar_ShortMonths_8": "AGOSTO",
    "Calendar_ShortMonths_9": "SETE",
    "Calendar_ShortMonths_10": "OUT",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DEZ",
    "Calendar_Months_1": "JANEIRO",
    "Calendar_Months_2": "FEVEREIRO",
    "Calendar_Months_3": "MARCHAR",
    "Calendar_Months_4": "ABRIL",
    "Calendar_Months_5": "PODERIA",
    "Calendar_Months_6": "JUNHO",
    "Calendar_Months_7": "JULHO",
    "Calendar_Months_8": "AGOSTO",
    "Calendar_Months_9": "SETEMBRO",
    "Calendar_Months_10": "OUTUBRO",
    "Calendar_Months_11": "NOVEMBRO",
    "Calendar_Months_12": "DEZEMBRO",
    "Calendar_Time_AM": "SOU",
    "Calendar_Time_PM": "PM",
    "Calendar_EraName_1": "M",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_Today": "Hoje",
    "Calendar_BuiltIn_Today": "Hoje",
    "Calendar_BuiltIn_Yesterday": "Ontem",
    "Calendar_BuiltIn_Last7Days": "Últimos 7 dias",
    "Calendar_BuiltIn_ThisMonth": "Este mês",
    "Calendar_BuiltIn_LastMonth": "Mês passado",
    "Calendar_LastMonth": "Ir para o mês anterior",
    "Calendar_NextMonth": "Ir para o próximo mês",
    "Calendar_LastYear": "Ir para o ano anterior",
    "Calendar_NextYear": "Vá para o próximo ano",
    "Calendar_LastTenYear": "Vá para os dez anos anteriores",
    "Calendar_NextTenYear": "Vá para os próximos dez anos",
    "Quarter_Format_1": "Q1",
    "Quarter_Format_2": "Q2",
    "Quarter_Format_3": "T3",
    "Quarter_Format_4": "Quarto trimestre",
    "ThemeColor": "Cores do tema",
    "StandardColor": "Cores Padrão",
    "Calculator_DivideByZeroInfo": "Não é possível dividir por zero.",
    "Calculator_InvalidInputInfo": "Entrada inválida.",
    "Calculator_SqrtParameterException": "Entrada inválida para a função.",
    "Calculator_OverFlowInfo": "A operação aritmética resultou em um estouro.",
    "MultiColumn_InvalidDataSource": "Fonte de dados inválida. A fórmula deve retornar uma matriz.",
    "DataObject_MeetLock": "Não é possível inserir dados porque há uma célula bloqueada no caminho.",
    "DataObject_MeetSpan": "Não é possível inserir dados porque há uma célula mesclada no caminho.",
    "DataObject_MeetTable": "Não é possível inserir dados porque há uma tabela no caminho.",
    "FileUpload_Title": "+ Carregar"
  },
  "Filter": {
    "Exp_InvalidColumnIndex": "Índice de coluna inválido.",
    "SortAscending": "Classificação crescente",
    "SortDescending": "Classificação decrescente",
    "OK": "OK",
    "Cancel": "Cancelar",
    "Search": "Procurar",
    "CheckAll": "Verificar tudo",
    "UncheckAll": "Desmarcar tudo",
    "Blanks": "(Espaços em branco)",
    "Exp_FilterItemIsNull": "FilterItem é nulo.",
    "Show": "Mostrar",
    "ShowRows": "Mostrar linhas onde:",
    "And": "E",
    "Or": "Ou",
    "SortColor": "Classificar por cor",
    "FilterColor": "Filtrar por cor",
    "FilterCellTitle": "Filtrar por cor de célula",
    "FilterFontTitle": "Filtrar por cor da fonte",
    "SortCellTitle": "Classificar por cor da célula",
    "SortFontTitle": "Classificar por cor da fonte",
    "FontColor": "Mais cores de fonte...",
    "CellColor": "Mais cores de células...",
    "NoFill": "Sem preenchimento",
    "Automatic": "Automático",
    "Clear": "Limpar filtro de {0}",
    "TextFilter": "Filtros de texto",
    "DateFilter": "Filtros de data",
    "NumberFilter": "Filtros de Números",
    "Custom": "Filtro personalizado...",
    "Equal": "É igual a...",
    "NotEqual": "Não é igual a...",
    "GreaterThan": "Maior que...",
    "GreaterOrEquals": "Maior ou igual a...",
    "LessThan": "Menor que...",
    "LessThanOrEquals": "Menor ou igual a...",
    "Between": "Entre...",
    "Top10": "Os 10 melhores...",
    "AboveAverage": "Acima da média",
    "BelowAverage": "Abaixo da média",
    "Begin": "Começa com...",
    "End": "Termina com...",
    "Contain": "Contém...",
    "NotContain": "Não contém...",
    "Before": "Antes...",
    "After": "Depois...",
    "Tomorrow": "Amanhã",
    "Today": "Hoje",
    "Yesterday": "Ontem",
    "NextWeek": "Próxima semana",
    "ThisWeek": "Essa semana",
    "LastWeek": "Semana passada",
    "NextMonth": "Próximo mês",
    "ThisMonth": "Este mês",
    "LastMonth": "Mês passado",
    "NextQuarter": "Próximo trimestre",
    "ThisQuarter": "Este trimestre",
    "LastQuarter": "Último Trimestre",
    "NextYear": "Próximo ano",
    "ThisYear": "Este ano",
    "LastYear": "Ano passado",
    "YearToDate": "No acumulado do ano",
    "AllDates": "Todas as datas no período",
    "Top10Filter": "Os 10 melhores filtros automáticos",
    "CustomTitle": "Filtro automático personalizado",
    "ColorTitle": "Cores de células disponíveis",
    "top": "principal",
    "bottom": "fundo",
    "SortCell": "Selecione uma cor de célula para classificar:",
    "SortFont": "Selecione uma cor de fonte para classificar:",
    "FilterCell": "Selecione uma cor de célula para filtrar:",
    "FilterFont": "Selecione uma cor de fonte para filtrar:",
    "Selected": "Selecionado:",
    "IsEquals": "é igual a",
    "NotEquals": "não é igual",
    "IsGreaterThan": "é maior que",
    "IsGreaterOrEqual": "é maior ou igual a",
    "IsLess": "é menor que",
    "LessOrEqual": "é menor ou igual a",
    "IsBeginWith": "começa com",
    "NotBeginWith": "não começa com",
    "IsEndWith": "termina com",
    "NotEndWith": "não termina com",
    "IsContain": "contém",
    "NotContains": "não contém",
    "IsAfter": "está depois",
    "AfterOrEqual": "é posterior ou igual a",
    "IsBefore": "é antes",
    "BeforeOrEqual": "é anterior ou igual a",
    "Q1": "Trimestre 1",
    "Q2": "Quarto 2",
    "Q3": "Quarto 3",
    "Q4": "Quarto Trimestre",
    "Jan": "Janeiro",
    "Feb": "Fevereiro",
    "Mar": "Marchar",
    "Apr": "Abril",
    "May": "Poderia",
    "Jun": "Junho",
    "Jul": "Julho",
    "Aug": "Agosto",
    "Sep": "Setembro",
    "Oct": "Outubro",
    "Nov": "Novembro",
    "Dec": "Dezembro",
    "Explain1": "Use ? para representar qualquer caractere único",
    "Explain2": "Use * para representar qualquer série de caracteres",
    "Year": "",
    "Day": "",
    "add_current_filter": "Adicionar seleção atual ao filtro",
    "invalidCondition": "Erro na linha de análise"
  },
  "Tables": {
    "Exp_DragDropShiftTableCell": "Esta operação não é permitida. A operação está tentando deslocar células em uma tabela na sua planilha.",
    "Exp_DragDropChangePartOfTable": "Não é possível concluir a operação: você está tentando alterar uma parte de uma linha ou coluna da tabela de uma forma que não é permitida.",
    "Exp_TableEmptyNameError": "O nome da tabela não pode estar vazio.",
    "Exp_TableNameInvalid": "O nome da tabela não é válido.",
    "Exp_TableInvalidRow": "Índice de linha ou contagem de linhas inválido.",
    "Exp_TableInvalidColumn": "Índice de coluna ou contagem de colunas inválido.",
    "Exp_TableIntersectError": "As tabelas não podem ser cruzadas.",
    "Exp_TableHasSameNameError": "A planilha atual já existe em uma tabela com o mesmo nome.",
    "Exp_TableRangeHasFilterError": "O intervalo da tabela atual contém um intervalo de filtro.",
    "Exp_TableDataSourceNullError": "A fonte de dados da tabela não pode ser nula.",
    "Exp_TableMoveOutOfRange": "A tabela não pode ser movida para fora da planilha.",
    "Exp_TableResizeOutOfRange": "A contagem de linhas, a contagem de colunas e a tabela inválidas não podem ser redimensionadas para fora da planilha.",
    "Exp_ArrayFormulaTable": "fórmulas de matriz multicelular não são permitidas em tabelas.",
    "Exp_TableResizeInvalidRange": "Os cabeçalhos devem permanecer na mesma linha, e o intervalo de tabelas resultante deve se sobrepor ao intervalo de tabelas original.",
    "Exp_TableResizeToSpan": "Não é possível concluir a operação: uma tabela não pode se sobrepor a uma tabela ou células mescladas.",
    "Exp_TableResizeWithFilter": "Não é possível deslocar células em um intervalo ou tabela filtrada.",
    "Exp_TableResizeWithHidden": "Não é possível redimensionar uma tabela adjacente a uma linha ou coluna oculta.",
    "Exp_TableResizeToTable": "Não é possível concluir a operação: operações que incluem células dentro e fora de um intervalo de tabelas e operações que afetam células que se sobrepõem a várias tabelas não são permitidas.",
    "Exp_RowParamOutOfRange": "A linha de parâmetros está fora do intervalo de dados da tabela.",
    "Exp_ColParamOutOfRange": "O parâmetro col está fora do intervalo de dados da tabela.",
    "Exp_TableDeleteCountInvalid": "A contagem de parâmetros a serem excluídos deixará a tabela vazia.",
    "Exp_TableAddRowIntersectSpan": "Isso não funcionará porque moveria células em um intervalo na sua planilha.",
    "Exp_TableAddRowIntersectTable": "Isso não funcionará porque moveria células de uma tabela na sua planilha.",
    "Exp_TableAddRowNoEnoughRoom": "Não é possível inserir novas células porque isso empurraria células não vazias para o final da planilha. Essas células podem parecer vazias, mas têm valores em branco, alguma formatação ou uma fórmula. Exclua linhas ou colunas suficientes para abrir espaço para o que você deseja inserir e tente novamente.",
    "Table_Total": "Total",
    "Table_None": "Nenhum",
    "Table_Average": "Média",
    "Table_Count": "Contar",
    "Table_Count_Numbers": "Contar Números",
    "Table_Max": "Máx",
    "Table_Min": "Mínimo",
    "Table_Sum": "Soma",
    "Table_StdDev": "Desvio Padrão",
    "Table_Var": "Var"
  },
  "Fill": {
    "CopyCells": "Copiar Células",
    "FillSeries": "Série de preenchimento",
    "FillFormattingOnly": "Preencher somente formatação",
    "FillWithoutFormatting": "Preencher sem formatação",
    "Exp_NumberOnly": "Só funciona para números",
    "Exp_RangeContainsMergedCell": "O intervalo não deveria ter células mescladas.",
    "Exp_TargetContainsMergedCells": "O intervalo de destino não deve ter células mescladas.",
    "Exp_MergedCellsIdentical": "Esta operação requer que as células mescladas tenham tamanhos idênticos.",
    "Exp_FillRangeContainsMergedCell": "Não é possível preencher o intervalo que contém uma célula mesclada.",
    "Exp_FillCellsReadOnly": "As células que você está tentando preencher são protegidas e, portanto, somente leitura.",
    "Exp_ChangeMergedCell": "Não é possível alterar parte da célula mesclada.",
    "Exp_ColumnReadOnly": "A coluna que você está tentando alterar é protegida e, portanto, somente leitura.",
    "Exp_RowReadOnly": "A linha que você está tentando alterar é protegida e, portanto, somente leitura.",
    "Exp_CellReadOnly": "A célula que você está tentando alterar é protegida e, portanto, somente leitura.",
    "Exp_RangeIsNull": "o intervalo é nulo",
    "Exp_ChangePartOfArray": "Não é possível alterar parte de uma matriz."
  },
  "GanttSheet": {
    "GANTT_MONTH": "Mês",
    "GANTT_WEEK": "Semana",
    "GANTT_DAY": "Dia",
    "GANTT_HOUR": "Hora",
    "GANTT_MINUTE": "Minuto",
    "GANTT_NEW_TASK": "<Nova Tarefa>",
    "GANTT_NEW_SUMMARY_TASK": "<Nova Tarefa de Resumo>",
    "GANTT_NEW_MILESTONE": "<Novo Marco>",
    "GANTT_TASK_NUMBER": "Número da Tarefa",
    "GANTT_TASK_NAME": "Nome da Tarefa",
    "GANTT_MILESTONE": "Marco",
    "GANTT_MODE": "Modo",
    "GANTT_DURATION": "Duração",
    "GANTT_START": "Começar",
    "GANTT_FINISH": "Terminar",
    "GANTT_START_DISPLAYED": "IniciarExibido",
    "GANTT_FINISH_DISPLAYED": "ConcluirExibido",
    "GANTT_PREDECESSORS": "Predecessores",
    "GANTT_SUCCESSORS": "Sucessores",
    "GANTT_COMPLETE": "% Completo",
    "GANTT_COMPLETE_CHANGE": "Completar através de",
    "GANTT_TASK_SCHEDULE_MODE_MANUALLY": "Manual",
    "GANTT_TASK_SCHEDULE_MODE_AUTO": "Auto",
    "GANTT_INVALID_OPERATION": "operação inválida",
    "GANTT_INVALID_LEVEL": "nívelinválido",
    "GANTT_INVALID_ID": "ID inválido",
    "GANTT_INVALID_ROW_INDEX": "índice de linha inválido",
    "GANTT_INVALID_INDEX": "índiceInválido",
    "GANTT_INVALID_COUNT": "contagem inválida",
    "GANTT_INVALID_TASK": "tarefa inválida",
    "GANTT_INVALID_DEPENDENCY": "invalidDependency",
    "GANTT_INVALID_UNIT": "unidade inválida",
    "GANTT_INVALID_WORK_DAYS": "diasdetrabalhoinválidos",
    "GANTT_INVALID_TASK_ID": "ID de tarefa inválido",
    "GANTT_INVALID_TASK_PARENT_ID": "TaskParentId inválido",
    "GANTT_INVALID_TASK_LEVEL": "nível de tarefa inválido",
    "GANTT_INVALID_FIELD": "campo inválido",
    "GANTT_INVALID_ASCENDING_STATES": "EstadosAscendentesInválidos",
    "GANTT_VALUE_INVALID": "valorInválido",
    "GANTT_VALUE_READONLY": "valorSomenteLeitura",
    "DEFAULT_DATE_TIME_FORMAT": "aaaa-mm-dd h:mm",
    "GANTT_ACTION_TASK": "Tarefa",
    "GANTT_ACTION_TASK_COLON": "Tarefa:",
    "GANTT_ACTION_START": "Começar:",
    "GANTT_ACTION_FINISH": "Terminar:",
    "GANTT_ACTION_TASK_START": "Início da tarefa:",
    "GANTT_ACTION_TASK_FINISH": "Tarefa concluída:",
    "GANTT_ACTION_START_LINK": "Começar",
    "GANTT_ACTION_FINISH_LINK": "Terminar",
    "GANTT_ACTION_FROM_OF": "De {0} De:",
    "GANTT_ACTION_TO_OF": "Para {0} De:",
    "GANTT_ACTION_START_ONLY": "Iniciar somente",
    "GANTT_ACTION_FINISH_ONLY": "Somente Concluir",
    "GANTT_ACTION_DURATION": "Duração:",
    "GANTT_ACTION_COMPLETE_THROUGH": "CompleteThrough:",
    "GANTT_ACTION_LINE_TIP_TITLE": "{0} para {1} Link",
    "GANTT_TASK_BAR_TASK_LINK": "Link da tarefa:",
    "GANTT_TASK_BAR_FROM": "De:",
    "GANTT_TASK_BAR_TO": "Para:",
    "GANTT_TASK_BAR_FS": "Fim para Início (FS)",
    "GANTT_TASK_BAR_FF": "Fim a fim (FF)",
    "GANTT_TASK_BAR_SF": "Início ao Fim (SF)",
    "GANTT_TASK_BAR_SS": "Início a Início (SS)",
    "GANTT_TASK_BAR_UNNAMED": "Sem nome",
    "GANTT_TASK_BAR_COMPLETE_THROUGH": "Concluído através de:",
    "GANTT_TASK_BAR_COMPLETE": "% Completo:",
    "GANTT_CALENDAR_STANDARD": "Padrão",
    "GANTT_CALENDAR_NIGHT_SHIFT": "Turno da Noite",
    "GANTT_CALENDAR_24HOURS": "24 horas",
    "GANTT_CALENDAR_MINUTE": "Minuto",
    "GANTT_CALENDAR_MINUTE_NAMES": [
      "eu",
      "mínimo",
      "minuto"
    ],
    "GANTT_CALENDAR_HOUR": "Hora",
    "GANTT_CALENDAR_HOUR_NAMES": [
      "h",
      "horas",
      "hora"
    ],
    "GANTT_CALENDAR_DAY": "Dia",
    "GANTT_CALENDAR_DAY_NAMES": [
      "e",
      "morrer",
      "dia"
    ],
    "GANTT_CALENDAR_WEEK": "Semana",
    "GANTT_CALENDAR_WEEK_NAMES": [
      "c",
      "semana",
      "semana"
    ],
    "GANTT_CALENDAR_MONTH": "Mês",
    "GANTT_CALENDAR_MONTH_NAMES": [
      "mais",
      "seg",
      "mês"
    ],
    "GANTT_CALENDAR_UNIT_LABELS": [
      "mínimo",
      "horas",
      "dia",
      "semana",
      "seg",
      "ano"
    ],
    "GANTT_CALENDAR_UNIT_LABELS_PLURALS": [
      "minutos",
      "horas",
      "dias",
      "semana",
      "monstro",
      "anos"
    ],
    "wmk1": "47616e74745368656574",
    "wmk2": "47616e74745368656574"
  },
  "OutlineColumn": {
    "Exp_GROUP_PROTECTED": "Você não pode usar este comando em uma planilha protegida. Para usar este comando, você deve primeiro desproteger a planilha."
  },
  "StatusBar": {
    "cellMode": "Modo Célula",
    "cellModeReady": "Preparar",
    "cellModeEnter": "Digitar",
    "cellModeEdit": "Editar",
    "inCalculation": "Calculando: {0}",
    "iterateCalculation": "Calculando iter: {0}",
    "formulaAverage": "Média",
    "formulaCount": "Contar",
    "formulaNumericalCount": "Contagem Numérica",
    "formulaMin": "Mínimo",
    "formulaMax": "Máx",
    "formulaSum": "Soma",
    "zoomSlider": "Controle deslizante de zoom",
    "zoom": "Ampliação",
    "toolTipCellMode": "No modo {0}",
    "toolTipFormulaAverage": "Média das células selecionadas",
    "toolTipFormulaCount": "Número de células selecionadas que contêm dados",
    "toolTipFormulaNumericalCount": "Número de células selecionadas que contêm dados numéricos",
    "toolTipFormulaMin": "Valor mínimo na seleção",
    "toolTipFormulaMax": "Valor máximo na seleção",
    "toolTipFormulaSum": "Soma das células selecionadas",
    "toolTipZoomOut": "Diminuir o zoom",
    "toolTipZoomIn": "Ampliar",
    "toolTipSlider": "Ampliação",
    "toolTipZoomPanel": "Nível de zoom",
    "progressItem": "Progresso"
  },
  "AutoMerge": {
    "Exp_RangeIsIntersected": "O alcance não deve cruzar com alcances existentes."
  },
  "NameBox": {
    "invalidName": "Você deve inserir uma referência válida para a qual deseja ir ou digitar um nome válido para a seleção.",
    "nameBox": "Caixa de Nome"
  },
  "Component": {
    "Calendar_BuiltIn_Last7Days": "Últimos 7 dias",
    "Calendar_BuiltIn_LastMonth": "Mês passado",
    "Calendar_BuiltIn_ThisMonth": "Este mês",
    "Calendar_BuiltIn_Today": "Hoje",
    "Calendar_BuiltIn_Yesterday": "Ontem",
    "Calendar_EraName_1": "M",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_LastMonth": "Ir para o mês anterior",
    "Calendar_LastTenYear": "Vá para os dez anos anteriores",
    "Calendar_LastYear": "Ir para o ano anterior",
    "Calendar_Months_1": "JANEIRO",
    "Calendar_Months_10": "OUTUBRO",
    "Calendar_Months_11": "NOVEMBRO",
    "Calendar_Months_12": "DEZEMBRO",
    "Calendar_Months_2": "FEVEREIRO",
    "Calendar_Months_3": "MARCHAR",
    "Calendar_Months_4": "ABRIL",
    "Calendar_Months_5": "PODERIA",
    "Calendar_Months_6": "JUNHO",
    "Calendar_Months_7": "JULHO",
    "Calendar_Months_8": "AGOSTO",
    "Calendar_Months_9": "SETEMBRO",
    "Calendar_NextMonth": "Ir para o próximo mês",
    "Calendar_NextTenYear": "Vá para os próximos dez anos",
    "Calendar_NextYear": "Vá para o próximo ano",
    "Calendar_ShortMonths_1": "JANEIRO",
    "Calendar_ShortMonths_10": "OUT",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DEZ",
    "Calendar_ShortMonths_2": "FEV",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "ABR",
    "Calendar_ShortMonths_5": "PODERIA",
    "Calendar_ShortMonths_6": "JUNHO",
    "Calendar_ShortMonths_7": "JULHO",
    "Calendar_ShortMonths_8": "AGOSTO",
    "Calendar_ShortMonths_9": "SETE",
    "Calendar_ShortWeeks_1": "SEG",
    "Calendar_ShortWeeks_2": "TER",
    "Calendar_ShortWeeks_3": "QUA",
    "Calendar_ShortWeeks_4": "QUI",
    "Calendar_ShortWeeks_5": "SEX",
    "Calendar_ShortWeeks_6": "SENTADO",
    "Calendar_ShortWeeks_7": "SOL",
    "Calendar_Time_AM": "SOU",
    "Calendar_Time_PM": "PM",
    "Calendar_Today": "Hoje",
    "Calendar_Weeks_1": "Segunda-feira",
    "Calendar_Weeks_2": "Terça-feira",
    "Calendar_Weeks_3": "Quarta-feira",
    "Calendar_Weeks_4": "Quinta-feira",
    "Calendar_Weeks_5": "Sexta-feira",
    "Calendar_Weeks_6": "Sábado",
    "Calendar_Weeks_7": "Domingo",
    "Cancel": "Cancelar",
    "Empty": "vazio",
    "NoColor": "Sem Cor",
    "OK": "OK"
  },
  "InputMask": {
    "errorMsg": {
      "invalidPattern": "Padrão inválido",
      "duplicatedDateTimePattern": "Padrão de data e hora duplicado",
      "emptyPattern": "Padrão Vazio",
      "unknownPattern": "Falha ao analisar padrão desconhecido",
      "invalidOptionalPattern": "Falha de Padrão Opcional de Análise",
      "invalidGroupPattern": "Falha no Padrão de Grupo de Análise",
      "errorQuantifierPattern": "Posição do Quantificador de Erro",
      "invalidQuantifierPattern": "Falha no Padrão de Quantificador de Análise",
      "noEntry": "Nenhuma restrição pode ser inserida"
    },
    "hourFormatSingleDesignator": [
      "UM",
      "P"
    ],
    "hourFormatDesignator": [
      "SOU",
      "PM"
    ]
  },
  "Print": {
    "Exp_InvalidSheetIndex": "Índice de planilha inválido."
  },
  "PDF": {
    "Exp_FileIOError": "Exceção de leitura e gravação de arquivo.",
    "Exp_FontError": "Não é um formato de fonte suportado ou fonte PDF padrão."
  },
  "Shapes": {
    "Exp_InvalidConnectionSite": "Site de conexão inválido.",
    "Exp_DuplicatedName": "Nome duplicado.",
    "Exp_EmptyName": "Nome vazio.",
    "Exp_InvalidRange": "Intervalo inválido"
  },
  "Charts": {
    "period": "período",
    "movingAverage": "Média Móvel",
    "exponential": "Exponencial",
    "linear": "Linear",
    "logarithmic": "Logarítmico",
    "polynomial": "Polinomial",
    "power": "Poder",
    "unsupportedChartType": "Tipo de gráfico não suportado",
    "SERIES": "Série",
    "VALUE": "Valor: ",
    "POINT": "Apontar ",
    "SIZE": "Tamanho: ",
    "INCREASE": "Aumentar",
    "DECREASE": "Diminuir",
    "TOTAL": "Total",
    "ChartTitle": "Título do gráfico",
    "Branch": "Filial",
    "AxisTitle": "Título do Eixo"
  },
  "Slicer": {
    "Blank": "(em branco)",
    "Exp_SlicerNameInvalid": "O nome do fatiador não é válido.",
    "Exp_SlicerNameExist": "O nome do fatiador já está em uso; insira um nome exclusivo.",
    "SlicerNameInFormula": "Fatiador"
  },
  "formulaEditor": {
    "NO_MATH_PARENTHESES": "Sem parênteses de correspondência",
    "MISS_RIGHT_PARENTHESES": "')' é esperado.",
    "MISS_LET_FUNCTION_BODY": "Corpo ausente da expressão LET.",
    "UNKNOWN_NAME": "Nome desconhecido",
    "UNKNOWN_SHEET": "Folha desconhecida \\\"$1\\",
    "NO_MATCHED_ARGUMENTS": "Esperava argumentos de $1, mas obteve $2",
    "INVALID_IDENTIFIER_ARGUMENT": "Este argumento deve ser um identificador para vincular.",
    "DUPLICATE_IDENTIFIER": "Identificador duplicado $1",
    "INVALID_EXPRESSION": "EXPRESSÃO inválida",
    "INVALID_FORMULA": "Fórmula Inválida",
    "FORMULA": "Fórmula"
  },
  "PivotEngine": {
    "dateResource": {
      "Jan": "Janeiro",
      "Feb": "Fev",
      "Mar": "Março",
      "Apr": "Abr",
      "May": "Poderia",
      "Jun": "Junho",
      "Jul": "Julho",
      "Aug": "Agosto",
      "Sep": "Setembro",
      "Oct": "Outubro",
      "Nov": "Novembro",
      "Dec": "Dez",
      "Qtr1": "Trimestre 1",
      "Qtr2": "Trimestre 2",
      "Qtr3": "Trimestre",
      "Qtr4": "Quarto trimestre",
      "Seconds": "Segundos",
      "Minutes": "Minutos",
      "Hours": "Horas",
      "Days": "Dias",
      "Months": "Meses",
      "Quarters": "Quartos",
      "Years": "Anos",
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
    "Exp_NoItemParseError": "Não é possível encontrar um nome de item. Verifique se você digitou o nome corretamente e se o item está presente no relatório da Tabela Dinâmica.",
    "Exp_UnsupportedCalcItemType": "Referências, nomes e matrizes não são suportados em fórmulas de Tabela Dinâmica.",
    "blank": "(em branco)"
  },
  "PivotTables": {
    "RepeatName": "Repetir nome",
    "NotExist": "Não existe",
    "SubtotalType_Prefix_0": "Média de",
    "SubtotalType_Prefix_1": "Contagem de",
    "SubtotalType_Prefix_2": "ContarNúmeros de",
    "SubtotalType_Prefix_3": "Máx. de",
    "SubtotalType_Prefix_4": "Min de",
    "SubtotalType_Prefix_5": "Produto de",
    "SubtotalType_Prefix_6": "Desvio Padrão de",
    "SubtotalType_Prefix_7": "Desvio Padrão de",
    "SubtotalType_Prefix_8": "Soma de",
    "SubtotalType_Prefix_9": "Var de",
    "SubtotalType_Prefix_10": "Varp de",
    "ColumnLabels": "Rótulos de coluna",
    "Total": "{0}Total{1}",
    "All": "Todos",
    "MultipleItems": "Vários itens",
    "RowLabels": "Rótulos de linha",
    "GrandTotal": "Total geral",
    "Values": "Valores",
    "PivotPanel_Title": "Campos da Tabela Dinâmica",
    "PivotPanel_ReportText": "Escolha campos para adicionar ao relatório",
    "PivotPanel_SearchPlaceholder": "Procurar",
    "PivotPanel_FieldAreaText": "Arraste os campos entre as áreas abaixo:",
    "PivotPanel_FiltersItemsTitle": "Filtros",
    "PivotPanel_RowsItemsTitle": "Linhas",
    "PivotPanel_ColumnsItemsTitle": "Colunas",
    "PivotPanel_ValuesItemsTitle": "Valores",
    "PivotPanel_DeferUpdateText": "Adiar atualização de layout",
    "EmptyPivotTable_PromptMessage1": "Clique nesta área para trabalhar com o relatório da Tabela Dinâmica",
    "EmptyPivotTable_PromptMessage2": "Ative a Lista de Campos da Tabela Dinâmica para trabalhar com a Tabela Dinâmica",
    "PivotPanel_Update": "Atualizar",
    "PivotPanel_DropDownList_Up": "Subir",
    "PivotPanel_DropDownList_Down": "Mover para baixo",
    "PivotPanel_DropDownList_Beginning": "Ir para o início",
    "PivotPanel_DropDownList_End": "Mover para o fim",
    "PivotPanel_DropDownList_ReportFilter": "Mover para filtro de relatório",
    "PivotPanel_DropDownList_Row": "Mover para rótulos de linha",
    "PivotPanel_DropDownList_Col": "Mover para rótulos de coluna",
    "PivotPanel_DropDownList_Values": "Mova-se para Valores",
    "PivotPanel_DropDownList_Remove": "Remover Campo",
    "PivotPanel_DropDownList_Set": "Configurações de campo...",
    "PivotPanel_DropDownList_ValueSet": "Configurações do campo de valor...",
    "PivotPanel_Fields_MoveTo_ReportField": "Adicionar ao filtro de relatório",
    "PivotPanel_Fields_MoveTo_RowLabel": "Adicionar aos rótulos de linha",
    "PivotPanel_Fields_MoveTo_ColLabel": "Adicionar aos rótulos das colunas",
    "PivotPanel_Fields_MoveTo_Value": "Adicionar aos valores",
    "PivotPanel_LabelOrValue_ClearFilter": "Limpar filtro",
    "PivotPanel_ValueFilterOrLabel_Equals": "É igual a...",
    "PivotPanel_ValueFilterOrLabel_NotEqual": "Não é igual a...",
    "PivotPanel_ValueFilterOrLabel_GreaterThan": "Maior que...",
    "PivotPanel_ValueFilterOrLabel_GreaterOrTo": "Maior ou igual a...",
    "PivotPanel_ValueFilterOrLabel_LessThan": "Menor que...",
    "PivotPanel_ValueFilterOrLabel_LessOrTo": "Menor ou igual a...",
    "PivotPanel_ValueFilterOrLabel_Between": "Entre...",
    "PivotPanel_ValueFilterOrLabel_NotBetween": "Não entre...",
    "PivotPanel_ValueFilter_Top10": "Os 10 melhores...",
    "PivotPanel_ValueFilterOrLabel_IsBeginWith": "Começa com...",
    "PivotPanel_ValueFilterOrLabel_NotBegin": "Não começa com...",
    "PivotPanel_ValueFilterOrLabel_End": "Termina com...",
    "PivotPanel_ValueFilterOrLabel_NotEndWith": "Não termina com...",
    "PivotPanel_ValueFilterOrLabel_Contain": "Contém...",
    "PivotPanel_ValueFilterOrLabel_NotContain": "Não contém...",
    "ValueFilterOrLabel_Equals": "é igual a",
    "ValueFilterOrLabel_NotEqual": "não é igual",
    "ValueFilterOrLabel_GreaterThan": "maior que",
    "ValueFilterOrLabel_GreaterOrTo": "maior ou igual a",
    "ValueFilterOrLabel_LessThan": "menor que",
    "ValueFilterOrLabel_LessOrTo": "menor ou igual a",
    "ValueFilterOrLabel_Between": "entre",
    "ValueFilterOrLabel_NotBetween": "não entre",
    "ValueFilterOrLabelSelect_GreaterThan": "é maior que",
    "ValueFilterOrLabelSelect_GreaterOrTo": "é maior ou igual a",
    "ValueFilterOrLabelSelect_LessThan": "é menor que",
    "ValueFilterOrLabelSelect_LessOrTo": "é menor ou igual a",
    "ValueFilterOrLabelSelect_Between": "está entre",
    "ValueFilterOrLabelSelect_NotBetween": "não está entre",
    "ValueFilterOrLabel_IsBeginWith": "começa com",
    "ValueFilterOrLabel_NotBegin": "não começa com",
    "ValueFilterOrLabel_End": "termina com",
    "ValueFilterOrLabel_NotEndWith": "não termina com",
    "ValueFilterOrLabel_Contain": "contém",
    "ValueFilterOrLabel_NotContain": "não contém",
    "PivotPanel_ValueFilterOrLabel_Before": "Antes...",
    "PivotPanel_ValueFilterOrLabel_After": "Depois...",
    "PivotPanel_ValueFilterOrLabel_Tomorrow": "Amanhã",
    "PivotPanel_ValueFilterOrLabel_Today": "Hoje",
    "PivotPanel_ValueFilterOrLabel_Yesterday": "Ontem",
    "PivotPanel_ValueFilterOrLabel_NextWeek": "Próxima semana",
    "PivotPanel_ValueFilterOrLabel_ThisWeek": "Essa semana",
    "PivotPanel_ValueFilterOrLabel_LastWeek": "Semana passada",
    "PivotPanel_ValueFilterOrLabel_NextMonth": "Próximo mês",
    "PivotPanel_ValueFilterOrLabel_ThisMonth": "Este mês",
    "PivotPanel_ValueFilterOrLabel_LastMonth": "Mês passado",
    "PivotPanel_ValueFilterOrLabel_NextQuarter": "Próximo trimestre",
    "PivotPanel_ValueFilterOrLabel_ThisQuarter": "Este trimestre",
    "PivotPanel_ValueFilterOrLabel_LastQuarter": "Último Trimestre",
    "PivotPanel_ValueFilterOrLabel_NextYear": "Próximo ano",
    "PivotPanel_ValueFilterOrLabel_ThisYear": "Este ano",
    "PivotPanel_ValueFilterOrLabel_LastYear": "Ano passado",
    "PivotPanel_ValueFilterOrLabel_YearToDate": "No acumulado do ano",
    "PivotPanel_ValueFilterOrLabel_MonthToDate": "Do mês até a data",
    "PivotPanel_ValueFilterOrLabel_QuarterToDate": "Trimestre até a data",
    "PivotPanel_ValueFilterOrLabel_ParallelYearToDate": "Ano paralelo até a data",
    "PivotPanel_ValueFilterOrLabel_ParallelMonthToDate": "Mês paralelo até a data",
    "PivotPanel_ValueFilterOrLabel_ParallelQuarterToDate": "Trimestre paralelo até a data",
    "PivotPanel_ValueFilterOrLabel_AllDates": "Todas as datas no período",
    "PivotPanel_ValueFilterOrLabel_Custom": "Filtro personalizado...",
    "PivotPanel_Sort_A_Z": "Classificar de A a Z",
    "PivotPanel_Sort_Z_A": "Classificar de Z a A",
    "PivotPanel_Sort_Smallest_Largest": "Classificar do menor para o maior",
    "PivotPanel_Sort_Largest_Smallest": "Classificar do maior para o menor",
    "PivotPanel_Sort_More": "Mais opções de classificação...",
    "PivotPanel_Filter_Clear": "Limpar filtro de {0}",
    "PivotPanel_Filter_Label": "Filtros de rótulos",
    "PivotPanel_Filter_Value": "Filtros de Valor",
    "PivotPanel_Date_Filter": "Filtros de data",
    "Ok": "OK",
    "Cancel": "Cancelar",
    "NumberFormat": "Formato Numérico",
    "LabelFormat": "Formato de etiqueta",
    "Number": "Número",
    "FormatCells": "Formatar células",
    "Sample": "Amostra",
    "Type": "Tipo",
    "CustomFormats": [
      "Em geral",
      "0",
      "0,00",
      "#,##0",
      "#,##0,00",
      "#,##0;(#,##0)",
      "#,##0;[Vermelho](#,##0)",
      "#,##0,00;(#,##0,00)",
      "#,##0,00;[Vermelho](#,##0,00)",
      "$#,##0;($#,##0)",
      "$#,##0;[Vermelho]($#,##0)",
      "$#,##0,00;($#,##0,00)",
      "$#,##0,00;[Vermelho]($#,##0,00)",
      "0%",
      "0,00%",
      "0,00E+00",
      "##0.0E+0",
      "# ?/?",
      "# ??/??",
      "m/d/aaaa",
      "d-mmm-aaaa",
      "d-mmm",
      "mmm-aaaa",
      "h:mm manhã/tarde",
      "h:mm:ss AM/PM",
      "hh:mm",
      "hh:mm:ss",
      "m/d/aaaa hh:mm",
      "mm:ss",
      "mm:ss.0",
      "@",
      "[h]:mm:ss",
      "$ #,##0;$ (#,##0);$ \\\"-\\\";@",
      " #,##0; (#,##0); \\\"-\\\";@",
      "$#,##0.00;$(#,##0.00);$\\\"-\\\"??;@",
      " #,##0.00; (#,##0.00); \\\"-\\\"??;@",
      "hh:mm:ss",
      "00000",
      "# ???/???",
      "000-00-0000",
      "dddd, mmmm dd, aaaa",
      "m/d;@",
      "[<=9999999]###-####;(###) ###-####",
      "# ?/8"
    ],
    "Select_Field": "Selecionar campo",
    "PivotPanel_Filter_SelectAll": "Marcar tudo",
    "PivotPanel_Filter_NoSelectAll": "Desmarcar tudo",
    "PivotPanel_Filter_Search": "procurar",
    "Label_Title": "Filtro de rótulo",
    "Label_Show": "Mostrar itens para os quais o rótulo",
    "Use_Single_Character": "Use ? para representar qualquer caractere único",
    "Use_Series_Characters": "Use * para representar qualquer personagem da série",
    "Value_Show": "Mostrar itens para os quais",
    "Value_Title": "Filtro de Valor",
    "Top_Ten_Filter": "Top 10 Filtros",
    "TopTenShow": "mostrar",
    "Sort_Field_Dialog_Title": "Organizar",
    "Sort_Field_Dialog_Sort_Options": "Opções de classificação",
    "Sort_Field_Dialog_Summary": "Resumo",
    "Sort_Field_Dialog_Ascending_Sort": "Ascendente (A a Z) por:",
    "Sort_Field_Dialog_Descending_Sort": "Descendente (Z a A) por:",
    "Sort_Field_Dialog_More_Options": "Mais opções...",
    "Sort_Field_More_Dialog_Title": "Mais opções de classificação",
    "Sort_Field_More_Dialog_Sort_By": "Ordenar por",
    "Sort_Field_More_Dialog_Values_In_Selected_Area": "Valores em {{AREA}} selecionado",
    "Sort_Value_Dialog_Title": "Classificar por valor",
    "Sort_Value_Dialog_Sort_Direction": "Direção de classificação",
    "Sort_Value_Dialog_Asc": "Do menor para o maior",
    "Sort_Value_Dialog_Desc": "Do maior para o menor",
    "Sort_Value_Dialog_Top_To_Bottom": "De cima para baixo",
    "Sort_Value_Dialog_Left_To_Right": "Da esquerda para a direita",
    "Custom_Sort_Summary": "Classificação personalizada",
    "Sort_Order_ASC": "ordem crescente",
    "Sort_Order_DESC": "ordem decrescente",
    "Sort_In_Row": "linha",
    "Sort_In_Column": "coluna",
    "Sort_Summary_Pattern": "Classificar {{FIELD_NAME}} em {{ORDER}}",
    "Sort_Value_Summary_Pattern": "Classificar {{FIELD_NAME}} por {{SELECTED_FIELD_NAME}} em {{ORDER}}",
    "Sort_More_Summary_Pattern": "Classificar {{FIELD_NAME}} por {{SELECTED_FIELD_NAME}} em {{ORDER}} usando valores nesta {{ROW_COLUMN}}:\\r\\n",
    "Invalid_Sort_Range": "A referência de classificação não é válida. Certifique-se de que ela esteja dentro dos dados que você deseja classificar e que a primeira caixa Classificar por não seja a mesma ou esteja em branco.",
    "Invalid_Field_Sort_By": "Não é possível determinar por qual campo da Tabela Dinâmica classificar.",
    "Top": "Principal",
    "Bottom": "Fundo",
    "Top_Item": "Unid",
    "Top_Percent": "Por cento",
    "Top_Sum": "Soma",
    "ByJoiner": "por",
    "AndJoiner": "e",
    "Q1": "Trimestre 1",
    "Q2": "Quarto 2",
    "Q3": "Quarto 3",
    "Q4": "Quarto Trimestre",
    "Jan": "Janeiro",
    "Feb": "Fevereiro",
    "Mar": "Marchar",
    "Apr": "Abril",
    "May": "Poderia",
    "Jun": "Junho",
    "Jul": "Julho",
    "Aug": "Agosto",
    "Sep": "Setembro",
    "Oct": "Outubro",
    "Nov": "Novembro",
    "Dec": "Dezembro",
    "IsBefore": "é antes",
    "IsBeforeOrEqual": "é anterior ou igual a",
    "IsAfter": "está depois",
    "IsAfterOrEqual": "é posterior ou igual a",
    "IsBetween": "está entre",
    "IsNotBetween": "não está entre",
    "DateFilterTitle": "Filtro de data",
    "DateShow": "Mostrar itens para os quais a data",
    "WholeDays": "Dias Inteiros",
    "FieldSetting": "Configurações de campo",
    "ValueSetting": "Configurações do campo de valor",
    "SourceName": "Nome da fonte:",
    "CustomName": "Nome personalizado:",
    "SummarizeValue": "Resumir valores por",
    "ShowValueAs": "Mostrar valor como",
    "CalculationForDialog": "Cálculo: ",
    "BaseFieldForDialog": "Campo Base: ",
    "BaseItemForDialog": "Item base: ",
    "BaseItemNext": "(próximo)",
    "BaseItemPrevious": "(anterior)",
    "SummarizeValueField": "Resumir campo de valores por",
    "ShowValueAsField": "Mostrar valor como",
    "ChooseType": "Escolha o tipo de cálculo que você deseja usar para resumir os dados do campo selecionado",
    "Sum": "Soma",
    "Count": "Contar",
    "Average": "Média",
    "Max": "Máx",
    "Min": "Mínimo",
    "Product": "Produto",
    "CountNumbers": "Contar Números",
    "StdDev": "Desvio Padrão",
    "StdDevp": "Desvio Padrão",
    "Var": "Var",
    "Varp": "Varpa",
    "sigmaValue": "∑ Valores",
    "sigmaValueTemp": "Valores",
    "DateFormatError": "Esta não é uma data válida",
    "noCalculation": "Sem Cálculo",
    "percentGrandTotal": "% do total geral",
    "percentColumnTotal": "% do total da coluna",
    "percentRowTotal": "% do total da linha",
    "percentEllipsis": "% De ...",
    "percentParentRowTotal": "% do total da linha pai",
    "percentParentColumnTotal": "% do total da coluna pai",
    "percentParentTotal": "% do total dos pais...",
    "difference": "Diferença de...",
    "percentDifference": "% Diferença de ...",
    "runningTotal": "Total corrente em ...",
    "percentRunningTotal": "% Total em Execução em ...",
    "rankSmallestLargest": "Classifique do menor para o maior...",
    "rankLargestSmallest": "Classifique do maior para o menor...",
    "index": "Índice",
    "showValueAsDialog": [
      "",
      "",
      "",
      "",
      "% De ",
      "",
      "",
      "% do total dos pais",
      "Diferença de",
      "% Diferença de ",
      "Total corrente em",
      "% Total em Execução em",
      "Classifique do menor para o maior",
      "Classifique do maior para o menor",
      ""
    ],
    "baseField": "Campo base:",
    "baseItem": "Item base:",
    "grouping": "Agrupamento",
    "auto": "Auto",
    "startingAt": "Começando em:",
    "endingAt": "Terminando em:",
    "groupBy": "Por:",
    "seconds": "Segundos",
    "minutes": "Minutos",
    "hours": "Horas",
    "days": "Dias",
    "months": "Meses",
    "quarters": "Quartos",
    "years": "Anos",
    "numberOfDays": "Número de dias",
    "NoHaveSpread": "exceção da pasta de trabalho",
    "SourceError": "Exceção de dados de origem, não é possível criar relatório de tabela dinâmica",
    "SourceNotIsTableNameOrFormula": "os dados de origem não são o nome da tabela e a fórmula",
    "SourceDataOnlyOne": "Este comando requer pelo menos duas linhas de dados de origem. Você não pode usar o comando em uma seleção em apenas uma linha",
    "FieldAreaLimited": "O campo que você está movendo não pode ser colocado nessa área do relatório.",
    "Views": "Visualizações",
    "Group": "Grupo",
    "param_error": "o parâmetro é nulo ou indefinido",
    "EmptyValueFieldError": "Você precisa de pelo menos um campo na área Valores para aplicar um filtro de valor",
    "DefaultPivotTableViewName": "Visualização dinâmica",
    "toolTipContent_Row": "Linha: ",
    "toolTipContent_Column": "Coluna: ",
    "toolTipContent_Value": "Valor: ",
    "toolTipContent_NoValue": "Sem valor",
    "deferLayoutUpdate": "Adiar atualização de layout",
    "getStringLabelFilterItemText": "",
    "getDateLabelFilterItemText": "",
    "getValueFilterItemText": "",
    "PivotTableErrorMessage_ShowDetail": "Não é possível mostrar ou ocultar detalhes desta seleção",
    "PivotTableErrorMessage_MakeChange": "Não podemos fazer essa alteração para as células selecionadas porque isso afetará uma Tabela Dinâmica. Use a lista de campos para alterar o relatório. Se estiver tentando inserir ou excluir células, mova a Tabela Dinâmica e tente novamente.",
    "PivotTableErrorMessage_ExistData": "Já existem dados em {}. Deseja substituí-los?",
    "PivotTableErrorMessage_EditWhenDefer": "O relatório da Tabela Dinâmica não pode ser editado com a caixa de seleção Adiar Atualização do Layout marcada. Para editar o relatório, desmarque a caixa de seleção Adiar Atualização do Layout na parte inferior da Lista de Campos da Tabela Dinâmica.",
    "PivotTableErrorMessage_DuplicatedFieldName": "O nome do campo da tabela dinâmica já existe.",
    "PivotTableErrorMessage_EmptyFieldName": "Não é possível inserir um valor nulo como nome de item ou campo em um relatório de Tabela Dinâmica.",
    "PivotTableErrorMessage_Protect": "Esse comando não pode ser executado enquanto uma planilha protegida contiver outro relatório de Tabela Dinâmica com base nos mesmos dados de origem. Para remover a proteção da planilha que contém o outro relatório, clique na guia da planilha e, em seguida, clique em Desproteger Planilha (guia Revisão, grupo Alterações). Em seguida, tente o comando novamente.",
    "PivotTableErrorMessage_EmptySourceFieldName": "O nome do campo da Tabela Dinâmica não é válido. Para criar um relatório de Tabela Dinâmica, você deve usar dados organizados como uma lista com colunas rotuladas. Se estiver alterando o nome de um campo da Tabela Dinâmica, você deve digitar um novo nome para o campo.",
    "PivotTableErrorMessage_Overlap": "Um relatório de tabela dinâmica não pode se sobrepor a outro relatório de tabela dinâmica.",
    "PivotTableErrorMessage_InvalidChange": "Não podemos alterar esta parte da Tabela Dinâmica.",
    "PivotTableErrorMessage_InvalidGroup": "Não é possível agrupar essa seleção.",
    "PivotTableErrorMessage_InvalidReference": "A referência não é válida.",
    "PivotTableForAccessibility": "Tabela dinâmica: \\r\\nNome da tabela dinâmica: ",
    "PivotTableCalcItemHasTowCacheField": "Se um ou mais campos na Tabela Dinâmica tiverem itens calculados, nenhum campo poderá ser usado na área de dados duas ou mais vezes, ou na área de dados e em outra área ao mesmo tempo. Se estiver tentando adicionar um campo, remova os itens calculados e adicione o campo novamente. Se estiver tentando adicionar um item calculado, altere o relatório da Tabela Dinâmica para que nenhum campo seja usado mais de uma vez e, em seguida, adicione o item calculado.",
    "PivotTableHasNumberOrDateGroup": "Este campo de relatório de Tabela Dinâmica é agrupado. Você não pode adicionar um item calculado a um campo agrupado. Para desagrupar o campo, certifique-se de que ele esteja na área de linha ou coluna, selecione um dos itens do campo agrupado, clique no botão Desagrupar no grupo Grupo na guia Analisar e insira o item calculado. Após inserido, você pode agrupar os itens do campo novamente.",
    "PivotTableSubtotalType": "Médias, desvios padrão e variâncias não são suportados quando um relatório de Tabela Dinâmica tem itens calculados.",
    "PivotTableHasSameItemName": "O item ou campo calculado não pôde ser criado porque existe outro item ou campo com o mesmo nome.",
    "PivotTableCalcItemHasMultipleDataField": "Vários campos de dados do mesmo campo não são suportados quando um relatório de tabela dinâmica tem itens calculados.",
    "PivotTableMoveCalcItemFieldToReport": "Este campo não pode ser colocado no filtro do relatório porque contém itens calculados. Para colocar este campo no filtro do relatório, primeiro exclua os itens calculados.",
    "PivotTableErrorFormula": "Não é possível encontrar um nome de item. Verifique se você digitou o nome corretamente e se o item está presente no relatório da Tabela Dinâmica.",
    "SlicerNameInFormula": "Fatiador",
    "search": "Procurar",
    "AddSearchResult": "Adicionar seleção atual ao filtro",
    "Layout": "Disposição",
    "showNoData": "Mostrar itens sem dados",
    "showSubtotalTop": "Exibir subtotais no topo de cada grupo",
    "TIMELINE_PLACE_HOLDER": "{TL}",
    "ALL_DATES_IN": "Todas as datas em ",
    "ALL_PERIODS": "Todos os períodos",
    "INVALID_DATE_SELECTION": "Seleção de data inválida!",
    "QUARTER_MAP": [
      "",
      "Q1",
      "Q2",
      "T3",
      "Quarto trimestre"
    ],
    "DateNotEqual": "Não {TL}",
    "DateNewerThan": "Depois de {TL}",
    "DateNewerThanOrEqual": "Depois ou em {TL}",
    "DateOlderThan": "Antes {TL}",
    "DateOlderThanOrEqual": "Antes ou em{TL}",
    "DateNotBetween": "Não entre {TL}",
    "AllDatesIn_Quarter1": "Todas as datas no Q1",
    "AllDatesIn_Quarter2": "Todas as datas no Q2",
    "AllDatesIn_Quarter3": "Todas as datas no Q3",
    "AllDatesIn_Quarter4": "Todas as datas no quarto trimestre",
    "AllDatesIn_January": "Todas as datas em janeiro",
    "AllDatesIn_February": "Todas as datas em fevereiro",
    "AllDatesIn_March": "Todas as datas em março",
    "AllDatesIn_April": "Todas as datas em abril",
    "AllDatesIn_May": "Todas as datas em maio",
    "AllDatesIn_June": "Todas as datas em junho",
    "AllDatesIn_July": "Todas as datas em julho",
    "AllDatesIn_August": "Todas as datas em agosto",
    "AllDatesIn_September": "Todas as datas em setembro",
    "AllDatesIn_October": "Todas as datas em outubro",
    "AllDatesIn_November": "Todas as datas em novembro",
    "AllDatesIn_December": "Todas as datas em dezembro",
    "TIME_LEVEL_YEARS": "ANOS",
    "TIME_LEVEL_QUARTERS": "QUARTOS",
    "TIME_LEVEL_MONTHS": "MESES",
    "TIME_LEVEL_DAYS": "DIAS",
    "PivotTableErrorMessage_ExistTable": "Um relatório de tabela dinâmica não pode sobrepor uma tabela.",
    "VALUE_MUST_NUMBER": "O valor deve ser um número.",
    "ENTRY_NUMBER": "Sua entrada não pode ser usada. Pode ser necessário um número inteiro ou decimal.",
    "POSITIVE_INTEGER": "O número deve ser maior que zero."
  },
  "TableSheet": {
    "EXP_TooManyPinRecords": "Suporta apenas menos de 10 registros de pinos.",
    "GroupPanelTip": "Arraste aqui para definir grupos de linhas",
    "GroupPanelFieldsHeader": "Campos",
    "GroupPanelGroupsHeader": "Grupos",
    "GroupPanelItemRemove": "Remover",
    "GroupPanelItemAddCalculation": "Adicionar campo de resumo",
    "GroupPanelDropDownCalcField": "Campo",
    "GroupPanelSummaryLabelFormula": "Fórmula",
    "GroupPanelSummaryLabelCaption": "Rubrica",
    "GroupPanelSummaryLabelSlice": "Fatiar",
    "GroupPanelSummaryLabelRelateTo": "Relacione-se com",
    "GroupPanelSummaryLabelPosition": "Posição",
    "GroupPanelSummaryLabelPositionHeader": "Cabeçalho",
    "GroupPanelSummaryLabelPositionFooter": "Rodapé",
    "GroupPanelItemRemoveAll": "Remover tudo",
    "GroupPanelAddCalculateColumn": "Adicionar coluna calculada",
    "TextColon": ":",
    "StatusBarRowCount": "Contagem de linhas",
    "StatusBarToolTipRowCount": "Contagem de linhas selecionadas",
    "CrossColumnCrossHeader": "Cruzar",
    "CrossColumnDetailFormatter": "Formatador",
    "CrossColumnDetailName": "Nome",
    "CrossColumnDetailValue": "Valor",
    "CrossColumnDetailValuePlaceHolder": "Arraste o item aqui para definir o valor",
    "CrossColumnDetailOver": "Sobre",
    "CrossColumnDetailCaption": "Rubrica",
    "CrossColumnDetailValueHeader": "Mostrar Cabeçalho de Valor Cruzado",
    "CrossColumnDetailFilter": "Filtro",
    "CrossColumnDetailAttributes": "Atributos",
    "CrossColumnDetailList": "Lista",
    "Exp_InvalidOperationInProtectForTableSheet": "O intervalo que você está tentando alterar está bloqueado.",
    "defineColumn": "Definir coluna",
    "cancel": "Cancelar",
    "submit": "Enviar",
    "defineColumnValue": "Valor",
    "defineColumnCaption": "Rubrica",
    "defineColumnType": "Tipo",
    "defineColumnFormatting": "Formatação",
    "defineColumnConfiguration": "Configuração",
    "defineColumnDefaultValue": "Padrão",
    "defineColumnOthers": "Outros",
    "defineColumnFormula": "Fórmula",
    "defineColumnNone": "Nenhum",
    "defineColumnAll": "Todos",
    "defineColumnNoResults": "Nenhum resultado",
    "defineColumnRequired": "É necessário",
    "defineColumnExisted": "Existiu",
    "columnTypeNumber": "Número",
    "columnTypeText": "Texto",
    "columnTypeFormula": "Fórmula",
    "columnTypeCheckbox": "Caixa de seleção",
    "columnTypeDate": "Data",
    "columnTypeCurrency": "Moeda",
    "columnTypePercent": "Por cento",
    "columnTypePhone": "Telefone",
    "columnTypeEmail": "E-mail",
    "columnTypeURL": "URL",
    "columnTypeLookup": "Pesquisar",
    "columnTypeCreatedTime": "HoraCriada",
    "columnTypeModifiedTime": "HoraModificada",
    "columnTypeAttachment": "Anexo",
    "columnTypeSelect": "Selecionar",
    "columnTypeBarcode": "Código de barras",
    "columnTypeNumberFormattingSample": "Amostra",
    "columnTypeNumberFormattingDecimalPlaces": "Casas decimais",
    "columnTypeNumberFormattingThousandSeparator": "Use o separador 1000(,)",
    "columnTypeNumberFormattingNegativeNumbers": "Números negativos",
    "columnTypeNumberFormattingSymbol": "Símbolo",
    "columnTypeNumberFormatting": {
      "negativeNumbers": [],
      "numberCategoryFormats": [
        "0",
        "0;[Vermelho]0",
        "0_);(0)",
        "0_);[Vermelho](0)",
        "#,##0",
        "#,##0;[Vermelho]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Vermelho](#,##0)"
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
          "Nenhum",
          "",
          ""
        ],
        [
          "$",
          "$",
          "pt-BR"
        ],
        [
          "¥(Chinês)",
          "¥",
          "zh-cn"
        ],
        [
          "¥(Japonês)",
          "¥",
          "ja-jp"
        ],
        [
          "₩(Coreano)",
          "₩",
          "co-co-co"
        ]
      ],
      "percentageFormats": [
        "0%"
      ],
      "currencyFormatWithoutSymbol": [
        "#,##0",
        "#,##0;[Vermelho]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Vermelho](#,##0)"
      ],
      "commonFormats": {
        "Number": {
          "format": "0,00",
          "label": "Número"
        },
        "Currency": {
          "format": "[$$-409]#,##0,00",
          "label": "Moeda"
        },
        "Accounting": {
          "format": "_(\\\"$\\\"* #,##0.00_);_(\\\"$\\\"* (#,##0.00);_(\\\"$\\\"* \\\"-\\\"??_) ;_(@_)",
          "label": "Contabilidade"
        },
        "ShortDate": {
          "format": "m/d/aaaa",
          "label": "Encontro Curto"
        },
        "LongDate": {
          "format": "[$-409]dddd, mmmm dd, aaaa",
          "label": "Encontro Longo"
        },
        "Time": {
          "format": "[$-409]h:mm:ss AM/PM",
          "label": "Tempo"
        },
        "Percentage": {
          "format": "0,00%",
          "label": "Percentagem"
        },
        "Fraction": {
          "format": "# ?/?",
          "label": "Fração"
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
          "label": "Vírgula"
        }
      }
    },
    "columnTypeLookupTables": "Selecionar tabela de pesquisa",
    "columnTypeLookupFields": "O campo para olhar para cima",
    "columnTypeLookupIndexes": "O número recorde",
    "columnTypeFormattingCategory": "Categoria",
    "columnTypeMask": {
      "pattern": "Padrão",
      "placeholder": "Espaço reservado",
      "excludeLiteral": "Excluir Literal",
      "excludePlaceholder": "Excluir espaço reservado"
    },
    "columnTypeAllEditableFields": "Todos os campos editáveis",
    "columnTypeDateTimePicker": "Seletor de data e hora",
    "columnTypeDateStartDay": "Dia de Início",
    "columnTypeDateMonday": "Segunda-feira",
    "columnTypeDateTuesday": "Terça-feira",
    "columnTypeDateWednesday": "Quarta-feira",
    "columnTypeDateThursday": "Quinta-feira",
    "columnTypeDateFriday": "Sexta-feira",
    "columnTypeDateSaturday": "Sábado",
    "columnTypeDateSunday": "Domingo",
    "columnTypeDateCalendarPage": "Página de calendário",
    "columnTypeDateDay": "Dia",
    "columnTypeDateYear": "Ano",
    "columnTypeDateMonth": "Mês",
    "columnTypeDateShowTime": "Altura de começar",
    "columnTypeDateShowDateRange": "MostrarIntervaloDeDatas",
    "columnTypeDateShowBuiltInDateRange": "MostrarBuiltInDateRange",
    "columnTypeDateType": "Tipo",
    "columnTypeDateLocale": "localidade (localização)",
    "columnTypeCalendar": "Tipo de calendário",
    "columnTypeShowEraFirstYear": "Use Gannen para exibir o 1º ano",
    "columnTypeCalendarType": {
      "western": "Ocidental",
      "JER": "Reinado do Imperador Japonês"
    },
    "columnTypeAttachmentMarginGroup": "Margem",
    "columnTypeAttachmentLeft": "Esquerda",
    "columnTypeAttachmentTop": "Principal",
    "columnTypeAttachmentRight": "Certo",
    "columnTypeAttachmentBottom": "Fundo",
    "columnTypeAttachmentMaxSize": "Limite de tamanho",
    "columnTypeAttachmentAccept": "Tipo de arquivo",
    "columnTypeAttachmentAcceptValueTypes": {
      "txt": "TXT",
      "all": "todos",
      "pdf": "pdf",
      "image": "jpg,png,gif",
      "excel": "docx,xlsx,pptx"
    },
    "columnTypeAttachmentIsPreviewEnabled": "Prévia",
    "columnTypeAttachmentIsClearEnabled": "Claro",
    "columnTypeAttachmentIsDownloadEnabled": "Download",
    "columnTypeAttachmentSizeUnit": "KB",
    "columnTypeCheckboxTitle": "Caixa de seleçãoCélulaType",
    "columnTypeCheckboxTextGroup": "Texto",
    "columnTypeCheckboxTrue": "Verdadeiro",
    "columnTypeCheckboxIndeterminate": "Indeterminado",
    "columnTypeCheckboxFalse": "Falso",
    "columnTypeCheckboxAlign": "Alinhar",
    "columnTypeCheckboxOther": "Outro",
    "columnTypeCheckboxCaption": "Rubrica",
    "columnTypeCheckboxIsThreeState": "ÉTrêsEstado",
    "columnTypeCheckboxBoxSize": "Tamanho da caixa",
    "columnTypeCheckboxAuto": "Auto",
    "columnTypeCheckboxTextAlign": {
      "top": "Principal",
      "bottom": "Fundo",
      "left": "Esquerda",
      "right": "Certo"
    },
    "columnTypeBarcodeLabel": {
      "showLabel": "Mostrar rótulo",
      "barcodeType": "Tipo de código de barras",
      "color": "Cor",
      "errorCorrectionLevel": "Nível de correção de erros",
      "backgroundColor": "Cor de fundo",
      "version": "Versão",
      "model": "Modelo",
      "mask": "Máscara",
      "connection": "Conexão",
      "charCode": "Código de caracteres",
      "connectionNo": "Número de conexão",
      "charset": "Conjunto de caracteres",
      "quietZoneLeft": "Zona de silêncio à esquerda",
      "quietZoneRight": "Zona de silêncio à direita",
      "quietZoneTop": "Zona Silenciosa Top",
      "quietZoneBottom": "Zona de silêncio inferior",
      "labelPosition": "Posição do rótulo",
      "addOn": "Adicionar",
      "addOnLabelPosition": "Posição do rótulo AddOn",
      "fontFamily": "Família de fontes",
      "fontStyle": "Estilo da fonte",
      "fontWeight": "Espessura da fonte",
      "fontTextDecoration": "Fonte TextoDecoração",
      "fontTextAlign": "Fonte TextAlign",
      "fontSize": "Tamanho da fonte",
      "fileIdentifier": "Identificador de arquivo",
      "structureNumber": "Número da Estrutura",
      "structureAppend": "Estrutura Anexar",
      "ecc00_140Symbol": "Tamanho do símbolo Ecc000_140",
      "ecc200EncodingMode": "Modo de codificação final Ecc200",
      "ecc200SymbolSize": "Tamanho do símbolo Ecc200",
      "eccMode": "Modo Ecc",
      "compact": "Compactar",
      "columns": "Colunas",
      "rows": "Linhas",
      "groupNo": "GrupoNo",
      "grouping": "Agrupamento",
      "codeSet": "Conjunto de códigos",
      "fullASCII": "ASCII completo",
      "checkDigit": "Dígito Verificador",
      "nwRatio": "Proporção de Barras Largas e Estreitas",
      "labelWithStartAndStopCharacter": "Rótulo com caractere de início e fim"
    },
    "columnTypeComboBoxEditorValueTypes": "Tipo de Valor do Editor",
    "columnTypeComboBoxItems": "Unid",
    "columnTypeComboBoxItemProperties": "Propriedades do Item",
    "columnTypeComboBoxText": "Texto",
    "columnTypeComboBoxValue": "Valor",
    "columnTypeComboBoxAdd": "Adicionar",
    "columnTypeComboBoxRemove": "Remover",
    "columnTypeComboBoxEditorValueType": {
      "text": "Texto",
      "index": "Índice",
      "value": "Valor"
    },
    "columnTypeComboBoxEditable": "Editável",
    "columnTypeComboBoxItemHeight": "Altura dos itens",
    "columnTypeUrlLabel": {
      "linkColor": "Cor do Link",
      "visitedLinkColor": "Cor do link visitado"
    }
  },
  "DataChart": {
    "AddGroup": "Adicionar grupo",
    "AddRule": "Adicionar regra",
    "AggregationAverage": "Média",
    "AggregationCount": "Contar",
    "AggregationDistinctCount": "Contagem Distinta",
    "AggregationFirstValue": "Primeiro Valor",
    "AggregationMax": "Máx",
    "AggregationMethod": "Método de Agregação",
    "AggregationMin": "Mínimo",
    "AggregationSum": "Soma",
    "Alignment": "Alinhamento",
    "All": "Todos",
    "And": "E",
    "Animation": "Animação",
    "AnimationAnimationMode": "Modo de Animação",
    "AnimationDuration": "Duração(ms)",
    "AnimationEasing": "Facilitando",
    "AnimationModeAll": "Todos",
    "AnimationModeGroup": "Grupo",
    "AnimationModePoint": "Apontar",
    "AnimationStartDelay": "Atraso de início (ms)",
    "Appearance": "Aparência",
    "Apply": "Aplicar",
    "Area": "Gráfico de área",
    "AutoCategoryWidth": "Largura da categoria automática",
    "AutoDirection": "Auto",
    "AxisCrosses": "Cruzes do Eixo",
    "AxisDateMode": "Modo de data",
    "AxisLineColor": "Cor da linha do eixo",
    "AxisLineType": "Tipo de linha do eixo",
    "AxisLineWidth": "Largura da linha do eixo",
    "AxisMode": "Modo Eixo",
    "AxisPosition": "Posição do Eixo",
    "AxisPositionBottom": "Fundo",
    "AxisPositionCrosses": "Cruzes",
    "AxisPositionTop": "Principal",
    "AxisScale": "Escala",
    "Axis_Type": "Tipo de eixo",
    "Background": "Cor de fundo",
    "Bar": "Gráfico de Barras",
    "BindingMode": "Modo de ligação",
    "Bold": "Audacioso",
    "Bolder": "Mais ousado",
    "Border": "Cor da Borda",
    "BorderType": "Tipo de Borda",
    "BorderWidth": "Largura da Borda",
    "BottomWidth": "Largura Inferior",
    "Bubble": "Gráfico de bolhas",
    "CalibrationType": "Tipo de calibração",
    "Cancel": "Cancelar",
    "CanvasPadding": "Preenchimento de lona",
    "CartesianAxisMode": "Cartesiano",
    "CaseSensitive": "Maiúsculas e minúsculas",
    "CategoryAxis": "Eixo de categoria",
    "CategoryWidth": "Largura da categoria",
    "Cell": "Célula",
    "CellBinding": "Ligação celular",
    "CellBindingTip": "Dica: entre no modo de visualização para visualizar os dados reais do gráfico de dados de ligação de células.",
    "Center": "Centro",
    "ChartStyle": "Estilo de gráfico",
    "ChartTitle": "Título do gráfico de dados",
    "ChartType": "Tipo de gráfico",
    "Clear": "Claro",
    "ColorPalette": "Paleta de cores",
    "Column": "Gráfico de colunas",
    "CommaSeparator": "Vírgula",
    "CompleteCalibrationType": "Completo",
    "ConnectLineColor": "Cor da linha",
    "ConnectLineFirstLength": "Comprimento da primeira linha",
    "ConnectLineSecondLength": "Comprimento da segunda linha",
    "ConnectLineVisible": "Linha de conexão visível",
    "ConnectLineWidth": "Largura da linha",
    "ConstantAxisType": "Constante",
    "Contains": "Contém",
    "CornerRadius": "Raio de canto",
    "Custom": "Personalizado",
    "DashedLineType": "Traçado",
    "DataBinding": "Vinculação de dados",
    "DataBindingActualValue": "Valor real",
    "DataBindingCategory": "Categoria",
    "DataBindingColor": "Cor",
    "DataBindingColumnSlicer": "Cortador de Colunas",
    "DataBindingDetail": "Detalhe",
    "DataBindingLowerValue": "Menor valor",
    "DataBindingNoItems": "nenhum item.",
    "DataBindingRowSlicer": "Cortador de Linha",
    "DataBindingSize": "Tamanho",
    "DataBindingTargetValue": "Valor Alvo",
    "DataBindingTipLabel": "Etiqueta de ponta",
    "DataBindingUpperValue": "Valor Superior",
    "DataBindingValue": "Valor",
    "DataBindingXAxisValue": "Eixo X",
    "DataBindingYAxisValue": "Eixo Y",
    "DataLabelAround": "Em volta",
    "DataLabelCategory": "Categoria",
    "DataLabelCategoryName": "Nome da categoria",
    "DataLabelDetails": "Detalhes",
    "DataLabelDisplayMode": "Modo de exibição",
    "DataLabelDisplayUnit": "Unidade de exibição",
    "DataLabelLocation": "Localização",
    "DataLabelOnSlice": "Em fatia",
    "DataLabelSeries": "Série",
    "DataLabelSeriesName": "Nome da série",
    "DataLabelValue": "Valor",
    "DataLabels": "Rótulos de dados",
    "DateScale": "Data",
    "DayDateMode": "Dia",
    "Delete": "Excluir",
    "DiagonalDirection": "Diagonal",
    "DisplayModeAll": "Todos",
    "DisplayModeAuto": "Auto",
    "DisplayName": "Nome de exibição",
    "DisplayUnit": "Unidade de exibição",
    "DisplayUnitBillions": "Bilhões",
    "DisplayUnitHundredMillions": "Cem Milhões",
    "DisplayUnitHundredThousands": "Cem Milhares",
    "DisplayUnitHundreds": "Centenas",
    "DisplayUnitMillions": "Milhões",
    "DisplayUnitNone": "Nenhum",
    "DisplayUnitTenMillions": "Dez Milhões",
    "DisplayUnitTenThousands": "Dez Mil",
    "DisplayUnitThousands": "Milhares",
    "DisplayUnitTrillions": "Trilhões",
    "Donut": "Gráfico de Donuts",
    "DragFieldsTip": "Arraste os campos aqui para vincular.",
    "EditColors": "Editar cores",
    "EndsWith": "Termina Com",
    "EqualsTo": "Igual a",
    "ExcludeMatched": "Excluir Correspondência",
    "False": "Falso",
    "Fill": "Cor de preenchimento",
    "FilledRadar": "Gráfico de radar preenchido",
    "Filter": "Filtro",
    "FontColor": "Cor da fonte",
    "FontFamily": "Família de fontes",
    "FontOpacity": "Opacidade da fonte",
    "FontOverflow": "Estouro de fonte",
    "FontSize": "Tamanho da fonte",
    "FontStyle": "Estilo da fonte",
    "FontWeight": "Espessura da fonte",
    "Format": "Formatar",
    "FormatCurrency": "Moeda",
    "FormatCustom": "Personalizado",
    "FormatGeneral": "Em geral",
    "FormatNumber": "Número",
    "FormatPercentage": "Percentagem",
    "Funnel": "Funil",
    "Gauge": "Medidor",
    "General": "Em geral",
    "GraphOpacity": "Opacidade do gráfico",
    "GreaterThan": "Maior que",
    "GreaterThanOrEqualTo": "Maior ou igual a",
    "HideCalibrationType": "Esconder",
    "HideOverlap": "Ocultar sobreposição",
    "High": "Alto",
    "HorizontalDirection": "Horizontal",
    "HourDateMode": "Hora",
    "HoverAnimation": "Mostrar animação de hover",
    "InBackEasing": "Facilidade nas costas",
    "InBounceEasing": "Facilidade no salto",
    "InCircularEasing": "Facilidade em Circular",
    "InCubicEasing": "Facilidade em Cúbico",
    "InElasticEasing": "Easy In Elastic\" (facilidade em elástico)",
    "InExponentialEasing": "Facilidade em Exponencial",
    "InOutBackEasing": "Ease In Out Back\" (Fácil de Entrar e Sair)",
    "InOutBounceEasing": "Facilidade de entrada e saída, salto",
    "InOutCircularEasing": "Circular de entrada e saída fácil",
    "InOutCubicEasing": "Ease In Out Cúbico",
    "InOutElasticEasing": "Elástico Ease In Out",
    "InOutExponentialEasing": "Facilidade de entrada e saída exponencial",
    "InOutQuadraticEasing": "Ease In Out Quadrático",
    "InOutQuarticEasing": "Ease In Out Quartic\" (facilite a entrada e a saída do quártico)",
    "InOutQuinticEasing": "Entrada fácil Quintic",
    "InOutSinusoidalEasing": "Facilidade de entrada e saída sinusoidal",
    "InQuadraticEasing": "Facilidade em Quadrática",
    "InQuarticEasing": "Facilidade em Quártico",
    "InQuinticEasing": "Facilidade em Quintic",
    "InSinusoidalEasing": "Facilidade em sinusoidal",
    "InnerRadius": "Raio Interno",
    "Italic": "Itálico",
    "LabelAngle": "Ângulo de etiqueta",
    "LabelOverflowSetting": "Configuração de estouro de rótulo",
    "LabelSeparator": "Separador de Etiquetas",
    "Layout": "Disposição",
    "LayoutHeight": "Altura",
    "LayoutWidth": "Largura",
    "Left": "Esquerda",
    "Legend": "Lenda",
    "LegendAlignBottom": "Fundo",
    "LegendAlignCenter": "Centro",
    "LegendAlignLeft": "Esquerda",
    "LegendAlignMiddle": "Meio",
    "LegendAlignRight": "Certo",
    "LegendAlignTop": "Principal",
    "LegendAutoSize": "Tamanho automático",
    "LegendHAlign": "H-Alinhamento",
    "LegendHeight": "Altura(%)",
    "LegendPadding": "Preenchimento de legenda",
    "LegendPosition": "Posição",
    "LegendPositionBottom": "Fundo",
    "LegendPositionLeft": "Esquerda",
    "LegendPositionRight": "Certo",
    "LegendPositionTop": "Principal",
    "LegendVAlign": "Alinhamento em V",
    "LegendWidth": "Largura(%)",
    "LessThan": "Menor que",
    "LessThanOrEqualTo": "Menor ou igual a",
    "Lighter": "Isqueiro",
    "Line": "Gráfico de linhas",
    "LineColor": "Cor da linha",
    "LineStyle": "Estilo de linha",
    "LineStyleDefault": "Padrão",
    "LineStyleSpline": "Estria",
    "LineStyleStep": "Etapa",
    "LineThickness": "Espessura da linha",
    "LineType": "Tipo de linha",
    "LinearEasing": "Linear",
    "LinearScale": "Linear",
    "LoadAnimation": "Mostrar animação de carregamento",
    "Low": "Baixo",
    "MajorGridLineColor": "Cor da linha da grade principal",
    "MajorGridLineType": "Tipo de linha de grade principal",
    "MajorGridLineWidth": "Largura da linha de grade principal",
    "MajorInterval": "Intervalo Maior",
    "MajorTickMarksColor": "Cor das principais marcas de tique",
    "MajorTickMarksLength": "Comprimento das principais marcas de escala",
    "MajorTickMarksType": "Tipo de Marcas de Escala Principais",
    "MajorTickMarksWidth": "Largura das principais marcas de escala",
    "MatchRules": "Regras da Partida",
    "MaxConnectLineLength": "Comprimento máximo da linha",
    "MaxValue": "Valor Máximo",
    "MaxWidth": "Largura Máxima",
    "Mid": "Meio",
    "MilliSecondDateMode": "Milissegundo",
    "MinValue": "Valor Mínimo",
    "MinorGridLineColor": "Cor da linha de grade secundária",
    "MinorGridLineType": "Tipo de linha de grade secundária",
    "MinorGridLineWidth": "Largura da linha de grade menor",
    "MinorInterval": "Intervalo Menor",
    "MinorTickMarksColor": "Cor de pequenas marcas de tique",
    "MinorTickMarksLength": "Comprimento de pequenas marcas de escala",
    "MinorTickMarksType": "Tipo de marcas de tique menores",
    "MinorTickMarksWidth": "Largura de pequenas marcas de escala",
    "MinuteDateMode": "Minuto",
    "MonthDateMode": "Mês",
    "MovingCalculation": "Cálculo em movimento...",
    "NeckHeight": "Altura do pescoço",
    "NewLineSeparator": "Nova Linha",
    "No": "Não",
    "NoBindingTip": "Selecione uma tabela para vincular os dados.",
    "NoParameters": "sem parâmetros.",
    "None": "Nenhum",
    "NoneEasing": "Nenhum",
    "Normal": "Normal",
    "NotEqualsTo": "Não é igual a",
    "OK": "OK",
    "Or": "Ou",
    "OriginalValue": "Valor original",
    "OutBackEasing": "Retire-se",
    "OutBounceEasing": "Ease Out Bounce\" (salto fácil)",
    "OutCircularEasing": "Circular de Facilidade",
    "OutCubicEasing": "Ease Out Cúbico",
    "OutElasticEasing": "Elástico Ease Out",
    "OutExponentialEasing": "Ease Out Exponencial",
    "OutQuadraticEasing": "Ease Out Quadratic\" (Easy Out Quadrático)",
    "OutQuarticEasing": "Acalme-se Quartic",
    "OutQuinticEasing": "Acalme-se Quintic",
    "OutSinusoidalEasing": "Facilitar a saída sinusoidal",
    "OverflowClip": "Grampo",
    "OverflowEllipsis": "Elipse",
    "OverflowWrap": "Enrolar",
    "PaletteColors": "Cores da paleta",
    "PercentStackedArea": "Gráfico de área empilhada percentual",
    "PercentStackedBar": "Gráfico de barras empilhadas por porcentagem",
    "PercentStackedColumn": "Gráfico de colunas empilhadas por porcentagem",
    "PercentageAxisType": "Percentagem",
    "PercentileCalculation": "Cálculo de Percentil...",
    "PeriodSeparator": "Período",
    "Pie": "Gráfico de pizza",
    "PolarCoordinatesBar": "Gráfico de barras em coordenadas polares",
    "PolarCoordinatesStackedBar": "Gráfico de barras empilhadas em coordenadas polares",
    "PropertySetting": "Inspetor",
    "QuickFunctions": "Funções rápidas",
    "Radar": "Gráfico de radar",
    "RadialAxisMode": "Radial",
    "RadialStackedBar": "Gráfico de barras empilhadas radiais",
    "Radius": "Raio",
    "RangeArea": "Gráfico de área de alcance",
    "RangeBar": "Gráfico de barras de alcance",
    "RangeColumn": "Gráfico de colunas de intervalo",
    "RankingCalculation": "Cálculo de classificação...",
    "Remove": "Remover",
    "Rename": "Renomear...",
    "Reversed": "Invertido",
    "Right": "Certo",
    "Rose": "Gráfico de rosas",
    "Rule": "Regra",
    "RunningCalculation": "Executando Cálculo...",
    "Scatter": "Dispersão",
    "Search": "Procurar",
    "SearchField": "Campos de pesquisa...",
    "SearchPropertyByName": "Pesquisar nome da propriedade aqui...",
    "SecondDateMode": "Segundo",
    "SelectStyle": "Mostrar estilo selecionado",
    "SelectStyleAdorners": "Adornadores",
    "SelectStyleFill": "Cor de preenchimento",
    "SelectStyleFillOpacity": "Preencher Opacidade",
    "SelectStyleStroke": "Cor da Borda",
    "SelectStyleStrokeLineType": "Tipo de Borda",
    "SelectStyleStrokeOpacity": "Opacidade da Borda",
    "SelectStyleStrokeWidth": "Largura da Borda",
    "SelectStyleTitle": "Selecionar estilo",
    "SelectedTable": "Tabela Selecionada",
    "SemicolonSeparator": "Ponto e vírgula",
    "SeriesGap": "Lacuna de Série",
    "ShowAxis": "Mostrar Eixo",
    "ShowAxisLine": "Mostrar linha do eixo",
    "ShowDataLabel": "Mostrar rótulo de dados",
    "ShowLegend": "Mostrar legenda",
    "ShowMajorGridLines": "Mostrar as principais linhas da grade",
    "ShowMajorTickMarks": "Mostrar Marcas de Verificação Principais",
    "ShowMinorGridLines": "Mostrar linhas de grade secundárias",
    "ShowMinorTickMarks": "Mostrar pequenas marcas de verificação",
    "ShowNullsAs": "Mostrar nulos como",
    "ShowNullsAsConnected": "Conectado",
    "ShowNullsAsGaps": "Lacunas",
    "ShowNullsAsZeros": "Zeros",
    "ShowSizeLegend": "Mostrar legenda do tamanho",
    "ShowSymbol": "Mostrar Símbolo",
    "ShowTickLabels": "Mostrar rótulos de marcação",
    "ShowTitle": "Mostrar título",
    "ShowTooltip": "Mostrar dica de ferramenta",
    "SolidLineType": "Sólido",
    "SortAggregate": "Agregar",
    "SortAsc": "Subir",
    "SortBy": "Ordenar por",
    "SortDesc": "Descer",
    "SortOrder": "Ordem de classificação",
    "SortSetting": "Organizar...",
    "SpaceSeparator": "Espaço",
    "StackedArea": "Gráfico de áreas empilhadas",
    "StackedBar": "Gráfico de barras empilhadas",
    "StackedColumn": "Gráfico de colunas empilhadas",
    "Standard": "Padrão",
    "StartAngle": "Ângulo inicial",
    "StartsWith": "Começa com",
    "Sunburst": "Gráfico Sunburst",
    "Sweep": "Varrer",
    "SwingEasing": "Balanço",
    "SymbolFill": "Preenchimento de Símbolos",
    "SymbolShape": "Forma do Símbolo",
    "SymbolShapeBox": "Caixa",
    "SymbolShapeDiamond": "Diamante",
    "SymbolShapeDot": "Ponto",
    "SymbolShapePlus": "Mais",
    "SymbolShapeTriangle": "Triângulo",
    "SymbolShapeX": "X",
    "SymbolSize": "Tamanho do símbolo",
    "SymbolStroke": "Símbolo Traço",
    "TableBinding": "Encadernação de mesa",
    "TargetField": "Campo Alvo",
    "Theme": "Tema",
    "Title": "Título",
    "TitlePadding": "Preenchimento",
    "ToolTipLineThrough": "Linha Através",
    "ToolTipOverline": "Sobrelinha",
    "ToolTipUnderline": "Sublinhado",
    "Tooltip": "Dica de ferramenta",
    "TopWidth": "Largura superior",
    "True": "Verdadeiro",
    "UnselectStyle": "Mostrar estilo desmarcado",
    "UpdateAnimation": "Mostrar animação de atualização",
    "UseParameter": "Usar Parâmetro",
    "Value": "Valor",
    "ValueAsPercentage": "Valor como porcentagem",
    "ValueAxis": "Eixo de Valor",
    "VerticalDirection": "Vertical",
    "WeekDateMode": "Semana",
    "WrapLegend": "Legenda do Envoltório Automático",
    "XAxis": "Eixo X",
    "XPosition": "Posição X",
    "YAxis": "Eixo Y",
    "YPosition": "Posição Y",
    "YearDateMode": "Ano",
    "Yes": "Sim",
    "configDataChart": "Por favor, configure o DataChart.",
    "wmk1": "446174614368617274",
    "wmk2": "446174614368617274"
  },
  "ReportSheet": {
    "ContainsInvalidCells": "A planilha de relatório contém células inválidas ({0}), verifique.",
    "toolTipTableName": "Mesa: ",
    "toolTipColumnName": "Coluna: ",
    "toolTipFormula": "Fórmula: ",
    "toolTipCellType": "Tipo: ",
    "listCellType": "Lista",
    "groupCellType": "Grupo",
    "summaryCellType": "Resumo",
    "summarySumTip": "(Soma)",
    "summaryAvgTip": "(Média)",
    "summaryMaxTip": "(Máx)",
    "summaryMinTip": "(Mínimo)",
    "summaryCountTip": "(Contar)",
    "summaryNoneTip": "(Nenhum)",
    "configDataChart": "Por favor, configure o DataChart.",
    "Exp_InvalidParameterName": "nome de parâmetro inválido",
    "Exp_InvalidPasteRange": "Não é possível colar ou mover dados para o intervalo do contêiner.",
    "dropFieldsIntoRow": "Solte os campos de linha aqui",
    "dropFieldsIntoColumn": "Solte os campos da coluna aqui",
    "dropFieldsIntoValue": "Solte os campos de valor aqui",
    "wmk1": "5265706f72745368656574",
    "wmk2": "5265706f72745368656574"
  },
  "IO": {
    "EXP_IO": "Exceção de leitura e gravação de arquivo.",
    "EXP_FILE_FORMAT": "Formato de arquivo incorreto.",
    "GET_PARTIAL_VALUES_ERROR_MSG": "arquivo de erro",
    "EXP_WRONG_PASSWORD": "A senha que você forneceu não está correta.",
    "EXP_EMPTY_PASSWORD": "O arquivo do Excel não pode ser aberto porque a pasta de trabalho está protegida por senha."
  },
  "Functions": {
    "ABS": {
      "description": "Esta função calcula o valor absoluto do valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ACCRINT": {
      "description": "Esta função calcula os juros acumulados para um título que paga juros periódicos.",
      "parameters": [
        {
          "name": "emitir"
        },
        {
          "name": "primeiro_interesse"
        },
        {
          "name": "povoado"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "par"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "ACCRINTM": {
      "description": "Esta função calcula os juros acumulados no vencimento para um título que paga juros periódicos.",
      "parameters": [
        {
          "name": "emitir"
        },
        {
          "name": "povoado"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "par"
        },
        {
          "name": "base",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "ACOS": {
      "description": "Esta função calcula o arco cosseno, ou seja, o ângulo cujo cosseno é o valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ACOSH": {
      "description": "Esta função calcula o cosseno hiperbólico inverso do valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ADDRESS": {
      "description": "Esta função usa os números de linha e coluna para criar um endereço de célula no texto.",
      "parameters": [
        {
          "name": "número_da_linha"
        },
        {
          "name": "num_coluna"
        },
        {
          "name": "abs_num",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "estilo a1",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "texto_da_folha",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "AGGREGATE": {
      "description": "Esta função agrega uma lista de números usando uma função interna especificada.",
      "parameters": [
        {
          "name": "num_da_função"
        },
        {
          "name": "opções"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "AMORDEGRC": {
      "description": "Esta função retorna a depreciação de um período contábil, levando em consideração a depreciação rateada, e aplica um coeficiente de depreciação no cálculo com base na vida útil dos ativos.",
      "parameters": [
        {
          "name": "custo"
        },
        {
          "name": "data_da_compra"
        },
        {
          "name": "primeiro_período"
        },
        {
          "name": "salvamento"
        },
        {
          "name": "período"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "base"
        }
      ]
    },
    "AMORLINC": {
      "description": "Esta função calcula a depreciação de um período contábil, levando em consideração a depreciação rateada.",
      "parameters": [
        {
          "name": "custo"
        },
        {
          "name": "data_da_compra"
        },
        {
          "name": "primeiro_período"
        },
        {
          "name": "salvamento"
        },
        {
          "name": "período"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "base"
        }
      ]
    },
    "AND": {
      "description": "Verifica se todos os argumentos são verdadeiros e retorna verdadeiro se todos os argumentos forem verdadeiros.",
      "parameters": [
        {
          "name": "lógico1"
        },
        {
          "name": "lógico2"
        }
      ]
    },
    "ASIN": {
      "description": "Esta função calcula o arco seno, ou seja, o ângulo cujo seno é o valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ASINH": {
      "description": "Esta função calcula o seno hiperbólico inverso de um número.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ATAN": {
      "description": "Esta função calcula o arco tangente, ou seja, o ângulo cuja tangente é o valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ATAN2": {
      "description": "Esta função calcula o arco tangente das coordenadas x e y especificadas.",
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
      "description": "Esta função calcula a tangente hiperbólica inversa de um número.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "AVEDEV": {
      "description": "Esta função calcula a média dos desvios absolutos dos valores especificados em relação à sua média.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "AVERAGE": {
      "description": "Esta função calcula a média dos valores numéricos especificados.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "AVERAGEA": {
      "description": "Esta função calcula a média dos valores especificados, incluindo valores de texto ou lógicos, bem como valores numéricos.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "AVERAGEIF": {
      "description": "Esta função calcula a média dos valores numéricos especificados, desde que atendam aos critérios especificados.",
      "parameters": [
        {
          "name": "faixa"
        },
        {
          "name": "critérios"
        },
        {
          "name": "intervalo_médio",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "AVERAGEIFS": {
      "description": "Esta função calcula a média de todas as células que atendem a vários critérios especificados.",
      "parameters": [
        {
          "name": "intervalo_médio"
        },
        {
          "name": "intervalo_de_critérios1"
        },
        {
          "name": "critério1"
        },
        {
          "name": "intervalo_de_critérios2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "critério2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "BESSELI": {
      "description": "Esta função calcula a função de Bessel modificada do primeiro tipo avaliada para argumentos puramente imaginários.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "ordem"
        }
      ]
    },
    "BESSELJ": {
      "description": "Esta função calcula a função de Bessel do primeiro tipo.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "ordem"
        }
      ]
    },
    "BESSELK": {
      "description": "Esta função calcula a função de Bessel modificada do segundo tipo avaliada para argumentos puramente imaginários.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "ordem"
        }
      ]
    },
    "BESSELY": {
      "description": "Esta função calcula a função de Bessel do segundo tipo.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "ordem"
        }
      ]
    },
    "BETADIST": {
      "description": "Esta função calcula a função de distribuição beta cumulativa.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "mais baixo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "superior",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "BETAINV": {
      "description": "Esta função calcula o inverso da função de distribuição beta cumulativa.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "mais baixo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "superior",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "BIN2DEC": {
      "description": "Esta função converte um número binário em um número decimal",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "BIN2HEX": {
      "description": "Esta função converte um número binário em um número hexadecimal.",
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
      "description": "Esta função converte um número binário em um número octal.",
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
      "description": "Esta função calcula a probabilidade de distribuição binomial do termo individual.",
      "parameters": [
        {
          "name": "números"
        },
        {
          "name": "provas"
        },
        {
          "name": "probabilidades_s"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "CEILING": {
      "description": "Esta função arredonda um número para o múltiplo mais próximo de um valor especificado.",
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
      "description": "Esta função retorna o caractere especificado por um número.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "CHIDIST": {
      "description": "Esta função calcula a probabilidade unilateral da distribuição qui-quadrado.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "CHIINV": {
      "description": "Esta função calcula o inverso da probabilidade unilateral da distribuição qui-quadrado",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "CHITEST": {
      "description": "Esta função calcula o teste de independência da distribuição qui-quadrado.",
      "parameters": [
        {
          "name": "intervalo_real"
        },
        {
          "name": "intervalo_esperado"
        }
      ]
    },
    "CHOOSE": {
      "description": "Esta função retorna um valor de uma lista de valores.",
      "parameters": [
        {
          "name": "núm_índice"
        },
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "CLEAN": {
      "description": "Esta função remove todos os caracteres não imprimíveis do texto.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "CODE": {
      "description": "Esta função retorna um código numérico para representar o primeiro caractere em uma sequência de texto. O código retornado corresponde ao conjunto de caracteres do Windows (ANSI).",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "COLUMN": {
      "description": "Esta função retorna o número da coluna de uma referência.",
      "parameters": [
        {
          "name": "referência"
        }
      ]
    },
    "COLUMNS": {
      "description": "Esta função retorna o número de colunas em uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        }
      ]
    },
    "COMBIN": {
      "description": "Esta função calcula o número de combinações possíveis para um número especificado de itens.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_escolhido"
        }
      ]
    },
    "COMPLEX": {
      "description": "Esta função converte coeficientes reais e imaginários em um número complexo.",
      "parameters": [
        {
          "name": "num_real"
        },
        {
          "name": "número_da_imagem"
        },
        {
          "name": "sufixo"
        }
      ]
    },
    "CONCATENATE": {
      "description": "Esta função combina várias sequências de texto ou números em uma única sequência de texto.",
      "parameters": [
        {
          "name": "texto 1"
        },
        {
          "name": "texto2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "CONFIDENCE": {
      "description": "Esta função retorna o intervalo de confiança para uma média populacional.",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "desenvolvimento_padrão"
        },
        {
          "name": "tamanho"
        }
      ]
    },
    "CONVERT": {
      "description": "Esta função converte um número de um sistema de medição para seu equivalente em outro sistema de medição.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "da_unidade"
        },
        {
          "name": "para_unidade"
        }
      ]
    },
    "CORREL": {
      "description": "Esta função retorna o coeficiente de correlação dos dois conjuntos de dados.",
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
      "description": "Esta função retorna o cosseno do ângulo especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "COSH": {
      "description": "Esta função retorna o cosseno hiperbólico do valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "COUNT": {
      "description": "Esta função retorna o número de células que contêm números.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "COUNTA": {
      "description": "Esta função retorna o número de células que contêm números, texto ou valores lógicos.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "COUNTBLANK": {
      "description": "Esta função retorna o número de células vazias (ou em branco) em um intervalo de células em uma planilha.",
      "parameters": [
        {
          "name": "intervalo de células"
        }
      ]
    },
    "COUNTIF": {
      "description": "Esta função retorna o número de células que atendem a uma determinada condição",
      "parameters": [
        {
          "name": "intervalo de células"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "COUNTIFS": {
      "description": "Esta função retorna o número de células que atendem a múltiplas condições.",
      "parameters": [
        {
          "name": "intervalo_de_critérios1"
        },
        {
          "name": "critério1"
        },
        {
          "name": "intervalo_de_critérios2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "critério2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "COUPDAYBS": {
      "description": "Esta função calcula o número de dias desde o início do período do cupom até a data de liquidação.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYS": {
      "description": "Esta função retorna o número de dias no período do cupom que contém a data de liquidação.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPDAYSNC": {
      "description": "Esta função calcula o número de dias a partir da data de liquidação até a próxima data do cupom.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNCD": {
      "description": "Esta função retorna um número de data da próxima data de cupom após a data de liquidação.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPNUM": {
      "description": "Esta função retorna o número de cupons devidos entre a data de liquidação e a data de vencimento.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "COUPPCD": {
      "description": "Esta função retorna um número de data da data do cupom anterior à data de liquidação.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "COVAR": {
      "description": "Esta função retorna a covariância, que é a média dos produtos dos desvios para cada par de pontos de dados em dois conjuntos de números.",
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
      "description": "Esta função retorna o critério binomial, o menor valor para o qual a distribuição binomial cumulativa é maior ou igual a um valor de critério.",
      "parameters": [
        {
          "name": "provas"
        },
        {
          "name": "probabilidades_s"
        },
        {
          "name": "alfa"
        }
      ]
    },
    "CUMIPMT": {
      "description": "Esta função retorna os juros acumulados pagos em um empréstimo entre os períodos inicial e final.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "não"
        },
        {
          "name": "pval"
        },
        {
          "name": "período_início"
        },
        {
          "name": "fim_período"
        },
        {
          "name": "tipo de pagamento"
        }
      ]
    },
    "CUMPRINC": {
      "description": "Esta função retorna o principal acumulado pago em um empréstimo entre os períodos inicial e final.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "não"
        },
        {
          "name": "pval"
        },
        {
          "name": "período_início"
        },
        {
          "name": "fim_período"
        },
        {
          "name": "tipo de pagamento"
        }
      ]
    },
    "DATE": {
      "description": "Esta função retorna o objeto DateTime para uma data específica, especificada pelo ano, mês e dia.",
      "parameters": [
        {
          "name": "ano"
        },
        {
          "name": "mês"
        },
        {
          "name": "dia"
        }
      ]
    },
    "DATEDIF": {
      "description": "Esta função retorna o número de dias, meses ou anos entre duas datas.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "data_final"
        },
        {
          "name": "unidade"
        }
      ]
    },
    "DATEVALUE": {
      "description": "Esta função retorna um objeto DateTime da data especificada.",
      "parameters": [
        {
          "name": "texto_data"
        }
      ]
    },
    "DAVERAGE": {
      "description": "Esta função calcula a média dos valores em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DAY": {
      "description": "Esta função retorna o número do dia do mês (inteiro de 1 a 31) que corresponde à data especificada.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "DAYS360": {
      "description": "Esta função retorna o número de dias entre duas datas com base em um ano de 360 ​​dias.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "data_final"
        },
        {
          "name": "método",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "DB": {
      "description": "“Esta função calcula a depreciação de um ativo por um período especificado usando o método de saldo decrescente fixo”",
      "parameters": [
        {
          "name": "custo"
        },
        {
          "name": "salvamento"
        },
        {
          "name": "vida"
        },
        {
          "name": "período"
        },
        {
          "name": "mês"
        }
      ]
    },
    "DCOUNT": {
      "description": "Esta função conta as células que contêm números em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DCOUNTA": {
      "description": "Esta função conta as células não vazias em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DDB": {
      "description": "Esta função calcula a depreciação de um ativo por um período especificado usando o método do saldo decrescente duplo ou outro método que você especificar.",
      "parameters": [
        {
          "name": "custo"
        },
        {
          "name": "salvamento"
        },
        {
          "name": "vida"
        },
        {
          "name": "período"
        },
        {
          "name": "fator"
        }
      ]
    },
    "DEC2BIN": {
      "description": "Esta função converte um número decimal em um número binário.",
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
      "description": "Esta função converte um número decimal em um número hexadecimal",
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
      "description": "Esta função converte um número decimal em um número octal",
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
      "description": "Esta função converte o valor especificado de radianos para graus",
      "parameters": [
        {
          "name": "ângulo"
        }
      ]
    },
    "DELTA": {
      "description": "Esta função identifica se dois valores são iguais. Retorna 1 se forem iguais; retorna 0 caso contrário.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "DEVSQ": {
      "description": "Esta função calcula a soma dos quadrados dos desvios dos pontos de dados (ou de uma matriz de pontos de dados) da média da amostra.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "DGET": {
      "description": "Esta função extrai um único valor de uma coluna de uma lista ou banco de dados que corresponde às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DISC": {
      "description": "Esta função calcula a taxa de desconto de um título.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "preço"
        },
        {
          "name": "redenção"
        },
        {
          "name": "base"
        }
      ]
    },
    "DMAX": {
      "description": "Esta função retorna o maior número em uma coluna de uma lista ou banco de dados que corresponde às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DMIN": {
      "description": "Esta função retorna o menor número em uma coluna de uma lista ou banco de dados que corresponde às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DOLLAR": {
      "description": "Esta função converte um número em texto usando o formato de moeda, com os decimais arredondados para a casa especificada.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "decimais",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "DOLLARDE": {
      "description": "Esta função converte uma fração de preço em dólar em um preço decimal em dólar.",
      "parameters": [
        {
          "name": "dólar_fracionário"
        },
        {
          "name": "fração"
        }
      ]
    },
    "DOLLARFR": {
      "description": "Esta função converte um número decimal de preço em dólar em uma fração de preço em dólar.",
      "parameters": [
        {
          "name": "dólar_decimal"
        },
        {
          "name": "fração"
        }
      ]
    },
    "DPRODUCT": {
      "description": "Esta função multiplica os valores em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DSTDEV": {
      "description": "Esta função estima o desvio padrão de uma população com base em uma amostra usando os números em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DSTDEVP": {
      "description": "Esta função calcula o desvio padrão de uma população com base na população inteira usando os números em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DSUM": {
      "description": "Esta função adiciona os números em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DURATION": {
      "description": "Esta função retorna a duração de Macaulay para um valor nominal assumido de $ 100.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "cupom"
        },
        {
          "name": "colheita"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "DVAR": {
      "description": "Esta função estima a variância de uma população com base em uma amostra usando os números em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "DVARP": {
      "description": "Esta função calcula a variância de uma população com base na população inteira usando os números em uma coluna de uma lista ou banco de dados que correspondem às condições especificadas.",
      "parameters": [
        {
          "name": "banco de dados"
        },
        {
          "name": "campo"
        },
        {
          "name": "critérios"
        }
      ]
    },
    "EDATE": {
      "description": "Esta função calcula a data que é o número indicado de meses antes ou depois de uma data especificada.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "meses"
        }
      ]
    },
    "EFFECT": {
      "description": "Esta função calcula a taxa de juros anual efetiva para uma determinada taxa de juros anual nominal e o número de períodos de capitalização por ano.",
      "parameters": [
        {
          "name": "taxa_nominal"
        },
        {
          "name": "npery"
        }
      ]
    },
    "EOMONTH": {
      "description": "Esta função calcula a data do último dia do mês (fim do mês), que é o número indicado de meses antes ou depois da data inicial.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "meses"
        }
      ]
    },
    "ERF": {
      "description": "Esta função calcula a função de erro integrada entre um limite inferior e um limite superior.",
      "parameters": [
        {
          "name": "limite_inferior"
        },
        {
          "name": "limite_superior"
        }
      ]
    },
    "ERFC": {
      "description": "Esta função calcula a função de erro complementar integrada entre um limite inferior e o infinito.",
      "parameters": [
        {
          "name": "limite inferior"
        }
      ]
    },
    "ERROR.TYPE": {
      "description": "Esta função retorna um número correspondente a um dos valores de erro.",
      "parameters": [
        {
          "name": "valor_de_erro"
        }
      ]
    },
    "EURO": {
      "description": "Esta função retorna o equivalente a um euro com base no código de moeda ISO.",
      "parameters": [
        {
          "name": "código"
        }
      ]
    },
    "EUROCONVERT": {
      "description": "Esta função converte moeda de um membro da zona do euro (incluindo euros) para outra moeda de membro da zona do euro (incluindo euros).",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "fonte"
        },
        {
          "name": "alvo"
        },
        {
          "name": "precisão_total"
        },
        {
          "name": "triangulação_precisão"
        }
      ]
    },
    "EVEN": {
      "description": "Esta função arredonda o valor especificado para o número inteiro par mais próximo.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "EXACT": {
      "description": "Esta função retorna verdadeiro se duas strings são iguais; caso contrário, falso.",
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
      "description": "Esta função retorna e elevado à potência do valor especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "EXPONDIST": {
      "description": "Esta função retorna a distribuição exponencial ou a densidade de probabilidade.",
      "parameters": [
        {
          "name": "valor"
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
      "description": "Esta função calcula o fatorial do número especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "FACTDOUBLE": {
      "description": "Esta função calcula o fatorial duplo do número especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "FALSE": {
      "description": "Esta função retorna o valor para FALSO lógico."
    },
    "FDIST": {
      "description": "Esta função calcula a distribuição de probabilidade F, para ver graus de diversidade entre dois conjuntos de dados.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "graus_liberdade1"
        },
        {
          "name": "graus_liberdade2"
        }
      ]
    },
    "FIND": {
      "description": "Esta função encontra um valor de texto dentro de outro e retorna a posição do valor de texto no texto pesquisado.",
      "parameters": [
        {
          "name": "encontrar_texto"
        },
        {
          "name": "dentro_do_texto"
        },
        {
          "name": "núm_inicial",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "FINV": {
      "description": "Esta função retorna o inverso da distribuição de probabilidade F.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade1"
        },
        {
          "name": "graus_liberdade2"
        }
      ]
    },
    "FISHER": {
      "description": "Esta função retorna a transformação de Fisher para um valor especificado.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "FISHERINV": {
      "description": "Esta função retorna o inverso da transformação de Fisher para um valor especificado.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "FIXED": {
      "description": "Esta função arredonda um número para o número especificado de casas decimais, formata o número em formato decimal usando um ponto e vírgulas (se especificado) e retorna o resultado como texto.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "decimais",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "sem_vírgulas",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "FLOOR": {
      "description": "Esta função arredonda um número para baixo para o múltiplo mais próximo de um valor especificado.",
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
      "description": "Esta função calcula um valor futuro usando valores existentes.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Raio"
        },
        {
          "name": "Matriz X"
        }
      ]
    },
    "FREQUENCY": {
      "description": "Esta função calcula a frequência com que os valores ocorrem dentro de um intervalo de valores. Esta função retorna uma matriz vertical de números.",
      "parameters": [
        {
          "name": "matriz_de_dados"
        },
        {
          "name": "matriz_de_caixas"
        }
      ]
    },
    "FTEST": {
      "description": "Esta função retorna o resultado de um teste F, que retorna a probabilidade unilateral de que as variâncias em duas matrizes não sejam significativamente diferentes.",
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
      "description": "Esta função retorna o valor futuro de um investimento com base em um valor presente, pagamentos periódicos e uma taxa de juros especificada.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "número"
        },
        {
          "name": "pagar"
        },
        {
          "name": "pval"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "FVSCHEDULE": {
      "description": "Esta função retorna o valor futuro de um principal inicial após aplicar uma série de taxas de juros compostas. Calcula o valor futuro de um investimento com uma taxa variável ou ajustável.",
      "parameters": [
        {
          "name": "principal"
        },
        {
          "name": "agendar"
        }
      ]
    },
    "GAMMADIST": {
      "description": "Esta função retorna a distribuição gama.",
      "parameters": [
        {
          "name": "x"
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
      "description": "Esta função retorna o inverso da distribuição cumulativa gama.",
      "parameters": [
        {
          "name": "probabilidade"
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
      "description": "Esta função retorna o logaritmo natural da função Gama, G(x).",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "GCD": {
      "description": "Esta função retorna o máximo divisor comum de dois números.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "GEOMEAN": {
      "description": "Esta função retorna a média geométrica de um conjunto de dados positivos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "GESTEP": {
      "description": "Esta função, maior ou igual a step, retorna uma indicação se um número é igual a um limite.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "etapa"
        }
      ]
    },
    "GROWTH": {
      "description": "Esta função calcula o crescimento exponencial previsto. Esta função retorna os valores y para uma série de novos valores x que são especificados usando valores x e y existentes.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "x"
        },
        {
          "name": "novox"
        },
        {
          "name": "constante"
        }
      ]
    },
    "HARMEAN": {
      "description": "Esta função retorna a média harmônica de um conjunto de dados.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "HEX2BIN": {
      "description": "Esta função converte um número hexadecimal em um número binário.",
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
      "description": "Esta função converte um número hexadecimal em um número decimal.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "HEX2OCT": {
      "description": "Esta função converte um número hexadecimal em um número octal.",
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
      "description": "Esta função procura um valor na linha superior e então retorna um valor na mesma coluna de uma linha especificada.",
      "parameters": [
        {
          "name": "valor_procurar"
        },
        {
          "name": "matriz_de_tabela"
        },
        {
          "name": "núm_índice_da_linha"
        },
        {
          "name": "pesquisa_de_intervalo",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "VERDADEIRO",
              "description": "Correspondência aproximada"
            },
            {
              "value": "FALSO",
              "description": "Correspondência exata"
            }
          ]
        }
      ]
    },
    "HOUR": {
      "description": "Esta função retorna a hora que corresponde a um horário especificado.",
      "parameters": [
        {
          "name": "tempo"
        }
      ]
    },
    "HYPGEOMDIST": {
      "description": "Esta função retorna a distribuição hipergeométrica.",
      "parameters": [
        {
          "name": "amostras_s"
        },
        {
          "name": "número_amostra"
        },
        {
          "name": "populações_s"
        },
        {
          "name": "número_pop"
        }
      ]
    },
    "IF": {
      "description": "Esta função realiza uma comparação e retorna um dos dois valores fornecidos com base nessa comparação.",
      "parameters": [
        {
          "name": "teste_lógico"
        },
        {
          "name": "valor_se_verdadeiro"
        },
        {
          "name": "valor_se_falso"
        }
      ]
    },
    "IFERROR": {
      "description": "Esta função avalia uma fórmula e retorna um valor que você fornece se houver um erro ou o resultado da fórmula.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "valor_se_erro"
        }
      ]
    },
    "IMABS": {
      "description": "Esta função retorna o valor absoluto ou módulo de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMAGINARY": {
      "description": "Esta função retorna o coeficiente imaginário de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMARGUMENT": {
      "description": "Esta função retorna o argumento theta, que é um ângulo expresso em radianos.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMCONJUGATE": {
      "description": "Esta função retorna o conjugado complexo de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMCOS": {
      "description": "Esta função retorna o cosseno de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMDIV": {
      "description": "Esta função retorna o quociente de dois números complexos.",
      "parameters": [
        {
          "name": "complexo"
        },
        {
          "name": "denom complexo"
        }
      ]
    },
    "IMEXP": {
      "description": "Esta função retorna o exponencial de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMLN": {
      "description": "Esta função retorna o logaritmo natural de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMLOG2": {
      "description": "Esta função retorna o logaritmo de base 2 de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMLOG10": {
      "description": "Esta função retorna o logaritmo comum de um número complexo.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMPOWER": {
      "description": "Esta função retorna um número complexo elevado a uma potência.",
      "parameters": [
        {
          "name": "complexo"
        },
        {
          "name": "poderoso"
        }
      ]
    },
    "IMPRODUCT": {
      "description": "Esta função retorna o produto de até 29 números complexos no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexnum1"
        },
        {
          "name": "complexnum2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "IMREAL": {
      "description": "Esta função retorna o coeficiente real de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMSIN": {
      "description": "Esta função retorna o seno de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMSQRT": {
      "description": "Esta função retorna a raiz quadrada de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMSUB": {
      "description": "Esta função retorna a diferença de dois números complexos no formato de texto x+yi ou x+yj.",
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
      "description": "Esta função retorna a soma de dois ou mais números complexos no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexnum1"
        },
        {
          "name": "complexnum2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "INDEX": {
      "description": "Esta função retorna um valor ou a referência a um valor dentro de uma matriz ou intervalo.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "número_da_linha"
        },
        {
          "name": "num_coluna"
        },
        {
          "name": "num_área"
        }
      ]
    },
    "INDIRECT": {
      "description": "Esta função retorna a referência especificada por uma sequência de texto. As referências são imediatamente avaliadas para exibir seus conteúdos.",
      "parameters": [
        {
          "name": "texto_ref"
        },
        {
          "name": "estilo_a1",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "INT": {
      "description": "Esta função arredonda um número especificado para o inteiro mais próximo.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "INTERCEPT": {
      "description": "Esta função retorna as coordenadas de um ponto no qual uma linha intercepta o eixo y, usando valores x e y existentes.",
      "parameters": [
        {
          "name": "dependente"
        },
        {
          "name": "independente"
        }
      ]
    },
    "INTRATE": {
      "description": "Esta função calcula a taxa de juros para um título totalmente investido.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "investimento"
        },
        {
          "name": "redenção"
        },
        {
          "name": "base"
        }
      ]
    },
    "IPMT": {
      "description": "Esta função calcula o pagamento de juros de um empréstimo.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "por"
        },
        {
          "name": "não"
        },
        {
          "name": "pval"
        },
        {
          "name": "validade"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "IRR": {
      "description": "Esta função retorna a taxa interna de retorno para uma série de fluxos de caixa representados pelos números em uma matriz.",
      "parameters": [
        {
          "name": "arrayvals"
        },
        {
          "name": "estimativa"
        }
      ]
    },
    "ISBLANK": {
      "description": "Esta função testa se um valor, uma expressão ou conteúdo de uma célula referenciada está vazio.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISERR": {
      "description": "Esta função, Erro diferente de não disponível, testa se um valor, uma expressão ou conteúdo de uma célula referenciada tem um erro diferente de não disponível (#N/D).",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISERROR": {
      "description": "Esta função, Is Error of Any Kind, testa se um valor, uma expressão ou conteúdo de uma célula referenciada tem um erro de qualquer tipo.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISEVEN": {
      "description": "Esta função, Is Number Even, testa se um valor, uma expressão ou conteúdo de uma célula referenciada é par.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISLOGICAL": {
      "description": "Esta função testa se um valor, uma expressão ou conteúdo de uma célula referenciada é um valor lógico (booleano).",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISNA": {
      "description": "Esta função, Não Disponível, testa se um valor, uma expressão ou conteúdo de uma célula referenciada tem o valor de erro não disponível (#N/D).",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISNONTEXT": {
      "description": "Esta função testa se um valor, uma expressão ou conteúdo de uma célula referenciada tem qualquer tipo de dado diferente de texto.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISNUMBER": {
      "description": "Esta função testa se um valor, uma expressão ou conteúdo de uma célula referenciada possui dados numéricos.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISODD": {
      "description": "Esta função, Is Number Odd, testa se um valor, uma expressão ou conteúdo de uma célula referenciada tem dados numéricos.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISPMT": {
      "description": "Esta função calcula os juros pagos durante um período específico de um investimento.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "por"
        },
        {
          "name": "não"
        },
        {
          "name": "vp"
        }
      ]
    },
    "ISREF": {
      "description": "Esta função, Is Reference, testa se um valor, uma expressão ou conteúdo de uma célula referenciada é uma referência a outra célula.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "ISTEXT": {
      "description": "Esta função testa se um valor, uma expressão ou conteúdo de uma célula referenciada possui dados de texto.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "KURT": {
      "description": "Esta função retorna a curtose de um conjunto de dados.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2"
        },
        {
          "name": "número3"
        },
        {
          "name": "número4",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "LARGE": {
      "description": "Esta função retorna o enésimo maior valor em um conjunto de dados, onde n é especificado.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "não"
        }
      ]
    },
    "LCM": {
      "description": "Esta função retorna o mínimo múltiplo comum de dois números.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "LEFT": {
      "description": "Esta função retorna os caracteres especificados mais à esquerda de um valor de texto, com base no número de caracteres que você especificar.",
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
      "description": "Esta função retorna o comprimento do número de caracteres em uma sequência de texto.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "LINEST": {
      "description": "Esta função calcula as estatísticas de uma linha.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "x"
        },
        {
          "name": "constante"
        },
        {
          "name": "estatísticas"
        }
      ]
    },
    "LN": {
      "description": "Esta função retorna o logaritmo natural do número especificado.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "LOG": {
      "description": "Esta função retorna o logaritmo de base Y de um número X.",
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
      "description": "Esta função retorna o logaritmo de base 10 do número fornecido.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "LOGEST": {
      "description": "Esta função calcula uma curva exponencial que se ajusta aos dados e retorna uma matriz de valores que descreve a curva.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "x"
        },
        {
          "name": "constante"
        },
        {
          "name": "estatísticas"
        }
      ]
    },
    "LOGINV": {
      "description": "Esta função retorna o inverso da função de distribuição cumulativa lognormal de x, onde LN(x) é normalmente distribuído com a média e o desvio padrão especificados.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        }
      ]
    },
    "LOGNORMDIST": {
      "description": "Esta função retorna a distribuição logarítmica natural cumulativa de x, onde LN(x) é normalmente distribuído com a média e o desvio padrão especificados. Analise dados que foram transformados logaritmicamente com esta função.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        }
      ]
    },
    "LOOKUP": {
      "description": "Esta função procura um valor e retorna um valor do mesmo local em uma segunda área.",
      "parameters": [
        {
          "name": "valor_procurar"
        },
        {
          "name": "vetor_de_pesquisa"
        },
        {
          "name": "vetor_resultado"
        }
      ]
    },
    "LOWER": {
      "description": "Esta função converte texto em letras minúsculas.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "MATCH": {
      "description": "Esta função retorna a posição relativa de um item especificado em um intervalo.",
      "parameters": [
        {
          "name": "valor_procurar"
        },
        {
          "name": "matriz_de_pesquisa"
        },
        {
          "name": "tipo_de_correspondência"
        }
      ]
    },
    "XMATCH": {
      "description": "Esta função retorna a posição relativa de um item em um array. Por padrão, uma correspondência exata é necessária.",
      "parameters": [
        {
          "name": "valor_procurar"
        },
        {
          "name": "matriz_de_pesquisa"
        },
        {
          "name": "modo_de_correspondência",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "0",
              "description": "Correspondência exata (padrão)"
            },
            {
              "value": "-1",
              "description": "Correspondência exata ou próximo menor item"
            },
            {
              "value": "1",
              "description": "Correspondência exata ou próximo item maior"
            },
            {
              "value": "2",
              "description": "Uma correspondência curinga onde *, ? e ~ têm um significado especial."
            }
          ]
        },
        {
          "name": "modo_de_pesquisa",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "1",
              "description": "Pesquisar do primeiro ao último (padrão)"
            },
            {
              "value": "-1",
              "description": "Pesquisar do último para o primeiro (pesquisa reversa)"
            },
            {
              "value": "2",
              "description": "Execute uma pesquisa binária que dependa de lookup_array sendo classificado em ordem crescente. Se não for classificado, resultados inválidos serão retornados. "
            },
            {
              "value": "-2",
              "description": "Execute uma pesquisa binária que dependa de lookup_array sendo classificado em ordem decrescente. Se não for classificado, resultados inválidos serão retornados."
            }
          ]
        }
      ]
    },
    "XLOOKUP": {
      "description": "Esta função pesquisa um intervalo ou uma matriz para uma correspondência e retorna o item correspondente de um segundo intervalo ou matriz. Por padrão, uma correspondência exata é usada.",
      "parameters": [
        {
          "name": "valor_procurar"
        },
        {
          "name": "matriz_de_pesquisa"
        },
        {
          "name": "retornar_matriz"
        },
        {
          "name": "se_não_for_encontrado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "modo_de_correspondência",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "0",
              "description": "Correspondência exata (padrão)"
            },
            {
              "value": "-1",
              "description": "Correspondência exata ou próximo menor item"
            },
            {
              "value": "1",
              "description": "Correspondência exata ou próximo item maior"
            },
            {
              "value": "2",
              "description": "Uma correspondência curinga onde *, ? e ~ têm um significado especial."
            }
          ]
        },
        {
          "name": "modo_de_pesquisa",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "1",
              "description": "Pesquisar do primeiro ao último (padrão)"
            },
            {
              "value": "-1",
              "description": "Pesquisar do último para o primeiro (pesquisa reversa)"
            },
            {
              "value": "2",
              "description": "Execute uma pesquisa binária que dependa de lookup_array sendo classificado em ordem crescente. Se não for classificado, resultados inválidos serão retornados. "
            },
            {
              "value": "-2",
              "description": "Execute uma pesquisa binária que dependa de lookup_array sendo classificado em ordem decrescente. Se não for classificado, resultados inválidos serão retornados."
            }
          ]
        }
      ]
    },
    "MAX": {
      "description": "Esta função retorna o valor máximo, o maior valor, de todos os valores nos argumentos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "MAXA": {
      "description": "Esta função retorna o maior valor em uma lista de argumentos, incluindo texto e valores lógicos.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "MDETERM": {
      "description": "Esta função retorna o determinante matricial de uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        }
      ]
    },
    "MDURATION": {
      "description": "Esta função calcula a duração Macaulay modificada de um título com um valor nominal assumido de US$ 100.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "cupom"
        },
        {
          "name": "colheita"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "MEDIAN": {
      "description": "Esta função retorna a mediana, o número no meio do conjunto de números fornecido; ou seja, metade dos números tem valores maiores que a mediana, e metade tem valores menores que a mediana.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "MID": {
      "description": "Esta função retorna o número solicitado de caracteres de uma sequência de texto começando na posição que você especificar e com base no número de caracteres que você especificar.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "núm_inicial"
        },
        {
          "name": "num_caracteres"
        }
      ]
    },
    "MIN": {
      "description": "Esta função retorna o valor mínimo, o menor valor, de todos os valores nos argumentos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "MINA": {
      "description": "Esta função retorna o valor mínimo em uma lista de argumentos, incluindo texto e valores lógicos.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "MINUTE": {
      "description": "Esta função retorna o minuto correspondente a um horário especificado.",
      "parameters": [
        {
          "name": "tempo"
        }
      ]
    },
    "MINVERSE": {
      "description": "Esta função retorna a matriz inversa da matriz armazenada em uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        }
      ]
    },
    "MIRR": {
      "description": "Esta função retorna a taxa interna de retorno modificada para uma série de fluxos de caixa periódicos.",
      "parameters": [
        {
          "name": "valores"
        },
        {
          "name": "taxa_financeira"
        },
        {
          "name": "taxa_de_reinvestimento"
        }
      ]
    },
    "MMULT": {
      "description": "Esta função retorna o produto matricial de duas matrizes.",
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
      "description": "Esta função retorna o resto de uma operação de divisão.",
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
      "description": "Esta função retorna o valor mais frequente em um conjunto de dados.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "MONTH": {
      "description": "Esta função retorna o mês correspondente ao valor de data especificado.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "MROUND": {
      "description": "Esta função retorna um número arredondado para o múltiplo desejado.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "múltiplo"
        }
      ]
    },
    "MULTINOMIAL": {
      "description": "Esta função calcula a razão entre o fatorial de uma soma de valores e o produto dos fatoriais.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "MUNIT": {
      "description": "A função retorna a matriz unitária para a dimensão especificada.",
      "parameters": [
        {
          "name": "dimensão"
        }
      ]
    },
    "N": {
      "description": "Esta função retorna um valor convertido em um número.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "NA": {
      "description": "Esta função retorna o valor de erro #N/D que significa não disponível."
    },
    "SHEET": {
      "description": "Retorna o número da folha de referência.",
      "parameters": [
        {
          "name": "valor",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SHEETS": {
      "description": "Retorna o número de folhas em uma referência.",
      "parameters": [
        {
          "name": "referência",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "NEGBINOMDIST": {
      "description": "Esta função retorna a distribuição binomial negativa.",
      "parameters": [
        {
          "name": "número_f"
        },
        {
          "name": "números"
        },
        {
          "name": "probabilidades_s"
        }
      ]
    },
    "NETWORKDAYS": {
      "description": "Esta função retorna o número total de dias úteis completos entre as datas de início e término.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "data_final"
        },
        {
          "name": "feriados",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "NOMINAL": {
      "description": "Esta função retorna a taxa de juros anual nominal para uma determinada taxa efetiva e número de períodos de capitalização por ano.",
      "parameters": [
        {
          "name": "taxa_de_efeito"
        },
        {
          "name": "npery"
        }
      ]
    },
    "NORMDIST": {
      "description": "Esta função retorna a distribuição cumulativa normal para a média e o desvio padrão especificados.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NORMINV": {
      "description": "Esta função retorna o inverso da distribuição cumulativa normal para a média e o desvio padrão fornecidos.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        }
      ]
    },
    "NORMSDIST": {
      "description": "Esta função retorna a função de distribuição cumulativa normal padrão.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "NORMSINV": {
      "description": "Esta função retorna o inverso da distribuição cumulativa normal padrão. A distribuição tem uma média de zero e um desvio padrão de um.",
      "parameters": [
        {
          "name": "probabilidade"
        }
      ]
    },
    "NOT": {
      "description": "Esta função inverte o valor lógico do seu argumento.",
      "parameters": [
        {
          "name": "lógico"
        }
      ]
    },
    "NOW": {
      "description": "Esta função retorna a data e hora atuais."
    },
    "NPER": {
      "description": "Esta função retorna o número de períodos para um investimento com base em um valor presente, valor futuro, pagamentos periódicos e uma taxa de juros especificada.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "pagar"
        },
        {
          "name": "pval"
        },
        {
          "name": "validade"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "NPV": {
      "description": "Esta função calcula o valor presente líquido de um investimento usando uma taxa de desconto e uma série de pagamentos e receitas futuras.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "OBJECT": {
      "description": "Esta função converte a sequência de propriedades/expressões em um objeto.",
      "parameters": [
        {
          "name": "propriedade1",
          "repeatable": "verdadeiro"
        },
        {
          "name": "expressão1",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "OCT2BIN": {
      "description": "Esta função converte um número octal em um número binário.",
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
      "description": "Esta função converte um número octal em um número decimal.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "OCT2HEX": {
      "description": "Esta função converte um número octal em um número hexadecimal.",
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
      "description": "Esta função arredonda o valor especificado para o número inteiro ímpar mais próximo.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ODDFPRICE": {
      "description": "Esta função calcula o preço por US$ 100 de valor nominal de um título com um primeiro período ímpar.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "emitir"
        },
        {
          "name": "primeiro_cupom"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "colheita"
        },
        {
          "name": "redenção"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDFYIELD": {
      "description": "Esta função calcula o rendimento de um título com um primeiro período ímpar.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "emitir"
        },
        {
          "name": "primeiro_cupom"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "preço"
        },
        {
          "name": "redenção"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLPRICE": {
      "description": "Esta função calcula o preço por US$ 100 de valor nominal de um título com um último período de cupom ímpar.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "último_interesse"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "colheita"
        },
        {
          "name": "redenção"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "ODDLYIELD": {
      "description": "Esta função calcula o rendimento de um título com um último período ímpar.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "último_interesse"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "preço"
        },
        {
          "name": "redenção"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "OFFSET": {
      "description": "Esta função retorna uma referência a um intervalo. O intervalo é um número especificado de linhas e colunas de uma célula ou intervalo de células. A função retorna uma única célula ou um intervalo de células.",
      "parameters": [
        {
          "name": "referência"
        },
        {
          "name": "linhas"
        },
        {
          "name": "cols"
        },
        {
          "name": "altura",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "largura",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "OR": {
      "description": "Esta função calcula o OR lógico. Ela retorna VERDADEIRO se qualquer um dos seus argumentos for verdadeiro; caso contrário, retorna FALSO se todos os argumentos forem falsos.",
      "parameters": [
        {
          "name": "lógico1"
        },
        {
          "name": "lógico2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "PEARSON": {
      "description": "Esta função retorna o coeficiente de correlação do momento do produto de Pearson, um índice adimensional entre -1,0 e 1,0 inclusive, indicativo da relação linear de dois conjuntos de dados.",
      "parameters": [
        {
          "name": "matriz_ind"
        },
        {
          "name": "dep_matriz"
        }
      ]
    },
    "PERCENTILE": {
      "description": "Esta função retorna o enésimo percentil de valores em um intervalo.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "não"
        }
      ]
    },
    "PERCENTRANK": {
      "description": "Esta função retorna a classificação de um valor em um conjunto de dados como uma porcentagem do conjunto de dados.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "x"
        },
        {
          "name": "significado"
        }
      ]
    },
    "PERMUT": {
      "description": "Esta função retorna o número de permutações possíveis para um número especificado de itens.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_escolhido"
        }
      ]
    },
    "PI": {
      "description": "Esta função retorna PI como 3,1415926536."
    },
    "PMT": {
      "description": "Esta função retorna o valor do pagamento de um empréstimo dado o valor presente, a taxa de juros especificada e o número de termos.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "não"
        },
        {
          "name": "pval"
        },
        {
          "name": "validade"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "POISSON": {
      "description": "Esta função retorna a distribuição de Poisson.",
      "parameters": [
        {
          "name": "neventos"
        },
        {
          "name": "significar"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "POWER": {
      "description": "Esta função eleva o número especificado à potência especificada.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "poder"
        }
      ]
    },
    "PPMT": {
      "description": "Esta função retorna o valor do pagamento do principal de um empréstimo, dado o valor presente, a taxa de juros especificada e o número de termos.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "por"
        },
        {
          "name": "não"
        },
        {
          "name": "pval"
        },
        {
          "name": "validade"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "PRICE": {
      "description": "Esta função calcula o preço por $ 100 de valor nominal de um título de juros periódicos",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "colheita"
        },
        {
          "name": "redenção"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEDISC": {
      "description": "Esta função retorna o preço por US$ 100 de valor nominal de um título com desconto.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "desconto"
        },
        {
          "name": "redenção"
        },
        {
          "name": "base"
        }
      ]
    },
    "PRICEMAT": {
      "description": "Esta função retorna o preço no vencimento por US$ 100 do valor nominal de um título que paga juros.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "emitir"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "colheita"
        },
        {
          "name": "base"
        }
      ]
    },
    "PROB": {
      "description": "Esta função retorna a probabilidade de que valores em um intervalo estejam entre dois limites.",
      "parameters": [
        {
          "name": "intervalo_x"
        },
        {
          "name": "intervalo_prob"
        },
        {
          "name": "limite_inferior"
        },
        {
          "name": "limite_superior"
        }
      ]
    },
    "PRODUCT": {
      "description": "Esta função multiplica todos os argumentos e retorna o produto.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "PROPER": {
      "description": "Esta função coloca a primeira letra de cada palavra de uma sequência de texto em maiúscula.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "PROPERTY": {
      "description": "Esta função retorna o valor da propriedade path no objeto.",
      "parameters": [
        {
          "name": "expressão_de_dados"
        },
        {
          "name": "caminho_da_propriedade"
        }
      ]
    },
    "PV": {
      "description": "Esta função retorna o valor presente de um investimento com base na taxa de juros, número e valor de pagamentos periódicos e valor futuro. O valor presente é o valor total que uma série de pagamentos futuros vale agora.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "número"
        },
        {
          "name": "pagar"
        },
        {
          "name": "validade"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "QUARTILE": {
      "description": "Esta função retorna qual quartil (qual quarto ou 25 por cento) de um conjunto de dados corresponde a um valor.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "quarto"
        }
      ]
    },
    "QUOTIENT": {
      "description": "Esta função retorna a parte inteira de uma divisão. Use isso para ignorar o resto de uma divisão.",
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
      "description": "Esta função converte o número especificado de graus para radianos.",
      "parameters": [
        {
          "name": "ângulo"
        }
      ]
    },
    "RAND": {
      "description": "Esta função retorna um número aleatório distribuído uniformemente entre 0 e 1."
    },
    "RANDBETWEEN": {
      "description": "Esta função retorna um número aleatório entre os números que você especificar.",
      "parameters": [
        {
          "name": "fundo"
        },
        {
          "name": "principal"
        }
      ]
    },
    "RANGEBLOCKSPARKLINE": {
      "description": "Esta função retorna um rangetemplate.",
      "parameters": [
        {
          "name": "intervalo_de_modelo"
        },
        {
          "name": "expressão_de_dados"
        }
      ]
    },
    "RANK": {
      "description": "Esta função retorna a classificação de um número em um conjunto de números. Se você fosse classificar o conjunto, a classificação do número seria sua posição na lista.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "ref"
        },
        {
          "name": "ordem",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "RATE": {
      "description": "Esta função retorna a taxa de juros por período de uma anuidade.",
      "parameters": [
        {
          "name": "não"
        },
        {
          "name": "tpm"
        },
        {
          "name": "pval"
        },
        {
          "name": "validade"
        },
        {
          "name": "tipo"
        },
        {
          "name": "adivinhar"
        }
      ]
    },
    "RECEIVED": {
      "description": "Esta função retorna o valor recebido no vencimento de um título totalmente investido.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "investimento"
        },
        {
          "name": "desconto"
        },
        {
          "name": "base"
        }
      ]
    },
    "REPLACE": {
      "description": "Esta função substitui parte de uma sequência de texto por uma sequência de texto diferente, com base no número de caracteres especificado.",
      "parameters": [
        {
          "name": "texto_antigo"
        },
        {
          "name": "núm_inicial"
        },
        {
          "name": "num_caracteres"
        },
        {
          "name": "novo_texto"
        }
      ]
    },
    "REPT": {
      "description": "Esta função repete o texto um número especificado de vezes.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "número_vezes"
        }
      ]
    },
    "RIGHT": {
      "description": "Esta função retorna os caracteres especificados mais à direita de um valor de texto, com base no número de caracteres que você especificar.",
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
      "description": "Esta função converte um numeral arábico em um equivalente de texto em numeral romano.",
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
      "description": "Esta função arredonda o valor especificado para o número mais próximo, usando o número especificado de casas decimais.",
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
      "description": "Esta função arredonda o número especificado para o número mais próximo, usando o número especificado de casas decimais.",
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
      "description": "Esta função arredonda o número especificado para o número mais próximo, usando o número especificado de casas decimais.",
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
      "description": "Esta função retorna o número de uma linha de uma referência.",
      "parameters": [
        {
          "name": "referência"
        }
      ]
    },
    "ROWS": {
      "description": "Esta função retorna o número de linhas em uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        }
      ]
    },
    "RSQ": {
      "description": "Esta função retorna o quadrado do coeficiente de correlação do momento do produto de Pearson (R-quadrado) por meio de pontos de dados em y's e x's conhecidos.",
      "parameters": [
        {
          "name": "dep_matriz"
        },
        {
          "name": "matriz_ind"
        }
      ]
    },
    "SEARCH": {
      "description": "Esta função encontra uma sequência de texto em outra sequência de texto e retorna o índice da posição inicial do texto encontrado.",
      "parameters": [
        {
          "name": "encontrar_texto"
        },
        {
          "name": "dentro_do_texto"
        },
        {
          "name": "núm_inicial",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SECOND": {
      "description": "Esta função retorna o valor de segundos (0 a 59) para um tempo especificado.",
      "parameters": [
        {
          "name": "tempo"
        }
      ]
    },
    "SERIESSUM": {
      "description": "Esta função retorna a soma de uma série de potências.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "não"
        },
        {
          "name": "eu"
        },
        {
          "name": "coeficientes"
        }
      ]
    },
    "SIGN": {
      "description": "Esta função retorna o sinal de um número ou expressão.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "SIN": {
      "description": "Esta função retorna o seno do ângulo especificado.",
      "parameters": [
        {
          "name": "ângulo"
        }
      ]
    },
    "SINH": {
      "description": "Esta função retorna o seno hiperbólico do número especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "SKEW": {
      "description": "Esta função retorna a assimetria de uma distribuição.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "SLN": {
      "description": "Esta função retorna a depreciação linear de um ativo por um período.",
      "parameters": [
        {
          "name": "custo"
        },
        {
          "name": "salvamento"
        },
        {
          "name": "vida"
        }
      ]
    },
    "SLOPE": {
      "description": "Esta função calcula a inclinação de uma regressão linear.",
      "parameters": [
        {
          "name": "dep_matriz"
        },
        {
          "name": "matriz_ind"
        }
      ]
    },
    "SMALL": {
      "description": "Esta função retorna o enésimo menor valor em um conjunto de dados, onde n é especificado.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "não"
        }
      ]
    },
    "SQRT": {
      "description": "Esta função retorna a raiz quadrada positiva do número especificado.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "SQRTPI": {
      "description": "Esta função retorna a raiz quadrada positiva de um múltiplo de pi (p).",
      "parameters": [
        {
          "name": "múltiplo"
        }
      ]
    },
    "STANDARDIZE": {
      "description": "Esta função retorna um valor normalizado de uma distribuição caracterizada por média e desvio padrão.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        }
      ]
    },
    "STDEVA": {
      "description": "Esta função retorna o desvio padrão para um conjunto de números, texto ou valores lógicos.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "STDEVP": {
      "description": "Esta função retorna o desvio padrão para uma população inteira especificada (de valores numéricos).",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "STDEVPA": {
      "description": "Esta função retorna o desvio padrão para uma população inteira especificada, incluindo valores de texto ou lógicos, bem como valores numéricos.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "STEYX": {
      "description": "Esta função retorna o erro padrão do valor y previsto para cada x. O erro padrão é uma medida da quantidade de erro na previsão de y para um valor de x.",
      "parameters": [
        {
          "name": "dep_matriz"
        },
        {
          "name": "matriz_ind"
        }
      ]
    },
    "SUBSTITUTE": {
      "description": "Esta função substitui uma nova string por caracteres especificados em uma string existente.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "texto_antigo"
        },
        {
          "name": "novo_texto"
        },
        {
          "name": "número_da_instância",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SUBTOTAL": {
      "description": "Esta função calcula um subtotal de uma lista de números usando uma função interna especificada.",
      "parameters": [
        {
          "name": "num_da_função"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "SUM": {
      "description": "Esta função retorna a soma de células ou intervalo de células.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "SUMIF": {
      "description": "Esta função adiciona as células usando um critério fornecido.",
      "parameters": [
        {
          "name": "faixa"
        },
        {
          "name": "critérios"
        },
        {
          "name": "intervalo_soma"
        }
      ]
    },
    "SUMIFS": {
      "description": "Esta função adiciona células em um intervalo usando vários critérios.",
      "parameters": [
        {
          "name": "intervalo_soma"
        },
        {
          "name": "intervalo_de_critérios1"
        },
        {
          "name": "critério1"
        },
        {
          "name": "intervalo_de_critérios2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "critério2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "SUMPRODUCT": {
      "description": "Esta função retorna a soma dos produtos das células. Multiplica os componentes correspondentes nas matrizes fornecidas e retorna a soma desses produtos.",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "SUMSQ": {
      "description": "Esta função retorna a soma dos quadrados dos argumentos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "SUMX2MY2": {
      "description": "Esta função retorna a soma da diferença dos quadrados dos valores correspondentes em duas matrizes.",
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
      "description": "Esta função retorna a soma dos quadrados dos valores correspondentes em duas matrizes.",
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
      "description": "Esta função retorna a soma do quadrado das diferenças de valores correspondentes em duas matrizes.",
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
      "description": "Esta função retorna a depreciação da soma dos dígitos dos anos de um ativo durante um período especificado.",
      "parameters": [
        {
          "name": "custo"
        },
        {
          "name": "salvamento"
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
      "description": "Esta função retorna o texto em uma célula especificada.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "TAN": {
      "description": "Esta função retorna a tangente do ângulo especificado.",
      "parameters": [
        {
          "name": "ângulo"
        }
      ]
    },
    "TANH": {
      "description": "Esta função retorna a tangente hiperbólica do número especificado.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "TBILLEQ": {
      "description": "Esta função retorna o rendimento equivalente para uma letra do Tesouro (ou T-bill)",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "desconto"
        }
      ]
    },
    "TBILLPRICE": {
      "description": "Esta função retorna o preço por US$ 100 de valor nominal de uma letra do Tesouro (ou T-bill).",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "desconto"
        }
      ]
    },
    "TBILLYIELD": {
      "description": "Esta função retorna o rendimento de uma letra do Tesouro (ou T-bill).",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "preço"
        }
      ]
    },
    "TDIST": {
      "description": "Esta função retorna a probabilidade da distribuição t.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "graus_liberdade"
        },
        {
          "name": "caudas"
        }
      ]
    },
    "TEXT": {
      "description": "Esta função formata um número e o converte em texto.",
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
      "description": "Esta função retorna o objeto TimeSpan para um tempo especificado.",
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
      "description": "Esta função retorna o objeto TimeSpan do tempo representado por uma string de texto.",
      "parameters": [
        {
          "name": "texto_de_hora"
        }
      ]
    },
    "TINV": {
      "description": "Esta função retorna o valor t da distribuição t do aluno como uma função da probabilidade e dos graus de liberdade.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "TODAY": {
      "description": "Esta função retorna a data e a hora da data atual."
    },
    "TRANSPOSE": {
      "description": "Esta função retorna um intervalo vertical de células como um intervalo horizontal ou um intervalo horizontal de células como um intervalo vertical.",
      "parameters": [
        {
          "name": "variedade"
        }
      ]
    },
    "TREND": {
      "description": "Esta função retorna valores ao longo de uma tendência linear. Esta função ajusta uma linha reta aos valores x e y conhecidos do array. A tendência retorna os valores y ao longo dessa linha para o array de novos valores x especificados.",
      "parameters": [
        {
          "name": "e"
        },
        {
          "name": "x"
        },
        {
          "name": "novox"
        },
        {
          "name": "constante"
        }
      ]
    },
    "TRIM": {
      "description": "Esta função remove espaços extras de uma string e deixa espaços simples entre as palavras.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "TRIMMEAN": {
      "description": "Esta função retorna a média de um subconjunto de dados excluindo os dados superiores e inferiores.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "por cento"
        }
      ]
    },
    "TRUE": {
      "description": "Esta função retorna o valor lógico VERDADEIRO."
    },
    "TRUNC": {
      "description": "Esta função remove a parte fracionária especificada do número especificado.",
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
      "description": "Esta função retorna a probabilidade associada a um teste t.",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        },
        {
          "name": "caudas"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "TYPE": {
      "description": "Esta função retorna o tipo de valor.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "UPPER": {
      "description": "Esta função converte texto em letras maiúsculas.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "VALUE": {
      "description": "Esta função converte uma sequência de texto que é um número em um valor numérico.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "VAR": {
      "description": "Esta função retorna a variância com base em uma amostra de uma população, que usa apenas valores numéricos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "VARA": {
      "description": "Esta função retorna a variância com base em uma amostra de uma população, que inclui valores numéricos, lógicos ou de texto.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "VARP": {
      "description": "Esta função retorna a variância com base em toda a população, que usa apenas valores numéricos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "VARPA": {
      "description": "Esta função retorna a variância com base em toda a população, o que inclui valores numéricos, lógicos ou de texto.",
      "parameters": [
        {
          "name": "valor1"
        },
        {
          "name": "valor2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "VDB": {
      "description": "Esta função retorna a depreciação de um ativo para qualquer período especificado usando o método de saldo decrescente variável.",
      "parameters": [
        {
          "name": "custo"
        },
        {
          "name": "salvamento"
        },
        {
          "name": "vida"
        },
        {
          "name": "período_início"
        },
        {
          "name": "fim_período"
        },
        {
          "name": "fator"
        },
        {
          "name": "sem_interruptor"
        }
      ]
    },
    "VLOOKUP": {
      "description": "Esta função procura um valor na coluna mais à esquerda e retorna um valor na mesma linha de uma coluna que você especificar.",
      "parameters": [
        {
          "name": "valor_procurar"
        },
        {
          "name": "matriz_de_tabela"
        },
        {
          "name": "núm_índice_coluna"
        },
        {
          "name": "pesquisa_de_intervalo",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "VERDADEIRO",
              "description": "Correspondência aproximada"
            },
            {
              "value": "FALSO",
              "description": "Correspondência exata"
            }
          ]
        }
      ]
    },
    "WEEKDAY": {
      "description": "Esta função retorna o número correspondente ao dia da semana para uma data especificada.",
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
      "description": "Esta função retorna um número que indica numericamente a semana do ano.",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "tipo de semana"
        }
      ]
    },
    "DATEPART": {
      "description": "Esta função formata uma data e a converte em texto.",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "formato_texto"
        },
        {
          "name": "tipo de semana",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "WEIBULL": {
      "description": "Esta função retorna a distribuição Weibull de dois parâmetros, frequentemente usada em análise de confiabilidade.",
      "parameters": [
        {
          "name": "x"
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
      "description": "Esta função retorna o número de dias úteis antes ou depois da data inicial.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "dias"
        },
        {
          "name": "feriados",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "XIRR": {
      "description": "Esta função calcula a taxa interna de retorno para um cronograma de fluxos de caixa que podem não ser periódicos.",
      "parameters": [
        {
          "name": "valores"
        },
        {
          "name": "datas"
        },
        {
          "name": "adivinhar"
        }
      ]
    },
    "XNPV": {
      "description": "Esta função calcula o valor presente líquido para um cronograma de fluxos de caixa que podem não ser periódicos.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "valores"
        },
        {
          "name": "datas"
        }
      ]
    },
    "YEAR": {
      "description": "Esta função retorna o ano como um inteiro para uma data especificada.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "YEARFRAC": {
      "description": "Esta função retorna a fração do ano representada pelo número de dias inteiros entre as datas de início e término.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "data_final"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELD": {
      "description": "Esta função calcula o rendimento de um título que paga juros periódicos.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "preço"
        },
        {
          "name": "redenção"
        },
        {
          "name": "freqüência"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDDISC": {
      "description": "Esta função calcula o rendimento anual de um título com desconto.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "preço"
        },
        {
          "name": "redenção"
        },
        {
          "name": "base"
        }
      ]
    },
    "YIELDMAT": {
      "description": "Esta função calcula o rendimento anual de um título que paga juros no vencimento.",
      "parameters": [
        {
          "name": "povoado"
        },
        {
          "name": "maturidade"
        },
        {
          "name": "emitir"
        },
        {
          "name": "avaliar"
        },
        {
          "name": "preço"
        },
        {
          "name": "base"
        }
      ]
    },
    "ZTEST": {
      "description": "Esta função retorna o valor de significância de um teste z. O teste z gera uma pontuação padrão para x com relação ao conjunto de dados e retorna a probabilidade bicaudal para a distribuição normal.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "x"
        },
        {
          "name": "sigma",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "HBARSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline Hbar",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Esquema de cores"
        },
        {
          "name": "eixoVisível"
        },
        {
          "name": "altura da barra"
        }
      ]
    },
    "VBARSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline Vbar",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "Esquema de cores"
        },
        {
          "name": "eixoVisível"
        },
        {
          "name": "largura da barra"
        }
      ]
    },
    "VARISPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de variância",
      "parameters": [
        {
          "name": "variância"
        },
        {
          "name": "referência"
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
          "name": "coisa chata"
        },
        {
          "name": "lenda"
        },
        {
          "name": "corPositiva"
        },
        {
          "name": "corNegativa"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "LOLLIPOPVARISPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar uma linha de variação absoluta ou relativa do tipo pirulito",
      "parameters": [
        {
          "name": "valor planejado"
        },
        {
          "name": "valor real"
        },
        {
          "name": "índice"
        },
        {
          "name": "absoluto"
        },
        {
          "name": "referência"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "coisa chata"
        },
        {
          "name": "lenda"
        },
        {
          "name": "corPositiva"
        },
        {
          "name": "corNegativa"
        },
        {
          "name": "cordocabeçalhopirulito"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "PIESPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um minigráfico de pizza",
      "parameters": [
        {
          "name": "intervalo|porcentagem"
        },
        {
          "name": "cor",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "AREASPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de área",
      "parameters": [
        {
          "name": "pontos"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "linha1"
        },
        {
          "name": "linha2"
        },
        {
          "name": "corPositiva"
        },
        {
          "name": "corNegativa"
        }
      ]
    },
    "SCATTERSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de dispersão",
      "parameters": [
        {
          "name": "pontos1"
        },
        {
          "name": "pontos2"
        },
        {
          "name": "sirigaita"
        },
        {
          "name": "máx X"
        },
        {
          "name": "minY"
        },
        {
          "name": "máximo Y"
        },
        {
          "name": "Linha h"
        },
        {
          "name": "vLinha"
        },
        {
          "name": "Zona xMin"
        },
        {
          "name": "Zona xMax"
        },
        {
          "name": "Zona yMin"
        },
        {
          "name": "Zona yMax"
        },
        {
          "name": "etiquetas"
        },
        {
          "name": "desenharSímbolo"
        },
        {
          "name": "desenhar linhas"
        },
        {
          "name": "cor1"
        },
        {
          "name": "cor2"
        },
        {
          "name": "traço"
        }
      ]
    },
    "LINESPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de linha",
      "parameters": [
        {
          "name": "dados"
        },
        {
          "name": "orientação de dados"
        },
        {
          "name": "dataEixoDados"
        },
        {
          "name": "orientaçãodoeixodata"
        },
        {
          "name": "contexto"
        }
      ]
    },
    "COLUMNSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de coluna",
      "parameters": [
        {
          "name": "dados"
        },
        {
          "name": "orientação de dados"
        },
        {
          "name": "dataEixoDados"
        },
        {
          "name": "orientaçãodoeixodata"
        },
        {
          "name": "contexto"
        }
      ]
    },
    "WINLOSSSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de vitória/derrota",
      "parameters": [
        {
          "name": "dados"
        },
        {
          "name": "orientação de dados"
        },
        {
          "name": "dataEixoDados"
        },
        {
          "name": "orientaçãodoeixodata"
        },
        {
          "name": "contexto"
        }
      ]
    },
    "BULLETSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de marcadores",
      "parameters": [
        {
          "name": "medir"
        },
        {
          "name": "alvo"
        },
        {
          "name": "maxi"
        },
        {
          "name": "bom"
        },
        {
          "name": "ruim"
        },
        {
          "name": "previsão"
        },
        {
          "name": "coisa chata"
        },
        {
          "name": "Esquema de cores"
        },
        {
          "name": "vertical"
        },
        {
          "name": "medirCor"
        },
        {
          "name": "coralvo"
        },
        {
          "name": "maxiColor"
        },
        {
          "name": "boa cor"
        },
        {
          "name": "cor ruim"
        },
        {
          "name": "previsãoCor"
        },
        {
          "name": "permitirMediçãoSobreMaxi"
        },
        {
          "name": "tamanho da barra"
        }
      ]
    },
    "SPREADSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline espalhado",
      "parameters": [
        {
          "name": "pontos"
        },
        {
          "name": "mostrarMédia"
        },
        {
          "name": "escalaIniciar"
        },
        {
          "name": "escalaFim"
        },
        {
          "name": "estilo"
        },
        {
          "name": "Esquema de cores"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "STACKEDSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline empilhado",
      "parameters": [
        {
          "name": "pontos"
        },
        {
          "name": "intervalo de cores"
        },
        {
          "name": "labelRange"
        },
        {
          "name": "máximo"
        },
        {
          "name": "alvo vermelho"
        },
        {
          "name": "alvo verde"
        },
        {
          "name": "alvoAzul"
        },
        {
          "name": "tragetAmarelo"
        },
        {
          "name": "cor"
        },
        {
          "name": "destaquePosição"
        },
        {
          "name": "vertical"
        },
        {
          "name": "textOrientação"
        },
        {
          "name": "tamanho do texto"
        }
      ]
    },
    "BOXPLOTSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um boxplot sparkline",
      "parameters": [
        {
          "name": "pontos"
        },
        {
          "name": "classeboxPlot"
        },
        {
          "name": "mostrarMédia"
        },
        {
          "name": "escalaIniciar"
        },
        {
          "name": "escalaFim"
        },
        {
          "name": "inícioaceitável"
        },
        {
          "name": "Fim aceitável"
        },
        {
          "name": "Esquema de cores"
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
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline em cascata",
      "parameters": [
        {
          "name": "pontosRange"
        },
        {
          "name": "pontoIndex"
        },
        {
          "name": "rótulosRange"
        },
        {
          "name": "mínimo"
        },
        {
          "name": "máximo"
        },
        {
          "name": "corPositiva"
        },
        {
          "name": "corNegativa"
        },
        {
          "name": "vertical"
        },
        {
          "name": "itemTypeRange"
        },
        {
          "name": "corTotal"
        }
      ]
    },
    "PARETOSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de Pareto",
      "parameters": [
        {
          "name": "pontos"
        },
        {
          "name": "pontoIndex"
        },
        {
          "name": "intervalo de cores"
        },
        {
          "name": "alvo"
        },
        {
          "name": "alvo2"
        },
        {
          "name": "destaquePosição"
        },
        {
          "name": "rótulo"
        },
        {
          "name": "vertical"
        },
        {
          "name": "coralvo"
        },
        {
          "name": "alvo2Cor"
        },
        {
          "name": "cordaetiqueta"
        },
        {
          "name": "tamanho da barra"
        }
      ]
    },
    "MONTHSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de mês",
      "parameters": [
        {
          "name": "ano"
        },
        {
          "name": "mês"
        },
        {
          "name": "intervalo de dados"
        },
        {
          "name": "corvazia"
        },
        {
          "name": "coriniciar"
        },
        {
          "name": "cor do meio"
        },
        {
          "name": "cor final"
        }
      ]
    },
    "YEARSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de ano",
      "parameters": [
        {
          "name": "ano"
        },
        {
          "name": "intervalo de dados"
        },
        {
          "name": "corvazia"
        },
        {
          "name": "coriniciar"
        },
        {
          "name": "cor do meio"
        },
        {
          "name": "cor final"
        }
      ]
    },
    "GAUGEKPISPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de KPI de medidor",
      "parameters": [
        {
          "name": "valor-alvo"
        },
        {
          "name": "valor atual"
        },
        {
          "name": "valor mínimo"
        },
        {
          "name": "valor máximo"
        },
        {
          "name": "mostrarRótulo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "Rótulo de Valor de Destino",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "etiquetaValorAtual",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "Rótulo de Valor mínimo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "maxValueLabel",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "fonteArray",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "ângulo mínimo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "ângulo máximo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "Razão do raio",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "Tipo de calibre",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "intervalo de cores",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "HISTOGRAMSPARKLINE": {
      "description": "Esta função retorna um conjunto de dados usado para representar um sparkline de histograma",
      "parameters": [
        {
          "name": "intervalo de datas"
        },
        {
          "name": "contínuo"
        },
        {
          "name": "tintaEtiqueta"
        },
        {
          "name": "escala"
        },
        {
          "name": "largura da barra"
        },
        {
          "name": "barraCor"
        },
        {
          "name": "estilodafontedorótulo"
        },
        {
          "name": "cordaetiqueta"
        },
        {
          "name": "cor de borda"
        }
      ]
    },
    "CEILING.PRECISE": {
      "description": "Esta função arredonda um número para cima, para o inteiro mais próximo ou para o múltiplo mais próximo de um valor especificado.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "COVARIANCE.S": {
      "description": "Esta função retorna a covariância da amostra, que é a média dos produtos dos desvios para cada par de pontos de dados em dois conjuntos de números.",
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
      "description": "Esta função arredonda um número para baixo, para o inteiro mais próximo ou para o múltiplo mais próximo de um valor especificado.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "PERCENTILE.EXC": {
      "description": "Esta função retorna o enésimo percentil de valores em um intervalo.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "o"
        }
      ]
    },
    "QUARTILE.EXC": {
      "description": "Esta função retorna qual quartil (qual quarto ou 25 por cento) de um conjunto de dados corresponde a um valor.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "quarto"
        }
      ]
    },
    "RANK.AVG": {
      "description": "Esta função retorna a classificação de um número em um conjunto de números. Se alguns valores tiverem a mesma classificação, ela retornará a classificação média.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "ref"
        },
        {
          "name": "ordem",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "MODE.MULT": {
      "description": "Esta função retorna a matriz vertical mais frequente ou o valor mais frequente em um conjunto de dados.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "STDEV.P": {
      "description": "Esta função retorna o desvio padrão para uma população inteira especificada (de valores numéricos).",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "VAR.P": {
      "description": "Esta função retorna a variância com base em toda a população, que usa apenas valores numéricos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "COVARIANCE.P": {
      "description": "Esta função retorna a covariância, que é a média dos produtos dos desvios para cada par de pontos de dados em dois conjuntos de números.",
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
      "description": "Esta função retorna o valor mais frequente em um conjunto de dados.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "PERCENTILE.INC": {
      "description": "Esta função retorna o enésimo percentil de valores em um intervalo.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "o"
        }
      ]
    },
    "QUARTILE.INC": {
      "description": "Esta função retorna qual quartil (qual quarto ou 25 por cento) de um conjunto de dados corresponde a um valor.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "quarto"
        }
      ]
    },
    "RANK.EQ": {
      "description": "Esta função retorna a classificação de um número em um conjunto de números. Se você fosse classificar o conjunto, a classificação do número seria sua posição na lista.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "ref"
        },
        {
          "name": "ordem",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "STDEV": {
      "description": "Esta função retorna o desvio padrão estimado com base em uma amostra.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "STDEV.S": {
      "description": "Esta função retorna o desvio padrão estimado com base em uma amostra.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "VAR.S": {
      "description": "Esta função retorna a variância com base em uma amostra de uma população, que usa apenas valores numéricos.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "BETA.INV": {
      "description": "Esta função calcula o inverso da função de distribuição beta cumulativa.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "alfa"
        },
        {
          "name": "beta"
        },
        {
          "name": "mais baixo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "superior",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "BINOM.DIST": {
      "description": "Esta função calcula a probabilidade de distribuição binomial do termo individual.",
      "parameters": [
        {
          "name": "números"
        },
        {
          "name": "provas"
        },
        {
          "name": "probabilidades_s"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "BINOM.INV": {
      "description": "Esta função retorna o critério binomial, o menor valor para o qual a distribuição binomial cumulativa é maior ou igual a um valor de critério.",
      "parameters": [
        {
          "name": "provas"
        },
        {
          "name": "probabilidades_s"
        },
        {
          "name": "alfa"
        }
      ]
    },
    "CHISQ.DIST.RT": {
      "description": "Esta função calcula a probabilidade unilateral da distribuição qui-quadrado.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "CHISQ.INV.RT": {
      "description": "Esta função calcula o inverso da probabilidade unilateral da distribuição qui-quadrado.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "CHISQ.TEST": {
      "description": "Esta função calcula o teste de independência da distribuição qui-quadrado.",
      "parameters": [
        {
          "name": "intervalo_real"
        },
        {
          "name": "intervalo_esperado"
        }
      ]
    },
    "CONFIDENCE.NORM": {
      "description": "Esta função retorna o intervalo de confiança para uma média populacional.",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "desenvolvimento_padrão"
        },
        {
          "name": "tamanho"
        }
      ]
    },
    "EXPON.DIST": {
      "description": "Esta função retorna a distribuição exponencial ou a densidade de probabilidade.",
      "parameters": [
        {
          "name": "valor"
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
      "description": "Esta função calcula a distribuição de probabilidade F, para ver graus de diversidade entre dois conjuntos de dados.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "graus_liberdade1"
        },
        {
          "name": "graus_liberdade2"
        }
      ]
    },
    "F.INV.RT": {
      "description": "Esta função retorna o inverso da distribuição de probabilidade F.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade1"
        },
        {
          "name": "graus_liberdade2"
        }
      ]
    },
    "F.TEST": {
      "description": "Esta função retorna o resultado de um teste F, que retorna a probabilidade unilateral de que as variâncias em duas matrizes não sejam significativamente diferentes.",
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
      "description": "Esta função retorna a distribuição gama.",
      "parameters": [
        {
          "name": "x"
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
      "description": "Esta função retorna o inverso da distribuição cumulativa gama.",
      "parameters": [
        {
          "name": "probabilidade"
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
      "description": "Esta função retorna o inverso da função de distribuição cumulativa lognormal de x, onde LN(x) é normalmente distribuído com a média e o desvio padrão especificados.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        }
      ]
    },
    "NORM.DIST": {
      "description": "Esta função retorna a distribuição cumulativa normal para a média e o desvio padrão especificados.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NORM.INV": {
      "description": "Esta função retorna o inverso da distribuição cumulativa normal para a média e o desvio padrão fornecidos.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "significar"
        },
        {
          "name": "desenvolvimento_padrão"
        }
      ]
    },
    "NORM.S.INV": {
      "description": "Esta função retorna o inverso da distribuição cumulativa normal padrão. A distribuição tem uma média de zero e um desvio padrão de um.",
      "parameters": [
        {
          "name": "probabilidade"
        }
      ]
    },
    "PERCENTRANK.INC": {
      "description": "Esta função retorna a classificação de um valor em um conjunto de dados como uma porcentagem do conjunto de dados.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "não"
        },
        {
          "name": "significado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "POISSON.DIST": {
      "description": "Esta função retorna a distribuição de Poisson.",
      "parameters": [
        {
          "name": "neventos"
        },
        {
          "name": "significar"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "T.INV.2T": {
      "description": "Esta função retorna o valor t da distribuição t do aluno como uma função da probabilidade e dos graus de liberdade.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "T.TEST": {
      "description": "Esta função retorna a probabilidade associada a um teste t.",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2"
        },
        {
          "name": "caudas"
        },
        {
          "name": "tipo"
        }
      ]
    },
    "WEIBULL.DIST": {
      "description": "Esta função retorna a distribuição Weibull de dois parâmetros, frequentemente usada em análise de confiabilidade.",
      "parameters": [
        {
          "name": "x"
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
      "description": "Esta função retorna o valor de significância de um teste z. O teste z gera uma pontuação padrão para x com relação ao conjunto de dados e retorna a probabilidade bicaudal para a distribuição normal.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "x"
        },
        {
          "name": "sigma",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "T.DIST.RT": {
      "description": "Esta função retorna a distribuição t de cauda direita.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "T.DIST.2T": {
      "description": "Esta função retorna a distribuição t bicaudal.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "ISO.CEILING": {
      "description": "Esta função retorna um número até o inteiro mais próximo ou até o múltiplo mais próximo de significância, independentemente do sinal de significância.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "BETA.DIST": {
      "description": "Esta função retorna a distribuição beta.",
      "parameters": [
        {
          "name": "x"
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
          "name": "mais baixo"
        },
        {
          "name": "superior"
        }
      ]
    },
    "GAMMALN.PRECISE": {
      "description": "Esta função retorna o logaritmo natural da função gama.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "ERF.PRECISE": {
      "description": "Esta função retorna a função de erro.",
      "parameters": [
        {
          "name": "limite inferior"
        }
      ]
    },
    "ERFC.PRECISE": {
      "description": "Esta função retorna a função ERF complementar.",
      "parameters": [
        {
          "name": "limite inferior"
        }
      ]
    },
    "PERCENTRANK.EXC": {
      "description": "Esta função retorna a classificação percentual (0..1, exclusivo) de um valor em um conjunto de dados.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "x"
        },
        {
          "name": "significado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "HYPGEOM.DIST": {
      "description": "Esta função retorna a distribuição hipergeométrica.",
      "parameters": [
        {
          "name": "amostras_s"
        },
        {
          "name": "número_amostra"
        },
        {
          "name": "populações_s"
        },
        {
          "name": "número_pop"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "LOGNORM.DIST": {
      "description": "Esta função retorna a distribuição log normal de x.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "significar"
        },
        {
          "name": "desvio padrão"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NEGBINOM.DIST": {
      "description": "Esta função retorna a distribuição binomial negativa.",
      "parameters": [
        {
          "name": "número_f"
        },
        {
          "name": "números"
        },
        {
          "name": "probabilidades_s"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "NORM.S.DIST": {
      "description": "Esta função retorna a distribuição normal padrão.",
      "parameters": [
        {
          "name": "por"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "T.DIST": {
      "description": "Esta função retorna a distribuição t.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "graus_liberdade"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "F.DIST": {
      "description": "Esta função retorna a distribuição de probabilidade F.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "graus_liberdade1"
        },
        {
          "name": "graus_liberdade2"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "CHISQ.DIST": {
      "description": "Esta função retorna a distribuição qui-quadrado.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "graus_liberdade"
        },
        {
          "name": "cumulativo"
        }
      ]
    },
    "F.INV": {
      "description": "Esta função retorna o inverso da distribuição de probabilidade F.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade1"
        },
        {
          "name": "graus_liberdade2"
        }
      ]
    },
    "T.INV": {
      "description": "Esta função retorna o inverso de cauda esquerda da distribuição t.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "CHISQ.INV": {
      "description": "Esta função retorna o inverso da probabilidade de cauda esquerda da distribuição qui-quadrado.",
      "parameters": [
        {
          "name": "probabilidade"
        },
        {
          "name": "graus_liberdade"
        }
      ]
    },
    "CONFIDENCE.T": {
      "description": "Esta função retorna o intervalo de confiança para uma distribuição t de Student.",
      "parameters": [
        {
          "name": "alfa"
        },
        {
          "name": "desenvolvimento_padrão"
        },
        {
          "name": "tamanho"
        }
      ]
    },
    "NETWORKDAYS.INTL": {
      "description": "Esta função retorna o número de dias úteis entre duas datas usando argumentos para indicar feriados e fins de semana.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "data_final"
        },
        {
          "name": "fim de semana",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "feriados",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "WORKDAY.INTL": {
      "description": "Esta função retorna o número de série da data antes ou depois de um número de dias úteis com parâmetros de fim de semana personalizados. Esses parâmetros indicam dias de fim de semana e feriados.",
      "parameters": [
        {
          "name": "data_de_início"
        },
        {
          "name": "dias"
        },
        {
          "name": "fim de semana",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "feriados",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "REFRESH": {
      "description": "Esta função decide como recalcular a fórmula. Pode usar o argumento assessMode para especificar a fórmula, recalcular com base no valor de referência alterado, avaliar uma vez, recalcular ou intervalo.",
      "parameters": [
        {
          "name": "fórmula"
        },
        {
          "name": "ModoAvaliar"
        },
        {
          "name": "intervalo"
        }
      ]
    },
    "DAYS": {
      "description": "Esta função retorna o número de dias entre duas datas.",
      "parameters": [
        {
          "name": "data_final"
        },
        {
          "name": "data_de_início"
        }
      ]
    },
    "ISOWEEKNUM": {
      "description": "Esta função retorna o número da semana ISO do ano para uma determinada data.",
      "parameters": [
        {
          "name": "data"
        }
      ]
    },
    "BITAND": {
      "description": "Esta função retorna um \\\"AND\\\" bit a bit de dois números.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "BITLSHIFT": {
      "description": "Esta função retorna um \\\"OU\\\" bit a bit de dois números.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "quantidade_de_deslocamento"
        }
      ]
    },
    "BITOR": {
      "description": "Esta função retorna um \\\"OU\\\" bit a bit de dois números.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "BITRSHIFT": {
      "description": "Esta função retorna um \\\"OU\\\" bit a bit de dois números.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "quantidade_de_deslocamento"
        }
      ]
    },
    "BITXOR": {
      "description": "Esta função retorna um \\\"XOR\\\" bit a bit de dois números.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2"
        }
      ]
    },
    "IMCOSH": {
      "description": "Esta função retorna o cosseno hiperbólico de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMCOT": {
      "description": "Esta função retorna a cotangente de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMCSC": {
      "description": "Esta função retorna a cossecante de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMCSCH": {
      "description": "Esta função retorna a cossecante hiperbólica de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMSEC": {
      "description": "Esta função retorna a secante de um número complexo no formato de texto x+yi de x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMSECH": {
      "description": "Esta função retorna a secante hiperbólica de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMSINH": {
      "description": "Esta função retorna o seno hiperbólico de um número complexo no formato de texto x+yi de x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "IMTAN": {
      "description": "Esta função retorna a tangente de um número complexo no formato de texto x+yi ou x+yj.",
      "parameters": [
        {
          "name": "complexo"
        }
      ]
    },
    "PDURATION": {
      "description": "Esta função retorna o número de períodos necessários para um investimento atingir um valor especificado.",
      "parameters": [
        {
          "name": "avaliar"
        },
        {
          "name": "pval"
        },
        {
          "name": "validade"
        }
      ]
    },
    "RRI": {
      "description": "Esta função retorna uma taxa de juros equivalente para o crescimento de um investimento.",
      "parameters": [
        {
          "name": "não"
        },
        {
          "name": "pval"
        },
        {
          "name": "validade"
        }
      ]
    },
    "ISFORMULA": {
      "description": "Esta função testa se contém uma fórmula de uma célula referenciada.",
      "parameters": [
        {
          "name": "referência de célula"
        }
      ]
    },
    "IFNA": {
      "description": "Esta função retorna o valor especificado se a fórmula retornar o valor de erro #N/D; caso contrário, retorna o resultado da fórmula.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "valor_se_nao"
        }
      ]
    },
    "IFS": {
      "description": "Esta função verifica se uma ou mais condições foram atendidas e retorna um valor que corresponde à primeira condição VERDADEIRO.",
      "parameters": [
        {
          "name": "teste_lógico1"
        },
        {
          "name": "valor_se_verdadeiro1"
        },
        {
          "name": "teste_lógico2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "valor_se_verdadeiro2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "SWITCH": {
      "description": "Esta função avalia um valor (chamado de expressão) em relação a uma lista de valores e retorna o resultado correspondente ao primeiro valor correspondente. Se não houver correspondência, um valor padrão opcional pode ser retornado.",
      "parameters": [
        {
          "name": "expressão"
        },
        {
          "name": "valor1"
        },
        {
          "name": "resultado1"
        },
        {
          "name": "padrão_ou_valor2",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        },
        {
          "name": "resultado2",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "XOR": {
      "description": "Esta função retorna um ou exclusivo lógico de todos os argumentos.",
      "parameters": [
        {
          "name": "lógico",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "AREAS": {
      "description": "Esta função retorna o número de áreas em uma referência.",
      "parameters": [
        {
          "name": "referência"
        }
      ]
    },
    "FORMULATEXT": {
      "description": "Esta função retorna uma fórmula como uma string.",
      "parameters": [
        {
          "name": "referência"
        }
      ]
    },
    "HYPERLINK": {
      "description": "Esta função cria um atalho ou salto que abre um documento armazenado em um servidor de rede, uma intranet ou na Internet.",
      "parameters": [
        {
          "name": "localização_do_link"
        },
        {
          "name": "nome_amigável"
        }
      ]
    },
    "ACOT": {
      "description": "Esta função calcula o arco-tangente inverso de um número.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ACOTH": {
      "description": "Esta função calcula o arco-tangente hiperbólico inverso de um número.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "ARABIC": {
      "description": "Esta função converte um texto em numeral romano em um equivalente em numeral arábico.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "BASE": {
      "description": "Esta função converte um número em uma representação de texto com a raiz (base) fornecida.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "raiz"
        },
        {
          "name": "comprimento_min",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "CEILING.MATH": {
      "description": "Esta função arredonda um número para o inteiro mais próximo ou para o múltiplo de significância mais próximo.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "modo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "COMBINA": {
      "description": "Esta função calcula o número de combinações possíveis com repetições para um número especificado de itens.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_escolhido"
        }
      ]
    },
    "COT": {
      "description": "Esta função retorna a cotangente do ângulo especificado.",
      "parameters": [
        {
          "name": "ângulo"
        }
      ]
    },
    "COTH": {
      "description": "Esta função retorna a cotangente hiperbólica do número especificado.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "CSC": {
      "description": "Esta função retorna a cossecante do ângulo especificado.",
      "parameters": [
        {
          "name": "ângulo"
        }
      ]
    },
    "CSCH": {
      "description": "Esta função retorna a cossecante hiperbólica do número especificado.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "DECIMAL": {
      "description": "Esta função converte uma representação de texto de um número em uma determinada base em um número decimal.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "raiz"
        }
      ]
    },
    "FLOOR.MATH": {
      "description": "Esta função arredonda um número para o inteiro mais próximo ou para o múltiplo de significância mais próximo.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "significado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "modo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SEC": {
      "description": "Esta função retorna a secante do ângulo especificado.",
      "parameters": [
        {
          "name": "ângulo"
        }
      ]
    },
    "SECH": {
      "description": "Esta função retorna a secante hiperbólica do valor especificado.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "BINOM.DIST.RANGE": {
      "description": "Esta função calcula a probabilidade de um resultado de teste usando uma distribuição binomial.",
      "parameters": [
        {
          "name": "provas"
        },
        {
          "name": "probabilidades_s"
        },
        {
          "name": "números"
        },
        {
          "name": "número_s2",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "GAMMA": {
      "description": "Esta função retorna o valor da função gama.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "MAXIFS": {
      "description": "Esta função retorna o valor máximo entre células especificadas por um determinado conjunto de condições ou critérios.",
      "parameters": [
        {
          "name": "intervalo_máximo"
        },
        {
          "name": "intervalo_de_critérios1"
        },
        {
          "name": "critério1"
        },
        {
          "name": "intervalo_de_critérios2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "critério2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "GAUSS": {
      "description": "Esta função calcula a probabilidade de um membro de uma população normal padrão ficar entre a média e os desvios-padrão z da média.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "MINIFS": {
      "description": "Esta função retorna o valor mínimo entre células especificadas por um determinado conjunto de condições ou critérios.",
      "parameters": [
        {
          "name": "intervalo_min"
        },
        {
          "name": "intervalo_de_critérios1"
        },
        {
          "name": "critério1"
        },
        {
          "name": "intervalo_de_critérios2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "critério2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "PERMUTATIONA": {
      "description": "Esta função retorna o número de permutações para um determinado número de objetos que podem ser selecionados do total de objetos.",
      "parameters": [
        {
          "name": "número"
        },
        {
          "name": "número_escolhido"
        }
      ]
    },
    "PHI": {
      "description": "Esta função retorna o valor da função densidade para uma distribuição normal padrão.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "SKEW.P": {
      "description": "Esta função retorna a assimetria de uma distribuição com base em uma população: uma caracterização do grau de assimetria de uma distribuição em torno de sua média.",
      "parameters": [
        {
          "name": "número1"
        },
        {
          "name": "número2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "BAHTTEXT": {
      "description": "Esta função converte um número em texto tailandês e adiciona um sufixo de \\\"Baht\\",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "CONCAT": {
      "description": "Esta função combina várias sequências de texto ou números em uma única sequência de texto. A função permanecerá disponível para compatibilidade com a função \\\"CONCATENAR\\\".",
      "parameters": [
        {
          "name": "texto 1"
        },
        {
          "name": "texto2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "FINDB": {
      "description": "Esta função encontra um valor de texto dentro de outro e retorna a posição do valor de texto no texto pesquisado, e conta cada caractere de byte duplo como 2 quando DBCS é definido como o idioma padrão.",
      "parameters": [
        {
          "name": "encontrar_texto"
        },
        {
          "name": "dentro_do_texto"
        },
        {
          "name": "núm_inicial",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "LEFTB": {
      "description": "Esta função retorna os caracteres especificados mais à esquerda de um valor de texto, com base no número de bytes que você especificar.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "número_bytes"
        }
      ]
    },
    "LENB": {
      "description": "Esta função retorna o comprimento do número de bytes em uma sequência de texto.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "MIDB": {
      "description": "Esta função retorna o número solicitado de caracteres de uma sequência de texto começando na posição que você especificar e com base no número de bytes que você especificar.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "núm_inicial"
        },
        {
          "name": "número_bytes"
        }
      ]
    },
    "REPLACEB": {
      "description": "Esta função substitui parte de uma sequência de texto por uma sequência de texto diferente, com base no número de bytes que você especificar.",
      "parameters": [
        {
          "name": "texto_antigo"
        },
        {
          "name": "byte_inicial"
        },
        {
          "name": "número_bytes"
        },
        {
          "name": "novo_texto"
        }
      ]
    },
    "RIGHTB": {
      "description": "Esta função retorna os caracteres especificados mais à direita de um valor de texto, com base no número de bytes que você especificar.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "número_bytes"
        }
      ]
    },
    "SEARCHB": {
      "description": "Esta função encontra uma sequência de texto em outra sequência de texto e retorna o índice da posição inicial do texto encontrado, e conta cada caractere de byte duplo como 2 quando DBCS é definido como o idioma padrão.",
      "parameters": [
        {
          "name": "encontrar_texto"
        },
        {
          "name": "dentro_do_texto"
        },
        {
          "name": "núm_inicial",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "TEXTJOIN": {
      "description": "Esta função combina vários intervalos e/ou strings em um texto, e o texto inclui um delimitador que você especifica entre cada valor de texto.",
      "parameters": [
        {
          "name": "delimitador"
        },
        {
          "name": "ignorar_vazio"
        },
        {
          "name": "texto 1"
        },
        {
          "name": "texto2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "UNICHAR": {
      "description": "Esta função retorna o caractere Unicode de uma determinada referência numérica.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "UNICODE": {
      "description": "Esta função retorna o número correspondente ao primeiro caractere do texto.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "ENCODEURL": {
      "description": "Esta função retorna uma string codificada em URL.",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "BC_QRCODE": {
      "description": "Esta função retorna um conjunto de dados para representar um QRCode",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "níveldecorreçãodeerro"
        },
        {
          "name": "modelo"
        },
        {
          "name": "versão"
        },
        {
          "name": "máscara"
        },
        {
          "name": "conexão"
        },
        {
          "name": "conexãoNão"
        },
        {
          "name": "código char"
        },
        {
          "name": "conjunto de caracteres"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_EAN13": {
      "description": "Esta função retorna um conjunto de dados para representar um EAN13.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "adicionar"
        },
        {
          "name": "addOnLabelPosition"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_EAN8": {
      "description": "Esta função retorna um conjunto de dados para representar um EAN8.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_CODABAR": {
      "description": "Esta função retorna um conjunto de dados para representar um CODABAR.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "Dígito de verificação"
        },
        {
          "name": "nwRatio"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_CODE39": {
      "description": "Esta função retorna um conjunto de dados para representar um CODE39.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "labelComCaractereInícioEParada"
        },
        {
          "name": "Dígito de verificação"
        },
        {
          "name": "nwRatio"
        },
        {
          "name": "ASCII completo"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_CODE93": {
      "description": "Esta função retorna um conjunto de dados para representar um CODE93.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "Dígito de verificação"
        },
        {
          "name": "ASCII completo"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_CODE128": {
      "description": "Esta função retorna um conjunto de dados para representar um CODE128.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "conjunto de códigos"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_GS1_128": {
      "description": "Esta função retorna um conjunto de dados para representar um GS1_128.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_CODE49": {
      "description": "Esta função retorna um conjunto de dados para representar um CODE49.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "mostrarRótulo"
        },
        {
          "name": "rótuloPosição"
        },
        {
          "name": "agrupamento"
        },
        {
          "name": "grupoNo"
        },
        {
          "name": "fonteFamília"
        },
        {
          "name": "estilo de fonte"
        },
        {
          "name": "Peso da fonte"
        },
        {
          "name": "textoDecoração"
        },
        {
          "name": "alinhamento de texto"
        },
        {
          "name": "tamanho da fonte"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_PDF417": {
      "description": "Esta função retorna um conjunto de dados para representar um PDF417.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "níveldecorreçãodeerro"
        },
        {
          "name": "linhas"
        },
        {
          "name": "colunas"
        },
        {
          "name": "compactar"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "BC_DATAMATRIX": {
      "description": "Esta função retorna um conjunto de dados para representar um DATAMATRIX.",
      "parameters": [
        {
          "name": "valor"
        },
        {
          "name": "cor"
        },
        {
          "name": "cor de fundo"
        },
        {
          "name": "Modo ecc"
        },
        {
          "name": "ecc200Tamanho do Símbolo"
        },
        {
          "name": "ecc200Modo de Codificação"
        },
        {
          "name": "ecc00_140Tamanho do Símbolo"
        },
        {
          "name": "estruturadoAppend"
        },
        {
          "name": "estruturaNúmero"
        },
        {
          "name": "identificador de arquivo"
        },
        {
          "name": "zonaquietaesquerda"
        },
        {
          "name": "zonaquietadireita"
        },
        {
          "name": "zona tranquilaTop"
        },
        {
          "name": "zonaquietafundo"
        }
      ]
    },
    "FILTER": {
      "description": "Esta função filtra um intervalo ou matriz.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "incluir"
        },
        {
          "name": "se_vazio",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "RANDARRAY": {
      "description": "Esta função retorna uma matriz de números aleatórios.",
      "parameters": [
        {
          "name": "linhas"
        },
        {
          "name": "colunas"
        },
        {
          "name": "mínimo"
        },
        {
          "name": "máx"
        },
        {
          "name": "número_inteiro"
        }
      ]
    },
    "SEQUENCE": {
      "description": "Esta função retorna uma sequência de números.",
      "parameters": [
        {
          "name": "linhas"
        },
        {
          "name": "colunas"
        },
        {
          "name": "começar"
        },
        {
          "name": "etapa"
        }
      ]
    },
    "SINGLE": {
      "description": "Esta função retorna um único valor quando recebe um valor, intervalo ou matriz.",
      "parameters": [
        {
          "name": "valor"
        }
      ]
    },
    "SORT": {
      "description": "Esta função classifica um intervalo ou matriz.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "índice_de_classificação"
        },
        {
          "name": "ordem_de_classificação"
        },
        {
          "name": "por_col"
        }
      ]
    },
    "SORTBY": {
      "description": "Esta função classifica um intervalo ou matriz com base nos valores em um intervalo ou matriz correspondente.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "por_matriz1"
        },
        {
          "name": "ordem_de_classificação1"
        },
        {
          "name": "por_array2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "ordem_de_classificação2",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "UNIQUE": {
      "description": "Esta função retorna os valores exclusivos de um intervalo ou matriz.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "por_col",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "exatamente_uma_vez",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "QUERY": {
      "description": "Esta função retorna dados de tabelas do gerenciador de dados em uma planilha.",
      "parameters": [
        {
          "name": "tabelaELinhas"
        },
        {
          "name": "colunas"
        },
        {
          "name": "retornarObjeto"
        }
      ]
    },
    "LET": {
      "description": "Esta função atribui resultados de cálculos a nomes. Útil para armazenar cálculos e valores intermediários definindo nomes dentro de uma fórmula. Esses nomes se aplicam somente dentro do escopo da função LET.",
      "parameters": [
        {
          "name": "nome1"
        },
        {
          "name": "nome_valor1"
        },
        {
          "name": "nome2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "nome_valor2",
          "repeatable": "verdadeiro"
        },
        {
          "name": "cálculo"
        }
      ]
    },
    "IMAGE": {
      "description": "Esta função insere uma URL ou uma string base64 para mostrar uma imagem na célula",
      "parameters": [
        {
          "name": "fonte"
        },
        {
          "name": "[texto_alt]"
        },
        {
          "name": "[dimensionamento]"
        },
        {
          "name": "[altura]"
        },
        {
          "name": "[largura]"
        },
        {
          "name": "[clipeY]"
        },
        {
          "name": "[clipX]"
        },
        {
          "name": "[altura do clipe]"
        },
        {
          "name": "[largura do clipe]"
        },
        {
          "name": "[vAlinhar]"
        },
        {
          "name": "[hAlinhar]"
        }
      ]
    },
    "GETPIVOTDATA": {
      "description": "Esta função extrai dados armazenados em uma Tabela Dinâmica",
      "parameters": [
        {
          "name": "campo_de_dados"
        },
        {
          "name": "tabela_dinâmica"
        },
        {
          "name": "campo1, item1",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "WEBSERVICE": {
      "description": "Esta função retorna dados de um serviço web",
      "parameters": [
        {
          "name": "url"
        }
      ]
    },
    "FILTERJSON": {
      "description": "Esta função analisa uma string JSON para um valor escalar, um objeto ou uma matriz de objetos.",
      "parameters": [
        {
          "name": "sequência_json"
        }
      ]
    },
    "ASC": {
      "description": "A função ASC altera caracteres de largura total (byte duplo) para caracteres de meia largura (byte único). Use com conjuntos de caracteres de byte duplo (DBCS).",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "DBCS": {
      "description": "A função DBCS converte letras de meia largura (byte único) dentro de uma sequência de caracteres em caracteres de largura total (byte duplo).",
      "parameters": [
        {
          "name": "texto"
        }
      ]
    },
    "LAMBDA": {
      "description": "Cria um valor de função, que pode ser chamado dentro de fórmulas.",
      "parameters": [
        {
          "name": "parâmetro_ou_cálculo"
        },
        {
          "name": "parâmetro_ou_cálculo",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "MAP": {
      "description": "Retorna uma matriz formada pelo mapeamento de cada valor na(s) matriz(s) para um novo valor aplicando um LAMBDA para criar um novo valor.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "lambda_ou_matriz",
          "repeatable": "verdadeiro"
        }
      ]
    },
    "REDUCE": {
      "description": "Reduz uma matriz a um valor acumulado aplicando um LAMBDA a cada valor e retornando o valor total no acumulador.",
      "parameters": [
        {
          "name": "valor_init"
        },
        {
          "name": "variedade"
        },
        {
          "name": "função"
        }
      ]
    },
    "SCAN": {
      "description": "Examina uma matriz aplicando um LAMBDA a cada valor e retorna uma matriz que possui cada valor intermediário.",
      "parameters": [
        {
          "name": "valor_init",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "variedade"
        },
        {
          "name": "função"
        }
      ]
    },
    "MAKEARRAY": {
      "description": "Retorna uma matriz calculada de um tamanho de linha e coluna especificado, aplicando um LAMBDA.",
      "parameters": [
        {
          "name": "linhas"
        },
        {
          "name": "cols"
        },
        {
          "name": "função"
        }
      ]
    },
    "BYCOL": {
      "description": "Aplica um LAMBDA a cada coluna e retorna uma matriz dos resultados. Por exemplo, se a matriz original tiver 3 colunas por 2 linhas, a matriz retornada terá 3 colunas por 1 linha.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "função"
        }
      ]
    },
    "BYROW": {
      "description": "Aplica um LAMBDA a cada linha e retorna uma matriz dos resultados. Por exemplo, se a matriz original tiver 3 colunas por 2 linhas, a matriz retornada terá 1 coluna por 2 linhas.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "função"
        }
      ]
    },
    "PERCENTOF": {
      "description": "Retorna a porcentagem de um subconjunto de um determinado conjunto de dados.",
      "parameters": [
        {
          "name": "subconjunto_de_dados"
        },
        {
          "name": "dados_todos"
        }
      ]
    },
    "GROUPBY": {
      "description": "Agregar valores por campos de linha.",
      "parameters": [
        {
          "name": "campos_de_linha"
        },
        {
          "name": "valores"
        },
        {
          "name": "função"
        },
        {
          "name": "cabeçalhos_de_campo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "profundidade_total",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "ordem_de_classificação",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "matriz_de_filtro",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "relacionamento_de_campo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "PIVOTBY": {
      "description": "Agregar valores por linhas e colunas.",
      "parameters": [
        {
          "name": "campos_de_linha"
        },
        {
          "name": "campos_col"
        },
        {
          "name": "valores"
        },
        {
          "name": "função"
        },
        {
          "name": "cabeçalhos_de_campo",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "profundidade_total_da_linha",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "ordem_de_classificação_de_linhas",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "profundidade_total_da_coluna",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "col_sort_order",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "matriz_de_filtro",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "relativo_a",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "ISOMITTED": {
      "description": "Verifica se o valor em um LAMBDA está faltando e retorna TRUE ou FALSE.",
      "parameters": [
        {
          "name": "argumento"
        }
      ]
    },
    "TEXTBEFORE": {
      "description": "Retorna o texto que ocorre antes de um determinado caractere ou string.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "delimitador"
        },
        {
          "name": "número_da_instância",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "modo_de_correspondência",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "0",
              "description": "Maiúsculas e minúsculas"
            },
            {
              "value": "1",
              "description": "Não diferencia maiúsculas de minúsculas"
            }
          ]
        },
        {
          "name": "fim_de_partida",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "se_não_for_encontrado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "TEXTAFTER": {
      "description": "Retorna o texto que ocorre depois do caractere ou string fornecido.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "delimitador"
        },
        {
          "name": "número_da_instância",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "modo_de_correspondência",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "0",
              "description": "Maiúsculas e minúsculas"
            },
            {
              "value": "1",
              "description": "Não diferencia maiúsculas de minúsculas"
            }
          ]
        },
        {
          "name": "fim_de_partida",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "se_não_for_encontrado",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "TEXTSPLIT": {
      "description": "Divide sequências de texto usando delimitadores de coluna e linha.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "delimitador_col"
        },
        {
          "name": "delimitador_de_linha",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "ignorar_vazio",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "modo_de_correspondência",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "0",
              "description": "Maiúsculas e minúsculas"
            },
            {
              "value": "1",
              "description": "Não diferencia maiúsculas de minúsculas"
            }
          ]
        },
        {
          "name": "almofada_com",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SJS.REGEXEXTRACT": {
      "description": "Extrai substrings correspondentes de acordo com uma expressão regular.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "expressão_regular"
        },
        {
          "name": "modificadores",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SJS.REGEXMATCH": {
      "description": "Se um pedaço de texto corresponde a uma expressão regular.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "expressão_regular"
        },
        {
          "name": "modificadores",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SJS.REGEXREPLACE": {
      "description": "Substitui parte de uma sequência de texto por uma sequência de texto diferente usando expressões regulares.",
      "parameters": [
        {
          "name": "texto"
        },
        {
          "name": "expressão_regular"
        },
        {
          "name": "substituição"
        },
        {
          "name": "modificadores",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "VSTACK": {
      "description": "Acrescenta matrizes verticalmente e em sequência para retornar uma matriz maior.",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "HSTACK": {
      "description": "Acrescenta matrizes horizontalmente e em sequência para retornar uma matriz maior.",
      "parameters": [
        {
          "name": "matriz1"
        },
        {
          "name": "matriz2",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "TOROW": {
      "description": "Retorna a matriz em uma única linha.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "ignorar",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "digitalizar_por_coluna",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "TOCOL": {
      "description": "Retorna a matriz em uma única coluna.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "ignorar",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "digitalizar_por_coluna",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "WRAPROWS": {
      "description": "Agrupa a linha ou coluna de valores fornecida por linhas após um número especificado de elementos para formar uma nova matriz.",
      "parameters": [
        {
          "name": "vetor"
        },
        {
          "name": "contagem_de_envoltórios"
        },
        {
          "name": "almofada_com",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "WRAPCOLS": {
      "description": "Agrupa a linha ou coluna de valores fornecida por colunas após um número especificado de elementos para formar uma nova matriz.",
      "parameters": [
        {
          "name": "vetor"
        },
        {
          "name": "contagem_de_envoltórios"
        },
        {
          "name": "almofada_com",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "TAKE": {
      "description": "Retorna um número especificado de linhas ou colunas contíguas do início ou do fim de uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "linhas"
        },
        {
          "name": "colunas",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "DROP": {
      "description": "Exclui um número especificado de linhas ou colunas do início ou do fim de uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "linhas"
        },
        {
          "name": "colunas",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "EXPAND": {
      "description": "Expande ou preenche uma matriz para dimensões de linha e coluna especificadas.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "linhas"
        },
        {
          "name": "colunas",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "almofada_com",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "CHOOSEROWS": {
      "description": "Retorna as linhas especificadas de uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "linha_num1"
        },
        {
          "name": "linha_num2",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "CHOOSECOLS": {
      "description": "Retorna as colunas especificadas de uma matriz.",
      "parameters": [
        {
          "name": "variedade"
        },
        {
          "name": "coluna_num1"
        },
        {
          "name": "coluna_num2",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "SJS.UUID": {
      "description": "Retorna o UUID aleatório.",
      "parameters": [
        {
          "name": "número"
        }
      ]
    },
    "SJS.ENDWITH": {
      "description": "Retorna se str1 termina com str2.",
      "parameters": [
        {
          "name": "dentro_do_texto"
        },
        {
          "name": "encontrar_texto"
        },
        {
          "name": "modo_de_correspondência",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "0",
              "description": "Maiúsculas e minúsculas"
            },
            {
              "value": "1",
              "description": "Não diferencia maiúsculas de minúsculas"
            }
          ]
        }
      ]
    },
    "SJS.STARTWITH": {
      "description": "Retorna se a string str1 começa com str2.",
      "parameters": [
        {
          "name": "dentro_do_texto"
        },
        {
          "name": "encontrar_texto"
        },
        {
          "name": "modo_de_correspondência",
          "repeatable": "falso",
          "optional": "verdadeiro",
          "enum": [
            {
              "value": "0",
              "description": "Maiúsculas e minúsculas"
            },
            {
              "value": "1",
              "description": "Não diferencia maiúsculas de minúsculas"
            }
          ]
        }
      ]
    },
    "R.INDEX": {
      "description": "(ReportSheet Specific) Retorna o índice da célula especificada na extensão medida pai.",
      "parameters": [
        {
          "name": "referência"
        },
        {
          "name": "referência_de_contexto",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "R.RANK": {
      "description": "(ReportSheet Specific) Retorna a classificação da célula especificada no nó pai.",
      "parameters": [
        {
          "name": "referência"
        },
        {
          "name": "referência_de_contexto",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "ordem",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "modo_de_classificação",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "SJS.FISCALYEAR": {
      "description": "retorno do ano fiscal.",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "mês_início",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "R.R": {
      "description": "(ReportSheet Specific) Deslocamento relativo de acordo com a célula especificada.",
      "parameters": [
        {
          "name": "referência"
        },
        {
          "name": "desvio"
        }
      ]
    },
    "R.A": {
      "description": "(ReportSheet Specific) Deslocamento absoluto com base na célula especificada.",
      "parameters": [
        {
          "name": "referência"
        },
        {
          "name": "desvio"
        }
      ]
    },
    "R.V": {
      "description": "(ReportSheet Specific) Retorna os dados da célula base no deslocamento ou contexto especificado.",
      "parameters": [
        {
          "name": "referência"
        },
        {
          "name": "deslocamento | referência_de_contexto | \\\"PáginaAtual\\",
          "repeatable": "verdadeiro",
          "optional": "verdadeiro"
        }
      ]
    },
    "R.CURRENTPAGE": {
      "description": "(ReportSheet Specific) Retorna o número da página atual do relatório."
    },
    "R.PAGESCOUNT": {
      "description": "(ReportSheet Specific) Retorna o número total de relatórios atuais."
    },
    "R.PROPORTION": {
      "description": "(ReportSheet Specific) Retorna a porcentagem da célula especificada em seu nó pai.",
      "parameters": [
        {
          "name": "valor_referência"
        },
        {
          "name": "referência_de_contexto1",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "referência_de_contexto2",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "R.CUMULATIVE": {
      "description": "(Específico do ReportSheet) Retorna o valor acumulado da célula atual.",
      "parameters": [
        {
          "name": "valor_referência"
        },
        {
          "name": "referência_de_contexto1",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "referência_de_contexto2",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "R.MOM": {
      "description": "(ReportSheet Specific) Retorna os dados do anel da célula de destino.",
      "parameters": [
        {
          "name": "valor_referência"
        },
        {
          "name": "referência_de_contexto1",
          "repeatable": "falso",
          "optional": "verdadeiro"
        },
        {
          "name": "referência_de_contexto2",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    },
    "R.YOY": {
      "description": "(Específico do ReportSheet) Retorna os dados anuais da célula de destino.",
      "parameters": [
        {
          "name": "valor_referência"
        },
        {
          "name": "referência_de_contexto1"
        },
        {
          "name": "referência_de_contexto2",
          "repeatable": "falso",
          "optional": "verdadeiro"
        }
      ]
    }
  },
  "TableFunctions": {
    "All": {
      "name": "#Todos",
      "description": "Retorna todo o conteúdo da tabela ou colunas especificadas da tabela, incluindo cabeçalhos de coluna, dados e linhas de total."
    },
    "Data": {
      "name": "#Dados",
      "description": "Retorna as células de dados da tabela ou colunas de tabela especificadas."
    },
    "Headers": {
      "name": "#Cabeçalhos",
      "description": "Retorna os cabeçalhos das colunas da tabela ou colunas da tabela especificada."
    },
    "Totals": {
      "name": "#Totais",
      "description": "Retorna o total de linhas da tabela ou colunas da tabela especificada."
    },
    "thisRow": {
      "name": "#Esta Linha",
      "description": "Esta fileira."
    }
  }
}

exports.data = custom_resource;