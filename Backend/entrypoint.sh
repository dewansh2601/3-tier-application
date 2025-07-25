#for k8s

 #!/bin/sh                   

# Parse DATABASE_URL to extract host and port
# Example DATABASE_URL: postgres://user:password@postgres-service:5432/burgerapp
DB_HOST=$(echo $DATABASE_URL | sed -e 's/.*@\([^:]*\):.*/\1/')
DB_PORT=$(echo $DATABASE_URL | sed -e 's/.*:\([0-9]*\)\/.*/\1/')

echo "⏳ Waiting for PostgreSQL to be ready at $DB_HOST:$DB_PORT..."
until nc -z -v -w30 "$DB_HOST" "$DB_PORT" # Added double quotes for robustness
do
  echo "⏳ Waiting for database connection at $DB_HOST:$DB_PORT..."
  sleep 2
done

echo "📦 Running DB seed..."
npm run seed

echo "🚀 Starting backend app..."
npm start



#               # For docker compose

# #!/bin/sh

# # Use the values from environment variables directly
# echo "⏳ Waiting for PostgreSQL to be ready at $DB_HOST:$DB_PORT..."

# until nc -z -v -w30 "$DB_HOST" "$DB_PORT"
# do
#   echo "⏳ Waiting for database connection at $DB_HOST:$DB_PORT..."
#   sleep 2
# done

# echo "📦 Running DB seed..."
# npm run seed

# echo "🚀 Starting backend app..."
# npm start
