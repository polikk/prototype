# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Prototype Vue Project

## Component & Data UML Diagram

```mermaid
classDiagram
    class AppVue {
        +NavigationPanel
        +RouterView
    }
    class NavigationPanel {
        +items: Array<NavItem>
    }
    class AccordionCustom {
        +data: accordionData
        +CustomBadge
        +MessageCard
        +FileUploadList
    }
    class CustomBadge
    class MessageCard {
        +title
        +message
        +author
        +date
        +photoUrl
        +disabled
    }
    class FileUploadList {
        +files: Array<FileObj>
        +disabled
    }
    class IconButton
    class AddCommentIcon
    class VectorIcon
    class UploadIcon
    class TrashIcon
    class PiniaStore {
        +accordionData
    }
    class accordionData {
        +header: String
        +subsections: Array<Mål>
    }
    class Mål {
        +header: String
        +subsubsections: Array<Tiltak>
    }
    class Tiltak {
        +header: String
        +table: Array<TableRow>
        +messages: Array<Message>
        +files: Array<FileObj>
        +comments: Array<String>
    }
    class TableRow {
        +col1: String
        +col2: String
    }
    class Message {
        +title
        +message
        +author
        +date
        +photoUrl
    }
    class FileObj {
        +file
        +title
        +description
    }
    class NavItem {
        +label
        +route
        +icon
    }

    AppVue --> NavigationPanel
    AppVue --> AccordionCustom
    AccordionCustom --> CustomBadge
    AccordionCustom --> MessageCard
    AccordionCustom --> FileUploadList
    AccordionCustom --> PiniaStore
    AccordionCustom --> IconButton
    AccordionCustom --> AddCommentIcon
    AccordionCustom --> VectorIcon
    AccordionCustom --> UploadIcon
    AccordionCustom --> TrashIcon
    PiniaStore --> accordionData
    accordionData --> Mål
    Mål --> Tiltak
    Tiltak --> TableRow
    Tiltak --> Message
    Tiltak --> FileObj
    Tiltak --> comments
    NavigationPanel --> NavItem
    FileUploadList --> FileObj
    MessageCard --> Message
```

## Data Structure
- `accordionData`: Array of Nivå (sections)
  - `header`: String
  - `subsections`: Array of Mål
    - `header`: String
    - `subsubsections`: Array of Tiltak
      - `header`: String
      - `table`: Array of { col1, col2 }
      - `messages`: Array of { title, message, author, date, photoUrl }
      - `files`: Array of { file, title, description }
      - `comments`: Array of String
- `NavigationPanel`: items[] { label, route, icon? }
- `FileUploadList`: files[] { file, title, description }
- `MessageCard`: { title, message, author, date, photoUrl, disabled }

## Legend
- Components use props and events to communicate.
- Pinia store provides shared state (`accordionData`).
- NavigationPanel controls routing.

---

For a visual diagram, paste the Mermaid code above into a Mermaid live editor or supported Markdown viewer.
