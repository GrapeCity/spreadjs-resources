var custom_resource = {
  "Common": {
    "Exp_InvalidDateFormat": "Invalid date format pattern",
    "Exp_InvalidExponentFormat": "invalid exponent format",
    "Exp_InvalidSemicolons": "invalid format : too many semicolons",
    "Exp_InvalidNumberGroupSize": "NumberGroupSize must be between 1 and 9, except for the last element, which can be zero.",
    "Exp_BadFormatSpecifier": "Bad Format Specifier",
    "Exp_InvalidNumberFormat": "Invalid number format pattern",
    "Exp_InvalidCast": "InvalidCastException",
    "Exp_Separator": "numberDecimalSeparator, listSeparator and arrayListSeparator should be different in culture info.",
    "Exp_TokenIsNull": "token is null",
    "Exp_InvalidBackslash": "the '\\\\' cannot be evaluated",
    "Exp_FormatIllegal": "format is illegal.",
    "Exp_ValueIsNull": "value is null",
    "Exp_DuplicatedDescriptor": "The type of descriptor was added.",
    "Exp_TokenIllegal": "token is illegal.",
    "Exp_ValueIllegal": "value is illegal."
  },
  "CalcEngine": {
    "Exp_InvalidCast": "Invalid Cast Exception",
    "Exp_FormulaInvalidChar": "The formula contains an invalid character: '{0}' at index on {1}",
    "Exp_FormulaInvalid": "Invalid Formula",
    "Exp_InvalidFunctionName": "Invalid function name",
    "Exp_InvalidOverrideFunction": "Cannot override built-in function",
    "Exp_InvalidArray": "Invalid array",
    "Exp_OverrideNotAllowed": "Attempt to override function while override is not allowed",
    "Exp_NoSyntax": "No syntax '{0}' to match the syntax '{1}'.",
    "Exp_IsValid": "'{0}' is invalid.",
    "Exp_InvalidParameters": "Invalid function parameter at {0}.",
    "Exp_InvalidArrayColumns": "The length of array columns are not equal at {0}.",
    "Exp_ExprIsNull": "The argument 'expr' is null",
    "Exp_InvalidOperation": "Invalid Operation Exception",
    "Exp_ArgumentNull": "Argument Null Exception",
    "Exp_CriteriaIsNull": "Criteria is null",
    "Exp_Format": "Format",
    "Exp_ArrayFormulaPart": "Cannot change part of an array.",
    "Exp_NotSupported": "Not Supported Exception",
    "Exp_DuplicatedChar": "Duplicated Character",
    "Exp_ArgumentOutOfRangeException": "Argument Out Of Range Exception",
    "Exp_ArgumentException": "Argument Exception",
    "Aggregate_GrandTotal": "Grand Total",
    "Aggregate_Total": "Total",
    "Fbx_Summary": "Summary",
    "Fbx_TableName_Description": "Table name for ",
    "Fbx_TableSheetName_Description": "TableSheet name for ",
    "Fbx_CustomName_Description": "Custom name for "
  },
  "DataManager": {
    "Zve": {
      "WINDOW": {
        "description": "(TableSheet Specific) Determines the rows as the window by partitioning and ordering to apply the window function.",
        "parameters": [
          {
            "name": "window_function"
          },
          {
            "name": "partition_by",
            "optional": true
          },
          {
            "name": "order_by",
            "optional": true
          },
          {
            "name": "frame_rows\\\\range\\\\groups",
            "optional": true
          }
        ]
      },
      "WINDOWDEF": {
        "description": "(TableSheet Specific) Define a shorthand that allow to be reused by the WINDOW function.",
        "parameters": [
          {
            "name": "partition_by",
            "optional": true
          },
          {
            "name": "order_by",
            "optional": true
          },
          {
            "name": "frame_rows\\\\range\\\\groups",
            "optional": true
          }
        ]
      },
      "PARTITIONBY": {
        "description": "(TableSheet Specific) Divides the rows into partitions.",
        "parameters": [
          {
            "name": "field_function",
            "optional": false,
            "repeatable": true
          }
        ]
      },
      "ORDERBY": {
        "description": "(TableSheet Specific) Defines the logical order in each partition.",
        "parameters": [
          {
            "name": "field_function",
            "optional": false,
            "repeatable": true
          }
        ]
      },
      "ORDERASC": {
        "description": "(TableSheet Specific) Specifies ascending order for the specified field.",
        "parameters": [
          {
            "name": "field_function"
          }
        ]
      },
      "ORDERDESC": {
        "description": "(TableSheet Specific) Specifies descending order for the specified field.",
        "parameters": [
          {
            "name": "field_function"
          }
        ]
      },
      "FRAMEROWS": {
        "description": "(TableSheet Specific) Limit the row set of the window by specified the beginning or ending rows against the current row.",
        "parameters": [
          {
            "name": "beginning_function",
            "optional": false,
            "repeatable": false,
            "enum": [
              {
                "value": "-1",
                "description": "Indicates the upper boundary of the partition."
              },
              {
                "value": "[@]",
                "description": "Indicates the current row or value."
              },
              {
                "value": "[@-n]",
                "description": "Indicates the n preceding of the current, if the order is ascending."
              },
              {
                "value": "[@+n]",
                "description": "Indicates the n preceding of the current, if the order is descending."
              }
            ]
          },
          {
            "name": "ending_function",
            "optional": true,
            "repeatable": false,
            "enum": [
              {
                "value": "-1",
                "description": "Indicates the lower following of the partition."
              },
              {
                "value": "[@]",
                "description": "Indicates the current row or value."
              },
              {
                "value": "[@+n]",
                "description": "Indicates the n following of the current, if the order is ascending."
              },
              {
                "value": "[@-n]",
                "description": "Indicates the n following of the current, if the order is descending."
              }
            ]
          },
          {
            "name": "exclude_mode",
            "optional": true,
            "repeatable": false,
            "enum": [
              {
                "value": "0",
                "description": "This is the default case, no rows are excluded."
              },
              {
                "value": "1",
                "description": "The current row is excluded, the other peers of the current row remain."
              },
              {
                "value": "2",
                "description": "The current row and the peers are all excluded."
              },
              {
                "value": "3",
                "description": "The current row remain, the other peers are excluded."
              }
            ]
          }
        ]
      },
      "FRAMERANGE": {
        "description": "(TableSheet Specific) Limit the row set of the window by specified the beginning or ending range with respect to the value in the current row.",
        "parameters": [
          {
            "name": "beginning_function",
            "optional": false,
            "repeatable": false,
            "enum": [
              {
                "value": "-1",
                "description": "Indicates the upper boundary of the partition."
              },
              {
                "value": "[@]",
                "description": "Indicates the current row or value."
              },
              {
                "value": "[@-n]",
                "description": "Indicates the n preceding of the current, if the order is ascending."
              },
              {
                "value": "[@+n]",
                "description": "Indicates the n preceding of the current, if the order is descending."
              }
            ]
          },
          {
            "name": "ending_function",
            "optional": true,
            "repeatable": false,
            "enum": [
              {
                "value": "-1",
                "description": "Indicates the lower following of the partition."
              },
              {
                "value": "[@]",
                "description": "Indicates the current row or value."
              },
              {
                "value": "[@+n]",
                "description": "Indicates the n following of the current, if the order is ascending."
              },
              {
                "value": "[@-n]",
                "description": "Indicates the n following of the current, if the order is descending."
              }
            ]
          },
          {
            "name": "exclude_mode",
            "optional": true,
            "repeatable": false,
            "enum": [
              {
                "value": "0",
                "description": "This is the default case, no rows are excluded."
              },
              {
                "value": "1",
                "description": "The current row is excluded, the other peers of the current row remain."
              },
              {
                "value": "2",
                "description": "The current row and the peers are all excluded."
              },
              {
                "value": "3",
                "description": "The current row remain, the other peers are excluded."
              }
            ]
          }
        ]
      },
      "FRAMEGROUPS": {
        "description": "(TableSheet Specific) Limit the row set of the window by specified the beginning or ending range with respect to the counting \\\"groups\\\" relative to the current group.",
        "parameters": [
          {
            "name": "beginning_function",
            "optional": false,
            "repeatable": false,
            "enum": [
              {
                "value": "-1",
                "description": "Indicates the upper boundary of the partition."
              },
              {
                "value": "[@]",
                "description": "Indicates the current row or value."
              },
              {
                "value": "[@-n]",
                "description": "Indicates the n preceding of the current, if the order is ascending."
              },
              {
                "value": "[@+n]",
                "description": "Indicates the n preceding of the current, if the order is descending."
              }
            ]
          },
          {
            "name": "ending_function",
            "optional": true,
            "repeatable": false,
            "enum": [
              {
                "value": "-1",
                "description": "Indicates the lower following of the partition."
              },
              {
                "value": "[@]",
                "description": "Indicates the current row or value."
              },
              {
                "value": "[@+n]",
                "description": "Indicates the n following of the current, if the order is ascending."
              },
              {
                "value": "[@-n]",
                "description": "Indicates the n following of the current, if the order is descending."
              }
            ]
          },
          {
            "name": "exclude_mode",
            "optional": true,
            "repeatable": false,
            "enum": [
              {
                "value": "0",
                "description": "This is the default case, no rows are excluded."
              },
              {
                "value": "1",
                "description": "The current row is excluded, the other peers of the current row remain."
              },
              {
                "value": "2",
                "description": "The current row and the peers are all excluded."
              },
              {
                "value": "3",
                "description": "The current row remain, the other peers are excluded."
              }
            ]
          }
        ]
      },
      "CUMEDIST": {
        "description": "(TableSheet Specific) The cumulative distribution of a value within a group of values."
      },
      "W_PERCENTRANK": {
        "description": "(TableSheet Specific) Calculates the percentage of the relative rank of a row within a partition of rows."
      },
      "ROWNUMBER": {
        "description": "(TableSheet Specific) Returns the number of the current row within its partition."
      },
      "W_RANK": {
        "description": "(TableSheet Specific) Returns the rank of each row within the partition of a result set."
      },
      "DENSERANK": {
        "description": "(TableSheet Specific) Returns the rank of the current row within its partition, without gaps."
      },
      "LEAD": {
        "description": "(TableSheet Specific) Provides access to the value from a row at a given physical offset that follows the current row.",
        "parameters": [
          {
            "name": "value_function"
          },
          {
            "name": "offset",
            "optional": true
          },
          {
            "name": "default_value",
            "optional": true
          }
        ]
      },
      "LAG": {
        "description": "(TableSheet Specific) Provides access to the value from a row at a given physical offset that before the current row.",
        "parameters": [
          {
            "name": "value_function"
          },
          {
            "name": "offset",
            "optional": true
          },
          {
            "name": "default_value",
            "optional": true
          }
        ]
      },
      "NTILE": {
        "description": "(TableSheet Specific) Divides a partition into N buckets, assigns each row its bucket number.",
        "parameters": [
          {
            "name": "n"
          }
        ]
      },
      "FIRSTVALUE": {
        "description": "(TableSheet Specific) Access to the value from the first row within the window frame.",
        "parameters": [
          {
            "name": "value_function"
          }
        ]
      },
      "LASTVALUE": {
        "description": "(TableSheet Specific) Access to the value from the last row within the window frame.",
        "parameters": [
          {
            "name": "value_function"
          }
        ]
      },
      "NTHVALUE": {
        "description": "(TableSheet Specific) Access to the value from the n-th row within the window frame.",
        "parameters": [
          {
            "name": "value_function"
          },
          {
            "name": "n"
          }
        ]
      },
      "CALCULATE": {
        "description": "(TableSheet Grouping Specific) Expand the group context for the formula.",
        "parameters": [
          {
            "name": "formula"
          },
          {
            "name": "remove_filters_function"
          }
        ]
      },
      "REMOVEFILTERS": {
        "description": "(TableSheet Grouping Specific) Select the context of the upper group level.",
        "parameters": [
          {
            "name": "group_field_function",
            "optional": true,
            "repeatable": true
          }
        ]
      },
      "CHILDREN": {
        "description": "(TableSheet Hierarchy Specific) Retrieves the value of the children that be a certain offset from the parent.",
        "parameters": [
          {
            "name": "level_offset"
          },
          {
            "name": "field_function"
          }
        ]
      },
      "ONLYCHILDREN": {
        "description": "(TableSheet Hierarchy Specific) Retrieves the value of the children that be not parent.",
        "parameters": [
          {
            "name": "field_function"
          }
        ]
      },
      "PARENT": {
        "description": "(TableSheet Hierarchy Specific) Retrieves the value of the parent that be a certain offset from the current.",
        "parameters": [
          {
            "name": "level_offset"
          },
          {
            "name": "field_function"
          }
        ]
      },
      "LEVEL": {
        "description": "(TableSheet Hierarchy Specific) Retrieves the level of the current."
      },
      "LEVELROWNUMBER": {
        "description": "(TableSheet Hierarchy Specific) Retrieves the row number of the current under its parent."
      }
    }
  },
  "Sheets": {
    "Exp_NotSupported": "Not supported exception",
    "Exp_PasteExtentIsNull": "pasteExtent is null",
    "Exp_InvalidPastedArea": "The pasted area should have the same size as the copy or cut area.",
    "Exp_MultipleSelections": "This action won't work on multiple selections.",
    "Exp_ChangePartOfArray": "Cannot change part of an array.",
    "Exp_InvalidAndSpace": "Invalid {0}: {1} (must be between {2} and {3}).",
    "Exp_SrcIsNull": "The argument 'src' is null",
    "Exp_DestIsNull": "The argument 'dest' is null",
    "Exp_InvalidCustomFunction": "invalid custom function",
    "Exp_InvalidCustomName": "invalid custom name",
    "Exp_CustomNameBothInUse": "Both the current name and new name are referenced in cell formulas",
    "Exp_IndexOutOfRange": "Index is out of range!",
    "Exp_InvalidRange": "Invalid range",
    "Exp_NotAFunction": "Not A Function",
    "Exp_ArgumentOutOfRange": "ArgumentOutOfRange",
    "Exp_PasteSourceCellsLocked": "Source sheet's cells are locked.",
    "Exp_InvalidCopyPasteSize": "The copy and paste areas are not the same size.",
    "Exp_PasteDestinationCellsLocked": "The cell you are trying to change is protected and therefore read-only.",
    "Exp_PasteChangeMergeCell": "Cannot change part of a merged cell.",
    "Tip_Row": "Row: ",
    "Tip_Column": "Column: ",
    "Tip_Column_Offset": "Offset: ",
    "Tip_Height": "Height: {0} pixels",
    "Tip_Width": "Width: {0} pixels",
    "NewTab": "New...",
    "Exp_EmptyNamedStyle": "The name of named style cannot be empty or null",
    "Exp_SheetNameInvalid": "The sheet name can not be blank or contains these characters : *, :, [, ], ?, \\\\, /",
    "Exp_SheetNameConflict": "That name is already taken. Try a different one.",
    "Exp_ArrayFormulaSpan": "Array formulas are not valid in merged cells.",
    "Exp_DestSheetIsNull": "destSheet is null",
    "Exp_SheetIsNull": "sheet is null.",
    "Exp_OverlappingSpans": "This operation will cause overlapping spans.",
    "NeedCanvasSupport": "You need a browser which full supports HTML5 Canvas to run SpreadJS",
    "ARIA_Resize": "resize",
    "ARIA_First": "first",
    "ARIA_PreviousArrow": "previous arrow",
    "ARIA_NextArrow": "next arrow",
    "ARIA_Last": "last",
    "ARIA_PreviousButton": "previous button",
    "ARIA_NextButton": "next button",
    "ARIA_SheetTab": "sheet tab",
    "ARIA_NewSheet": "new sheet",
    "ARIA_Blank": "blank",
    "ARIA_Scrollbar_Left_Button": "scrollbar left button",
    "ARIA_Scrollbar_Top_Button": "scrollbar top button",
    "ARIA_Scrollbar_Thumb_Button": "scrollbar thumb button",
    "ARIA_Scrollbar_Right_Button": "scrollbar right button",
    "ARIA_Scrollbar_Bottom_Button": "scrollbar bottom button",
    "ARIA_Scrollbar_TRACK_Button": "scrollbar track button",
    "ARIA_Cell": "cell",
    "ARIA_HasValue": "has value {0}",
    "ARIA_HasFormula": "has formula {0}",
    "ARIA_HasCheckbox": "has checkbox {0}",
    "ARIA_HasButton": "has button {0}",
    "ARIA_HasHyperlink": "has hyperlink {0}",
    "ARIA_HasComment": "has comment {0}",
    "ARIA_RowHeader": "row header",
    "ARIA_ColumnHeader": "column header",
    "SHEET_NAME": "Sheet",
    "REPORT_SUMMARY": "Sum",
    "Exp_InsertCopiedCutCells": "This selection is not valid. The copy/paste area must be the same size",
    "Exp_InsertCopiedCutCellsOnSpanTable": "This won’t work because it would move cells in a table on your worksheet or will cause some merged cells to unmerge.",
    "Exp_InsertCopiedCutCellsNoRange": "New cells can not be inserted as there are non-empty cells that would extend beyond the worksheet.",
    "Exp_InsertCopiedCutCellsOverlap": "This selection isn't valid. Make sure the copy and paste areas don't overlap unless they are the same size and shape.",
    "Exp_InsertCopiedCutCellsAffectTable": "You can't rearrange cells within a table this way, because it might affect other table cells in an unexpected way.",
    "Exp_InvalidSortArrayFormulaInRange": "Can't sort current range as array formula exist.",
    "Exp_InvalidSortSpanInRange": "Can't sort current range as span exist.",
    "Exp_InvalidSortPartTableOrMultiTableInRange": "Can't sort current range as part table or more than one table exist.",
    "Exp_InvalidOperationInProtect": "The cell or chart you're trying to change is on a protected sheet. To make a change, unprotect the sheet.",
    "EXP_IO": "File read and write exception.",
    "EXP_FILE_FORMAT": "Incorrect file format.",
    "EXP_NO_PASSWORD": "The Excel file cannot be opened because the workbook/worksheet is password protected.",
    "EXP_INVALID_PASSWORD": "The specified password is incorrect.",
    "NORMAL": "Normal",
    "GENERAL": "General",
    "EXP_UNSUPPORT_CRYPTO_ALGORITHM": "Unsupported cryptographic algorithms",
    "Exp_InvalidOperationSizeLimitExceeded": "File size exceeds set limit the max size.",
    "STEP": {
      "start": "start load {0}",
      "loadFileData": "load {0}'s data to spread",
      "loadSheetData": "load {0}'s data",
      "startCalc": "start reCalc",
      "loadSheetFormula": "load {0}'s formula",
      "parseFile": "parse {0} content"
    },
    "pasteSpecialOptionDialog": {
      "title": "Paste Special",
      "paste": "Paste",
      "pasteOptions": {
        "all": "All",
        "formulas": "Formulas",
        "values": "Values",
        "formats": "Formats",
        "comments": "Comments",
        "validation": "Validation",
        "usingSourceTheme": "All using Source theme",
        "noBorders": "All except borders",
        "columnWidth": "Column widths",
        "formulasAndNumberFormats": "Formulas and number formats",
        "valueAndNumberFormats": "Value and number formats"
      },
      "operation": "Operation",
      "operationOptions": {
        "none": "None",
        "add": "Add",
        "subtract": "Subtract",
        "multiply": "Multiply",
        "divide": "Divide"
      },
      "skipBlanks": "Skip blanks",
      "transpose": "Transpose",
      "pasteLink": "Paste Link"
    },
    "ok": "OK",
    "cancel": "Cancel",
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
    "Exp_NotSupportedDataSource": "The data source is not supported!"
  },
  "Outlines": {
    "Exp_InvalidIndex": "Invalid index",
    "Exp_InvalidCount": "Invalid count",
    "Exp_InvalidLevel": "Invalid level",
    "Exp_GroupInfoIsNull": "groupInfo is null",
    "Exp_GROUP_PROTECTED": "You can not use this command on a protected sheet. To use this command, you must first unprotect sheet."
  },
  "ConditionalFormatting": {
    "Exp_RuleIsNull": "The argument 'rule' is null",
    "Exp_NotSupported": "Not supported exception"
  },
  "Touch": {
    "ToolStrip_PasteText": "Paste",
    "ToolStrip_CutText": "Cut",
    "ToolStrip_CopyText": "Copy",
    "ToolStrip_AutoFillText": "AutoFill"
  },
  "FloatingObjects": {
    "Exp_FloatingObjectHasSameNameError": "The current worksheet already has a floating object with the same name.",
    "Exp_FloatingObjectNameEmptyError": "Floating object must have name"
  },
  "CellTypes": {
    "OK": "OK",
    "Cancel": "Cancel",
    "Calendar_ShortWeeks_1": "MON",
    "Calendar_ShortWeeks_2": "TUE",
    "Calendar_ShortWeeks_3": "WED",
    "Calendar_ShortWeeks_4": "THU",
    "Calendar_ShortWeeks_5": "FRI",
    "Calendar_ShortWeeks_6": "SAT",
    "Calendar_ShortWeeks_7": "SUN",
    "Calendar_Weeks_1": "Monday",
    "Calendar_Weeks_2": "Tuesday",
    "Calendar_Weeks_3": "Wednesday",
    "Calendar_Weeks_4": "Thursday",
    "Calendar_Weeks_5": "Friday",
    "Calendar_Weeks_6": "Saturday",
    "Calendar_Weeks_7": "Sunday",
    "Calendar_ShortMonths_1": "JAN",
    "Calendar_ShortMonths_2": "FEB",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "APR",
    "Calendar_ShortMonths_5": "MAY",
    "Calendar_ShortMonths_6": "JUN",
    "Calendar_ShortMonths_7": "JUL",
    "Calendar_ShortMonths_8": "AUG",
    "Calendar_ShortMonths_9": "SEP",
    "Calendar_ShortMonths_10": "OCT",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DEC",
    "Calendar_Months_1": "JANUARY",
    "Calendar_Months_2": "FEBRUARY",
    "Calendar_Months_3": "MARCH",
    "Calendar_Months_4": "APRIL",
    "Calendar_Months_5": "MAY",
    "Calendar_Months_6": "JUNE",
    "Calendar_Months_7": "JULY",
    "Calendar_Months_8": "AUGUST",
    "Calendar_Months_9": "SEPTEMBER",
    "Calendar_Months_10": "OCTOBER",
    "Calendar_Months_11": "NOVEMBER",
    "Calendar_Months_12": "DECEMBER",
    "Calendar_Time_AM": "AM",
    "Calendar_Time_PM": "PM",
    "Calendar_EraName_1": "M",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_Today": "Today",
    "Calendar_BuiltIn_Today": "Today",
    "Calendar_BuiltIn_Yesterday": "Yesterday",
    "Calendar_BuiltIn_Last7Days": "Last 7 Days",
    "Calendar_BuiltIn_ThisMonth": "This Month",
    "Calendar_BuiltIn_LastMonth": "Last Month",
    "Calendar_LastMonth": "Go to previous month",
    "Calendar_NextMonth": "Go to next month",
    "Calendar_LastYear": "Go to previous year",
    "Calendar_NextYear": "Go to next year",
    "Calendar_LastTenYear": "Go to previous ten years",
    "Calendar_NextTenYear": "Go to next ten years",
    "Quarter_Format_1": "Q1",
    "Quarter_Format_2": "Q2",
    "Quarter_Format_3": "Q3",
    "Quarter_Format_4": "Q4",
    "ThemeColor": "Theme Colors",
    "StandardColor": "Standard Colors",
    "Calculator_DivideByZeroInfo": "Cannot divide by zero.",
    "Calculator_InvalidInputInfo": "Invalid Input.",
    "Calculator_SqrtParameterException": "Invalid input for function.",
    "Calculator_OverFlowInfo": "Arithmetic operation resulted in an overflow.",
    "MultiColumn_InvalidDataSource": "Invalid data source. The formula should return an array.",
    "DataObject_MeetLock": "Cannot insert data because there's a locked cell in the way.",
    "DataObject_MeetSpan": "Cannot insert data because there's a merged cell in the way.",
    "DataObject_MeetTable": "Cannot insert data because a table in the way.",
    "FileUpload_Title": "+ Upload"
  },
  "Filter": {
    "Exp_InvalidColumnIndex": "Invalid column index.",
    "SortAscending": "Sort Ascending",
    "SortDescending": "Sort Descending",
    "OK": "OK",
    "Cancel": "Cancel",
    "Search": "Search",
    "CheckAll": "Check all",
    "UncheckAll": "Uncheck all",
    "Blanks": "(Blanks)",
    "Exp_FilterItemIsNull": "FilterItem is null.",
    "Show": "Show",
    "ShowRows": "Show rows where:",
    "And": "And",
    "Or": "Or",
    "SortColor": "Sort By Color",
    "FilterColor": "Filter By Color",
    "FilterCellTitle": "Filter By Cell Color",
    "FilterFontTitle": "Filter By Font Color",
    "SortCellTitle": "Sort By Cell Color",
    "SortFontTitle": "Sort By Font Color",
    "FontColor": "More Font Colors...",
    "CellColor": "More Cell Colors...",
    "NoFill": "No Fill",
    "Automatic": "Automatic",
    "Clear": "Clear Filter From {0}",
    "TextFilter": "Text Filters",
    "DateFilter": "Date Filters",
    "NumberFilter": "Number Filters",
    "Custom": "Custom Filter...",
    "Equal": "Equals...",
    "NotEqual": "Does Not Equal...",
    "GreaterThan": "Greater Than...",
    "GreaterOrEquals": "Greater Than Or Equal To...",
    "LessThan": "Less Than...",
    "LessThanOrEquals": "Less Than Or Equal To...",
    "Between": "Between...",
    "Top10": "Top 10...",
    "AboveAverage": "Above Average",
    "BelowAverage": "Below Average",
    "Begin": "Begins With...",
    "End": "Ends With...",
    "Contain": "Contains...",
    "NotContain": "Does Not Contain...",
    "Before": "Before...",
    "After": "After...",
    "Tomorrow": "Tomorrow",
    "Today": "Today",
    "Yesterday": "Yesterday",
    "NextWeek": "Next Week",
    "ThisWeek": "This Week",
    "LastWeek": "Last Week",
    "NextMonth": "Next Month",
    "ThisMonth": "This Month",
    "LastMonth": "Last Month",
    "NextQuarter": "Next Quarter",
    "ThisQuarter": "This Quarter",
    "LastQuarter": "Last Quarter",
    "NextYear": "Next Year",
    "ThisYear": "This Year",
    "LastYear": "Last Year",
    "YearToDate": "Year To Date",
    "AllDates": "All Dates in Period",
    "Top10Filter": "Top 10 Auto Filter",
    "CustomTitle": "Custom AutoFilter",
    "ColorTitle": "Available Cell Colors",
    "top": "top",
    "bottom": "bottom",
    "SortCell": "Select a cell color to sort by:",
    "SortFont": "Select a font color to sort by:",
    "FilterCell": "Select a cell color to filter by:",
    "FilterFont": "Select a font color to filter by:",
    "Selected": "Selected:",
    "IsEquals": "equals",
    "NotEquals": "does not equal",
    "IsGreaterThan": "is greater than",
    "IsGreaterOrEqual": "is greater than or equal to",
    "IsLess": "is less than",
    "LessOrEqual": "is less than or equal to",
    "IsBeginWith": "begins with",
    "NotBeginWith": "does not begin with",
    "IsEndWith": "ends with",
    "NotEndWith": "does not end with",
    "IsContain": "contains",
    "NotContains": "does not contain",
    "IsAfter": "is after",
    "AfterOrEqual": "is after or equal to",
    "IsBefore": "is before",
    "BeforeOrEqual": "is before or equal to",
    "Q1": "Quarter 1",
    "Q2": "Quarter 2",
    "Q3": "Quarter 3",
    "Q4": "Quarter 4",
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",
    "Explain1": "Use ? to represent any single character",
    "Explain2": "Use * to represent any series of characters",
    "Year": "",
    "Day": "",
    "add_current_filter": "Add current selection to filter",
    "invalidCondition": "Error in parse line"
  },
  "Tables": {
    "Exp_DragDropShiftTableCell": "This operation is not allowed. The operation is attempting to shift cells in a table on your worksheet.",
    "Exp_DragDropChangePartOfTable": "Cannot complete operation: You are attempting to change a portion of a table row or column in a way that is not allowed.",
    "Exp_TableEmptyNameError": "The table name cannot be empty.",
    "Exp_TableNameInvalid": "The table name is not valid.",
    "Exp_TableInvalidRow": "Invalid row index or row count.",
    "Exp_TableInvalidColumn": "Invalid column index or column count.",
    "Exp_TableIntersectError": "The tables cannot be intersected.",
    "Exp_TableHasSameNameError": "The current worksheet already exists in a table with the same name.",
    "Exp_TableRangeHasFilterError": "The current table range contains a filter range.",
    "Exp_TableDataSourceNullError": "Table datasource cannot be null.",
    "Exp_TableMoveOutOfRange": "The table cannot be moved out of the sheet.",
    "Exp_TableResizeOutOfRange": "The invalid row count, column count, and table cannot be resized out of the sheet.",
    "Exp_ArrayFormulaTable": "multi-cell array formulas are not allowed in tables.",
    "Exp_TableResizeInvalidRange": "The headers must remain in the same row, and the resulting table range must overlap the original table range.",
    "Exp_TableResizeToSpan": "Cannot complete operation: A table cannot overlap with a table or merged cells.",
    "Exp_TableResizeWithFilter": "Cannot shift cells in a filtered range or table.",
    "Exp_TableResizeWithHidden": "Cannot resize a table that's adjacent to a hidden row or column.",
    "Exp_TableResizeToTable": "Cannot complete operation: Operations that include cells both inside and outside a table range, and operation that affect cells that overlap multiple tables are not allowed.",
    "Exp_RowParamOutOfRange": "The param row out of data range of table.",
    "Exp_ColParamOutOfRange": "The param col out of data range of table.",
    "Exp_TableDeleteCountInvalid": "The param count to delete will cause empty table.",
    "Exp_TableAddRowIntersectSpan": "This won't work because it would move cells in a span on your worksheet.",
    "Exp_TableAddRowIntersectTable": "This won't work because it would move cells in a table on your worksheet.",
    "Exp_TableAddRowNoEnoughRoom": "Cannot insert new cells because it would push non-empty cells of the end of worksheet. These cells might appear empty but have blank values, some formatting, or a formula. Delete enough rows or columns to make room for what you want to insert and then try again.",
    "Table_Total": "Total",
    "Table_None": "None",
    "Table_Average": "Average",
    "Table_Count": "Count",
    "Table_Count_Numbers": "Count Numbers",
    "Table_Max": "Max",
    "Table_Min": "Min",
    "Table_Sum": "Sum",
    "Table_StdDev": "StdDev",
    "Table_Var": "Var"
  },
  "Fill": {
    "CopyCells": "Copy Cells",
    "FillSeries": "Fill Series",
    "FillFormattingOnly": "Fill Formatting Only",
    "FillWithoutFormatting": "Fill Without Formatting",
    "Exp_NumberOnly": "Only works for Numbers",
    "Exp_RangeContainsMergedCell": "Range should not have merged cells.",
    "Exp_TargetContainsMergedCells": "Target range should not have merged cells.",
    "Exp_MergedCellsIdentical": "This operation requires the merged cells to be identically sized.",
    "Exp_FillRangeContainsMergedCell": "Cannot fill range that contains a merged cell.",
    "Exp_FillCellsReadOnly": "The cells you are trying to fill are protected and therefore read-only.",
    "Exp_ChangeMergedCell": "Cannot change part of merged cell.",
    "Exp_ColumnReadOnly": "The column you are trying to change is protected and therefore read-only.",
    "Exp_RowReadOnly": "The row you are trying to change is protected and therefore read-only.",
    "Exp_CellReadOnly": "The cell you are trying to change is protected and therefore read-only.",
    "Exp_RangeIsNull": "range is null",
    "Exp_ChangePartOfArray": "Cannot change part of an array."
  },
  "GanttSheet": {
    "GANTT_MONTH": "Month",
    "GANTT_WEEK": "Week",
    "GANTT_DAY": "Day",
    "GANTT_HOUR": "Hour",
    "GANTT_MINUTE": "Minute",
    "GANTT_NEW_TASK": "<New Task>",
    "GANTT_NEW_SUMMARY_TASK": "<New Summary Task>",
    "GANTT_NEW_MILESTONE": "<New Milestone>",
    "GANTT_TASK_NUMBER": "Task Number",
    "GANTT_TASK_NAME": "Task Name",
    "GANTT_MILESTONE": "Milestone",
    "GANTT_MODE": "Mode",
    "GANTT_DURATION": "Duration",
    "GANTT_START": "Start",
    "GANTT_FINISH": "Finish",
    "GANTT_START_DISPLAYED": "StartDisplayed",
    "GANTT_FINISH_DISPLAYED": "FinishDisplayed",
    "GANTT_PREDECESSORS": "Predecessors",
    "GANTT_SUCCESSORS": "Successors",
    "GANTT_COMPLETE": "% Complete",
    "GANTT_COMPLETE_CHANGE": "Complete Through",
    "GANTT_TASK_SCHEDULE_MODE_MANUALLY": "Manual",
    "GANTT_TASK_SCHEDULE_MODE_AUTO": "Auto",
    "GANTT_INVALID_OPERATION": "invalidOperation",
    "GANTT_INVALID_LEVEL": "invalidLevel",
    "GANTT_INVALID_ID": "invalidId",
    "GANTT_INVALID_ROW_INDEX": "invalidRowIndex",
    "GANTT_INVALID_INDEX": "invalidIndex",
    "GANTT_INVALID_COUNT": "invalidCount",
    "GANTT_INVALID_TASK": "invalidTask",
    "GANTT_INVALID_DEPENDENCY": "invalidDependency",
    "GANTT_INVALID_UNIT": "invalidUnit",
    "GANTT_INVALID_WORK_DAYS": "invalidWorkDays",
    "GANTT_INVALID_TASK_ID": "invalidTaskId",
    "GANTT_INVALID_TASK_PARENT_ID": "invalidTaskParentId",
    "GANTT_INVALID_TASK_LEVEL": "invalidTaskLevel",
    "GANTT_INVALID_FIELD": "invalidField",
    "GANTT_INVALID_ASCENDING_STATES": "invalidAscendingStates",
    "GANTT_VALUE_INVALID": "valueInvalid",
    "GANTT_VALUE_READONLY": "valueReadonly",
    "DEFAULT_DATE_TIME_FORMAT": "yy-mm-dd h:mm",
    "GANTT_ACTION_TASK": "Task",
    "GANTT_ACTION_TASK_COLON": "Task:",
    "GANTT_ACTION_START": "Start:",
    "GANTT_ACTION_FINISH": "Finish:",
    "GANTT_ACTION_TASK_START": "Task Start:",
    "GANTT_ACTION_TASK_FINISH": "Task Finish:",
    "GANTT_ACTION_START_LINK": "Start",
    "GANTT_ACTION_FINISH_LINK": "Finish",
    "GANTT_ACTION_FROM_OF": "From {0} Of:",
    "GANTT_ACTION_TO_OF": "To {0} Of:",
    "GANTT_ACTION_START_ONLY": "StartOnly",
    "GANTT_ACTION_FINISH_ONLY": "FinishOnly",
    "GANTT_ACTION_DURATION": "Duration:",
    "GANTT_ACTION_COMPLETE_THROUGH": "CompleteThrough:",
    "GANTT_ACTION_LINE_TIP_TITLE": "{0} to {1} Link",
    "GANTT_TASK_BAR_TASK_LINK": "Task Link:",
    "GANTT_TASK_BAR_FROM": "From:",
    "GANTT_TASK_BAR_TO": "To:",
    "GANTT_TASK_BAR_FS": "Finish-to-Start (FS)",
    "GANTT_TASK_BAR_FF": "Finish-to-Finish (FF)",
    "GANTT_TASK_BAR_SF": "Start-to-Finish (SF)",
    "GANTT_TASK_BAR_SS": "Start-to-Start (SS)",
    "GANTT_TASK_BAR_UNNAMED": "Unnamed",
    "GANTT_TASK_BAR_COMPLETE_THROUGH": "Complete Through:",
    "GANTT_TASK_BAR_COMPLETE": "% Complete:",
    "GANTT_CALENDAR_STANDARD": "Standard",
    "GANTT_CALENDAR_NIGHT_SHIFT": "Night Shift",
    "GANTT_CALENDAR_24HOURS": "24 Hours",
    "GANTT_CALENDAR_MINUTE": "Minute",
    "GANTT_CALENDAR_MINUTE_NAMES": [
      "m",
      "min",
      "minute"
    ],
    "GANTT_CALENDAR_HOUR": "Hour",
    "GANTT_CALENDAR_HOUR_NAMES": [
      "h",
      "hr",
      "hour"
    ],
    "GANTT_CALENDAR_DAY": "Day",
    "GANTT_CALENDAR_DAY_NAMES": [
      "d",
      "dy",
      "day"
    ],
    "GANTT_CALENDAR_WEEK": "Week",
    "GANTT_CALENDAR_WEEK_NAMES": [
      "w",
      "wk",
      "week"
    ],
    "GANTT_CALENDAR_MONTH": "Month",
    "GANTT_CALENDAR_MONTH_NAMES": [
      "mo",
      "mon",
      "month"
    ],
    "GANTT_CALENDAR_UNIT_LABELS": [
      "min",
      "hr",
      "day",
      "wk",
      "mon",
      "yr"
    ],
    "GANTT_CALENDAR_UNIT_LABELS_PLURALS": [
      "mins",
      "hrs",
      "days",
      "wks",
      "mons",
      "yrs"
    ],
    "wmk1": "47616e74745368656574",
    "wmk2": "47616e74745368656574"
  },
  "OutlineColumn": {
    "Exp_GROUP_PROTECTED": "You can not use this command on a protected sheet. To use this command, you must first unprotect sheet."
  },
  "StatusBar": {
    "cellMode": "Cell Mode",
    "cellModeReady": "Ready",
    "cellModeEnter": "Enter",
    "cellModeEdit": "Edit",
    "inCalculation": "Calculating: {0}",
    "iterateCalculation": "Calculating iter: {0}",
    "formulaAverage": "Average",
    "formulaCount": "Count",
    "formulaNumericalCount": "Numerical Count",
    "formulaMin": "Min",
    "formulaMax": "Max",
    "formulaSum": "Sum",
    "zoomSlider": "Zoom Slider",
    "zoom": "Zoom",
    "toolTipCellMode": "In {0} mode",
    "toolTipFormulaAverage": "Average of selected cells",
    "toolTipFormulaCount": "Number of selected cells that contain data",
    "toolTipFormulaNumericalCount": "Number of selected cells that contain numerical data",
    "toolTipFormulaMin": "Minimum value in selection",
    "toolTipFormulaMax": "Maximum value in selection",
    "toolTipFormulaSum": "Sum of selected cells",
    "toolTipZoomOut": "Zoom Out",
    "toolTipZoomIn": "Zoom In",
    "toolTipSlider": "Zoom",
    "toolTipZoomPanel": "Zoom level",
    "progressItem": "Progress"
  },
  "AutoMerge": {
    "Exp_RangeIsIntersected": "The range should not intersect with exsit ranges."
  },
  "NameBox": {
    "invalidName": "You must enter a valid reference you want to go to, or type a valid name for the selection.",
    "nameBox": "Name Box"
  },
  "Component": {
    "Calendar_BuiltIn_Last7Days": "Last 7 Days",
    "Calendar_BuiltIn_LastMonth": "Last Month",
    "Calendar_BuiltIn_ThisMonth": "This Month",
    "Calendar_BuiltIn_Today": "Today",
    "Calendar_BuiltIn_Yesterday": "Yesterday",
    "Calendar_EraName_1": "M",
    "Calendar_EraName_2": "T",
    "Calendar_EraName_3": "S",
    "Calendar_EraName_4": "H",
    "Calendar_FirstYear": "1",
    "Calendar_LastMonth": "Go to previous month",
    "Calendar_LastTenYear": "Go to previous ten years",
    "Calendar_LastYear": "Go to previous year",
    "Calendar_Months_1": "JANUARY",
    "Calendar_Months_10": "OCTOBER",
    "Calendar_Months_11": "NOVEMBER",
    "Calendar_Months_12": "DECEMBER",
    "Calendar_Months_2": "FEBRUARY",
    "Calendar_Months_3": "MARCH",
    "Calendar_Months_4": "APRIL",
    "Calendar_Months_5": "MAY",
    "Calendar_Months_6": "JUNE",
    "Calendar_Months_7": "JULY",
    "Calendar_Months_8": "AUGUST",
    "Calendar_Months_9": "SEPTEMBER",
    "Calendar_NextMonth": "Go to next month",
    "Calendar_NextTenYear": "Go to next ten years",
    "Calendar_NextYear": "Go to next year",
    "Calendar_ShortMonths_1": "JAN",
    "Calendar_ShortMonths_10": "OCT",
    "Calendar_ShortMonths_11": "NOV",
    "Calendar_ShortMonths_12": "DEC",
    "Calendar_ShortMonths_2": "FEB",
    "Calendar_ShortMonths_3": "MAR",
    "Calendar_ShortMonths_4": "APR",
    "Calendar_ShortMonths_5": "MAY",
    "Calendar_ShortMonths_6": "JUN",
    "Calendar_ShortMonths_7": "JUL",
    "Calendar_ShortMonths_8": "AUG",
    "Calendar_ShortMonths_9": "SEP",
    "Calendar_ShortWeeks_1": "MON",
    "Calendar_ShortWeeks_2": "TUE",
    "Calendar_ShortWeeks_3": "WED",
    "Calendar_ShortWeeks_4": "THU",
    "Calendar_ShortWeeks_5": "FRI",
    "Calendar_ShortWeeks_6": "SAT",
    "Calendar_ShortWeeks_7": "SUN",
    "Calendar_Time_AM": "AM",
    "Calendar_Time_PM": "PM",
    "Calendar_Today": "Today",
    "Calendar_Weeks_1": "Monday",
    "Calendar_Weeks_2": "Tuesday",
    "Calendar_Weeks_3": "Wednesday",
    "Calendar_Weeks_4": "Thursday",
    "Calendar_Weeks_5": "Friday",
    "Calendar_Weeks_6": "Saturday",
    "Calendar_Weeks_7": "Sunday",
    "Cancel": "Cancel",
    "Empty": "empty",
    "NoColor": "No Color",
    "OK": "OK"
  },
  "InputMask": {
    "errorMsg": {
      "invalidPattern": "Invalid Pattern",
      "duplicatedDateTimePattern": "Duplicated Date Time Pattern",
      "emptyPattern": "Empty Pattern",
      "unknownPattern": "Parse Unknown Pattern Failure",
      "invalidOptionalPattern": "Parse Optional Pattern Failure",
      "invalidGroupPattern": "Parse Group Pattern Failure",
      "errorQuantifierPattern": "Error Quantifier Position",
      "invalidQuantifierPattern": "Parse Quantifier Pattern Failure",
      "noEntry": "No Restriction Can Be Entered"
    },
    "hourFormatSingleDesignator": [
      "A",
      "P"
    ],
    "hourFormatDesignator": [
      "AM",
      "PM"
    ]
  },
  "Print": {
    "Exp_InvalidSheetIndex": "Invalid  sheet index."
  },
  "PDF": {
    "Exp_FileIOError": "File read and write exception.",
    "Exp_FontError": "Not a supported font format or standard PDF font."
  },
  "Shapes": {
    "Exp_InvalidConnectionSite": "Invalid connection site.",
    "Exp_DuplicatedName": "Duplicated name.",
    "Exp_EmptyName": "Empty name.",
    "Exp_InvalidRange": "Invalid range"
  },
  "Charts": {
    "period": "period",
    "movingAverage": "MovingAverage",
    "exponential": "Exponential",
    "linear": "Linear",
    "logarithmic": "Logarithmic",
    "polynomial": "Polynomial",
    "power": "Power",
    "unsupportedChartType": "Unsupported Chart Type",
    "SERIES": "Series",
    "VALUE": "Value: ",
    "POINT": "Point ",
    "SIZE": "Size: ",
    "INCREASE": "Increase",
    "DECREASE": "Decrease",
    "TOTAL": "Total",
    "ChartTitle": "Chart Title",
    "Branch": "Branch",
    "AxisTitle": "Axis Title"
  },
  "Slicer": {
    "Blank": "(blank)",
    "Exp_SlicerNameInvalid": "The slicer name is not valid.",
    "Exp_SlicerNameExist": "The slicer name is already in use; please enter a unique name.",
    "SlicerNameInFormula": "Slicer"
  },
  "formulaEditor": {
    "NO_MATH_PARENTHESES": "No match parentheses",
    "MISS_RIGHT_PARENTHESES": "')' is expected.",
    "MISS_LET_FUNCTION_BODY": "Missing body of LET expression.",
    "UNKNOWN_NAME": "Unknown name",
    "UNKNOWN_SHEET": "Unknown sheet \\\"$1\\",
    "NO_MATCHED_ARGUMENTS": "Expected $1 arguments, but got $2",
    "INVALID_IDENTIFIER_ARGUMENT": "This argument must be an identifier to bind.",
    "DUPLICATE_IDENTIFIER": "Duplicate identifier $1",
    "INVALID_EXPRESSION": "Invalid EXPRESSION",
    "INVALID_FORMULA": "Invalid Formula",
    "FORMULA": "Formula"
  },
  "PivotEngine": {
    "dateResource": {
      "Jan": "Jan",
      "Feb": "Feb",
      "Mar": "Mar",
      "Apr": "Apr",
      "May": "May",
      "Jun": "Jun",
      "Jul": "Jul",
      "Aug": "Aug",
      "Sep": "Sep",
      "Oct": "Oct",
      "Nov": "Nov",
      "Dec": "Dec",
      "Qtr1": "Qtr1",
      "Qtr2": "Qtr2",
      "Qtr3": "Qtr3",
      "Qtr4": "Qtr4",
      "Seconds": "Seconds",
      "Minutes": "Minutes",
      "Hours": "Hours",
      "Days": "Days",
      "Months": "Months",
      "Quarters": "Quarters",
      "Years": "Years",
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
    "Exp_NoItemParseError": "An item name cannot be found. Check that you've typed the name correctly and the item is present in the PivotTable report.",
    "Exp_UnsupportedCalcItemType": "References, names, and arrays are not supported in PivotTable formulas.",
    "blank": "(blank)"
  },
  "PivotTables": {
    "RepeatName": "Repeat Name",
    "NotExist": "Not Exist",
    "SubtotalType_Prefix_0": "Average of ",
    "SubtotalType_Prefix_1": "Count of ",
    "SubtotalType_Prefix_2": "CountNums of ",
    "SubtotalType_Prefix_3": "Max of ",
    "SubtotalType_Prefix_4": "Min of ",
    "SubtotalType_Prefix_5": "Product of ",
    "SubtotalType_Prefix_6": "StdDev of ",
    "SubtotalType_Prefix_7": "StdDevp of ",
    "SubtotalType_Prefix_8": "Sum of ",
    "SubtotalType_Prefix_9": "Var of ",
    "SubtotalType_Prefix_10": "Varp of ",
    "ColumnLabels": "Column Labels",
    "Total": "{0} Total{1}",
    "All": "All",
    "MultipleItems": "Multiple Items",
    "RowLabels": "Row Labels",
    "GrandTotal": "Grand Total",
    "Values": "Values",
    "PivotPanel_Title": "PivotTable Fields",
    "PivotPanel_ReportText": "Choose fields to add to report",
    "PivotPanel_SearchPlaceholder": "Search",
    "PivotPanel_FieldAreaText": "Drag fields between areas below:",
    "PivotPanel_FiltersItemsTitle": "Filters",
    "PivotPanel_RowsItemsTitle": "Rows",
    "PivotPanel_ColumnsItemsTitle": "Columns",
    "PivotPanel_ValuesItemsTitle": "Values",
    "PivotPanel_DeferUpdateText": "Defer Layout Update",
    "EmptyPivotTable_PromptMessage1": "Click in this area to work with the PivotTable report",
    "EmptyPivotTable_PromptMessage2": "Turn on the PivotTable Field List to work with the PivotTable",
    "PivotPanel_Update": "Update",
    "PivotPanel_DropDownList_Up": "Move Up",
    "PivotPanel_DropDownList_Down": "Move Down",
    "PivotPanel_DropDownList_Beginning": "Move to Beginning",
    "PivotPanel_DropDownList_End": "Move to End",
    "PivotPanel_DropDownList_ReportFilter": "Move to Report Filter",
    "PivotPanel_DropDownList_Row": "Move to Row Labels",
    "PivotPanel_DropDownList_Col": "Move to Column Labels",
    "PivotPanel_DropDownList_Values": "Move to Values",
    "PivotPanel_DropDownList_Remove": "Remove Field",
    "PivotPanel_DropDownList_Set": "Field Settings...",
    "PivotPanel_DropDownList_ValueSet": "Value Field Settings...",
    "PivotPanel_Fields_MoveTo_ReportField": "Add to Report Filter",
    "PivotPanel_Fields_MoveTo_RowLabel": "Add to Row Labels",
    "PivotPanel_Fields_MoveTo_ColLabel": "Add to Column Labels",
    "PivotPanel_Fields_MoveTo_Value": "Add to Values",
    "PivotPanel_LabelOrValue_ClearFilter": "Clear Filter",
    "PivotPanel_ValueFilterOrLabel_Equals": "Equals...",
    "PivotPanel_ValueFilterOrLabel_NotEqual": "Does Not Equal...",
    "PivotPanel_ValueFilterOrLabel_GreaterThan": "Greater Than...",
    "PivotPanel_ValueFilterOrLabel_GreaterOrTo": "Greater Than Or Equal To...",
    "PivotPanel_ValueFilterOrLabel_LessThan": "Less Than...",
    "PivotPanel_ValueFilterOrLabel_LessOrTo": "Less Than Or Equal To...",
    "PivotPanel_ValueFilterOrLabel_Between": "Between...",
    "PivotPanel_ValueFilterOrLabel_NotBetween": "Not Between...",
    "PivotPanel_ValueFilter_Top10": "Top 10...",
    "PivotPanel_ValueFilterOrLabel_IsBeginWith": "Begins With...",
    "PivotPanel_ValueFilterOrLabel_NotBegin": "Does Not Begin With...",
    "PivotPanel_ValueFilterOrLabel_End": "Ends With...",
    "PivotPanel_ValueFilterOrLabel_NotEndWith": "Does Not End With...",
    "PivotPanel_ValueFilterOrLabel_Contain": "Contains...",
    "PivotPanel_ValueFilterOrLabel_NotContain": "Does Not Contain...",
    "ValueFilterOrLabel_Equals": "equals",
    "ValueFilterOrLabel_NotEqual": "does not equal",
    "ValueFilterOrLabel_GreaterThan": "greater than",
    "ValueFilterOrLabel_GreaterOrTo": "greater than or equal to",
    "ValueFilterOrLabel_LessThan": "less than",
    "ValueFilterOrLabel_LessOrTo": "less than or equal to",
    "ValueFilterOrLabel_Between": "between",
    "ValueFilterOrLabel_NotBetween": "not between",
    "ValueFilterOrLabelSelect_GreaterThan": "is greater than",
    "ValueFilterOrLabelSelect_GreaterOrTo": "is greater than or equal to",
    "ValueFilterOrLabelSelect_LessThan": "is less than",
    "ValueFilterOrLabelSelect_LessOrTo": "is less than or equal to",
    "ValueFilterOrLabelSelect_Between": "is between",
    "ValueFilterOrLabelSelect_NotBetween": "is not between",
    "ValueFilterOrLabel_IsBeginWith": "begins with",
    "ValueFilterOrLabel_NotBegin": "does not begin with",
    "ValueFilterOrLabel_End": "ends with",
    "ValueFilterOrLabel_NotEndWith": "does not end with",
    "ValueFilterOrLabel_Contain": "contains",
    "ValueFilterOrLabel_NotContain": "does not contain",
    "PivotPanel_ValueFilterOrLabel_Before": "Before...",
    "PivotPanel_ValueFilterOrLabel_After": "After...",
    "PivotPanel_ValueFilterOrLabel_Tomorrow": "Tomorrow",
    "PivotPanel_ValueFilterOrLabel_Today": "Today",
    "PivotPanel_ValueFilterOrLabel_Yesterday": "Yesterday",
    "PivotPanel_ValueFilterOrLabel_NextWeek": "Next Week",
    "PivotPanel_ValueFilterOrLabel_ThisWeek": "This Week",
    "PivotPanel_ValueFilterOrLabel_LastWeek": "Last Week",
    "PivotPanel_ValueFilterOrLabel_NextMonth": "Next Month",
    "PivotPanel_ValueFilterOrLabel_ThisMonth": "This Month",
    "PivotPanel_ValueFilterOrLabel_LastMonth": "Last Month",
    "PivotPanel_ValueFilterOrLabel_NextQuarter": "Next Quarter",
    "PivotPanel_ValueFilterOrLabel_ThisQuarter": "This Quarter",
    "PivotPanel_ValueFilterOrLabel_LastQuarter": "Last Quarter",
    "PivotPanel_ValueFilterOrLabel_NextYear": "Next Year",
    "PivotPanel_ValueFilterOrLabel_ThisYear": "This Year",
    "PivotPanel_ValueFilterOrLabel_LastYear": "Last Year",
    "PivotPanel_ValueFilterOrLabel_YearToDate": "Year to Date",
    "PivotPanel_ValueFilterOrLabel_MonthToDate": "Month to Date",
    "PivotPanel_ValueFilterOrLabel_QuarterToDate": "Quarter to Date",
    "PivotPanel_ValueFilterOrLabel_ParallelYearToDate": "Parallel Year to Date",
    "PivotPanel_ValueFilterOrLabel_ParallelMonthToDate": "Parallel Month to Date",
    "PivotPanel_ValueFilterOrLabel_ParallelQuarterToDate": "Parallel Quarter to Date",
    "PivotPanel_ValueFilterOrLabel_AllDates": "All Dates in Period",
    "PivotPanel_ValueFilterOrLabel_Custom": "Custom Filter...",
    "PivotPanel_Sort_A_Z": "Sort A to Z",
    "PivotPanel_Sort_Z_A": "Sort Z to A",
    "PivotPanel_Sort_Smallest_Largest": "Sort Smallest to Largest",
    "PivotPanel_Sort_Largest_Smallest": "Sort Largest to Smallest",
    "PivotPanel_Sort_More": "More Sort Options...",
    "PivotPanel_Filter_Clear": "Clear Filter From {0}",
    "PivotPanel_Filter_Label": "Label Filters",
    "PivotPanel_Filter_Value": "Value Filters",
    "PivotPanel_Date_Filter": "Date Filters",
    "Ok": "OK",
    "Cancel": "Cancel",
    "NumberFormat": "Number Format",
    "LabelFormat": "Label Format",
    "Number": "Number",
    "FormatCells": "Format Cells",
    "Sample": "Sample",
    "Type": "Type",
    "CustomFormats": [
      "General",
      "0",
      "0.00",
      "#,##0",
      "#,##0.00",
      "#,##0;(#,##0)",
      "#,##0;[Red](#,##0)",
      "#,##0.00;(#,##0.00)",
      "#,##0.00;[Red](#,##0.00)",
      "$#,##0;($#,##0)",
      "$#,##0;[Red]($#,##0)",
      "$#,##0.00;($#,##0.00)",
      "$#,##0.00;[Red]($#,##0.00)",
      "0%",
      "0.00%",
      "0.00E+00",
      "##0.0E+0",
      "# ?/?",
      "# ??/??",
      "m/d/yyyy",
      "d-mmm-yy",
      "d-mmm",
      "mmm-yy",
      "h:mm AM/PM",
      "h:mm:ss AM/PM",
      "hh:mm",
      "hh:mm:ss",
      "m/d/yyyy hh:mm",
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
      "m/d;@",
      "[<=9999999]###-####;(###) ###-####",
      "# ?/8"
    ],
    "Select_Field": "Select field",
    "PivotPanel_Filter_SelectAll": "Check All",
    "PivotPanel_Filter_NoSelectAll": "Uncheck All",
    "PivotPanel_Filter_Search": "search",
    "Label_Title": "Label Filter",
    "Label_Show": "Show items for which the label",
    "Use_Single_Character": "Use ? to represent any single character",
    "Use_Series_Characters": "Use * to represent any series characters",
    "Value_Show": "Show items for which",
    "Value_Title": "Value Filter",
    "Top_Ten_Filter": "Top 10 Filter ",
    "TopTenShow": "show",
    "Sort_Field_Dialog_Title": "Sort",
    "Sort_Field_Dialog_Sort_Options": "Sort options",
    "Sort_Field_Dialog_Summary": "Summary",
    "Sort_Field_Dialog_Ascending_Sort": "Ascending (A to Z) by:",
    "Sort_Field_Dialog_Descending_Sort": "Descending (Z to A) by:",
    "Sort_Field_Dialog_More_Options": "More Options...",
    "Sort_Field_More_Dialog_Title": "More Sort Options",
    "Sort_Field_More_Dialog_Sort_By": "Sort By",
    "Sort_Field_More_Dialog_Values_In_Selected_Area": "Values in selected {{AREA}}",
    "Sort_Value_Dialog_Title": "Sort By Value",
    "Sort_Value_Dialog_Sort_Direction": "Sort direction",
    "Sort_Value_Dialog_Asc": "Smallest to Largest",
    "Sort_Value_Dialog_Desc": "Largest to Smallest",
    "Sort_Value_Dialog_Top_To_Bottom": "Top to Bottom",
    "Sort_Value_Dialog_Left_To_Right": "Left to Right",
    "Custom_Sort_Summary": "Custom Sort",
    "Sort_Order_ASC": "ascending order",
    "Sort_Order_DESC": "descending order",
    "Sort_In_Row": "row",
    "Sort_In_Column": "column",
    "Sort_Summary_Pattern": "Sort {{FIELD_NAME}} in {{ORDER}}",
    "Sort_Value_Summary_Pattern": "Sort {{FIELD_NAME}} by {{SELECTED_FIELD_NAME}} in {{ORDER}}",
    "Sort_More_Summary_Pattern": "Sort {{FIELD_NAME}} by {{SELECTED_FIELD_NAME}} in {{ORDER}} using values in this {{ROW_COLUMN}}:\\r\\n",
    "Invalid_Sort_Range": "The Sort Reference is not valid. Make sure that it's within the data you want to sort, and the first Sort By box isn't the same or blank.",
    "Invalid_Field_Sort_By": "Cannot determine which PivotTable field to sort by.",
    "Top": "Top",
    "Bottom": "Bottom",
    "Top_Item": "Items",
    "Top_Percent": "Percent",
    "Top_Sum": "Sum",
    "ByJoiner": "by",
    "AndJoiner": "and",
    "Q1": "Quarter 1",
    "Q2": "Quarter 2",
    "Q3": "Quarter 3",
    "Q4": "Quarter 4",
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",
    "IsBefore": "is before",
    "IsBeforeOrEqual": "is before or equal to",
    "IsAfter": "is after",
    "IsAfterOrEqual": "is after or equal to",
    "IsBetween": "is between",
    "IsNotBetween": "is not between",
    "DateFilterTitle": "Date Filter",
    "DateShow": "Show items for which the date",
    "WholeDays": "Whole Days",
    "FieldSetting": "Field Settings",
    "ValueSetting": "Value Field Settings",
    "SourceName": "Source Name:",
    "CustomName": "Custom Name:",
    "SummarizeValue": "Summarize Values By",
    "ShowValueAs": "Show Value As",
    "CalculationForDialog": "Calculation: ",
    "BaseFieldForDialog": "Base Field: ",
    "BaseItemForDialog": "Base Item: ",
    "BaseItemNext": "(next)",
    "BaseItemPrevious": "(previous)",
    "SummarizeValueField": "Summarize values field by",
    "ShowValueAsField": "Show value as",
    "ChooseType": "Choose the type of calculation that you want to use to summarize data from the selected field",
    "Sum": "Sum",
    "Count": "Count",
    "Average": "Average",
    "Max": "Max",
    "Min": "Min",
    "Product": "Product",
    "CountNumbers": "Count Numbers",
    "StdDev": "StdDev",
    "StdDevp": "StdDevp",
    "Var": "Var",
    "Varp": "Varp",
    "sigmaValue": "∑ Values",
    "sigmaValueTemp": "Values",
    "DateFormatError": "This isn't a valid date",
    "noCalculation": "No Calculation",
    "percentGrandTotal": "% of Grand Total",
    "percentColumnTotal": "% of Column Total",
    "percentRowTotal": "% of Row Total",
    "percentEllipsis": "% Of ...",
    "percentParentRowTotal": "% of Parent Row Total",
    "percentParentColumnTotal": "% of Parent Column Total",
    "percentParentTotal": "% of Parent Total ...",
    "difference": "Difference From ...",
    "percentDifference": "% Difference From ...",
    "runningTotal": "Running Total In ...",
    "percentRunningTotal": "% Running Total In ...",
    "rankSmallestLargest": "Rank Smallest to Largest ...",
    "rankLargestSmallest": "Rank Largest to Smallest ...",
    "index": "Index",
    "showValueAsDialog": [
      "",
      "",
      "",
      "",
      "% Of ",
      "",
      "",
      "% of Parent Total ",
      "Difference From ",
      "% Difference From ",
      "Running Total In ",
      "% Running Total In ",
      "Rank Smallest to Largest ",
      "Rank Largest to Smallest ",
      ""
    ],
    "baseField": "Base field:",
    "baseItem": "Base item:",
    "grouping": "Grouping",
    "auto": "Auto",
    "startingAt": "Starting at:",
    "endingAt": "Ending at:",
    "groupBy": "By:",
    "seconds": "Seconds",
    "minutes": "Minutes",
    "hours": "Hours",
    "days": "Days",
    "months": "Months",
    "quarters": "Quarters",
    "years": "Years",
    "numberOfDays": "Number of days",
    "NoHaveSpread": "workbook exception",
    "SourceError": "Source data exception, cannot create PivotTable report",
    "SourceNotIsTableNameOrFormula": "source data not is table name and formula",
    "SourceDataOnlyOne": "This command requires at least two rows of source data. You cannot use the command on a selection in only row",
    "FieldAreaLimited": "The field you are moving cannot be placed in that area of the report.",
    "Views": "Views",
    "Group": "Group",
    "param_error": "the param is null or undefine",
    "EmptyValueFieldError": "You need at least one field in the Values area in order to apply a value filter",
    "DefaultPivotTableViewName": "PivotView",
    "toolTipContent_Row": "Row: ",
    "toolTipContent_Column": "Column: ",
    "toolTipContent_Value": "Value: ",
    "toolTipContent_NoValue": "No value",
    "deferLayoutUpdate": "Defer Layout Update",
    "getStringLabelFilterItemText": "",
    "getDateLabelFilterItemText": "",
    "getValueFilterItemText": "",
    "PivotTableErrorMessage_ShowDetail": "Cannot show or hide detail for this selection",
    "PivotTableErrorMessage_MakeChange": "We can't make this change for the selected cells because it will affect a PivotTable. Use the field list to change the report. If you are trying to insert or delete cells, move the PivotTable and try again.",
    "PivotTableErrorMessage_ExistData": "There's already data in {}. Do you want to replace it?",
    "PivotTableErrorMessage_EditWhenDefer": "The PivotTable report cannot be edited with the Defer Layout Update check box selected. To edit the report, clear the Defer Layout Update check box at the bottom of the PivotTable Field List.",
    "PivotTableErrorMessage_DuplicatedFieldName": "PivotTable field name already exists.",
    "PivotTableErrorMessage_EmptyFieldName": "Cannot enter a null value as an item or field name in a PivotTable report.",
    "PivotTableErrorMessage_Protect": "That command cannot be performed while a protected sheet contains another PivotTable report based on the same source data. To remove protection from the sheet that has the other report, click the sheet tab, and then click Unprotect Sheet(Review tab, Changes group). Then try the command again.",
    "PivotTableErrorMessage_EmptySourceFieldName": "The PivotTable field name is not valid. To create a PivotTable report, you must use data that is organized as a list with labeled columns. If you are changing the name of a PivotTable field, you must type a new name for the field.",
    "PivotTableErrorMessage_Overlap": "A PivotTable report cannot overlap another PivotTable report.",
    "PivotTableErrorMessage_InvalidChange": "We can't change this part of the PivotTable.",
    "PivotTableErrorMessage_InvalidGroup": "Cannot group that selection.",
    "PivotTableErrorMessage_InvalidReference": "Reference isn't valid.",
    "PivotTableForAccessibility": "PivotTable: \\r\\nPivotTable Name: ",
    "PivotTableCalcItemHasTowCacheField": "If one or more fields in the PivotTable have calculated items, no fields can be used in the data area two or more times, or in the data area and another area at the same time. If you are trying to add a field, remove the calculated items and add the field again. If you are trying to add a calculated item, change the PivotTable report so that no field is used more than once and then add the calculated item.",
    "PivotTableHasNumberOrDateGroup": "This PivotTable report field is grouped, You cannot add a calculated item to a grouped field. To ungroup the field, make sure it is in the row or column area, select one of the items of the grouped field, click the Ungroup button in the Group group on the Analyze tab, and then insert the calculated item. After inserted, you can group the items of the field again.",
    "PivotTableSubtotalType": "Averages, standard deviations, and variances are not supported when a PivotTable report has calculated items.",
    "PivotTableHasSameItemName": "Calculated item or field could not be created because another item or field of the same name exists.",
    "PivotTableCalcItemHasMultipleDataField": "Multiple data Fields of the same field are not supported when a PivotTable report has calculated items.",
    "PivotTableMoveCalcItemFieldToReport": "This field cannot be placed in the report filter because it contains calculated items.To place this field in the report filter,first delete the calculated items.",
    "PivotTableErrorFormula": "An item name cannot be found. Check that you've typed the name correctly and the item is present in the PivotTable report.",
    "SlicerNameInFormula": "Slicer",
    "search": "Search",
    "AddSearchResult": "Add current selection to filter",
    "Layout": "Layout",
    "showNoData": "Show items with no data",
    "showSubtotalTop": "Display subtotals at the top of each group",
    "TIMELINE_PLACE_HOLDER": "{TL}",
    "ALL_DATES_IN": "All dates in ",
    "ALL_PERIODS": "All Periods",
    "INVALID_DATE_SELECTION": "Invalid Date Selection!",
    "QUARTER_MAP": [
      "",
      "Q1",
      "Q2",
      "Q3",
      "Q4"
    ],
    "DateNotEqual": "Not {TL}",
    "DateNewerThan": "After {TL}",
    "DateNewerThanOrEqual": "After or on {TL}",
    "DateOlderThan": "Before {TL}",
    "DateOlderThanOrEqual": "Before or on{TL}",
    "DateNotBetween": "Not Between {TL}",
    "AllDatesIn_Quarter1": "All dates in Q1",
    "AllDatesIn_Quarter2": "All dates in Q2",
    "AllDatesIn_Quarter3": "All dates in Q3",
    "AllDatesIn_Quarter4": "All dates in Q4",
    "AllDatesIn_January": "All dates in January",
    "AllDatesIn_February": "All dates in February",
    "AllDatesIn_March": "All dates in March",
    "AllDatesIn_April": "All dates in April",
    "AllDatesIn_May": "All dates in May",
    "AllDatesIn_June": "All dates in June",
    "AllDatesIn_July": "All dates in July",
    "AllDatesIn_August": "All dates in August",
    "AllDatesIn_September": "All dates in September",
    "AllDatesIn_October": "All dates in October",
    "AllDatesIn_November": "All dates in November",
    "AllDatesIn_December": "All dates in December",
    "TIME_LEVEL_YEARS": "YEARS",
    "TIME_LEVEL_QUARTERS": "QUARTERS",
    "TIME_LEVEL_MONTHS": "MONTHS",
    "TIME_LEVEL_DAYS": "DAYS",
    "PivotTableErrorMessage_ExistTable": "A PivotTable report cannot overlap a table.",
    "VALUE_MUST_NUMBER": "Value must be a number.",
    "ENTRY_NUMBER": "Your entry cannot be used, An integer or decimal number may be required.",
    "POSITIVE_INTEGER": "Number must be greater than zero."
  },
  "TableSheet": {
    "EXP_TooManyPinRecords": "Only support less than 10 pin records.",
    "GroupPanelTip": "Drag here to set row groups",
    "GroupPanelFieldsHeader": "Fields",
    "GroupPanelGroupsHeader": "Groups",
    "GroupPanelItemRemove": "Remove",
    "GroupPanelItemAddCalculation": "Add Summary Field",
    "GroupPanelDropDownCalcField": "Field",
    "GroupPanelSummaryLabelFormula": "Formula",
    "GroupPanelSummaryLabelCaption": "Caption",
    "GroupPanelSummaryLabelSlice": "Slice",
    "GroupPanelSummaryLabelRelateTo": "Relate to",
    "GroupPanelSummaryLabelPosition": "Position",
    "GroupPanelSummaryLabelPositionHeader": "Header",
    "GroupPanelSummaryLabelPositionFooter": "Footer",
    "GroupPanelItemRemoveAll": "Remove All",
    "GroupPanelAddCalculateColumn": "Add Calculated Column",
    "TextColon": ":",
    "StatusBarRowCount": "Row Count",
    "StatusBarToolTipRowCount": "Count of selected rows",
    "CrossColumnCrossHeader": "Cross",
    "CrossColumnDetailFormatter": "Formatter",
    "CrossColumnDetailName": "Name",
    "CrossColumnDetailValue": "Value",
    "CrossColumnDetailValuePlaceHolder": "Drag item here to set value",
    "CrossColumnDetailOver": "Over",
    "CrossColumnDetailCaption": "Caption",
    "CrossColumnDetailValueHeader": "Show Cross Value Header",
    "CrossColumnDetailFilter": "Filter",
    "CrossColumnDetailAttributes": "Attributes",
    "CrossColumnDetailList": "List",
    "Exp_InvalidOperationInProtectForTableSheet": "The range you're trying to change is locked.",
    "defineColumn": "Define Column",
    "cancel": "Cancel",
    "submit": "Submit",
    "defineColumnValue": "Value",
    "defineColumnCaption": "Caption",
    "defineColumnType": "Type",
    "defineColumnFormatting": "Formatting",
    "defineColumnConfiguration": "Configuration",
    "defineColumnDefaultValue": "Default",
    "defineColumnOthers": "Others",
    "defineColumnFormula": "Formula",
    "defineColumnNone": "None",
    "defineColumnAll": "All",
    "defineColumnNoResults": "No Results",
    "defineColumnRequired": "It's required",
    "defineColumnExisted": "It's existed",
    "columnTypeNumber": "Number",
    "columnTypeText": "Text",
    "columnTypeFormula": "Formula",
    "columnTypeCheckbox": "Checkbox",
    "columnTypeDate": "Date",
    "columnTypeCurrency": "Currency",
    "columnTypePercent": "Percent",
    "columnTypePhone": "Phone",
    "columnTypeEmail": "Email",
    "columnTypeURL": "URL",
    "columnTypeLookup": "Lookup",
    "columnTypeCreatedTime": "CreatedTime",
    "columnTypeModifiedTime": "ModifiedTime",
    "columnTypeAttachment": "Attachment",
    "columnTypeSelect": "Select",
    "columnTypeBarcode": "Barcode",
    "columnTypeNumberFormattingSample": "Sample",
    "columnTypeNumberFormattingDecimalPlaces": "Decimal places",
    "columnTypeNumberFormattingThousandSeparator": "Use 1000 Separator(,)",
    "columnTypeNumberFormattingNegativeNumbers": "Negative numbers",
    "columnTypeNumberFormattingSymbol": "Symbol",
    "columnTypeNumberFormatting": {
      "negativeNumbers": [],
      "numberCategoryFormats": [
        "0",
        "0;[Red]0",
        "0_);(0)",
        "0_);[Red](0)",
        "#,##0",
        "#,##0;[Red]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Red](#,##0)"
      ],
      "japanEmperorReignDateFormat": [
        "[$-411]ge.m.d;@",
        "[$-411]ggge\\\"年\\\"m\\\"月\\\"d\\\"日\\\";@"
      ],
      "japanEmperorReignFirstYearDateFormat": [
        "[$-411]ge.m.d;@",
        "[$-ja-JP-x-gannen]ggge\\\"年\\\"m\\\"月\\\"d\\\"日\\\";@"
      ],
      "accountingSymbol": [
        [
          "None",
          "",
          ""
        ],
        [
          "$",
          "$",
          "en-US"
        ],
        [
          "¥(Chinese)",
          "¥",
          "zh-cn"
        ],
        [
          "¥(Japanese)",
          "¥",
          "ja-jp"
        ],
        [
          "₩(Korean)",
          "₩",
          "ko-kr"
        ]
      ],
      "percentageFormats": [
        "0%"
      ],
      "currencyFormatWithoutSymbol": [
        "#,##0",
        "#,##0;[Red]#,##0",
        "#,##0_);(#,##0)",
        "#,##0_);[Red](#,##0)"
      ],
      "commonFormats": {
        "Number": {
          "format": "0.00",
          "label": "Number"
        },
        "Currency": {
          "format": "[$$-409]#,##0.00",
          "label": "Currency"
        },
        "Accounting": {
          "format": "_(\\\"$\\\"* #,##0.00_);_(\\\"$\\\"* (#,##0.00);_(\\\"$\\\"* \\\"-\\\"??_);_(@_)",
          "label": "Accounting"
        },
        "ShortDate": {
          "format": "m/d/yyyy",
          "label": "Short Date"
        },
        "LongDate": {
          "format": "[$-409]dddd, mmmm dd, yyyy",
          "label": "Long Date"
        },
        "Time": {
          "format": "[$-409]h:mm:ss AM/PM",
          "label": "Time"
        },
        "Percentage": {
          "format": "0.00%",
          "label": "Percentage"
        },
        "Fraction": {
          "format": "# ?/?",
          "label": "Fraction"
        },
        "Scientific": {
          "format": "0.00E+00",
          "label": "Scientific"
        },
        "Text": {
          "format": "@",
          "label": "Text"
        },
        "Comma": {
          "format": "_(* #,##0.00_);_(* (#,##0.00);_(* \\\"-\\\"??_);_(@_)",
          "label": "Comma"
        }
      }
    },
    "columnTypeLookupTables": "Select lookup table",
    "columnTypeLookupFields": "The field to look up",
    "columnTypeLookupIndexes": "The record number",
    "columnTypeFormattingCategory": "Category",
    "columnTypeMask": {
      "pattern": "Pattern",
      "placeholder": "Placeholder",
      "excludeLiteral": "Exclude Literal",
      "excludePlaceholder": "Exclude Placeholder"
    },
    "columnTypeAllEditableFields": "All Editable Fields",
    "columnTypeDateTimePicker": "DateTime Picker",
    "columnTypeDateStartDay": "StartDay",
    "columnTypeDateMonday": "Monday",
    "columnTypeDateTuesday": "Tuesday",
    "columnTypeDateWednesday": "Wednesday",
    "columnTypeDateThursday": "Thursday",
    "columnTypeDateFriday": "Friday",
    "columnTypeDateSaturday": "Saturday",
    "columnTypeDateSunday": "Sunday",
    "columnTypeDateCalendarPage": "CalendarPage",
    "columnTypeDateDay": "Day",
    "columnTypeDateYear": "Year",
    "columnTypeDateMonth": "Month",
    "columnTypeDateShowTime": "ShowTime",
    "columnTypeDateShowDateRange": "ShowDateRange",
    "columnTypeDateShowBuiltInDateRange": "ShowBuiltInDateRange",
    "columnTypeDateType": "Type",
    "columnTypeDateLocale": "locale (location)",
    "columnTypeCalendar": "Calendar type",
    "columnTypeShowEraFirstYear": "Use Gannen to display 1st year",
    "columnTypeCalendarType": {
      "western": "Western",
      "JER": "Japanese Emperor Reign"
    },
    "columnTypeAttachmentMarginGroup": "Margin",
    "columnTypeAttachmentLeft": "Left",
    "columnTypeAttachmentTop": "Top",
    "columnTypeAttachmentRight": "Right",
    "columnTypeAttachmentBottom": "Bottom",
    "columnTypeAttachmentMaxSize": "Size Limit",
    "columnTypeAttachmentAccept": "File Type",
    "columnTypeAttachmentAcceptValueTypes": {
      "txt": "txt",
      "all": "all",
      "pdf": "pdf",
      "image": "jpg,png,gif",
      "excel": "docx,xlsx,pptx"
    },
    "columnTypeAttachmentIsPreviewEnabled": "Preview",
    "columnTypeAttachmentIsClearEnabled": "Clear",
    "columnTypeAttachmentIsDownloadEnabled": "Download",
    "columnTypeAttachmentSizeUnit": "KB",
    "columnTypeCheckboxTitle": "CheckBox CellType",
    "columnTypeCheckboxTextGroup": "Text",
    "columnTypeCheckboxTrue": "True",
    "columnTypeCheckboxIndeterminate": "Indeterminate",
    "columnTypeCheckboxFalse": "False",
    "columnTypeCheckboxAlign": "Align",
    "columnTypeCheckboxOther": "Other",
    "columnTypeCheckboxCaption": "Caption",
    "columnTypeCheckboxIsThreeState": "IsThreeState",
    "columnTypeCheckboxBoxSize": "Box Size",
    "columnTypeCheckboxAuto": "Auto",
    "columnTypeCheckboxTextAlign": {
      "top": "Top",
      "bottom": "Bottom",
      "left": "Left",
      "right": "Right"
    },
    "columnTypeBarcodeLabel": {
      "showLabel": "Show Label",
      "barcodeType": "Barcode Type",
      "color": "Color",
      "errorCorrectionLevel": "Error Correction Level",
      "backgroundColor": "Background Color",
      "version": "Version",
      "model": "Model",
      "mask": "Mask",
      "connection": "Connection",
      "charCode": "CharCode",
      "connectionNo": "Connection No",
      "charset": "Charset",
      "quietZoneLeft": "Quiet Zone Left",
      "quietZoneRight": "Quiet Zone Right",
      "quietZoneTop": "Quiet Zone Top",
      "quietZoneBottom": "Quiet Zone Bottom",
      "labelPosition": "Label Position",
      "addOn": "AddOn",
      "addOnLabelPosition": "AddOn Label Position",
      "fontFamily": "Font Family",
      "fontStyle": "Font Style",
      "fontWeight": "Font Weight",
      "fontTextDecoration": "Font TextDecoration",
      "fontTextAlign": "Font TextAlign",
      "fontSize": "Font Size",
      "fileIdentifier": "File Identifier",
      "structureNumber": "Structure Number",
      "structureAppend": "Structure Append",
      "ecc00_140Symbol": "Ecc000_140 Symbol Size",
      "ecc200EncodingMode": "Ecc200 Endcoding Mode",
      "ecc200SymbolSize": "Ecc200 Symbol Size",
      "eccMode": "Ecc Mode",
      "compact": "Compact",
      "columns": "Columns",
      "rows": "Rows",
      "groupNo": "GroupNo",
      "grouping": "Grouping",
      "codeSet": "Code Set",
      "fullASCII": "Full ASCII",
      "checkDigit": "Check Digit",
      "nwRatio": "Wide And Narrow Bar Ratio",
      "labelWithStartAndStopCharacter": "Label With Start And Stop Character"
    },
    "columnTypeComboBoxEditorValueTypes": "EditorValueType",
    "columnTypeComboBoxItems": "Items",
    "columnTypeComboBoxItemProperties": "ItemProperties",
    "columnTypeComboBoxText": "Text",
    "columnTypeComboBoxValue": "Value",
    "columnTypeComboBoxAdd": "Add",
    "columnTypeComboBoxRemove": "Remove",
    "columnTypeComboBoxEditorValueType": {
      "text": "Text",
      "index": "Index",
      "value": "Value"
    },
    "columnTypeComboBoxEditable": "Editable",
    "columnTypeComboBoxItemHeight": "Items Height",
    "columnTypeUrlLabel": {
      "linkColor": "Link Color",
      "visitedLinkColor": "Visited Link Color"
    }
  },
  "DataChart": {
    "AddGroup": "Add Group",
    "AddRule": "Add Rule",
    "AggregationAverage": "Average",
    "AggregationCount": "Count",
    "AggregationDistinctCount": "Distinct Count",
    "AggregationFirstValue": "First Value",
    "AggregationMax": "Max",
    "AggregationMethod": "Aggregation Method",
    "AggregationMin": "Min",
    "AggregationSum": "Sum",
    "Alignment": "Alignment",
    "All": "All",
    "And": "And",
    "Animation": "Animation",
    "AnimationAnimationMode": "Animation Mode",
    "AnimationDuration": "Duration(ms)",
    "AnimationEasing": "Easing",
    "AnimationModeAll": "All",
    "AnimationModeGroup": "Group",
    "AnimationModePoint": "Point",
    "AnimationStartDelay": "Start Delay(ms)",
    "Appearance": "Appearance",
    "Apply": "Apply",
    "Area": "Area Chart",
    "AutoCategoryWidth": "Auto Category Width",
    "AutoDirection": "Auto",
    "AxisCrosses": "Axis Crosses",
    "AxisDateMode": "Date Mode",
    "AxisLineColor": "Axis Line Color",
    "AxisLineType": "Axis Line Type",
    "AxisLineWidth": "Axis Line Width",
    "AxisMode": "Axis Mode",
    "AxisPosition": "Axis Position",
    "AxisPositionBottom": "Bottom",
    "AxisPositionCrosses": "Crosses",
    "AxisPositionTop": "Top",
    "AxisScale": "Scale",
    "Axis_Type": "Axis Type",
    "Background": "Background Color",
    "Bar": "Bar Chart",
    "BindingMode": "Binding Mode",
    "Bold": "Bold",
    "Bolder": "Bolder",
    "Border": "Border Color",
    "BorderType": "Border Type",
    "BorderWidth": "Border Width",
    "BottomWidth": "Bottom Width",
    "Bubble": "Bubble Chart",
    "CalibrationType": "Calibration Type",
    "Cancel": "Cancel",
    "CanvasPadding": "Canvas Padding",
    "CartesianAxisMode": "Cartesian",
    "CaseSensitive": "Case Sensitive",
    "CategoryAxis": "Category Axis",
    "CategoryWidth": "Category Width",
    "Cell": "Cell",
    "CellBinding": "Cell Binding",
    "CellBindingTip": "Tip: Please enter preview mode to view the real data of cell binding data chart.",
    "Center": "Center",
    "ChartStyle": "Chart Style",
    "ChartTitle": "Data Chart Title",
    "ChartType": "Chart Type",
    "Clear": "Clear",
    "ColorPalette": "Color Palette",
    "Column": "Column Chart",
    "CommaSeparator": "Comma",
    "CompleteCalibrationType": "Complete",
    "ConnectLineColor": "Line Color",
    "ConnectLineFirstLength": "First Line Length",
    "ConnectLineSecondLength": "Second Line Length",
    "ConnectLineVisible": "Connect Line Visible",
    "ConnectLineWidth": "Line Width",
    "ConstantAxisType": "Constant",
    "Contains": "Contains",
    "CornerRadius": "Corner Radius",
    "Custom": "Custom",
    "DashedLineType": "Dashed",
    "DataBinding": "Data Binding",
    "DataBindingActualValue": "Actual Value",
    "DataBindingCategory": "Category",
    "DataBindingColor": "Color",
    "DataBindingColumnSlicer": "Column Slicer",
    "DataBindingDetail": "Detail",
    "DataBindingLowerValue": "Lower Value",
    "DataBindingNoItems": "no items.",
    "DataBindingRowSlicer": "Row Slicer",
    "DataBindingSize": "Size",
    "DataBindingTargetValue": "Target Value",
    "DataBindingTipLabel": "Tip Label",
    "DataBindingUpperValue": "Upper Value",
    "DataBindingValue": "Value",
    "DataBindingXAxisValue": "X Axis",
    "DataBindingYAxisValue": "Y Axis",
    "DataLabelAround": "Around",
    "DataLabelCategory": "Category",
    "DataLabelCategoryName": "Category Name",
    "DataLabelDetails": "Details",
    "DataLabelDisplayMode": "Display Mode",
    "DataLabelDisplayUnit": "Display Unit",
    "DataLabelLocation": "Location",
    "DataLabelOnSlice": "On Slice",
    "DataLabelSeries": "Series",
    "DataLabelSeriesName": "Series Name",
    "DataLabelValue": "Value",
    "DataLabels": "Data Labels",
    "DateScale": "Date",
    "DayDateMode": "Day",
    "Delete": "Delete",
    "DiagonalDirection": "Diagonal",
    "DisplayModeAll": "All",
    "DisplayModeAuto": "Auto",
    "DisplayName": "Display Name",
    "DisplayUnit": "Display Unit",
    "DisplayUnitBillions": "Billions",
    "DisplayUnitHundredMillions": "Hundred Millions",
    "DisplayUnitHundredThousands": "Hundred Thousands",
    "DisplayUnitHundreds": "Hundreds",
    "DisplayUnitMillions": "Millions",
    "DisplayUnitNone": "None",
    "DisplayUnitTenMillions": "Ten Millions",
    "DisplayUnitTenThousands": "Ten Thousands",
    "DisplayUnitThousands": "Thousands",
    "DisplayUnitTrillions": "Trillions",
    "Donut": "Donut Chart",
    "DragFieldsTip": "Drag fields here to bind.",
    "EditColors": "Edit Colors",
    "EndsWith": "Ends With",
    "EqualsTo": "Equal To",
    "ExcludeMatched": "Exclude Matched",
    "False": "False",
    "Fill": "Fill Color",
    "FilledRadar": "Filled Radar Chart",
    "Filter": "Filter",
    "FontColor": "Font Color",
    "FontFamily": "Font Family",
    "FontOpacity": "Font Opacity",
    "FontOverflow": "Font Overflow",
    "FontSize": "Font Size",
    "FontStyle": "Font Style",
    "FontWeight": "Font Weight",
    "Format": "Format",
    "FormatCurrency": "Currency",
    "FormatCustom": "Custom",
    "FormatGeneral": "General",
    "FormatNumber": "Number",
    "FormatPercentage": "Percentage",
    "Funnel": "Funnel",
    "Gauge": "Gauge",
    "General": "General",
    "GraphOpacity": "Graph Opacity",
    "GreaterThan": "Greater Than",
    "GreaterThanOrEqualTo": "Greater Than Or Equal To",
    "HideCalibrationType": "Hide",
    "HideOverlap": "Hide Overlap",
    "High": "High",
    "HorizontalDirection": "Horizontal",
    "HourDateMode": "Hour",
    "HoverAnimation": "Show Hover Animation",
    "InBackEasing": " Ease In Back",
    "InBounceEasing": " Ease In Bounce",
    "InCircularEasing": " Ease In Circular",
    "InCubicEasing": " Ease In Cubic",
    "InElasticEasing": " Ease In Elastic",
    "InExponentialEasing": " Ease In Exponential",
    "InOutBackEasing": " Ease In Out Back",
    "InOutBounceEasing": " Ease In Out Bounce",
    "InOutCircularEasing": " Ease In Out Circular",
    "InOutCubicEasing": " Ease In Out Cubic",
    "InOutElasticEasing": " Ease In Out Elastic",
    "InOutExponentialEasing": " Ease In Out Exponential",
    "InOutQuadraticEasing": " Ease In Out Quadratic",
    "InOutQuarticEasing": " Ease In Out Quartic",
    "InOutQuinticEasing": " Ease In Out Quintic",
    "InOutSinusoidalEasing": " Ease In Out Sinusoidal",
    "InQuadraticEasing": " Ease In Quadratic",
    "InQuarticEasing": " Ease In Quartic",
    "InQuinticEasing": " Ease In Quintic",
    "InSinusoidalEasing": " Ease In Sinusoidal",
    "InnerRadius": "Inner Radius",
    "Italic": "Italic",
    "LabelAngle": "Label Angle",
    "LabelOverflowSetting": "Label Overflow Setting",
    "LabelSeparator": "Label Separator",
    "Layout": "Layout",
    "LayoutHeight": "Height",
    "LayoutWidth": "Width",
    "Left": "Left",
    "Legend": "Legend",
    "LegendAlignBottom": "Bottom",
    "LegendAlignCenter": "Center",
    "LegendAlignLeft": "Left",
    "LegendAlignMiddle": "Middle",
    "LegendAlignRight": "Right",
    "LegendAlignTop": "Top",
    "LegendAutoSize": "Auto Size",
    "LegendHAlign": "H-Align",
    "LegendHeight": "Height(%)",
    "LegendPadding": "Legend Padding",
    "LegendPosition": "Position",
    "LegendPositionBottom": "Bottom",
    "LegendPositionLeft": "Left",
    "LegendPositionRight": "Right",
    "LegendPositionTop": "Top",
    "LegendVAlign": "V-Align",
    "LegendWidth": "Width(%)",
    "LessThan": "Less Than",
    "LessThanOrEqualTo": "Less Than Or Equal To",
    "Lighter": "Lighter",
    "Line": "Line Chart",
    "LineColor": "Line Color",
    "LineStyle": "Line Style",
    "LineStyleDefault": "Default",
    "LineStyleSpline": "Spline",
    "LineStyleStep": "Step",
    "LineThickness": "Line Thickness",
    "LineType": "Line Type",
    "LinearEasing": "Linear",
    "LinearScale": "Linear",
    "LoadAnimation": "Show Load Animation",
    "Low": "Low",
    "MajorGridLineColor": "Major Grid Line Color",
    "MajorGridLineType": "Major Grid Line Type",
    "MajorGridLineWidth": "Major Grid Line Width",
    "MajorInterval": "Major Interval",
    "MajorTickMarksColor": "Major Tick Marks Color",
    "MajorTickMarksLength": "Major Tick Marks Length",
    "MajorTickMarksType": "Major Tick Marks Type",
    "MajorTickMarksWidth": "Major Tick Marks Width",
    "MatchRules": "Match Rules",
    "MaxConnectLineLength": "Max Line Length",
    "MaxValue": "Max Value",
    "MaxWidth": "Max Width",
    "Mid": "Mid",
    "MilliSecondDateMode": "MilliSecond",
    "MinValue": "Min Value",
    "MinorGridLineColor": "Minor Grid Line Color",
    "MinorGridLineType": "Minor Grid Line Type",
    "MinorGridLineWidth": "Minor Grid Line Width",
    "MinorInterval": "Minor Interval",
    "MinorTickMarksColor": "Minor Tick Marks Color",
    "MinorTickMarksLength": "Minor Tick Marks Length",
    "MinorTickMarksType": "Minor Tick Marks Type",
    "MinorTickMarksWidth": "Minor Tick Marks Width",
    "MinuteDateMode": "Minute",
    "MonthDateMode": "Month",
    "MovingCalculation": "Moving Calculation...",
    "NeckHeight": "Neck Height",
    "NewLineSeparator": "New Line",
    "No": "No",
    "NoBindingTip": "Please select a table to bind data.",
    "NoParameters": "no parameters.",
    "None": "None",
    "NoneEasing": "None",
    "Normal": "Normal",
    "NotEqualsTo": "Not Equal To",
    "OK": "OK",
    "Or": "Or",
    "OriginalValue": "Original Value",
    "OutBackEasing": " Ease Out Back",
    "OutBounceEasing": " Ease Out Bounce",
    "OutCircularEasing": " Ease Out Circular",
    "OutCubicEasing": " Ease Out Cubic",
    "OutElasticEasing": " Ease Out Elastic",
    "OutExponentialEasing": " Ease Out Exponential",
    "OutQuadraticEasing": " Ease Out Quadratic",
    "OutQuarticEasing": " Ease Out Quartic",
    "OutQuinticEasing": " Ease Out Quintic",
    "OutSinusoidalEasing": " Ease Out Sinusoidal",
    "OverflowClip": "Clip",
    "OverflowEllipsis": "Ellipsis",
    "OverflowWrap": "Wrap",
    "PaletteColors": "Palette Colors",
    "PercentStackedArea": "Percent Stacked Area Chart",
    "PercentStackedBar": "Percent Stacked Bar Chart",
    "PercentStackedColumn": "Percent Stacked Column Chart",
    "PercentageAxisType": "Percentage",
    "PercentileCalculation": "Percentile Calculation...",
    "PeriodSeparator": "Period",
    "Pie": "Pie Chart",
    "PolarCoordinatesBar": "Bar Chart In Polar Coordinates",
    "PolarCoordinatesStackedBar": "Stacked Bar Chart In Polar Coordinates",
    "PropertySetting": "Inspector",
    "QuickFunctions": "Quick Functions",
    "Radar": "Radar Chart",
    "RadialAxisMode": "Radial",
    "RadialStackedBar": "Radial Stacked Bar Chart",
    "Radius": "Radius",
    "RangeArea": "Range Area Chart",
    "RangeBar": "Range Bar Chart",
    "RangeColumn": "Range Column Chart",
    "RankingCalculation": "Ranking Calculation...",
    "Remove": "Remove",
    "Rename": "Rename...",
    "Reversed": "Reversed",
    "Right": "Right",
    "Rose": "Rose Chart",
    "Rule": "Rule",
    "RunningCalculation": "Running Calculation...",
    "Scatter": "Scatter",
    "Search": "Search",
    "SearchField": "Search Fields...",
    "SearchPropertyByName": "Search property name here...",
    "SecondDateMode": "Second",
    "SelectStyle": "Show Select Style",
    "SelectStyleAdorners": "Adorners",
    "SelectStyleFill": "Fill Color",
    "SelectStyleFillOpacity": "Fill Opacity",
    "SelectStyleStroke": "Border Color",
    "SelectStyleStrokeLineType": "Border Type",
    "SelectStyleStrokeOpacity": "Border Opacity",
    "SelectStyleStrokeWidth": "Border Width",
    "SelectStyleTitle": "Select Style",
    "SelectedTable": "Selected Table",
    "SemicolonSeparator": "Semicolon",
    "SeriesGap": "Series Gap",
    "ShowAxis": "Show Axis",
    "ShowAxisLine": "Show Axis Line",
    "ShowDataLabel": "Show Data Label",
    "ShowLegend": "Show Legend",
    "ShowMajorGridLines": "Show Major Grid Lines",
    "ShowMajorTickMarks": "Show Major Tick Marks",
    "ShowMinorGridLines": "Show Minor Grid Lines",
    "ShowMinorTickMarks": "Show Minor Tick Marks",
    "ShowNullsAs": "Show Nulls As",
    "ShowNullsAsConnected": "Connected",
    "ShowNullsAsGaps": "Gaps",
    "ShowNullsAsZeros": "Zeros",
    "ShowSizeLegend": "Show Size Legend",
    "ShowSymbol": "Show Symbol",
    "ShowTickLabels": "Show Tick Labels",
    "ShowTitle": "Show Title",
    "ShowTooltip": "Show Tool Tip",
    "SolidLineType": "Solid",
    "SortAggregate": "Aggregate",
    "SortAsc": "Ascend",
    "SortBy": "Sort By",
    "SortDesc": "Descend",
    "SortOrder": "Sort Order",
    "SortSetting": "Sort...",
    "SpaceSeparator": "Space",
    "StackedArea": "Stacked Area Chart",
    "StackedBar": "Stacked Bar Chart",
    "StackedColumn": "Stacked Column Chart",
    "Standard": "Standard",
    "StartAngle": "Start Angle",
    "StartsWith": "Starts With",
    "Sunburst": "Sunburst Chart",
    "Sweep": "Sweep",
    "SwingEasing": "Swing",
    "SymbolFill": "Symbol Fill",
    "SymbolShape": "Symbol Shape",
    "SymbolShapeBox": "Box",
    "SymbolShapeDiamond": "Diamond",
    "SymbolShapeDot": "Dot",
    "SymbolShapePlus": "Plus",
    "SymbolShapeTriangle": "Triangle",
    "SymbolShapeX": "X",
    "SymbolSize": "Symbol Size",
    "SymbolStroke": "Symbol Stroke",
    "TableBinding": "Table Binding",
    "TargetField": "Target Field",
    "Theme": "Theme",
    "Title": "Title",
    "TitlePadding": "Padding",
    "ToolTipLineThrough": "Line Through",
    "ToolTipOverline": "Overline",
    "ToolTipUnderline": "Underline",
    "Tooltip": "Tool Tip",
    "TopWidth": "Top Width",
    "True": "True",
    "UnselectStyle": "Show Unselect Style",
    "UpdateAnimation": "Show Update Animation",
    "UseParameter": "Use Parameter",
    "Value": "Value",
    "ValueAsPercentage": "Value As Percentage",
    "ValueAxis": "Value Axis",
    "VerticalDirection": "Vertical",
    "WeekDateMode": "Week",
    "WrapLegend": "Auto Wrap Legend",
    "XAxis": "X Axis",
    "XPosition": "X Position",
    "YAxis": "Y Axis",
    "YPosition": "Y Position",
    "YearDateMode": "Year",
    "Yes": "Yes",
    "configDataChart": "Please Config DataChart.",
    "wmk1": "446174614368617274",
    "wmk2": "446174614368617274"
  },
  "ReportSheet": {
    "ContainsInvalidCells": "Report sheet contains invalid cells({0}), please check.",
    "toolTipTableName": "Table: ",
    "toolTipColumnName": "Column: ",
    "toolTipFormula": "Formula: ",
    "toolTipCellType": "Type: ",
    "listCellType": "List",
    "groupCellType": "Group",
    "summaryCellType": "Summary",
    "summarySumTip": "(Sum)",
    "summaryAvgTip": "(Avg)",
    "summaryMaxTip": "(Max)",
    "summaryMinTip": "(Min)",
    "summaryCountTip": "(Count)",
    "summaryNoneTip": "(None)",
    "configDataChart": "Please Config DataChart.",
    "Exp_InvalidParameterName": "invalid parameter name",
    "Exp_InvalidPasteRange": "Cannot paste or move data into the container range.",
    "dropFieldsIntoRow": "Drop Row Fields Here",
    "dropFieldsIntoColumn": "Drop Column Fields Here",
    "dropFieldsIntoValue": "Drop Value Fields Here",
    "wmk1": "5265706f72745368656574",
    "wmk2": "5265706f72745368656574"
  },
  "IO": {
    "EXP_IO": "File read and write exception.",
    "EXP_FILE_FORMAT": "Incorrect file format.",
    "GET_PARTIAL_VALUES_ERROR_MSG": "error file",
    "EXP_WRONG_PASSWORD": "The password you supplied is not correct.",
    "EXP_EMPTY_PASSWORD": "The Excel file cannot be opened because the workbook is password protected."
  },
  "Functions": {
    "ABS": {
      "description": "This function calculates the absolute value of the specified value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ACCRINT": {
      "description": "This function calculates the accrued interest for a security that pays periodic interest.",
      "parameters": [
        {
          "name": "issue"
        },
        {
          "name": "first_interest"
        },
        {
          "name": "settlement"
        },
        {
          "name": "rate"
        },
        {
          "name": "par"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "ACCRINTM": {
      "description": "This function calculates the accrued interest at maturity for a security that pays periodic interest.",
      "parameters": [
        {
          "name": "issue"
        },
        {
          "name": "settlement"
        },
        {
          "name": "rate"
        },
        {
          "name": "par"
        },
        {
          "name": "basis",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "ACOS": {
      "description": "This function calculates the arccosine, that is, the angle whose cosine is the specified value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ACOSH": {
      "description": "This function calculates the inverse hyperbolic cosine of the specified value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ADDRESS": {
      "description": "This function uses the row and column numbers to create a cell address in text.",
      "parameters": [
        {
          "name": "row_num"
        },
        {
          "name": "column_num"
        },
        {
          "name": "abs_num",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "a1style",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "sheet_text",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "AGGREGATE": {
      "description": "This function aggregate a list of numbers using a specified built-in function.",
      "parameters": [
        {
          "name": "function_num"
        },
        {
          "name": "options"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": true
        }
      ]
    },
    "AMORDEGRC": {
      "description": "This function returns the depreciation for an accounting period, taking into consideration prorated depreciation, and applies a depreciation coefficient in the calculation based on the life of the assets.",
      "parameters": [
        {
          "name": "cost"
        },
        {
          "name": "date_purchased"
        },
        {
          "name": "first_period"
        },
        {
          "name": "salvage"
        },
        {
          "name": "period"
        },
        {
          "name": "rate"
        },
        {
          "name": "basis"
        }
      ]
    },
    "AMORLINC": {
      "description": "This function calculates the depreciation for an accounting period, taking into account prorated depreciation.",
      "parameters": [
        {
          "name": "cost"
        },
        {
          "name": "date_purchased"
        },
        {
          "name": "first_period"
        },
        {
          "name": "salvage"
        },
        {
          "name": "period"
        },
        {
          "name": "rate"
        },
        {
          "name": "basis"
        }
      ]
    },
    "AND": {
      "description": "Check whether all arguments are True, and returns True if all arguments are True.",
      "parameters": [
        {
          "name": "logical1"
        },
        {
          "name": "logical2"
        }
      ]
    },
    "ASIN": {
      "description": "This function calculates the arcsine, that is, the angle whose sine is the specified value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ASINH": {
      "description": "This function calculates the inverse hyperbolic sine of a number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ATAN": {
      "description": "This function calculates the arctangent, that is, the angle whose tangent is the specified value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ATAN2": {
      "description": "This function calculates the arctangent of the specified x- and y-coordinates.",
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
      "description": "This function calculates the inverse hyperbolic tangent of a number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "AVEDEV": {
      "description": "This function calculates the average of the absolute deviations of the specified values from their mean.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "AVERAGE": {
      "description": "This function calculates the average of the specified numeric values.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "AVERAGEA": {
      "description": "This function calculates the average of the specified values, including text or logical values as well as numeric values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "AVERAGEIF": {
      "description": "This function calculates the average of the specified numeric values provided that they meet the specified criteria.",
      "parameters": [
        {
          "name": "range"
        },
        {
          "name": "criteria"
        },
        {
          "name": "average_range",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "AVERAGEIFS": {
      "description": "This function calculates the average of all cells that meet multiple specified criteria.",
      "parameters": [
        {
          "name": "average_range"
        },
        {
          "name": "criteria_range1"
        },
        {
          "name": "criteria1"
        },
        {
          "name": "criteria_range2",
          "repeatable": true
        },
        {
          "name": "criteria2",
          "repeatable": true
        }
      ]
    },
    "BESSELI": {
      "description": "This function calculates the modified Bessel function of the first kind evaluated for purely imaginary arguments.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "order"
        }
      ]
    },
    "BESSELJ": {
      "description": "This function calculates the Bessel function of the first kind.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "order"
        }
      ]
    },
    "BESSELK": {
      "description": "This function calculates the modified Bessel function of the second kind evaluated for purely imaginary arguments.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "order"
        }
      ]
    },
    "BESSELY": {
      "description": "This function calculates the Bessel function of the second kind.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "order"
        }
      ]
    },
    "BETADIST": {
      "description": "This function calculates the cumulative beta distribution function.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "lower",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "upper",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "BETAINV": {
      "description": "This function calculates the inverse of the cumulative beta distribution function.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "lower",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "upper",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "BIN2DEC": {
      "description": "This function converts a binary number to a decimal number",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "BIN2HEX": {
      "description": "This function converts a binary number to a hexadecimal number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "BIN2OCT": {
      "description": "This function converts a binary number to an octal number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "BINOMDIST": {
      "description": "This function calculates the individual term binomial distribution probability.",
      "parameters": [
        {
          "name": "number_s"
        },
        {
          "name": "trials"
        },
        {
          "name": "probability_s"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "CEILING": {
      "description": "This function rounds a number up to the nearest multiple of a specified value.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "significance"
        }
      ]
    },
    "CHAR": {
      "description": "This function returns the character specified by a number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "CHIDIST": {
      "description": "This function calculates the one-tailed probability of the chi-squared distribution.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "CHIINV": {
      "description": "This function calculates the inverse of the one-tailed probability of the chi-squared distribution",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "CHITEST": {
      "description": "This function calculates the test for independence from the chi-squared distribution.",
      "parameters": [
        {
          "name": "actual_range"
        },
        {
          "name": "expected_range"
        }
      ]
    },
    "CHOOSE": {
      "description": "This function returns a value from a list of values.",
      "parameters": [
        {
          "name": "index_num"
        },
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "CLEAN": {
      "description": "This function removes all non-printable characters from text.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "CODE": {
      "description": "This function returns a numeric code to represent the first character in a text string. The returned code corresponds to the Windows character set (ANSI).",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "COLUMN": {
      "description": "This function returns the column number of a reference.",
      "parameters": [
        {
          "name": "reference"
        }
      ]
    },
    "COLUMNS": {
      "description": "This function returns the number of columns in an array.",
      "parameters": [
        {
          "name": "array"
        }
      ]
    },
    "COMBIN": {
      "description": "This function calculates the number of possible combinations for a specified number of items.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "number_chosen"
        }
      ]
    },
    "COMPLEX": {
      "description": "This function converts real and imaginary coefficients into a complex number.",
      "parameters": [
        {
          "name": "real_num"
        },
        {
          "name": "image_num"
        },
        {
          "name": "suffix"
        }
      ]
    },
    "CONCATENATE": {
      "description": "This function combines multiple text strings or numbers into one text string.",
      "parameters": [
        {
          "name": "text1"
        },
        {
          "name": "text2",
          "repeatable": true
        }
      ]
    },
    "CONFIDENCE": {
      "description": "This function returns confidence interval for a population mean.",
      "parameters": [
        {
          "name": "alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "size"
        }
      ]
    },
    "CONVERT": {
      "description": "This function converts a number from one measurement system to its equivalent in another measurement system.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "from_unit"
        },
        {
          "name": "to_unit"
        }
      ]
    },
    "CORREL": {
      "description": "This function returns the correlation coefficient of the two sets of data.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        }
      ]
    },
    "COS": {
      "description": "This function returns the cosine of the specified angle.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "COSH": {
      "description": "This function returns the hyperbolic cosine of the specified value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "COUNT": {
      "description": "This function returns the number of cells that contain numbers.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "COUNTA": {
      "description": "This function returns the number of cells that contain numbers, text, or logical values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "COUNTBLANK": {
      "description": "This function returns the number of empty (or blank) cells in a range of cells on a sheet.",
      "parameters": [
        {
          "name": "cellrange"
        }
      ]
    },
    "COUNTIF": {
      "description": "This function returns the number of cells that meet a certain condition",
      "parameters": [
        {
          "name": "cellrange"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "COUNTIFS": {
      "description": "This function returns the number of cells that meet multiple conditions.",
      "parameters": [
        {
          "name": "criteria_range1"
        },
        {
          "name": "criteria1"
        },
        {
          "name": "criteria_range2",
          "repeatable": true
        },
        {
          "name": "criteria2",
          "repeatable": true
        }
      ]
    },
    "COUPDAYBS": {
      "description": "This function calculates the number of days from the beginning of the coupon period to the settlement date.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "COUPDAYS": {
      "description": "This function returns the number of days in the coupon period that contains the settlement date.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "COUPDAYSNC": {
      "description": "This function calculates the number of days from the settlement date to the next coupon date.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "COUPNCD": {
      "description": "This function returns a date number of the next coupon date after the settlement date.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "COUPNUM": {
      "description": "This function returns the number of coupons due between the settlement date and maturity date.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "COUPPCD": {
      "description": "This function returns a date number of the previous coupon date before the settlement date.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "COVAR": {
      "description": "This function returns the covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        }
      ]
    },
    "CRITBINOM": {
      "description": "This function returns the criterion binomial, the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.",
      "parameters": [
        {
          "name": "trials"
        },
        {
          "name": "probability_s"
        },
        {
          "name": "alpha"
        }
      ]
    },
    "CUMIPMT": {
      "description": "This function returns the cumulative interest paid on a loan between the starting and ending periods.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "start_period"
        },
        {
          "name": "end_period"
        },
        {
          "name": "paytype"
        }
      ]
    },
    "CUMPRINC": {
      "description": "This function returns the cumulative principal paid on a loan between the start and end periods.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "nper"
        },
        {
          "name": "pval"
        },
        {
          "name": "start_period"
        },
        {
          "name": "end_period"
        },
        {
          "name": "paytype"
        }
      ]
    },
    "DATE": {
      "description": "This function returns the DateTime object for a particular date, specified by the year, month, and day.",
      "parameters": [
        {
          "name": "year"
        },
        {
          "name": "month"
        },
        {
          "name": "day"
        }
      ]
    },
    "DATEDIF": {
      "description": "This function returns the number of days, months, or years between two dates.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "end_date"
        },
        {
          "name": "unit"
        }
      ]
    },
    "DATEVALUE": {
      "description": "This function returns a DateTime object of the specified date.",
      "parameters": [
        {
          "name": "date_text"
        }
      ]
    },
    "DAVERAGE": {
      "description": "This function calculates the average of values in a column of a list or database that match the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DAY": {
      "description": "This function returns the day number of the month (integer 1 to 31) that corresponds to the specified date.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "DAYS360": {
      "description": "This function returns the number of days between two dates based on a 360-day year.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "end_date"
        },
        {
          "name": "method",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "DB": {
      "description": "This function calculates the depreciation of an asset for a specified period using the fixed‑declining balance method",
      "parameters": [
        {
          "name": "cost"
        },
        {
          "name": "salvage"
        },
        {
          "name": "life"
        },
        {
          "name": "period"
        },
        {
          "name": "month"
        }
      ]
    },
    "DCOUNT": {
      "description": "This function counts the cells that contain numbers in a column of a list or database that match the specified conditions",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DCOUNTA": {
      "description": "This function counts the non-blank cells in a column of a list or database that match the specified conditions",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DDB": {
      "description": "This function calculates the depreciation of an asset for a specified period using the double-declining balance method or another method you specify.",
      "parameters": [
        {
          "name": "cost"
        },
        {
          "name": "salvage"
        },
        {
          "name": "life"
        },
        {
          "name": "period"
        },
        {
          "name": "factor"
        }
      ]
    },
    "DEC2BIN": {
      "description": "This function converts a decimal number to a binary number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "DEC2HEX": {
      "description": "This function converts a decimal number to a hexadecimal number",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "DEC2OCT": {
      "description": "This function converts a decimal number to an octal number",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "DEGREES": {
      "description": "This function converts the specified value from radians to degrees",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "DELTA": {
      "description": "This function identifies whether two values are equal. Returns 1 if they are equal; returns 0 otherwise.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2"
        }
      ]
    },
    "DEVSQ": {
      "description": "This function calculates the sum of the squares of deviations of data points (or of an array of data points) from their sample mean.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "DGET": {
      "description": "This function extracts a single value from a column of a list or database that matches the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DISC": {
      "description": "This function calculates the discount rate for a security.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "price"
        },
        {
          "name": "redemption"
        },
        {
          "name": "basis"
        }
      ]
    },
    "DMAX": {
      "description": "This function returns the largest number in a column of a list or database that matches the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DMIN": {
      "description": "This function returns the smallest number in a column of a list or database that matches the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DOLLAR": {
      "description": "This function converts a number to text using currency format, with the decimals rounded to the specified place.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "decimals",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "DOLLARDE": {
      "description": "This function converts a fraction dollar price to a decimal dollar price.",
      "parameters": [
        {
          "name": "fractional_dollar"
        },
        {
          "name": "fraction"
        }
      ]
    },
    "DOLLARFR": {
      "description": "This function converts a decimal number dollar price to a fraction dollar price.",
      "parameters": [
        {
          "name": "decimal_dollar"
        },
        {
          "name": "fraction"
        }
      ]
    },
    "DPRODUCT": {
      "description": "This function multiplies the values in a column of a list or database that match the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DSTDEV": {
      "description": "This function estimates the standard deviation of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DSTDEVP": {
      "description": "This function calculates the standard deviation of a population based on the entire population using the numbers in a column of a list or database that match the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DSUM": {
      "description": "This function adds the numbers in a column of a list or database that match the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DURATION": {
      "description": "This function returns the Macaulay duration for an assumed par value of $100.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "coupon"
        },
        {
          "name": "yield"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "DVAR": {
      "description": "This function estimates the variance of a population based on a sample by using the numbers in a column of a list or database that match the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "DVARP": {
      "description": "This function calculates the variance of a population based on the entire population by using the numbers in a column of a list or database that match the specified conditions.",
      "parameters": [
        {
          "name": "database"
        },
        {
          "name": "field"
        },
        {
          "name": "criteria"
        }
      ]
    },
    "EDATE": {
      "description": "This function calculates the date that is the indicated number of months before or after a specified date.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "months"
        }
      ]
    },
    "EFFECT": {
      "description": "This function calculates the effective annual interest rate for a given nominal annual interest rate and the number of compounding periods per year.",
      "parameters": [
        {
          "name": "nominal_rate"
        },
        {
          "name": "npery"
        }
      ]
    },
    "EOMONTH": {
      "description": "This function calculates the date for the last day of the month (end of month) that is the indicated number of months before or after the starting date.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "months"
        }
      ]
    },
    "ERF": {
      "description": "This function calculates the error function integrated between a lower and an upper limit.",
      "parameters": [
        {
          "name": "lower_limit"
        },
        {
          "name": "upper_limit"
        }
      ]
    },
    "ERFC": {
      "description": "This function calculates the complementary error function integrated between a lower limit and infinity.",
      "parameters": [
        {
          "name": "lowerlimit"
        }
      ]
    },
    "ERROR.TYPE": {
      "description": "This function returns a number corresponding to one of the error values.",
      "parameters": [
        {
          "name": "error_val"
        }
      ]
    },
    "EURO": {
      "description": "This function returns the equivalent of one Euro based on the ISO currency code.",
      "parameters": [
        {
          "name": "code"
        }
      ]
    },
    "EUROCONVERT": {
      "description": "This function converts currency from a Euro member currency (including Euros) to another Euro member currency (including Euros).",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "source"
        },
        {
          "name": "target"
        },
        {
          "name": "full_precision"
        },
        {
          "name": "triangulation_precision"
        }
      ]
    },
    "EVEN": {
      "description": "This function rounds the specified value up to the nearest even integer.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "EXACT": {
      "description": "This function returns true if two strings are the same; otherwise, false.",
      "parameters": [
        {
          "name": "text1"
        },
        {
          "name": "text2"
        }
      ]
    },
    "EXP": {
      "description": "This function returns e raised to the power of the specified value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "EXPONDIST": {
      "description": "This function returns the exponential distribution or the probability density.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "lambda"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "FACT": {
      "description": "This function calculates the factorial of the specified number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "FACTDOUBLE": {
      "description": "This function calculates the double factorial of the specified number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "FALSE": {
      "description": "This function returns the value for logical FALSE."
    },
    "FDIST": {
      "description": "This function calculates the F probability distribution, to see degrees of diversity between two sets of data.",
      "parameters": [
        {
          "name": "value"
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
      "description": "This function finds one text value within another and returns the text value’s position in the text you searched.",
      "parameters": [
        {
          "name": "find_text"
        },
        {
          "name": "within_text"
        },
        {
          "name": "start_num",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "FINV": {
      "description": "This function returns the inverse of the F probability distribution.",
      "parameters": [
        {
          "name": "probability"
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
      "description": "This function returns the Fisher transformation for a specified value.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "FISHERINV": {
      "description": "This function returns the inverse of the Fisher transformation for a specified value.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "FIXED": {
      "description": "This function rounds a number to the specified number of decimal places, formats the number in decimal format using a period and commas (if so specified), and returns the result as text.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "decimals",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "no_commas",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "FLOOR": {
      "description": "This function rounds a number down to the nearest multiple of a specified value.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "significance"
        }
      ]
    },
    "FORECAST": {
      "description": "This function calculates a future value using existing values.",
      "parameters": [
        {
          "name": "value"
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
      "description": "This function calculates how often values occur within a range of values. This function returns a vertical array of numbers.",
      "parameters": [
        {
          "name": "data_array"
        },
        {
          "name": "bins_array"
        }
      ]
    },
    "FTEST": {
      "description": "This function returns the result of an F-test, which returns the one-tailed probability that the variances in two arrays are not significantly different.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        }
      ]
    },
    "FV": {
      "description": "This function returns the future value of an investment based on a present value, periodic payments, and a specified interest rate.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "numper"
        },
        {
          "name": "paymt"
        },
        {
          "name": "pval"
        },
        {
          "name": "type"
        }
      ]
    },
    "FVSCHEDULE": {
      "description": "This function returns the future value of an initial principal after applying a series of compound interest rates. Calculate future value of an investment with a variable or adjustable rate.",
      "parameters": [
        {
          "name": "principal"
        },
        {
          "name": "schedule"
        }
      ]
    },
    "GAMMADIST": {
      "description": "This function returns the gamma distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "GAMMAINV": {
      "description": "This function returns the inverse of the gamma cumulative distribution.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        }
      ]
    },
    "GAMMALN": {
      "description": "This function returns the natural logarithm of the Gamma function, G(x).",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "GCD": {
      "description": "This function returns the greatest common divisor of two numbers.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2"
        }
      ]
    },
    "GEOMEAN": {
      "description": "This function returns the geometric mean of a set of positive data.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "GESTEP": {
      "description": "This function, greater than or equal to step, returns an indication of whether a number is equal to a threshold.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "step"
        }
      ]
    },
    "GROWTH": {
      "description": "This function calculates predicted exponential growth. This function returns the y values for a series of new x values that are specified by using existing x and y values.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "newx"
        },
        {
          "name": "constant"
        }
      ]
    },
    "HARMEAN": {
      "description": "This function returns the harmonic mean of a data set.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "HEX2BIN": {
      "description": "This function converts a hexadecimal number to a binary number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "HEX2DEC": {
      "description": "This function converts a hexadecimal number to a decimal number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "HEX2OCT": {
      "description": "This function converts a hexadecimal number to an octal number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "HLOOKUP": {
      "description": "This function searches for a value in the top row and then returns a value in the same column from a specified row.",
      "parameters": [
        {
          "name": "lookup_value"
        },
        {
          "name": "table_array"
        },
        {
          "name": "row_index_num"
        },
        {
          "name": "range_lookup",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "TRUE",
              "description": "Approximate match"
            },
            {
              "value": "FALSE",
              "description": "Exact match"
            }
          ]
        }
      ]
    },
    "HOUR": {
      "description": "This function returns the hour that corresponds to a specified time.",
      "parameters": [
        {
          "name": "time"
        }
      ]
    },
    "HYPGEOMDIST": {
      "description": "This function returns the hypergeometric distribution.",
      "parameters": [
        {
          "name": "sample_s"
        },
        {
          "name": "number_sample"
        },
        {
          "name": "population_s"
        },
        {
          "name": "number_pop"
        }
      ]
    },
    "IF": {
      "description": "This function performs a comparison and returns one of two provided values based on that comparison.",
      "parameters": [
        {
          "name": "logical_test"
        },
        {
          "name": "value_if_true"
        },
        {
          "name": "value_if_false"
        }
      ]
    },
    "IFERROR": {
      "description": "This function evaluates a formula and returns a value you provide if there is an error or the formula result.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "value_if_error"
        }
      ]
    },
    "IMABS": {
      "description": "This function returns the absolute value or modulus of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMAGINARY": {
      "description": "This function returns the imaginary coefficient of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMARGUMENT": {
      "description": "This function returns the argument theta, which is an angle expressed in radians.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMCONJUGATE": {
      "description": "This function returns the complex conjugate of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMCOS": {
      "description": "This function returns the cosine of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMDIV": {
      "description": "This function returns the quotient of two complex numbers.",
      "parameters": [
        {
          "name": "complexnum"
        },
        {
          "name": "complexdenom"
        }
      ]
    },
    "IMEXP": {
      "description": "This function returns the exponential of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMLN": {
      "description": "This function returns the natural logarithm of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMLOG2": {
      "description": "This function returns the base-2 logarithm of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMLOG10": {
      "description": "This function returns the common logarithm of a complex number.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMPOWER": {
      "description": "This function returns a complex number raised to a power.",
      "parameters": [
        {
          "name": "complexnum"
        },
        {
          "name": "powernum"
        }
      ]
    },
    "IMPRODUCT": {
      "description": "This function returns the product of up to 29 complex numbers in the x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum1"
        },
        {
          "name": "complexnum2",
          "repeatable": true
        }
      ]
    },
    "IMREAL": {
      "description": "This function returns the real coefficient of a complex number in the x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMSIN": {
      "description": "This function returns the sine of a complex number in the x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMSQRT": {
      "description": "This function returns the square root of a complex number in the x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMSUB": {
      "description": "This function returns the difference of two complex numbers in the x+yi or x+yj text format.",
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
      "description": "This function returns the sum of two or more complex numbers in the x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum1"
        },
        {
          "name": "complexnum2",
          "repeatable": true
        }
      ]
    },
    "INDEX": {
      "description": "This function returns a value or the reference to a value from within an array or range.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "row_num"
        },
        {
          "name": "column_num"
        },
        {
          "name": "area_num"
        }
      ]
    },
    "INDIRECT": {
      "description": "This function returns the reference specified by a text string. References are immediately evaluated to display their contents.",
      "parameters": [
        {
          "name": "ref_text"
        },
        {
          "name": "a1_style",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "INT": {
      "description": "This function rounds a specified number down to the nearest integer.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "INTERCEPT": {
      "description": "This function returns the coordinates of a point at which a line intersects the y-axis, by using existing x values and y values.",
      "parameters": [
        {
          "name": "dependent"
        },
        {
          "name": "independent"
        }
      ]
    },
    "INTRATE": {
      "description": "This function calculates the interest rate for a fully invested security.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "investment"
        },
        {
          "name": "redemption"
        },
        {
          "name": "basis"
        }
      ]
    },
    "IPMT": {
      "description": "This function calculates the payment of interest on a loan.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "per"
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
          "name": "type"
        }
      ]
    },
    "IRR": {
      "description": "This function returns the internal rate of return for a series of cash flows represented by the numbers in an array.",
      "parameters": [
        {
          "name": "arrayvals"
        },
        {
          "name": "estimate"
        }
      ]
    },
    "ISBLANK": {
      "description": "This function tests whether a value, an expression, or contents of a referenced cell is empty.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISERR": {
      "description": "This function, Is Error Other Than Not Available, tests whether a value, an expression, or contents of a referenced cell has an error other than not available (#N/A).",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISERROR": {
      "description": "This function, Is Error of Any Kind, tests whether a value, an expression, or contents of a referenced cell has an error of any kind.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISEVEN": {
      "description": "This function, Is Number Even, tests whether a value, an expression, or contents of a referenced cell is even.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISLOGICAL": {
      "description": "This function tests whether a value, an expression, or contents of a referenced cell is a logical (Boolean) value.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISNA": {
      "description": "This function, Is Not Available, tests whether a value, an expression, or contents of a referenced cell has the not available (#N/A) error value.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISNONTEXT": {
      "description": "This function tests whether a value, an expression, or contents of a referenced cell has any data type other than text.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISNUMBER": {
      "description": "This function tests whether a value, an expression, or contents of a referenced cell has numeric data.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISODD": {
      "description": "This function, Is Number Odd, tests whether a value, an expression, or contents of a referenced cell has numeric data.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISPMT": {
      "description": "This function calculates the interest paid during a specific period of an investment.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "per"
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
      "description": "This function, Is Reference, tests whether a value, an expression, or contents of a referenced cell is a reference to another cell.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "ISTEXT": {
      "description": "This function tests whether a value, an expression, or contents of a referenced cell has text data.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "KURT": {
      "description": "This function returns the kurtosis of a data set.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2"
        },
        {
          "name": "number3"
        },
        {
          "name": "number4",
          "repeatable": true
        }
      ]
    },
    "LARGE": {
      "description": "This function returns the nth largest value in a data set, where n is specified.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "n"
        }
      ]
    },
    "LCM": {
      "description": "This function returns the least common multiple of two numbers.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2"
        }
      ]
    },
    "LEFT": {
      "description": "This function returns the specified leftmost characters from a text value, and based on the number of characters you specify.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "num_chars"
        }
      ]
    },
    "LEN": {
      "description": "This function returns the length of the number of characters in a text string.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "LINEST": {
      "description": "This function calculates the statistics for a line.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "constant"
        },
        {
          "name": "stats"
        }
      ]
    },
    "LN": {
      "description": "This function returns the natural logarithm of the specified number.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "LOG": {
      "description": "This function returns the logarithm base Y of a number X.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "base"
        }
      ]
    },
    "LOG10": {
      "description": "This function returns the logarithm base 10 of the number given.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "LOGEST": {
      "description": "This function calculates an exponential curve that fits the data and returns an array of values that describes the curve.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "constant"
        },
        {
          "name": "stats"
        }
      ]
    },
    "LOGINV": {
      "description": "This function returns the inverse of the lognormal cumulative distribution function of x, where LN(x) is normally distributed with the specified mean and standard deviation.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "LOGNORMDIST": {
      "description": "This function returns the cumulative natural log normal distribution of x, where LN(x) is normally distributed with the specified mean and standard deviation. Analyze data that has been logarithmically transformed with this function.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "LOOKUP": {
      "description": "This function searches for a value and returns a value from the same location in a second area.",
      "parameters": [
        {
          "name": "lookup_value"
        },
        {
          "name": "lookup_vector"
        },
        {
          "name": "result_vector"
        }
      ]
    },
    "LOWER": {
      "description": "This function converts text to lower case letters.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "MATCH": {
      "description": "This function returns the relative position of a specified item in a range.",
      "parameters": [
        {
          "name": "lookup_value"
        },
        {
          "name": "lookup_array"
        },
        {
          "name": "match_type"
        }
      ]
    },
    "XMATCH": {
      "description": "This function returns the relative position of an item in an array. By default, an exact match is required.",
      "parameters": [
        {
          "name": "lookup_value"
        },
        {
          "name": "lookup_array"
        },
        {
          "name": "match_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "0",
              "description": "Exact match (default)"
            },
            {
              "value": "-1",
              "description": "Exact match or next smallest item"
            },
            {
              "value": "1",
              "description": "Exact match or next largest item"
            },
            {
              "value": "2",
              "description": "A wildcard match where *, ?, and ~ have special meaning."
            }
          ]
        },
        {
          "name": "search_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "1",
              "description": "Search first-to-last (default)"
            },
            {
              "value": "-1",
              "description": "Search last-to-first (reverse search)"
            },
            {
              "value": "2",
              "description": "Perform a binary search that relies on lookup_array being sorted in ascending order. If not sorted, invalid results will be returned. "
            },
            {
              "value": "-2",
              "description": "Perform a binary search that relies on lookup_array being sorted in descending order. If not sorted, invalid results will be returned."
            }
          ]
        }
      ]
    },
    "XLOOKUP": {
      "description": "This function searches a range or an array for a match and returns the corresponding item from a second range or array. By default, an exact match is used.",
      "parameters": [
        {
          "name": "lookup_value"
        },
        {
          "name": "lookup_array"
        },
        {
          "name": "return_array"
        },
        {
          "name": "if_not_found",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "match_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "0",
              "description": "Exact match (default)"
            },
            {
              "value": "-1",
              "description": "Exact match or next smallest item"
            },
            {
              "value": "1",
              "description": "Exact match or next largest item"
            },
            {
              "value": "2",
              "description": "A wildcard match where *, ?, and ~ have special meaning."
            }
          ]
        },
        {
          "name": "search_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "1",
              "description": "Search first-to-last (default)"
            },
            {
              "value": "-1",
              "description": "Search last-to-first (reverse search)"
            },
            {
              "value": "2",
              "description": "Perform a binary search that relies on lookup_array being sorted in ascending order. If not sorted, invalid results will be returned. "
            },
            {
              "value": "-2",
              "description": "Perform a binary search that relies on lookup_array being sorted in descending order. If not sorted, invalid results will be returned."
            }
          ]
        }
      ]
    },
    "MAX": {
      "description": "This function returns the maximum value, the greatest value, of all the values in the arguments.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "MAXA": {
      "description": "This function returns the largest value in a list of arguments, including text and logical values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "MDETERM": {
      "description": "This function returns the matrix determinant of an array.",
      "parameters": [
        {
          "name": "array"
        }
      ]
    },
    "MDURATION": {
      "description": "This function calculates the modified Macaulay duration of a security with an assumed par value of $100.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "coupon"
        },
        {
          "name": "yield"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "MEDIAN": {
      "description": "This function returns the median, the number in the middle of the provided set of numbers; that is, half the numbers have values that are greater than the median, and half have values that are less than the median.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "MID": {
      "description": "This function returns the requested number of characters from a text string starting at the position you specify, and based on the number of characters you specify.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "start_num"
        },
        {
          "name": "num_chars"
        }
      ]
    },
    "MIN": {
      "description": "This function returns the minimum value, the least value, of all the values in the arguments.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "MINA": {
      "description": "This function returns the minimum value in a list of arguments, including text and logical values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "MINUTE": {
      "description": "This function returns the minute corresponding to a specified time.",
      "parameters": [
        {
          "name": "time"
        }
      ]
    },
    "MINVERSE": {
      "description": "This function returns the inverse matrix for the matrix stored in an array.",
      "parameters": [
        {
          "name": "array"
        }
      ]
    },
    "MIRR": {
      "description": "This function returns the modified internal rate of return for a series of periodic cash flows.",
      "parameters": [
        {
          "name": "values"
        },
        {
          "name": "finance_rate"
        },
        {
          "name": "reinvest_rate"
        }
      ]
    },
    "MMULT": {
      "description": "This function returns the matrix product for two arrays.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        }
      ]
    },
    "MOD": {
      "description": "This function returns the remainder of a division operation.",
      "parameters": [
        {
          "name": "dividend"
        },
        {
          "name": "divisor"
        }
      ]
    },
    "MODE": {
      "description": "This function returns the most frequently occurring value in a set of data.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "MONTH": {
      "description": "This function returns the month corresponding to the specified date value.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "MROUND": {
      "description": "This function returns a number rounded to the desired multiple.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "multiple"
        }
      ]
    },
    "MULTINOMIAL": {
      "description": "This function calculates the ratio of the factorial of a sum of values to the product of factorials.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "MUNIT": {
      "description": "The function returns the unit matrix for the specified dimension.",
      "parameters": [
        {
          "name": "dimension"
        }
      ]
    },
    "N": {
      "description": "This function returns a value converted to a number.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "NA": {
      "description": "This function returns the error value #N/A that means not available."
    },
    "SHEET": {
      "description": "Returns the sheet number of reference sheet.",
      "parameters": [
        {
          "name": "value",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SHEETS": {
      "description": "Returns the number of sheets in a reference.",
      "parameters": [
        {
          "name": "reference",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "NEGBINOMDIST": {
      "description": "This function returns the negative binomial distribution.",
      "parameters": [
        {
          "name": "number_f"
        },
        {
          "name": "number_s"
        },
        {
          "name": "probability_s"
        }
      ]
    },
    "NETWORKDAYS": {
      "description": "This function returns the total number of complete working days between the start and end dates.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "end_date"
        },
        {
          "name": "holidays",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "NOMINAL": {
      "description": "This function returns the nominal annual interest rate for a given effective rate and number of compounding periods per year.",
      "parameters": [
        {
          "name": "effect_rate"
        },
        {
          "name": "npery"
        }
      ]
    },
    "NORMDIST": {
      "description": "This function returns the normal cumulative distribution for the specified mean and standard deviation.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "NORMINV": {
      "description": "This function returns the inverse of the normal cumulative distribution for the given mean and standard deviation.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORMSDIST": {
      "description": "This function returns the standard normal cumulative distribution function.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "NORMSINV": {
      "description": "This function returns the inverse of the standard normal cumulative distribution. The distribution has a mean of zero and a standard deviation of one.",
      "parameters": [
        {
          "name": "probability"
        }
      ]
    },
    "NOT": {
      "description": "This function reverses the logical value of its argument.",
      "parameters": [
        {
          "name": "logical"
        }
      ]
    },
    "NOW": {
      "description": "This function returns the current date and time."
    },
    "NPER": {
      "description": "This function returns the number of periods for an investment based on a present value, future value, periodic payments, and a specified interest rate.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "paymt"
        },
        {
          "name": "pval"
        },
        {
          "name": "fval"
        },
        {
          "name": "type"
        }
      ]
    },
    "NPV": {
      "description": "This function calculates the net present value of an investment by using a discount rate and a series of future payments and income.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "OBJECT": {
      "description": "This function converts the property/expression sequence to an object.",
      "parameters": [
        {
          "name": "property1",
          "repeatable": true
        },
        {
          "name": "expression1",
          "repeatable": true
        }
      ]
    },
    "OCT2BIN": {
      "description": "This function converts an octal number to a binary number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "OCT2DEC": {
      "description": "This function converts an octal number to a decimal number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "OCT2HEX": {
      "description": "This function converts an octal number to a hexadecimal number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "places"
        }
      ]
    },
    "ODD": {
      "description": "This function rounds the specified value up to the nearest odd integer.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ODDFPRICE": {
      "description": "This function calculates the price per $100 face value of a security with an odd first period.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "issue"
        },
        {
          "name": "first_coupon"
        },
        {
          "name": "rate"
        },
        {
          "name": "yield"
        },
        {
          "name": "redemption"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "ODDFYIELD": {
      "description": "This function calculates the yield of a security with an odd first period.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "issue"
        },
        {
          "name": "first_coupon"
        },
        {
          "name": "rate"
        },
        {
          "name": "price"
        },
        {
          "name": "redemption"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "ODDLPRICE": {
      "description": "This function calculates the price per $100 face value of a security with an odd last coupon period.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "last_interest"
        },
        {
          "name": "rate"
        },
        {
          "name": "yield"
        },
        {
          "name": "redemption"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "ODDLYIELD": {
      "description": "This function calculates the yield of a security with an odd last period.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "last_interest"
        },
        {
          "name": "rate"
        },
        {
          "name": "price"
        },
        {
          "name": "redemption"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "OFFSET": {
      "description": "This function returns a reference to a range. The range is a specified number of rows and columns from a cell or range of cells. The function returns a single cell or a range of cells.",
      "parameters": [
        {
          "name": "reference"
        },
        {
          "name": "rows"
        },
        {
          "name": "cols"
        },
        {
          "name": "height",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "width",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "OR": {
      "description": "This function calculates logical OR. It returns TRUE if any of its arguments are true; otherwise, returns FALSE if all arguments are false.",
      "parameters": [
        {
          "name": "logical1"
        },
        {
          "name": "logical2",
          "repeatable": true
        }
      ]
    },
    "PEARSON": {
      "description": "This function returns the Pearson product moment correlation coefficient, a dimensionless index between -1.0 to 1.0 inclusive indicative of the linear relationship of two data sets.",
      "parameters": [
        {
          "name": "array_ind"
        },
        {
          "name": "array_dep"
        }
      ]
    },
    "PERCENTILE": {
      "description": "This function returns the nth percentile of values in a range.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "n"
        }
      ]
    },
    "PERCENTRANK": {
      "description": "This function returns the rank of a value in a data set as a percentage of the data set.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "x"
        },
        {
          "name": "significance"
        }
      ]
    },
    "PERMUT": {
      "description": "This function returns the number of possible permutations for a specified number of items.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "number_chosen"
        }
      ]
    },
    "PI": {
      "description": "This function returns PI as 3.1415926536."
    },
    "PMT": {
      "description": "This function returns the payment amount for a loan given the present value, specified interest rate, and number of terms.",
      "parameters": [
        {
          "name": "rate"
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
          "name": "type"
        }
      ]
    },
    "POISSON": {
      "description": "This function returns the Poisson distribution.",
      "parameters": [
        {
          "name": "nevents"
        },
        {
          "name": "mean"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "POWER": {
      "description": "This function raises the specified number to the specified power.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "power"
        }
      ]
    },
    "PPMT": {
      "description": "This function returns the amount of payment of principal for a loan given the present value, specified interest rate, and number of terms.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "per"
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
          "name": "type"
        }
      ]
    },
    "PRICE": {
      "description": "This function calculates the price per $100 face value of a periodic interest security",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "rate"
        },
        {
          "name": "yield"
        },
        {
          "name": "redemption"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "PRICEDISC": {
      "description": "This function returns the price per $100 face value of a discounted security.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "discount"
        },
        {
          "name": "redemption"
        },
        {
          "name": "basis"
        }
      ]
    },
    "PRICEMAT": {
      "description": "This function returns the price at maturity per $100 face value of a security that pays interest.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "issue"
        },
        {
          "name": "rate"
        },
        {
          "name": "yield"
        },
        {
          "name": "basis"
        }
      ]
    },
    "PROB": {
      "description": "This function returns the probability that values in a range are between two limits.",
      "parameters": [
        {
          "name": "x_range"
        },
        {
          "name": "prob_range"
        },
        {
          "name": "lower_limit"
        },
        {
          "name": "upper_limit"
        }
      ]
    },
    "PRODUCT": {
      "description": "This function multiplies all the arguments and returns the product.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "PROPER": {
      "description": "This function capitalizes the first letter in each word of a text string.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "PROPERTY": {
      "description": "This function returns the value of property path in object.",
      "parameters": [
        {
          "name": "data_expression"
        },
        {
          "name": "property_path"
        }
      ]
    },
    "PV": {
      "description": "This function returns the present value of an investment based on the interest rate, number and amount of periodic payments, and future value. The present value is the total amount that a series of future payments is worth now.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "numper"
        },
        {
          "name": "paymt"
        },
        {
          "name": "fval"
        },
        {
          "name": "type"
        }
      ]
    },
    "QUARTILE": {
      "description": "This function returns which quartile (which quarter or 25 percent) of a data set a value is.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "quart"
        }
      ]
    },
    "QUOTIENT": {
      "description": "This function returns the integer portion of a division. Use this to ignore the remainder of a division.",
      "parameters": [
        {
          "name": "numerator"
        },
        {
          "name": "denominator"
        }
      ]
    },
    "RADIANS": {
      "description": "This function converts the specified number from degrees to radians.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "RAND": {
      "description": "This function returns an evenly distributed random number between 0 and 1."
    },
    "RANDBETWEEN": {
      "description": "This function returns a random number between the numbers you specify.",
      "parameters": [
        {
          "name": "bottom"
        },
        {
          "name": "top"
        }
      ]
    },
    "RANGEBLOCKSPARKLINE": {
      "description": "This function returns a rangetemplate.",
      "parameters": [
        {
          "name": "template_range"
        },
        {
          "name": "data_expression"
        }
      ]
    },
    "RANK": {
      "description": "This function returns the rank of a number in a set of numbers. If you were to sort the set, the rank of the number would be its position in the list.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "ref"
        },
        {
          "name": "order",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "RATE": {
      "description": "This function returns the interest rate per period of an annuity.",
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
          "name": "type"
        },
        {
          "name": "guess"
        }
      ]
    },
    "RECEIVED": {
      "description": "This function returns the amount received at maturity for a fully invested security.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "investment"
        },
        {
          "name": "discount"
        },
        {
          "name": "basis"
        }
      ]
    },
    "REPLACE": {
      "description": "This function replaces part of a text string with a different text string, based on the number of characters you specify.",
      "parameters": [
        {
          "name": "old_text"
        },
        {
          "name": "start_num"
        },
        {
          "name": "num_chars"
        },
        {
          "name": "new_text"
        }
      ]
    },
    "REPT": {
      "description": "This function repeats text a specified number of times.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "number_times"
        }
      ]
    },
    "RIGHT": {
      "description": "This function returns the specified rightmost characters from a text value, and based on the number of characters you specify.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "num_chars"
        }
      ]
    },
    "ROMAN": {
      "description": "This function converts an Arabic numeral to a Roman numeral text equivalent.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "form"
        }
      ]
    },
    "ROUND": {
      "description": "This function rounds the specified value to the nearest number, using the specified number of decimal places.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "num_digits"
        }
      ]
    },
    "ROUNDDOWN": {
      "description": "This function rounds the specified number down to the nearest number, using the specified number of decimal places.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "num_digits"
        }
      ]
    },
    "ROUNDUP": {
      "description": "This function rounds the specified number up to the nearest number, using the specified number of decimal places.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "num_digits"
        }
      ]
    },
    "ROW": {
      "description": "This function returns the number of a row from a reference.",
      "parameters": [
        {
          "name": "reference"
        }
      ]
    },
    "ROWS": {
      "description": "This function returns the number of rows in an array.",
      "parameters": [
        {
          "name": "array"
        }
      ]
    },
    "RSQ": {
      "description": "This function returns the square of the Pearson product moment correlation coefficient (R-squared) through data points in known y's and known x's.",
      "parameters": [
        {
          "name": "array_dep"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SEARCH": {
      "description": "This function finds one text string in another text string and returns the index of the starting position of the found text.",
      "parameters": [
        {
          "name": "find_text"
        },
        {
          "name": "within_text"
        },
        {
          "name": "start_num",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SECOND": {
      "description": "This function returns the seconds (0 to 59) value for a specified time.",
      "parameters": [
        {
          "name": "time"
        }
      ]
    },
    "SERIESSUM": {
      "description": "This function returns the sum of a power series.",
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
      "description": "This function returns the sign of a number or expression.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "SIN": {
      "description": "This function returns the sine of the specified angle.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "SINH": {
      "description": "This function returns the hyperbolic sine of the specified number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "SKEW": {
      "description": "This function returns the skewness of a distribution.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "SLN": {
      "description": "This function returns the straight-line depreciation of an asset for one period.",
      "parameters": [
        {
          "name": "cost"
        },
        {
          "name": "salvage"
        },
        {
          "name": "life"
        }
      ]
    },
    "SLOPE": {
      "description": "This function calculates the slope of a linear regression.",
      "parameters": [
        {
          "name": "array_dep"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SMALL": {
      "description": "This function returns the nth smallest value in a data set, where n is specified.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "n"
        }
      ]
    },
    "SQRT": {
      "description": "This function returns the positive square root of the specified number.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "SQRTPI": {
      "description": "This function returns the positive square root of a multiple of pi (p).",
      "parameters": [
        {
          "name": "multiple"
        }
      ]
    },
    "STANDARDIZE": {
      "description": "This function returns a normalized value from a distribution characterized by mean and standard deviation.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "STDEVA": {
      "description": "This function returns the standard deviation for a set of numbers, text, or logical values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "STDEVP": {
      "description": "This function returns the standard deviation for an entire specified population (of numeric values).",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "STDEVPA": {
      "description": "This function returns the standard deviation for an entire specified population, including text or logical values as well as numeric values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "STEYX": {
      "description": "This function returns the standard error of the predicted y value for each x. The standard error is a measure of the amount of error in the prediction of y for a value of x.",
      "parameters": [
        {
          "name": "array_dep"
        },
        {
          "name": "array_ind"
        }
      ]
    },
    "SUBSTITUTE": {
      "description": "This function substitutes a new string for specified characters in an existing string.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "old_text"
        },
        {
          "name": "new_text"
        },
        {
          "name": "instance_num",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SUBTOTAL": {
      "description": "This function calculates a subtotal of a list of numbers using a specified built-in function.",
      "parameters": [
        {
          "name": "function_num"
        },
        {
          "name": "ref1"
        },
        {
          "name": "ref2",
          "repeatable": true
        }
      ]
    },
    "SUM": {
      "description": "This function returns the sum of cells or range of cells.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "SUMIF": {
      "description": "This function adds the cells using a given criteria.",
      "parameters": [
        {
          "name": "range"
        },
        {
          "name": "criteria"
        },
        {
          "name": "sum_range"
        }
      ]
    },
    "SUMIFS": {
      "description": "This function adds the cells in a range using multiple criteria.",
      "parameters": [
        {
          "name": "sum_range"
        },
        {
          "name": "criteria_range1"
        },
        {
          "name": "criteria1"
        },
        {
          "name": "criteria_range2",
          "repeatable": true
        },
        {
          "name": "criteria2",
          "repeatable": true
        }
      ]
    },
    "SUMPRODUCT": {
      "description": "This function returns the sum of products of cells. Multiplies corresponding components in the given arrays, and returns the sum of those products.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2",
          "repeatable": true
        }
      ]
    },
    "SUMSQ": {
      "description": "This function returns the sum of the squares of the arguments.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "SUMX2MY2": {
      "description": "This function returns the sum of the difference of the squares of corresponding values in two arrays.",
      "parameters": [
        {
          "name": "array_x"
        },
        {
          "name": "array_y"
        }
      ]
    },
    "SUMX2PY2": {
      "description": "This function returns the sum of the sum of squares of corresponding values in two arrays.",
      "parameters": [
        {
          "name": "array_x"
        },
        {
          "name": "array_y"
        }
      ]
    },
    "SUMXMY2": {
      "description": "This function returns the sum of the square of the differences of corresponding values in two arrays.",
      "parameters": [
        {
          "name": "array_x"
        },
        {
          "name": "array_y"
        }
      ]
    },
    "SYD": {
      "description": "This function returns the sum-of-years' digits depreciation of an asset for a specified period.",
      "parameters": [
        {
          "name": "cost"
        },
        {
          "name": "salvage"
        },
        {
          "name": "life"
        },
        {
          "name": "period"
        }
      ]
    },
    "T": {
      "description": "This function returns the text in a specified cell.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "TAN": {
      "description": "This function returns the tangent of the specified angle.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "TANH": {
      "description": "This function returns the hyperbolic tangent of the specified number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "TBILLEQ": {
      "description": "This function returns the equivalent yield for a Treasury bill (or T-bill)",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "discount"
        }
      ]
    },
    "TBILLPRICE": {
      "description": "This function returns the price per $100 face value for a Treasury bill (or T-bill).",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "discount"
        }
      ]
    },
    "TBILLYIELD": {
      "description": "This function returns the yield for a Treasury bill (or T-bill).",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "priceper"
        }
      ]
    },
    "TDIST": {
      "description": "This function returns the probability for the t-distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_freedom"
        },
        {
          "name": "tails"
        }
      ]
    },
    "TEXT": {
      "description": "This function formats a number and converts it to text.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "format_text"
        }
      ]
    },
    "TIME": {
      "description": "This function returns the TimeSpan object for a specified time.",
      "parameters": [
        {
          "name": "hour"
        },
        {
          "name": "minute"
        },
        {
          "name": "second"
        }
      ]
    },
    "TIMEVALUE": {
      "description": "This function returns the TimeSpan object of the time represented by a text string.",
      "parameters": [
        {
          "name": "time_text"
        }
      ]
    },
    "TINV": {
      "description": "This function returns the t-value of the student's t-distribution as a function of the probability and the degrees of freedom.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "TODAY": {
      "description": "This function returns the date and time of the current date."
    },
    "TRANSPOSE": {
      "description": "This function returns a vertical range of cells as a horizontal range or a horizontal range of cells as a vertical range.",
      "parameters": [
        {
          "name": "array"
        }
      ]
    },
    "TREND": {
      "description": "This function returns values along a linear trend. This function fits a straight line to the arrays known x and y values. Trend returns the y values along that line for the array of specified new x values.",
      "parameters": [
        {
          "name": "y"
        },
        {
          "name": "x"
        },
        {
          "name": "newx"
        },
        {
          "name": "constant"
        }
      ]
    },
    "TRIM": {
      "description": "This function removes extra spaces from a string and leaves single spaces between words.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "TRIMMEAN": {
      "description": "This function returns the mean of a subset of data excluding the top and bottom data.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "percent"
        }
      ]
    },
    "TRUE": {
      "description": "This function returns the value for logical TRUE."
    },
    "TRUNC": {
      "description": "This function removes the specified fractional part of the specified number.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "num_digits"
        }
      ]
    },
    "TTEST": {
      "description": "This function returns the probability associated with a t-test.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        },
        {
          "name": "tails"
        },
        {
          "name": "type"
        }
      ]
    },
    "TYPE": {
      "description": "This function returns the type of value.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "UPPER": {
      "description": "This function converts text to uppercase letters.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "VALUE": {
      "description": "This function converts a text string that is a number to a numeric value.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "VAR": {
      "description": "This function returns the variance based on a sample of a population, which uses only numeric values.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "VARA": {
      "description": "This function returns the variance based on a sample of a population, which includes numeric, logical, or text values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "VARP": {
      "description": "This function returns variance based on the entire population, which uses only numeric values.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "VARPA": {
      "description": "This function returns variance based on the entire population, which includes numeric, logical, or text values.",
      "parameters": [
        {
          "name": "value1"
        },
        {
          "name": "value2",
          "repeatable": true
        }
      ]
    },
    "VDB": {
      "description": "This function returns the depreciation of an asset for any period you specify using the variable declining balance method.",
      "parameters": [
        {
          "name": "cost"
        },
        {
          "name": "salvage"
        },
        {
          "name": "life"
        },
        {
          "name": "start_period"
        },
        {
          "name": "end_period"
        },
        {
          "name": "factor"
        },
        {
          "name": "no_switch"
        }
      ]
    },
    "VLOOKUP": {
      "description": "This function searches for a value in the leftmost column and returns a value in the same row from a column you specify.",
      "parameters": [
        {
          "name": "lookup_value"
        },
        {
          "name": "table_array"
        },
        {
          "name": "col_index_num"
        },
        {
          "name": "range_lookup",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "TRUE",
              "description": "Approximate match"
            },
            {
              "value": "FALSE",
              "description": "Exact match"
            }
          ]
        }
      ]
    },
    "WEEKDAY": {
      "description": "This function returns the number corresponding to the day of the week for a specified date.",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "type"
        }
      ]
    },
    "WEEKNUM": {
      "description": "This function returns a number that indicates the week of the year numerically.",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "weektype"
        }
      ]
    },
    "DATEPART": {
      "description": "This function formats a date and converts it to text.",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "format_text"
        },
        {
          "name": "weektype",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "WEIBULL": {
      "description": "This function returns the two-parameter Weibull distribution, often used in reliability analysis.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "WORKDAY": {
      "description": "This function returns the number of working days before or after the starting date.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "days"
        },
        {
          "name": "holidays",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "XIRR": {
      "description": "This function calculates the internal rate of return for a schedule of cash flows that may not be periodic.",
      "parameters": [
        {
          "name": "values"
        },
        {
          "name": "dates"
        },
        {
          "name": "guess"
        }
      ]
    },
    "XNPV": {
      "description": "This function calculates the net present value for a schedule of cash flows that may not be periodic.",
      "parameters": [
        {
          "name": "rate"
        },
        {
          "name": "values"
        },
        {
          "name": "dates"
        }
      ]
    },
    "YEAR": {
      "description": "This function returns the year as an integer for a specified date.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "YEARFRAC": {
      "description": "This function returns the fraction of the year represented by the number of whole days between the start and end dates.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "end_date"
        },
        {
          "name": "basis"
        }
      ]
    },
    "YIELD": {
      "description": "This function calculates the yield on a security that pays periodic interest.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "rate"
        },
        {
          "name": "price"
        },
        {
          "name": "redemption"
        },
        {
          "name": "frequency"
        },
        {
          "name": "basis"
        }
      ]
    },
    "YIELDDISC": {
      "description": "This function calculates the annual yield for a discounted security.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "price"
        },
        {
          "name": "redemption"
        },
        {
          "name": "basis"
        }
      ]
    },
    "YIELDMAT": {
      "description": "This function calculates the annual yield of a security that pays interest at maturity.",
      "parameters": [
        {
          "name": "settlement"
        },
        {
          "name": "maturity"
        },
        {
          "name": "issue"
        },
        {
          "name": "rate"
        },
        {
          "name": "price"
        },
        {
          "name": "basis"
        }
      ]
    },
    "ZTEST": {
      "description": "This function returns the significance value of a z-test. The z-test generates a standard score for x with respect to the set of data and returns the two-tailed probability for the normal distribution.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "x"
        },
        {
          "name": "sigma",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "HBARSPARKLINE": {
      "description": "This function returns a data set used for representing a Hbar sparkline",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "colorScheme"
        },
        {
          "name": "axisVisible"
        },
        {
          "name": "barHeight"
        }
      ]
    },
    "VBARSPARKLINE": {
      "description": "This function returns a data set used for representing a Vbar sparkline",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "colorScheme"
        },
        {
          "name": "axisVisible"
        },
        {
          "name": "barWidth"
        }
      ]
    },
    "VARISPARKLINE": {
      "description": "This function returns a data set used for representing a variance sparkline",
      "parameters": [
        {
          "name": "variance"
        },
        {
          "name": "reference"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "mark"
        },
        {
          "name": "tickunit"
        },
        {
          "name": "legend"
        },
        {
          "name": "colorPositive"
        },
        {
          "name": "colorNegative"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "LOLLIPOPVARISPARKLINE": {
      "description": "This function returns a data set used for representing an absolute or relative lollipop variance sparkline",
      "parameters": [
        {
          "name": "plannedValue"
        },
        {
          "name": "actualValue"
        },
        {
          "name": "index"
        },
        {
          "name": "absolute"
        },
        {
          "name": "reference"
        },
        {
          "name": "mini"
        },
        {
          "name": "maxi"
        },
        {
          "name": "tickunit"
        },
        {
          "name": "legend"
        },
        {
          "name": "colorPositive"
        },
        {
          "name": "colorNegative"
        },
        {
          "name": "lollipopHeaderColor"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "PIESPARKLINE": {
      "description": "This function returns a data set used for representing a pie sparkline",
      "parameters": [
        {
          "name": "range|percentage"
        },
        {
          "name": "color",
          "repeatable": true
        }
      ]
    },
    "AREASPARKLINE": {
      "description": "This function returns a data set used for representing a area sparkline",
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
          "name": "line1"
        },
        {
          "name": "line2"
        },
        {
          "name": "colorPositive"
        },
        {
          "name": "colorNegative"
        }
      ]
    },
    "SCATTERSPARKLINE": {
      "description": "This function returns a data set used for representing a scatter sparkline",
      "parameters": [
        {
          "name": "points1"
        },
        {
          "name": "points2"
        },
        {
          "name": "minX"
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
          "name": "hLine"
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
          "name": "tags"
        },
        {
          "name": "drawSymbol"
        },
        {
          "name": "drawLines"
        },
        {
          "name": "color1"
        },
        {
          "name": "color2"
        },
        {
          "name": "dash"
        }
      ]
    },
    "LINESPARKLINE": {
      "description": "This function returns a data set used for representing a line sparkline",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "dataOrientation"
        },
        {
          "name": "dateAxisData"
        },
        {
          "name": "dateAxisOrientation"
        },
        {
          "name": "setting"
        }
      ]
    },
    "COLUMNSPARKLINE": {
      "description": "This function returns a data set used for representing a column sparkline",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "dataOrientation"
        },
        {
          "name": "dateAxisData"
        },
        {
          "name": "dateAxisOrientation"
        },
        {
          "name": "setting"
        }
      ]
    },
    "WINLOSSSPARKLINE": {
      "description": "This function returns a data set used for representing a win/loss sparkline",
      "parameters": [
        {
          "name": "data"
        },
        {
          "name": "dataOrientation"
        },
        {
          "name": "dateAxisData"
        },
        {
          "name": "dateAxisOrientation"
        },
        {
          "name": "setting"
        }
      ]
    },
    "BULLETSPARKLINE": {
      "description": "This function returns a data set used for representing a bullet sparkline",
      "parameters": [
        {
          "name": "measure"
        },
        {
          "name": "target"
        },
        {
          "name": "maxi"
        },
        {
          "name": "good"
        },
        {
          "name": "bad"
        },
        {
          "name": "forecast"
        },
        {
          "name": "tickunit"
        },
        {
          "name": "colorScheme"
        },
        {
          "name": "vertical"
        },
        {
          "name": "measureColor"
        },
        {
          "name": "targetColor"
        },
        {
          "name": "maxiColor"
        },
        {
          "name": "goodColor"
        },
        {
          "name": "badColor"
        },
        {
          "name": "forecastColor"
        },
        {
          "name": "allowMeasureOverMaxi"
        },
        {
          "name": "barSize"
        }
      ]
    },
    "SPREADSPARKLINE": {
      "description": "This function returns a data set used for representing a spread sparkline",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "showAverage"
        },
        {
          "name": "scaleStart"
        },
        {
          "name": "scaleEnd"
        },
        {
          "name": "style"
        },
        {
          "name": "colorScheme"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "STACKEDSPARKLINE": {
      "description": "This function returns a data set used for representing a stacked sparkline",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "colorRange"
        },
        {
          "name": "labelRange"
        },
        {
          "name": "maximum"
        },
        {
          "name": "targetRed"
        },
        {
          "name": "targetGreen"
        },
        {
          "name": "targetBlue"
        },
        {
          "name": "tragetYellow"
        },
        {
          "name": "color"
        },
        {
          "name": "highlightPosition"
        },
        {
          "name": "vertical"
        },
        {
          "name": "textOrientation"
        },
        {
          "name": "textSize"
        }
      ]
    },
    "BOXPLOTSPARKLINE": {
      "description": "This function returns a data set used for representing a boxplot sparkline",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "boxPlotClass"
        },
        {
          "name": "showAverage"
        },
        {
          "name": "scaleStart"
        },
        {
          "name": "scaleEnd"
        },
        {
          "name": "acceptableStart"
        },
        {
          "name": "acceptableEnd"
        },
        {
          "name": "colorScheme"
        },
        {
          "name": "style"
        },
        {
          "name": "vertical"
        }
      ]
    },
    "CASCADESPARKLINE": {
      "description": "This function returns a data set used for representing a cascade sparkline",
      "parameters": [
        {
          "name": "pointsRange"
        },
        {
          "name": "pointIndex"
        },
        {
          "name": "labelsRange"
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
          "name": "colorNegative"
        },
        {
          "name": "vertical"
        },
        {
          "name": "itemTypeRange"
        },
        {
          "name": "colorTotal"
        }
      ]
    },
    "PARETOSPARKLINE": {
      "description": "This function returns a data set used for representing a pareto sparkline",
      "parameters": [
        {
          "name": "points"
        },
        {
          "name": "pointIndex"
        },
        {
          "name": "colorRange"
        },
        {
          "name": "target"
        },
        {
          "name": "target2"
        },
        {
          "name": "highlightPosition"
        },
        {
          "name": "label"
        },
        {
          "name": "vertical"
        },
        {
          "name": "targetColor"
        },
        {
          "name": "target2Color"
        },
        {
          "name": "labelColor"
        },
        {
          "name": "barSize"
        }
      ]
    },
    "MONTHSPARKLINE": {
      "description": "This function returns a data set used for representing a month sparkline",
      "parameters": [
        {
          "name": "year"
        },
        {
          "name": "month"
        },
        {
          "name": "dataRange"
        },
        {
          "name": "emptyColor"
        },
        {
          "name": "startColor"
        },
        {
          "name": "middleColor"
        },
        {
          "name": "endColor"
        }
      ]
    },
    "YEARSPARKLINE": {
      "description": "This function returns a data set used for representing a year sparkline",
      "parameters": [
        {
          "name": "year"
        },
        {
          "name": "dataRange"
        },
        {
          "name": "emptyColor"
        },
        {
          "name": "startColor"
        },
        {
          "name": "middleColor"
        },
        {
          "name": "endColor"
        }
      ]
    },
    "GAUGEKPISPARKLINE": {
      "description": "This function returns a data set used for representing a gauge KPI sparkline",
      "parameters": [
        {
          "name": "targetValue"
        },
        {
          "name": "currentValue"
        },
        {
          "name": "minValue"
        },
        {
          "name": "maxValue"
        },
        {
          "name": "showLabel",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "targetValueLabel",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "currentValueLabel",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "minValueLabel",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "maxValueLabel",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "fontArray",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "minAngle",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "maxAngle",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "radiusRatio",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "gaugeType",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "colorRange",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "HISTOGRAMSPARKLINE": {
      "description": "This function returns a data set used for representing a histogram sparkline",
      "parameters": [
        {
          "name": "dateRange"
        },
        {
          "name": "continuous"
        },
        {
          "name": "paintLabel"
        },
        {
          "name": "scale"
        },
        {
          "name": "barWidth"
        },
        {
          "name": "barColor"
        },
        {
          "name": "labelFontStyle"
        },
        {
          "name": "labelColor"
        },
        {
          "name": "edgeColor"
        }
      ]
    },
    "CEILING.PRECISE": {
      "description": "This function rounds a number up to the nearest integer or to the nearest multiple of a specified value.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "significance",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "COVARIANCE.S": {
      "description": "This function returns the sample covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        }
      ]
    },
    "FLOOR.PRECISE": {
      "description": "This function rounds a number down to the nearest integer or to the nearest multiple of a specified value.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "significance",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "PERCENTILE.EXC": {
      "description": "This function returns the nth percentile of values in a range.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.EXC": {
      "description": "This function returns which quartile (which quarter or 25 percent) of a data set a value is.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "quart"
        }
      ]
    },
    "RANK.AVG": {
      "description": "This function returns the rank of a number in a set of numbers. If some values have the same rank, it will return the average rank.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "ref"
        },
        {
          "name": "order",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "MODE.MULT": {
      "description": "This function returns the most frequently occurring vertical array or the most frequently occurring value in a set of data.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "STDEV.P": {
      "description": "This function returns the standard deviation for an entire specified population (of numeric values).",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "VAR.P": {
      "description": "This function returns variance based on the entire population, which uses only numeric values.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "COVARIANCE.P": {
      "description": "This function returns the covariance, which is the average of the products of deviations for each data point pair in two sets of numbers.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        }
      ]
    },
    "MODE.SNGL": {
      "description": "This function returns the most frequently occurring value in a set of data.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "PERCENTILE.INC": {
      "description": "This function returns the nth percentile of values in a range.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "k"
        }
      ]
    },
    "QUARTILE.INC": {
      "description": "This function returns which quartile (which quarter or 25 percent) of a data set a value is.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "quart"
        }
      ]
    },
    "RANK.EQ": {
      "description": "This function returns the rank of a number in a set of numbers. If you were to sort the set, the rank of the number would be its position in the list.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "ref"
        },
        {
          "name": "order",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "STDEV": {
      "description": "This function returns standard deviation is estimated based on a sample.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "STDEV.S": {
      "description": "This function returns standard deviation is estimated based on a sample.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "VAR.S": {
      "description": "This function returns the variance based on a sample of a population, which uses only numeric values.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "BETA.INV": {
      "description": "This function calculates the inverse of the cumulative beta distribution function.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "lower",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "upper",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "BINOM.DIST": {
      "description": "This function calculates the individual term binomial distribution probability.",
      "parameters": [
        {
          "name": "number_s"
        },
        {
          "name": "trials"
        },
        {
          "name": "probability_s"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "BINOM.INV": {
      "description": "This function returns the criterion binomial, the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.",
      "parameters": [
        {
          "name": "trials"
        },
        {
          "name": "probability_s"
        },
        {
          "name": "alpha"
        }
      ]
    },
    "CHISQ.DIST.RT": {
      "description": "This function calculates the one-tailed probability of the chi-squared distribution.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "CHISQ.INV.RT": {
      "description": "This function calculates the inverse of the one-tailed probability of the chi-squared distribution.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "CHISQ.TEST": {
      "description": "This function calculates the test for independence from the chi-squared distribution.",
      "parameters": [
        {
          "name": "actual_range"
        },
        {
          "name": "expected_range"
        }
      ]
    },
    "CONFIDENCE.NORM": {
      "description": "This function returns confidence interval for a population mean.",
      "parameters": [
        {
          "name": "alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "size"
        }
      ]
    },
    "EXPON.DIST": {
      "description": "This function returns the exponential distribution or the probability density.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "lambda"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "F.DIST.RT": {
      "description": "This function calculates the F probability distribution, to see degrees of diversity between two sets of data.",
      "parameters": [
        {
          "name": "value"
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
      "description": "This function returns the inverse of the F probability distribution.",
      "parameters": [
        {
          "name": "probability"
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
      "description": "This function returns the result of an F-test, which returns the one-tailed probability that the variances in two arrays are not significantly different.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        }
      ]
    },
    "GAMMA.DIST": {
      "description": "This function returns the gamma distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "GAMMA.INV": {
      "description": "This function returns the inverse of the gamma cumulative distribution.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        }
      ]
    },
    "LOGNORM.INV": {
      "description": "This function returns the inverse of the lognormal cumulative distribution function of x, where LN(x) is normally distributed with the specified mean and standard deviation.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORM.DIST": {
      "description": "This function returns the normal cumulative distribution for the specified mean and standard deviation.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "NORM.INV": {
      "description": "This function returns the inverse of the normal cumulative distribution for the given mean and standard deviation.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "mean"
        },
        {
          "name": "standard_dev"
        }
      ]
    },
    "NORM.S.INV": {
      "description": "This function returns the inverse of the standard normal cumulative distribution. The distribution has a mean of zero and a standard deviation of one.",
      "parameters": [
        {
          "name": "probability"
        }
      ]
    },
    "PERCENTRANK.INC": {
      "description": "This function returns the rank of a value in a data set as a percentage of the data set.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "n"
        },
        {
          "name": "significance",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "POISSON.DIST": {
      "description": "This function returns the Poisson distribution.",
      "parameters": [
        {
          "name": "nevents"
        },
        {
          "name": "mean"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "T.INV.2T": {
      "description": "This function returns the t-value of the student's t-distribution as a function of the probability and the degrees of freedom.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "T.TEST": {
      "description": "This function returns the probability associated with a t-test.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2"
        },
        {
          "name": "tails"
        },
        {
          "name": "type"
        }
      ]
    },
    "WEIBULL.DIST": {
      "description": "This function returns the two-parameter Weibull distribution, often used in reliability analysis.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "Z.TEST": {
      "description": "This function returns the significance value of a z-test. The z-test generates a standard score for x with respect to the set of data and returns the two-tailed probability for the normal distribution.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "x"
        },
        {
          "name": "sigma",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "T.DIST.RT": {
      "description": "This function returns the right-tailed t-distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "T.DIST.2T": {
      "description": "This function returns the two-tailed t-distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "ISO.CEILING": {
      "description": "This function returns a number up to the nearest integer or to the nearest multiple of significance, regardless of sign of significance.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "significance",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "BETA.DIST": {
      "description": "This function returns the beta distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "alpha"
        },
        {
          "name": "beta"
        },
        {
          "name": "cumulative"
        },
        {
          "name": "lower"
        },
        {
          "name": "upper"
        }
      ]
    },
    "GAMMALN.PRECISE": {
      "description": "This function returns the natural logarithm of the gamma function.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "ERF.PRECISE": {
      "description": "This function returns the error function.",
      "parameters": [
        {
          "name": "lowerlimit"
        }
      ]
    },
    "ERFC.PRECISE": {
      "description": "This function returns the complementary ERF function.",
      "parameters": [
        {
          "name": "lowerlimit"
        }
      ]
    },
    "PERCENTRANK.EXC": {
      "description": "This function returns the percentage rank(0..1, exclusive) of a value in a data set.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "x"
        },
        {
          "name": "significance",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "HYPGEOM.DIST": {
      "description": "This function returns the hypergeometric distribution.",
      "parameters": [
        {
          "name": "sample_s"
        },
        {
          "name": "number_sample"
        },
        {
          "name": "population_s"
        },
        {
          "name": "number_pop"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "LOGNORM.DIST": {
      "description": "This function returns the log normal distribution of x.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "mean"
        },
        {
          "name": "stdev"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "NEGBINOM.DIST": {
      "description": "This function returns the negative binomial distribution.",
      "parameters": [
        {
          "name": "number_f"
        },
        {
          "name": "number_s"
        },
        {
          "name": "probability_s"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "NORM.S.DIST": {
      "description": "This function returns the standard normal distribution.",
      "parameters": [
        {
          "name": "z"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "T.DIST": {
      "description": "This function returns the t-distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_freedom"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "F.DIST": {
      "description": "This function returns the F probability distribution.",
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
          "name": "cumulative"
        }
      ]
    },
    "CHISQ.DIST": {
      "description": "This function returns the chi-squared distribution.",
      "parameters": [
        {
          "name": "x"
        },
        {
          "name": "deg_freedom"
        },
        {
          "name": "cumulative"
        }
      ]
    },
    "F.INV": {
      "description": "This function returns the inverse of the F probability distribution.",
      "parameters": [
        {
          "name": "probability"
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
      "description": "This function returns the left-tailed inverse of the t-distribution.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "CHISQ.INV": {
      "description": "This function returns the inverse of left-tailed probability of the chi-squared distribution.",
      "parameters": [
        {
          "name": "probability"
        },
        {
          "name": "deg_freedom"
        }
      ]
    },
    "CONFIDENCE.T": {
      "description": "This function returns the confidence interval for a Student's t distribution.",
      "parameters": [
        {
          "name": "alpha"
        },
        {
          "name": "standard_dev"
        },
        {
          "name": "size"
        }
      ]
    },
    "NETWORKDAYS.INTL": {
      "description": "This function returns the number of workdays between two dates using arguments to indicate holidays and weekend days.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "end_date"
        },
        {
          "name": "weekend",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "holidays",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "WORKDAY.INTL": {
      "description": "This function returns the serial number of the date before or after a number of workdays with custom weekend parameters. These parameters indicate weekend days and holidays.",
      "parameters": [
        {
          "name": "start_date"
        },
        {
          "name": "days"
        },
        {
          "name": "weekend",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "holidays",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "REFRESH": {
      "description": "This function decides how to re-calculate the formula. Can use the evaluateMode argument to specific the formula re-calculate on the reference value changed, evaluate once , re-calculate or interval.",
      "parameters": [
        {
          "name": "formula"
        },
        {
          "name": "evaluateMode"
        },
        {
          "name": "interval"
        }
      ]
    },
    "DAYS": {
      "description": "This function returns the number of days between two dates.",
      "parameters": [
        {
          "name": "end_date"
        },
        {
          "name": "start_date"
        }
      ]
    },
    "ISOWEEKNUM": {
      "description": "This function returns the number of the ISO week number of the year for a given date.",
      "parameters": [
        {
          "name": "date"
        }
      ]
    },
    "BITAND": {
      "description": "This function returns a bitwise \\\"AND\\\" of two numbers.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2"
        }
      ]
    },
    "BITLSHIFT": {
      "description": "This function returns a bitwise \\\"OR\\\" of two numbers.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "shift_amount"
        }
      ]
    },
    "BITOR": {
      "description": "This function returns a bitwise \\\"OR\\\" of two numbers.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2"
        }
      ]
    },
    "BITRSHIFT": {
      "description": "This function returns a bitwise \\\"OR\\\" of two numbers.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "shift_amount"
        }
      ]
    },
    "BITXOR": {
      "description": "This function returns a bitwise \\\"XOR\\\" of two numbers.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2"
        }
      ]
    },
    "IMCOSH": {
      "description": "This function returns the hyperbolic cosine of a complex number in x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMCOT": {
      "description": "This function returns the cotangent of a complex number in x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMCSC": {
      "description": "This function returns the cosecant of a complex number in x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMCSCH": {
      "description": "This function returns the hyperbolic cosecant of a complex number in x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMSEC": {
      "description": "This function returns the secant of a complex number in x+yi of x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMSECH": {
      "description": "This function returns the hyperbolic secant of a complex number in x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMSINH": {
      "description": "This function returns the hyperbolic sine of a complex number in x+yi of x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "IMTAN": {
      "description": "This function returns the tangent of a complex number in x+yi or x+yj text format.",
      "parameters": [
        {
          "name": "complexnum"
        }
      ]
    },
    "PDURATION": {
      "description": "This function returns the number of periods required by an investment to reach a specified value.",
      "parameters": [
        {
          "name": "rate"
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
      "description": "This function returns an equivalent interest rate for the growth of an investment.",
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
      "description": "This function tests whether contains a formula of a referenced cell.",
      "parameters": [
        {
          "name": "cellreference"
        }
      ]
    },
    "IFNA": {
      "description": "This function returns the value you specify if the formula returns the #N/A error value, otherwise returns the result of the formula.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "value_if_na"
        }
      ]
    },
    "IFS": {
      "description": "This function checks whether one or more conditions are met and returns a value that corresponds to the first TRUE condition.",
      "parameters": [
        {
          "name": "logical_test1"
        },
        {
          "name": "value_if_true1"
        },
        {
          "name": "logical_test2",
          "repeatable": true
        },
        {
          "name": "value_if_true2",
          "repeatable": true
        }
      ]
    },
    "SWITCH": {
      "description": "This function evaluates one value (called the expression) against a list of values, and returns the result corresponding to the first matching value. If there is no match, an optional default value may be returned.",
      "parameters": [
        {
          "name": "expression"
        },
        {
          "name": "value1"
        },
        {
          "name": "result1"
        },
        {
          "name": "default_or_value2",
          "repeatable": true,
          "optional": true
        },
        {
          "name": "result2",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "XOR": {
      "description": "This function returns a logical exclusive or of all arguments.",
      "parameters": [
        {
          "name": "logical",
          "repeatable": true
        }
      ]
    },
    "AREAS": {
      "description": "This function returns the number of areas in a reference.",
      "parameters": [
        {
          "name": "reference"
        }
      ]
    },
    "FORMULATEXT": {
      "description": "This function returns a formula as a string.",
      "parameters": [
        {
          "name": "reference"
        }
      ]
    },
    "HYPERLINK": {
      "description": "This function creates a shortcut or jump that opens a document stored on a network server, an intranet, or the Internet.",
      "parameters": [
        {
          "name": "link_location"
        },
        {
          "name": "friendly_name"
        }
      ]
    },
    "ACOT": {
      "description": "This function calculates the inverse arccotangent of a number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ACOTH": {
      "description": "This function calculates the inverse hyperbolic arccotangent of a number.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "ARABIC": {
      "description": "This function converts a Roman numeral text to an Arabic numeral equivalent.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "BASE": {
      "description": "This function converts a number into a text representation with the given radix (base).",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "radix"
        },
        {
          "name": "min_length",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "CEILING.MATH": {
      "description": "This function round  a number up to the nearest integer or to the nearest multiple of significance.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "significance",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "mode",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "COMBINA": {
      "description": "This function calculates the number of possible combinations with repetitions for a specified number of items.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "number_chosen"
        }
      ]
    },
    "COT": {
      "description": "This function returns the cotangent of the specified angle.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "COTH": {
      "description": "This function returns the hyperbolic cotangent of the specified number.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "CSC": {
      "description": "This function returns the cosecant of the specified angle.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "CSCH": {
      "description": "This function returns the hyperbolic cosecant of the specified number.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "DECIMAL": {
      "description": "This function converts a text representation of a number in a given base into a decimal number.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "radix"
        }
      ]
    },
    "FLOOR.MATH": {
      "description": "This function round a number down to the nearest integer or to the nearest multiple of significance.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "significance",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "mode",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SEC": {
      "description": "This function returns the secant of the specified angle.",
      "parameters": [
        {
          "name": "angle"
        }
      ]
    },
    "SECH": {
      "description": "This function returns the hyperbolic secant of the specified value.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "BINOM.DIST.RANGE": {
      "description": "This function calculates the probability of a trial result using a binomial distribution.",
      "parameters": [
        {
          "name": "trials"
        },
        {
          "name": "probability_s"
        },
        {
          "name": "number_s"
        },
        {
          "name": "number_s2",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "GAMMA": {
      "description": "This function returns the gamma function value.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "MAXIFS": {
      "description": "This function returns the maximum value among cells specified by a given set of conditions or criteria.",
      "parameters": [
        {
          "name": "max_range"
        },
        {
          "name": "criteria_range1"
        },
        {
          "name": "criteria1"
        },
        {
          "name": "criteria_range2",
          "repeatable": true
        },
        {
          "name": "criteria2",
          "repeatable": true
        }
      ]
    },
    "GAUSS": {
      "description": "This function calculates the probability that a member of a standard normal population will fall between the mean and z standard deviations from the mean.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "MINIFS": {
      "description": "This function returns the minimum value among cells specified by a given set of conditions or criteria.",
      "parameters": [
        {
          "name": "min_range"
        },
        {
          "name": "criteria_range1"
        },
        {
          "name": "criteria1"
        },
        {
          "name": "criteria_range2",
          "repeatable": true
        },
        {
          "name": "criteria2",
          "repeatable": true
        }
      ]
    },
    "PERMUTATIONA": {
      "description": "This function returns the number of permutations for a given number of object that can be selected from the total objects.",
      "parameters": [
        {
          "name": "number"
        },
        {
          "name": "number_chosen"
        }
      ]
    },
    "PHI": {
      "description": "This function returns the value of the density function for a standard normal distribution.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "SKEW.P": {
      "description": "This function returns the skewness of a distribution base on a poopulation: a characterization of the degree of asymmetry of a distribution around its mean.",
      "parameters": [
        {
          "name": "number1"
        },
        {
          "name": "number2",
          "repeatable": true
        }
      ]
    },
    "BAHTTEXT": {
      "description": "This function converts a number to Thai text and adds a suffix of \\\"Baht\\",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "CONCAT": {
      "description": "This function combines multiple text strings or numbers into one text string, the function will stay available for compatibility with \\\"CONCATENATE\\\" function.",
      "parameters": [
        {
          "name": "text1"
        },
        {
          "name": "text2",
          "repeatable": true
        }
      ]
    },
    "FINDB": {
      "description": "This function finds one text value within another and returns the text value's position in the text you searched, and counts each double-byte characte as 2 when set DBCS as the default language.",
      "parameters": [
        {
          "name": "find_text"
        },
        {
          "name": "within_text"
        },
        {
          "name": "start_num",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "LEFTB": {
      "description": "This function returns the specified leftmost characters from a text value, and based on the number of bytes you specify.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "num_bytes"
        }
      ]
    },
    "LENB": {
      "description": "This function returns the length of the number of bytes in a text string.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "MIDB": {
      "description": "This function returns the requested number of characters from a text string starting at the position you specify, and based on the number of bytes you specify.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "start_num"
        },
        {
          "name": "num_bytes"
        }
      ]
    },
    "REPLACEB": {
      "description": "This function replaces part of a text string with a different text string, based on the number of bytes you specify.",
      "parameters": [
        {
          "name": "old_text"
        },
        {
          "name": "start_byte"
        },
        {
          "name": "num_bytes"
        },
        {
          "name": "new_text"
        }
      ]
    },
    "RIGHTB": {
      "description": "This function returns the specified rightmost characters from a text value, and based on the number of bytes you specify.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "num_bytes"
        }
      ]
    },
    "SEARCHB": {
      "description": "This function finds one text string in another text string and returns the index of the starting position of the found text, and counts each double-byte characte as 2 when set DBCS as the default language.",
      "parameters": [
        {
          "name": "find_text"
        },
        {
          "name": "within_text"
        },
        {
          "name": "start_num",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "TEXTJOIN": {
      "description": "This function combines multiple ranges and/or strings into one text, and the text includes a delimiter you specify between each text value.",
      "parameters": [
        {
          "name": "delimiter"
        },
        {
          "name": "ignore_empty"
        },
        {
          "name": "text1"
        },
        {
          "name": "text2",
          "repeatable": true
        }
      ]
    },
    "UNICHAR": {
      "description": "This function returns the Unicode character of a given numeric reference.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "UNICODE": {
      "description": "This function returns the number corresponding to the first character of the text.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "ENCODEURL": {
      "description": "This function returns a URL-encoded string.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "BC_QRCODE": {
      "description": "This function returns a data set for representing a QRCode",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "errorCorrectionLevel"
        },
        {
          "name": "model"
        },
        {
          "name": "version"
        },
        {
          "name": "mask"
        },
        {
          "name": "connection"
        },
        {
          "name": "connectionNo"
        },
        {
          "name": "charCode"
        },
        {
          "name": "charset"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_EAN13": {
      "description": "This function returns a data set for representing a EAN13.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "addOn"
        },
        {
          "name": "addOnLabelPosition"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_EAN8": {
      "description": "This function returns a data set for representing a EAN8.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_CODABAR": {
      "description": "This function returns a data set for representing a CODABAR.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "checkDigit"
        },
        {
          "name": "nwRatio"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_CODE39": {
      "description": "This function returns a data set for representing a CODE39.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "labelWithStartAndStopCharacter"
        },
        {
          "name": "checkDigit"
        },
        {
          "name": "nwRatio"
        },
        {
          "name": "fullASCII"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_CODE93": {
      "description": "This function returns a data set for representing a CODE93.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "checkDigit"
        },
        {
          "name": "fullASCII"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_CODE128": {
      "description": "This function returns a data set for representing a CODE128.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "codeSet"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_GS1_128": {
      "description": "This function returns a data set for representing a GS1_128.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_CODE49": {
      "description": "This function returns a data set for representing a CODE49.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "showLabel"
        },
        {
          "name": "labelPosition"
        },
        {
          "name": "grouping"
        },
        {
          "name": "groupNo"
        },
        {
          "name": "fontFamily"
        },
        {
          "name": "fontStyle"
        },
        {
          "name": "fontWeight"
        },
        {
          "name": "textDecoration"
        },
        {
          "name": "textAlign"
        },
        {
          "name": "fontSize"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_PDF417": {
      "description": "This function returns a data set for representing a PDF417.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
        },
        {
          "name": "errorCorrectionLevel"
        },
        {
          "name": "rows"
        },
        {
          "name": "columns"
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
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "BC_DATAMATRIX": {
      "description": "This function returns a data set for representing a DATAMATRIX.",
      "parameters": [
        {
          "name": "value"
        },
        {
          "name": "color"
        },
        {
          "name": "backgroundColor"
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
          "name": "ecc00_140SymbolSize"
        },
        {
          "name": "structuredAppend"
        },
        {
          "name": "structureNumber"
        },
        {
          "name": "fileIdentifier"
        },
        {
          "name": "quietZoneLeft"
        },
        {
          "name": "quietZoneRight"
        },
        {
          "name": "quietZoneTop"
        },
        {
          "name": "quietZoneBottom"
        }
      ]
    },
    "FILTER": {
      "description": "This function filter a range or array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "include"
        },
        {
          "name": "if_empty",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "RANDARRAY": {
      "description": "This function returns an array of random numbers.",
      "parameters": [
        {
          "name": "rows"
        },
        {
          "name": "columns"
        },
        {
          "name": "min"
        },
        {
          "name": "max"
        },
        {
          "name": "whole_number"
        }
      ]
    },
    "SEQUENCE": {
      "description": "This function returns a sequence of numbers.",
      "parameters": [
        {
          "name": "rows"
        },
        {
          "name": "columns"
        },
        {
          "name": "start"
        },
        {
          "name": "step"
        }
      ]
    },
    "SINGLE": {
      "description": "This function returns a single value when given a value, range or array.",
      "parameters": [
        {
          "name": "value"
        }
      ]
    },
    "SORT": {
      "description": "This function sorts a range or array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "sort_index"
        },
        {
          "name": "sort_order"
        },
        {
          "name": "by_col"
        }
      ]
    },
    "SORTBY": {
      "description": "This function sorts a range or array based on the values in a corresponding range or array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "by_array1"
        },
        {
          "name": "sort_order1"
        },
        {
          "name": "by_array2",
          "repeatable": true
        },
        {
          "name": "sort_order2",
          "repeatable": true
        }
      ]
    },
    "UNIQUE": {
      "description": "This function returns the unique values from a range or array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "by_col",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "exactly_once",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "QUERY": {
      "description": "This function returns data from data manager tables in a worksheet.",
      "parameters": [
        {
          "name": "tableAndRows"
        },
        {
          "name": "columns"
        },
        {
          "name": "returnObject"
        }
      ]
    },
    "LET": {
      "description": "This function assigns calculation results to names. Useful for storing intermediate calculations and values by defining names inside a formula. These names only apply within the scope of the LET function.",
      "parameters": [
        {
          "name": "name1"
        },
        {
          "name": "name_value1"
        },
        {
          "name": "name2",
          "repeatable": true
        },
        {
          "name": "name_value2",
          "repeatable": true
        },
        {
          "name": "calculation"
        }
      ]
    },
    "IMAGE": {
      "description": "This function input an URL or a base64 string to show an image in cell",
      "parameters": [
        {
          "name": "source"
        },
        {
          "name": "[alt_text]"
        },
        {
          "name": "[sizing]"
        },
        {
          "name": "[height]"
        },
        {
          "name": "[width]"
        },
        {
          "name": "[clipY]"
        },
        {
          "name": "[clipX]"
        },
        {
          "name": "[clipHeight]"
        },
        {
          "name": "[clipWidth]"
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
      "description": "This function extracts data stored in a PivotTable",
      "parameters": [
        {
          "name": "data_field"
        },
        {
          "name": "pivot_table"
        },
        {
          "name": "field1, item1",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "WEBSERVICE": {
      "description": "This function returns data from a web service",
      "parameters": [
        {
          "name": "url"
        }
      ]
    },
    "FILTERJSON": {
      "description": "This function parses json string to a scalar value, an object or an array of objects.",
      "parameters": [
        {
          "name": "json_string"
        }
      ]
    },
    "ASC": {
      "description": "The ASC function changes full-width(double-byte) characters to half-width(single-byte) characters, Use with double-byte character sets (DBCS).",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "DBCS": {
      "description": "The DBCS function converts half-width(single-byte) letters within a character string to full-width(double-byte) characters.",
      "parameters": [
        {
          "name": "text"
        }
      ]
    },
    "LAMBDA": {
      "description": "Creates a function value, which can be called within formulas.",
      "parameters": [
        {
          "name": "parameter_or_calculation"
        },
        {
          "name": "parameter_or_calculation",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "MAP": {
      "description": "Returns an array formed by mapping each value in the array(s) to a new value by applying a LAMBDA to create a new value.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "lambda_or_array",
          "repeatable": true
        }
      ]
    },
    "REDUCE": {
      "description": "Reduces an array to an accumulated value by applying a LAMBDA to each value and returning the total value in the accumulator.",
      "parameters": [
        {
          "name": "init_value"
        },
        {
          "name": "array"
        },
        {
          "name": "function"
        }
      ]
    },
    "SCAN": {
      "description": "Scans an array by applying a LAMBDA to each value and returns an array that has each intermediate value.",
      "parameters": [
        {
          "name": "init_value",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "array"
        },
        {
          "name": "function"
        }
      ]
    },
    "MAKEARRAY": {
      "description": "Returns a calculated array of a specified row and column size, by applying a LAMBDA.",
      "parameters": [
        {
          "name": "rows"
        },
        {
          "name": "cols"
        },
        {
          "name": "function"
        }
      ]
    },
    "BYCOL": {
      "description": "Applies a LAMBDA to each column and returns an array of the results. For example, if the original array is 3 columns by 2 rows, the returned array is 3 columns by 1 row.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "function"
        }
      ]
    },
    "BYROW": {
      "description": "Applies a LAMBDA to each row and returns an array of the results. For example, if the original array is 3 columns by 2 rows, the returned array is 1 column by 2 rows.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "function"
        }
      ]
    },
    "PERCENTOF": {
      "description": "Returns the percentage of a subset of a given data set.",
      "parameters": [
        {
          "name": "data_subset"
        },
        {
          "name": "data_all"
        }
      ]
    },
    "GROUPBY": {
      "description": "Aggregate values by row fields.",
      "parameters": [
        {
          "name": "row_fields"
        },
        {
          "name": "values"
        },
        {
          "name": "function"
        },
        {
          "name": "field_headers",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "total_depth",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "sort_order",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "filter_array",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "field_relationship",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "PIVOTBY": {
      "description": "Aggregate values by rows and columns.",
      "parameters": [
        {
          "name": "row_fields"
        },
        {
          "name": "col_fields"
        },
        {
          "name": "values"
        },
        {
          "name": "function"
        },
        {
          "name": "field_headers",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "row_total_depth",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "row_sort_order",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "col_total_depth",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "col_sort_order",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "filter_array",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "relative_to",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "ISOMITTED": {
      "description": "Checks whether the value in a LAMBDA is missing and returns TRUE or FALSE.",
      "parameters": [
        {
          "name": "argument"
        }
      ]
    },
    "TEXTBEFORE": {
      "description": "Returns text that occurs before a given character or string.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "delimiter"
        },
        {
          "name": "instance_num",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "match_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "0",
              "description": "Case sensitive"
            },
            {
              "value": "1",
              "description": "Case insensitive"
            }
          ]
        },
        {
          "name": "match_end",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "if_not_found",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "TEXTAFTER": {
      "description": "Returns text that occurs after given character or string.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "delimiter"
        },
        {
          "name": "instance_num",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "match_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "0",
              "description": "Case sensitive"
            },
            {
              "value": "1",
              "description": "Case insensitive"
            }
          ]
        },
        {
          "name": "match_end",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "if_not_found",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "TEXTSPLIT": {
      "description": "Splits text strings by using column and row delimiters.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "col_delimiter"
        },
        {
          "name": "row_delimiter",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "ignore_empty",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "match_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "0",
              "description": "Case sensitive"
            },
            {
              "value": "1",
              "description": "Case insensitive"
            }
          ]
        },
        {
          "name": "pad_with",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SJS.REGEXEXTRACT": {
      "description": "Extracts matching substrings according to a regular expression.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "regular_expression"
        },
        {
          "name": "modifiers",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SJS.REGEXMATCH": {
      "description": "Whether a piece of text matches a regular expression.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "regular_expression"
        },
        {
          "name": "modifiers",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SJS.REGEXREPLACE": {
      "description": "Replaces part of a text string with a different text string using regular expressions.",
      "parameters": [
        {
          "name": "text"
        },
        {
          "name": "regular_expression"
        },
        {
          "name": "replacement"
        },
        {
          "name": "modifiers",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "VSTACK": {
      "description": "Appends arrays vertically and in sequence to return a larger array.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "HSTACK": {
      "description": "Appends arrays horizontally and in sequence to return a larger array.",
      "parameters": [
        {
          "name": "array1"
        },
        {
          "name": "array2",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "TOROW": {
      "description": "Returns the array in a single row.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "ignore",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "scan_by_column",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "TOCOL": {
      "description": "Returns the array in a single column.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "ignore",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "scan_by_column",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "WRAPROWS": {
      "description": "Wraps the provided row or column of values by rows after a specified number of elements to form a new array.",
      "parameters": [
        {
          "name": "vector"
        },
        {
          "name": "wrap_count"
        },
        {
          "name": "pad_with",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "WRAPCOLS": {
      "description": "Wraps the provided row or column of values by columns after a specified number of elements to form a new array.",
      "parameters": [
        {
          "name": "vector"
        },
        {
          "name": "wrap_count"
        },
        {
          "name": "pad_with",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "TAKE": {
      "description": "Returns a specified number of contiguous rows or columns from the start or end of an array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "rows"
        },
        {
          "name": "columns",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "DROP": {
      "description": "Excludes a specified number of rows or columns from the start or end of an array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "rows"
        },
        {
          "name": "columns",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "EXPAND": {
      "description": "Expands or pads an array to specified row and column dimensions.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "rows"
        },
        {
          "name": "columns",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "pad_with",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "CHOOSEROWS": {
      "description": "Returns the specified rows from an array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "row_num1"
        },
        {
          "name": "row_num2",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "CHOOSECOLS": {
      "description": "Returns the specified columns from an array.",
      "parameters": [
        {
          "name": "array"
        },
        {
          "name": "col_num1"
        },
        {
          "name": "col_num2",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "SJS.UUID": {
      "description": "Returns the random UUID.",
      "parameters": [
        {
          "name": "number"
        }
      ]
    },
    "SJS.ENDWITH": {
      "description": "Returns whether str1 ends with str2.",
      "parameters": [
        {
          "name": "within_text"
        },
        {
          "name": "find_text"
        },
        {
          "name": "match_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "0",
              "description": "Case sensitive"
            },
            {
              "value": "1",
              "description": "Case insensitive"
            }
          ]
        }
      ]
    },
    "SJS.STARTWITH": {
      "description": "Returns whether the string str1 starts with str2.",
      "parameters": [
        {
          "name": "within_text"
        },
        {
          "name": "find_text"
        },
        {
          "name": "match_mode",
          "repeatable": false,
          "optional": true,
          "enum": [
            {
              "value": "0",
              "description": "Case sensitive"
            },
            {
              "value": "1",
              "description": "Case insensitive"
            }
          ]
        }
      ]
    },
    "R.INDEX": {
      "description": "(ReportSheet Specific) Returns the index of the specified cell in the parent measured extension.",
      "parameters": [
        {
          "name": "reference"
        },
        {
          "name": "context_reference",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "R.RANK": {
      "description": "(ReportSheet Specific) Returns the rank of the specified cell in the parent node.",
      "parameters": [
        {
          "name": "reference"
        },
        {
          "name": "context_reference",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "order",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "rank_mode",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "SJS.FISCALYEAR": {
      "description": "return fiscal year.",
      "parameters": [
        {
          "name": "date"
        },
        {
          "name": "start_month",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "R.R": {
      "description": "(ReportSheet Specific) Relative offset according to the specified cell.",
      "parameters": [
        {
          "name": "reference"
        },
        {
          "name": "offset"
        }
      ]
    },
    "R.A": {
      "description": "(ReportSheet Specific) Absolute offset based on the specified cell.",
      "parameters": [
        {
          "name": "reference"
        },
        {
          "name": "offset"
        }
      ]
    },
    "R.V": {
      "description": "(ReportSheet Specific) Returns the data of the cell base on the specified offset or context.",
      "parameters": [
        {
          "name": "reference"
        },
        {
          "name": "offset | context_reference | \\\"CurrentPage\\",
          "repeatable": true,
          "optional": true
        }
      ]
    },
    "R.CURRENTPAGE": {
      "description": "(ReportSheet Specific) Returns the current page number of the report."
    },
    "R.PAGESCOUNT": {
      "description": "(ReportSheet Specific) Returns the total number of current reports."
    },
    "R.PROPORTION": {
      "description": "(ReportSheet Specific) Returns the percentage of the specified cell in its parent node.",
      "parameters": [
        {
          "name": "value_reference"
        },
        {
          "name": "context_reference1",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "context_reference2",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "R.CUMULATIVE": {
      "description": "(ReportSheet Specific) Returns the accumulated value of the current cell.",
      "parameters": [
        {
          "name": "value_reference"
        },
        {
          "name": "context_reference1",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "context_reference2",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "R.MOM": {
      "description": "(ReportSheet Specific) Returns the ring data of the target cell.",
      "parameters": [
        {
          "name": "value_reference"
        },
        {
          "name": "context_reference1",
          "repeatable": false,
          "optional": true
        },
        {
          "name": "context_reference2",
          "repeatable": false,
          "optional": true
        }
      ]
    },
    "R.YOY": {
      "description": "(ReportSheet Specific) Returns the year-on-year data of the target cell.",
      "parameters": [
        {
          "name": "value_reference"
        },
        {
          "name": "context_reference1"
        },
        {
          "name": "context_reference2",
          "repeatable": false,
          "optional": true
        }
      ]
    }
  },
  "TableFunctions": {
    "All": {
      "name": "#All",
      "description": "Returns the entire contents of the table, or specified table columns including column headers, data and total rows."
    },
    "Data": {
      "name": "#Data",
      "description": "Returns the data cells of the table or specified table columns."
    },
    "Headers": {
      "name": "#Headers",
      "description": "Returns the columns headers for the table, or specified table columns."
    },
    "Totals": {
      "name": "#Totals",
      "description": "Returns the total rows for the table or specified table columns."
    },
    "thisRow": {
      "name": "#This Row",
      "description": "This row."
    }
  }
}

exports.data = custom_resource;