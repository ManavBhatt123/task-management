# TaskFlow — Task Management Dashboard

TaskFlow is a clean, responsive task management application built with React and Tailwind CSS. It helps users organize daily tasks, track progress, manage priorities, and group tasks by project through a simple dashboard.

## Features

- **Dashboard Overview** — View total tasks, tasks in progress, completed tasks, and overdue tasks.
- **Task Management** — Create tasks with a title, project name, priority, and due date.
- **Task Completion** — Mark tasks as completed or reopen them using checkboxes.
- **Search Tasks** — Search tasks by title, project, or priority.
- **Task Filters** — Filter tasks by All, Today, Upcoming, and Completed.
- **Project Overview** — Automatically display unique project names based on existing tasks.
- **Progress Tracking** — Visualize task completion with a circular progress indicator.
- **Upcoming Tasks** — View tasks that still need attention.
- **Responsive UI** — Adapt the layout to different screen sizes.
- **Modern Design** — Clean interface with a white background, blue accents, and subtle borders.

## Tech Stack

- **React** — Component-based user interface.
- **JavaScript (ES6+)** — Application logic and state management.
- **HTML5** — Application structure.
- **CSS3** — Global styling.
- **Tailwind CSS** — Utility-first styling.
- **Vite** — Development server and build tool.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm
- [Git](https://git-scm.com/) (optional, for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd task-management
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   ```text
   http://localhost:5173
   ```

## Project Structure

```text
task-management/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   ├── ProgressCard.jsx
│   │   ├── UpcomingTasks.jsx
│   │   └── ProjectsView.jsx
│   ├── data/
│   │   └── tasks.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## How It Works

### Task Management

Tasks are rendered using reusable React components. Each task contains properties such as its title, project, priority, due date, status, and completion state.

### State Management

React's `useState` manages tasks, navigation, search queries, filters, and the task creation form. The `useMemo` hook helps calculate the filtered task list.

### Dynamic Projects

The Projects page derives a unique list of project names from the current tasks. When a task is added with a new project name, that project appears automatically.

### Progress Tracking

Dashboard statistics and progress indicators are calculated from the task data and update when task completion changes.

## Current Limitations

- Task data is stored in React state and resets when the page is refreshed.
- There is no backend, database, or user authentication.
- Task deletion and editing are not yet implemented.
- Calendar functionality is not included.
- Projects are derived from tasks rather than stored independently.

## Future Improvements

- Persist tasks using `localStorage`.
- Add task editing and deletion.
- Add project-specific task filtering.
- Introduce a calendar view.
- Add custom due dates and improved date handling.
- Add drag-and-drop task organization.
- Improve accessibility and keyboard navigation.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint, if configured |

## Deployment

TaskFlow can be deployed as a static frontend application using platforms such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

Before deployment, run:

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

## License

This project is available for learning and portfolio purposes. Add a license file if you intend to distribute it under specific reuse terms.

---

**Built with React, JavaScript, Tailwind CSS, and Vite.**
