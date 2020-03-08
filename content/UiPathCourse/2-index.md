---
title: "Best Practices for building projects in UiPath"
metaTitle: "Best Practices for building projects in UiPath"
metaDescription: "Best Practices"
---


Workflow Design

Layout Diagrams
There are 3 diagrams
-Sequence
-Flowchart
-State Machine

1.Sequence:
Sequences have a simple linear representation that flows from top to bottom

2.Flowchart:
Flowcharts offer more flexibility for connecting activities. Because of its free form and visual appeal, flowcharts are best suited for showcasing decision points within a process.

3.State Machine
It is a rather complex structure that can be seen as flowchart with conditional arrows, called transitions. It enables a more compact representation of logic and we found suitable for a standard high level process diagram of transaction al business process template.

Nested if statements are to be avoided to keep the workflow simple and linear
On basis of complexity or structure we can
=>Switch Activity
=>Flow Switch

Naming Conventions
Meaningful names should be assigned to workflow files, activities, arguments and variables in order to accurately describe their usage throughout the project.
-Variables should be upper Camel Case, e.g. FirstName
-Arguments should be in upper Camel Case with a prefix stating the argument types, e.g. in_FileName
-Activity name should concisely reflect the action taken, e.g. Click 'Save' Button
-Except for Main, all workflow names should contain the verb describing what the workflow does, e.g. GetTransactionData
-Comments and Annotations should be used to describe in more details

Selectors
Replace variable parts of an attribute value with wildcards(*)
If an attribute's value is all wildcard then attribute should be removed
Avoid using idx attribute unless it is a very small number 1 or 2

Background Automation
-Use the SimulateType, SimulateClick and SendWindowMessages options for navigation and data entry via the Click and TypeInto activities
-Use the SetText, Check and SelectItem activities for background data entry
-GetText, GetFullText and WebScraping are the output activities that run in the background
-Use ElementExists to verify application state

Robotic Enterprise Framework Template
-This template is built on a State Machine structure
-The Robot loads settings from the config file and Orchestrator assets, keeping them in a dictionary datatype
-It retries automation if any errors are encountered

Settings
To avoid hard coding external settings(like file-paths, URLs), keep them in config file

Credentials
No credentials should be stored in the workflow directly, but rather they should be loaded from safer places like local Windows Credential Store or Online Orchestrator assets

Code reusability
Separation of business logic from the automation components is good principle

How to check quality automation
Modularity
-Separation of concerns with dedicated workflows allows fine granular development and testing
-Extract and share reusable components/workflows between projects

Maintainability
-Good structure and development standards

Readability
-Standardized process structure encouraging clear development practices
-Meaningful names for workflow files, activities and variables

Flexibility
-Keep environment settings in external configuration files/Orchestrator making it easy to run automation in both testing and production environments
Reliability
-Exception handling and error reporting
-Real-time execution progress update

Extensible
-Ready for new use cases to be incorporated

Documenting the process- DSD(Development Specification Documentation)
It should contain the automated process details and focus on two main categories
1.Runtime Guide
2.Development Details
