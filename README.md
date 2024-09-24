This Next.js application is a fully featured CMS built on top of Prisma and NextAuth.js, featuring features such as authentication, user management, and content management. The application uses a wide variety of UI components, including an accordion, alert dialogs, avatars, badges, breadcrumb navigation, buttons, carousels, charts, checkboxes, collapsibles, commands, context menus, drawers, dropdown menus, forms, hover cards, input fields, labels, login forms, logout buttons, menubars, navigation menus, paginations, popovers, progress bars, radio groups, resizable panels, scroll areas, searches, selects, separators, sheets, sidebars, skeletons, sliders, spinners, subheadings, tabs, textareas, toasts, toaster, toggle groups, toggles, tooltips, and upload components. The application includes a powerful CMS for managing content such as sections, cards, and social links. It features a robust request management system for handling client inquiries. The application is designed to be highly customizable with a variety of settings, including user roles, authentication, and general settings. 

## Inputs

* The application requires a PostgreSQL database to function. 
* The following environment variables are required: 
    * `DATABASE_URL`: Connection string to your PostgreSQL database. 
    * `AUTH_SECRET`: Secret for signing JWTs. 
    * `AUTH_TRUST_HOST`: Trust host for NextAuth.js. 
    * `ADMIN_EMAIL`: Email of the administrator user. 
    * `ADMIN_PASSWORD`: Password of the administrator user. 
    * `UPLOADTHING_SECRET`: Uploadthing secret key. 
    * `UPLOADTHING_APP_ID`: Uploadthing app ID. 

## Outputs

* The application produces a fully functional website with a robust CMS and request management system.