---
title: "Useful VBA functions"
metaTitle: "VBA Notes"
metaDescription: "VBA Notes"
---

* Begin code as main module with error handling

```vb
''
' @Purpose:  
' @Param  :  
' @Return :　
''
Public Sub Start()
On Err GoTo ErrHandler
    'write code

ExitHandler:
    'Exit 
    Exit Sub

ErrHandler:
    ' go back to the line at ExitHandler:
    Resume ExitHandler

End Sub
  
```

* Removing all modules and class using code
  
```vb
''
' @Purpose:  
' @Param  :  
' @Return :　
''
Public Sub RemoveAllCode()
On Error Resume Next
Dim Element As Object
    For Each Element In Thisworkbook.VBProject.VBComponents
        Thisworkbook.VBProject.VBComponents.Remove Element
    Next
End Sub
  
```

