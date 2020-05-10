# Update Procfile from web: node src/server/index.js -> web: node server.js
rm Procfile
touch Procfile
echo 'web: node node server/bootstrap.js' > Procfile