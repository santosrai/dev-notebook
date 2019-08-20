---
title: "VBA Notes"
metaTitle: "Learning variables in VBA"
metaDescription: "Learning variables in VBA"
---

* Removing all modules and class using code
  
  ```
    Public Sub RemoveAllCode()
    On Error Resume Next
    Dim Element As Object
        For Each Element In Thisworkbook.VBProject.VBComponents
            Thisworkbook.VBProject.VBComponents.Remove Element
        Next
    End Sub
  
  ```
