#!/bin/sh

export PGPASSWORD=postgres_detox

# Run migrations first
npx prisma db push || { echo "Migrations failed"; exit 1; }

# Check if the database is empty
DB_COUNT=$(psql -h posql -p 5432 -U postgres_detox -d detox -t -c "SELECT COUNT(*) FROM sections;" | xargs)

# If DB_COUNT is not empty or zero, seed the database
if [ "$DB_COUNT" -eq 0 ]; then
  echo "Database is empty. Seeding..."
  npm run db-seed || { echo "Seeding failed"; exit 1; }
else
  echo "Database is not empty. Skipping seed."
fi

# Start the application
npm run start
