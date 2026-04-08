# Use Node 20 (stable with Vite, Node 24 can have issues)
FROM node:24

# Set working directory
WORKDIR /src

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose Vite port
EXPOSE 5173

# Start app
CMD ["npm", "run", "dev", "--", "--host"]